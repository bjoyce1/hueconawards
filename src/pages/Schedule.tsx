import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, MapPin, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroSchedule from "@/assets/hero-schedule.jpg";
import hueLogo from "@/assets/hue-logo.png";

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

const Schedule = () => {
  const scheduleData: Record<"day1" | "day2", ScheduleDay> = {
    day1: {
      theme: "OPEN SESAME!",
      subtitle: "Day 1 — Thursday, July 16, 2026",
      items: [
        {
          title: "Pre-Event Red Carpet + Press",
          description: "Registration + Networking opens the day.",
        },
        {
          time: "10:00 AM",
          title: "Creator Showcase Opens",
          description: "Art, Fashion, Novelties, Literature.",
        },
        {
          time: "10:00 AM – 11:00 AM",
          title: "Media Interviews & The Healing Suite",
          description: "The Healing Suite presented by Faith2Felicity.",
        },
        {
          time: "12:00 PM",
          title: "Welcome",
          speakers: "Sheroo Mukhtiar, MSW — President/CEO, IM Houston",
        },
        {
          time: "12:05 PM",
          title: "Courage to Collaborate: Inspiration From Within",
          speakers: "Inspirationalists: A.D. Roberts, Andre Notice, Dr. Latanya Edenburgs, Toni Tomlin",
        },
        {
          time: "12:10 PM",
          title: "Breakout Sessions",
          description: "A: A.D. Roberts · B: Andre Notice · C: Dr. Latanya Edenburgs · D: Toni Tomlin",
        },
        {
          time: "1:10 PM",
          title: "Screening — Chasing Trane Trailer (John Coltrane)",
        },
        {
          time: "1:18 PM",
          title: "Introduction",
          speakers: "Sheroo Mukhtiar introduces Chasing Trane Producer, Spencer Proffer",
        },
        {
          time: "1:20 PM – 1:35 PM",
          title: "Opening Speaker — Spencer Proffer",
          location: "Mainstage",
        },
        {
          time: "1:55 PM",
          title: "Converging Creativity — Panel Introduction",
          speakers: "Moderator: Kelsey Scott · Panelists: Michael Vamosy, Spencer Proffer, Eve Pomerance",
          description:
            "Industry Panels (Film, Music, Digital Media, Sports, Fashion, Innovation, Entertainment). Purpose: to empower, educate, and connect emerging and established talent across the entertainment ecosystem.",
        },
        {
          time: "2:15 PM",
          title: "Breakout / Pitch Sessions",
          description: "A: Michael Vamosy · B: Spencer Proffer · C: Eve Pomerance",
        },
        {
          time: "2:45 PM",
          title: "Film Screening — “The Ebony Canal” (Documentary Trailer)",
          speakers: "Award-winning writer & director Emmai Alaquiva",
        },
        {
          time: "2:52 PM",
          title: "Film & Television — The Industry Meets Houston",
          speakers:
            "Moderator: Eve Pomerance · Panelists: Anita Osuigwe-Spencer, Kelsey Scott, Cristala “Krys” Poole Dorsey, Emmai Alaquiva",
          description:
            "Topics: The Things I Wasn’t Warned About · Attracting investment and distribution opportunities · Pathways for local filmmakers and actors. Featuring Hollywood producers, casting agents, and streaming platform representatives.",
        },
        {
          time: "3:05 PM",
          title: "Breakout Sessions",
          description: "A: Anita Spencer · B: Kelsey Scott · C: Cristala “Krys” Poole Dorsey · D: Emmai Alaquiva",
        },
        {
          time: "3:35 PM",
          title: "Intro to “And the Beat Goes On” Trailer",
          speakers: "Cristala “Krys” Poole Dorsey, Creative Director",
        },
        {
          time: "3:50 PM",
          title: "Recovery in Sports — “Getting Back Up”",
          speakers: "Ed Block CourageCast Team Roundtable — Wally Williams et al.",
        },
        {
          time: "4:30 PM",
          title: "Programming Concludes",
        },
        {
          time: "6:30 PM",
          title: "Networking Mixer",
        },
        {
          time: "10:00 PM",
          title: "Night Cap | After Dark",
          description: "All-Access + VIP guests only.",
        },
      ],
    },
    day2: {
      theme: "ABRA-CA-DABRA!",
      subtitle: "Day 2 — Friday, July 17, 2026",
      items: [
        {
          title: "Registration + Networking",
        },
        {
          time: "10:00 AM",
          title: "Creator Showcase Opens",
          description: "Art, Fashion, Novelties, Literature.",
        },
        {
          time: "10:00 AM – 11:00 AM",
          title: "Media Interviews & The Healing Suite",
          description: "The Healing Suite presented by Faith2Felicity.",
        },
        {
          time: "12:00 PM",
          title: "Media Interviews Conclude",
        },
        {
          time: "12:00 PM",
          title: "Closing Address — TBA",
          speakers: "Introduction: Michael Vamosy",
          description: "Q&A on Mainstage, followed by Luncheon + Networking.",
        },
        {
          title: "Music Industry — “Breaking Sound Barriers”",
          speakers: "Spencer Proffer, Cornelius Pratt (others TBA)",
          description:
            "Topics: Building sustainable careers as independent artists · The rise of Texas labels and music collectives · Sync licensing, publishing, and performance rights. Panelists: producers, A&R reps, performing artists, and entertainment lawyers.",
        },
        {
          title: "Culinary Arts — “The Flavor of Culture”",
          speakers: "Introduction: Phyllis Bailey · Bao Ong (Restaurant Critic) and others TBA",
          description:
            "Topics: Culinary storytelling and brand building · From local kitchens to national food media · Creative collaborations between chefs and artists. Panelists: celebrity chefs, food stylists, media producers, and cultural curators.",
        },
        {
          title: "Visual & Digital Arts — “Creative Futures”",
          speakers: "Introduction: Spencer Proffer · Panel: Asante Bradford, Cornelius Pratt, Michael Vamosy",
          description:
            "Topics: Bridging traditional and digital art markets · AI and immersive technology in creative expression · The business of art: monetization, NFTs, and gallery exposure. Panelists: visual artists, curators, digital innovators, and art investors.",
        },
        {
          time: "4:30 PM",
          title: "Programming and Exhibits Conclude",
        },
        {
          time: "6:30 PM",
          title: "VOILA! — Red Carpet + Press + Pre-Reception",
        },
        {
          time: "7:30 PM",
          title: "HUECONA Awards Show",
          description:
            "Welcome · Special Performance · Final Address / Ringing of the Bell · Presenters TBA. Awards: Film Vanguard · Music Innovator · Fashion Forward · Community Impact · Rising Star · Artistic Visionary · Culinary Creative · Lifetime Achievement (Living Legend).",
        },
        {
          time: "8:30 PM",
          title: "Award Presentation",
        },
        {
          time: "9:30 PM",
          title: "Celebration",
        },
      ],
    },
  };

  const DaySchedule = ({ day }: { day: ScheduleDay }) => (
    <div>
      <div className="text-center mb-10">
        <p className="text-gold tracking-[0.3em] uppercase text-sm mb-2">{day.theme}</p>
        <h2 className="text-2xl md:text-3xl font-bold">{day.subtitle}</h2>
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
                  <h3 className="text-lg font-bold mb-1">{event.title}</h3>
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

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroSchedule})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-charcoal z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <img
            src={hueLogo}
            alt="HUECONA"
            className="h-20 md:h-28 w-auto mx-auto mb-8 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-fade-in"
          />
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            Event <span className="text-gold">Schedule</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up mb-8">
            Two days of panels, screenings, performances, and celebrations — July 16–17, 2026
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/docs/HUECONA_Nominations_Terms_and_Conditions.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2" size={20} />
              Download Event Info (PDF)
            </a>
          </Button>
        </div>
      </section>

      {/* Schedule Tabs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="day1" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-charcoal">
              <TabsTrigger value="day1">Day 1 — Thu, July 16</TabsTrigger>
              <TabsTrigger value="day2">Day 2 — Fri, July 17</TabsTrigger>
            </TabsList>

            <TabsContent value="day1">
              <DaySchedule day={scheduleData.day1} />
            </TabsContent>

            <TabsContent value="day2">
              <DaySchedule day={scheduleData.day2} />
            </TabsContent>
          </Tabs>

          <p className="text-center text-muted-foreground text-sm mt-12 max-w-3xl mx-auto">
            <span className="text-gold font-semibold">Special Guest Perks:</span> Award Presenter · Healing Suite ·
            Panelist · Masterclass Instructor (optional, additional pay) · All-Access to panels and programming.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
