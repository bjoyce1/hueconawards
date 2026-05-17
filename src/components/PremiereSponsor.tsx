import { Button } from "./ui/button";
import { Sparkles, ArrowUpRight } from "lucide-react";
import marblismLogo from "@/assets/sponsors/marblism.png";
import marblismBg from "@/assets/sponsors/marblism-bg.png";

const MARBLISM_URL = "https://marblism.link/huecona-awards";

interface PremiereSponsorProps {
  className?: string;
}

const PremiereSponsor = ({ className = "" }: PremiereSponsorProps) => {
  return (
    <section className={`relative py-20 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${marblismBg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/80 z-0" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3 inline-flex items-center gap-2">
            <Sparkles size={14} /> Premiere Sponsor
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Proudly Presented With <span className="text-gold">Marblism</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl border border-gold/40 bg-gradient-to-br from-charcoal via-charcoal to-background p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <a
              href={MARBLISM_URL}
              target="_blank"
              rel="sponsored noopener noreferrer"
              aria-label="Visit Marblism"
              className="block bg-white rounded-xl p-10 flex items-center justify-center min-h-[180px] transition-transform duration-500 hover:scale-[1.02]"
            >
              <img
                src={marblismLogo}
                alt="Marblism — AI Employees Dream Team"
                className="max-h-24 w-auto object-contain"
                loading="lazy"
              />
            </a>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-houston mb-3">
                Your AI Employees Dream Team
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                AI Employees who handle the <span className="text-gold">busywork</span>, so you can focus on growth.
              </h3>
              <p className="text-muted-foreground mb-6">
                Meet Marblism: an all-in-one team of AI Employees that run your inbox,
                social media, SEO blog, and outbound sales — so you can stop juggling
                hats and start scaling. HUECONA attendees get exclusive access through
                our official partner link.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href={MARBLISM_URL} target="_blank" rel="sponsored noopener noreferrer">
                    Meet Your AI Team
                    <ArrowUpRight className="ml-1" />
                  </a>
                </Button>
                <Button variant="outline_gold" size="lg" asChild>
                  <a href={MARBLISM_URL} target="_blank" rel="sponsored noopener noreferrer">
                    Claim HUECONA Offer
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground/70 mt-4">
                Affiliate partnership — HUECONA may earn a commission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiereSponsor;
