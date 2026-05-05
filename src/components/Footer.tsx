import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import hueLogo from "@/assets/hue-logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={hueLogo} alt="HUECONA Awards" className="h-10 w-auto" />
              <div className="text-2xl font-bold">
                <span className="text-gold">HUECONA</span>
                <span className="text-foreground"> AWARDS</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Houston United in Entertainment - Where Hollywood meets Houston culture.
              Celebrating excellence in Film, Music, Arts, and Culinary creativity.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:official@HUECONA.com?subject=Instagram%20Handle%20Request" aria-label="Instagram" className="text-muted-foreground hover:text-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:official@HUECONA.com?subject=Twitter%20Handle%20Request" aria-label="Twitter" className="text-muted-foreground hover:text-gold transition-colors">
                <Twitter size={24} />
              </a>
              <a href="mailto:official@HUECONA.com?subject=Facebook%20Page%20Request" aria-label="Facebook" className="text-muted-foreground hover:text-gold transition-colors">
                <Facebook size={24} />
              </a>
              <a href="mailto:official@HUECONA.com?subject=YouTube%20Channel%20Request" aria-label="YouTube" className="text-muted-foreground hover:text-gold transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-gold transition-colors">
                  About HUECONA
                </Link>
              </li>
              <li>
                <Link to="/awards" className="text-muted-foreground hover:text-gold transition-colors">
                  Awards
                </Link>
              </li>
              <li>
                <Link to="/conference" className="text-muted-foreground hover:text-gold transition-colors">
                  Conference
                </Link>
              </li>
              <li>
                <Link to="/tickets" className="text-muted-foreground hover:text-gold transition-colors">
                  Get Tickets
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to receive updates about HUECONA events
            </p>
            <form
              className="flex flex-col space-y-2"
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value || "";
                window.location.href = `mailto:official@HUECONA.com?subject=${encodeURIComponent("Newsletter Signup")}&body=${encodeURIComponent(`Please add me to the HUECONA mailing list.\n\nEmail: ${email}`)}`;
              }}
            >
              <Input name="email" placeholder="Your email" type="email" required className="bg-background" />
              <Button variant="hero" size="sm" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2026 HUECONA Conference & Awards. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="text-muted-foreground hover:text-gold text-sm transition-colors">
              Contact
            </Link>
            <a href="/docs/HUECONA_Press_Release.docx" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold text-sm transition-colors">
              Press
            </a>
            <a href="mailto:official@HUECONA.com?subject=Privacy%20Policy%20Request" className="text-muted-foreground hover:text-gold text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="mailto:official@HUECONA.com?subject=Terms%20of%20Service%20Request" className="text-muted-foreground hover:text-gold text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Sponsor Logos Placeholder */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm mb-4">Proud Partners & Sponsors</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="w-32 h-16 bg-muted rounded flex items-center justify-center text-xs">
              Sponsor Logo
            </div>
            <div className="w-32 h-16 bg-muted rounded flex items-center justify-center text-xs">
              Sponsor Logo
            </div>
            <div className="w-32 h-16 bg-muted rounded flex items-center justify-center text-xs">
              Sponsor Logo
            </div>
            <div className="w-32 h-16 bg-muted rounded flex items-center justify-center text-xs">
              Sponsor Logo
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;