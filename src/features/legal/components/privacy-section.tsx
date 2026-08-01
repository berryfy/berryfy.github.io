import type { ReactNode } from "react";

interface PrivacySectionProps {
  number: string;
  title: string;
  id: string;
  children: ReactNode;
}

export default function PrivacySection({
  number,
  title,
  id,
  children,
}: PrivacySectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border pt-8">
      <h2 className="text-xl font-bold tracking-[-0.02em] text-foreground">
        {number}. {title}
      </h2>
      <div className="legal-copy mt-4">{children}</div>
    </section>
  );
}
