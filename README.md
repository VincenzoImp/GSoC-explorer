# GSoC 2026 Scraper

Scraper for Google Summer of Code 2026 organizations and project ideas.

Fetches all organizations from the GSoC public API, then scrapes each org's project ideas page and saves everything as structured data (JSON + Markdown).

## Requirements

- Python 3.9+

```bash
python3 -m venv venv
source venv/bin/activate
pip install requests beautifulsoup4 trafilatura markdownify
# Optional: for JS-rendered pages
pip install playwright
playwright install chromium
```

## Usage

```bash
# Full run (all orgs, HTTP only)
python scraper.py

# Use headless browser for JS-rendered pages
python scraper.py --use-browser

# Test with a few orgs
python scraper.py --max-orgs 5

# Filter by technology
python scraper.py --tech python
python scraper.py --tech blockchain

# Filter by topic
python scraper.py --topic security

# Step-by-step
python scraper.py --step orgs      # fetch org list only
python scraper.py --step ideas     # fetch ideas (uses cached org list)
```

## Output

Results are saved to `gsoc_2026_data/`:

| File/Directory | Description |
|---|---|
| `SUMMARY.md` | Table of all organizations (alphabetical) with tech tags and ideas status |
| `organizations.json` | Metadata for all orgs (no ideas content) |
| `organizations_with_ideas.json` | Full data including scraped ideas content |
| `organizations/` | Individual Markdown file per org (overview, tags, links) |
| `project_ideas/` | Individual Markdown file per org (scraped ideas page content) |

## How it works

1. **Fetch orgs** - Queries the GSoC API to get all participating organizations
2. **Scrape ideas** - For each org's ideas URL:
   - GitHub blob/wiki/gist URLs are converted to raw URLs for clean Markdown
   - HTML pages are extracted via trafilatura (primary) or markdownify (fallback)
   - Plain text extraction as last resort
   - Optionally uses Playwright headless browser for JS-rendered pages
3. **Save** - Outputs JSON and Markdown files, plus a summary table
