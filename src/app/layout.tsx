import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 overflow-x-hidden",
          fontSans.variable
        )}
      >
        {/* Ambient background glow + grid, kept outside main spacing */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {/* Soft radial glows (lighter in light mode to keep text readable) */}
          <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/20 blur-3xl dark:bg-white/5" />
          <div className="absolute bottom-0 right-[-6rem] h-64 w-64 rounded-full bg-white/15 blur-3xl dark:bg-white/10" />
          <div className="absolute bottom-32 -left-24 h-56 w-56 rounded-full bg-white/18 blur-3xl dark:bg-white/8" />

          {/* Subtle moving grid overlay */}
          <div className="absolute inset-x-[-25%] top-0 h-[140%] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%),linear-gradient(to_bottom,_rgba(148,163,184,0.14),_transparent_55%)] opacity-[0.18] dark:opacity-[0.24]" />
          {/* In light mode we avoid the heavy dark gradient so text stays high-contrast;
             it only appears in dark mode to enrich the background. */}
          <div className="pointer-events-none absolute inset-x-[-25%] top-0 h-[140%] dark:bg-[linear-gradient(to_bottom,_rgba(15,23,42,0.45),_rgba(15,23,42,0.95)_85%)] dark:mix-blend-normal" />
        </div>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
