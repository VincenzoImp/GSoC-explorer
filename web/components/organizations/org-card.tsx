import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TagBadge } from "./tag-badge";
import type { Organization } from "@/lib/types";

export function OrgCard({ org }: { org: Organization }) {
  const maxTech = 4;
  const maxTopic = 3;
  const extraTech = Math.max(0, org.tech_tags.length - maxTech);
  const extraTopic = Math.max(0, org.topic_tags.length - maxTopic);

  return (
    <Card className="group flex h-full flex-col transition-shadow hover:shadow-md">
      <CardHeader className="pb-2">
        <Link
          href={`/organizations/${org.slug}`}
          className="text-base font-semibold leading-tight hover:underline"
        >
          {org.name}
        </Link>
        {org.tagline && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {org.tagline}
          </p>
        )}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3 pt-0">
        {org.tech_tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {org.tech_tags.slice(0, maxTech).map((tag) => (
              <TagBadge key={tag} tag={tag} type="tech" size="sm" />
            ))}
            {extraTech > 0 && (
              <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                +{extraTech}
              </span>
            )}
          </div>
        )}

        {org.topic_tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {org.topic_tags.slice(0, maxTopic).map((tag) => (
              <TagBadge key={tag} tag={tag} type="topic" size="sm" />
            ))}
            {extraTopic > 0 && (
              <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                +{extraTopic}
              </span>
            )}
          </div>
        )}

        <div className="mt-auto pt-2">
          {org.has_ideas ? (
            <Link
              href={`/ideas/${org.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View Ideas
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <span className="text-xs text-muted-foreground">
              Ideas hosted externally
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
