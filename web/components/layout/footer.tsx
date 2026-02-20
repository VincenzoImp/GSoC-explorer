import { ExternalLink } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-6 text-center text-sm text-muted-foreground sm:px-6">
        <p>
          Data sourced from{" "}
          <a
            href="https://summerofcode.withgoogle.com/programs/2026/organizations"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
          >
            Google Summer of Code 2026
            <ExternalLink className="h-3 w-3" />
          </a>
        </p>
        <p>
          <a
            href={SITE.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
          >
            View on GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
        </p>
      </div>
    </footer>
  );
}
