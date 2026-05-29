import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import MarblismRibbon from "@/components/MarblismRibbon";
import ProductionTeam from "@/components/ProductionTeam";

import heroSlide1 from "@/assets/hero/hero-1.jpg";
import heroSlide2 from "@/assets/hero/hero-2.jpg";
import heroSlide3 from "@/assets/hero/hero-3.jpg";
import heroSlide4 from "@/assets/hero/hero-4.jpg";

const HERO_SLIDES = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

const Houston_DATA = [
  {
    label: "Most Diverse City in America",
    number: "#1",
    body: "Houston ranks first in the U.S. for ethnic and cultural diversity — more than 145 languages spoken across one metro. Every cuisine. Every story. Every audience.",
    featured: true,
  },
  {
    label: "Population",
    number: "2.3",
    sub: "M",
    body: "Fourth largest city in the United States. Growing faster than any major creative hub.",
  },
  {
    label: "Theater District",
    number: "9",
    body: "Nine resident performing arts companies in a 17-block downtown district — second only to New York.",
  },
  {
    label: "James Beard Nominations",
    number: "25",
    sub: "+",
    body: "Houston chefs and restaurants honored in the past five years alone.",
  },
  {
    label: "Film & TV Productions",
    number: "100",
    sub: "+",
    body: "Major film and television productions shot in the region annually. Infrastructure is here.",
  },
  {
    label: "Music Heritage",
    number: "∞",
    body: "From the South Park Coalition to Beyoncé to Mike Jones — Houston's musical lineage is national heritage.",
  },
];

