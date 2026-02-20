import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/lib/constants";
import { getStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the GSoC 2026 Explorer — why it exists and how it works.",
};

export default function AboutPage() {
  const stats = getStats();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        GSoC 2026 Explorer is an open-source platform that brings together all{" "}
        <strong className="text-foreground">{stats.totalOrgs}</strong>{" "}
        organizations and their project ideas from{" "}
        <a
          href="https://summerofcode.withgoogle.com/programs/2026/organizations"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline underline-offset-4"
        >
          Google Summer of Code 2026
        </a>{" "}
        into a single, searchable, and filterable interface.
      </p>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Why use this instead of the official site?
        </h2>
        <p className="text-muted-foreground">
          The official GSoC website lists organizations but links out to
          external pages for project ideas — scattered across Google Docs,
          GitHub wikis, GitLab issues, and various websites. This makes it hard
          to search, compare, and explore what&apos;s available.
        </p>
        <p className="text-muted-foreground">
          GSoC 2026 Explorer solves this by:
        </p>
        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
          <li>
            <strong className="text-foreground">
              Full-text search across everything
            </strong>{" "}
            — press Cmd+K (or Ctrl+K) to search across all organization names,
            descriptions, technologies, topics, and project ideas content at
            once
          </li>
          <li>
            <strong className="text-foreground">Advanced combined filters</strong>{" "}
            — filter by technology and topic tags simultaneously, with shareable
            URLs (e.g. <code className="text-xs">?tech=python&topic=web</code>)
          </li>
          <li>
            <strong className="text-foreground">
              All ideas in one place
            </strong>{" "}
            — every ideas page has been scraped and rendered in a consistent
            format, with table of contents for easy navigation
          </li>
          <li>
            <strong className="text-foreground">
              LLM-ready structured data
            </strong>{" "}
            — the repository contains all data in JSON and Markdown, ready to be
            fed to language models for analyzing opportunities, matching skills,
            or generating summaries
          </li>
          <li>
            <strong className="text-foreground">
              Fast and responsive
            </strong>{" "}
            — static site with instant filtering, dark mode, and no page reloads
          </li>
        </ul>
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Data overview</h2>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>
            <strong className="text-foreground">{stats.totalOrgs}</strong>{" "}
            organizations
          </li>
          <li>
            <strong className="text-foreground">{stats.totalIdeas}</strong>{" "}
            ideas pages successfully scraped
          </li>
          <li>
            <strong className="text-foreground">{stats.totalTechTags}</strong>{" "}
            unique technologies
          </li>
          <li>
            <strong className="text-foreground">{stats.totalTopicTags}</strong>{" "}
            unique topics
          </li>
        </ul>
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">How the data was collected</h2>
        <p className="text-muted-foreground">
          A Python scraper queries the{" "}
          <a
            href="https://summerofcode.withgoogle.com/api/program/2026/organizations/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4"
          >
            GSoC public API
          </a>{" "}
          to get all participating organizations, then fetches each
          organization&apos;s ideas page using multiple strategies:
        </p>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>
            GitHub blob/wiki/gist URLs converted to raw URLs for clean Markdown
          </li>
          <li>Google Docs exported as HTML or plain text</li>
          <li>GitHub and GitLab issues fetched via CLI/API</li>
          <li>HTML pages extracted via trafilatura or markdownify</li>
          <li>
            Playwright headless browser for JavaScript-rendered pages
          </li>
        </ul>
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Source code</h2>
        <p className="text-muted-foreground">
          Both the scraper and this website are open source. The repository also
          contains the raw scraped data in Markdown and JSON format.
        </p>
        <a
          href={SITE.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4"
        >
          View on GitHub
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </section>
    </div>
  );
}
