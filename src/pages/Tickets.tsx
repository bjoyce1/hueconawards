import DisplayHeadline from "@/components/DisplayHeadline";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import TicketTierCard from "@/components/TicketTierCard";
import TravelPackageCard from "@/components/TravelPackageCard";
import { Button } from "@/components/ui/button";
import { Ticket, Star, Crown, Calendar, Clock, Users, GraduationCap, Briefcase, Hotel, MapPin, TrendingUp, Film, Music, Palette, Shirt, UtensilsCrossed, Megaphone, Mic, Handshake, Award, Sparkles } from "lucide-react";
import heroTickets from "@/assets/hero-tickets.jpg";
import hueLogo from "@/assets/hue-logo.png";

const Tickets = () => {
  const eventDate = new Date('2026-07-16T09:00:00');
  
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
        "HUECONA swag bag",
      ],
      variant: "hero" as const,
    },
    {
      name: "All-Access Platinum",
      icon: <Crown size={40} />,
      price: "$899",
      description: "The ultimate HUECONA experience",
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
      price: "Contact Agent",
      features: [
        "2-night hotel stay",
        "General Admission ticket",
        "Welcome gift bag",
      ],
    },
    {
      name: "Professional Package",
      price: "Contact Agent",
      features: [
        "2-night hotel stay",
        "Creative Professional Pass",
        "Mixer access",
        "Premium seating",
      ],
    },
    {
      name: "VIP Experience Package",
      price: "Contact Agent",
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
      price: "Contact Agent",
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
      <SEO title="Tickets & Travel Packages — HUECONA 2026" description="Reserve your HUECONA 2026 pass: Early Bird, General, Creative Professional, VIP and All-Access Platinum. Group rates and Blossom Hotel Houston travel packages available." path="/tickets" jsonLd={{"@context":"https://schema.org","@type":"Event","name":"HUECONA Conference & Awards 2026","startDate":"2026-07-16T10:00:00-05:00","endDate":"2026-07-17T22:00:00-05:00","eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode","eventStatus":"https://schema.org/EventScheduled","location":{"@type":"Place","name":"Blossom Hotel Houston","address":{"@type":"PostalAddress","addressLocality":"Houston","addressRegion":"TX","addressCountry":"US"}},"organizer":{"@type":"Organization","name":"HUECONA - Houston United in Entertainment","url":"https://hueconawards.com/"},"description":"Two-day Houston United in Entertainment Conference & Awards celebrating Film, Music, Arts, Fashion, Sports & Culinary excellence."}} />

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroTickets})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-charcoal z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <img src={hueLogo} alt="HUE" className="h-20 md:h-28 w-auto mx-auto mb-8 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-fade-in" />
          <div className="inline-block mb-6 px-5 py-2 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full animate-fade-in">
            <p className="text-gold font-semibold text-xs tracking-[0.2em] uppercase">
              Official Attendee Invitation
            </p>
          </div>
          <DisplayHeadline accent="& Awards" className="mb-8 animate-fade-in">HUECONA Conference</DisplayHeadline>
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-8 px-4 sm:px-6 py-2 sm:py-2.5 max-w-full bg-houston/10 backdrop-blur-sm border border-houston/30 rounded-full animate-slide-up">
            <span className="shrink-0 w-2 h-2 rounded-full bg-houston animate-pulse" />
            <p className="text-houston font-medium text-xs sm:text-sm tracking-wide text-center">
              July 16–17, 2026 • Blossom Hotel • Houston, Texas
            </p>
          </div>
          <p className="text-lg md:text-xl text-gold/90 font-medium mb-6 animate-slide-up italic">
            "Houston: The New Mecca for Film, Music & Creative Arts"
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up leading-relaxed">
            Two unforgettable days where culture meets commerce, creativity meets opportunity, and talent meets access.
          </p>
        </div>
      </section>

      {/* You're Invited Section */}
      <section className="py-28 bg-gradient-to-b from-charcoal via-charcoal to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold/80 text-sm font-medium tracking-[0.2em] uppercase mb-4">Join The Movement</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              You're <span className="text-gold">Invited</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              The Houston United in Entertainment Conference & Awards (HUECONA) is the premier gathering for guest, innovators, and industry leaders. Designed by Hollywood producers and entertainment executives, HUECONA brings together <span className="text-gold font-semibold">600+ creators, decision-makers, tastemakers, and media insiders</span> for panels, networking, education, and a star-studded awards gala.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
              {[
                { icon: <Film size={24} />, label: "Film & Television" },
                { icon: <Music size={24} />, label: "Music" },
                { icon: <Palette size={24} />, label: "Visual & Digital Arts" },
                { icon: <Shirt size={24} />, label: "Fashion" },
                { icon: <UtensilsCrossed size={24} />, label: "Culinary Arts" },
                { icon: <Megaphone size={24} />, label: "Media & Innovation" },
              ].map((item, idx) => (
                <div key={idx} className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5 transition-all duration-300 hover:border-gold/30 hover:bg-card/80">
                  <div className="text-gold/70 mb-3 flex justify-center transition-colors group-hover:text-gold">{item.icon}</div>
                  <p className="text-xs font-medium text-muted-foreground group-hover:text-foreground/80 transition-colors">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="inline-block px-8 py-4 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 border border-gold/20 rounded-2xl">
              <p className="text-base text-muted-foreground">
                Whether you're building your career, launching a brand, or expanding your network —<br />
                <span className="text-gold font-medium">HUECONA is where Houston's creative future happens.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What To Expect */}
      <section className="py-28 bg-charcoal relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold/80 text-sm font-medium tracking-[0.2em] uppercase mb-4">The Experience</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              What To <span className="text-gold">Expect</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Mic size={32} />, title: "Industry Panels & Keynotes", desc: "Insights from producers, directors, chefs, guest, investors, and media leaders shaping the future of entertainment." },
              { icon: <Handshake size={32} />, title: "The HUE Connection Experience", desc: "Curated networking lounges, pitch sessions, and real-time collaboration opportunities." },
              { icon: <Award size={32} />, title: "HUE Awards Gala", desc: "Red carpet arrivals, live performances, culinary tastings, and recognition of Houston's brightest creatives." },
              { icon: <Sparkles size={32} />, title: "VIP Mixers & Activations", desc: "Exclusive lounges, brand experiences, and private receptions with speakers and honorees." },
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-card/80 to-card/40 border border-border/50 rounded-2xl p-8 transition-all duration-300 hover:border-gold/20">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-gold/20">
                    <div className="text-gold">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(212,175,55,0.03)_50%,transparent_100%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold/80 text-sm font-medium tracking-[0.2em] uppercase mb-3">Mark Your Calendar</p>
            <h2 className="text-2xl font-bold mb-10">Event Starts In</h2>
            <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-xl mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-4 md:p-6">
                    <div className="text-3xl md:text-5xl font-bold text-gold mb-1 tabular-nums">{String(item.value).padStart(2, '0')}</div>
                    <div className="text-muted-foreground text-xs md:text-sm font-medium uppercase tracking-wider">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Tiers */}
      <section id="tickets" className="py-28 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold/80 text-sm font-medium tracking-[0.2em] uppercase mb-4">Pricing</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Choose Your <span className="text-gold">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From student passes to all-access platinum, find the perfect ticket for your HUECONA experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ticketTiers.map((tier, idx) => (
              <TicketTierCard key={idx} {...tier} />
            ))}
          </div>

          {/* Group Rates */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 border border-gold/20 rounded-2xl p-10 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="text-gold" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Group Rates (5+)</h3>
                <p className="text-3xl font-bold text-gold mb-3">Starting at $175/person</p>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Bring your team and save! Contact us for custom group packages.
                </p>
                <Button variant="outline_gold" size="lg" asChild>
                  <a href="mailto:official@HUECONA.com?subject=Group%20Rate%20Inquiry%20(5%2B)&body=Hi%20HUECONA%20team%2C%0A%0AI%27m%20interested%20in%20group%20rates%20for%20HUECONA%202026.%0A%0ACompany%2FOrg%3A%0AGroup%20size%3A%0APreferred%20tier%3A%0A%0AThanks!">Inquire About Group Rates</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section className="py-28 bg-charcoal relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <Hotel className="text-gold" size={32} />
            </div>
            <p className="text-gold/80 text-sm font-medium tracking-[0.2em] uppercase mb-4">Stay With Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Travel & <span className="text-gold">Accommodation</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Stay steps away from all conference activities with exclusive HUECONA rates
            </p>
          </div>

          {/* Hotel Info */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 border border-gold/20 rounded-2xl p-10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
              <div className="relative z-10">
                <p className="text-gold text-sm font-medium tracking-[0.15em] uppercase mb-2">Official Host Hotel</p>
                <h3 className="text-2xl font-bold mb-8">Blossom Hotel Houston</h3>
                
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { room: "Standard King/Double", price: "$169–$189", note: "per night" },
                    { room: "Executive Rooms", price: "$209", note: "per night" },
                    { room: "Suites", price: "From $299", note: "per night" },
                  ].map((item, idx) => (
                    <div key={idx} className="group text-center p-6 bg-background/30 backdrop-blur-sm rounded-xl border border-border/30 transition-all hover:border-gold/20">
                      <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-3">{item.room}</p>
                      <p className="text-2xl font-bold text-gold mb-1">{item.price}</p>
                      <p className="text-muted-foreground text-xs">{item.note}</p>
                    </div>
                  ))}
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
                
                <p className="text-center text-sm text-muted-foreground mb-6">
                  <span className="text-gold font-medium">Special HUECONA rates</span> — Discounted vs. typical $250–$350 Houston luxury rate
                </p>
                
                <div className="text-center">
                  <Button variant="hero" size="lg" asChild><a href="https://www.hilton.com/en/hotels/houtnqq-blossom-hotel-houston/rooms/" target="_blank" rel="noopener noreferrer">Book Hotel Room</a></Button>
                </div>
              </div>
            </div>
          </div>

          {/* Travel Packages */}
          <div className="text-center mb-10">
            <p className="text-gold/80 text-sm font-medium tracking-[0.2em] uppercase mb-3">All-Inclusive Options</p>
            <h3 className="text-2xl font-bold">HUECONA Travel Packages</h3>
            <p className="text-muted-foreground text-sm mt-2">Contact booking agent for rates and availability</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {travelPackages.map((pkg, idx) => (
              <TravelPackageCard key={idx} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Houston */}
      <section className="py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-houston/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-gold" size={32} />
            </div>
            <p className="text-gold/80 text-sm font-medium tracking-[0.2em] uppercase mb-4">The Location</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Why <span className="text-gold">Houston?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              HUECONA positions Houston as the next entertainment capital of the South — and you're invited to be part of the movement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {whyHoustonStats.map((stat, idx) => (
              <div key={idx} className="group bg-gradient-to-b from-card/80 to-card/40 border border-border/50 rounded-2xl p-6 text-center transition-all hover:border-gold/20">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground max-w-3xl mx-auto">
            <span className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border/30">
              <TrendingUp size={14} className="text-gold" /> Growing film production hub
            </span>
            <span className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border/30">
              World-class culinary scene
            </span>
            <span className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border/30">
              Thriving arts & music community
            </span>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-28 bg-gradient-to-b from-charcoal to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-gold/80 text-sm font-medium tracking-[0.2em] uppercase mb-4">Logistics</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Event <span className="text-gold">Details</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="group bg-gradient-to-br from-card/80 to-card/40 border border-border/50 rounded-2xl p-8 transition-all hover:border-gold/20">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold/20">
                  <Calendar className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Dates</h3>
                <p className="text-foreground/90 font-medium mb-2">Wednesday, July 16 – Thursday, July 17, 2026</p>
                <p className="text-sm text-muted-foreground">
                  Conference: July 16-17 | Awards Gala: July 17 Evening
                </p>
              </div>

              <div className="group bg-gradient-to-br from-card/80 to-card/40 border border-border/50 rounded-2xl p-8 transition-all hover:border-gold/20">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold/20">
                  <Clock className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Schedule</h3>
                <p className="text-foreground/90 font-medium mb-2">Daily: 9:00 AM - 10:00 PM</p>
                <p className="text-sm text-muted-foreground">
                  Red Carpet Awards Gala: Thursday, 7:00 PM
                </p>
              </div>
            </div>

            <div className="mt-6 group bg-gradient-to-br from-card/80 to-card/40 border border-border/50 rounded-2xl p-8 transition-all hover:border-gold/20">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-gold/20">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Venue Information</h3>
                  <p className="text-gold font-medium">Blossom Hotel Houston</p>
                  <p className="text-sm text-muted-foreground">Houston, TX</p>
                </div>
              </div>
              <div className="aspect-video bg-background/30 backdrop-blur-sm rounded-xl flex items-center justify-center border border-border/30">
                <span className="text-muted-foreground text-sm">Interactive Map Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve Your Spot CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-houston/5 to-transparent rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm border border-gold/20 rounded-3xl p-14">
              <p className="text-gold/80 text-sm font-medium tracking-[0.2em] uppercase mb-4">Don't Miss Out</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Reserve Your Spot Today</h3>
              <p className="text-muted-foreground mb-10 max-w-md mx-auto">
                Be part of Houston's emergence as the entertainment capital of the South
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button variant="hero" size="xl" asChild><a href="#tickets">Get Tickets</a></Button>
                <Button variant="outline_gold" size="lg" asChild><a href="https://www.hilton.com/en/hotels/houtnqq-blossom-hotel-houston/rooms/" target="_blank" rel="noopener noreferrer">Book Hotel</a></Button>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://form.jotform.com/260208455201042" target="_blank" rel="noopener noreferrer">
                    Submit Nominations →
                  </a>
                </Button>
                <Button variant="outline_gold" size="sm" asChild>
                  <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=HUECONA+Conference+%26+Awards+2026&dates=20260716T140000Z/20260718T040000Z&details=Houston+United+in+Entertainment+Conference+%26+Awards.+See+hueconawards.com&location=Blossom+Hotel+Houston%2C+Houston%2C+TX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add to Calendar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tickets;
