"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon, ExternalLink } from "lucide-react";
import Image from "next/image";
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
  isLast?: boolean; // Added to handle timeline line logic
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

  const handleClick = (e: React.MouseEvent) => {
    if (description) {
      setIsExpanded((v) => !v);
    }
  };

  return (
    <div className="relative group">
      {/* Timeline Line Connector */}
      {!isLast && (
        <span 
          className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-border via-border/50 to-transparent" 
          aria-hidden="true" 
        />
      )}

      <motion.div
        layout
        onClick={handleClick}
        className={cn(
          "relative flex gap-4 p-4 rounded-xl transition-all duration-300",
          description && "cursor-pointer hover:bg-secondary/50",
          isExpanded && "bg-secondary/50 shadow-sm ring-1 ring-border"
        )}
      >
        {/* Logo Section with Animation */}
        <div className="relative z-10 shrink-0">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="size-10 rounded-full overflow-hidden bg-white border-2 border-background shadow-md flex items-center justify-center ring-1 ring-border"
          >
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={altText}
                width={40}
                height={40}
                className="w-full h-full object-contain p-1"
              />
            ) : (
              <span className="text-xs font-bold text-muted-foreground">{altText.charAt(0)}</span>
            )}
          </motion.div>
        </div>

        <div className="flex-1 min-w-0 pt-0.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base tracking-tight text-foreground leading-none">
                {title}
              </h3>
              
              {/* Animated Chevron for Expandable content */}
              {description && (
                <motion.div
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ChevronRightIcon className="size-4 text-muted-foreground/50" />
                </motion.div>
              )}
            </div>
            
            <time className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/80 sm:text-right">
              {period}
            </time>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {subtitle && (
              <p className="text-sm font-medium text-muted-foreground">
                {subtitle}
              </p>
            )}
            
            <div className="flex flex-wrap gap-1">
              {badges?.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-primary ring-1 ring-inset ring-primary/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Expandable Content */}
          <AnimatePresence initial={false}>
            {isExpanded && description && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="pt-4 text-sm text-muted-foreground leading-relaxed border-t border-border/50 mt-4">
                  {description}
                  
                  {href && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4"
                    >
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground bg-background px-3 py-1.5 rounded-lg border border-border hover:bg-secondary transition-colors"
                      >
                        <ExternalLink className="size-3" />
                        View Project
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};