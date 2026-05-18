import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import hueconaLogo from "@/assets/huecona-logo-flame.png";
import presentersHeroVideo from "@/assets/presenters-hero.mp4";
import latanyaFlyer from "@/assets/presenters/latanya-flyer.png";
import andreFlyer from "@/assets/presenters/andre-flyer.png";
import mrcapFlyer from "@/assets/presenters/mrcap-flyer.png";
import spencerFlyer from "@/assets/presenters/spencer-flyer.png";
import adRobertsFlyer from "@/assets/presenters/adroberts-flyer.png";
import toniFlyer from "@/assets/presenters/toni-flyer.png";

type Accent = "gold" | "houston" | "red" | "pink";

type Presenter = {
  id: string;
  name: string;
  title: string;
  session: string;
  tagline: string;
  role: string;
  accent: Accent;
  flyer: string;
};

const presenters: Presenter[] = [
  {
    id: "spencer",
    name: "Spencer Proffer",
    role: "Opening Keynote",
    title: "Visionary Media Producer · Story-Driven Culture Builder",
    session: "Cinematic Narratives That Move Culture",
    tagline:
      "Turn iconic music, real-life stories and cultural truth into story-driven projects that travel across screens, platforms and generations.",
    accent: "houston",
    flyer: spencerFlyer,
  },
  {
    id: "latanya",
    name: "Dr. Latanya Edenburgs",
    role: "The MOVE Method™",
    title: "MA, M.Ed. · Creator of The MOVE Method™",
    session: "Unlock the Magic in You",
    tagline: "Pause. Realign. Move forward with clarity and intention.",
    accent: "gold",
    flyer: latanyaFlyer,
  },
  {
    id: "toni",
    name: "Toni Tomlin",
    role: "The Intention Quotient™ Experience",
    title: "Creator of The Intention Quotient™ · Founder, My Healing Suite™ · 20+ Year Navy Veteran",
    session: "You Already Know",
    tagline:
      "A powerful masterclass for people ready to stop overriding themselves, reconnect with what they already know, and move forward with clarity, confidence, and intention.",
    accent: "pink",
    flyer: toniFlyer,
  },
  {
    id: "andre",
    name: "Coach Andre",
    role: "The New Currency",
    title: "Connection Coach",
    session: "Connection Is the New Currency",
    tagline: "How to make lasting connections in a disconnected society.",
    accent: "houston",
    flyer: andreFlyer,
  },
  {
    id: "adroberts",
    name: "A.D. Roberts",
    role: "Main Character Energy",
    title: "Hypnotherapist · Mindset Strategist · Identity Architect",
    session: "The Identity Factor",
    tagline:
      "From being overlooked to being unforgettable. You don't need more luck — you need a new identity.",
    accent: "red",
    flyer: adRobertsFlyer,
  },
  {
    id: "mrcap",
    name: "Mr. CAP",
    role: "Closing Experience",
    title: "Artist · Author · Creative Visionary",
    session: "The Art of ISM Experience",
    tagline:
      "A code of thought, movement, and mastery — music, film, and the multidimensional creative universe.",
    accent: "gold",
    flyer: mrcapFlyer,
  },
];

const accentTokens: Record<Accent, {
  num: string; numHover: string; role: string; session: string;
}> = {
  gold: {
    num: "hsl(39 60% 30%)",
    numHover: "hsl(43 74% 53%)",
    role: "hsl(43 74% 53%)",
    session: "hsl(43 76% 71%)",
  },
  houston: {
    num: "hsl(226 60% 35%)",
    numHover: "hsl(226 80% 65%)",
    role: "hsl(226 80% 70%)",
    session: "hsl(226 80% 75%)",
  },
  red: {
    num: "hsl(355 50% 30%)",
    numHover: "hsl(355 78% 60%)",
    role: "hsl(355 70% 65%)",
    session: "hsl(355 70% 75%)",
  },
  pink: {
    num: "hsl(328 50% 32%)",
    numHover: "hsl(328 85% 62%)",
    role: "hsl(328 85% 70%)",
    session: "hsl(328 80% 78%)",
  },
};

