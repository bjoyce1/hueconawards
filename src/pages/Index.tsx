import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Play, Film, Music, Palette, UtensilsCrossed, Sparkles, Users } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroHome})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background z-0" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-houston/5 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <p className="text-gold font-semibold text-sm tracking-wider">
                FROM HOLLYWOOD TO HOUSTON
              </p>
            </div>
            
            <div className="inline-block mb-4 px-4 py-1 bg-houston/20 border border-houston/40 rounded-full">
              <p className="text-houston font-semibold text-sm tracking-wider">
                MAY 7–8, 2026 | BLOSSOM HOTEL HOUSTON
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="text-foreground">Houston United in</span>
              <br />
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                Entertainment
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold text-gold mb-4">
              Create. Connect. Celebrate. Elevate.
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Celebrating, connecting, and elevating Houston's incredible talent across Film, Music, Fashion, Sports, Culinary Arts, Media, and Innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
              <Button variant="ghost" size="xl" className="text-foreground hover:text-gold">
                <Play className="mr-2" size={20} />
                Watch Promo
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gold/50 rounded-full mx-auto flex items-start justify-center p-2">
                <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is HUE Section */}
      <section className="py-24 bg-gradient-to-b from-background to-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Is <span className="text-gold">HUE?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Houston United in Entertainment (HUE) Conference & Awards is a groundbreaking mobilization of artists across Film, Music, Arts, and Culinary fields in the Houston metropolitan area and beyond.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a production team hailing from Hollywood, we're expanding opportunities to existing and rising talent in Texas. Houston, now the culture and culinary capital, is the new Mecca for entertainment innovation.
            </p>
          </div>

          {/* Timeline Horizontal Scroll */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gold">Our Journey</h3>
            <div className="horizontal-scroll px-4">
              <div className="min-w-[300px] bg-card p-6 rounded-lg border border-border">
                <div className="text-3xl font-bold text-gold mb-2">Vision</div>
                <p className="text-muted-foreground">Bringing Hollywood excellence to Houston's vibrant cultural scene</p>
              </div>
              <div className="min-w-[300px] bg-card p-6 rounded-lg border border-border">
                <div className="text-3xl font-bold text-gold mb-2">Mission</div>
                <p className="text-muted-foreground">Unite creators across Film, Music, Arts, and Culinary excellence</p>
              </div>
              <div className="min-w-[300px] bg-card p-6 rounded-lg border border-border">
                <div className="text-3xl font-bold text-gold mb-2">Impact</div>
                <p className="text-muted-foreground">Creating opportunities for rising and established Texas talent</p>
              </div>
              <div className="min-w-[300px] bg-card p-6 rounded-lg border border-border">
                <div className="text-3xl font-bold text-gold mb-2">Future</div>
                <p className="text-muted-foreground">Establishing Houston as America's next entertainment hub</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hollywood → Houston Transition */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            From <span className="text-gold">Star Capital</span> to <span className="text-houston">Lone Star State</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Hollywood Side */}
            <div className="relative p-8 bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-lg animate-slide-right">
              <Sparkles className="text-gold mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-gold">Hollywood Excellence</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>✦ World-class production expertise</li>
                <li>✦ Industry-leading standards</li>
                <li>✦ Award-winning professionals</li>
                <li>✦ Cinematic innovation</li>
              </ul>
            </div>

            {/* Houston Side */}
            <div className="relative p-8 bg-gradient-to-bl from-houston/10 to-transparent border border-houston/30 rounded-lg animate-slide-right">
              <Users className="text-houston mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-houston">Houston Culture</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>★ Diverse cultural landscape</li>
                <li>★ Emerging creative talent</li>
                <li>★ Culinary innovation capital</li>
                <li>★ Vibrant arts community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Event <span className="text-gold">Highlights</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <EventCard
              icon={<Users size={40} />}
              title="Panels & Q&A"
              description="Engage with industry leaders and gain insights from Hollywood professionals"
            />
            <EventCard
              icon={<Film size={40} />}
              title="Film Screenings"
              description="Experience premiere screenings of groundbreaking independent films"
            />
            <EventCard
              icon={<Music size={40} />}
              title="Live Performances"
              description="Enjoy electrifying performances from emerging and established artists"
            />
            <EventCard
              icon={<UtensilsCrossed size={40} />}
              title="Culinary Tastings"
              description="Savor creations from Houston's finest chefs and culinary innovators"
            />
            <EventCard
              icon={<Palette size={40} />}
              title="Fashion Showcase"
              description="Witness the fusion of Hollywood glamour and Houston style"
            />
            <EventCard
              icon={<Sparkles size={40} />}
              title="Awards Ceremony"
              description="Celebrate excellence across Film, Music, Arts, and Culinary categories"
            />
          </div>
        </div>
      </section>

      {/* Promo Video Section */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience <span className="text-gold">HUE</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch our cinematic promo showcasing the vision and energy of HUE
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-charcoal rounded-lg overflow-hidden border-2 border-gold/30 group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gold/20 to-houston/20 group-hover:from-gold/30 group-hover:to-houston/30 transition-all duration-300">
                <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(212,175,55,0.5)]">
                  <Play size={40} className="text-charcoal ml-2" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gold/10 via-houston/5 to-transparent border border-gold/30 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="text-gold">Movement</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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
            <div className="mt-12 pt-12 border-t border-gold/20">
              <h3 className="text-xl font-bold mb-4">Stay in the Loop</h3>
              <p className="text-muted-foreground mb-4">
                Get exclusive updates, behind-the-scenes content, and early access to tickets
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <Button variant="hero">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
