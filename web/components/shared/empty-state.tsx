import { SearchX } from "lucide-react";

export function EmptyState({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <SearchX className="h-12 w-12 text-muted-foreground/50" />
      <p className="text-lg font-medium text-muted-foreground">
        {message || "No results found"}
      </p>
      <p className="text-sm text-muted-foreground/70">
        Try adjusting your search or filters
      </p>
    </div>
  );
}
