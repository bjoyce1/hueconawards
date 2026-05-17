import { Sparkles, ArrowUpRight, Mail, Share2, FileText, Target } from "lucide-react";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import marblismLogo from "@/assets/sponsors/marblism/logo-full-dark.png";
import eva from "@/assets/sponsors/marblism/eva.png";
import sonny from "@/assets/sponsors/marblism/sonny.png";
import penny from "@/assets/sponsors/marblism/penny.png";
import stan from "@/assets/sponsors/marblism/stan.png";

const MARBLISM_URL = "https://marblism.link/huecona-awards";
const MARBLISM_YELLOW = "#FFE34D";
const MARBLISM_YELLOW_DEEP = "#F5C518";

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

const team = [
  { name: "Eva", role: "Executive Assistant", img: eva,
    quote: "I handle your inbox, calendar and craft emails in your tone — so you look prompt, even if you hit snooze three times." },
  { name: "Sonny", role: "Social Media Manager", img: sonny,
    quote: "I'll turn your socials into a lead-generating machine, without you having to dance on camera." },
  { name: "Penny", role: "SEO Blog Writer", img: penny,
    quote: "I write SEO posts that make Google happy, your audience obsessed, and your competitors uncomfortable." },
  { name: "Stan", role: "Sales Rep", img: stan,
    quote: "I find leads, send cold emails and follow-ups — turning 'not interested' into 'where do I sign?'" },
];

