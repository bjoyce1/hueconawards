import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Film, Music, Palette, UtensilsCrossed, Trophy, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Awards = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  const categories = [
    {
      id: "film",
      icon: <Film size={48} />,
      title: "Film Awards",
      description: "Best Feature, Best Director, Best Actor/Actress, Best Screenplay, Best Cinematography",
      details: "Submit your feature films, short films, and documentaries for consideration across multiple categories.",
    },
    {
      id: "music",
      icon: <Music size={48} />,
      title: "Music Awards",
      description: "Best Album, Best Single, Best Music Video, Best New Artist, Best Live Performance",
      details: "Showcase your musical talent across various genres and formats.",
    },
    {
      id: "arts",
      icon: <Palette size={48} />,
      title: "Arts Awards",
      description: "Best Visual Artist, Best Installation, Best Public Art, Best Emerging Artist",
      details: "Recognition for visual artists, sculptors, and multimedia creators pushing boundaries.",
    },
    {
      id: "culinary",
      icon: <UtensilsCrossed size={48} />,
      title: "Culinary Awards",
      description: "Best Chef, Best New Restaurant, Best Food Innovation, Best Culinary Experience",
      details: "Celebrating Houston's world-class culinary talent and innovative dining experiences.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-charcoal z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <Trophy className="text-gold mx-auto mb-6 animate-pulse" size={80} />
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            <span className="text-gold">HUE</span> Awards
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Celebrating excellence across Film, Music, Arts, and Culinary categories
          </p>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Award <span className="text-gold">Categories</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="bg-card border border-border rounded-lg p-8 card-hover gold-glow cursor-pointer group"
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button variant="outline_gold" size="sm">
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="hero"
              size="xl"
              onClick={() => setShowSubmissionForm(true)}
              className="group"
            >
              <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
              Submit Your Work
            </Button>
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Selection <span className="text-gold">Criteria</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Demonstration of exceptional skill, creativity, and mastery in your craft
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing boundaries and bringing fresh perspectives to your field
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Impact</h3>
              <p className="text-muted-foreground">
                Making a meaningful contribution to Houston's creative and cultural landscape
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Detail Modal */}
      <Dialog open={selectedCategory !== null} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="bg-card border-gold/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gold">
              {categories.find((c) => c.id === selectedCategory)?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              {categories.find((c) => c.id === selectedCategory)?.details}
            </p>
            <div className="pt-4">
              <h4 className="font-bold mb-2">Specific Categories:</h4>
              <p className="text-muted-foreground text-sm">
                {categories.find((c) => c.id === selectedCategory)?.description}
              </p>
            </div>
            <Button
              variant="hero"
              className="w-full"
              onClick={() => {
                setSelectedCategory(null);
                setShowSubmissionForm(true);
              }}
            >
              Submit in This Category
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Submission Form Modal */}
      <Dialog open={showSubmissionForm} onOpenChange={setShowSubmissionForm}>
        <DialogContent className="bg-card border-gold/30 max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gold">Submit Your Work</DialogTitle>
          </DialogHeader>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" placeholder="Your full name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="film">Film</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                  <SelectItem value="culinary">Culinary</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Work Title *</Label>
              <Input id="title" placeholder="Title of your submission" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio / Artist Statement *</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself and your work (max 500 words)"
                rows={6}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website / Portfolio</Label>
              <Input id="website" type="url" placeholder="https://your-portfolio.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="social">Social Media Links</Label>
              <Input id="social" placeholder="Instagram, Twitter, etc." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="upload">Upload Work *</Label>
              <Input id="upload" type="file" className="cursor-pointer" />
              <p className="text-xs text-muted-foreground">
                Accepted formats: MP4, PDF, JPG, PNG (Max 100MB)
              </p>
            </div>

            <Button variant="hero" type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Awards;
