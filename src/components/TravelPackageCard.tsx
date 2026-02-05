import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

interface TravelPackageCardProps {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}

const TravelPackageCard = ({
  name,
  price,
  features,
  featured,
}: TravelPackageCardProps) => {
  return (
    <div
      className={`group relative bg-gradient-to-b from-card/80 to-card/40 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] ${
        featured ? "border-2 border-gold" : "border border-border/50 hover:border-gold/30"
      }`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center transition-colors group-hover:bg-gold/20">
          <Plane className="text-gold" size={18} />
        </div>
        <h3 className="text-base font-bold">{name}</h3>
      </div>
      <div className="text-xl font-bold text-gold mb-5">Starting at {price}</div>
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-5" />
      <ul className="space-y-2.5 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-gold/60 mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="outline_gold" className="w-full">
        Book Package
      </Button>
    </div>
  );
};

export default TravelPackageCard;
