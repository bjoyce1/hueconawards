import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Film, Music, Palette, UtensilsCrossed, Users, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroArtists from "@/assets/hero-artists.jpg";
import hueLogo from "@/assets/hue-logo.png";

const Artists = () => {
  const [selectedArtist, setSelectedArtist] = useState<any>(null);

  const artists = {
    actors: [
      {
        id: 1,
        name: "Artist Name",
        role: "Award-Winning Actor",
        category: "Film",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Award-winning performer with over 20 years of experience in film and television.",
        achievements: ["Academy Award Nominee", "Golden Globe Winner", "SAG Award Winner"],
      },
      // More actors...
      { id: 2, name: "Artist Name", role: "Lead Actor", category: "Film", bio: "Talented performer...", achievements: ["Critics Choice Award"] },
      { id: 3, name: "Artist Name", role: "Character Actor", category: "Film", bio: "Versatile talent...", achievements: ["Indie Spirit Award"] },
    ],
    filmmakers: [
      {
        id: 4,
        name: "Director Name",
        role: "Film Director",
        category: "Film",
        bio: "Visionary filmmaker known for groundbreaking work in independent cinema.",
        achievements: ["Sundance Award Winner", "Cannes Selection", "Emmy Award"],
      },
      { id: 5, name: "Producer Name", role: "Executive Producer", category: "Film", bio: "Industry veteran...", achievements: ["Oscar-Nominated"] },
      { id: 6, name: "Cinematographer Name", role: "Director of Photography", category: "Film", bio: "Master of visual storytelling...", achievements: ["ASC Award"] },
    ],
    musicians: [
      {
        id: 7,
        name: "Artist Name",
        role: "Recording Artist",
        category: "Music",
        bio: "Multi-platinum recording artist and songwriter pushing boundaries in modern music.",
        achievements: ["Grammy Winner", "Billboard #1", "Multi-Platinum Album"],
      },
      { id: 8, name: "Artist Name", role: "Music Producer", category: "Music", bio: "Hit-making producer...", achievements: ["Producer of the Year"] },
      { id: 9, name: "Artist Name", role: "Emerging Artist", category: "Music", bio: "Rising star...", achievements: ["Best New Artist Nominee"] },
    ],
    chefs: [
      {
        id: 10,
        name: "Chef Name",
        role: "Executive Chef",
        category: "Culinary",
        bio: "James Beard Award-winning chef revolutionizing Houston's culinary scene.",
        achievements: ["James Beard Award", "Michelin Star", "Top Chef Winner"],
      },
      { id: 11, name: "Chef Name", role: "Pastry Chef", category: "Culinary", bio: "Master of desserts...", achievements: ["Best Pastry Chef"] },
      { id: 12, name: "Chef Name", role: "Restaurant Owner", category: "Culinary", bio: "Culinary entrepreneur...", achievements: ["Restaurant of the Year"] },
    ],
    visualArtists: [
      {
        id: 13,
        name: "Artist Name",
        role: "Visual Artist",
        category: "Arts",
        bio: "Contemporary artist whose work has been featured in galleries worldwide.",
        achievements: ["Whitney Biennial", "Museum of Modern Art Collection", "Guggenheim Fellowship"],
      },
      { id: 14, name: "Artist Name", role: "Sculptor", category: "Arts", bio: "Public art installations...", achievements: ["NEA Grant Recipient"] },
      { id: 15, name: "Artist Name", role: "Mixed Media Artist", category: "Arts", bio: "Innovative creator...", achievements: ["Artist of the Year"] },
    ],
    specialGuests: [
      {
        id: 16,
        name: "Special Guest",
        role: "Industry Icon",
        category: "Special Guest",
        bio: "Legendary entertainer and cultural icon being honored at this year's HUE Awards.",
        achievements: ["Lifetime Achievement Award", "Cultural Ambassador", "Industry Pioneer"],
      },
    ],
  };

  const ArtistCard = ({ artist }: { artist: any }) => (
    <div
      onClick={() => setSelectedArtist(artist)}
      className="bg-card border border-border rounded-lg overflow-hidden card-hover gold-glow cursor-pointer group"
    >
      <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
        <Users className="text-muted-foreground group-hover:scale-110 transition-transform" size={64} />
        <div className="absolute top-2 right-2 bg-gold px-3 py-1 rounded-full">
          <Star size={16} className="text-charcoal" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
        <p className="text-gold text-sm mb-3">{artist.role}</p>
        <div className="flex items-center gap-2 text-muted-foreground text-xs">
          {artist.category === "Film" && <Film size={14} />}
          {artist.category === "Music" && <Music size={14} />}
          {artist.category === "Arts" && <Palette size={14} />}
          {artist.category === "Culinary" && <UtensilsCrossed size={14} />}
          <span>{artist.category}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroArtists})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-charcoal z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <img src={hueLogo} alt="HUE" className="h-20 md:h-28 w-auto mx-auto mb-8 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-fade-in" />
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            Featured <span className="text-gold">Artists</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Celebrating the talent, creativity, and vision of Houston's entertainment community
          </p>
        </div>
      </section>

      {/* Artists Grid with Tabs */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-6 mb-12 bg-background/50">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="actors">Actors</TabsTrigger>
              <TabsTrigger value="filmmakers">Filmmakers</TabsTrigger>
              <TabsTrigger value="musicians">Musicians</TabsTrigger>
              <TabsTrigger value="chefs">Chefs</TabsTrigger>
              <TabsTrigger value="visual">Visual Arts</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...artists.actors.slice(0, 1), ...artists.filmmakers.slice(0, 1), ...artists.musicians.slice(0, 1), ...artists.chefs.slice(0, 1), ...artists.visualArtists.slice(0, 1), ...artists.specialGuests].map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="actors">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {artists.actors.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="filmmakers">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {artists.filmmakers.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="musicians">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {artists.musicians.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="chefs">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {artists.chefs.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="visual">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {artists.visualArtists.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Artist Detail Modal */}
      <Dialog open={selectedArtist !== null} onOpenChange={() => setSelectedArtist(null)}>
        <DialogContent className="bg-card border-gold/30 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-gold">
              {selectedArtist?.name}
            </DialogTitle>
            <p className="text-houston">{selectedArtist?.role}</p>
          </DialogHeader>
          <div className="space-y-6">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <Users size={80} className="text-muted-foreground" />
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-3">Biography</h4>
              <p className="text-muted-foreground leading-relaxed">{selectedArtist?.bio}</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3">Notable Achievements</h4>
              <ul className="space-y-2">
                {selectedArtist?.achievements.map((achievement: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                    <Star className="text-gold" size={16} />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <Button variant="hero" className="flex-1">
                <ExternalLink size={16} className="mr-2" />
                View Portfolio
              </Button>
              <Button variant="outline_gold" className="flex-1">
                View Work
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Artists;
