import { useState } from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import MarblismRibbon from "@/components/MarblismRibbon";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import heroConference from "@/assets/hero-conference.jpg";
import heroVolunteer from "@/assets/hero-volunteer.jpg";
import volunteerGraphic from "@/assets/volunteer-graphic.png";

const EVENT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "HUECONA Conference & Awards 2026",
  startDate: "2026-07-16T10:00:00-05:00",
  endDate: "2026-07-17T22:00:00-05:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Blossom Hotel Houston",
    address: { "@type": "PostalAddress", addressLocality: "Houston", addressRegion: "TX", addressCountry: "US" },
  },
  organizer: { "@type": "Organization", name: "HUECONA - Houston United in Entertainment", url: "https://hueconawards.com/" },
  description: "Two-day Houston United in Entertainment Conference & Awards celebrating Film, Music, Arts, Fashion, Sports & Culinary excellence.",
};

type Session = {
  id: string;
  day: string;
  time: string;
  tag: string;
  title: string;
  speaker: string;
  description: string;
  details: string;
};

const sessions: Session[] = [
  {
    id: "spencer",
    day: "Day 1 · Open",
    time: "9:00 AM",
    tag: "Opening Keynote",
    title: "Cinematic Narratives That Move Culture",
    speaker: "Spencer Proffer — Visionary Media Producer",
    description:
      "Turning iconic music, real-life stories, and cultural truth into story-driven projects that travel across screens, platforms, and generations.",
    details:
      "Spencer Proffer opens HUECONA with a keynote on building story-driven projects with cultural staying power — how the best music, film, and media work travels across formats and generations.",
  },
  {
    id: "latanya",
    day: "Day 1",
    time: "11:30 AM",
    tag: "Masterclass · Personal Growth",
    title: "Unlock the Magic in You",
    speaker: "Dr. Latanya Edenburgs — Creator of The MOVE Method™",
    description:
      "Pause. Realign. Move forward with clarity and intention. A working session on the framework behind The MOVE Method™.",
    details:
      "A hands-on masterclass introducing The MOVE Method™ — Dr. Edenburgs' framework for realigning and moving forward with intention. Bring a notebook.",
  },
  {
    id: "andre",
    day: "Day 1",
    time: "2:00 PM",
    tag: "Panel · Networking",
    title: "Connection Is the New Currency",
    speaker: "Coach Andre — Connection Coach",
    description:
      "How to make lasting connections in a disconnected society — the relationships that actually move careers forward.",
    details:
      "Coach Andre leads a session on building genuine professional relationships in an era of surface-level networking — and why connection is the real currency of a creative career.",
  },
  {
    id: "adroberts",
    day: "Day 2",
    time: "10:00 AM",
    tag: "Masterclass · Mindset",
    title: "The Identity Factor",
    speaker: "A.D. Roberts — Hypnotherapist & Identity Architect",
    description:
      "From being overlooked to being unforgettable through Main Character Energy. You don't need more luck — you need a new identity.",
    details:
      "A.D. Roberts unpacks the psychology of reinvention — how shifting your identity, not just your tactics, is what turns being overlooked into being unforgettable.",
  },
  {
    id: "mrcap",
    day: "Day 2 · Close",
    time: "4:00 PM",
    tag: "Closing Experience",
    title: "The Art of ISM Experience",
    speaker: "Mr. CAP — Artist, Author & Creative Visionary",
    description:
      "A code of thought, movement, and mastery — music, film, and the multidimensional creative universe behind The Art of ISM.",
    details:
      "Mr. CAP closes the conference with The Art of ISM Experience — a live exploration of the thought, movement, and mastery behind his multidimensional creative universe spanning music, film, and publishing.",
  },
];

const upcomingTopics = [
  "Film · Script to Screen",
  "Music · Independence & Innovation",
  "Visual Arts · The Digital Age",
  "Culinary · Kitchen to Empire",
  "Cross-Industry Collaboration",
  "Marketing for Creatives",
  "The Future of Entertainment",
  "Q&A with Award Winners",
];

const gcalUrl = (s: Session) =>
  `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "HUECONA: " + s.title
  )}&dates=20260716T140000Z/20260718T040000Z&details=${encodeURIComponent(
    s.description + " — " + s.speaker
  )}&location=${encodeURIComponent("Blossom Hotel Houston, Houston, TX")}`;

