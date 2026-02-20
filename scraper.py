#!/usr/bin/env python3
"""
GSoC 2026 Organization & Project Ideas Scraper
================================================
Uses the GSoC public API to get all organizations, then fetches
each org's project ideas page and dumps the content.

Requirements:
    pip install requests beautifulsoup4 trafilatura
    pip install markdownify          # optional, improves fallback quality
    pip install playwright           # optional, only for --use-browser
    playwright install chromium      # only needed for --use-browser

Usage:
    # Everything at once (simple HTTP fetch for ideas pages):
    python gsoc_scraper.py

    # Use headless browser for JS-rendered ideas pages:
    python gsoc_scraper.py --use-browser

    # Step-by-step:
    python gsoc_scraper.py --step orgs          # fetch org list only
    python gsoc_scraper.py --step ideas         # fetch ideas (uses cached org list)

    # Filter / limit:
    python gsoc_scraper.py --max-orgs 5         # test with 5 orgs
    python gsoc_scraper.py --tech python         # only Python orgs
    python gsoc_scraper.py --tech blockchain     # only blockchain orgs
"""

import argparse
import asyncio
import json
import os
import re
import sys
import time
from pathlib import Path
from datetime import datetime
from typing import Optional
from urllib.parse import urlparse

import requests
import trafilatura
from bs4 import BeautifulSoup

try:
    from markdownify import markdownify as md
    HAS_MARKDOWNIFY = True
except ImportError:
    HAS_MARKDOWNIFY = False

# ─── Config ───────────────────────────────────────────────────────────────
GSOC_API_URL = "https://summerofcode.withgoogle.com/api/program/2026/organizations/"
OUTPUT_DIR = Path("./gsoc_2026_data")
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
}
REQUEST_DELAY = 1.0  # seconds between requests (be polite)


# ─── URL classification & markdown helpers ─────────────────────────────────
def classify_url(url: str) -> tuple:
    """
    Classify a URL and return (strategy, transformed_url).

    Strategies:
      - "github_raw": GitHub blob URL -> raw.githubusercontent.com
      - "github_wiki_raw": GitHub wiki URL -> raw wiki content
      - "gist_raw": GitHub gist -> raw gist content
      - "generic": Use trafilatura for HTML-to-markdown extraction
    """
    parsed = urlparse(url)

    if parsed.netloc == "github.com":
        path_parts = parsed.path.strip("/").split("/")

        # Blob URLs: github.com/{owner}/{repo}/blob/{branch}/{path}
        if len(path_parts) >= 5 and path_parts[2] == "blob":
            owner = path_parts[0]
            repo = path_parts[1]
            branch = path_parts[3]
            file_path = "/".join(path_parts[4:])
            raw_url = f"https://raw.githubusercontent.com/{owner}/{repo}/{branch}/{file_path}"
            return ("github_raw", raw_url)

        # Wiki URLs: github.com/{owner}/{repo}/wiki/{page}
        if len(path_parts) >= 3 and path_parts[2] == "wiki":
            page = path_parts[3] if len(path_parts) > 3 else "Home"
            owner = path_parts[0]
            repo = path_parts[1]
            raw_url = f"https://raw.githubusercontent.com/wiki/{owner}/{repo}/{page}.md"
            return ("github_wiki_raw", raw_url)

    # Gists: gist.github.com/{user}/{id}
    if parsed.netloc == "gist.github.com":
        raw_url = f"https://gist.githubusercontent.com{parsed.path}/raw"
        return ("gist_raw", raw_url)

    return ("generic", url)


def fetch_raw_markdown(url: str) -> Optional[str]:
    """Fetch a URL expected to return raw markdown directly."""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=15, allow_redirects=True)
        resp.raise_for_status()
        content = resp.text.strip()

        if len(content) < 50:
            return None
        # Check we didn't get an HTML error page
        if content.lstrip().startswith("<!DOCTYPE") or content.lstrip().startswith("<html"):
            return None

        return content
    except Exception as e:
        print(f"    Raw fetch failed: {e}")
        return None


