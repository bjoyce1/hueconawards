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
      className={`bg-card border-2 rounded-lg p-6 card-hover relative ${
        popular ? "border-gold scale-105" : "border-border"
      }`}
    >
      {(popular || badge) && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-charcoal px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
          {badge || "Most Popular"}
        </div>
      )}

      <div className="text-gold mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-center mb-1">{name}</h3>
      <div className="text-3xl font-bold text-center text-gold mb-2">{price}</div>
      <p className="text-center text-muted-foreground text-sm mb-6">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm">
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
