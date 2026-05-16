import { useState } from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Film, Music, Palette, UtensilsCrossed, Trophy, Send, Star, Award } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroAwards from "@/assets/hero-awards.jpg";
import hueLogo from "@/assets/hue-logo.png";

const Awards = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  const categories = [
    {
      id: "film",
      icon: <Film size={48} />,
      title: "Film Vanguard Award",
      description: "Outstanding Achievement in Film",
      details: "Recognizing excellence in filmmaking, from directing and cinematography to storytelling and production.",
    },
    {
      id: "music",
      icon: <Music size={48} />,
      title: "Music Innovator Award",
      description: "Breakthrough in Sound & Production",
      details: "Celebrating artists and producers pushing boundaries in music creation and performance.",
    },
    {
      id: "arts",
      icon: <Palette size={48} />,
      title: "Artistic Visionary Award",
      description: "Excellence in Visual & Digital Arts",
      details: "Honoring visual artists, digital creators, and multimedia innovators shaping Houston's art scene.",
    },
    {
      id: "culinary",
      icon: <UtensilsCrossed size={48} />,
      title: "Culinary Creative Award",
      description: "Trailblazer in Culinary Innovation",
      details: "Celebrating chefs and culinary artists who are redefining Houston's food culture.",
    },
    {
      id: "community",
      icon: <Trophy size={48} />,
      title: "Community Impact Award",
      description: "Cultural & Philanthropic Leadership",
      details: "Recognizing individuals and organizations making lasting contributions to Houston's creative community.",
    },
    {
      id: "rising",
      icon: <Star size={48} />,
      title: "Rising Star Award",
      description: "Emerging Talent Across Disciplines",
      details: "Spotlighting breakthrough talents across all creative fields who are the future of Houston entertainment.",
    },
    {
      id: "fashion",
      icon: <Trophy size={48} />,
      title: "High-Fashion Award",
      description: "Leadership in Style & Design",
      details: "Honoring fashion designers, stylists, and innovators elevating Houston's fashion scene.",
    },
    {
      id: "lifetime",
      icon: <Award size={48} />,
      title: "Lifetime Achievement Award",
      description: "Honoring a Legacy of Excellence",
      details: "Celebrating an individual whose enduring contributions have shaped and transformed Houston's entertainment and creative landscape over the course of their career.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO title="HUE Awards 2026 — Eight Categories Honoring Houston's Best" description="Discover the eight HUE Award categories celebrating Film, Music, Fashion, Culinary, Community Impact, Visual Arts and Lifetime Achievement. Submit nominations now." path="/awards"  />

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroAwards})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-charcoal z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <img src={hueLogo} alt="HUECONA" className="h-20 md:h-28 w-auto mx-auto mb-8 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-fade-in" />
          <div className="inline-block mb-4 px-4 py-1 bg-houston/20 border border-houston/40 rounded-full">
            <p className="text-houston font-semibold text-sm tracking-wider">
              NOMINATIONS NOW OPEN
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            <span className="text-gold">HUECONA</span> Awards
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Honoring visionaries, storytellers, and change-makers across Film, Music, Fashion, Arts, Culinary, and more
          </p>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Award <span className="text-gold">Categories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nominate the visionaries, storytellers, and change-makers who deserve recognition for their excellence, innovation, and contributions to our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="bg-card border border-border rounded-lg p-8 card-hover gold-glow cursor-pointer group"
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex flex-col gap-2">
                  <Button variant="outline_gold" size="sm">
                    Learn More
                  </Button>
                  <a href="https://form.jotform.com/260208455201042" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <Button variant="hero" size="sm" className="w-full">
                      <Send size={14} className="mr-1" />
                      Nominate
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <a href="https://form.jotform.com/260208455201042" target="_blank" rel="noopener noreferrer">
              <Button
                variant="hero"
                size="xl"
                className="group"
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
                Submit Nominations
              </Button>
            </a>
            <p className="text-muted-foreground text-sm">
              Nominate yourself, a colleague, or an organization
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://form.jotform.com/260208455201042" target="_blank" rel="noopener noreferrer">
                <Button variant="outline_gold" size="lg" className="mt-2">
                  Self-Nomination →
                </Button>
              </a>
              <a href="/docs/HUECONA_Nominations_Terms_and_Conditions.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="lg" className="mt-2">
                  Download Nomination T&Cs (PDF)
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Selection <span className="text-gold">Criteria</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Demonstration of exceptional skill, creativity, and mastery in your craft
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing boundaries and bringing fresh perspectives to your field
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Impact</h3>
              <p className="text-muted-foreground">
                Making a meaningful contribution to Houston's creative and cultural landscape
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Detail Modal */}
      <Dialog open={selectedCategory !== null} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="bg-card border-gold/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gold">
              {categories.find((c) => c.id === selectedCategory)?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              {categories.find((c) => c.id === selectedCategory)?.details}
            </p>
            <div className="pt-4">
              <h4 className="font-bold mb-2">Specific Categories:</h4>
              <p className="text-muted-foreground text-sm">
                {categories.find((c) => c.id === selectedCategory)?.description}
              </p>
            </div>
            <a href="https://form.jotform.com/260208455201042" target="_blank" rel="noopener noreferrer">
              <Button
                variant="hero"
                className="w-full"
              >
                Nominate in This Category
              </Button>
            </a>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Awards;