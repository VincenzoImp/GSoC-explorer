import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/lib/constants";
import { getStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "About the GSoC 2026 Explorer — how the data was collected.",
};

export default function AboutPage() {
  const stats = getStats();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        GSoC 2026 Explorer is an open-source tool that aggregates all
        organizations and project ideas from Google Summer of Code 2026 into a
        single, searchable interface.
      </p>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Data Overview</h2>
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
        <h2 className="text-xl font-semibold">Source Code</h2>
        <p className="text-muted-foreground">
          Both the scraper and this website are open source.
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
