import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, MapPin, Film, Music, Palette, UtensilsCrossed, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Schedule = () => {
  const [filter, setFilter] = useState("all");

  const scheduleData = {
    day1: [
      {
        time: "9:00 AM - 10:00 AM",
        title: "Opening Keynote: Hollywood Meets Houston",
        category: "all",
        icon: <Calendar size={20} />,
        location: "Main Stage",
        description: "Welcome address and keynote presentation setting the stage for HUE Conference & Awards.",
      },
      {
        time: "10:30 AM - 12:00 PM",
        title: "Film Panel: From Script to Screen",
        category: "film",
        icon: <Film size={20} />,
        location: "Theater A",
        description: "Panel discussion with award-winning filmmakers on the modern filmmaking journey.",
      },
      {
        time: "10:30 AM - 12:00 PM",
        title: "Music Workshop: Building Your Brand",
        category: "music",
        icon: <Music size={20} />,
        location: "Studio B",
        description: "Interactive workshop on developing your music career and personal brand.",
      },
      {
        time: "12:00 PM - 1:30 PM",
        title: "Networking Lunch & Culinary Showcase",
        category: "culinary",
        icon: <UtensilsCrossed size={20} />,
        location: "Grand Ballroom",
        description: "Network with attendees while sampling cuisine from Houston's top chefs.",
      },
      {
        time: "2:00 PM - 3:30 PM",
        title: "Arts Panel: Visual Storytelling in the Digital Age",
        category: "arts",
        icon: <Palette size={20} />,
        location: "Gallery Space",
        description: "Contemporary artists discuss adapting to digital platforms and opportunities.",
      },
      {
        time: "4:00 PM - 6:00 PM",
        title: "Film Screenings Block 1",
        category: "film",
        icon: <Film size={20} />,
        location: "Cinema Hall",
        description: "Premiere screenings of selected short films and documentaries.",
      },
      {
        time: "7:00 PM - 9:00 PM",
        title: "Opening Night Reception",
        category: "all",
        icon: <Calendar size={20} />,
        location: "Rooftop Terrace",
        description: "Evening reception with live music, networking, and city views.",
      },
    ],
    day2: [
      {
        time: "9:00 AM - 10:30 AM",
        title: "Music Panel: The New Music Industry",
        category: "music",
        icon: <Music size={20} />,
        location: "Main Stage",
        description: "Chart-topping artists discuss independence and innovation in music.",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Culinary Masterclass: Plating & Presentation",
        category: "culinary",
        icon: <UtensilsCrossed size={20} />,
        location: "Demo Kitchen",
        description: "Hands-on masterclass with a James Beard Award-winning chef.",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Film Workshop: Cinematography Fundamentals",
        category: "film",
        icon: <Film size={20} />,
        location: "Theater B",
        description: "Technical workshop covering lighting, composition, and visual storytelling.",
      },
      {
        time: "1:00 PM - 2:00 PM",
        title: "Lunch Break & Exhibition",
        category: "all",
        icon: <Calendar size={20} />,
        location: "Exhibition Hall",
        description: "View art installations and sponsor exhibitions.",
      },
      {
        time: "2:00 PM - 3:30 PM",
        title: "Keynote: The Future of Entertainment",
        category: "all",
        icon: <Calendar size={20} />,
        location: "Main Stage",
        description: "Industry leaders discuss technology, AI, and emerging platforms.",
      },
      {
        time: "4:00 PM - 6:00 PM",
        title: "Live Music Performances",
        category: "music",
        icon: <Music size={20} />,
        location: "Performance Hall",
        description: "Showcase of emerging and established musical artists.",
      },
      {
        time: "7:00 PM - 11:00 PM",
        title: "HUE Awards Ceremony",
        category: "all",
        icon: <Calendar size={20} />,
        location: "Grand Ballroom",
        description: "Red carpet and awards celebration honoring excellence across all categories.",
      },
    ],
    day3: [
      {
        time: "9:00 AM - 10:30 AM",
        title: "Panel: Creative Collaboration Across Disciplines",
        category: "all",
        icon: <Calendar size={20} />,
        location: "Main Stage",
        description: "Multi-disciplinary creators discuss cross-industry partnerships.",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Arts Workshop: Building Your Portfolio",
        category: "arts",
        icon: <Palette size={20} />,
        location: "Gallery Space",
        description: "Practical guidance on developing a professional art portfolio.",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Culinary Panel: From Kitchen to Empire",
        category: "culinary",
        icon: <UtensilsCrossed size={20} />,
        location: "Demo Kitchen",
        description: "Celebrity chefs share insights on building culinary brands.",
      },
      {
        time: "1:00 PM - 2:30 PM",
        title: "Farewell Lunch & Tastings",
        category: "culinary",
        icon: <UtensilsCrossed size={20} />,
        location: "Grand Ballroom",
        description: "Final culinary experience featuring top Houston restaurants.",
      },
      {
        time: "3:00 PM - 4:00 PM",
        title: "Film Screenings Block 2",
        category: "film",
        icon: <Film size={20} />,
        location: "Cinema Hall",
        description: "Additional film screenings and Q&A sessions.",
      },
      {
        time: "4:00 PM - 5:30 PM",
        title: "Q&A with Award Winners",
        category: "all",
        icon: <Calendar size={20} />,
        location: "Main Stage",
        description: "Interactive session with this year's HUE Award recipients.",
      },
      {
        time: "6:00 PM",
        title: "Closing Remarks",
        category: "all",
        icon: <Calendar size={20} />,
        location: "Main Stage",
        description: "Final thoughts and see you next year!",
      },
    ],
  };

  const DaySchedule = ({ events }: { events: any[] }) => (
    <Accordion type="single" collapsible className="space-y-4">
      {events.filter(event => filter === "all" || event.category === filter || event.category === "all").map((event, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`} className="bg-card border border-border rounded-lg overflow-hidden">
          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
            <div className="flex items-start gap-4 w-full text-left">
              <div className="text-gold mt-1">{event.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-gold text-sm mb-2">
                  <Clock size={14} />
                  <span>{event.time}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin size={14} />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            <p className="text-muted-foreground">{event.description}</p>
            <Button variant="outline_gold" size="sm" className="mt-4">
              Add to Calendar
            </Button>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-charcoal z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <Calendar className="text-gold mx-auto mb-6 animate-pulse" size={80} />
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            Event <span className="text-gold">Schedule</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up mb-8">
            Three days of panels, screenings, performances, and celebrations
          </p>
          <Button variant="hero" size="lg">
            <Download className="mr-2" size={20} />
            Download Full Schedule
          </Button>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={filter === "all" ? "hero" : "outline_gold"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              All Events
            </Button>
            <Button
              variant={filter === "film" ? "hero" : "outline_gold"}
              size="sm"
              onClick={() => setFilter("film")}
            >
              <Film className="mr-2" size={16} />
              Film
            </Button>
            <Button
              variant={filter === "music" ? "hero" : "outline_gold"}
              size="sm"
              onClick={() => setFilter("music")}
            >
              <Music className="mr-2" size={16} />
              Music
            </Button>
            <Button
              variant={filter === "arts" ? "hero" : "outline_gold"}
              size="sm"
              onClick={() => setFilter("arts")}
            >
              <Palette className="mr-2" size={16} />
              Arts
            </Button>
            <Button
              variant={filter === "culinary" ? "hero" : "outline_gold"}
              size="sm"
              onClick={() => setFilter("culinary")}
            >
              <UtensilsCrossed className="mr-2" size={16} />
              Culinary
            </Button>
          </div>
        </div>
      </section>

      {/* Schedule Tabs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="day1" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-charcoal">
              <TabsTrigger value="day1">Day 1 - Friday</TabsTrigger>
              <TabsTrigger value="day2">Day 2 - Saturday</TabsTrigger>
              <TabsTrigger value="day3">Day 3 - Sunday</TabsTrigger>
            </TabsList>

            <TabsContent value="day1">
              <DaySchedule events={scheduleData.day1} />
            </TabsContent>

            <TabsContent value="day2">
              <DaySchedule events={scheduleData.day2} />
            </TabsContent>

            <TabsContent value="day3">
              <DaySchedule events={scheduleData.day3} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
