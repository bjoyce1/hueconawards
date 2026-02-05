import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Ticket, Star, Crown, Calendar, Clock, CheckCircle } from "lucide-react";
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
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const ticketTiers = [
    {
      name: "General Admission",
      icon: <Ticket size={48} />,
      price: "$299",
      description: "Access to all conference sessions and exhibitions",
      features: [
        "3-day conference access",
        "All panel discussions",
        "Film screenings",
        "Exhibition hall access",
        "Networking events",
        "Conference materials",
        "Welcome reception",
      ],
      color: "default",
    },
    {
      name: "VIP Pass",
      icon: <Star size={48} />,
      price: "$799",
      description: "Premium experience with awards ceremony access",
      features: [
        "Everything in General Admission",
        "Awards ceremony seating",
        "VIP lounge access",
        "Priority seating at panels",
        "Exclusive meet & greets",
        "Backstage tours",
        "VIP gift bag",
        "Premium parking",
      ],
      color: "hero",
      popular: true,
    },
    {
      name: "Ultra VIP",
      icon: <Crown size={48} />,
      price: "$1,999",
      description: "The ultimate HUE experience with exclusive access",
      features: [
        "Everything in VIP Pass",
        "Red carpet access",
        "Private reception with artists",
        "Front row awards ceremony",
        "One-on-one mentorship session",
        "Exclusive after-party access",
        "Concierge service",
        "Hotel accommodations package",
        "Premium swag bag",
      ],
      color: "houston",
    },
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
          <Ticket className="text-gold mx-auto mb-6 animate-pulse" size={80} />
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            Get Your <span className="text-gold">Tickets</span>
          </h1>
          <div className="inline-block mb-4 px-4 py-1 bg-houston/20 border border-houston/40 rounded-full animate-slide-up">
            <p className="text-houston font-semibold text-sm tracking-wider">
              MAY 7–8, 2026 | BLOSSOM HOTEL HOUSTON
            </p>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Join us for two days of industry panels, networking, and a red-carpet awards gala
          </p>
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
          <h2 className="text-4xl font-bold text-center mb-16">
            Choose Your <span className="text-gold">Experience</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ticketTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`bg-card border-2 rounded-lg p-8 card-hover relative ${
                  tier.popular ? "border-gold scale-105" : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-charcoal px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="text-gold mb-6 flex justify-center">{tier.icon}</div>
                <h3 className="text-2xl font-bold text-center mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-center text-gold mb-4">{tier.price}</div>
                <p className="text-center text-muted-foreground mb-8">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.color as any}
                  className="w-full"
                  size="lg"
                >
                  Get {tier.name}
                </Button>
              </div>
            ))}
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

      {/* Add to Calendar CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-gold/10 via-houston/5 to-transparent border border-gold/30 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Don't Miss Out</h3>
            <p className="text-muted-foreground mb-6">
              Add HUE Conference & Awards to your calendar and set reminders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline_gold" size="lg">
                Add to Google Calendar
              </Button>
              <Button variant="outline_gold" size="lg">
                Add to iCal
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
