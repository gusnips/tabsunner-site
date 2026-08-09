import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll reveal — sections rise out of the field once, on entry.
 * The already-visible default is preserved under prefers-reduced-motion
 * (the motion-safe: variants simply never hide the content).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={`${seen ? "motion-safe:field-rise" : "motion-safe:opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
