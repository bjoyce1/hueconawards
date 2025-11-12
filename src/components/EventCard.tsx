import { ReactNode } from "react";
import { Card } from "./ui/card";

interface EventCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const EventCard = ({ icon, title, description }: EventCardProps) => {
  return (
    <Card className="p-6 card-hover gold-glow bg-card border-border cursor-pointer group">
      <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

export default EventCard;
