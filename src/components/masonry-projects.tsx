"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export function MasonryProjects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const freq = new Map<string, number>();
    DATA.projects.forEach((p) =>
      p.technologies.forEach((t) => freq.set(t, (freq.get(t) ?? 0) + 1))
    );
    return Array.from(freq.entries())
      .filter(([, count]) => count >= 2)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, []);

  const filtered = activeTag
    ? DATA.projects.filter((p) =>
        (p.technologies as readonly string[]).includes(activeTag)
      )
    : DATA.projects;

  return (
    <div>
      {/* Scrollable filter bar */}
      <div className="relative mb-8">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTag(null)}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200",
              !activeTag
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
            )}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={cn(
                "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200",
                activeTag === tag
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
        {/* right fade for scroll affordance */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* Masonry grid — key retriggers stagger on filter change */}
      <div
        key={activeTag ?? "all"}
        className="columns-1 sm:columns-2 lg:columns-3 gap-4"
      >
        {filtered.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.055,
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="break-inside-avoid mb-4"
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-muted-foreground py-16">
          No projects match this filter.
        </p>
      )}
    </div>
  );
}
