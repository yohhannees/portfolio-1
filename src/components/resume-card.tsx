"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  isLast?: boolean;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  isLast = false,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const canExpand = Boolean(description);

  return (
    <div className="relative">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-7 top-14 bottom-0 hidden w-px bg-border/70 sm:block"
        />
      )}

      <motion.div
        role={canExpand ? "button" : undefined}
        tabIndex={canExpand ? 0 : undefined}
        layout
        onClick={() => canExpand && setIsExpanded((value) => !value)}
        onKeyDown={(event) => {
          if (!canExpand) return;
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsExpanded((value) => !value);
          }
        }}
        className={cn(
          "relative grid w-full gap-4 rounded-[8px] px-0 py-5 text-left transition-colors sm:grid-cols-[56px_1fr_auto] sm:gap-7",
          canExpand && "cursor-pointer hover:bg-secondary/25 sm:px-3",
          !canExpand && "cursor-default",
          isExpanded && "bg-secondary/25 sm:px-3"
        )}
      >
        <div className="flex items-start gap-4 sm:block">
          <motion.div
            whileHover={canExpand ? { scale: 1.04 } : undefined}
            className="relative z-10 flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-white shadow-sm ring-4 ring-background"
          >
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={altText}
                width={56}
                height={56}
                className="size-full object-contain p-2"
              />
            ) : (
              <span className="text-sm font-bold text-muted-foreground">
                {altText.charAt(0)}
              </span>
            )}
          </motion.div>

          <div className="min-w-0 sm:hidden">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black tracking-tight text-foreground">
                {title}
              </h3>
              {canExpand && (
                <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
              )}
            </div>
            {subtitle && (
              <p className="mt-1 text-sm font-semibold text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="hidden min-w-0 sm:block">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-black tracking-tight text-foreground">
              {title}
            </h3>
            {canExpand && (
              <motion.span
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <ChevronRightIcon className="size-4 text-muted-foreground" />
              </motion.span>
            )}
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
            {subtitle && (
              <p className="text-sm font-semibold text-muted-foreground">
                {subtitle}
              </p>
            )}

            {badges?.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>

          <AnimatePresence initial={false}>
            {isExpanded && description && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -4 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -4 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden"
              >
                <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground">
                  {description}
                </p>
                {href && (
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-bold text-foreground transition-colors hover:bg-secondary"
                  >
                    <ExternalLink className="size-3" />
                    View company
                  </Link>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <time className="text-left text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:pt-1 sm:text-right">
          {period}
        </time>

        <AnimatePresence initial={false}>
          {isExpanded && description && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -4 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -4 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden sm:hidden"
            >
              <p className="text-sm leading-7 text-muted-foreground">
                {description}
              </p>
              {href && (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-bold text-foreground transition-colors hover:bg-secondary"
                >
                  <ExternalLink className="size-3" />
                  View company
                </Link>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
