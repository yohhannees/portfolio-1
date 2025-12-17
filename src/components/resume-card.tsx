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
    <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 p-4 transition-all duration-300 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 hover:shadow-lg dark:hover:shadow-neutral-900/50">
      {/* Accent Line on Hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 scale-y-0 transition-transform duration-300 group-hover:scale-y-100 origin-top" />

      <div className="flex items-start gap-4">
        {/* Avatar Section */}
        <motion.div layout className="flex-none">
          <Avatar className="size-12 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black shadow-sm group-hover:scale-105 transition-transform duration-300">
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
              <h3 className="font-bold text-base leading-none tracking-tight transition-colors">
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
            <div className="text-xs font-mono text-muted-foreground tabular-nums opacity-70 group-hover:opacity-100 transition-opacity">
              {period}
            </div>
          </div>

          {subtitle && (
            <div className="font-sans text-sm text-foreground/80 font-medium">
              {subtitle}
            </div>
          )}

          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {badges.map((badge, index) => (
                <Badge
                  variant="outline"
                  className="text-[10px] px-2 py-0.5 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 group-hover:border-cyan-500/30   transition-colors"
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
                    className="inline-flex items-center gap-1 text-xs text-white   font-medium hover:underline transition-colors"
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
