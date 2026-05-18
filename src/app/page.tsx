import BlurFade from "@/components/magicui/blur-fade";
import { MasonryProjects } from "@/components/masonry-projects";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";

const D = 0.04;

const ROLES = [
  "AI Engineer",
  "Full-Stack Engineer",
  "Backend Engineer",
  "Product Manager",
  "Project Manager",
  "Blockchain Developer",
];

const SKILL_GROUPS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "Redux"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "Python", "Go", "FastAPI", "Django", "GraphQL", "REST APIs"],
  },
  {
    category: "AI & LLM",
    items: ["Claude API", "OpenAI", "LangChain", "RAG", "MCP Servers", "Prompt Engineering", "AI Agents"],
  },
  {
    category: "Blockchain",
    items: ["Cardano", "TON", "Solana", "Plutus / Haskell", "Smart Contracts", "NFT / Tokenomics"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Prisma", "DrizzleORM"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "AWS", "GitHub Actions", "CI/CD", "Linux", "Vercel"],
  },
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Go", "C++", "Haskell", "Solidity", "JavaScript"],
  },
  {
    category: "Management",
    items: ["Agile / Scrum", "Sprint Planning", "Roadmap Definition", "Technical Recruiting", "Team Leadership"],
  },
];

export default function Page() {
  return (
    <main className="space-y-24">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center min-h-[calc(100svh-5rem)] pt-4"
      >
        <div className="flex flex-col">
          {/* Availability badge */}
          <BlurFade delay={D} blur="0px" yOffset={10}>
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-6 w-fit px-3 py-1.5 rounded-full border border-border bg-secondary/50">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to full-time roles &amp; freelance projects
            </div>
          </BlurFade>

          {/* Name */}
          <BlurFade delay={D * 2} blur="0px" yOffset={14}>
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] mb-4 text-foreground">
              {DATA.name.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
          </BlurFade>

          {/* Role pills */}
          <BlurFade delay={D * 3} blur="0px" yOffset={8}>
            <div className="flex flex-wrap gap-2 mb-5">
              {ROLES.map((r) => (
                <span
                  key={r}
                  className="px-3 py-1 text-xs rounded-full border border-border bg-secondary text-secondary-foreground font-medium"
                >
                  {r}
                </span>
              ))}
            </div>
          </BlurFade>

          {/* Summary */}
          <BlurFade delay={D * 4} blur="0px" yOffset={6}>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-lg">
              {DATA.summary}
            </p>
          </BlurFade>

          {/* Stats row */}
          <BlurFade delay={D * 5} blur="0px" yOffset={6}>
            <div className="flex items-center gap-6 mb-8">
              <div>
                <p className="text-2xl font-black text-foreground tabular-nums">5+</p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Years Exp.</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <p className="text-2xl font-black text-foreground tabular-nums">25+</p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Projects</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <p className="text-2xl font-black text-foreground tabular-nums">8+</p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Companies</p>
              </div>
            </div>
          </BlurFade>

          {/* CTAs */}
          <BlurFade delay={D * 6} blur="0px" yOffset={6}>
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href="#projects"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-foreground text-background text-xs font-bold hover:opacity-80 transition-opacity"
              >
                View Work →
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                Email Me
              </Link>
            </div>
          </BlurFade>
        </div>

        {/* Avatar — desktop only */}
        <BlurFade delay={D * 3} blur="0px" yOffset={20}>
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative size-72 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-border/20 scale-[1.15]" />
              <div className="absolute inset-0 rounded-full border border-border/10 scale-[1.32]" />
              <div className="size-64 rounded-full overflow-hidden ring-2 ring-border">
                <Image
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  width={280}
                  height={280}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────── */}
      <section id="work">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
            02 — Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-none text-foreground mb-10">
            Work History
          </h2>
        </BlurFade>
        <div>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={D * (id * 0.5 + 1)} blur="0px" yOffset={6} inView>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} – ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
          <div className="border-t border-border mt-2" />
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────────── */}
      <section id="education">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
            03 — Education
          </p>
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-none text-foreground mb-10">
            Education
          </h2>
        </BlurFade>
        <div>
          {DATA.education.map((edu, id) => (
            <BlurFade key={edu.school} delay={D * (id * 0.5 + 1)} blur="0px" yOffset={6} inView>
              <ResumeCard
                href={edu.href}
                logoUrl={edu.logoUrl}
                altText={edu.school}
                title={edu.school}
                subtitle={edu.degree}
                period={`${edu.start} – ${edu.end}`}
              />
            </BlurFade>
          ))}
          <div className="border-t border-border mt-2" />
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────── */}
      <section id="skills">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
            04 — Capabilities
          </p>
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-none text-foreground mb-10">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {SKILL_GROUPS.map((group, gi) => (
              <BlurFade key={group.category} delay={D * (gi * 0.3 + 1)} blur="0px" yOffset={6} inView>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3 pb-2 border-b border-border">
                    {group.category}
                  </p>
                  <ul className="space-y-1.5">
                    {group.items.map((skill) => (
                      <li key={skill} className="text-sm text-foreground font-medium">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────── */}
      <section id="projects">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <MasonryProjects />
        </BlurFade>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="pb-4">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <div className="relative rounded-2xl border border-border overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -left-20 size-60 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 size-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10 px-8 py-20 lg:py-24">
              <div className="max-w-xl">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4">
                  06 — Hire Me
                </p>
                <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[0.9] mb-4 text-foreground">
                  Looking for a strong engineer or PM?
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm">
                  I&apos;m available for full-time roles, contract work, and technical consulting across AI engineering, full-stack, blockchain, and product management.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-bold hover:opacity-80 transition-opacity"
                  >
                    {DATA.contact.email} →
                  </Link>
                  <Link
                    href={`https://wa.me/251938321124`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    WhatsApp
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  {Object.entries(DATA.contact.social)
                    .filter(([, s]) => s.navbar)
                    .map(([name, social]) => (
                      <Link
                        key={name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="size-10 rounded-xl border border-border bg-secondary/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                      >
                        <social.icon className="size-4" />
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
