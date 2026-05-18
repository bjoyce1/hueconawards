import DisplayHeadline from "@/components/DisplayHeadline";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import MarblismRibbon from "@/components/MarblismRibbon";
import HonoreesGrid from "@/components/HonoreesGrid";
import { Users, Target, MapPin, Award } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import hueLogo from "@/assets/hue-logo.png";
import nicoleMerritt from "@/assets/guests/nicole-merritt.png";
import phyllisBailey from "@/assets/guests/phyllis-bailey.png";
import akiaMcDaniel from "@/assets/guests/akia-mcdaniel.png";
import angelaLewis from "@/assets/guests/angela-lewis.png";
import samiyahSealy from "@/assets/guests/samiyah-sealy.png";

const productionTeam = [
  { name: "Nicole Merritt", role: "Executive Producer", image: nicoleMerritt },
  { name: "Phyllis J. Bailey", role: "Chief of Publicity", image: phyllisBailey },
  { name: "Akia McDaniel", role: "Co-Producer", image: akiaMcDaniel },
  { name: "Angela Lewis", role: "Co-Producer", image: angelaLewis },
  { name: "Samiyah Sealy", role: "Production Assistant", image: samiyahSealy },
];


const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO title="About HUECONA — Houston's Entertainment Movement" description="Learn about HUECONA: the mission, the team, and how Hollywood expertise is uniting with Houston's diverse cultural scene." path="/about"  />

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroAbout})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-charcoal z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <img src={hueLogo} alt="HUECONA" className="h-20 md:h-28 w-auto mx-auto mb-8 animate-fade-in" />
          <DisplayHeadline accent="HUECONA" className="mb-6 animate-fade-in">About</DisplayHeadline>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Houston United in Entertainment - A movement celebrating creativity across Film, Music, Arts, and Culinary excellence
          </p>
        </div>
      </section>

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
      <section className="py-24 bg-gradient-to-b from-charcoal to-background">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card border border-border rounded-lg overflow-hidden card-hover gold-glow cursor-pointer">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <Users className="text-muted-foreground" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Team Member {i}</h3>
                  <p className="text-gold text-sm mb-3">Executive Producer</p>
                  <p className="text-muted-foreground text-sm">
                    Award-winning producer with 20+ years of Hollywood experience in major film and television productions.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Animation Block */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              From <span className="text-gold">West Coast</span> to <span className="text-houston">South</span>
            </h2>
            
            <div className="relative aspect-video bg-charcoal rounded-lg border-2 border-gold/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-8 mb-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2">⭐</div>
                      <p className="text-gold font-bold">Hollywood, CA</p>
                    </div>
                    <div className="text-6xl text-gold animate-pulse">→</div>
                    <div className="text-center">
                      <div className="text-4xl mb-2">★</div>
                      <p className="text-houston font-bold">Houston, TX</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Bringing Star Power to the Lone Star State
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HonoreesGrid />

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
