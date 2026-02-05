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
      className={`bg-card border rounded-lg p-6 card-hover ${
        featured ? "border-gold border-2" : "border-border"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Plane className="text-gold" size={24} />
        <h3 className="text-lg font-bold">{name}</h3>
      </div>
      <div className="text-2xl font-bold text-gold mb-4">Starting at {price}</div>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="text-sm text-muted-foreground">
            • {feature}
          </li>
        ))}
      </ul>
      <Button variant="outline_gold" className="w-full mt-6">
        Book Package
      </Button>
    </div>
  );
};

export default TravelPackageCard;
