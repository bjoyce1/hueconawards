import DisplayHeadline from "@/components/DisplayHeadline";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Users, ExternalLink } from "lucide-react";
import heroContact from "@/assets/hero-contact.jpg";
import hueLogo from "@/assets/hue-logo.png";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO title="Contact HUECONA — Get In Touch" description="Reach the HUECONA team at official@HUECONA.com. Find the venue location, dates and partnership inquiries." path="/contact"  />

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroContact})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-charcoal z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <img src={hueLogo} alt="HUECONA" className="h-20 md:h-28 w-auto mx-auto mb-8 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-fade-in" />
          <DisplayHeadline accent="Touch" className="mb-6 animate-fade-in">Get in</DisplayHeadline>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Have questions? Want to get involved? We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 text-center card-hover">
              <Mail className="text-gold mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">General Inquiries</h3>
              <p className="text-muted-foreground mb-4">For all questions about the event, sponsorships, press, volunteering, and more</p>
              <a href="mailto:official@HUECONA.com" className="text-gold hover:underline text-lg font-semibold">
                official@HUECONA.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Send Us a <span className="text-gold">Message</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john.doe@email.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="tickets">Tickets & Registration</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="press">Press & Media</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="artist">Artist Submission</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    rows={6}
                    required
                  />
                </div>

                <Button variant="hero" type="submit" className="w-full" size="lg">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div>
              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gold">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <a href="mailto:official@HUECONA.com" className="text-muted-foreground hover:text-gold">
                        official@HUECONA.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold mb-1">Venue</h4>
                      <p className="text-muted-foreground">
                        <span className="text-gold font-semibold">Blossom Hotel Houston</span><br />
                        7611 Main Street<br />
                        Houston, TX 77030<br />
                        <span className="text-sm">July 16–17, 2026</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="aspect-square rounded-lg border border-border overflow-hidden relative">
                <iframe
                  title="Blossom Hotel Houston map"
                  src="https://www.google.com/maps?q=Blossom+Hotel+Houston,+7611+Main+St,+Houston+TX+77030&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 flex items-center justify-between bg-card border border-border rounded-lg px-4 py-3">
                <div>
                  <p className="text-gold font-bold text-sm">Blossom Hotel Houston</p>
                  <p className="text-xs text-muted-foreground">7611 Main St, Houston, TX 77030</p>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Blossom+Hotel+Houston,+7611+Main+St,+Houston+TX+77030"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline_gold" size="sm">
                    <ExternalLink size={14} className="mr-2" />
                    Directions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Sign-up */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="text-gold mx-auto mb-6" size={64} />
            <h2 className="text-4xl font-bold mb-6">
              Volunteer at <span className="text-gold">HUECONA</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of something special! Join our volunteer team and help create an unforgettable experience for attendees. Volunteers receive free event access, HUECONA swag, and exclusive behind-the-scenes experiences.
            </p>
            <a href="https://www.volunteerhou.org/agency/detail/HeartbeatPerformingArtsCharities/" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                Sign Up to Volunteer
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;