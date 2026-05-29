import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import heroArtists from "@/assets/hero-artists.jpg";

import evePomerance from "@/assets/guests/eve-pomerance.png";
import kelseyScott from "@/assets/guests/kelsey-scott.png";
import kentrellWright from "@/assets/guests/kentrell-wright.png";
import krysPooleDorsey from "@/assets/guests/krys-poole-dorsey.png";
import latanyaEdenburgs from "@/assets/guests/latanya-edenburgs.png";
import toniTomlin from "@/assets/guests/toni-tomlin.png";
import starlettaDupois from "@/assets/guests/starletta-dupois.png";
import adRoberts from "@/assets/guests/ad-roberts.png";
import andreNotice from "@/assets/guests/andre-notice.png";
import anitaOsuigweSpencer from "@/assets/guests/anita-osuigwe-spencer.png";
import drCamHill from "@/assets/guests/dr-cam-hill.png";

type Guest = {
  name: string;
  role: string;
  image: string;
  blurb?: string;
  featured?: boolean;
  objectPosition?: string;
};

const guests: Guest[] = [
  { name: "Starletta Dupois", role: "Actress", blurb: "Veteran of stage & screen", image: starlettaDupois, featured: true, objectPosition: "center 22%" },
  { name: "Kelsey Scott", role: "Actress & Writer", blurb: "Film & television", image: kelseyScott, featured: true, objectPosition: "center 22%" },
  { name: "Dr. Cam Hill", role: "Moderator", blurb: "Host & facilitator", image: drCamHill, featured: true, objectPosition: "center 22%" },
  { name: "Eve Pomerance", role: "Casting Director", image: evePomerance, objectPosition: "center 22%" },
  { name: "Kentrell Wright", role: "Actor & Author", image: kentrellWright, objectPosition: "center 22%" },
  { name: 'Cristala "Krys" Poole Dorsey', role: "Creative Director", image: krysPooleDorsey, objectPosition: "center 22%" },
  { name: "Dr. Latanya Edenburgs", role: "Speaker & Coach", image: latanyaEdenburgs, objectPosition: "center 22%" },
  { name: "Toni Tomlin", role: "Speaker & Coach", image: toniTomlin, objectPosition: "center 22%" },
  { name: "A.D. Roberts", role: "Speaker & Coach", image: adRoberts, objectPosition: "center 22%" },
  { name: "Andre Notice", role: "Speaker & Coach", image: andreNotice, objectPosition: "center 22%" },
  { name: "Anita Osuigwe-Spencer", role: "Writer & Director", image: anitaOsuigweSpencer, objectPosition: "center 22%" },
];

const DUOTONE =
  "grayscale(1) sepia(1) saturate(1.5) hue-rotate(5deg) brightness(0.95) contrast(1.05)";

const featured = guests.filter((g) => g.featured);
const rest = guests.filter((g) => !g.featured);

