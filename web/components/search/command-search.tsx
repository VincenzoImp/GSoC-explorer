"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, Lightbulb } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import type { SearchDocument } from "@/lib/types";
import type { FuseResult, default as FuseType } from "fuse.js";

export function CommandSearch({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<FuseResult<SearchDocument>[]>([]);
  const [searcher, setSearcher] = useState<FuseType<SearchDocument> | null>(null);

  // Lazy load the search index on first open
  useEffect(() => {
    if (open && !searcher) {
      import("@/lib/search").then(({ getSearcher }) => {
        getSearcher().then(setSearcher);
      });
    }
  }, [open, searcher]);

  // Search when query changes
  useEffect(() => {
    if (!searcher || !query.trim()) {
      setResults([]);
      return;
    }
    const results = searcher.search(query, { limit: 12 });
    setResults(results);
  }, [query, searcher]);

  const handleSelect = useCallback(
    (slug: string, type: "org" | "ideas") => {
      onOpenChange(false);
      setQuery("");
      if (type === "ideas") {
        router.push(`/ideas/${slug}`);
      } else {
        router.push(`/organizations/${slug}`);
      }
    },
    [router, onOpenChange]
  );

  // Keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search organizations, technologies, project ideas..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>
          {!searcher ? "Loading search index..." : "No results found."}
        </CommandEmpty>

        {results.length > 0 && (
          <>
            <CommandGroup heading="Organizations">
              {results.map((r) => (
                <CommandItem
                  key={`org-${r.item.slug}`}
                  value={`org-${r.item.slug}`}
                  onSelect={() => handleSelect(r.item.slug, "org")}
                  className="flex items-center gap-2"
                >
                  <Building2 className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="flex flex-col">
                    <span className="font-medium">{r.item.name}</span>
                    <span className="text-xs text-muted-foreground line-clamp-1">
                      {r.item.tagline}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandGroup heading="Project Ideas">
              {results
                .filter((r) => r.item.ideasSnippet)
                .slice(0, 8)
                .map((r) => (
                  <CommandItem
                    key={`ideas-${r.item.slug}`}
                    value={`ideas-${r.item.slug}`}
                    onSelect={() => handleSelect(r.item.slug, "ideas")}
                    className="flex items-center gap-2"
                  >
                    <Lightbulb className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {r.item.name} — Ideas
                      </span>
                      <span className="text-xs text-muted-foreground line-clamp-1">
                        {r.item.tech_tags.slice(0, 3).join(", ")}
                      </span>
                    </div>
                  </CommandItem>
                ))}
            </CommandGroup>
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
}
