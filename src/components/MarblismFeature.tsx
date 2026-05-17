import { Sparkles, ArrowUpRight, Mail, Share2, FileText, Target } from "lucide-react";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import MarblismAITeam from "./MarblismAITeam";
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

const pains = [
  { icon: <FileText size={16} />, text: "That blog post is still just a headline." },
  { icon: <Mail size={16} />, text: "You start your day with 100+ unread emails." },
  { icon: <Share2 size={16} />, text: "Your socials haven't been touched in weeks." },
  { icon: <Target size={16} />, text: "Everything keeps getting pushed to 'next week.'" },
];

const MarblismFeature = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Banner backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-25"
        style={{ backgroundImage: `url(${marblismBanner})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal/95 to-background z-0" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Eyebrow + Logo lockup */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-5 inline-flex items-center gap-2">
            <Sparkles size={14} /> Officially Presented With
          </p>
          <a
            href={MARBLISM_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            aria-label="Visit Marblism"
            onClick={() => trackClick("home_feature_logo")}
            onAuxClick={() => trackClick("home_feature_logo")}
            className="bg-white rounded-xl px-8 py-5 mb-8 transition-transform duration-500 hover:scale-105 motion-reduce:hover:scale-100"
          >
            <img src={marblismLogo} alt="Marblism" className="h-14 md:h-16 w-auto object-contain" loading="lazy" />
          </a>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-4xl leading-tight">
            AI Employees who handle the <span className="text-gold">busywork</span>,
            <br className="hidden md:block" /> so creators focus on <span className="text-houston">growth</span>.
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base md:text-lg leading-relaxed">
            Houston's entertainment industry runs on hustle — and hustle runs on time. Marblism gives every HUECONA creator,
            artist, and founder an entire AI team so they can stop juggling hats and start scaling.
          </p>
        </div>

        {/* Pain points */}
        <div className="max-w-4xl mx-auto mb-14">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-houston mb-5">
            Does this sound familiar?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pains.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-border/60 bg-charcoal/60 backdrop-blur px-4 py-3 text-sm text-muted-foreground"
              >
                <span className="text-gold flex-shrink-0">{p.icon}</span>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-foreground/80 mt-6 italic">
            You're wearing too many hats: CEO, marketer, salesperson, customer service…{" "}
            <span className="text-gold not-italic font-semibold">Stop juggling.</span>
          </p>
        </div>

        {/* AI Team */}
        <MarblismAITeam />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button
            variant="hero"
            size="xl"
            asChild
            className="group transition-all duration-300 ease-out hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
          >
            <a
              href={MARBLISM_URL}
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={() => trackClick("home_feature_primary")}
              onAuxClick={() => trackClick("home_feature_primary")}
            >
              Hire Your AI Team
              <ArrowUpRight className="ml-1 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
          <Button
            variant="outline_gold"
            size="xl"
            asChild
            className="transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
          >
            <a
              href={MARBLISM_URL}
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={() => trackClick("home_feature_secondary")}
              onAuxClick={() => trackClick("home_feature_secondary")}
            >
              Claim HUECONA Offer
            </a>
          </Button>
        </div>
        <p className="text-center text-xs text-muted-foreground/70 mt-5">
          Affiliate partnership — HUECONA may earn a commission.
        </p>
      </div>
    </section>
  );
};

export default MarblismFeature;
