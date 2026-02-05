import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Users, Briefcase, HelpCircle } from "lucide-react";
import heroContact from "@/assets/hero-contact.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section vignette relative flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroContact})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-charcoal z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <Mail className="text-gold mx-auto mb-6 animate-pulse" size={80} />
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Have questions? Want to get involved? We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 text-center card-hover">
              <Users className="text-gold mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">General Inquiries</h3>
              <p className="text-muted-foreground mb-4">Questions about the event?</p>
              <a href="mailto:info@hueawards.com" className="text-gold hover:underline">
                info@hueawards.com
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center card-hover">
              <Briefcase className="text-gold mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Press & Media</h3>
              <p className="text-muted-foreground mb-4">Media inquiries and press credentials</p>
              <a href="mailto:press@hueawards.com" className="text-gold hover:underline">
                press@hueawards.com
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center card-hover">
              <HelpCircle className="text-gold mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Volunteer</h3>
              <p className="text-muted-foreground mb-4">Want to help make HUE amazing?</p>
              <a href="mailto:volunteer@hueawards.com" className="text-gold hover:underline">
                volunteer@hueawards.com
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
                      <a href="mailto:info@hueawards.com" className="text-muted-foreground hover:text-gold">
                        info@hueawards.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-gold">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold mb-1">Venue</h4>
                      <p className="text-muted-foreground">
                        <span className="text-gold font-semibold">Blossom Hotel Houston</span><br />
                        Houston, TX<br />
                        <span className="text-sm">May 7–8, 2026</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="aspect-square bg-muted rounded-lg border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="text-muted-foreground mx-auto mb-4" size={64} />
                  <p className="text-gold font-bold">Blossom Hotel Houston</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Houston, TX
                  </p>
                </div>
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
              Volunteer at <span className="text-gold">HUE</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of something special! Join our volunteer team and help create an unforgettable experience for attendees. Volunteers receive free event access, HUE swag, and exclusive behind-the-scenes experiences.
            </p>
            <Button variant="hero" size="xl">
              Sign Up to Volunteer
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