def html_to_markdown(html: str, url: str = None) -> Optional[str]:
    """
    Extract main content from HTML and convert to clean markdown.
    Primary: trafilatura. Fallback: BS4 + markdownify.
    """
    # Primary: trafilatura
    try:
        result = trafilatura.extract(
            html,
            output_format="markdown",
            include_links=True,
            include_tables=True,
            include_images=False,
            include_formatting=True,
            include_comments=False,
            favor_recall=True,
            url=url,
        )
        if result and len(result.strip()) > 100:
            return result.strip()
    except Exception as e:
        print(f"    Trafilatura extraction failed: {e}")

    # Fallback: BS4 + markdownify
    if HAS_MARKDOWNIFY:
        try:
            soup = BeautifulSoup(html, "html.parser")
            for tag in soup(["script", "style", "nav", "footer", "header", "aside", "noscript"]):
                tag.decompose()

            main = (
                soup.find("main")
                or soup.find("article")
                or soup.find('[role="main"]')
                or soup.find("div", class_=re.compile(r"content|main|post|entry|wiki", re.I))
                or soup.find("div", id=re.compile(r"content|main|post|entry|wiki", re.I))
            )

            target = main if (main and len(main.get_text(strip=True)) > 200) else (soup.find("body") or soup)
            result = md(str(target), heading_style="ATX", bullets="-", strip=["img"])

            if result and len(result.strip()) > 100:
                result = re.sub(r"\n{3,}", "\n\n", result)
                return result.strip()
        except Exception as e:
            print(f"    Markdownify fallback failed: {e}")

    return None


# ─── Step 1: Fetch organizations from API ─────────────────────────────────
def fetch_organizations() -> list:
    """Fetch all GSoC 2026 organizations from the public API."""
    print("Fetching organizations from GSoC API...")
    print(f"  URL: {GSOC_API_URL}")

    resp = requests.get(GSOC_API_URL, headers=HEADERS, timeout=30)
    resp.raise_for_status()

    data = resp.json()

    # The API may return a list directly or a paginated response
    if isinstance(data, list):
        orgs = data
    elif isinstance(data, dict):
        orgs = data.get("results", data.get("organizations", []))
        # Handle pagination
        next_url = data.get("next")
        while next_url:
            print(f"  Fetching next page...")
            resp = requests.get(next_url, headers=HEADERS, timeout=30)
            resp.raise_for_status()
            page_data = resp.json()
            if isinstance(page_data, dict):
                orgs.extend(page_data.get("results", page_data.get("organizations", [])))
                next_url = page_data.get("next")
            else:
                orgs.extend(page_data)
                break
    else:
        print(f"  WARNING: Unexpected API response type: {type(data)}")
        print(f"  Response preview: {str(data)[:500]}")
        orgs = []

    print(f"  ✓ Found {len(orgs)} organizations\n")
    return orgs


def process_org(org: dict) -> dict:
    """Normalize org data from the API response."""
    # The API response fields can vary slightly between years
    return {
        "name": org.get("name", org.get("title", "Unknown")),
        "slug": org.get("slug", org.get("id", "")),
        "tagline": org.get("tagline", org.get("short_description", "")),
        "description": org.get("description", ""),
        "ideas_url": org.get("ideas_link", org.get("ideas_url", org.get("ideas_list", ""))),
        "website_url": org.get("website_url", org.get("url", "")),
        "irc_channel": org.get("irc_channel", ""),
        "contact_email": org.get("contact_email", ""),
        "mailing_list": org.get("mailing_list", ""),
        "tech_tags": org.get("tech_tags", org.get("technologies", [])),
        "topic_tags": org.get("topic_tags", org.get("topics", [])),
        "category": org.get("category", ""),
        "gsoc_page": f"https://summerofcode.withgoogle.com/programs/2026/organizations/{org.get('slug', org.get('id', ''))}",
        # Keep raw data for debugging
        "_raw_keys": list(org.keys()),
    }


