import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe,
  Lightbulb,
} from "lucide-react";
import { IdeasRenderer } from "@/components/ideas/ideas-renderer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TagBadge } from "@/components/organizations/tag-badge";
import { getOrganizationBySlug, getAllSlugs } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const org = getOrganizationBySlug(slug);
  if (!org) return { title: "Not Found" };
  return {
    title: org.name,
    description: org.tagline || org.description.slice(0, 160),
  };
}

export default async function OrganizationPage({ params }: PageProps) {
  const { slug } = await params;
  const org = getOrganizationBySlug(slug);
  if (!org) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Back link */}
      <Link
        href="/organizations"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All Organizations
      </Link>

      {/* Header */}
      <h1 className="text-3xl font-bold">{org.name}</h1>
      {org.tagline && (
        <p className="mt-2 text-lg text-muted-foreground">{org.tagline}</p>
      )}

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        {org.has_ideas && (
          <Button asChild>
            <Link href={`/ideas/${org.slug}`}>
              <Lightbulb className="mr-1.5 h-4 w-4" />
              View Project Ideas
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        )}
        {org.website_url && (
          <Button variant="outline" asChild>
            <a
              href={org.website_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="mr-1.5 h-4 w-4" />
              Website
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        )}
        <Button variant="outline" asChild>
          <a href={org.gsoc_page} target="_blank" rel="noopener noreferrer">
            GSoC Page
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </Button>
        {org.ideas_url && !org.has_ideas && (
          <Button variant="outline" asChild>
            <a href={org.ideas_url} target="_blank" rel="noopener noreferrer">
              Ideas Page (external)
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        )}
      </div>

      <Separator className="my-8" />

      {/* Tags */}
      {org.tech_tags.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {org.tech_tags.map((tag) => (
              <TagBadge key={tag} tag={tag} type="tech" />
            ))}
          </div>
        </div>
      )}

      {org.topic_tags.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Topics
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {org.topic_tags.map((tag) => (
              <TagBadge key={tag} tag={tag} type="topic" />
            ))}
          </div>
        </div>
      )}

      <Separator className="my-8" />

      {/* Description */}
      {org.description && (
        <div>
          <h2 className="mb-3 text-lg font-semibold">About</h2>
          <IdeasRenderer content={org.description} />
        </div>
      )}
    </div>
  );
}
