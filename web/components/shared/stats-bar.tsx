import { Building2, Code2, Tags, Lightbulb } from "lucide-react";

interface StatsBarProps {
  totalOrgs: number;
  totalIdeas: number;
  totalTechTags: number;
  totalTopicTags: number;
}

export function StatsBar({
  totalOrgs,
  totalIdeas,
  totalTechTags,
  totalTopicTags,
}: StatsBarProps) {
  const stats = [
    { icon: Building2, value: totalOrgs, label: "Organizations" },
    { icon: Lightbulb, value: totalIdeas, label: "Ideas Pages" },
    { icon: Code2, value: totalTechTags, label: "Technologies" },
    { icon: Tags, value: totalTopicTags, label: "Topics" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center gap-1 rounded-lg border bg-card p-4 text-card-foreground"
        >
          <stat.icon className="h-5 w-5 text-muted-foreground" />
          <span className="text-2xl font-bold">{stat.value}</span>
          <span className="text-xs text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
