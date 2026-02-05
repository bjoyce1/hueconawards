import { ReactNode } from "react";

interface EventCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const EventCard = ({ icon, title, description }: EventCardProps) => {
  return (
    <div className="group relative bg-gradient-to-b from-card/80 to-card/40 rounded-2xl p-7 border border-border/50 hover:border-gold/30 transition-all duration-300 hover:translate-y-[-4px]">
      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold/20">
        <div className="text-gold">{icon}</div>
      </div>
      <h3 className="text-base font-bold mb-2 tracking-wide">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default EventCard;
