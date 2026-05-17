import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

const TAG_PALETTES = [
  "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-500/20",
  "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20",
  "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20",
  "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-500/20",
  "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-500/10 dark:text-pink-300 dark:border-pink-500/20",
  "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20",
  "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20",
  "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-500/20",
  "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-500/10 dark:text-teal-300 dark:border-teal-500/20",
  "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/20",
];

function tagColor(tag: string) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  return TAG_PALETTES[Math.abs(hash) % TAG_PALETTES.length];
}

export function ProjectCard({ title, href, description, dates, tags, image, video, links }: Props) {
  return (
    <div className="group relative flex flex-col bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40 hover:border-border/60">
      {(video || image) && (
        <div className="overflow-hidden">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : image ? (
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : null}
        </div>
      )}

      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-sm text-foreground leading-snug">
            {href ? (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-foreground transition-colors"
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>
          <span className="text-[10px] font-mono text-muted-foreground shrink-0 tabular-nums pt-0.5">
            {dates}
          </span>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">
          {description}
        </p>

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${tagColor(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border mt-auto">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.icon}
                {link.type}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
