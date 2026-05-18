"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreativeProjectCard } from "./project-card";
import { DATA } from "@/data/resume";

export function KineticArchive() {
  const [filter, setFilter] = useState("All");

  const allTechs = Array.from(
    new Set(DATA.projects.flatMap((p) => p.technologies as unknown as string[]))
  ).sort();
  const categories = ["All", ...allTechs];

  const filtered =
    filter === "All"
      ? DATA.projects
      : DATA.projects.filter((p) =>
          (p.technologies as unknown as string[]).includes(filter)
        );

  return (
    <div className="relative">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
          05 — Selected Work
        </p>
        <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-none text-foreground">
          Projects
        </h2>
      </div>

      {/* Filter pills — horizontally scrollable on mobile, wrapping on desktop */}
      <div className="mb-8 overflow-x-auto scrollbar-none">
        <div className="flex gap-2 flex-wrap min-w-max sm:min-w-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative shrink-0 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-200 ${
                filter === cat
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30"
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {filter === cat && (
                <motion.div
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-foreground rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Uniform 3-column grid — no gaps, no bento irregularity */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.15 } }}
              transition={{ delay: idx * 0.03, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <CreativeProjectCard
                {...(project as any)}
                image={(project as any).image || (project as any).video}
                tags={project.technologies as unknown as string[]}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export { KineticArchive as MasonryProjects };
