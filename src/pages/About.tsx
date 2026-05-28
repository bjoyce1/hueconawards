import PageHero from "@/components/PageHero";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import MarblismRibbon from "@/components/MarblismRibbon";

import { Users, Target, MapPin, Award } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import hueLogo from "@/assets/hue-logo.png";
import nicoleMerritt from "@/assets/guests/nicole-merritt.png";
import phyllisBailey from "@/assets/guests/phyllis-bailey.png";
import murielFunches from "@/assets/guests/muriel-funches.png";
import akiaMcDaniel from "@/assets/guests/akia-mcdaniel.png";
import angelaLewis from "@/assets/guests/angela-lewis.png";
import samiyahSealy from "@/assets/guests/samiyah-sealy.png";

const productionTeam = [
  { name: "Nicole Merritt", role: "Executive Producer", image: nicoleMerritt },
  { name: "Phyllis J. Bailey", role: "Chief of Publicity", image: phyllisBailey },
  { name: "Muriel Funches", role: "Chief of Syndication", image: murielFunches },
  { name: "Akia McDaniel", role: "Co-Producer", image: akiaMcDaniel },
  { name: "Angela Lewis", role: "Co-Producer", image: angelaLewis },
  { name: "Samiyah Sealy", role: "Production Assistant", image: samiyahSealy },
];


const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO title="About HUECONA — Houston's Entertainment Movement" description="Learn about HUECONA: the mission, the team, and how Hollywood expertise is uniting with Houston's diverse cultural scene." path="/about"  />

      <PageHero
        backgroundImage={heroAbout}
        eyebrow="The Movement"
        title="About"
        accent="HUECONA"
        description="Houston United in Entertainment — a movement celebrating creativity across Film, Music, Arts, and Culinary excellence."
      />

      {/* Mission Statement */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-12">
              <Target className="text-gold flex-shrink-0" size={48} />
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gold">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Houston United in Entertainment Conference & Awards (HUECONA) exists to unite, celebrate, and elevate guest across Film, Music, Arts, and Culinary fields. We bring Hollywood-level production expertise to Houston's vibrant creative community, creating unprecedented opportunities for both established and emerging talent in Texas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Award className="text-houston flex-shrink-0" size={48} />
              <div>
                <h2 className="text-3xl font-bold mb-4 text-houston">The Purpose</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  HUECONA serves as a platform for recognition, collaboration, and growth. Through our conference programming, awards ceremony, and year-round initiatives, we foster connections between Hollywood professionals and Houston's creative community, establishing the city as a major hub for entertainment and cultural innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Houston */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <MapPin className="text-gold mx-auto mb-4" size={56} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Why <span className="text-gold">Houston?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Houston has emerged as America's culture and culinary capital, a diverse metropolis where creativity thrives across every discipline
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gold">Cultural Diversity</h3>
              <p className="text-muted-foreground">
                Houston's multicultural landscape creates a rich tapestry of artistic expression, making it the perfect home for a celebration of entertainment that transcends boundaries.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gold">Culinary Innovation</h3>
              <p className="text-muted-foreground">
                Recognized globally as a food destination, Houston's culinary scene rivals any major city, with award-winning chefs pushing creative boundaries daily.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gold">Arts & Music Scene</h3>
              <p className="text-muted-foreground">
                From world-class museums to vibrant street art and a thriving music scene spanning all genres, Houston pulses with creative energy.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gold">Film Infrastructure</h3>
              <p className="text-muted-foreground">
                With growing production facilities, diverse locations, and supportive film commissions, Houston is becoming a premier destination for filmmakers.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gold">Economic Growth</h3>
              <p className="text-muted-foreground">
                As one of America's fastest-growing cities, Houston offers unparalleled opportunities for creative professionals and entertainment ventures.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gold">Creative Community</h3>
              <p className="text-muted-foreground">
                A supportive ecosystem of guest, creators, and entrepreneurs makes Houston the ideal place to launch and sustain a thriving career in entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hollywood Production Team */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Users className="text-gold mx-auto mb-4" size={56} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gold">Production Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Award-winning professionals bringing decades of Hollywood experience to Houston
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 max-w-6xl mx-auto">
            {productionTeam.map((member) => (
              <div key={member.name} className="group bg-card overflow-hidden transition-colors duration-300 hover:bg-[hsl(var(--charcoal-elevated))]">
                <div className="aspect-[4/5] overflow-hidden bg-charcoal">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <p className="bmw-eyebrow text-gold mb-2">{member.role}</p>
                  <h3 className="text-base font-bold tracking-tight text-white leading-snug">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


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
