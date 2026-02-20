"use client";

import { cn } from "@/lib/utils";
import { getTagColor } from "@/lib/constants";

interface TagBadgeProps {
  tag: string;
  type?: "tech" | "topic";
  onClick?: () => void;
  active?: boolean;
  size?: "sm" | "default";
}

export function TagBadge({
  tag,
  type = "tech",
  onClick,
  active,
  size = "default",
}: TagBadgeProps) {
  const colorClass =
    type === "tech"
      ? getTagColor(tag)
      : "bg-secondary text-secondary-foreground";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-all",
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-0.5 text-xs",
        onClick ? "cursor-pointer hover:opacity-80" : "cursor-default",
        active && "ring-2 ring-primary ring-offset-1",
        colorClass
      )}
    >
      {tag}
    </button>
  );
}