# ─── Step 2: Fetch ideas pages ───────────────────────────────────────────
def fetch_ideas_simple(url: str) -> Optional[str]:
    """Try to fetch an ideas page and convert to clean markdown."""
    # Step 1: Try raw markdown for GitHub/gist URLs
    strategy, target_url = classify_url(url)

    if strategy in ("github_raw", "github_wiki_raw", "gist_raw"):
        content = fetch_raw_markdown(target_url)
        if content:
            return content
        print(f"    Raw markdown unavailable, trying HTML extraction...")

    # Step 2: Fetch HTML and extract markdown
    try:
        resp = requests.get(url, headers=HEADERS, timeout=15, allow_redirects=True)
        resp.raise_for_status()

        # Try trafilatura + markdownify
        result = html_to_markdown(resp.text, url=url)
        if result:
            return result

        # Final fallback: plain text extraction (old behavior)
        soup = BeautifulSoup(resp.text, "html.parser")
        for tag in soup(["script", "style", "nav", "footer", "header", "aside", "noscript"]):
            tag.decompose()
        main = (
            soup.find("main")
            or soup.find("article")
            or soup.find('[role="main"]')
            or soup.find("div", class_=re.compile(r"content|main|post|entry|wiki", re.I))
            or soup.find("div", id=re.compile(r"content|main|post|entry|wiki", re.I))
        )
        if main and len(main.get_text(strip=True)) > 200:
            text = main.get_text(separator="\n", strip=True)
        else:
            body = soup.find("body")
            text = (body or soup).get_text(separator="\n", strip=True)
        text = re.sub(r"\n{3,}", "\n\n", text)

        if len(text.strip()) < 100:
            return None
        return text.strip()

    except Exception as e:
        print(f"    HTTP fetch failed: {e}")
        return None


async def fetch_ideas_browser(urls: list) -> dict:
    """
    Fetch ideas pages using Playwright (headless browser).
    For JS-rendered pages that simple HTTP requests can't handle.
    """
    try:
        from playwright.async_api import async_playwright
    except ImportError:
        print("  ✗ Playwright not installed. Run: pip install playwright && playwright install chromium")
        return {}

    results = {}

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent=HEADERS["User-Agent"],
            viewport={"width": 1280, "height": 720},
        )
        page = await context.new_page()

        for i, (name, url) in enumerate(urls):
            print(f"  [{i+1}/{len(urls)}] 🌐 {name}")
            try:
                await page.goto(url, wait_until="networkidle", timeout=20000)
                await asyncio.sleep(2)

                # Scroll to load lazy content
                for _ in range(10):
                    prev = await page.evaluate("document.body.scrollHeight")
                    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                    await asyncio.sleep(0.5)
                    curr = await page.evaluate("document.body.scrollHeight")
                    if curr == prev:
                        break

                content = await page.content()

                # Use trafilatura/markdownify for proper markdown
                result = html_to_markdown(content, url=url)
                if result:
                    results[name] = result
                else:
                    # Fallback to plain text
                    soup = BeautifulSoup(content, "html.parser")
                    for tag in soup(["script", "style", "nav", "footer", "header"]):
                        tag.decompose()
                    main = (
                        soup.find("main") or soup.find("article") or soup.find('[role="main"]')
                    )
                    text = (main or soup.find("body") or soup).get_text(separator="\n", strip=True)
                    text = re.sub(r"\n{3,}", "\n\n", text)
                    results[name] = text
                print(f"    ✓ ({len(results[name])} chars)")

            except Exception as e:
                print(f"    ✗ {e}")
                results[name] = f"ERROR: {e}"

            await asyncio.sleep(0.5)

        await browser.close()

    return results


def fetch_all_ideas(orgs: list, use_browser: bool = False) -> list:
    """Fetch project ideas for all organizations."""
    total = len(orgs)
    print(f"Fetching project ideas pages for {total} organizations...\n")

    browser_needed = []
    fetched = 0
    skipped = 0

    for i, org in enumerate(orgs):
        url = org.get("ideas_url", "")
        if not url:
            print(f"  [{i+1}/{total}] {org['name']}: — no ideas URL")
            org["ideas_content"] = None
            skipped += 1
            continue

        print(f"  [{i+1}/{total}] {org['name']}")
        print(f"           {url}")

        # Try simple HTTP fetch first
        content = fetch_ideas_simple(url)

        if content:
            org["ideas_content"] = content
            fetched += 1
            print(f"    ✓ ({len(content)} chars)")
        else:
            org["ideas_content"] = None
            if use_browser:
                # Don't queue GitHub raw/wiki/gist URLs for browser — it won't help
                strategy, _ = classify_url(url)
                if strategy == "generic":
                    browser_needed.append((org["name"], url))
                    print(f"    → queued for browser")
                else:
                    print(f"    ✗ raw markdown failed, browser won't help for this URL type")
            else:
                print(f"    ✗ failed (try --use-browser)")

    # Browser-fetch remaining
    if browser_needed:
        print(f"\n{'─'*40}")
        print(f"Browser-fetching {len(browser_needed)} JS-rendered pages...\n")
        browser_results = asyncio.run(fetch_ideas_browser(browser_needed))
        for org in orgs:
            if org["ideas_content"] is None and org["name"] in browser_results:
                content = browser_results[org["name"]]
                if not content.startswith("ERROR"):
                    org["ideas_content"] = content
                    fetched += 1

    print(f"\n  Summary: {fetched} fetched, {skipped} no URL, {total - fetched - skipped} failed")
    return orgs


