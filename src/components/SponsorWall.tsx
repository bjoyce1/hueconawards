import empyrean from "@/assets/sponsors/empyrean-pr.jpg";
import illuminate from "@/assets/sponsors/illuminate-your-journey.png";
import meteor from "@/assets/sponsors/meteor-17.jpeg";
import faith2felicity from "@/assets/sponsors/faith2felicity.png";
import morris from "@/assets/sponsors/morris-travel.jpeg";
import notice from "@/assets/sponsors/notice-andre.jpg";
import oasis from "@/assets/sponsors/oasis-mind-spa.png";
import pandemonium from "@/assets/sponsors/pandemonium.png";
import pinkElephant from "@/assets/sponsors/pink-elephant.png";
import savvy from "@/assets/sponsors/savvy-designs.png";
import popcornBar from "@/assets/sponsors/popcorn-bar.png";

export const sponsors = [
  { name: "Pandemonium Entertainment Partners", logo: pandemonium, invert: false },
  { name: "Empyrean Public Relations", logo: empyrean, invert: true },
  { name: "Meteor 17", logo: meteor, invert: false },
  { name: "Morris Travel Group", logo: morris, invert: false },
  { name: "Illuminate Your Journey", logo: illuminate, invert: false },
  { name: "Faith2Felicity", logo: faith2felicity, invert: false },
  { name: "Notice Andre", logo: notice, invert: false },
  { name: "Oasis Mind Spa", logo: oasis, invert: false },
  { name: "Pink Elephant Solution", logo: pinkElephant, invert: false },
  { name: "Savvy Designs", logo: savvy, invert: true },
  { name: "The Popcorn Bar", logo: popcornBar, invert: false },
];

interface SponsorWallProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const SponsorWall = ({
  title = "Our Partners & Sponsors",
  subtitle = "Proudly supporting HUECONA 2026",
  className = "",
}: SponsorWallProps) => {
  return (
    <section className={`py-20 bg-charcoal ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Presented With</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            {title.split(" ").map((w, i) =>
              w.toLowerCase().includes("sponsor") || w.toLowerCase().includes("partner") ? (
                <span key={i} className="text-gold">{w} </span>
              ) : (
                <span key={i}>{w} </span>
              )
            )}
          </h2>
          {subtitle && <p className="text-muted-foreground mt-3">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group relative aspect-[3/2] bg-white border border-border rounded-lg flex items-center justify-center p-5 transition-all duration-500 hover:border-gold hover:shadow-[0_0_0_1px_hsl(var(--gold)/0.4)]"
              title={sponsor.name}
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                loading="lazy"
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorWall;
