"use client";

import { DATA } from "@/data/resume";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { CreativeProjectCard } from "./project-card";

type Project = (typeof DATA.projects)[number];

const PROJECT_FILTERS = [
  { label: "All", terms: [] },
  { label: "AI", terms: ["ai", "llm", "openai", "claude", "rag", "langchain", "agent"] },
  { label: "Full-stack", terms: ["next", "next.js", "react", "node", "node.js", "full-stack", "typescript", "frontend"] },
  { label: "Backend", terms: ["backend", "api", "fastapi", "node", "node.js", "server", "postgres", "postgresql", "graphql", "prisma"] },
  { label: "Web3", terms: ["cardano", "ton", "solana", "blockchain", "web3", "plutus", "wallet", "smart contract"] },
];

function normalizeSearchText(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function getProjectSearchText(project: Project) {
  const technologies = project.technologies as unknown as string[];

  return normalizeSearchText([
    project.title,
    project.description,
    project.dates,
    ...(technologies ?? []),
  ]
    .filter(Boolean)
    .join(" "));
}

function projectMatches(project: Project, terms: string[]) {
  if (terms.length === 0) return true;

  const haystack = ` ${getProjectSearchText(project)} `;

  return terms.some((term) => haystack.includes(` ${normalizeSearchText(term)} `));
}

export function KineticArchive() {
  const [filter, setFilter] = useState(PROJECT_FILTERS[0].label);
  const activeFilter =
    PROJECT_FILTERS.find((item) => item.label === filter) ?? PROJECT_FILTERS[0];

  const filterCounts = useMemo(
    () =>
      PROJECT_FILTERS.reduce<Record<string, number>>((counts, item) => {
        counts[item.label] = DATA.projects.filter((project) =>
          projectMatches(project, item.terms)
        ).length;
        return counts;
      }, {}),
    []
  );

  const filtered = useMemo(
    () =>
      DATA.projects.filter((project) =>
        projectMatches(project, activeFilter.terms)
      ),
    [activeFilter]
  );

  return (
    <div className="relative">
      <div className="mb-8 flex flex-col justify-between gap-4 border-y border-border py-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            03 - Selected work
          </p>
          <h2 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-foreground sm:text-5xl">
           Projects
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-muted-foreground">
          A focused set of shipped products and systems that map directly to AI, full-stack, backend, and Web3 roles.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {PROJECT_FILTERS.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setFilter(item.label)}
            className={`relative overflow-hidden rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
              filter === item.label
                ? "text-background"
                : "border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="relative z-10">
              {item.label}
              <span className="ml-1 opacity-60">{filterCounts[item.label]}</span>
            </span>
            {filter === item.label && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 rounded-full bg-foreground"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18, transition: { duration: 0.15 } }}
              transition={{ delay: index * 0.03, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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

      {filtered.length === 0 && (
        <div className="rounded-[8px] border border-border bg-card p-6 text-sm text-muted-foreground">
          No projects found for this filter.
        </div>
      )}
    </div>
  );
}

export { KineticArchive as MasonryProjects };