# ─── Step 3: Save results ────────────────────────────────────────────────
def sanitize_filename(name: str) -> str:
    return re.sub(r"[^\w\s-]", "", name).strip().replace(" ", "_").lower()[:80]


def save_results(orgs: list, output_dir: Path):
    """Save all results to disk in multiple formats."""
    output_dir.mkdir(parents=True, exist_ok=True)
    orgs_dir = output_dir / "organizations"
    orgs_dir.mkdir(exist_ok=True)
    ideas_dir = output_dir / "project_ideas"
    ideas_dir.mkdir(exist_ok=True)

    print(f"\nSaving results to {output_dir}/\n")

    # 1. Master JSON (metadata only, no content blobs)
    master = []
    for org in orgs:
        entry = {k: v for k, v in org.items() if k not in ("ideas_content", "_raw_keys")}
        entry["has_ideas"] = bool(org.get("ideas_content"))
        master.append(entry)

    master_path = output_dir / "organizations.json"
    with open(master_path, "w", encoding="utf-8") as f:
        json.dump(master, f, indent=2, ensure_ascii=False)
    print(f"  📄 {master_path} (metadata)")

    # 2. Full JSON (with ideas content)
    full = [{k: v for k, v in org.items() if k != "_raw_keys"} for org in orgs]
    full_path = output_dir / "organizations_with_ideas.json"
    with open(full_path, "w", encoding="utf-8") as f:
        json.dump(full, f, indent=2, ensure_ascii=False)
    print(f"  📄 {full_path} (full data)")

    # 3. Individual markdown files
    for org in orgs:
        fname = sanitize_filename(org["name"])

        # Org overview
        with open(orgs_dir / f"{fname}.md", "w", encoding="utf-8") as f:
            f.write(f"# {org['name']}\n\n")
            if org.get("tagline"):
                f.write(f"> {org['tagline']}\n\n")
            if org.get("tech_tags"):
                f.write(f"**Technologies:** {', '.join(org['tech_tags'])}\n")
            if org.get("topic_tags"):
                f.write(f"**Topics:** {', '.join(org['topic_tags'])}\n")
            if org.get("category"):
                f.write(f"**Category:** {org['category']}\n")
            f.write(f"**Website:** {org.get('website_url', 'N/A')}\n")
            f.write(f"**Ideas:** {org.get('ideas_url', 'N/A')}\n")
            f.write(f"**GSoC Page:** {org.get('gsoc_page', 'N/A')}\n\n")
            if org.get("description"):
                f.write(f"## Description\n\n{org['description']}\n\n")

        # Ideas dump (separate file)
        if org.get("ideas_content"):
            with open(ideas_dir / f"{fname}.md", "w", encoding="utf-8") as f:
                f.write(f"# {org['name']} — Project Ideas\n\n")
                f.write(f"**Source:** {org.get('ideas_url', 'N/A')}\n")
                f.write(f"**Scraped:** {datetime.now().isoformat()}\n\n---\n\n")
                f.write(org["ideas_content"])
                f.write("\n")

    ideas_count = sum(1 for o in orgs if o.get("ideas_content"))
    print(f"  📁 {orgs_dir}/ ({len(orgs)} files)")
    print(f"  📁 {ideas_dir}/ ({ideas_count} files)")

    # 4. Summary table
    summary_path = output_dir / "SUMMARY.md"
    with open(summary_path, "w", encoding="utf-8") as f:
        f.write(f"# GSoC 2026 — Organizations & Project Ideas\n\n")
        f.write(f"**Scraped:** {datetime.now().isoformat()}\n")
        f.write(f"**Total organizations:** {len(orgs)}\n")
        f.write(f"**Ideas pages scraped:** {ideas_count}\n\n---\n\n")
        f.write(f"| # | Organization | Tech | Ideas |\n")
        f.write(f"|---|-------------|------|-------|\n")
        sorted_orgs = sorted(orgs, key=lambda o: o.get("name", "").lower())
        for i, org in enumerate(sorted_orgs, 1):
            techs = ", ".join(org.get("tech_tags", [])[:4])
            status = "✓" if org.get("ideas_content") else ("link" if org.get("ideas_url") else "—")
            url = org.get("ideas_url", "")
            link = f"[{status}]({url})" if url else status
            f.write(f"| {i} | {org['name']} | {techs} | {link} |\n")

    print(f"  📄 {summary_path}")


