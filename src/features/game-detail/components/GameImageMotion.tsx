"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "@/features/game-detail/components/game-image-motion.module.css";

interface GameImageMotionProps {
  children: ReactNode;
  variant: "hero" | "screenshot";
  delay?: number;
}

// Server-rendered images stay visible without JavaScript; animate once on entry.
const GameImageMotion = ({
  children,
  variant,
  delay = 0,
}: GameImageMotionProps) => {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !("IntersectionObserver" in window) || !frame.animate) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (preference.matches) return;
        animation = frame.animate(
          [
            { opacity: 0, transform: "translateY(24px) scale(0.98)" },
            { opacity: 1, transform: "translateY(0) scale(1)" },
          ],
          {
            duration: 700,
            delay,
            easing:
              getComputedStyle(frame)
                .getPropertyValue("--ease-standard")
                .trim() || "ease-out",
            fill: "backwards",
          },
        );
      },
      { threshold: 0.12 },
    );
    const stopMotion = () => {
      if (preference.matches) animation?.cancel();
    };
    preference.addEventListener("change", stopMotion);
    observer.observe(frame);
    return () => {
      observer.disconnect();
      animation?.cancel();
      preference.removeEventListener("change", stopMotion);
    };
  }, [delay]);

  return (
    <div ref={frameRef} className={`${styles.frame} ${styles[variant]}`}>
      {children}
    </div>
  );
};

export default GameImageMotion;
