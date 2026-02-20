import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsBar } from "@/components/shared/stats-bar";
import { getStats, getTagStats } from "@/lib/data";

export default function HomePage() {
  const stats = getStats();
  const topTech = getTagStats("tech").slice(0, 20);
  const topTopics = getTagStats("topic").slice(0, 15);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      {/* Hero */}
      <section className="py-16 text-center sm:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          GSoC 2026 Explorer
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Browse, search, and filter all {stats.totalOrgs} organizations
          and their project ideas for{" "}
          <a
            href="https://summerofcode.withgoogle.com/programs/2026/organizations"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4"
          >
            Google Summer of Code 2026
          </a>
          .
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/organizations">
              Browse Organizations
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/ideas">Explore Ideas</Link>
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-12">
        <StatsBar
          totalOrgs={stats.totalOrgs}
          totalIdeas={stats.totalIdeas}
          totalTechTags={stats.totalTechTags}
          totalTopicTags={stats.totalTopicTags}
        />
      </section>

      {/* Popular Technologies */}
      <section className="pb-12">
        <h2 className="mb-4 text-xl font-semibold">Popular Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {topTech.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/organizations?tech=${encodeURIComponent(tag)}`}
              className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              {tag}
              <span className="text-xs text-muted-foreground">({count})</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Topics */}
      <section className="pb-16">
        <h2 className="mb-4 text-xl font-semibold">Popular Topics</h2>
        <div className="flex flex-wrap gap-2">
          {topTopics.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/organizations?topic=${encodeURIComponent(tag)}`}
              className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              {tag}
              <span className="text-xs text-muted-foreground">({count})</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
