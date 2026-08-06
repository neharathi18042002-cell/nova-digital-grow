import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-secondary/20 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl leading-[1.15] text-balance md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03] active:scale-100"
    >
      {children}
    </a>
  );
}

export function GhostLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition-colors hover:bg-secondary/20"
    >
      {children}
    </a>
  );
}
