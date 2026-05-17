import { Sparkles, ArrowUpRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import marblismLogo from "@/assets/sponsors/marblism/logo-full-dark.png";
import marblismBanner from "@/assets/sponsors/marblism/banner.png";

const MARBLISM_URL = "https://marblism.link/huecona-awards";

const trackClick = (cta: string) => {
  try {
    void supabase.from("affiliate_clicks").insert({
      partner: "marblism",
      cta,
      destination_url: MARBLISM_URL,
      referrer_path: typeof window !== "undefined" ? window.location.pathname : null,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
    });
  } catch {
    // ignore
  }
};

interface MarblismRibbonProps {
  /** Short context-specific tagline shown above the headline. */
  eyebrow?: string;
  /** Main headline. Defaults to the universal AI Team line. */
  headline?: string;
  /** Button label. */
  ctaLabel?: string;
  /** CTA tracking key — unique per placement so analytics can attribute conversions. */
  ctaKey: string;
  className?: string;
}

const MarblismRibbon = ({
  eyebrow = "Premiere Sponsor",
  headline = "Free your team from busywork with Marblism AI Employees",
  ctaLabel = "Meet Your AI Team",
  ctaKey,
  className = "",
}: MarblismRibbonProps) => {
  return (
    <section className={`relative overflow-hidden border-y border-gold/30 ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
        style={{ backgroundImage: `url(${marblismBanner})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-charcoal/90 to-background z-0" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-between">
          <a
            href={MARBLISM_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            aria-label="Visit Marblism"
            onClick={() => trackClick(`${ctaKey}_logo`)}
            onAuxClick={() => trackClick(`${ctaKey}_logo`)}
            className="bg-white rounded-lg px-6 py-3 transition-transform duration-300 hover:scale-105 motion-reduce:hover:scale-100"
          >
            <img src={marblismLogo} alt="Marblism" className="h-10 md:h-12 w-auto object-contain" loading="lazy" />
          </a>
          <div className="flex-1 text-center md:text-left">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2 inline-flex items-center gap-2">
              <Sparkles size={12} /> {eyebrow}
            </p>
            <h3 className="text-xl md:text-2xl font-bold leading-tight">{headline}</h3>
          </div>
          <a
            href={MARBLISM_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            onClick={() => trackClick(ctaKey)}
            onAuxClick={() => trackClick(ctaKey)}
            className="group inline-flex items-center gap-2 rounded-md border-2 border-gold px-6 py-3 text-gold font-bold uppercase tracking-wide text-sm transition-all duration-300 hover:bg-gold hover:text-charcoal focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none whitespace-nowrap"
          >
            {ctaLabel}
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarblismRibbon;
