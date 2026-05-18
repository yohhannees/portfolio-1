"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export function CreativeProjectCard({
  title,
  description,
  tags,
  image,
  href,
  links,
  dates,
}: Props) {
  const src = image || "";
  const primaryHref = links?.[0]?.href || href || "#";

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-border bg-card transition-all duration-300 hover:border-foreground/25 hover:shadow-lg hover:shadow-black/10"
    >
      <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-muted">
        {src && (
          <Image
            src={src}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          {dates}
        </p>
        <h3 className="text-lg font-black leading-tight tracking-tight text-foreground">
          {title}
        </h3>
        <p className="line-clamp-4 flex-1 text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        <div className="mt-1 flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
              +{tags.length - 3}
            </span>
          )}
        </div>

        <Link
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 self-start rounded-full border border-border bg-background px-3 py-1.5 text-xs font-bold text-foreground transition-colors hover:bg-secondary"
        >
          View project
          <ArrowUpRight className="size-3" />
        </Link>
      </div>
    </motion.div>
  );
}
