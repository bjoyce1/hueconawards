import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Sparkles, Maximize2, ArrowDown } from "lucide-react";
import latanyaFlyer from "@/assets/presenters/latanya-flyer.png";
import andreFlyer from "@/assets/presenters/andre-flyer.png";
import mrcapFlyer from "@/assets/presenters/mrcap-flyer.png";
import spencerFlyer from "@/assets/presenters/spencer-flyer.png";
import heroBg from "@/assets/presenters/presenters-hero-bg.jpg";
import hoverBg from "@/assets/presenters/section-hover-bg.png";

type Presenter = {
  id: string;
  name: string;
  title: string;
  session: string;
  tagline: string;
  accent: "gold" | "houston";
  flyer: string;
};

const presenters: Presenter[] = [
  {
    id: "spencer",
    name: "Spencer Proffer",
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
    title: "MA, M.Ed. — Creator of The MOVE Method™",
    session: "Unlock the Magic in You",
    tagline: "Pause. Realign. Move forward with clarity and intention.",
    accent: "gold",
    flyer: latanyaFlyer,
  },
  {
    id: "andre",
    name: "Coach Andre",
    title: "Connection Coach",
    session: "Connection Is the New Currency",
    tagline: "How to make lasting connections in a disconnected society.",
    accent: "houston",
    flyer: andreFlyer,
  },
  {
    id: "mrcap",
    name: "Mr. CAP",
    title: "Artist · Author · Creative Visionary",
    session: "The Art of ISM Experience",
    tagline: "A code of thought, movement, and mastery — music, film, and the multidimensional creative universe.",
    accent: "gold",
    flyer: mrcapFlyer,
  },
];

// Lightweight reveal-on-scroll hook
const useReveal = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
};