const Conference = () => {
  const [selected, setSelected] = useState<Session | null>(null);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <SEO
        title="HUECONA Conference 2026 — Keynotes, Masterclasses & Panels"
        description="Two days of keynotes, masterclasses, and panels with Spencer Proffer, Dr. Latanya Edenburgs, Coach Andre, A.D. Roberts, Mr. CAP, and more at Blossom Hotel Houston."
        path="/conference"
        jsonLd={EVENT_JSONLD}
      />

      {/* ============ HERO ============ */}
      <section className="relative min-h-screen grid grid-rows-[auto_1fr_auto] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroConference})` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, hsla(0 0% 2% / 0.6) 0%, transparent 25%, transparent 55%, hsla(0 0% 2% / 0.9) 100%), radial-gradient(ellipse at center, transparent 40%, hsla(0 0% 0% / 0.5) 100%)",
          }}
        />

        {/* Masthead */}
        <div className="relative z-[3] grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-8 px-[max(2rem,5vw)] pt-32 md:pt-24">
          <div className="flex items-center gap-3">
            <span className="block h-px bg-gradient-to-r from-transparent to-gold-antique max-w-20 flex-1" />
            <span className="font-mono text-[11px] font-medium tracking-[0.25em] uppercase text-gold whitespace-nowrap">
              July 16–17, 2026
            </span>
          </div>
          <div className="hidden md:block font-mono text-[11px] tracking-[0.4em] uppercase text-gold-antique text-center">
            The HUECONA Conference
          </div>
          <div className="flex items-center gap-3 justify-end">
            <span className="font-mono text-[11px] font-medium tracking-[0.25em] uppercase text-gold whitespace-nowrap">
              Blossom Hotel Houston
            </span>
            <span className="block h-px bg-gradient-to-l from-transparent to-gold-antique max-w-20 flex-1" />
          </div>
        </div>

        {/* Body */}
        <div className="relative z-[3] flex flex-col items-center justify-center text-center px-[max(2rem,5vw)]">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="block w-1.5 h-1.5 rounded-full bg-gold animate-[pulse-dot_2s_ease-in-out_infinite]" />
            <span className="font-mono text-[11px] font-medium tracking-[0.3em] uppercase text-gold">
              Two Days · One Stage
            </span>
          </div>
          <h1
            className="font-serif font-normal leading-[0.9] tracking-[-0.03em] mb-8"
            style={{ fontSize: "clamp(3rem, 9vw, 8.5rem)" }}
          >
            The{" "}
            <span className="italic font-medium bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
              Conference
            </span>
          </h1>
          <p
            className="font-serif leading-relaxed text-foreground/80 max-w-xl"
            style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)" }}
          >
            Keynotes, masterclasses, and panels with the producers, artists, and storytellers building the future of entertainment —{" "}
            <em className="italic text-gold-highlight">where Hollywood meets Houston.</em>
          </p>
        </div>

        {/* Slate */}
        <div className="relative z-[3] grid grid-cols-2 md:grid-cols-4 border-t border-gold-antique mx-[max(2rem,5vw)] mb-8 pt-6">
          {[
            { label: "Format", value: "2-Day Conference", italic: "Conference" },
            { label: "Sessions", value: "Keynotes + Panels", italic: "Keynotes + Panels" },
            { label: "Featured Speakers", value: "05 + more", italic: "05" },
            { label: "Venue", value: "Blossom Hotel", italic: "Hotel" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`px-6 py-2 flex flex-col gap-1.5 ${i > 0 ? "md:border-l border-border" : ""} ${
                i % 2 === 1 ? "border-l border-border" : ""
              }`}
            >
              <span className="font-mono text-[10px] font-medium tracking-[0.25em] uppercase text-gold-antique">
                {item.label}
              </span>
              <span className="font-serif font-medium" style={{ fontSize: "clamp(1rem, 1.3vw, 1.25rem)" }}>
                {item.value.split(item.italic)[0]}
                <em className="italic text-gold-highlight">{item.italic}</em>
                {item.value.split(item.italic)[1]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TWO TRACKS OVERVIEW ============ */}
      <section className="py-32 bg-charcoal">
        <div className="text-center mb-20 px-[max(2rem,5vw)]">
          <div className="font-mono text-[11px] font-medium tracking-[0.3em] uppercase text-gold mb-6">
            § 01 — How It Works
          </div>
          <h2 className="font-serif font-medium leading-none tracking-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Two days. Two{" "}
            <span className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
              tracks.
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border max-w-5xl mx-auto">
          {[
            {
              num: "01",
              name: "The Conference",
              desc: "Daytime keynotes, masterclasses, and panel discussions with named industry leaders. Learn the craft and business of film, music, fashion, arts, and culinary from people doing it at the highest level.",
            },
            {
              num: "02",
              name: "The Awards",
              desc: "The evening of July 17 closes with the inaugural HUE Awards ceremony — eight categories honoring Houston's best across every creative discipline, presented with the sculpted gold flame trophy.",
            },
          ].map((t) => (
            <div key={t.num} className="bg-background p-12">
              <div className="font-serif italic font-medium leading-none mb-4 bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent text-5xl">
                {t.num}
              </div>
              <h3 className="font-serif text-3xl font-medium mb-3">{t.name}</h3>
              <p className="font-serif text-lg leading-relaxed text-foreground/75">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FEATURED SESSIONS ============ */}
      <section className="py-32 bg-background border-t border-border">
        <div className="flex items-baseline justify-between flex-wrap gap-8 px-[max(2rem,5vw)] pb-16 border-b border-border max-w-7xl mx-auto">
          <h2 className="font-serif font-medium leading-none tracking-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            Featured{" "}
            <span className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
              Sessions
            </span>
          </h2>
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold">
            Confirmed Speakers · Schedule Subject to Change
          </span>
        </div>

        <div>
          {sessions.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelected(s)}
              className="group relative grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-4 md:gap-12 items-center px-[max(1.5rem,5vw)] py-10 border-b border-border max-w-7xl mx-auto cursor-pointer transition-colors duration-700 hover:bg-gold/[0.02]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, hsla(43 74% 53% / 0.04), transparent)" }}
              />
              <div className="flex md:flex-col gap-2 md:gap-1 items-baseline">
                <span className="font-mono text-[10px] font-medium tracking-[0.25em] uppercase text-gold-antique">
                  {s.day}
                </span>
                <span className="font-serif italic text-2xl font-medium text-gold-highlight">{s.time}</span>
              </div>
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.3em] uppercase text-gold mb-3">
                  <span className="w-4 h-px bg-current" />
                  {s.tag}
                </div>
                <h3
                  className="font-serif font-medium leading-tight tracking-tight mb-2"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
                >
                  {s.title}
                </h3>
                <p className="font-serif italic text-lg text-gold-highlight mb-2">{s.speaker}</p>
                <p className="font-serif text-base leading-relaxed text-foreground/75 max-w-2xl">{s.description}</p>
              </div>
              <div className="md:flex hidden flex-col items-end">
                <a
                  href={gcalUrl(s)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-antique font-mono text-[10px] font-medium tracking-[0.2em] uppercase text-gold bg-transparent transition-all duration-500 group-hover:border-gold group-hover:bg-gold/5 whitespace-nowrap"
                >
                  + Add to Schedule
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ MORE TOPICS ============ */}
      <section className="py-24 bg-background">
        <div className="text-center mb-12 px-[max(2rem,5vw)]">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
            § 02 — Also On the Program
          </div>
          <h2 className="font-serif font-medium" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            More sessions{" "}
            <span className="italic text-gold-highlight">being announced</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto px-[max(2rem,5vw)]">
          {upcomingTopics.map((t) => (
            <span
              key={t}
              className="font-mono text-xs tracking-[0.15em] uppercase text-foreground/70 border border-border rounded-full px-5 py-2.5 transition-all duration-500 hover:border-gold-antique hover:text-gold-highlight"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ============ VOLUNTEER ============ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroVolunteer})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-gold/40 to-houston/40 rounded-2xl blur-xl" />
                <img
                  src={volunteerGraphic}
                  alt="2026 HUECONA Conference & Awards Volunteer"
                  width={1000}
                  height={760}
                  loading="lazy"
                  className="relative rounded-2xl border-2 border-gold/40 shadow-2xl max-w-md w-full"
                />
              </div>
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold px-3 py-1.5 border border-white/10 bg-[#1a2129] inline-block mb-6">
                Join The Team
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">
                Volunteer at <span className="text-gold">HUECONA</span>
              </h2>
              <p className="text-base md:text-lg text-white/75 leading-relaxed mb-8">
                Be part of the magic behind Houston's premier entertainment conference and awards. Volunteers receive free event access, exclusive HUECONA swag, and unforgettable behind-the-scenes experiences alongside industry leaders.
              </p>
              <a
                href="https://www.volunteerhou.org/agency/detail/HeartbeatPerformingArtsCharities/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="xl">Volunteer</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Session detail modal */}
      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="bg-charcoal border-gold-antique max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-gold mb-2">
                  {selected.day} · {selected.time} — {selected.tag}
                </div>
                <DialogTitle className="font-serif text-3xl md:text-4xl font-medium leading-none tracking-tight">
                  {selected.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="font-serif italic text-lg text-gold-highlight">{selected.speaker}</p>
                <p className="font-serif text-base leading-relaxed text-foreground/80">{selected.details}</p>
                <Button variant="hero" className="w-full mt-2" asChild>
                  <a href={gcalUrl(selected)} target="_blank" rel="noopener noreferrer">
                    Add to My Schedule
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <MarblismRibbon
        eyebrow="Conference Premiere Sponsor"
        headline="Behind every modern creator: an AI team. Meet Marblism."
        ctaLabel="Hire AI Employees"
        ctaKey="conference_ribbon"
      />
      <Footer />
    </div>
  );
};

export default Conference;
