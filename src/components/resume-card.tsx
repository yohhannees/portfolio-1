"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
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
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  // Determine if the card itself should be a link or a div
  // If there is a description, the main click expands it (div), and the inner link handles navigation.
  // If no description, the whole card navigates (Link).
  const isLink = !description && href;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {isLink ? (
        <Link href={href || "#"} className="block cursor-pointer group">
          <CardContent
            logoUrl={logoUrl}
            altText={altText}
            title={title}
            subtitle={subtitle}
            badges={badges}
            period={period}
            description={description}
            isExpanded={isExpanded}
            href={href}
          />
        </Link>
      ) : (
        <div onClick={handleClick} className="block cursor-pointer group">
          <CardContent
            logoUrl={logoUrl}
            altText={altText}
            title={title}
            subtitle={subtitle}
            badges={badges}
            period={period}
            description={description}
            isExpanded={isExpanded}
            href={href}
          />
        </div>
      )}
    </motion.div>
  );
};

// Extracted content to avoid code duplication between Link and div wrappers
const CardContent = ({
  logoUrl,
  altText,
  title,
  subtitle,
  badges,
  period,
  description,
  isExpanded,
  href,
}: ResumeCardProps & { isExpanded: boolean }) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-neutral-200/70 dark:border-neutral-800/80 bg-white/55 dark:bg-neutral-950/60 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/70 dark:hover:bg-neutral-900/70 hover:shadow-[0_22px_60px_rgba(8,47,73,0.45)]">
      {/* Accent Line on Hover */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-cyan-400 via-sky-500 to-violet-500 opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100" />

      <div className="flex items-start gap-4">
        {/* Avatar Section */}
        <motion.div layout className="flex-none">
          <Avatar className="size-12 border border-white/20 bg-white/80 dark:border-white/10 dark:bg-neutral-950/80 shadow-md shadow-cyan-500/10 transition-transform duration-300 group-hover:scale-105">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain p-1"
            />
            <AvatarFallback className="text-xs font-bold">
              {altText[0]}
            </AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Content Section */}
        <div className="flex-grow space-y-1">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-[15px] leading-none tracking-tight text-foreground transition-colors group-hover:text-cyan-500">
                {title}
              </h3>

              {/* Animated Chevron - Only show if expandable */}
              {description && (
                <ChevronRightIcon
                  className={cn(
                    "size-4 text-muted-foreground transition-all duration-300",
                    isExpanded
                      ? "rotate-90 text-cyan-500"
                      : "-rotate-90 opacity-0 group-hover:rotate-0 group-hover:opacity-100"
                  )}
                />
              )}
            </div>

            {/* Period (Technical Font) */}
            <div className="text-[11px] font-mono text-muted-foreground tabular-nums opacity-70 group-hover:opacity-100 transition-opacity">
              {period}
            </div>
          </div>

          {subtitle && (
            <div className="font-sans text-[13px] font-medium text-foreground/80">
              {subtitle}
            </div>
          )}

          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {badges.map((badge, index) => (
                <Badge
                  variant="outline"
                  className="border-neutral-300/70 bg-white/60 text-[10px] font-medium text-neutral-600 shadow-sm shadow-slate-200/40 backdrop-blur-sm transition-colors dark:border-neutral-700/80 dark:bg-neutral-900/60 dark:text-neutral-300 group-hover:border-cyan-500/40 group-hover:bg-cyan-50/70 dark:group-hover:bg-cyan-950/40"
                  key={index}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Description Accordion */}
      <AnimatePresence>
        {isExpanded && description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-neutral-200  dark:border-neutral-800 text-sm text-muted-foreground leading-relaxed pl-[4rem]">
              {description}

              {/* This is the fixed Link */}
              {href && (
                <div className="mt-3">
                  <Link
                    href={href}
                    target="_blank"
                    // stopPropagation prevents the accordion from toggling when clicking the link
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200 hover:underline transition-colors"
                  >
                    Visit Website <ExternalLinkIcon className="size-3" />
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