const Presenters = () => {
  const [active, setActive] = useState<Presenter | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-charcoal overflow-x-hidden">
      <Navigation />
      <SEO
        title="Presenters — HUECONA 2026 Conference Speakers"
        description="Meet the presenters leading transformative sessions at HUECONA 2026 — featuring Dr. Latanya Edenburgs and Coach Andre."
        path="/presenters"
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Parallax background image */}
        <div
          className="absolute inset-0 -top-20 -bottom-20"
          style={{
            transform: `translate3d(${mouse.x * 12}px, ${
              scrollY * 0.35 + mouse.y * 12
            }px, 0) scale(1.1)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Color washes & vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--houston-blue)/0.18),transparent_55%)]" />

        {/* Floating gold particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute block rounded-full bg-gold/60"
              style={{
                width: `${2 + (i % 4)}px`,
                height: `${2 + (i % 4)}px`,
                left: `${(i * 53) % 100}%`,
                top: `${(i * 37) % 100}%`,
                opacity: 0.35 + ((i * 7) % 50) / 100,
                animation: `floatY ${6 + (i % 6)}s ease-in-out ${i * 0.3}s infinite alternate`,
                filter: "blur(0.5px)",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div
          className="container mx-auto px-4 relative z-10 text-center"
          style={{
            transform: `translateY(${scrollY * -0.15}px)`,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm mb-6 animate-fade-in">
            <Sparkles size={14} className="text-gold animate-pulse" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-semibold">
              HUECONA 2026 · Featured Sessions
            </span>
          </div>
          <h1
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            The{" "}
            <span className="relative inline-block bg-gradient-to-r from-gold via-gold-light to-gold bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_4s_linear_infinite]">
              Presenters
            </span>
          </h1>
          <p
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            A curated lineup of leaders, coaches and storytellers bringing
            transformative sessions to the stage in Houston.
          </p>

          {/* Scroll cue */}
          <div
            className="mt-14 flex flex-col items-center gap-2 text-gold/70 animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <div className="space-y-0">
        {presenters.map((p, idx) => (
          <PresenterSection
            key={p.id}
            presenter={p}
            index={idx}
            onOpen={() => setActive(p)}
          />
        ))}

        {/* More to come */}
        <section className="py-24 lg:py-32 text-center relative">
          <div className="container mx-auto px-4">
            <div className="inline-block px-6 py-4 rounded-2xl border border-dashed border-border/60 bg-background/30 hover:border-gold/40 transition-colors duration-500">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-semibold">
                More presenters announced soon
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
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

      {/* Page-scoped keyframes */}
      <style>{`
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes floatY {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-30px); }
        }
        @keyframes presenterPulse {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.08);
          }
        }
        @keyframes presenterDrift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(3%, -2%); }
        }
      `}</style>
    </div>
  );
};

function PresenterSection({
  presenter: p,
  index: idx,
  onOpen,
}: {
  presenter: Presenter;
  index: number;
  onOpen: () => void;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  const isGold = p.accent === "gold";
  const accentHsl = isGold ? "var(--gold)" : "var(--houston-blue)";
  const glowX = isGold ? "25%" : "75%";

  return (
    <section
      ref={ref}
      className="group/section relative py-20 lg:py-28 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at ${glowX} 50%, hsl(${accentHsl} / 0.14) 0%, transparent 55%), linear-gradient(180deg, hsl(var(--background)) 0%, hsl(${accentHsl} / 0.05) 40%, hsl(${accentHsl} / 0.08) 60%, hsl(var(--background)) 100%)`,
      }}
    >
      {/* Hover background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-0 group-hover/section:opacity-30 transition-opacity duration-700 ease-out"
        style={{
          backgroundImage: `url(${hoverBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(180deg, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.4) 50%, hsl(var(--background) / 0.7) 100%)`,
        }}
      />
      {/* Animated pulsing glow — activates on scroll into view */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(60% 70% at ${glowX} 50%, hsl(${accentHsl} / 0.35) 0%, hsl(${accentHsl} / 0.12) 35%, transparent 70%)`,
          mixBlendMode: "screen",
          animation: visible
            ? "presenterPulse 6s ease-in-out infinite, presenterDrift 14s ease-in-out infinite"
            : "none",
          willChange: "opacity, transform",
        }}
      />
      {/* Secondary counter-glow for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          opacity: visible ? 0.6 : 0,
          background: `radial-gradient(40% 50% at ${isGold ? "80%" : "20%"} 30%, hsl(${accentHsl} / 0.18) 0%, transparent 70%)`,
          mixBlendMode: "screen",
          animation: visible
            ? "presenterPulse 8s ease-in-out 1s infinite"
            : "none",
        }}
      />
      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <PresenterRow presenter={p} index={idx} onOpen={onOpen} />
        </div>
      </div>
    </section>
  );
};

const PresenterRow = ({
  presenter: p,
  index: idx,
  onOpen,
}: {
  presenter: Presenter;
  index: number;
  onOpen: () => void;
}) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reverse = idx % 2 === 1;
  const accentText = p.accent === "gold" ? "text-gold" : "text-houston";
  const accentBorder =
    p.accent === "gold" ? "border-gold/30" : "border-houston/40";
  const accentGlow =
    p.accent === "gold"
      ? "shadow-[0_30px_80px_-20px_hsl(var(--gold)/0.35)]"
      : "shadow-[0_30px_80px_-20px_hsl(var(--houston-blue)/0.45)]";

  const handleTilt = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });
  };

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
      style={{ transitionDelay: visible ? "0ms" : "0ms" }}
    >
      {/* Flyer */}
      <button
        onClick={onOpen}
        onMouseMove={handleTilt}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        className={`lg:col-span-7 group relative block w-full rounded-2xl overflow-hidden border ${accentBorder} bg-background/40 transition-all duration-500 hover:-translate-y-2`}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.y * -4}deg) rotateY(${tilt.x * 4}deg)`,
          transition: "transform 0.25s ease-out",
        }}
        aria-label={`View ${p.name} flyer full screen`}
      >
        {/* Accent sheen */}
        <span
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${(tilt.x + 1) * 50}% ${(tilt.y + 1) * 50}%, hsl(var(--gold)/0.18), transparent 40%)`,
          }}
        />
        <img
          src={p.flyer}
          alt={`${p.name} — ${p.session}`}
          loading="lazy"
          className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border/60 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <Maximize2 size={14} className={accentText} />
          <span className="text-xs font-semibold tracking-wide">Expand</span>
        </div>
      </button>

      {/* Copy */}
      <div className="lg:col-span-5 space-y-5">
        <div
          className={`text-[11px] tracking-[0.3em] uppercase font-bold ${accentText} flex items-center gap-3`}
        >
          <span
            className={`inline-block h-px w-8 ${
              p.accent === "gold" ? "bg-gold" : "bg-houston"
            }`}
          />
          Presenter · 0{idx + 1}
        </div>
        <h2 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-tight">
          {p.name}
        </h2>
        <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
          {p.title}
        </p>
        <div
          className={`h-px w-16 ${
            p.accent === "gold" ? "bg-gold" : "bg-houston"
          }`}
        />
        <h3 className="text-xl md:text-2xl font-bold italic">"{p.session}"</h3>
        <p className="text-muted-foreground leading-relaxed">{p.tagline}</p>
        <button
          onClick={onOpen}
          className={`group/btn relative inline-flex items-center gap-2 mt-2 px-5 py-3 rounded-full border ${accentBorder} ${accentText} text-sm font-semibold tracking-wide overflow-hidden active:scale-95 transition-all`}
        >
          <span
            className={`absolute inset-0 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ${
              p.accent === "gold" ? "bg-gold/15" : "bg-houston/20"
            }`}
          />
          <span className="relative">View Session Flyer</span>
          <Maximize2
            size={14}
            className="relative transition-transform duration-300 group-hover/btn:rotate-45"
          />
        </button>
      </div>
    </div>
  );
};

export default Presenters;