const MarblismFeature = () => {
  return (
    <section
      className="relative py-24 overflow-hidden text-neutral-900"
      style={{ background: `radial-gradient(ellipse at top, ${MARBLISM_YELLOW} 0%, ${MARBLISM_YELLOW_DEEP} 100%)` }}
    >
      {/* Decorative floating characters in the background */}
      <img
        src={eva}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute -top-6 -left-10 w-44 lg:w-56 opacity-20 animate-hue-float pointer-events-none select-none"
        style={{ animationDelay: "0s" }}
      />
      <img
        src={stan}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute top-20 -right-12 w-48 lg:w-64 opacity-20 animate-hue-float pointer-events-none select-none"
        style={{ animationDelay: "-2s" }}
      />
      <img
        src={penny}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute bottom-10 -left-14 w-44 lg:w-56 opacity-20 animate-hue-float pointer-events-none select-none"
        style={{ animationDelay: "-4s" }}
      />
      <img
        src={sonny}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute -bottom-8 right-10 w-44 lg:w-56 opacity-20 animate-hue-float pointer-events-none select-none"
        style={{ animationDelay: "-3s" }}
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Eyebrow + Logo lockup */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-xs mb-5 inline-flex items-center gap-2 text-neutral-800">
            <Sparkles size={14} className="animate-pulse" /> Officially Presented With
          </p>
          <a
            href={MARBLISM_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            aria-label="Visit Marblism"
            onClick={() => trackClick("home_feature_logo")}
            onAuxClick={() => trackClick("home_feature_logo")}
            className="group bg-neutral-900 rounded-2xl px-8 py-5 mb-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] active:scale-[0.98] motion-reduce:transition-none"
          >
            <img src={marblismLogo} alt="Marblism" className="h-14 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          </a>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-4xl leading-tight">
            AI Employees who handle the <span className="bg-neutral-900 text-[color:var(--m-yellow)] px-2 -skew-x-3 inline-block" style={{ ['--m-yellow' as any]: MARBLISM_YELLOW }}>busywork</span>,
            <br className="hidden md:block" /> so creators focus on <span className="underline decoration-wavy decoration-neutral-900 decoration-2 underline-offset-4">growth</span>.
          </h2>
          <p className="text-neutral-800/85 mt-6 max-w-2xl text-base md:text-lg leading-relaxed">
            Houston's entertainment industry runs on hustle — and hustle runs on time. Marblism gives every HUECONA creator,
            artist, and founder an entire AI team so they can stop juggling hats and start scaling.
          </p>
        </div>

        {/* Pain points */}
        <div className="max-w-4xl mx-auto mb-14">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-neutral-800 mb-5">
            Does this sound familiar?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pains.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border-2 border-neutral-900 bg-white px-4 py-3 text-sm text-neutral-900 transition-all duration-300 hover:bg-neutral-900 hover:text-[color:var(--m-yellow)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#0a0a0a] motion-reduce:transition-none"
                style={{ ['--m-yellow' as any]: MARBLISM_YELLOW, animationDelay: `${i * 80}ms` }}
              >
                <span className="flex-shrink-0">{p.icon}</span>
                <span className="font-medium">{p.text}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-neutral-900 mt-6 italic">
            You're wearing too many hats: CEO, marketer, salesperson, customer service…{" "}
            <span className="not-italic font-bold bg-neutral-900 text-[color:var(--m-yellow)] px-2" style={{ ['--m-yellow' as any]: MARBLISM_YELLOW }}>Stop juggling.</span>
          </p>
        </div>

        {/* AI Team — light mode cards with playful interactions */}
        <div className="mt-10">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-800 mb-2">Meet The Team</p>
            <h3 className="text-2xl md:text-3xl font-black">
              Your AI Employee <span className="italic">Dream Team</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {team.map((m, i) => (
              <a
                key={m.name}
                href={MARBLISM_URL}
                target="_blank"
                rel="sponsored noopener noreferrer"
                onClick={() => trackClick(`home_feature_ai_${m.name.toLowerCase()}`)}
                onAuxClick={() => trackClick(`home_feature_ai_${m.name.toLowerCase()}`)}
                className="group relative rounded-2xl border-2 border-neutral-900 bg-white p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:rotate-[-1deg] hover:shadow-[8px_8px_0_0_#0a0a0a] active:translate-y-0 active:shadow-[2px_2px_0_0_#0a0a0a] motion-reduce:transition-none motion-reduce:hover:transform-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-900/30"
              >
                <div className="relative mb-4">
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500"
                    style={{ background: MARBLISM_YELLOW }}
                    aria-hidden="true"
                  />
                  <img
                    src={m.img}
                    alt={`${m.name} — ${m.role}`}
                    loading="lazy"
                    className="relative h-28 w-28 md:h-32 md:w-32 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 animate-hue-float motion-reduce:animate-none"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                </div>
                <div className="text-lg font-black tracking-wide">{m.name}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3 px-2 py-0.5 rounded-full bg-neutral-900 text-[color:var(--m-yellow)] inline-block"
                     style={{ ['--m-yellow' as any]: MARBLISM_YELLOW }}>
                  {m.role}
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">"{m.quote}"</p>
                <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <ArrowUpRight size={18} className="text-neutral-900" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-14">
          <Button
            size="xl"
            asChild
            className="group bg-neutral-900 text-[color:var(--m-yellow)] hover:bg-neutral-900 hover:text-[color:var(--m-yellow)] border-2 border-neutral-900 shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#000] hover:-translate-y-0.5 hover:-translate-x-0.5 active:shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:translate-x-0.5 transition-all duration-200 focus-visible:ring-4 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-0 motion-reduce:transition-none"
            style={{ ['--m-yellow' as any]: MARBLISM_YELLOW }}
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
            size="xl"
            asChild
            className="bg-white text-neutral-900 hover:bg-white hover:text-neutral-900 border-2 border-neutral-900 shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#000] hover:-translate-y-0.5 hover:-translate-x-0.5 active:shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:translate-x-0.5 transition-all duration-200 focus-visible:ring-4 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-0 motion-reduce:transition-none"
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
        <p className="text-center text-xs text-neutral-900/80 mt-5 font-medium">
          Affiliate partnership — HUECONA may earn a commission.
        </p>
      </div>
    </section>
  );
};

export default MarblismFeature;
