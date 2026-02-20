import Fuse from "fuse.js";
import type { SearchDocument } from "./types";

let fuseInstance: Fuse<SearchDocument> | null = null;
let indexPromise: Promise<SearchDocument[]> | null = null;

async function loadIndex(): Promise<SearchDocument[]> {
  const resp = await fetch("/search-index.json");
  return resp.json();
}

export async function getSearcher(): Promise<Fuse<SearchDocument>> {
  if (fuseInstance) return fuseInstance;

  if (!indexPromise) {
    indexPromise = loadIndex();
  }

  const docs = await indexPromise;

  fuseInstance = new Fuse(docs, {
    keys: [
      { name: "name", weight: 3 },
      { name: "tagline", weight: 2 },
      { name: "description", weight: 1.5 },
      { name: "ideasSnippet", weight: 1 },
      { name: "tech_tags", weight: 1 },
      { name: "topic_tags", weight: 1 },
    ],
    threshold: 0.3,
    includeMatches: true,
    minMatchCharLength: 2,
  });

  return fuseInstance;
}
