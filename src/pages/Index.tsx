import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import SponsorWall from "@/components/SponsorWall";
import MarblismFeature from "@/components/MarblismFeature";
import MarblismRibbon from "@/components/MarblismRibbon";
import EventCard from "@/components/EventCard";
import Reveal from "@/components/Reveal";
import { Film, Music, Palette, UtensilsCrossed, Sparkles, Users } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import hueLogo from "@/assets/hue-logo.png";
import DisplayHeadline from "@/components/DisplayHeadline";
import hueconaMonogram from "@/assets/huecona-monogram.png";

// BMW-inspired dark surface tokens
const SURFACE_DARK = "bg-[#1a2129]";
const SURFACE_DARK_ELEVATED = "bg-[#262e38]";
const HAIRLINE = "border-white/10";
const EYEBROW = "text-[11px] font-bold tracking-[0.15em] uppercase";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const lastTimeRef = useRef(0);
  const mutedRef = useRef(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

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
      if (v.currentTime + 0.5 < lastTimeRef.current) {
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
    <div className="min-h-screen bg-[#0f1419]">
      <Navigation />
      <SEO title="HUECONA Conference & Awards — Houston Entertainment" description="Two days uniting Hollywood and Houston across Film, Music, Arts, Fashion, Sports & Culinary at Blossom Hotel Houston, July 16–17, 2026." path="/" jsonLd={{"@context":"https://schema.org","@type":"Event","name":"HUECONA Conference & Awards 2026","startDate":"2026-07-16T10:00:00-05:00","endDate":"2026-07-17T22:00:00-05:00","eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode","eventStatus":"https://schema.org/EventScheduled","location":{"@type":"Place","name":"Blossom Hotel Houston","address":{"@type":"PostalAddress","addressLocality":"Houston","addressRegion":"TX","addressCountry":"US"}},"organizer":{"@type":"Organization","name":"HUECONA - Houston United in Entertainment","url":"https://hueconawards.com/"},"description":"Two-day Houston United in Entertainment Conference & Awards celebrating Film, Music, Arts, Fashion, Sports & Culinary excellence."}} />
      <main>

      {/* Promo Video Section — Hero (dark navy band) */}
      <section ref={heroRef} className={`min-h-screen flex flex-col relative overflow-hidden ${SURFACE_DARK}`}>
        <video
          ref={videoRef}
          className="absolute inset-x-0 top-20 lg:top-0 bottom-0 w-full h-auto lg:h-full object-contain object-top lg:object-cover bg-[#1a2129] z-0"
          autoPlay
          loop
          playsInline
          preload="auto"
          poster={heroHome}
        >
          <source
            src="https://zrxsztpwawevybwwnegc.supabase.co/storage/v1/object/public/reels/Hunecona_Sizzle_DT_v07.mp4"
            type="video/mp4"
          />
        </video>


        <div className="container mx-auto px-4 z-10 text-center mt-auto pb-16 pt-24">
          <div className="max-w-5xl mx-auto text-center">
            <p className={`${EYEBROW} text-gold mb-5 animate-fade-in`} style={{ animationDelay: "200ms", animationFillMode: "both" }}>See the Vision</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-white animate-fade-in" style={{ animationDelay: "420ms", animationFillMode: "both" }}>
              Experience <span className="text-gold">HUECONA</span>
            </h1>
            <p className="text-sm font-light text-white/70 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "680ms", animationFillMode: "both" }}>
              Watch our cinematic promo showcasing the vision and energy of HUECONA
            </p>
          </div>
        </div>
      </section>

      {/* M-style accent stripe — gold + houston blue divider */}
      <div className="h-[3px] w-full flex origin-left animate-hairline-sweep">
        <div className="flex-1 bg-houston" />
        <div className="flex-1 bg-gold-deep" />
        <div className="flex-1 bg-gold" />
      </div>

      {/* Hero Section — flat, no glows, no blurs */}
      <section className="relative pt-28 pb-24 bg-[#0f1419] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 z-0 animate-ken-burns"
          style={{ backgroundImage: `url(${heroHome})` }}
        />

        <div className="container mx-auto px-4 z-10 relative text-center">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <img src={hueLogo} alt="HUECONA" className="h-20 md:h-28 w-auto mx-auto mb-10" />

            <div className="inline-flex items-center gap-3 mb-8">
              <span className={`${EYEBROW} text-gold px-3 py-1.5 border ${HAIRLINE} bg-[#1a2129]`}>
                From Hollywood to Houston
              </span>
              <span className={`${EYEBROW} text-houston px-3 py-1.5 border ${HAIRLINE} bg-[#1a2129] hidden sm:inline-block`}>
                July 16–17, 2026 · Blossom Hotel Houston
              </span>
            </div>

            <DisplayHeadline as="h2" accent="Entertainment" className="mb-8">
              Houston United in
            </DisplayHeadline>

            <p className={`${EYEBROW} text-gold/90 mb-6`}>
              Create · Connect · Celebrate · Elevate
            </p>

            <p className="text-base md:text-lg font-light text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Celebrating, connecting, and elevating Houston's incredible talent across Film, Music, Fashion, Sports, Culinary Arts, Media, and Innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="https://form.jotform.com/260208455201042" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="rounded-none">
                  Submit Nominations
                </Button>
              </a>
              <Link to="/tickets">
                <Button variant="outline_gold" size="xl" className="rounded-none">
                  Get Tickets
                </Button>
              </Link>
              <a href="https://events.ticketleap.com/tickets/riche/huecona-conference-and-awards" target="_blank" rel="noopener noreferrer">
                <Button variant="houston" size="xl" className="rounded-none">
                  Become A Vendor
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marblism — Premiere Sponsor Feature */}
      <MarblismFeature />

      {/* What Is HUECONA — denser BMW-grid */}
      <section className={`py-20 ${SURFACE_DARK}`}>
        <div className="container mx-auto px-4">
          <Reveal className="max-w-3xl mb-16">
            <p className={`${EYEBROW} text-gold mb-4`}>About the Event</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">
              What Is <span className="text-gold">HUECONA?</span>
            </h2>
            <p className="text-base font-light text-white/75 leading-relaxed mb-4">
              The Houston United in Entertainment Conference &amp; Awards (HUECONA) is a groundbreaking mobilization of guest across Film, Music, Arts, and Culinary fields in the Houston metropolitan area and beyond.
            </p>
            <p className="text-base font-light text-white/75 leading-relaxed">
              With a production team hailing from Hollywood, we're expanding opportunities to existing and rising talent in Texas. Houston, now the culture and culinary capital, is the new Mecca for entertainment innovation.
            </p>
          </Reveal>

          {/* 4-up BMW model-card grid */}
          <Reveal delay={1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { label: "Vision", text: "Bringing Hollywood excellence to Houston's vibrant cultural scene" },
              { label: "Mission", text: "Unite creators across Film, Music, Arts, and Culinary excellence" },
              { label: "Impact", text: "Creating opportunities for rising and established Texas talent" },
              { label: "Future", text: "Establishing Houston as America's next entertainment hub" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group ${SURFACE_DARK_ELEVATED} p-8 transition-colors duration-300 hover:bg-[#2d3744]`}
              >
                <p className={`${EYEBROW} text-gold mb-4`}>0{idx + 1} / {item.label}</p>
                <p className="text-lg font-bold text-white leading-snug mb-3">{item.text}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.15em] uppercase text-gold group-hover:gap-3 transition-all">
                  Learn More
                  <span>→</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Hollywood ↔ Houston Convergence */}
      <section className="relative bg-[#0f1419] overflow-hidden border-t border-white/10">
        <div className="container mx-auto px-4 pt-20 pb-12">
          <Reveal>
            <p className={`${EYEBROW} text-gold mb-4`}>The Convergence</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white max-w-3xl">
              Two Cities. <span className="text-gold">One Stage.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative md:h-[560px] overflow-hidden flex flex-col md:block">
          <div
            className="relative md:absolute md:top-0 md:left-0 h-[280px] sm:h-[360px] md:h-full w-full md:w-[60%] overflow-hidden md:[clip-path:polygon(0_0,100%_0,calc(100%-80px)_100%,0_100%)]"
            style={{
              background:
                "linear-gradient(135deg, hsla(43, 60%, 25%, 0.85), hsla(0, 0%, 6%, 0.95)), radial-gradient(circle at 30% 40%, hsl(43, 74%, 30%), hsl(0, 0%, 8%) 70%)",
            }}
          >
            <div className="absolute inset-0 p-6 sm:p-10 md:p-20 flex flex-col justify-end items-start">
              <p className={`${EYEBROW} text-gold mb-3`}>From Hollywood</p>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none tracking-tight text-white">
                Star <span className="text-gold-highlight">Capital</span>
              </h3>
              <p className="text-sm font-light text-white/70 mt-4 max-w-xs leading-relaxed">
                A century of craft. The stages, soundtracks, and screens that taught the world what entertainment looks like.
              </p>
            </div>
          </div>

          <div
            className="relative md:absolute md:top-0 md:right-0 h-[280px] sm:h-[360px] md:h-full w-full md:w-[60%] overflow-hidden md:[clip-path:polygon(80px_0,100%_0,100%_100%,0_100%)]"
            style={{
              background:
                "linear-gradient(225deg, hsla(226, 70%, 25%, 0.85), hsla(0, 0%, 6%, 0.95)), radial-gradient(circle at 70% 60%, hsl(226, 100%, 25%), hsl(0, 0%, 8%) 70%)",
            }}
          >
            <div className="absolute inset-0 p-6 sm:p-10 md:p-20 flex flex-col justify-end items-end text-right">
              <p className={`${EYEBROW} text-[hsl(226,100%,70%)] mb-3`}>To Houston</p>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none tracking-tight text-white">
                <span className="text-[hsl(226,100%,75%)]">Lone Star</span> State
              </h3>
              <p className="text-sm font-light text-white/70 mt-4 max-w-xs leading-relaxed">
                The next chapter. A city writing its own grammar for film, music, fashion, and food on its own terms.
              </p>
            </div>
          </div>

          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 items-center justify-center z-10">
            <img src={hueconaMonogram} alt="HUECONA" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="py-20 px-4">
          <div className="container mx-auto">
            <Reveal as="p" className="text-2xl sm:text-3xl md:text-4xl font-black leading-snug tracking-tight max-w-3xl text-white">
              <>
                Hollywood made the rules.<br />
                Houston is writing the <span className="text-gold">next chapter</span>.
              </>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className={`py-20 ${SURFACE_DARK} border-t ${HAIRLINE}`}>
        <div className="container mx-auto px-4">
          <Reveal>
            <p className={`${EYEBROW} text-gold mb-4`}>What Awaits You</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-12 text-white">
              Event <span className="text-gold">Highlights</span>
            </h2>
          </Reveal>

          <Reveal delay={1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { icon: <Users size={22} />, title: "Panels & Q&A", description: "Engage with industry leaders and gain insights from Hollywood professionals" },
              { icon: <Film size={22} />, title: "Film Screenings", description: "Experience premiere screenings of groundbreaking independent films" },
              { icon: <Music size={22} />, title: "Live Performances", description: "Enjoy electrifying performances from emerging and established guest" },
              { icon: <UtensilsCrossed size={22} />, title: "Culinary Tastings", description: "Savor creations from Houston's finest chefs and culinary innovators" },
              { icon: <Palette size={22} />, title: "Fashion Showcase", description: "Witness the fusion of Hollywood glamour and Houston style" },
              { icon: <Sparkles size={22} />, title: "Awards Ceremony", description: "Celebrate excellence across Film, Music, Arts, and Culinary categories" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group ${SURFACE_DARK_ELEVATED} p-8 transition-colors duration-300 hover:bg-[#2d3744]`}
              >
                <div className="text-gold mb-5">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm font-light text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Silent Interlude — cleaner, less ornamental */}
      <section className="relative py-24 bg-[#0f1419] border-t border-white/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <Reveal>
            <p className={`${EYEBROW} text-gold mb-6`}>HUECONA · 2026</p>
            <p className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.1] tracking-tight max-w-4xl text-white">
              This isn't a stop on the tour.<br />
              Houston is the <span className="text-gold">next stage</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Call to Action — square BMW band */}
      <section className={`py-20 ${SURFACE_DARK} border-t ${HAIRLINE}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start">
            <div>
              <p className={`${EYEBROW} text-gold mb-4`}>Be Part of It</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
                Join the <span className="text-gold">Movement</span>.
              </h2>
              <p className="text-base font-light text-white/75 leading-relaxed max-w-xl mb-8">
                Be part of Houston's entertainment revolution. Submit your work, attend the conference, or secure your tickets to the awards ceremony.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/tickets">
                  <Button variant="hero" size="xl" className="rounded-none">Get Tickets Now</Button>
                </Link>
                <Link to="/awards">
                  <Button variant="outline_gold" size="xl" className="rounded-none">Submit Your Work</Button>
                </Link>
              </div>
            </div>

            <div className={`${SURFACE_DARK_ELEVATED} border ${HAIRLINE} p-8`}>
              <p className={`${EYEBROW} text-gold mb-4`}>Newsletter</p>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Stay in the Loop</h3>
              <p className="text-sm font-light text-white/70 mb-6 leading-relaxed">
                Get exclusive updates, behind-the-scenes content, and early access to tickets.
              </p>
              <form
                className="flex flex-col gap-2"
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
                  className={`w-full h-12 px-4 bg-[#1a2129] border ${HAIRLINE} text-sm font-light text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors`}
                />
                <Button variant="hero" type="submit" className="rounded-none h-12">Subscribe</Button>
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