# ─── Main ─────────────────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(
        description="GSoC 2026 Organizations & Project Ideas Scraper",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python gsoc_scraper.py                        # full run
  python gsoc_scraper.py --tech python          # only Python orgs
  python gsoc_scraper.py --tech blockchain      # only blockchain orgs
  python gsoc_scraper.py --max-orgs 5           # test with 5
  python gsoc_scraper.py --use-browser          # use Playwright for JS pages
  python gsoc_scraper.py --step orgs            # only fetch org list
  python gsoc_scraper.py --step ideas           # only fetch ideas (needs cached orgs)
        """,
    )
    parser.add_argument("--output-dir", default=str(OUTPUT_DIR), help="Output directory")
    parser.add_argument("--step", choices=["orgs", "ideas", "all"], default="all")
    parser.add_argument("--max-orgs", type=int, help="Limit number of orgs")
    parser.add_argument("--tech", type=str, help="Filter by technology tag")
    parser.add_argument("--topic", type=str, help="Filter by topic tag")
    parser.add_argument("--use-browser", action="store_true",
                        help="Use Playwright for JS-rendered ideas pages")
    parser.add_argument("--orgs-file", type=str, help="Load orgs from file (skip API)")
    args = parser.parse_args()

    output_dir = Path(args.output_dir)

    print(f"\n{'═'*60}")
    print(f"  GSoC 2026 Scraper")
    print(f"{'═'*60}")
    print(f"  Output:  {output_dir}")
    print(f"  Time:    {datetime.now().isoformat()}")
    print(f"  Browser: {'yes' if args.use_browser else 'no (HTTP only)'}")
    print(f"{'═'*60}\n")

    # ── Load / fetch organizations ──
    orgs = None

    if args.step in ("orgs", "all"):
        raw_orgs = fetch_organizations()
        orgs = [process_org(o) for o in raw_orgs]
    elif args.orgs_file:
        with open(args.orgs_file, "r", encoding="utf-8") as f:
            orgs = json.load(f)
        print(f"Loaded {len(orgs)} orgs from {args.orgs_file}")
    else:
        cache = output_dir / "organizations.json"
        if cache.exists():
            with open(cache, "r", encoding="utf-8") as f:
                orgs = json.load(f)
            print(f"Loaded {len(orgs)} orgs from cache ({cache})")
        else:
            print("No cached org list found. Run with --step orgs first, or omit --step.")
            sys.exit(1)

    # ── Apply filters ──
    if args.tech:
        tech = args.tech.lower()
        orgs = [o for o in orgs if any(tech in t.lower() for t in o.get("tech_tags", []))]
        print(f"Filtered by tech '{args.tech}': {len(orgs)} orgs")

    if args.topic:
        topic = args.topic.lower()
        orgs = [o for o in orgs if any(topic in t.lower() for t in o.get("topic_tags", []))]
        print(f"Filtered by topic '{args.topic}': {len(orgs)} orgs")

    if args.max_orgs:
        orgs = orgs[:args.max_orgs]
        print(f"Limited to {args.max_orgs} orgs")

    if not orgs:
        print("No organizations to process!")
        sys.exit(0)

    # ── Fetch ideas ──
    if args.step in ("ideas", "all"):
        orgs = fetch_all_ideas(orgs, use_browser=args.use_browser)

    # ── Save ──
    save_results(orgs, output_dir)

    print(f"\n{'═'*60}")
    print(f"  Done! {len(orgs)} organizations processed.")
    ideas = sum(1 for o in orgs if o.get("ideas_content"))
    print(f"  Ideas pages scraped: {ideas}/{len(orgs)}")
    print(f"  Output: {output_dir}/")
    print(f"{'═'*60}\n")


if __name__ == "__main__":
    main()