const Presenters = () => {
  const [active, setActive] = useState<Presenter | null>(null);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <SEO
        title="Presenters — HUECONA 2026 Conference Speakers"
        description="The 2026 HUECONA presenter lineup — five featured sessions on storytelling, identity, connection, and creative mastery."
        path="/presenters"
      />

      {/* HERO MARQUEE */}
      <section className="relative min-h-[80vh] flex flex-col justify-end pt-32 pb-20 overflow-hidden border-b border-gold-antique/40">
        <video
          aria-hidden="true"
          src={presentersHeroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(180deg, hsla(210, 20%, 4%, 0.55) 0%, hsla(210, 20%, 4%, 0.35) 40%, hsla(210, 20%, 4%, 0.85) 100%), radial-gradient(ellipse 80% 60% at 50% 100%, hsla(43, 60%, 25%, 0.35), transparent 70%)",
          }}
        />


        <img
          src={hueconaLogo}
          alt="HUECONA"
          aria-hidden="true"
          className="huecona-logo-float pointer-events-auto absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-[2vw] md:translate-x-[6vw] lg:translate-x-[10vw] z-[5] w-[140px] md:w-[200px] lg:w-[260px] h-auto opacity-90 select-none"
          draggable={false}
        />

        <div className="relative z-10 px-[max(2rem,5vw)]">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="block w-16 h-px bg-gold" />
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold">
              HUECONA 2026 · Featured Sessions
            </span>
          </div>

          <h1
            className="font-serif font-normal leading-[0.85] tracking-[-0.04em] mb-8"
            style={{ fontSize: "clamp(4rem, 14vw, 14rem)" }}
          >
            <span className="block text-foreground">The</span>
            <span className="block italic font-medium bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent translate-x-[2vw]">
              Presenters
            </span>
          </h1>

          <div className="flex flex-wrap items-baseline gap-12 border-t border-border pt-8 mt-8 max-w-3xl">
            <MetaItem
              label="Dates"
              value={
                <>
                  July <em className="not-italic font-serif italic text-gold-highlight">16–17</em>, 2026
                </>
              }
            />
            <MetaItem
              label="Venue"
              value={
                <>
                  <em className="not-italic font-serif italic text-gold-highlight">Blossom</em> Hotel Houston
                </>
              }
            />
            <MetaItem
              label="Format"
              value={
                <>
                  Live <em className="not-italic font-serif italic text-gold-highlight">sessions</em>
                </>
              }
            />
          </div>
        </div>

        <div className="absolute right-[max(2rem,4vw)] bottom-20 z-20 hidden md:flex flex-col items-end gap-2">
          <span
            className="font-serif italic font-medium leading-[0.8] bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent"
            style={{ fontSize: "8rem" }}
          >
            05
          </span>
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold">
            Featured
          </span>
        </div>
      </section>

      {/* LINEUP */}
      <section className="py-24">
        <div className="flex items-baseline justify-between gap-8 px-[max(2rem,5vw)] pb-16 border-b border-border">
          <h2
            className="font-serif italic font-medium"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            The 2026 Lineup
          </h2>
          <span className="text-xs tracking-[0.3em] uppercase text-gold">
            in order of program
          </span>
        </div>

        <div>
          {presenters.map((p, i) => (
            <Billing
              key={p.id}
              presenter={p}
              index={i}
              onOpen={() => setActive(p)}
            />
          ))}
        </div>

        <div className="py-20 text-center px-4">
          <p className="font-serif italic text-xl text-muted-foreground mb-4">
            More presenters being announced
          </p>
          <div className="inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.4em] uppercase text-gold">
            <span className="text-gold-deep">◆</span>
            HUECONA · 2026
            <span className="text-gold-deep">◆</span>
          </div>
        </div>
      </section>

      <Dialog open={active !== null} onOpenChange={() => setActive(null)}>
        <DialogContent className="max-w-4xl bg-background/95 border-gold/30 p-2 sm:p-4">
          {active && (
            <img
              src={active.flyer}
              alt={`${active.name} — ${active.session}`}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

const MetaItem = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold-antique">
      {label}
    </span>
    <span className="font-serif text-2xl font-medium text-foreground">
      {value}
    </span>
  </div>
);

const Billing = ({
  presenter: p,
  index,
  onOpen,
}: {
  presenter: Presenter;
  index: number;
  onOpen: () => void;
}) => {
  const tokens = accentTokens[p.accent];
  const numStr = String(index + 1).padStart(2, "0");
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative grid grid-cols-[60px_1fr] md:grid-cols-[90px_1fr_280px] gap-6 md:gap-12 items-center px-[max(1.5rem,5vw)] py-8 md:py-12 border-b border-border w-full text-left transition-colors duration-700 hover:bg-gold/[0.02]"
      aria-label={`View ${p.name} session flyer`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, hsla(43, 74%, 53%, 0.04) 50%, transparent 100%)",
        }}
      />

      <div
        className="font-serif italic font-normal leading-none transition-all duration-700"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          color: hovered ? tokens.numHover : tokens.num,
          transform: hovered ? "translateX(0.5rem)" : "translateX(0)",
        }}
      >
        {numStr}
      </div>

      <div className="min-w-0">
        <div
          className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3 md:mb-4"
          style={{ color: tokens.role }}
        >
          {p.role}
        </div>

        <h3
          className="font-serif font-medium leading-none tracking-[-0.02em] mb-3"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {p.name}
        </h3>

        <p
          className="font-serif italic font-normal leading-snug mb-4"
          style={{
            fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)",
            color: tokens.session,
          }}
        >
          <span style={{ color: tokens.num }}>"</span>
          {p.session}
          <span style={{ color: tokens.num }}>"</span>
        </p>

        <p className="text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-3">
          {p.title}
        </p>

        <p className="font-serif text-base leading-relaxed text-foreground/75 max-w-xl">
          {p.tagline}
        </p>
      </div>

      <div className="hidden md:block">
        <div
          className="relative aspect-[2/3] overflow-hidden bg-charcoal border transition-all duration-700"
          style={{
            borderColor: hovered ? "hsl(var(--gold))" : "hsl(var(--gold-antique))",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          <img
            src={p.flyer}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-all duration-1000"
            style={{
              filter: hovered ? "brightness(1.05)" : "brightness(0.85)",
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2 flex items-center justify-between bg-gradient-to-t from-black/95 to-transparent">
            <span className="font-serif italic text-xs text-gold-highlight">
              no. {numStr}
            </span>
            <span
              className="w-5 h-5 border rounded-full grid place-items-center transition-all duration-400"
              style={{
                borderColor: "hsl(var(--gold))",
                background: hovered ? "hsl(var(--gold))" : "transparent",
                color: hovered ? "hsl(var(--background))" : "hsl(var(--gold))",
              }}
            >
              <ArrowUpRight size={11} strokeWidth={2} />
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Presenters;
