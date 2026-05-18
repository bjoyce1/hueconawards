import DisplayHeadline from "@/components/DisplayHeadline";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { UtensilsCrossed, ChefHat, Sparkles, Wine, Coffee, IceCream } from "lucide-react";
import heroCulinary from "@/assets/hero-culinary.jpg";
import hueLogo from "@/assets/hue-logo.png";

const Culinary = () => {
  const chefSpotlights = [
    { name: "Chef Name", specialty: "Modern American", restaurant: "Restaurant Name" },
    { name: "Chef Name", specialty: "Italian Fusion", restaurant: "Restaurant Name" },
    { name: "Chef Name", specialty: "Asian Cuisine", restaurant: "Restaurant Name" },
    { name: "Chef Name", specialty: "Pastry & Desserts", restaurant: "Restaurant Name" },
  ];

  const culturalShowcases = [
    { title: "Houston Arts District", icon: <Sparkles size={40} />, description: "Vibrant galleries and street art" },
    { title: "Music & Nightlife", icon: <Wine size={40} />, description: "Live performances and entertainment venues" },
    { title: "Coffee Culture", icon: <Coffee size={40} />, description: "Artisan coffee shops and roasteries" },
    { title: "Food Innovation", icon: <IceCream size={40} />, description: "Cutting-edge culinary experiments" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO title="Culinary & Culture — HUECONA 2026" description="Houston's culinary innovators and cultural programming come together at HUECONA 2026. Tastings, chef showcases and creative collaborations." path="/culinary"  />

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroCulinary})` }}
        />
        <div className="absolute inset-0 bg-charcoal/70 z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <img src={hueLogo} alt="HUE" className="h-20 md:h-28 w-auto mx-auto mb-8 animate-fade-in" />
          <DisplayHeadline accent="Culture" className="mb-6 animate-fade-in">Culinary &</DisplayHeadline>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Celebrating Houston's world-class food scene and vibrant cultural landscape
          </p>
        </div>
      </section>

      {/* Houston Food Highlights */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Houston <span className="text-gold">Culinary Scene</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              Houston has emerged as one of America's premier food destinations, with a diverse culinary landscape that rivals any major city. From Michelin-caliber fine dining to innovative food trucks, our city's chefs are redefining what it means to eat well in Texas.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-gold mb-2">100+</div>
                <p className="text-muted-foreground">Award-Winning Restaurants</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-gold mb-2">70+</div>
                <p className="text-muted-foreground">Cuisines Represented</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-gold mb-2">#1</div>
                <p className="text-muted-foreground">Food Truck City in America</p>
              </div>
            </div>
          </div>

          {/* Horizontal Scroll Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gold">Culinary Diversity</h3>
            <div className="horizontal-scroll">
              {["Mexican & Tex-Mex", "BBQ & Southern", "Vietnamese", "Indian", "Italian", "Middle Eastern", "Japanese", "French"].map((cuisine) => (
                <div key={cuisine} className="min-w-[250px] aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
                  <div className="text-center p-4">
                    <UtensilsCrossed className="text-gold mx-auto mb-2" size={32} />
                    <p className="font-bold">{cuisine}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chef Spotlights */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ChefHat className="text-gold mx-auto mb-4" size={56} />
            <h2 className="text-4xl font-bold mb-6">
              Featured <span className="text-gold">Chefs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the culinary visionaries who are putting Houston on the global food map
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {chefSpotlights.map((chef, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg overflow-hidden card-hover gold-glow cursor-pointer">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <ChefHat className="text-muted-foreground" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{chef.name}</h3>
                  <p className="text-gold text-sm mb-1">{chef.specialty}</p>
                  <p className="text-muted-foreground text-sm">{chef.restaurant}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Showcases */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Houston <span className="text-gold">Culture</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {culturalShowcases.map((showcase, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 text-center card-hover">
                <div className="text-gold mb-4 flex justify-center">{showcase.icon}</div>
                <h3 className="text-lg font-bold mb-2">{showcase.title}</h3>
                <p className="text-muted-foreground text-sm">{showcase.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Beyond food, Houston's cultural scene thrives with world-class museums, vibrant street art, diverse music venues, and a nightlife that rivals any major metropolitan area. From the Museum District to the Third Ward's creative renaissance, Houston pulses with artistic energy day and night.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Montage Video */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Experience <span className="text-gold">Houston</span>
            </h2>
            
            <div className="relative aspect-video bg-charcoal rounded-lg border-2 border-gold/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gold/20 to-houston/20">
                <div className="text-center">
                  <Sparkles className="text-gold mx-auto mb-4 animate-pulse" size={64} />
                  <p className="text-foreground font-bold text-xl">Culture Montage Video</p>
                  <p className="text-muted-foreground">30-second loop showcasing Houston's vibrant scene</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Culinary;