const About = () => {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const id = window.setInterval(() => {
      setHeroSlide((i) => (i + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <SEO
        title="About HUECONA — Houston United in Entertainment"
        description="HUECONA is a two-day conference and awards platform bringing Hollywood-grade production standards to Houston, the most diverse creative city in America."
        path="/about"
      />

      {/* ============ EDITORIAL HERO ============ */}
      <section className="relative min-h-screen grid grid-rows-[auto_1fr_auto] pt-24 pb-12 overflow-hidden">
        {/* Cinematic crossfading slideshow — behind everything */}
        <div aria-hidden="true" className="absolute inset-0 z-0 bg-[#0a0a0a]">
          {HERO_SLIDES.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${src})`,
                opacity: i === heroSlide ? 0.22 : 0,
                transform: i === heroSlide ? "scale(1.04)" : "scale(1)",
                transitionProperty: "opacity, transform",
                transitionDuration: "1800ms, 4500ms",
                transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
              }}
            />
          ))}
          {/* Bottom-vignette for legibility over busy frames */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.7) 100%)",
            }}
          />
        </div>

        {/* Atmospheric backdrop — pure CSS, sits ABOVE images to preserve gold palette */}
        {/* Atmospheric backdrop — pure CSS, no photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 50% -10%, hsla(43 60% 18% / 0.6), transparent 65%), radial-gradient(ellipse 60% 50% at 15% 90%, hsla(43 60% 14% / 0.5), transparent 60%), radial-gradient(ellipse 60% 50% at 85% 90%, hsla(226 60% 14% / 0.4), transparent 60%)",
          }}
        />

        {/* Subtle architectural grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(90deg, hsla(43 74% 53% / 0.04) 1px, transparent 1px), linear-gradient(180deg, hsla(43 74% 53% / 0.04) 1px, transparent 1px)",
            backgroundSize: "8.333% 8.333%",
          }}
        />

        {/* Watermark monogram */}
        <div
          aria-hidden="true"
          className="absolute right-[max(2rem,5vw)] bottom-32 z-[1] pointer-events-none select-none hidden md:block font-serif font-semibold leading-none"
          style={{
            fontSize: "clamp(8rem, 18vw, 16rem)",
            color: "hsla(43 74% 53% / 0.05)",
            letterSpacing: "-0.06em",
          }}
        >
          H
        </div>

        {/* Masthead */}
        <div className="relative z-[2] grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-8 px-[max(2rem,5vw)] pb-8 border-b border-gold-antique">
          <div className="flex items-center gap-3">
            <span className="block h-px bg-gradient-to-r from-transparent to-gold-antique max-w-16 flex-1" />
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-gold">
              Issue 01 · 2026
            </span>
          </div>
          <div className="hidden md:flex flex-col items-center gap-1">
            <span className="font-serif italic font-semibold text-2xl leading-none bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
              HUECONA
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold-antique">
              An Editorial Statement
            </span>
          </div>
          <div className="flex items-center gap-3 justify-end">
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-gold">
              Houston, Texas
            </span>
            <span className="block h-px bg-gradient-to-l from-transparent to-gold-antique max-w-16 flex-1" />
          </div>
        </div>

        {/* Body */}
        <div className="relative z-[2] flex flex-col justify-center px-[max(2rem,5vw)] py-12">
          <div className="inline-flex items-center gap-3 mb-8 md:mb-10 self-start">
            <span className="block w-1.5 h-1.5 rounded-full bg-gold animate-[pulse-dot_2s_ease-in-out_infinite]" />
            <span className="font-mono text-[11px] font-medium tracking-[0.3em] uppercase text-gold">
              About the Movement
            </span>
          </div>

          <h1
            className="font-serif font-normal leading-[0.92] tracking-[-0.03em] mb-10 md:mb-12"
            style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
          >
            <span className="block">Houston</span>
            <span className="block">
              is the{" "}
              <span className="italic font-medium bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
                next
              </span>
            </span>
            <span className="block pl-[1em] md:pl-[2em] italic font-medium bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
              stage.
            </span>
          </h1>

          <p
            className="font-serif leading-relaxed max-w-2xl text-foreground/80"
            style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)" }}
          >
            HUECONA is the Houston United in Entertainment Conference &amp; Awards — a two-day institution bringing{" "}
            <em className="italic text-gold-highlight">Hollywood-grade production</em> to the country's most diverse creative city. Film, music, fashion, sports, arts, culinary.{" "}
            <em className="italic text-gold-highlight">All under one roof.</em>
          </p>
        </div>

        {/* Slate — film slate style data row */}
        <div className="relative z-[2] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-[max(2rem,5vw)] pt-8 border-t border-gold-antique">
          {[
            { label: "Founded", value: "2026", emphasis: true },
            { label: "Format", value: "Conference + Awards", emphasis: false },
            { label: "Disciplines", value: "06", mono: true },
            { label: "Inaugural Dates", value: "July 16–17", emphasis: true },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-2 relative md:[&:not(:last-child)]:after:content-[''] md:[&:not(:last-child)]:after:absolute md:[&:not(:last-child)]:after:right-[-1rem] md:[&:not(:last-child)]:after:top-0 md:[&:not(:last-child)]:after:bottom-0 md:[&:not(:last-child)]:after:w-px md:[&:not(:last-child)]:after:bg-border"
            >
              <span className="font-mono text-[10px] font-medium tracking-[0.25em] uppercase text-gold-antique">
                {item.label}
              </span>
              {item.mono ? (
                <span className="font-mono text-xl font-medium text-gold">{item.value}</span>
              ) : (
                <span
                  className={`font-serif font-medium leading-tight ${item.emphasis ? "italic text-gold-highlight" : "text-foreground"}`}
                  style={{ fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)" }}
                >
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="py-32 bg-charcoal overflow-hidden">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 max-w-5xl mx-auto px-[max(2rem,5vw)]">
          <div className="font-mono text-[11px] font-medium tracking-[0.3em] uppercase text-gold pt-4 border-t border-gold self-start">
            The Mission
            <br />§ 01
          </div>
          <p
            className="font-serif leading-snug font-normal text-foreground"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
          >
            Hollywood made the rules.{" "}
            <em className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
              Houston is writing the next chapter.
            </em>
            <br />
            <br />
            HUECONA exists to{" "}
            <strong className="font-semibold text-gold-highlight">unite, celebrate, and elevate</strong> the people moving culture forward across Film, Music, Arts, Fashion, Sports and Culinary excellence — and to do it with the production standards Hollywood made famous, in the city where the future is actually being built.
          </p>
        </div>
      </section>

      {/* ============ WHY HOUSTON — DATA GRID ============ */}
      <section className="py-32 bg-background border-t border-border">
        <div className="text-center mb-20 px-[max(2rem,5vw)]">
          <div className="font-mono text-[11px] font-medium tracking-[0.3em] uppercase text-gold mb-6">
            § 02 — The Case for Houston
          </div>
          <h2
            className="font-serif font-medium leading-none tracking-tight mb-8"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            A city that{" "}
            <em className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
              earned
            </em>{" "}
            its stage.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-7xl mx-auto">
          {Houston_DATA.map((item) => (
            <div
              key={item.label}
              className={`bg-background p-10 sm:p-12 flex flex-col gap-3 transition-colors duration-700 hover:bg-[hsl(0_0%_6%)] ${
                item.featured ? "sm:col-span-2" : ""
              }`}
            >
              <span className="font-mono text-[11px] font-medium tracking-[0.25em] uppercase text-gold">
                {item.label}
              </span>
              <div
                className="font-serif font-medium leading-none bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent"
                style={{
                  fontSize: item.featured ? "clamp(4rem, 7vw, 7rem)" : "clamp(3rem, 5vw, 5rem)",
                }}
              >
                {item.number}
                {item.sub && (
                  <span className="font-mono text-sm font-medium text-muted-foreground [-webkit-text-fill-color:hsl(var(--muted-foreground))] ml-1">
                    {item.sub}
                  </span>
                )}
              </div>
              <p
                className={`font-serif leading-relaxed text-foreground/80 ${item.featured ? "text-lg max-w-md" : "text-base"}`}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ProductionTeam />

      <MarblismRibbon
        eyebrow="Premiere Sponsor"
        headline="HUECONA × Marblism — proudly powering Houston's creative future."
        ctaLabel="Discover Marblism"
        ctaKey="about_ribbon"
      />
      <Footer />
    </div>
  );
};

export default About;
