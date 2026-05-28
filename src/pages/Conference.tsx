import PageHero from "@/components/PageHero";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import MarblismRibbon from "@/components/MarblismRibbon";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageSquare, Film, Music, Palette, UtensilsCrossed, Calendar, Clock, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroConference from "@/assets/hero-conference.jpg";
import heroVolunteer from "@/assets/hero-volunteer.jpg";
import volunteerGraphic from "@/assets/volunteer-graphic.png";

type ScheduleItem = {
  time?: string;
  title: string;
  location?: string;
  description?: string;
  speakers?: string;
};

type ScheduleDay = {
  theme: string;
  subtitle: string;
  items: ScheduleItem[];
};

const Conference = () => {
  const [selectedPanel, setSelectedPanel] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") === "schedule" ? "schedule" : "overview";
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  useEffect(() => {
    const t = searchParams.get("tab");
    if (t === "schedule" || t === "overview") setActiveTab(t);
  }, [searchParams]);

  const handleTabChange = (val: string) => {
    setActiveTab(val);
    const next = new URLSearchParams(searchParams);
    if (val === "schedule") next.set("tab", "schedule");
    else next.delete("tab");
    setSearchParams(next, { replace: true });
  };

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

  const scheduleData: Record<"day1" | "day2", ScheduleDay> = {
    day1: {
      theme: "OPEN SESAME!",
      subtitle: "Day 1 — Thursday, July 16, 2026",
      items: [
        { title: "Pre-Event Red Carpet + Press", description: "Registration + Networking opens the day." },
        { time: "10:00 AM", title: "Creator Showcase Opens", description: "Art, Fashion, Novelties, Literature." },
        { time: "10:00 AM – 11:00 AM", title: "Media Interviews & The Healing Suite", description: "The Healing Suite presented by Faith2Felicity." },
        { time: "12:00 PM", title: "Welcome", speakers: "Sheroo Mukhtiar, MSW — President/CEO, IM Houston" },
        { time: "12:05 PM", title: "Courage to Collaborate: Inspiration From Within", speakers: "Inspirationalists: A.D. Roberts, Andre Notice, Dr. Latanya Edenburgs, Toni Tomlin" },
        { time: "12:10 PM", title: "Breakout Sessions", description: "A: A.D. Roberts · B: Andre Notice · C: Dr. Latanya Edenburgs · D: Toni Tomlin" },
        { time: "1:10 PM", title: "Screening — Chasing Trane Trailer (John Coltrane)" },
        { time: "1:18 PM", title: "Introduction", speakers: "Sheroo Mukhtiar introduces Chasing Trane Producer, Spencer Proffer" },
        { time: "1:20 PM – 1:35 PM", title: "Opening Speaker — Spencer Proffer", location: "Mainstage" },
        { time: "1:55 PM", title: "Converging Creativity — Panel Introduction", speakers: "Moderator: Kelsey Scott · Panelists: Michael Vamosy, Spencer Proffer, Eve Pomerance", description: "Industry Panels (Film, Music, Digital Media, Sports, Fashion, Innovation, Entertainment). Purpose: to empower, educate, and connect emerging and established talent across the entertainment ecosystem." },
        { time: "2:15 PM", title: "Breakout / Pitch Sessions", description: "A: Michael Vamosy · B: Spencer Proffer · C: Eve Pomerance" },
        { time: "2:45 PM", title: "Film Screening — “The Ebony Canal” (Documentary Trailer)", speakers: "Award-winning writer & director Emmai Alaquiva" },
        { time: "2:52 PM", title: "Film & Television — The Industry Meets Houston", speakers: "Moderator: Eve Pomerance · Panelists: Anita Osuigwe-Spencer, Kelsey Scott, Cristala “Krys” Poole Dorsey, Emmai Alaquiva", description: "Topics: The Things I Wasn’t Warned About · Attracting investment and distribution opportunities · Pathways for local filmmakers and actors. Featuring Hollywood producers, casting agents, and streaming platform representatives." },
        { time: "3:05 PM", title: "Breakout Sessions", description: "A: Anita Spencer · B: Kelsey Scott · C: Cristala “Krys” Poole Dorsey · D: Emmai Alaquiva" },
        { time: "3:35 PM", title: "Intro to “And the Beat Goes On” Trailer", speakers: "Cristala “Krys” Poole Dorsey, Creative Director" },
        { time: "3:50 PM", title: "Recovery in Sports — “Getting Back Up”", speakers: "Ed Block CourageCast Team Roundtable — Wally Williams et al." },
        { time: "4:30 PM", title: "Programming Concludes" },
        { time: "6:30 PM", title: "Networking Mixer" },
        { time: "10:00 PM", title: "Night Cap | After Dark", description: "All-Access + VIP guests only." },
      ],
    },
    day2: {
      theme: "ABRA-CA-DABRA!",
      subtitle: "Day 2 — Friday, July 17, 2026",
      items: [
        { title: "Registration + Networking" },
        { time: "10:00 AM", title: "Creator Showcase Opens", description: "Art, Fashion, Novelties, Literature." },
        { time: "10:00 AM – 11:00 AM", title: "Media Interviews & The Healing Suite", description: "The Healing Suite presented by Faith2Felicity." },
        { time: "12:00 PM", title: "Media Interviews Conclude" },
        { time: "12:00 PM", title: "Closing Address — TBA", speakers: "Introduction: Michael Vamosy", description: "Q&A on Mainstage, followed by Luncheon + Networking." },
        { title: "Music Industry — “Breaking Sound Barriers”", speakers: "Spencer Proffer, Cornelius Pratt (others TBA)", description: "Topics: Building sustainable careers as independent guest · The rise of Texas labels and music collectives · Sync licensing, publishing, and performance rights. Panelists: producers, A&R reps, performing guest, and entertainment lawyers." },
        { title: "Culinary Arts — “The Flavor of Culture”", speakers: "Introduction: Phyllis Bailey · Bao Ong (Restaurant Critic) and others TBA", description: "Topics: Culinary storytelling and brand building · From local kitchens to national food media · Creative collaborations between chefs and guest. Panelists: celebrity chefs, food stylists, media producers, and cultural curators." },
        { title: "Visual & Digital Arts — “Creative Futures”", speakers: "Introduction: Spencer Proffer · Panel: Asante Bradford, Cornelius Pratt, Michael Vamosy", description: "Topics: Bridging traditional and digital art markets · AI and immersive technology in creative expression · The business of art: monetization, NFTs, and gallery exposure. Panelists: visual guest, curators, digital innovators, and art investors." },
        { time: "4:30 PM", title: "Programming and Exhibits Conclude" },
        { time: "6:30 PM", title: "VOILA! — Red Carpet + Press + Pre-Reception" },
        { time: "7:30 PM", title: "HUECONA Awards Show", description: "Welcome · Special Performance · Final Address / Ringing of the Bell · Presenters TBA. Awards: Film Vanguard · Music Innovator · Fashion Forward · Community Impact · Rising Star · Artistic Visionary · Culinary Creative · Lifetime Achievement (Living Legend)." },
        { time: "8:30 PM", title: "Award Presentation" },
        { time: "9:30 PM", title: "Celebration" },
      ],
    },
  };

  const DaySchedule = ({ day }: { day: ScheduleDay }) => (
    <div>
      <div className="text-center mb-10">
        <p className="text-gold tracking-[0.3em] uppercase text-sm mb-2">{day.theme}</p>
        <h3 className="text-2xl md:text-3xl font-bold">{day.subtitle}</h3>
        <p className="text-muted-foreground text-sm mt-2">Schedule and talents subject to change.</p>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        {day.items.map((event, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
              <div className="flex items-start gap-4 w-full text-left">
                <div className="text-gold mt-1">
                  <Calendar size={20} />
                </div>
                <div className="flex-1">
                  {event.time && (
                    <div className="flex items-center gap-2 text-gold text-sm mb-2">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                  )}
                  <h4 className="text-lg font-bold mb-1">{event.title}</h4>
                  {event.location && (
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pl-16">
              {event.speakers && (
                <p className="text-sm text-foreground/90 mb-2"><span className="text-gold font-semibold">Featuring: </span>{event.speakers}</p>
              )}
              {event.description && (
                <p className="text-muted-foreground">{event.description}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO title="HUECONA Conference 2026 — Panels, Keynotes & Full Schedule" description="Two days of industry panels, keynotes, masterclasses and networking — plus the full July 16–17 event schedule at Blossom Hotel Houston." path="/conference" jsonLd={{"@context":"https://schema.org","@type":"Event","name":"HUECONA Conference & Awards 2026","startDate":"2026-07-16T10:00:00-05:00","endDate":"2026-07-17T22:00:00-05:00","eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode","eventStatus":"https://schema.org/EventScheduled","location":{"@type":"Place","name":"Blossom Hotel Houston","address":{"@type":"PostalAddress","addressLocality":"Houston","addressRegion":"TX","addressCountry":"US"}},"organizer":{"@type":"Organization","name":"HUECONA - Houston United in Entertainment","url":"https://hueconawards.com/"},"description":"Two-day Houston United in Entertainment Conference & Awards celebrating Film, Music, Arts, Fashion, Sports & Culinary excellence."}} />

      {/* Hero Section */}
      <PageHero
        backgroundImage={heroConference}
        eyebrow="July 16–17, 2026"
        title="HUECONA"
        accent="Conference"
        description="Panel discussions, Q&A sessions, and networking opportunities with industry leaders."
      >
        <Button variant="hero" size="lg" className="rounded-none" asChild>
          <a href="/docs/HUECONA_Nominations_Terms_and_Conditions.pdf" target="_blank" rel="noopener noreferrer">
            <Download className="mr-2" size={20} />
            Download Event Info (PDF)
          </a>
        </Button>
      </PageHero>

      {/* Top-level Tabs: Overview / Schedule */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="max-w-7xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-charcoal h-auto">
              <TabsTrigger value="overview" className="text-sm py-2">Overview</TabsTrigger>
              <TabsTrigger value="schedule" className="text-sm py-2">Schedule</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              {/* Featured Panels - Horizontal Scroll */}
              <div className="mb-20">
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

              {/* All Panels Grid */}
              <div>
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
            </TabsContent>

            <TabsContent value="schedule">
              <div className="max-w-5xl mx-auto">
                <Tabs defaultValue="day1">
                  <TabsList className="grid w-full grid-cols-2 mb-12 bg-charcoal h-auto">
                    <TabsTrigger value="day1" className="text-xs sm:text-sm whitespace-normal py-2 leading-tight">
                      <span className="sm:hidden">Day 1<br />Thu, Jul 16</span>
                      <span className="hidden sm:inline">Day 1 — Thu, July 16</span>
                    </TabsTrigger>
                    <TabsTrigger value="day2" className="text-xs sm:text-sm whitespace-normal py-2 leading-tight">
                      <span className="sm:hidden">Day 2<br />Fri, Jul 17</span>
                      <span className="hidden sm:inline">Day 2 — Fri, July 17</span>
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="day1"><DaySchedule day={scheduleData.day1} /></TabsContent>
                  <TabsContent value="day2"><DaySchedule day={scheduleData.day2} /></TabsContent>
                </Tabs>

                <p className="text-center text-muted-foreground text-sm mt-12 max-w-3xl mx-auto">
                  <span className="text-gold font-semibold">Special Guest Perks:</span> Award Presenter · Healing Suite ·
                  Panelist · Masterclass Instructor (optional, additional pay) · All-Access to panels and programming.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroVolunteer})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-gold/40 to-houston/40 rounded-2xl blur-xl" />
                <img
                  src={volunteerGraphic}
                  alt="2026 HUECONA Conference & Awards Volunteer"
                  width={1000}
                  height={760}
                  loading="lazy"
                  className="relative rounded-2xl border-2 border-gold/40 shadow-2xl max-w-md w-full"
                />
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold px-3 py-1.5 border border-white/10 bg-[#1a2129] inline-block mb-6">
                Join The Team
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">
                Volunteer at <span className="text-gold">HUECONA</span>
              </h2>
              <p className="text-base md:text-lg text-white/75 leading-relaxed mb-8">
                Be part of the magic behind Houston's premier entertainment conference and awards. Volunteers receive free event access, exclusive HUECONA swag, and unforgettable behind-the-scenes experiences alongside industry leaders.
              </p>
              <a
                href="https://www.volunteerhou.org/agency/detail/HeartbeatPerformingArtsCharities/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="xl">
                  Volunteer
                </Button>
              </a>
            </div>
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
