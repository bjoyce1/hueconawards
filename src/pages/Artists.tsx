import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Mail, Ticket, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroGuests from "@/assets/hero-guests.jpg";
import hueFlame from "@/assets/huecona-logo-flame.png";

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
import emmaiAlaquiva from "@/assets/guests/emmai-alaquiva.png";
import corneliusPratt from "@/assets/guests/cornelius-pratt.png";
import spencerProffer from "@/assets/guests/spencer-proffer.png";

type Category =
  | "Actors"
  | "Producers"
  | "Speakers"
  | "Writers & Directors"
  | "Casting & Industry"
  | "Moderators";

interface Guest {
  name: string;
  role: string;
  image: string;
  categories: Category[];
}

const specialGuests: Guest[] = [
  { name: "Eve Pomerance", role: "Casting Director", image: evePomerance, categories: ["Casting & Industry"] },
  { name: "Kelsey Scott", role: "Actress & Writer", image: kelseyScott, categories: ["Actors", "Writers & Directors"] },
  { name: "Kentrell Wright", role: "Actor & Author", image: kentrellWright, categories: ["Actors", "Speakers"] },
  { name: 'Cristala "Krys" Poole Dorsey', role: "Creative Director", image: krysPooleDorsey, categories: ["Casting & Industry", "Writers & Directors"] },
  { name: "Dr. Latanya Edenburgs", role: "Speaker & Coach", image: latanyaEdenburgs, categories: ["Speakers"] },
  { name: "Toni Tomlin", role: "Speaker & Coach", image: toniTomlin, categories: ["Speakers"] },
  { name: "Starletta Dupois", role: "Actress", image: starlettaDupois, categories: ["Actors"] },
  { name: "A.D. Roberts", role: "Speaker & Coach", image: adRoberts, categories: ["Speakers"] },
  { name: "Andre Notice", role: "Speaker & Coach", image: andreNotice, categories: ["Speakers"] },
  { name: "Anita Osuigwe-Spencer", role: "Writer & Director", image: anitaOsuigweSpencer, categories: ["Writers & Directors"] },
  { name: "Dr. Cam Hill", role: "Moderator", image: drCamHill, categories: ["Moderators"] },
  { name: "Emmai Alaquiva", role: "Producer & Director", image: emmaiAlaquiva, categories: ["Producers", "Writers & Directors"] },
  { name: "Cornelius Pratt", role: "Author, Speaker, Artist", image: corneliusPratt, categories: ["Speakers"] },
];

const featuredGuest = {
  name: "Spencer Proffer",
  role: "Music & Media Producer",
  image: spencerProffer,
};

const FILTERS: Array<"All" | Category> = [
  "All",
  "Actors",
  "Producers",
  "Speakers",
  "Writers & Directors",
  "Casting & Industry",
  "Moderators",
];

const HERO_STATS = [
  { value: "14+", label: "Featured Guests" },
  { value: "04", label: "Film · Music · Arts · Culture" },
  { value: "2026", label: "Houston Edition" },
  { value: "Soon", label: "More Announcements" },
];

const GuestCard = ({ person }: { person: Guest }) => (
  <article className="group relative overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-b from-[#0a0a0f] to-black shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_25px_60px_-20px_rgba(212,175,55,0.35)]">
    <div className="absolute inset-0 rounded-xl ring-0 ring-houston/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-houston/40 pointer-events-none" />
    <div className="relative aspect-[3/4] overflow-hidden bg-black">
      <img
        src={person.image}
        alt={`${person.name} — ${person.role}`}
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="absolute left-3 top-3">
        <span className="inline-block rounded-full border border-gold/40 bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold backdrop-blur">
          {person.categories[0]}
        </span>
      </div>
    </div>
    <div className="relative p-4 sm:p-5">
      <h3 className="text-base sm:text-lg font-bold leading-tight text-white">{person.name}</h3>
      <p className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-gold">
        {person.role}
      </p>
      <div className="mt-3 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-white/40 transition-colors group-hover:text-houston">
        <span>Guest Bio Coming Soon</span>
        <ArrowRight className="h-3 w-3" />
      </div>
    </div>
  </article>
);

