import BlurFade from "@/components/magicui/blur-fade";
import { MasonryProjects } from "@/components/masonry-projects";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
  ServerCog,
  UsersRound,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const D = 0.04;

const ROLE_TAGS = [
  "AI Engineer",
  "Full-stack Engineer",
  "Backend Engineer",
  "Product-minded Builder",
  "Web3 Engineer",
];

const HERO_METRICS = [
  { value: "5+", label: "Years" },
  { value: "25+", label: "Projects" },
  { value: "8+", label: "Teams" },
];

const RECRUITER_SIGNALS = [
  {
    icon: BriefcaseBusiness,
    label: "Best fit",
    value: "AI product, backend, full-stack, and Web3 teams",
  },
  {
    icon: BadgeCheck,
    label: "Strength",
    value: "Turns ambiguous product ideas into shipped systems",
  },
  {
    icon: UsersRound,
    label: "Team value",
    value: "Leads engineers, plans delivery, and communicates clearly",
  },
];

const FOCUS_AREAS = [
  {
    icon: BrainCircuit,
    title: "AI product engineering",
    text: "LLM apps, RAG flows, agents, Claude/OpenAI integrations, and practical automation.",
  },
  {
    icon: ServerCog,
    title: "Backend systems",
    text: "APIs, services, databases, auth, async workflows, deployment, and reliability work.",
  },
  {
    icon: Code2,
    title: "Full-stack execution",
    text: "Modern React/Next.js interfaces connected to production-ready backend logic.",
  },
  {
    icon: WalletCards,
    title: "Blockchain delivery",
    text: "Cardano, TON, Solana, smart contracts, wallets, and secure Web3 product flows.",
  },
];

export default function Page() {
  const githubUrl = DATA.contact.social.GitHub?.url;
  const telegramUrl = DATA.contact.social.Telegram?.url;

  return (
    <main className="space-y-24">
      <section
        id="hero"
        className="relative overflow-hidden rounded-[8px] border border-border bg-card px-5 py-8 shadow-2xl shadow-black/10 sm:px-8 lg:px-10 lg:py-12"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div>
            <BlurFade delay={D} blur="0px" yOffset={10}>
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-200">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Open to full-time roles and contract work
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <MapPin className="size-3.5" />
                  Remote friendly
                </span>
              </div>
            </BlurFade>

            <BlurFade delay={D * 2} blur="0px" yOffset={14}>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-muted-foreground">
                {DATA.name}
              </p>
              <h1 className="max-w-5xl text-4xl font-black uppercase italic leading-[0.9] tracking-tighter text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
               Yohannes Getachew
              </h1>
            </BlurFade>

            <BlurFade delay={D * 3} blur="0px" yOffset={8}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                I help teams turn complex technical ideas into shipped products: from LLM workflows and full-stack apps to blockchain systems and product delivery.
              </p>
            </BlurFade>

            <BlurFade delay={D * 4} blur="0px" yOffset={8}>
              <div className="mt-7 flex flex-wrap gap-2">
                {ROLE_TAGS.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={D * 5} blur="0px" yOffset={8}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-bold text-background shadow-lg shadow-foreground/10 transition-transform hover:-translate-y-0.5"
                >
                  Email me
                  <Mail className="size-4" />
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40"
                >
                  See projects
                  <ArrowUpRight className="size-4" />
                </Link>
                {githubUrl && (
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    GitHub
                    <ArrowUpRight className="size-4" />
                  </Link>
                )}
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={D * 4} blur="0px" yOffset={16}>
            <aside className="rounded-[8px] border border-border bg-background/70 p-4 shadow-xl shadow-black/10">
              <div className="flex items-center gap-4 border-b border-border pb-4">
                <Image
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  width={88}
                  height={88}
                  className="size-20 rounded-[8px] border border-border object-cover"
                  priority
                />
                <div>
                  <p className="text-base font-black uppercase italic tracking-tight text-foreground">
                  About me
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Engineering execution with product judgment.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 border-b border-border py-4">
                {HERO_METRICS.map((metric) => (
                  <div key={metric.label} className="border-r border-border px-3 first:pl-0 last:border-r-0">
                    <p className="text-2xl font-black tracking-tighter text-foreground tabular-nums">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4">
                {RECRUITER_SIGNALS.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-[8px] border border-border bg-secondary/50">
                      <item.icon className="size-4 text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-foreground">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </BlurFade>
        </div>
      </section>

      <section id="fit">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <div className="mb-8 flex flex-col justify-between gap-4 border-y border-border py-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                01 - Why hire me
              </p>
              <h2 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-foreground sm:text-5xl">
                Role fit
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              A compact mix of senior engineering, product ownership, and AI/Web3 execution.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {FOCUS_AREAS.map((area, id) => (
            <BlurFade key={area.title} delay={D * (id + 1)} blur="0px" yOffset={8} inView>
              <div className="h-full rounded-[8px] border border-border bg-card p-5">
                <div className="mb-5 flex size-10 items-center justify-center rounded-[8px] border border-border bg-secondary/60">
                  <area.icon className="size-5 text-foreground" />
                </div>
                <h3 className="text-lg font-black uppercase italic tracking-tight text-foreground">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {area.text}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="work">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <div className="mb-8 flex flex-col justify-between gap-4 border-y border-border py-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                02 - Experience
              </p>
              <h2 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-foreground sm:text-5xl">
                Work history
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Recent roles focused on shipping production software, leading teams, and managing technical delivery.
            </p>
          </div>
        </BlurFade>

        <div className="space-y-1">
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={D * (id * 0.35 + 1)} blur="0px" yOffset={6} inView>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                isLast={id === DATA.work.length - 1}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <MasonryProjects />
        </BlurFade>
      </section>

      <section id="education">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <div className="mb-8 flex flex-col justify-between gap-4 border-y border-border py-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                04 - Education
              </p>
              <h2 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-foreground sm:text-5xl">
                Education
              </h2>
            </div>
          </div>
        </BlurFade>

        <div className="space-y-1">
          {DATA.education.map((edu, id) => (
            <BlurFade key={edu.school} delay={D * (id * 0.35 + 1)} blur="0px" yOffset={6} inView>
              <ResumeCard
                href={edu.href}
                logoUrl={edu.logoUrl}
                altText={edu.school}
                title={edu.school}
                subtitle={edu.degree}
                period={`${edu.start} - ${edu.end}`}
                isLast={id === DATA.education.length - 1}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="contact" className="pb-4">
        <BlurFade delay={D} blur="0px" yOffset={8} inView>
          <div className="relative overflow-hidden rounded-[8px] border border-border bg-card p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:42px_42px]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  05 - Hire me
                </p>
                <h2 className="max-w-3xl text-4xl font-black uppercase italic leading-[0.9] tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
                  Looking for an engineer who can own both product and code?
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
                  I&apos;m available for full-time roles, contract builds, and technical consulting across AI engineering, full-stack, blockchain, and product delivery.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
                >
                  {DATA.contact.email}
                  <ArrowUpRight className="size-4" />
                </Link>
                <div className="flex gap-3">
                  <Link
                    href="https://wa.me/251938321124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    WhatsApp
                  </Link>
                  {telegramUrl && (
                    <Link
                      href={telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Telegram
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
              {Object.entries(DATA.contact.social)
                .filter(([, social]) => social.navbar)
                .map(([name, social]) => (
                  <Link
                    key={name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex size-10 items-center justify-center rounded-[8px] border border-border bg-secondary/40 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <social.icon className="size-4" />
                  </Link>
                ))}
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
