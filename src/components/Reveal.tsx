import { ReactNode, useEffect, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  as?: "div" | "section" | "header" | "p" | "h2" | "h3" | "span";
}

/**
 * Subtle cinematic reveal: fades and lifts content into view on scroll.
 * BMW-style — slow, smooth, no bounce.
 */
const Reveal = ({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: show immediately.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      el.classList.add("in-view");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -64px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayCls = delay ? `reveal-delay-${delay}` : "";
  const TagAny = Tag as any;
  return (
    <TagAny ref={ref} className={`reveal ${delayCls} ${className}`.trim()}>
      {children}
    </TagAny>
  );
};

export default Reveal;
