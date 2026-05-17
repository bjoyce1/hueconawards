import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import SponsorWall from "@/components/SponsorWall";
import EventCard from "@/components/EventCard";
import { Film, Music, Palette, UtensilsCrossed, Sparkles, Users } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import hueLogo from "@/assets/hue-logo.png";
import DisplayHeadline from "@/components/DisplayHeadline";
import hueconaMonogram from "@/assets/huecona-monogram.png";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const lastTimeRef = useRef(0);
  const mutedRef = useRef(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Try to start unmuted; if browser blocks, fall back to muted autoplay
    v.muted = false;
    v.volume = 1;
    const tryPlay = v.play();
    if (tryPlay && typeof tryPlay.catch === "function") {
      tryPlay.catch(() => {
        v.muted = true;
        mutedRef.current = true;
        v.play().catch(() => {});
      });
    }

    const onTimeUpdate = () => {
      // Detect loop restart: currentTime jumps backwards
      if (v.currentTime + 0.5 < lastTimeRef.current) {
        // First playthrough complete: mute audio + auto-scroll once
        if (!mutedRef.current) {
          v.muted = true;
          mutedRef.current = true;
        }
        if (!scrolledRef.current) {
          scrolledRef.current = true;
          const next = heroRef.current?.nextElementSibling as HTMLElement | null;
          if (next) {
            next.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
      lastTimeRef.current = v.currentTime;
    };

    v.addEventListener("timeupdate", onTimeUpdate);
    return () => v.removeEventListener("timeupdate", onTimeUpdate);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO title="HUECONA Conference & Awards — Houston Entertainment" description="Two days uniting Hollywood and Houston across Film, Music, Arts, Fashion, Sports & Culinary at Blossom Hotel Houston, July 16–17, 2026." path="/" jsonLd={{"@context":"https://schema.org","@type":"Event","name":"HUECONA Conference & Awards 2026","startDate":"2026-07-16T10:00:00-05:00","endDate":"2026-07-17T22:00:00-05:00","eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode","eventStatus":"https://schema.org/EventScheduled","location":{"@type":"Place","name":"Blossom Hotel Houston","address":{"@type":"PostalAddress","addressLocality":"Houston","addressRegion":"TX","addressCountry":"US"}},"organizer":{"@type":"Organization","name":"HUECONA - Houston United in Entertainment","url":"https://hueconawards.com/"},"description":"Two-day Houston United in Entertainment Conference & Awards celebrating Film, Music, Arts, Fashion, Sports & Culinary excellence."}} />
      <main>
      {/* Promo Video Section — Hero */}
      <section ref={heroRef} className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Full-bleed looping video */}
        <video
          ref={videoRef}
          className="absolute inset-x-0 top-20 lg:top-0 bottom-0 w-full h-auto lg:h-full object-contain object-top lg:object-cover bg-background z-0"
          autoPlay
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://zrxsztpwawevybwwnegc.supabase.co/storage/v1/object/public/reels/Hunecona_Sizzle_DT_v07.mp4"
            type="video/mp4"
          />
        </video>

        {/* Bottom gradient overlay for copy readability */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent z-0" />

        <div className="container mx-auto px-4 z-10 text-center mt-auto pb-12 pt-24">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <p className="text-gold/70 text-xs font-semibold tracking-[0.3em] uppercase mb-4">See the Vision</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
              Experience <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">HUECONA</span>
            </h1>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-6" />
            <p className="text-sm text-muted-foreground mb-6">
              Watch our cinematic promo showcasing the vision and energy of HUECONA
            </p>

            {/* Scroll Indicator */}
            <div className="animate-bounce mt-4">
              <div className="w-6 h-10 border-2 border-gold/30 rounded-full mx-auto flex items-start justify-center p-2">
                <div className="w-1 h-2 bg-gold/60 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroHome})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background z-0" />
        
        {/* Subtle ambient light */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-houston/5 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-fade-in">
            <img src={hueLogo} alt="HUECONA" className="h-24 md:h-32 w-auto mx-auto mb-8 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]" />

            <div className="inline-block mb-6 px-6 py-2 bg-gold/10 border border-gold/20 rounded-full backdrop-blur-sm">
              <p className="text-gold font-semibold text-xs tracking-[0.2em] uppercase">
                From Hollywood to Houston
              </p>
            </div>
            
            <div className="inline-block mb-6 px-5 py-1.5 bg-houston/10 border border-houston/20 rounded-full backdrop-blur-sm">
              <p className="text-houston font-semibold text-xs tracking-[0.15em] uppercase">
                July 16–17, 2026 · Blossom Hotel Houston
              </p>
            </div>

            <DisplayHeadline as="h2" accent="Entertainment" className="mb-6">
              Houston United in
            </DisplayHeadline>
            
            <p className="text-lg md:text-xl font-bold text-gold/90 mb-3 tracking-[0.15em] uppercase">
              Create · Connect · Celebrate · Elevate
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed">
              Celebrating, connecting, and elevating Houston's incredible talent across Film, Music, Fashion, Sports, Culinary Arts, Media, and Innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
              <a href="https://form.jotform.com/260208455201042" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  Submit Nominations
                </Button>
              </a>
              <Link to="/tickets">
                <Button variant="outline_gold" size="xl">
                  Get Tickets
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is HUECONA Section */}
      <section className="py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-card/50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20 animate-slide-up">
            <p className="text-gold/70 text-xs font-semibold tracking-[0.3em] uppercase mb-4">About the Event</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              What Is <span className="text-gold">HUECONA?</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-8" />
            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              The Houston United in Entertainment Conference & Awards (HUECONA) is a groundbreaking mobilization of guest across Film, Music, Arts, and Culinary fields in the Houston metropolitan area and beyond.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              With a production team hailing from Hollywood, we're expanding opportunities to existing and rising talent in Texas. Houston, now the culture and culinary capital, is the new Mecca for entertainment innovation.
            </p>
          </div>

          {/* Journey Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { label: "Vision", text: "Bringing Hollywood excellence to Houston's vibrant cultural scene" },
              { label: "Mission", text: "Unite creators across Film, Music, Arts, and Culinary excellence" },
              { label: "Impact", text: "Creating opportunities for rising and established Texas talent" },
              { label: "Future", text: "Establishing Houston as America's next entertainment hub" },
            ].map((item, idx) => (
              <div key={idx} className="group bg-gradient-to-b from-card/80 to-card/30 rounded-2xl p-6 border border-border/50 hover:border-gold/30 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="text-2xl font-bold text-gold mb-3 tracking-wide">{item.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hollywood ↔ Houston Convergence */}
      <section className="relative bg-background overflow-hidden">
        <div className="container mx-auto px-4 pt-24 pb-12 text-center">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4">The Convergence</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-4">
            Two Cities. <span className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">One Stage.</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto" />
        </div>

        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full w-full md:w-[60%] overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 100% 0, calc(100% - 80px) 100%, 0 100%)",
              background:
                "linear-gradient(135deg, hsla(43, 60%, 30%, 0.7), hsla(0, 0%, 0%, 0.85)), radial-gradient(circle at 30% 40%, hsl(43, 74%, 35%), hsl(0, 0%, 5%) 70%)",
            }}
          >
            <div className="absolute inset-0 p-8 md:p-20 flex flex-col justify-end items-start">
              <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold mb-4">From Hollywood</p>
              <h3 className="font-serif text-5xl md:text-7xl font-medium leading-none tracking-tight">
                Star <span className="italic text-gold-highlight">Capital</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
                A century of craft. The stages, soundtracks, and screens that taught the world what entertainment looks like.
              </p>
            </div>
          </div>

          <div
            className="absolute top-0 right-0 h-full w-full md:w-[60%] overflow-hidden"
            style={{
              clipPath: "polygon(80px 0, 100% 0, 100% 100%, 0 100%)",
              background:
                "linear-gradient(225deg, hsla(226, 70%, 30%, 0.7), hsla(0, 0%, 0%, 0.85)), radial-gradient(circle at 70% 60%, hsl(226, 100%, 30%), hsl(0, 0%, 5%) 70%)",
            }}
          >
            <div className="absolute inset-0 p-8 md:p-20 flex flex-col justify-end items-end text-right">
              <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-[hsl(226,100%,70%)] mb-4">To Houston</p>
              <h3 className="font-serif text-5xl md:text-7xl font-medium leading-none tracking-tight">
                <span className="italic text-[hsl(226,100%,75%)]">Lone Star</span> State
              </h3>
              <p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
                The next chapter. A city writing its own grammar for film, music, fashion, and food on its own terms.
              </p>
            </div>
          </div>

          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 items-center justify-center z-10">
            <img src={hueconaMonogram} alt="HUECONA" className="w-full h-full object-contain animate-hue-float" />
          </div>
        </div>

        <div className="py-20 px-4 text-center">
          <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl font-medium leading-snug max-w-3xl mx-auto">
            Hollywood made the rules.<br />
            Houston is writing the <span className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">next chapter</span>.
          </blockquote>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-28 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-card/40 via-background to-background">
        <div className="container mx-auto px-4">
          <p className="text-gold/70 text-xs font-semibold tracking-[0.3em] uppercase text-center mb-4">What Awaits You</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Event <span className="text-gold">Highlights</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            <EventCard
              icon={<Users size={24} />}
              title="Panels & Q&A"
              description="Engage with industry leaders and gain insights from Hollywood professionals"
            />
            <EventCard
              icon={<Film size={24} />}
              title="Film Screenings"
              description="Experience premiere screenings of groundbreaking independent films"
            />
            <EventCard
              icon={<Music size={24} />}
              title="Live Performances"
              description="Enjoy electrifying performances from emerging and established guest"
            />
            <EventCard
              icon={<UtensilsCrossed size={24} />}
              title="Culinary Tastings"
              description="Savor creations from Houston's finest chefs and culinary innovators"
            />
            <EventCard
              icon={<Palette size={24} />}
              title="Fashion Showcase"
              description="Witness the fusion of Hollywood glamour and Houston style"
            />
            <EventCard
              icon={<Sparkles size={24} />}
              title="Awards Ceremony"
              description="Celebrate excellence across Film, Music, Arts, and Culinary categories"
            />
          </div>
        </div>
      </section>

      {/* Silent Interlude */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-[hsl(0,0%,2%)]">
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-serif font-bold pointer-events-none select-none whitespace-nowrap"
          style={{
            fontSize: "clamp(8rem, 18vw, 18rem)",
            color: "hsla(43, 74%, 53%, 0.04)",
            letterSpacing: "-0.05em",
          }}
          aria-hidden="true"
        >
          HUECONA
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="font-serif italic text-3xl sm:text-4xl md:text-6xl font-normal leading-tight max-w-4xl mx-auto">
            This isn't a stop on the tour.<br />
            Houston is the{" "}
            <span className="font-semibold bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
              next stage
            </span>.
          </p>
          <div className="mt-12 text-xs font-bold tracking-[0.4em] uppercase text-gold/60">
            <span className="text-gold-deep mr-4">◆</span>
            HUECONA · 2026
            <span className="text-gold-deep ml-4">◆</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-card/60 to-card/20 border border-border/50 rounded-2xl p-14">
            <p className="text-gold/70 text-xs font-semibold tracking-[0.3em] uppercase mb-4">Be Part of It</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Join the <span className="text-gold">Movement</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-6" />
            <p className="text-sm text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Be part of Houston's entertainment revolution. Submit your work, attend the conference, or secure your tickets to the awards ceremony.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tickets">
                <Button variant="hero" size="xl">
                  Get Tickets Now
                </Button>
              </Link>
              <Link to="/awards">
                <Button variant="outline_gold" size="xl">
                  Submit Your Work
                </Button>
              </Link>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-14 pt-14 border-t border-border/30">
              <h3 className="text-lg font-bold mb-3 tracking-wide">Stay in the Loop</h3>
              <p className="text-sm text-muted-foreground mb-5">
                Get exclusive updates, behind-the-scenes content, and early access to tickets
              </p>
              <form
                className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value || "";
                  window.location.href = `mailto:official@HUECONA.com?subject=${encodeURIComponent("Newsletter Signup")}&body=${encodeURIComponent(`Please add me to the HUECONA mailing list.\n\nEmail: ${email}`)}`;
                }}
              >
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-sm focus:outline-none focus:border-gold/40 transition-colors"
                />
                <Button variant="hero" type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <SponsorWall />
      </main>

      <Footer />
    </div>
  );
};

export default Index;