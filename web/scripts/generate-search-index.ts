import fs from "node:fs";
import path from "node:path";

interface OrgWithIdeas {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  ideas_content: string | null;
  tech_tags: string[];
  topic_tags: string[];
}

interface SearchDocument {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  ideasSnippet: string;
  tech_tags: string[];
  topic_tags: string[];
}

const DATA_DIR = path.join(__dirname, "..", "..", "data");
const OUTPUT_PATH = path.join(__dirname, "..", "public", "search-index.json");

function main() {
  console.log("Generating search index...");

  const raw = fs.readFileSync(
    path.join(DATA_DIR, "organizations_with_ideas.json"),
    "utf-8"
  );
  const orgs: OrgWithIdeas[] = JSON.parse(raw);

  const index: SearchDocument[] = orgs.map((org) => ({
    slug: org.slug,
    name: org.name,
    tagline: org.tagline,
    description: org.description.slice(0, 500),
    ideasSnippet:
      org.ideas_content && org.ideas_content !== "None"
        ? org.ideas_content.slice(0, 2000)
        : "",
    tech_tags: org.tech_tags,
    topic_tags: org.topic_tags,
  }));

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(index));

  const sizeKB = (Buffer.byteLength(JSON.stringify(index)) / 1024).toFixed(0);
  console.log(
    `Search index generated: ${index.length} documents, ${sizeKB} KB`
  );
  console.log(`Written to: ${OUTPUT_PATH}`);
}

main();
