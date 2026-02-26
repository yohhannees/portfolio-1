import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white/85 shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-300 ease-out hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:border-white/40",
        className
      )}
    >
      <Link href={href || "#"} className="block cursor-pointer">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
          />
        )}
      </Link>
      <CardHeader className="px-3 pt-3">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-[15px] tracking-tight">
            {title}
          </CardTitle>
          <time className="font-sans text-[11px] text-muted-foreground">
            {dates}
          </time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-3 pb-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-[10px] font-medium border-white/40 bg-white/15 text-slate-800 shadow-sm shadow-slate-200/60 backdrop-blur-sm dark:border-white/20 dark:bg-white/5 dark:text-slate-200"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-3 pb-3">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  className="flex gap-2 rounded-full border border-white/50 bg-white/20 px-2.5 py-1 text-[10px] font-medium text-slate-900 shadow-sm shadow-slate-300/70 backdrop-blur-sm transition-colors hover:bg-white/40 dark:border-white/30 dark:bg-white/10 dark:text-slate-100"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
