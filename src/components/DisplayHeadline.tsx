import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DisplayHeadlineProps {
  children: ReactNode;
  accent?: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

/**
 * Editorial display headline pairing serif weight with
 * an italic Cormorant Garamond accent in rich gold gradient.
 */
const DisplayHeadline = ({ children, accent, className, as: Tag = "h1" }: DisplayHeadlineProps) => (
  <Tag
    className={cn(
      "font-serif font-medium tracking-tight leading-[0.95]",
      "text-4xl sm:text-5xl md:text-7xl lg:text-8xl",
      className,
    )}
  >
    {children}
    {accent && (
      <>
        <br />
        <span className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
          {accent}
        </span>
      </>
    )}
  </Tag>
);

export default DisplayHeadline;
