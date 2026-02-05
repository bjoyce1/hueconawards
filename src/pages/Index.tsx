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
        
        {/* Subtle ambient light */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-houston/5 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 bg-gold/10 border border-gold/20 rounded-full backdrop-blur-sm">
              <p className="text-gold font-semibold text-xs tracking-[0.2em] uppercase">
                From Hollywood to Houston
              </p>
            </div>
            
            <div className="inline-block mb-6 px-5 py-1.5 bg-houston/10 border border-houston/20 rounded-full backdrop-blur-sm">
              <p className="text-houston font-semibold text-xs tracking-[0.15em] uppercase">
                May 7–8, 2026 · Blossom Hotel Houston
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="text-foreground">Houston United in</span>
              <br />
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                Entertainment
              </span>
            </h1>
            
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
              <Button variant="ghost" size="xl" className="text-foreground hover:text-gold">
                <Play className="mr-2" size={20} />
                Watch Promo
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gold/30 rounded-full mx-auto flex items-start justify-center p-2">
                <div className="w-1 h-2 bg-gold/60 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is HUE Section */}
      <section className="py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-card/50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20 animate-slide-up">
            <p className="text-gold/70 text-xs font-semibold tracking-[0.3em] uppercase mb-4">About the Event</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              What Is <span className="text-gold">HUE?</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-8" />
            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              The Houston United in Entertainment (HUE) Conference & Awards is a groundbreaking mobilization of artists across Film, Music, Arts, and Culinary fields in the Houston metropolitan area and beyond.
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

      {/* Hollywood → Houston Transition */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-houston/5" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-gold/70 text-xs font-semibold tracking-[0.3em] uppercase text-center mb-4">The Convergence</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            From <span className="text-gold">Star Capital</span> to <span className="text-houston">Lone Star State</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-16" />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Hollywood Side */}
            <div className="group bg-gradient-to-br from-gold/[0.07] to-transparent rounded-2xl p-8 border border-gold/20 hover:border-gold/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-gold/20">
                <Sparkles className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-5 text-gold tracking-wide">Hollywood Excellence</h3>
              <ul className="space-y-3.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-3"><span className="text-gold/50">✦</span> World-class production expertise</li>
                <li className="flex items-center gap-3"><span className="text-gold/50">✦</span> Industry-leading standards</li>
                <li className="flex items-center gap-3"><span className="text-gold/50">✦</span> Award-winning professionals</li>
                <li className="flex items-center gap-3"><span className="text-gold/50">✦</span> Cinematic innovation</li>
              </ul>
            </div>

            {/* Houston Side */}
            <div className="group bg-gradient-to-bl from-houston/[0.07] to-transparent rounded-2xl p-8 border border-houston/20 hover:border-houston/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-houston/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-houston/20">
                <Users className="text-houston" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-5 text-houston tracking-wide">Houston Culture</h3>
              <ul className="space-y-3.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-3"><span className="text-houston/50">★</span> Diverse cultural landscape</li>
                <li className="flex items-center gap-3"><span className="text-houston/50">★</span> Emerging creative talent</li>
                <li className="flex items-center gap-3"><span className="text-houston/50">★</span> Culinary innovation capital</li>
                <li className="flex items-center gap-3"><span className="text-houston/50">★</span> Vibrant arts community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-28 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-card/40 via-background to-background">
        <div className="container mx-auto px-4">
          <p className="text-gold/70 text-xs font-semibold tracking-[0.3em] uppercase text-center mb-4">What Awaits You</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
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
              description="Enjoy electrifying performances from emerging and established artists"
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

      {/* Promo Video Section */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-14">
            <p className="text-gold/70 text-xs font-semibold tracking-[0.3em] uppercase mb-4">See the Vision</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience <span className="text-gold">HUE</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-6" />
            <p className="text-sm text-muted-foreground">
              Watch our cinematic promo showcasing the vision and energy of HUE
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-card/50 rounded-2xl overflow-hidden border border-border/50 group cursor-pointer transition-all duration-300 hover:border-gold/30">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gold/10 to-houston/10 group-hover:from-gold/15 group-hover:to-houston/15 transition-all duration-500">
                <div className="w-20 h-20 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play size={32} className="text-charcoal ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-card/60 to-card/20 border border-border/50 rounded-2xl p-14">
            <p className="text-gold/70 text-xs font-semibold tracking-[0.3em] uppercase mb-4">Be Part of It</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-sm focus:outline-none focus:border-gold/40 transition-colors"
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
