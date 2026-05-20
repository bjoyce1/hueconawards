import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import hueLogo from "@/assets/hue-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Awards", path: "/awards" },
  { name: "Conference", path: "/conference" },
  { name: "Guests", path: "/guests" },
  { name: "Presenters", path: "/presenters" },
  { name: "Culinary & Culture", path: "/culinary" },
  { name: "Schedule", path: "/schedule" },
  { name: "Sponsors", path: "/sponsors" },
  { name: "Tickets", path: "/tickets" },
  { name: "Contact", path: "/contact" }];


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/85 backdrop-blur-xl shadow-lg border-b border-border/40"
          : "bg-gradient-to-b from-background/70 to-transparent backdrop-blur-sm lg:bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 lg:h-20">
          {/* Logo — compact on mobile */}
          <Link to="/" className="flex items-center gap-2 lg:gap-2.5 active:scale-95 transition-transform">
            <img src={hueLogo} alt="HUE Awards" className="h-8 lg:h-10 w-auto" />
            <div className="text-sm lg:text-xl font-bold tracking-wide">
              <span className="text-gold">HUECONA</span>
              <span className="hidden sm:inline text-foreground"> AWARDS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) =>
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-foreground hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            )}
          </div>

          {/* CTA — desktop only (mobile uses bottom nav Tickets tab) */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://www.eventbrite.com/e/huecona-conference-awards-tickets-1987844764201?aff=oddtdtcreator&keep_tld=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Tickets
              </a>
            </Button>
          </div>

          {/* Mobile quick CTA — Tickets pill */}
          <a
            href="https://www.eventbrite.com/e/huecona-conference-awards-tickets-1987844764201?aff=oddtdtcreator&keep_tld=true"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold text-primary-foreground text-xs font-bold tracking-wide active:scale-95 transition-transform shadow-md"
          >
            Tickets
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;