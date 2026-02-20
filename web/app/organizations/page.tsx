import { Suspense } from "react";
import type { Metadata } from "next";
import { getOrganizations, getTagStats } from "@/lib/data";
import { OrganizationsView } from "@/components/organizations/organizations-view";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Organizations",
  description:
    "Browse and filter all GSoC 2026 organizations by technology and topic.",
};

function OrganizationsContent() {
  const organizations = getOrganizations();
  const techTags = getTagStats("tech");
  const topicTags = getTagStats("topic");

  return (
    <OrganizationsView
      organizations={organizations}
      techTags={techTags}
      topicTags={topicTags}
    />
  );
}

export default function OrganizationsPage() {
  const organizations = getOrganizations();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold sm:text-3xl">Organizations</h1>
        <p className="mt-1 text-muted-foreground">
          All {organizations.length} organizations participating in GSoC 2026.
          Filter by technology or topic to find your match.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <Skeleton key={i} className="h-48 rounded-lg" />
            ))}
          </div>
        }
      >
        <OrganizationsContent />
      </Suspense>
    </div>
  );
}
