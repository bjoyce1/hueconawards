import starletta from "@/assets/headshots/Starletta.png";
import kelseyScott from "@/assets/headshots/Kelsey-Scott.png";
import akia from "@/assets/headshots/Akia.png";
import angela from "@/assets/headshots/Angela.png";
import drCam from "@/assets/headshots/Dr-Cam.png";
import latanya from "@/assets/headshots/Latanya.png";
import andre from "@/assets/headshots/Andre.png";
import ad from "@/assets/headshots/AD.png";
import kentrell from "@/assets/headshots/Kentrell.png";
import eve from "@/assets/headshots/Eve.png";
import krys from "@/assets/headshots/Krys.png";
import phyllis from "@/assets/headshots/Phyllis.png";
import anita from "@/assets/headshots/Anita.png";
import nicole from "@/assets/headshots/Nicole.png";
import samiyah from "@/assets/headshots/Samiyah.png";
import toni from "@/assets/headshots/Toni.png";

const honorees = [
  { name: "Starletta", role: "Lifetime Achievement", img: starletta },
  { name: "Kelsey Scott", role: "Excellence in Film", img: kelseyScott },
  { name: "Dr. Cam", role: "Houston Icon", img: drCam },
  { name: "Angela", role: "Cultural Vision", img: angela },
  { name: "Akia", role: "Rising Voice", img: akia },
  { name: "Latanya", role: "Excellence in Production", img: latanya },
  { name: "Andre", role: "Music Visionary", img: andre },
  { name: "A.D.", role: "Creative Direction", img: ad },
  { name: "Kentrell", role: "Producer of the Year", img: kentrell },
  { name: "Eve", role: "Casting Excellence", img: eve },
  { name: "Krys", role: "Style & Vision", img: krys },
  { name: "Phyllis", role: "Industry Trailblazer", img: phyllis },
  { name: "Anita", role: "Houston Icon", img: anita },
  { name: "Nicole", role: "Storytelling", img: nicole },
  { name: "Samiyah", role: "Emerging Talent", img: samiyah },
  { name: "Toni", role: "Industry Leader", img: toni },
];

const HonoreesGrid = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4">Featured Recognition</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-3">
            The <span className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">Honorees</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-5" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating the visionaries shaping Houston's creative future
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10 max-w-6xl mx-auto">
          {honorees.map((p) => (
            <div key={p.name} className="group transition-transform duration-700 ease-out hover:-translate-y-1">
              <div className="aspect-square overflow-hidden relative bg-background border border-border group-hover:border-gold-deep transition-colors duration-700">
                <img
                  src={p.img}
                  alt={`${p.name} — ${p.role}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="relative pt-3.5 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-gold w-6 group-hover:w-12 transition-all duration-700 ease-out" />
                <div className="font-serif text-lg font-semibold uppercase tracking-[0.05em] leading-tight">
                  {p.name}
                </div>
                <div className="font-serif italic text-[13px] text-gold/85 mt-1">
                  {p.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonoreesGrid;
