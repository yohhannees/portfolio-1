import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex flex-1 flex-col space-y-3.5">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground shadow-sm backdrop-blur-sm dark:bg-background/70">
                  <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.35)]" />
                  <span>Available for impactful projects</span>
                </div>
              </BlurFade>

              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter text-slate-900 sm:text-5xl xl:text-6xl/none dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-300 dark:to-slate-500 dark:bg-clip-text dark:text-transparent animate-text-shimmer"
                yOffset={8}
                text={DATA.name}
              />

              <BlurFadeText
                className="max-w-[600px] text-sm text-muted-foreground md:text-base"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />

              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="#projects"
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "gap-2 rounded-full bg-white/90 text-slate-900 shadow-lg shadow-slate-400/40 backdrop-blur-xl hover:bg-white"
                    )}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      View projects
                    </span>
                    <ArrowRightIcon className="size-3.5" />
                  </Link>
                  <Link
                    href="#contact"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "rounded-full border-dashed border-border/70 bg-background/60 text-xs font-medium tracking-wide hover:border-cyan-500/70 hover:text-cyan-500"
                    )}
                  >
                    Let&apos;s collaborate
                  </Link>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                <div className="flex flex-wrap items-center gap-3 pt-3 text-xs text-muted-foreground">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1 backdrop-blur-sm">
                    <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-white/80 to-slate-200/80 dark:from-slate-200 dark:to-slate-400" />
                    <span className="font-medium">{DATA.location}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {Object.entries(DATA.contact.social)
                      .filter(([_, social]) => social.navbar)
                      .map(([name, social]) => (
                        <Link
                          key={name}
                          href={social.url}
                          className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/70 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-cyan-500/70 hover:text-cyan-500"
                          target="_blank"
                        >
                          <social.icon className="size-3" />
                          <span className="capitalize">{name}</span>
                        </Link>
                      ))}
                  </div>
                </div>
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 via-white/5 to-slate-300/30 blur-2xl dark:from-white/10 dark:via-white/0 dark:to-slate-700/40" />
                <div className="relative rounded-3xl border border-white/20 bg-white/10 p-1.5 shadow-[0_18px_60px_rgba(15,23,42,0.65)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
                  <Avatar className="size-28 border border-white/30 bg-white/20 shadow-lg shadow-black/40 backdrop-blur-2xl">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback className="text-lg font-semibold">
                      {DATA.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm on{" "}
                <Link
                  href="https://t.me/Yohhannees"
                  className="text-blue-500 hover:underline"
                >
                  Telegram
                </Link>{" "}
                or on{" "}
                <Link
                  href="https://wa.me/0938321124"
                  className="text-blue-500 hover:underline"
                >
                  WhatsApp
                </Link>{" "}
                and I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
