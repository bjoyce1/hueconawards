import DisplayHeadline from "@/components/DisplayHeadline";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import MarblismRibbon from "@/components/MarblismRibbon";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Users, MessageSquare, Film, Music, Palette, UtensilsCrossed, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroConference from "@/assets/hero-conference.jpg";
import hueLogo from "@/assets/hue-logo.png";

const Conference = () => {
  const [selectedPanel, setSelectedPanel] = useState<any>(null);

  const panels = [
    {
      id: 1,
      category: "Film",
      icon: <Film size={32} />,
      title: "From Script to Screen: The Modern Filmmaker's Journey",
      speakers: "Panel of Award-Winning Directors & Producers",
      description: "Explore the complete filmmaking process from concept development through distribution in today's evolving landscape.",
      details: "Join acclaimed directors and producers as they share insights on navigating the film industry, securing funding, working with talent, and getting your work seen by audiences worldwide.",
    },
    {
      id: 2,
      category: "Music",
      icon: <Music size={32} />,
      title: "The New Music Industry: Independence & Innovation",
      speakers: "Chart-Topping Guest & Label Executives",
      description: "Understanding how independent guest are reshaping the music business and finding success on their own terms.",
      details: "Learn strategies for building a sustainable music career, leveraging streaming platforms, connecting with fans, and maintaining creative control.",
    },
    {
      id: 3,
      category: "Arts",
      icon: <Palette size={32} />,
      title: "Visual Storytelling: Art in the Digital Age",
      speakers: "Gallery Curators & Contemporary Guest",
      description: "How visual guest are adapting to digital platforms while maintaining the power of physical installations.",
      details: "Discover how to build an art career in the 21st century, from social media presence to gallery representation and NFT opportunities.",
    },
    {
      id: 4,
      category: "Culinary",
      icon: <UtensilsCrossed size={32} />,
      title: "Culinary Excellence: From Kitchen to Empire",
      speakers: "Celebrity Chefs & Restaurant Entrepreneurs",
      description: "Building a culinary brand that extends beyond the restaurant into media, products, and cultural influence.",
      details: "Learn from successful chefs who have built multi-faceted culinary empires while maintaining their commitment to exceptional food.",
    },
    {
      id: 5,
      category: "Cross-Industry",
      icon: <Users size={32} />,
      title: "Creative Collaboration Across Disciplines",
      speakers: "Multi-Disciplinary Creative Leaders",
      description: "How collaboration between film, music, art, and culinary creators leads to groundbreaking projects.",
      details: "Explore successful cross-industry collaborations and learn how to forge partnerships that amplify your creative vision.",
    },
    {
      id: 6,
      category: "Business",
      icon: <MessageSquare size={32} />,
      title: "Building Your Brand: Marketing for Creatives",
      speakers: "Entertainment Marketing Experts",
      description: "Essential marketing strategies for guest, filmmakers, musicians, and culinary professionals.",
      details: "Master social media, PR, personal branding, and audience engagement to grow your influence and opportunities.",
    },
  ];

  const featuredPanels = [
    {
      title: "Keynote: Hollywood Meets Houston",
      time: "Opening Day - 9:00 AM",
      description: "A conversation with industry veterans on why Houston is the next major entertainment hub.",
    },
    {
      title: "The Future of Entertainment",
      time: "Day 2 - 2:00 PM",
      description: "Technology, AI, and emerging platforms reshaping how we create and consume content.",
    },
    {
      title: "Q&A with Award Winners",
      time: "Closing Day - 4:00 PM",
      description: "Meet and interact with this year's HUECONA Award recipients across all categories.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO title="HUECONA Conference 2026 — Panels, Keynotes & Masterclasses" description="Two days of industry panels, keynotes, masterclasses and networking with Hollywood producers and Houston creators at Blossom Hotel Houston." path="/conference" jsonLd={{"@context":"https://schema.org","@type":"Event","name":"HUECONA Conference & Awards 2026","startDate":"2026-07-16T10:00:00-05:00","endDate":"2026-07-17T22:00:00-05:00","eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode","eventStatus":"https://schema.org/EventScheduled","location":{"@type":"Place","name":"Blossom Hotel Houston","address":{"@type":"PostalAddress","addressLocality":"Houston","addressRegion":"TX","addressCountry":"US"}},"organizer":{"@type":"Organization","name":"HUECONA - Houston United in Entertainment","url":"https://hueconawards.com/"},"description":"Two-day Houston United in Entertainment Conference & Awards celebrating Film, Music, Arts, Fashion, Sports & Culinary excellence."}} />

      {/* Hero Section */}
      <PageHero
        backgroundImage={heroConference}
        eyebrow="July 16–17, 2026"
        title="HUECONA"
        accent="Conference"
        description="Panel discussions, Q&A sessions, and networking opportunities with industry leaders."
      />

      {/* Featured Panels - Horizontal Scroll */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gold">Featured Sessions</h2>
          <div className="horizontal-scroll">
            {featuredPanels.map((panel, idx) => (
              <div key={idx} className="min-w-[350px] bg-card border border-gold/30 rounded-lg p-6">
                <div className="text-gold font-semibold mb-2">{panel.time}</div>
                <h3 className="text-xl font-bold mb-3">{panel.title}</h3>
                <p className="text-muted-foreground">{panel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Panels Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Conference <span className="text-gold">Panels</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {panels.map((panel) => (
              <div
                key={panel.id}
                onClick={() => setSelectedPanel(panel)}
                className="bg-card border border-border rounded-lg p-6 card-hover gold-glow cursor-pointer group flex flex-col h-full"
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {panel.icon}
                </div>
                <div className="text-houston text-sm font-semibold mb-2">{panel.category}</div>
                <h3 className="text-xl font-bold mb-3">{panel.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{panel.speakers}</p>
                <p className="text-muted-foreground flex-grow">{panel.description}</p>
                <Button variant="outline_gold" size="sm" className="mt-4 self-start">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panel Detail Modal */}
      <Dialog open={selectedPanel !== null} onOpenChange={() => setSelectedPanel(null)}>
        <DialogContent className="bg-card border-gold/30 max-w-2xl">
          <DialogHeader>
            <div className="text-houston text-sm font-semibold mb-2">{selectedPanel?.category}</div>
            <DialogTitle className="text-2xl font-bold text-gold">
              {selectedPanel?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold mb-2">Speakers:</h4>
              <p className="text-muted-foreground">{selectedPanel?.speakers}</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Overview:</h4>
              <p className="text-muted-foreground">{selectedPanel?.description}</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">What You'll Learn:</h4>
              <p className="text-muted-foreground">{selectedPanel?.details}</p>
            </div>
            <Button variant="hero" className="w-full" asChild>
              <a
                href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("HUECONA Panel: " + (selectedPanel?.title ?? ""))}&dates=20260716T140000Z/20260718T040000Z&details=${encodeURIComponent((selectedPanel?.description ?? "") + " Speakers: " + (selectedPanel?.speakers ?? ""))}&location=${encodeURIComponent("Blossom Hotel Houston, Houston, TX")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to My Schedule
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <MarblismRibbon
        eyebrow="Conference Premiere Sponsor"
        headline="Behind every modern creator: an AI team. Meet Marblism."
        ctaLabel="Hire AI Employees"
        ctaKey="conference_ribbon"
      />
      <Footer />
    </div>
  );
};

export default Conference;