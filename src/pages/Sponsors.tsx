import { useState } from "react";
import PageHero from "@/components/PageHero";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Trophy, Star, Award, Crown, ExternalLink, Download, CheckCircle } from "lucide-react";
import heroSponsors from "@/assets/hero-sponsors.jpg";
import hueLogo from "@/assets/hue-logo.png";
import vendorFlyer from "@/assets/vendor-flyer.jpg";
import SponsorWall from "@/components/SponsorWall";
import PremiereSponsor from "@/components/PremiereSponsor";
import SponsorInquiryForm from "@/components/SponsorInquiryForm";
import CheckoutModal from "@/components/CheckoutModal";

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
      <SEO title="Sponsors & Partners — HUECONA 2026" description="Become a HUECONA 2026 sponsor. Explore partnership tiers and meet the brands championing Houston's entertainment future." path="/sponsors"  />

      {/* Hero Section */}
      <PageHero
        backgroundImage={heroSponsors}
        eyebrow="Partnership"
        title="Become a"
        accent="Sponsor"
        description="Partner with HUECONA to support Houston's creative community and gain visibility with hundreds of entertainment professionals."
      />

      <PremiereSponsor />

      {/* Sponsorship Tiers */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Sponsorship <span className="text-gold">Opportunities</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {sponsorTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-card border-2 border-border rounded-lg p-8 card-hover flex flex-col h-full"
                style={{
                  borderColor: tier.color === "gold" ? "hsl(var(--gold))" : tier.color === "houston" ? "hsl(var(--houston-blue))" : "hsl(var(--border))",
                }}
              >
                <div className={`text-${tier.color} mb-6 flex justify-center`}>
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{tier.tier}</h3>
                <div className="text-3xl font-bold text-center text-gold mb-6">{tier.price}</div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={tier.color === "gold" ? "hero" : "outline_gold"} size="lg" className="w-full mt-auto" asChild>
                  <a href={`mailto:official@HUECONA.com?subject=${encodeURIComponent(`Sponsorship Inquiry: ${tier.tier}`)}&body=${encodeURIComponent(`Hi HUECONA team,\n\nWe're interested in the ${tier.tier} sponsorship (${tier.price}).\n\nCompany:\nContact:\nPhone:\n\nThanks!`)}`}>
                    Become a Sponsor
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

      <SponsorWall title="Our Partners & Sponsors" subtitle="Thank you to the brands championing HUECONA 2026" />

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
              <a href="https://events.ticketleap.com/tickets/riche/huecona-conference-and-awards" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  <ExternalLink className="mr-2" />
                  Become A Vendor
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
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

            <SponsorInquiryForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsors;