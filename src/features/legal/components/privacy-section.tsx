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
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-title-md font-extrabold tracking-[-0.02em]">
        {number}. {title}
      </h2>
      <div className="legal-copy mt-4">{children}</div>
    </section>
  );
}
