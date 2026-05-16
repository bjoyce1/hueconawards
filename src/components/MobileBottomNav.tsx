import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Calendar,
  Ticket,
  Award,
  MoreHorizontal,
  Info,
  Mic,
  Users,
  Sparkles,
  UtensilsCrossed,
  Handshake,
  Mail,
  X,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const primaryTabs = [
  { name: "Home", path: "/", icon: Home },
  { name: "Schedule", path: "/schedule", icon: Calendar },
  { name: "Tickets", path: "/tickets", icon: Ticket },
  { name: "Awards", path: "/awards", icon: Award },
];

const moreLinks = [
  { name: "About", path: "/about", icon: Info },
  { name: "Conference", path: "/conference", icon: Mic },
  { name: "Artists", path: "/artists", icon: Users },
  { name: "Presenters", path: "/presenters", icon: Sparkles },
  { name: "Culinary & Culture", path: "/culinary", icon: UtensilsCrossed },
  { name: "Sponsors", path: "/sponsors", icon: Handshake },
  { name: "Contact", path: "/contact", icon: Mail },
];

const MobileBottomNav = () => {
  const location = useLocation();
  const [moreOpen, setMoreOpen] = useState(false);

  const isMoreActive = moreLinks.some((l) => location.pathname === l.path);

  const TabButton = ({
    active,
    icon: Icon,
    label,
  }: {
    active: boolean;
    icon: typeof Home;
    label: string;
  }) => (
    <div
      className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all duration-200 active:scale-90 ${
        active ? "text-gold" : "text-muted-foreground"
      }`}
    >
      <div className="relative">
        <Icon size={22} strokeWidth={active ? 2.4 : 2} />
        {active && (
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
        )}
      </div>
      <span className={`text-[10px] tracking-wide ${active ? "font-semibold" : "font-medium"}`}>
        {label}
      </span>
    </div>
  );

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-t border-border/60"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Primary"
    >
      <div className="flex items-stretch h-16 max-w-md mx-auto px-1">
        {primaryTabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className="flex-1 flex items-stretch select-none"
            aria-current={location.pathname === tab.path ? "page" : undefined}
          >
            <TabButton
              active={location.pathname === tab.path}
              icon={tab.icon}
              label={tab.name}
            />
          </Link>
        ))}

        <Sheet open={moreOpen} onOpenChange={setMoreOpen}>
          <SheetTrigger asChild>
            <button className="flex-1 flex items-stretch select-none" aria-label="More">
              <TabButton active={isMoreActive || moreOpen} icon={MoreHorizontal} label="More" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="rounded-t-3xl border-t border-gold/20 bg-background/95 backdrop-blur-xl px-4 pt-3 pb-8"
            style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom))" }}
          >
            {/* Drag handle */}
            <div className="w-10 h-1 rounded-full bg-muted-foreground/30 mx-auto mb-3" />
            <SheetHeader className="text-left mb-4">
              <SheetTitle className="text-gold tracking-[0.2em] uppercase text-xs font-semibold">
                Explore
              </SheetTitle>
            </SheetHeader>
            <div className="grid grid-cols-2 gap-3">
              {moreLinks.map((link) => {
                const Icon = link.icon;
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMoreOpen(false)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border transition-all active:scale-95 ${
                      active
                        ? "bg-gold/10 border-gold/40 text-gold"
                        : "bg-card/60 border-border/50 text-foreground hover:border-gold/30"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        active ? "bg-gold/20" : "bg-muted/50"
                      }`}
                    >
                      <Icon size={20} className={active ? "text-gold" : "text-muted-foreground"} />
                    </div>
                    <span className="text-sm font-semibold leading-tight">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <button
              onClick={() => setMoreOpen(false)}
              className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-muted/40 text-muted-foreground text-sm font-medium active:scale-[0.98] transition-transform"
            >
              <X size={16} /> Close
            </button>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
