import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-[image:var(--gradient-hero)] text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-80">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-3xl text-3xl font-bold md:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-base opacity-90 md:text-lg">{description}</p>}
        {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