const Artists = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");

  const filteredGuests = useMemo(
    () =>
      activeFilter === "All"
        ? specialGuests
        : specialGuests.filter((g) => g.categories.includes(activeFilter)),
    [activeFilter],
  );

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <SEO
        title="Special Guests — HUECONA 2026"
        description="Meet the special guests joining HUECONA 2026, including actors, producers, writers, casting leaders, speakers, moderators, and creative voices shaping Houston's entertainment future."
        path="/guests"
      />

      {/* ============ CINEMATIC HERO ============ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-black pt-28 pb-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroGuests}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-80 animate-fade-in"
          />
          {/* Left-side darkness for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
          {/* Houston blue atmosphere */}
          <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-houston/10 blur-[140px]" />
          {/* Gold spotlight shimmer */}
          <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px] animate-pulse" />
          {/* Grain */}
          <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")" }} />
        </div>

        {/* Faint H Flame watermark */}
        <img
          src={hueFlame}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-60px] bottom-[-80px] h-[520px] w-auto opacity-[0.05] z-0"
        />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-gold/30 bg-black/60 px-4 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
                HUECONA 2026 · The Guest List
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
              Special Guests.{" "}
              <span className="text-gold">Cultural Voices.</span>{" "}
              <span className="text-white/90">Industry Energy.</span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base md:text-lg text-white/75 leading-relaxed">
              Meet the actors, producers, casting leaders, writers, speakers, and creative voices
              helping shape the HUECONA experience.
            </p>

            <p className="mt-3 max-w-xl mx-auto md:mx-0 text-sm text-white/50 italic">
              A curated roster bringing Hollywood perspective, Houston talent, and cultural
              authority into one room.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="#guest-roster">
                  Explore Guests <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button asChild variant="outline_gold" size="lg">
                <Link to="/presenters">View Presenters</Link>
              </Button>
              <Button asChild variant="houston" size="lg">
                <Link to="/tickets">Get Tickets</Link>
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/15 border border-gold/15 rounded-lg overflow-hidden max-w-2xl mx-auto md:mx-0">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="bg-black/80 backdrop-blur px-4 py-4">
                  <div className="text-xl md:text-2xl font-black text-gold tracking-tight">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/55 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED GUEST SPOTLIGHT ============ */}
      <section className="relative py-20 sm:py-28 bg-[#050509] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gold/[0.06] blur-[140px] pointer-events-none" />
        <div className="container relative mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-bold mb-3">
              Featured Guest Spotlight
            </p>
            <div className="mx-auto h-px w-16 bg-gold/40" />
          </div>

          <div className="relative max-w-6xl mx-auto rounded-2xl border border-gold/40 bg-gradient-to-br from-[#0a0a10] to-black overflow-hidden shadow-[0_30px_80px_-30px_rgba(212,175,55,0.3)]">
            {/* Top gold hairline */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            {/* Watermark flame */}
            <img
              src={hueFlame}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-[-40px] bottom-[-60px] h-[380px] w-auto opacity-[0.05]"
            />

            <div className="grid md:grid-cols-2 gap-0 relative">
              <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden bg-black">
                <img
                  src={featuredGuest.image}
                  alt={`${featuredGuest.name} — ${featuredGuest.role}`}
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 md:to-black/40" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/70 px-3 py-1.5 backdrop-blur md:hidden">
                  <Sparkles className="h-3 w-3 text-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Spotlight</span>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12 md:p-14 relative">
                <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/60 px-3 py-1.5 mb-6 w-fit">
                  <Sparkles className="h-3 w-3 text-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">Spotlight</span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
                  {featuredGuest.name}
                </h2>
                <p className="mt-3 text-gold text-lg font-semibold uppercase tracking-[0.22em]">
                  {featuredGuest.role}
                </p>
                <div className="mt-6 h-px w-20 bg-gold/50" />
                <p className="mt-6 text-white/75 text-base sm:text-lg leading-relaxed max-w-md">
                  A celebrated music and media producer whose work has shaped culture across
                  generations. Spencer Proffer joins HUECONA as part of the creative energy
                  connecting Hollywood experience with Houston's rising entertainment platform.
                </p>

                <div className="mt-8">
                  <Button asChild variant="hero" size="lg">
                    <a href="#guest-roster">
                      View Full Guest Roster <ArrowRight className="ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FILTERS + ROSTER ============ */}
      <section id="guest-roster" className="relative py-20 sm:py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-bold mb-3">
              HUECONA 2026 Roster
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              The Special <span className="text-gold">Guests</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/60 text-sm sm:text-base">
              Filter by craft to navigate the roster. More names added as the program expands.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-10 -mx-4 px-4 overflow-x-auto">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 min-w-max md:min-w-0">
              {FILTERS.map((f) => {
                const isActive = activeFilter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setActiveFilter(f)}
                    aria-pressed={isActive}
                    className={`whitespace-nowrap rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                      isActive
                        ? "border-gold bg-gold text-charcoal shadow-[0_0_25px_-5px_rgba(212,175,55,0.5)]"
                        : "border-white/15 bg-white/[0.03] text-white/70 hover:border-gold/50 hover:text-gold"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredGuests.map((p) => (
              <GuestCard key={p.name} person={p} />
            ))}
          </div>

          {filteredGuests.length === 0 && (
            <p className="text-center text-white/50 mt-12">
              No guests in this category yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      {/* ============ MORE COMING SOON ============ */}
      <section className="relative py-20 bg-[#050509] overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-gold/[0.07] blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-houston/[0.07] blur-[120px] pointer-events-none" />
        <div className="container relative mx-auto px-4">
          <div className="relative max-w-5xl mx-auto rounded-2xl border border-dashed border-gold/40 bg-black/60 backdrop-blur p-10 sm:p-14 text-center">
            <div className="inline-flex items-center gap-2 mb-5 rounded-full border border-gold/30 bg-black/70 px-3 py-1.5">
              <Sparkles className="h-3 w-3 text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                Program Expanding
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              More Names. <span className="text-gold">More Moments.</span> More to Come.
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-white/65 text-base leading-relaxed">
              Additional guests, presenters, panelists, and special appearances will be announced
              as the HUECONA program expands.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="outline_gold" size="lg">
                <Link to="/contact">
                  <Mail /> Join Updates
                </Link>
              </Button>
              <Button asChild variant="hero" size="lg">
                <Link to="/tickets">
                  <Ticket /> Get Tickets
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050509] to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-gold/[0.05] blur-[160px]" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">
            HUECONA 2026
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
            Be in the <span className="text-gold">Room</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/70 text-base sm:text-lg leading-relaxed">
            HUECONA brings creative leaders, industry voices, and cultural talent together for a
            new kind of Houston entertainment experience.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/tickets">
                <Ticket /> Get Tickets
              </Link>
            </Button>
            <Button asChild variant="outline_gold" size="lg">
              <Link to="/sponsors">
                <Users /> Become a Sponsor
              </Link>
            </Button>
            <Button asChild variant="houston" size="lg">
              <Link to="/contact">
                <Mail /> Contact the Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Artists;
