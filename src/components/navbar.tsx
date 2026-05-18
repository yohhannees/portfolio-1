"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "#hero", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-[80] px-4">
      <div className="pointer-events-auto mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 rounded-[8px] border border-border/80 bg-background/80 px-3 shadow-2xl shadow-black/10 backdrop-blur-xl">
        <Link
          href="#hero"
          className="group flex h-10 items-center gap-3 rounded-[8px] border border-border bg-secondary/45 px-2 pr-4 transition-colors hover:bg-secondary"
          aria-label="Home"
        >
          <span className="flex size-7 items-center justify-center rounded-[6px] bg-foreground text-xs font-black text-background">
            {DATA.initials}
          </span>
          <span className="hidden text-[10px] font-mono uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground sm:block">
            Portfolio
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-secondary/30 px-1.5 py-1 lg:flex">
            {Object.entries(DATA.contact.social)
              .filter(
                ([name, social]) =>
                  social.navbar && ["GitHub", "Telegram"].includes(name)
              )
              .map(([name, social]) => (
                <Link
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                  aria-label={name}
                >
                  <social.icon className="size-3.5" />
                </Link>
              ))}
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2.5 text-xs font-black text-background transition-transform hover:-translate-y-0.5"
          >
            Hire me
            <ArrowUpRight className="size-3.5" />
          </Link>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
