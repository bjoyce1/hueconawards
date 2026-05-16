import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Sparkles, Maximize2 } from "lucide-react";
import latanyaFlyer from "@/assets/presenters/latanya-flyer.png";
import andreFlyer from "@/assets/presenters/andre-flyer.png";

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
];

const Presenters = () => {
  const [active, setActive] = useState<Presenter | null>(null);

  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation />
      <SEO
        title="Presenters — HUECONA 2026 Conference Speakers"
        description="Meet the presenters leading transformative sessions at HUECONA 2026 — featuring Dr. Latanya Edenburgs and Coach Andre."
        path="/presenters"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--houston-blue)/0.10),transparent_55%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Sparkles size={14} className="text-gold" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-semibold">
              HUECONA 2026 · Featured Sessions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-5">
            The <span className="text-gold">Presenters</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated lineup of leaders, coaches and storytellers bringing
            transformative sessions to the stage in Houston.
          </p>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="space-y-20 lg:space-y-32 max-w-7xl mx-auto">
            {presenters.map((p, idx) => {
              const reverse = idx % 2 === 1;
              const accentText = p.accent === "gold" ? "text-gold" : "text-houston";
              const accentBorder =
                p.accent === "gold" ? "border-gold/30" : "border-houston/40";
              const accentGlow =
                p.accent === "gold"
                  ? "shadow-[0_30px_80px_-20px_hsl(var(--gold)/0.35)]"
                  : "shadow-[0_30px_80px_-20px_hsl(var(--houston-blue)/0.45)]";

              return (
                <article
                  key={p.id}
                  className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Flyer */}
                  <button
                    onClick={() => setActive(p)}
                    className={`lg:col-span-7 group relative block w-full rounded-2xl overflow-hidden border ${accentBorder} ${accentGlow} bg-background/40 transition-transform duration-500 hover:-translate-y-2`}
                    aria-label={`View ${p.name} flyer full screen`}
                  >
                    <img
                      src={p.flyer}
                      alt={`${p.name} — ${p.session}`}
                      loading="lazy"
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border/60 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <Maximize2 size={14} className={accentText} />
                      <span className="text-xs font-semibold tracking-wide">
                        Expand
                      </span>
                    </div>
                  </button>

                  {/* Copy */}
                  <div className="lg:col-span-5 space-y-5">
                    <div
                      className={`text-[11px] tracking-[0.3em] uppercase font-bold ${accentText}`}
                    >
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
                    <h3 className="text-xl md:text-2xl font-bold italic">
                      "{p.session}"
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {p.tagline}
                    </p>
                    <button
                      onClick={() => setActive(p)}
                      className={`inline-flex items-center gap-2 mt-2 px-5 py-3 rounded-full border ${accentBorder} ${accentText} text-sm font-semibold tracking-wide hover:bg-foreground/5 active:scale-95 transition-all`}
                    >
                      View Session Flyer
                      <Maximize2 size={14} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* More to come */}
          <div className="mt-24 lg:mt-32 text-center">
            <div className="inline-block px-6 py-4 rounded-2xl border border-dashed border-border/60 bg-background/30">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-semibold">
                More presenters announced soon
              </p>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Presenters;
