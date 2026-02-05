import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TicketTierCard from "@/components/TicketTierCard";
import TravelPackageCard from "@/components/TravelPackageCard";
import { Button } from "@/components/ui/button";
import { Ticket, Star, Crown, Calendar, Clock, Users, GraduationCap, Briefcase, Hotel, MapPin, TrendingUp, Film, Music, Palette, Shirt, UtensilsCrossed, Megaphone, Mic, Handshake, Award, Sparkles } from "lucide-react";
import heroTickets from "@/assets/hero-tickets.jpg";

const Tickets = () => {
  const eventDate = new Date('2026-05-07T09:00:00');
  
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const ticketTiers = [
    {
      name: "Early Bird",
      icon: <Ticket size={40} />,
      price: "$199",
      description: "Limited availability - General Admission",
      features: [
        "2-day conference access",
        "All panel discussions",
        "Exhibition hall access",
        "Networking events",
        "Conference materials",
      ],
      badge: "Limited",
    },
    {
      name: "General Admission",
      icon: <Ticket size={40} />,
      price: "$249",
      description: "Standard conference access",
      features: [
        "2-day conference access",
        "All panel discussions",
        "Exhibition hall access",
        "Networking events",
        "Conference materials",
      ],
    },
    {
      name: "Creative Professional",
      icon: <Briefcase size={40} />,
      price: "$349",
      description: "Panels + Mixer + Expo + Awards Gala",
      features: [
        "Everything in General Admission",
        "Awards Gala access",
        "Industry mixer",
        "Expo floor access",
        "Professional networking",
      ],
      popular: true,
    },
    {
      name: "VIP Access Pass",
      icon: <Star size={40} />,
      price: "$599",
      description: "Premium experience with priority access",
      features: [
        "Everything in Creative Professional",
        "Priority seating",
        "VIP lounge access",
        "Exclusive mixer",
        "HUE swag bag",
      ],
      variant: "hero" as const,
    },
    {
      name: "All-Access Platinum",
      icon: <Crown size={40} />,
      price: "$899",
      description: "The ultimate HUE experience",
      features: [
        "Everything in VIP Access",
        "Backstage access",
        "Speaker meet & greets",
        "VIP reception",
        "Premium seating",
        "Exclusive gifting",
      ],
      variant: "houston" as const,
    },
    {
      name: "Student Pass",
      icon: <GraduationCap size={40} />,
      price: "$99",
      description: "Valid student ID required",
      features: [
        "2-day conference access",
        "All panel discussions",
        "Exhibition hall access",
        "Student networking session",
      ],
    },
  ];

  const travelPackages = [
    {
      name: "Creator Package",
      price: "$499",
      features: [
        "2-night hotel stay",
        "General Admission ticket",
        "Welcome gift bag",
      ],
    },
    {
      name: "Professional Package",
      price: "$749",
      features: [
        "2-night hotel stay",
        "Creative Professional Pass",
        "Mixer access",
        "Premium seating",
      ],
    },
    {
      name: "VIP Experience Package",
      price: "$1,299",
      features: [
        "2-night suite or premium room",
        "VIP Access Pass",
        "Private reception",
        "Red carpet access",
        "Airport transfers",
        "Exclusive gifting",
      ],
      featured: true,
    },
    {
      name: "Platinum Executive Package",
      price: "$1,999",
      features: [
        "Luxury suite",
        "All-Access Platinum pass",
        "Backstage meet & greets",
        "Private chef tasting",
        "VIP concierge",
        "Branded merchandise",
        "Priority check-in",
      ],
    },
  ];

  const whyHoustonStats = [
    { label: "Most Diverse City", value: "Top 5" },
    { label: "U.S. Media Market", value: "#3" },
    { label: "Regional Economy", value: "$500B+" },
    { label: "Residents", value: "7M+" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroTickets})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-charcoal z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1 bg-gold/20 border border-gold/40 rounded-full animate-fade-in">
            <p className="text-gold font-semibold text-sm tracking-wider">
              OFFICIAL ATTENDEE INVITATION
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            HUE Conference <span className="text-gold">&</span> Awards
          </h1>
          <div className="inline-block mb-6 px-4 py-1 bg-houston/20 border border-houston/40 rounded-full animate-slide-up">
            <p className="text-houston font-semibold text-sm tracking-wider">
              MAY 7–8, 2026 | BLOSSOM HOTEL | HOUSTON, TEXAS
            </p>
          </div>
          <p className="text-lg md:text-xl text-gold font-medium mb-4 animate-slide-up">
            "Houston: The New Mecca for Film, Music & Creative Arts"
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Join us for two unforgettable days where culture meets commerce, creativity meets opportunity, and talent meets access.
          </p>
        </div>
      </section>

      {/* You're Invited Section */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              You're <span className="text-gold">Invited</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The Houston United in Entertainment (HUE) Conference & Awards is the premier gathering for artists, innovators, and industry leaders. Designed by Hollywood producers and entertainment executives, HUE brings together <span className="text-gold font-semibold">1,200+ creators, decision-makers, tastemakers, and media insiders</span> for panels, networking, education, and a star-studded awards gala.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {[
                { icon: <Film size={28} />, label: "Film & Television" },
                { icon: <Music size={28} />, label: "Music" },
                { icon: <Palette size={28} />, label: "Visual & Digital Arts" },
                { icon: <Shirt size={28} />, label: "Fashion" },
                { icon: <UtensilsCrossed size={28} />, label: "Culinary Arts" },
                { icon: <Megaphone size={28} />, label: "Media & Innovation" },
              ].map((item, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-4 card-hover">
                  <div className="text-gold mb-2 flex justify-center">{item.icon}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground italic">
              Whether you're building your career, launching a brand, or expanding your network — <span className="text-gold">HUE is where Houston's creative future happens.</span>
            </p>
          </div>
        </div>
      </section>

      {/* What To Expect */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What To <span className="text-gold">Expect</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 card-hover gold-glow">
              <Mic className="text-gold mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Industry Panels & Keynotes</h3>
              <p className="text-muted-foreground">
                Insights from producers, directors, chefs, artists, investors, and media leaders shaping the future of entertainment.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 card-hover gold-glow">
              <Handshake className="text-gold mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">The HUE Connection Experience</h3>
              <p className="text-muted-foreground">
                Curated networking lounges, pitch sessions, and real-time collaboration opportunities.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 card-hover gold-glow">
              <Award className="text-gold mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">HUE Awards Gala</h3>
              <p className="text-muted-foreground">
                Red carpet arrivals, live performances, culinary tastings, and recognition of Houston's brightest creatives.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 card-hover gold-glow">
              <Sparkles className="text-gold mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">VIP Mixers & Activations</h3>
              <p className="text-muted-foreground">
                Exclusive lounges, brand experiences, and private receptions with speakers and honorees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Event Starts In</h2>
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="bg-card border border-gold/30 rounded-lg p-6">
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{item.value}</div>
                  <div className="text-muted-foreground text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Tiers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Choose Your <span className="text-gold">Experience</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            From student passes to all-access platinum, find the perfect ticket for your HUE experience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ticketTiers.map((tier, idx) => (
              <TicketTierCard key={idx} {...tier} />
            ))}
          </div>

          {/* Group Rates */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-card border border-gold/30 rounded-lg p-8 text-center">
              <Users className="text-gold mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-2">Group Rates (5+)</h3>
              <p className="text-3xl font-bold text-gold mb-2">Starting at $175/person</p>
              <p className="text-muted-foreground mb-4">
                Bring your team and save! Contact us for custom group packages.
              </p>
              <Button variant="outline_gold">Inquire About Group Rates</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Hotel className="text-gold mx-auto mb-4" size={56} />
            <h2 className="text-4xl font-bold mb-4">
              Travel & <span className="text-gold">Accommodation</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay steps away from all conference activities with exclusive HUE rates
            </p>
          </div>

          {/* Hotel Info */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-card border border-gold/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-2 text-gold">Official Host Hotel</h3>
              <p className="text-xl font-semibold mb-6">Blossom Hotel Houston</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <p className="text-muted-foreground text-sm mb-2">Standard King/Double</p>
                  <p className="text-2xl font-bold text-gold">$169–$189</p>
                  <p className="text-muted-foreground text-xs">per night</p>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <p className="text-muted-foreground text-sm mb-2">Executive Rooms</p>
                  <p className="text-2xl font-bold text-gold">$209</p>
                  <p className="text-muted-foreground text-xs">per night</p>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <p className="text-muted-foreground text-sm mb-2">Suites</p>
                  <p className="text-2xl font-bold text-gold">From $299</p>
                  <p className="text-muted-foreground text-xs">per night</p>
                </div>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-6">
                <span className="text-gold">Special HUE rates</span> — Discounted vs. typical $250–$350 Houston luxury rate
              </p>
              
              <div className="text-center mt-6">
                <Button variant="hero" size="lg">Book Hotel Room</Button>
              </div>
            </div>
          </div>

          {/* Travel Packages */}
          <h3 className="text-2xl font-bold text-center mb-8">HUE Travel Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {travelPackages.map((pkg, idx) => (
              <TravelPackageCard key={idx} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Houston */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <MapPin className="text-gold mx-auto mb-4" size={56} />
            <h2 className="text-4xl font-bold mb-4">
              Why <span className="text-gold">Houston?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              HUE positions Houston as the next entertainment capital of the South — and you're invited to be part of the movement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {whyHoustonStats.map((stat, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground max-w-3xl mx-auto">
            <span className="flex items-center gap-2"><TrendingUp size={16} className="text-gold" /> Growing film production hub</span>
            <span>•</span>
            <span>Home to world-class culinary scene</span>
            <span>•</span>
            <span>Thriving arts & music community</span>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Event <span className="text-gold">Details</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <Calendar className="text-gold mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Dates</h3>
                <p className="text-muted-foreground mb-2">Thursday, May 7 – Friday, May 8, 2026</p>
                <p className="text-sm text-muted-foreground">
                  Conference: May 7-8 | Awards Gala: May 8 Evening
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <Clock className="text-gold mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Schedule</h3>
                <p className="text-muted-foreground mb-2">Daily: 9:00 AM - 10:00 PM</p>
                <p className="text-sm text-muted-foreground">
                  Red Carpet Awards Gala: Friday, 7:00 PM
                </p>
              </div>
            </div>

            <div className="mt-8 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Venue Information</h3>
              <p className="text-muted-foreground mb-4">
                <span className="text-gold font-bold">Blossom Hotel Houston</span><br />
                Houston, TX
              </p>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
                <span className="text-muted-foreground">Interactive Map</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve Your Spot CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-gold/10 via-houston/5 to-transparent border border-gold/30 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Reserve Your Spot Today</h3>
            <p className="text-muted-foreground mb-8">
              Be part of Houston's emergence as the entertainment capital of the South
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" size="xl">Get Tickets</Button>
              <Button variant="outline_gold" size="lg">Book Hotel</Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://form.jotform.com/260208455201042" target="_blank" rel="noopener noreferrer">
                  Submit Nominations →
                </a>
              </Button>
              <Button variant="outline_gold" size="sm">
                Add to Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tickets;
