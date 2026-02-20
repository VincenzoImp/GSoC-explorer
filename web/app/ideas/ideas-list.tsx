"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TagBadge } from "@/components/organizations/tag-badge";
import { EmptyState } from "@/components/shared/empty-state";
import type { Organization } from "@/lib/types";

export function IdeasList({ orgs }: { orgs: Organization[] }) {
  const [query, setQuery] = useState("");

  const filtered = query
    ? orgs.filter((org) => {
        const q = query.toLowerCase();
        return (
          org.name.toLowerCase().includes(q) ||
          org.tagline.toLowerCase().includes(q) ||
          org.tech_tags.some((t) => t.toLowerCase().includes(q)) ||
          org.topic_tags.some((t) => t.toLowerCase().includes(q))
        );
      })
    : orgs;

  return (
    <>
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by name, technology, or topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-9 pl-8"
        />
      </div>

      <p className="mb-4 text-sm text-muted-foreground">
        Showing {filtered.length} of {orgs.length} organizations
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((org) => (
            <Link
              key={org.slug}
              href={`/ideas/${org.slug}`}
              className="group flex flex-col gap-2 rounded-lg border bg-card p-4 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold leading-tight group-hover:underline">
                  {org.name}
                </h3>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </div>
              {org.tagline && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {org.tagline}
                </p>
              )}
              {org.tech_tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {org.tech_tags.slice(0, 3).map((tag) => (
                    <TagBadge key={tag} tag={tag} type="tech" size="sm" />
                  ))}
                  {org.tech_tags.length > 3 && (
                    <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      +{org.tech_tags.length - 3}
                    </span>
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </>
  );
}
