import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { ReactNode } from "react";

interface TicketTierCardProps {
  name: string;
  icon: ReactNode;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  variant?: "default" | "hero" | "houston";
  badge?: string;
}

const TicketTierCard = ({
  name,
  icon,
  price,
  description,
  features,
  popular,
  variant = "default",
  badge,
}: TicketTierCardProps) => {
  return (
    <div
      className={`group relative bg-gradient-to-b from-card/80 to-card/40 rounded-2xl p-7 transition-all duration-300 hover:translate-y-[-4px] ${
        popular ? "border-2 border-gold scale-[1.02] z-10" : "border border-border/50 hover:border-gold/30"
      }`}
    >
      {(popular || badge) && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold to-gold/90 text-charcoal px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
          {badge || "Most Popular"}
        </div>
      )}

      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-5 transition-colors group-hover:bg-gold/20">
        <div className="text-gold">{icon}</div>
      </div>
      <h3 className="text-lg font-bold text-center mb-1">{name}</h3>
      <div className="text-3xl font-bold text-center text-gold mb-2">{price}</div>
      <p className="text-center text-muted-foreground text-xs mb-6 leading-relaxed">{description}</p>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={variant}
        className="w-full"
        size="lg"
      >
        Get {name}
      </Button>
    </div>
  );
};

export default TicketTierCard;
