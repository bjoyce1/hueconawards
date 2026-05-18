import DisplayHeadline from "@/components/DisplayHeadline";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import heroArtists from "@/assets/hero-artists.jpg";
import hueLogo from "@/assets/hue-logo.png";

import evePomerance from "@/assets/guests/eve-pomerance.png";
import kelseyScott from "@/assets/guests/kelsey-scott.png";
import kentrellWright from "@/assets/guests/kentrell-wright.png";
import krysPooleDorsey from "@/assets/guests/krys-poole-dorsey.png";
import latanyaEdenburgs from "@/assets/guests/latanya-edenburgs.png";
import toniTomlin from "@/assets/guests/toni-tomlin.png";
import nicoleMerritt from "@/assets/guests/nicole-merritt.png";
import phyllisBailey from "@/assets/guests/phyllis-bailey.png";
import samiyahSealy from "@/assets/guests/samiyah-sealy.png";
import starlettaDupois from "@/assets/guests/starletta-dupois.png";
import adRoberts from "@/assets/guests/ad-roberts.png";
import akiaMcDaniel from "@/assets/guests/akia-mcdaniel.png";
import andreNotice from "@/assets/guests/andre-notice.png";
import angelaLewis from "@/assets/guests/angela-lewis.png";
import anitaOsuigweSpencer from "@/assets/guests/anita-osuigwe-spencer.png";
import drCamHill from "@/assets/guests/dr-cam-hill.png";

const specialGuests = [
  { name: "Eve Pomerance", role: "Casting Director", image: evePomerance },
  { name: "Kelsey Scott", role: "Actress & Writer", image: kelseyScott },
  { name: "Kentrell Wright", role: "Actor & Author", image: kentrellWright },
  { name: 'Cristala "Krys" Poole Dorsey', role: "Creative Director", image: krysPooleDorsey },
  { name: "Dr. Latanya Edenburgs", role: "Speaker & Coach", image: latanyaEdenburgs },
  { name: "Toni Tomlin", role: "Speaker & Coach", image: toniTomlin },
  { name: "Starletta Dupois", role: "Actress", image: starlettaDupois },
  { name: "A.D. Roberts", role: "Speaker & Coach", image: adRoberts },
  { name: "Andre Notice", role: "Speaker & Coach", image: andreNotice },
  { name: "Anita Osuigwe-Spencer", role: "Writer & Director", image: anitaOsuigweSpencer },
  { name: "Dr. Cam Hill", role: "Moderator", image: drCamHill },
];

const productionTeam = [
  { name: "Nicole Merritt", role: "Executive Producer", image: nicoleMerritt },
  { name: "Phyllis J. Bailey", role: "Chief of Publicity", image: phyllisBailey },
  { name: "Akia McDaniel", role: "Co-Producer", image: akiaMcDaniel },
  { name: "Angela Lewis", role: "Co-Producer", image: angelaLewis },
  { name: "Samiyah Sealy", role: "Production Assistant", image: samiyahSealy },
];

const GuestCard = ({ person }: { person: { name: string; role: string; image: string } }) => (
  <div className="bg-card border border-border rounded-lg overflow-hidden card-hover gold-glow group">
    <div className="aspect-[4/3] overflow-hidden bg-charcoal">
      <img
        src={person.image}
        alt={`${person.name} — ${person.role}`}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-3 sm:p-5 text-center">
      <h3 className="text-sm sm:text-lg font-bold leading-tight">{person.name}</h3>
      <p className="text-gold text-[11px] sm:text-sm mt-1 tracking-wide">{person.role}</p>
    </div>
  </div>
);

const Artists = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO
        title="Special Guests & Production Team — HUECONA 2026"
        description="Meet the special guests and production team behind HUECONA 2026 — actors, writers, casting directors, producers, and creative leaders."
        path="/guests"
      />

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroArtists})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-charcoal z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <img
            src={hueLogo}
            alt="HUE"
            className="h-20 md:h-28 w-auto mx-auto mb-8 animate-fade-in"
          />
          <DisplayHeadline accent="Guests" className="mb-6 animate-fade-in">Special</DisplayHeadline>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Celebrating the talent, creativity, and vision of Houston's entertainment community
          </p>
        </div>
      </section>

      {/* Special Guests */}
      <section className="py-14 sm:py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-semibold mb-3">
              HUECONA 2026
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-wide">
              Special <span className="text-gold">Guests</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {specialGuests.map((p) => (
              <GuestCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Production Team */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-houston tracking-[0.3em] uppercase text-xs md:text-sm font-semibold mb-3">
              Behind the Scenes
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-wide">
              Production <span className="text-gold">Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto">
            {productionTeam.map((p) => (
              <GuestCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Artists;
