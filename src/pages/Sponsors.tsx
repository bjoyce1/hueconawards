import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Trophy, Star, Award, Crown, Download, CheckCircle } from "lucide-react";
import heroSponsors from "@/assets/hero-sponsors.jpg";
import hueLogo from "@/assets/hue-logo.png";
import vendorFlyer from "@/assets/vendor-flyer.jpg";

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Gold Sponsor",
      icon: <Crown size={48} />,
      color: "gold",
      price: "$50,000+",
      benefits: [
        "Premier logo placement on all marketing materials",
        "Main stage naming rights",
        "20 VIP tickets to awards ceremony",
        "Full-page ad in program",
        "Speaking opportunity at opening keynote",
        "Exclusive VIP reception access",
        "Prominent booth location",
        "Year-round recognition on website",
      ],
    },
    {
      tier: "Silver Sponsor",
      icon: <Trophy size={48} />,
      color: "houston",
      price: "$25,000+",
      benefits: [
        "Logo on conference materials",
        "10 VIP tickets to awards ceremony",
        "Half-page ad in program",
        "Social media recognition",
        "Premium booth location",
        "6 months website recognition",
        "Welcome reception access",
      ],
    },
    {
      tier: "Bronze Sponsor",
      icon: <Award size={48} />,
      color: "foreground",
      price: "$10,000+",
      benefits: [
        "Logo in program",
        "5 general admission tickets",
        "Quarter-page ad in program",
        "Social media mention",
        "Standard booth space",
        "3 months website recognition",
      ],
    },
  ];

  const currentSponsors = [
    { tier: "Gold", count: 3 },
    { tier: "Silver", count: 5 },
    { tier: "Bronze", count: 8 },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroSponsors})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-charcoal z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <img src={hueLogo} alt="HUECONA" className="h-20 md:h-28 w-auto mx-auto mb-8 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-fade-in" />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            Become a <span className="text-gold">Sponsor</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Partner with HUECONA to support Houston's creative community and gain visibility with hundreds of entertainment professionals
          </p>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Sponsorship <span className="text-gold">Opportunities</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sponsorTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-card border-2 border-border rounded-lg p-8 card-hover"
                style={{
                  borderColor: tier.color === "gold" ? "hsl(var(--gold))" : tier.color === "houston" ? "hsl(var(--houston-blue))" : "hsl(var(--border))",
                }}
              >
                <div className={`text-${tier.color} mb-6 flex justify-center`}>
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{tier.tier}</h3>
                <div className="text-3xl font-bold text-center text-gold mb-6">{tier.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={tier.color === "gold" ? "hero" : "outline_gold"} className="w-full" asChild>
                  <a href={`mailto:official@HUECONA.com?subject=${encodeURIComponent(`Sponsorship Inquiry: ${tier.tier}`)}&body=${encodeURIComponent(`Hi HUECONA team,\n\nWe're interested in the ${tier.tier} sponsorship (${tier.price}).\n\nCompany:\nContact:\nPhone:\n\nThanks!`)}`}>
                    Select {tier.tier}
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/docs/HUECONA_Nominations_Terms_and_Conditions.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="lg">
                <Download className="mr-2" />
                Download Sponsorship Deck (PDF)
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Current Sponsors Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our <span className="text-gold">Partners</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16">
            Thank you to our sponsors for making HUECONA possible
          </p>

          {currentSponsors.map((category) => (
            <div key={category.tier} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gold">{category.tier} Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Array.from({ length: category.count }).map((_, idx) => (
                  <div
                    key={idx}
                    className="aspect-video bg-muted rounded-lg border border-border flex items-center justify-center hover:border-gold transition-colors cursor-pointer"
                  >
                    <span className="text-muted-foreground text-sm">Sponsor Logo</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Vendor */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden border border-gold/30">
              <img src={vendorFlyer} alt="HUECONA Vendor Opportunity Flyer" className="w-full h-auto" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Become a <span className="text-gold">Vendor</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Showcase your brand at the HUECONA Showcase Hall — open both event days to all attendees, sponsors, and press. Limited booth space available.
              </p>
              <a href={vendorFlyer} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  <Download className="mr-2" />
                  Download Vendor Flyer
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-charcoal to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Partner With <span className="text-gold">HUECONA</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our sponsorship team will be in touch within 24 hours
              </p>
            </div>

            <form className="space-y-6 bg-card border border-border rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" placeholder="Your company" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Name *</Label>
                  <Input id="contact" placeholder="Your name" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="company@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Company Website</Label>
                <Input id="website" type="url" placeholder="https://yourcompany.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tier">Interested Sponsorship Tier *</Label>
                <select
                  id="tier"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                >
                  <option value="">Select a tier</option>
                  <option value="gold">Gold Sponsor</option>
                  <option value="silver">Silver Sponsor</option>
                  <option value="bronze">Bronze Sponsor</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message / Questions</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your sponsorship goals and any questions you have..."
                  rows={6}
                />
              </div>

              <Button variant="hero" type="submit" className="w-full" size="lg">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsors;