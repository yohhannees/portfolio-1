"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CardLink {
  type: string;
  href: string;
  icon: React.ReactNode;
}

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  image: string;
  video?: string;
  href?: string;
  links?: readonly CardLink[];
  dates?: string;
  technologies?: readonly string[];
}

export function CreativeProjectCard({ title, description, tags, image, href, links, dates }: Props) {
  const src = image || "";
  const primaryHref = links?.[0]?.href || href || "#";

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group rounded-xl border border-border bg-card overflow-hidden flex flex-col hover:border-foreground/25 hover:shadow-md transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-muted overflow-hidden shrink-0">
        {src && (
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1 gap-2">
        <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
          {dates}
        </p>
        <h3 className="font-black italic uppercase tracking-tighter text-foreground text-base leading-tight">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        {/* Tech tags — max 4, overflow shown as count */}
        <div className="flex gap-1 flex-wrap mt-1">
          {tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[9px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-semibold"
            >
              {t}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-semibold">
              +{tags.length - 4} more
            </span>
          )}
        </div>

        {/* Link */}
        <Link
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-foreground hover:text-muted-foreground transition-colors self-start"
        >
          View Project <ArrowUpRight className="size-3" />
        </Link>
      </div>
    </motion.div>
  );
}
