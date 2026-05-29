import nicole from "@/assets/guests/nicole-merritt.png";
import phyllis from "@/assets/guests/phyllis-bailey.png";
import muriel from "@/assets/guests/muriel-funches.png";
import akia from "@/assets/guests/akia-mcdaniel.png";
import angela from "@/assets/guests/angela-lewis.png";
import samiyah from "@/assets/guests/samiyah-sealy.png";

type Member = {
  name: string;
  role: string;
  img: string;
  num: string;
  featured?: boolean;
  objectPosition?: string;
};

const team: Member[] = [
  { name: "Nicole Merritt", role: "Executive Producer", img: nicole, num: "01", featured: true, objectPosition: "center 32%" },
  { name: "Phyllis J. Bailey", role: "Chief of Publicity", img: phyllis, num: "02", objectPosition: "center 30%" },
  { name: "Muriel Funches", role: "Chief of Syndication", img: muriel, num: "03", objectPosition: "center 30%" },
  { name: "Akia McDaniel", role: "Co-Producer", img: akia, num: "04", objectPosition: "center 28%" },
  { name: "Angela Lewis", role: "Co-Producer", img: angela, num: "05", objectPosition: "center 30%" },
  { name: "Samiyah Sealy", role: "Production Assistant", img: samiyah, num: "06", objectPosition: "center 30%" },
];

const ProductionTeam = () => {
  return (
    <section className="py-32 bg-charcoal">
      <div className="text-center mb-20 px-[max(2rem,5vw)]">
        <div className="font-mono text-[11px] font-medium tracking-[0.3em] uppercase text-gold mb-6">
          § 04 — Behind HUECONA
        </div>
        <h2
          className="font-serif font-medium leading-none tracking-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          The{" "}
          <span className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
            Production
          </span>{" "}
          Team
        </h2>
        <p className="font-serif italic text-xl text-muted-foreground max-w-xl mx-auto">
          The people building Houston's entertainment movement — bringing decades of production expertise to the city.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-[max(2rem,5vw)]">
        {team.map((m) => (
          <article key={m.name} className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0805] border border-gold-antique transition-all duration-700 group-hover:border-gold group-hover:-translate-y-1">
              <img
                src={m.img}
                alt={`${m.name}, ${m.role}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.08] group-hover:filter-none [filter:grayscale(1)_sepia(1)_saturate(1.4)_hue-rotate(5deg)_brightness(0.95)_contrast(1.05)]"
                style={{
                  objectPosition: m.objectPosition ?? "center 30%",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, hsla(0 0% 0% / 0.6) 100%), radial-gradient(ellipse at center, transparent 55%, hsla(0 0% 0% / 0.35) 100%)",
                }}
              />
              <span
                className={`absolute top-3 left-3.5 z-[2] font-serif italic font-medium text-gold-highlight ${
                  m.featured ? "text-2xl" : "text-xl"
                }`}
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
              >
                {m.num}
              </span>
            </div>

            <div className="relative pt-4 text-center">
              <span className="block w-6 h-px bg-gold mx-auto mb-3.5 transition-all duration-700 group-hover:w-12" />
              <span
                className={`block font-mono text-[10px] font-medium tracking-[0.25em] uppercase mb-2 ${
                  m.featured ? "text-gold-highlight" : "text-gold"
                }`}
              >
                {m.role}
              </span>
              <h3 className="font-serif text-xl font-semibold tracking-[0.02em] leading-tight">
                {m.name}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductionTeam;
