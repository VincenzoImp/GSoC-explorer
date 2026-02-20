"use client";

import { useMemo } from "react";
import GithubSlugger from "github-slugger";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function extractHeadings(markdown: string): TocItem[] {
  const headings: TocItem[] = [];
  const slugger = new GithubSlugger();
  const lines = markdown.split("\n");

  for (const line of lines) {
    const match = line.match(/^(#{1,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2]
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // remove markdown links
        .replace(/[*_`]/g, "") // remove emphasis markers
        .trim();
      const id = slugger.slug(text);
      headings.push({ id, text, level });
    }
  }

  return headings;
}

export function IdeasToc({ content }: { content: string }) {
  const headings = useMemo(() => extractHeadings(content), [content]);

  if (headings.length < 3) return null;

  return (
    <nav className="sticky top-20">
      <h4 className="mb-3 text-sm font-semibold">On this page</h4>
      <ul className="flex max-h-[calc(100vh-8rem)] flex-col gap-1 overflow-y-auto text-sm">
        {headings.slice(0, 50).map((heading, i) => (
          <li key={`${heading.id}-${i}`}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "block truncate text-muted-foreground transition-colors hover:text-foreground",
                heading.level === 1 && "font-medium text-foreground",
                heading.level === 2 && "pl-3",
                heading.level === 3 && "pl-6 text-xs"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
