import BlurFade from "@/components/magicui/blur-fade";
import { MasonryProjects } from "@/components/masonry-projects";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const D = 0.05;

const SPECIALIZATIONS = [
  "Full-Stack SAAS",
  "Blockchain & Web3",
  "Product Management",
  "Backend Engineering",
  "System Architecture",
  "UI/UX Design",
  "AI & Agents",
];

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-6">
      {index} — {label}
    </p>
  );
}

export default function Page() {
  return (
    <main className="space-y-24">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center min-h-[calc(100svh-5rem)] pt-4"
      >
        {/* Left: content */}
        <div className="flex flex-col">
          <BlurFade delay={D} blur="0px" yOffset={12}>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for impactful projects
            </div>
          </BlurFade>

          <BlurFade delay={D * 2} blur="0px" yOffset={16}>
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.88] mb-6 text-foreground">
              {DATA.name.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h1>
          </BlurFade>

          <BlurFade delay={D * 3} blur="0px" yOffset={10}>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-lg">
              {DATA.summary}
            </p>
          </BlurFade>

          <BlurFade delay={D * 4} blur="0px" yOffset={8}>
            <div className="flex flex-wrap gap-2 mb-10">
              {SPECIALIZATIONS.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs rounded-full border border-border bg-secondary text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={D * 5} blur="0px" yOffset={8}>
            <div className="flex items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-foreground text-background text-xs font-semibold hover:opacity-80 transition-opacity"
              >
                View Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                Get in Touch →
              </Link>
            </div>
          </BlurFade>
        </div>

        {/* Right: avatar visual — desktop only */}
        <BlurFade delay={D * 3} blur="0px" yOffset={20}>
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative size-80 flex items-center justify-center">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-border/20 scale-[1.18]" />
              <div className="absolute inset-0 rounded-full border border-border/10 scale-[1.38]" />

              {/* Avatar */}
              <div className="size-72 rounded-full overflow-hidden ring-2 ring-border">
                <Image
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Floating stat: projects */}
              <div className="absolute -top-2 right-0 translate-x-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">
                  Projects
                </p>
                <p className="text-2xl font-bold text-foreground tabular-nums">
                  15+
                </p>
              </div>

              {/* Floating stat: experience */}
              <div className="absolute -bottom-2 left-0 -translate-x-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">
                  Experience
                </p>
                <p className="text-2xl font-bold text-foreground tabular-nums">
                  5+ yrs
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      {/* <section id="about" className="max-w-2xl">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <SectionLabel index="01" label="About" />
          <Markdown className="prose-sm max-w-none text-sm text-muted-foreground leading-relaxed [&>p]:text-sm [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-4">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section> */}

      {/* ── EXPERIENCE ───────────────────────────────────── */}
      <section id="work">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <SectionLabel index="02" label="Experience" />
        </BlurFade>
        <div>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={D * (id * 0.5 + 1)}
              blur="0px"
              yOffset={6}
              inView
            >
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
          <div className="border-t border-border" />
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────────── */}
      <section id="education">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <SectionLabel index="03" label="Education" />
        </BlurFade>
        <div>
          {DATA.education.map((edu, id) => (
            <BlurFade
              key={edu.school}
              delay={D * (id * 0.5 + 1)}
              blur="0px"
              yOffset={6}
              inView
            >
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
          <div className="border-t border-border" />
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────── */}
      <section id="skills">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <div className="flex flex-col items-center text-center mb-8">
            <SectionLabel index="04" label="Skills" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {DATA.skills.map((skill, i) => (
              <BlurFade key={skill} delay={D * (i * 0.15 + 1)} blur="0px" yOffset={6} inView>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-secondary/60 text-secondary-foreground hover:bg-secondary hover:border-border/80 transition-colors duration-200">
                  {skill}
                </span>
              </BlurFade>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* ── PROJECTS — full-width masonry ────────────────── */}
      <section id="projects">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <SectionLabel index="05" label="Selected Work" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">
            Projects
          </h2>
          <p className="text-xs text-muted-foreground mb-8">
            Filter by technology — click a tag to narrow the grid.
          </p>
        </BlurFade>
        <MasonryProjects />
      </section>

      {/* ── CONTACT — creative CTA card ──────────────────── */}
      <section id="contact" className="pb-4">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <div className="relative rounded-2xl border border-border overflow-hidden">
            {/* Ambient glows */}
            <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center text-center px-8 py-20 lg:py-28">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-6">
                06 — Contact
              </p>

              <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter leading-[0.92] mb-5 text-foreground">
                Let&apos;s build something
                <br />
                <em className="not-italic font-light text-muted-foreground">
                  that matters.
                </em>
              </h2>

              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-10">
                Open to interesting projects and collaborations. Find me on
                socials or drop an email.
              </p>

              {/* Social icon row */}
              <div className="flex items-center justify-center gap-3 mb-10">
                {Object.entries(DATA.contact.social)
                  .filter(([, s]) => s.navbar)
                  .map(([name, social]) => (
                    <Link
                      key={name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="size-11 rounded-xl border border-border bg-secondary/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-foreground/20 transition-all duration-200"
                    >
                      <social.icon className="size-4" />
                    </Link>
                  ))}
              </div>

              {/* Email pill CTA */}
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-80 transition-opacity"
              >
                {DATA.contact.email}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