const Artists = () => {
  return (
    <div className="min-h-screen bg-charcoal overflow-x-hidden">
      <Navigation />
      <SEO
        title="Special Guests — HUECONA 2026"
        description="Meet the special guests joining HUECONA 2026 — actors, writers, casting directors, and creative leaders appearing across both days at Blossom Hotel Houston."
        path="/guests"
      />

      {/* ============ HERO ============ */}
      <section className="relative min-h-[90vh] grid grid-rows-[auto_1fr_auto] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroArtists})` }} />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, hsla(0 0% 2% / 0.6) 0%, transparent 30%, transparent 55%, hsla(0 0% 2% / 0.9) 100%), radial-gradient(ellipse at center, transparent 42%, hsla(0 0% 0% / 0.5) 100%)",
          }}
        />

        {/* Masthead */}
        <div className="relative z-[3] grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-8 px-[max(2rem,5vw)] pt-32 md:pt-24">
          <div className="flex items-center gap-3">
            <span className="block h-px bg-gradient-to-r from-transparent to-gold-antique max-w-20 flex-1" />
            <span className="font-mono text-[11px] font-medium tracking-[0.25em] uppercase text-gold whitespace-nowrap">July 16–17, 2026</span>
          </div>
          <div className="hidden md:block font-mono text-[11px] tracking-[0.4em] uppercase text-gold-antique text-center">Special Guests</div>
          <div className="flex items-center gap-3 justify-end">
            <span className="font-mono text-[11px] font-medium tracking-[0.25em] uppercase text-gold whitespace-nowrap">Blossom Hotel Houston</span>
            <span className="block h-px bg-gradient-to-l from-transparent to-gold-antique max-w-20 flex-1" />
          </div>
        </div>

        {/* Body */}
        <div className="relative z-[3] flex flex-col items-center justify-center text-center px-[max(2rem,5vw)] py-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="block w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-[11px] font-medium tracking-[0.3em] uppercase text-gold">HUECONA 2026 · The Lineup</span>
          </div>
          <h1 className="font-serif font-normal leading-[0.9] tracking-[-0.03em] mb-8 text-white" style={{ fontSize: "clamp(3rem, 9vw, 8.5rem)" }}>
            Special{" "}
            <span className="italic font-medium bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
              Guests
            </span>
          </h1>
          <p className="font-serif leading-relaxed text-white/80 max-w-lg" style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)" }}>
            The actors, writers, directors, and creative leaders joining us in Houston —{" "}
            <em className="italic text-gold-highlight">the people behind the work.</em>
          </p>
        </div>

        {/* Slate */}
        <div className="relative z-[3] grid grid-cols-1 md:grid-cols-3 border-t border-gold-antique mx-[max(2rem,5vw)] mb-8 pt-6">
          {[
            { label: "Confirmed Guests", value: "11 + more", italic: "11" },
            { label: "Disciplines", value: "Film · Stage · Story", italic: "Story" },
            { label: "Appearing", value: "Both Days", italic: "Days" },
          ].map((item, i) => (
            <div key={item.label} className={`px-6 py-2 md:py-0 flex flex-col gap-1.5 ${i > 0 ? "md:border-l border-border" : ""}`}>
              <span className="font-mono text-[10px] font-medium tracking-[0.25em] uppercase text-gold-antique">{item.label}</span>
              <span className="font-serif font-medium text-white" style={{ fontSize: "clamp(1rem, 1.3vw, 1.25rem)" }}>
                {item.value.split(item.italic)[0]}
                <em className="italic text-gold-highlight">{item.italic}</em>
                {item.value.split(item.italic)[1]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FEATURED HEADLINERS ============ */}
      <section className="py-32 pb-16 bg-charcoal">
        <div className="text-center mb-16 px-[max(2rem,5vw)]">
          <div className="font-mono text-[11px] font-medium tracking-[0.3em] uppercase text-gold mb-6">§ 01 — Headlining</div>
          <h2 className="font-serif font-medium leading-none tracking-tight text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            In the{" "}
            <span className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">Spotlight</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-[max(2rem,5vw)]">
          {featured.map((g, i) => (
            <article key={g.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0805] border border-gold-antique transition-all duration-700 group-hover:border-gold group-hover:-translate-y-1">
                <img
                  src={g.image}
                  alt={`${g.name}, ${g.role}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  style={{ objectPosition: g.objectPosition ?? "center 22%", filter: DUOTONE }}
                />
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 55%, hsla(0 0% 0% / 0.6) 100%)" }} />
                <span className="absolute top-3 left-3.5 z-[2] font-serif italic font-medium text-2xl text-gold-highlight" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="pt-5 text-center">
                <span className="block font-mono text-[10px] font-medium tracking-[0.25em] uppercase text-gold-highlight mb-2">{g.role}</span>
                <h3 className="font-serif text-2xl font-semibold leading-tight text-white">{g.name}</h3>
                {g.blurb && <p className="font-serif italic text-[0.95rem] text-muted-foreground mt-1.5">{g.blurb}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ FULL GUEST GRID ============ */}
      <section className="pb-32 bg-charcoal">
        <div className="text-center mb-14 px-[max(2rem,5vw)]">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-gold mb-4">§ 02 — Also Joining Us</div>
          <h2 className="font-serif font-medium text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            The Full{" "}
            <span className="italic text-gold-highlight">Guest List</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 max-w-5xl mx-auto px-[max(2rem,5vw)]">
          {rest.map((g) => (
            <article key={g.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0805] border border-gold-antique transition-all duration-700 group-hover:border-gold group-hover:-translate-y-1">
                <img
                  src={g.image}
                  alt={`${g.name}, ${g.role}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  style={{ objectPosition: g.objectPosition ?? "center 22%", filter: DUOTONE }}
                />
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 55%, hsla(0 0% 0% / 0.3) 100%)" }} />
              </div>
              <div className="relative pt-4 text-center">
                <span className="block w-6 h-px bg-gold mx-auto mb-3 transition-all duration-700 group-hover:w-12" />
                <span className="block font-mono text-[9px] font-medium tracking-[0.25em] uppercase text-gold mb-1.5">{g.role}</span>
                <h3 className="font-serif text-lg font-semibold leading-tight text-white">{g.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Artists;
