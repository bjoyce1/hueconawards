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
  { name: "Starletta", img: starletta },
  { name: "Kelsey Scott", img: kelseyScott },
  { name: "Dr. Cam", img: drCam },
  { name: "Angela", img: angela },
  { name: "Akia", img: akia },
  { name: "Latanya", img: latanya },
  { name: "Andre", img: andre },
  { name: "A.D.", img: ad },
  { name: "Kentrell", img: kentrell },
  { name: "Eve", img: eve },
  { name: "Krys", img: krys },
  { name: "Phyllis", img: phyllis },
  { name: "Anita", img: anita },
  { name: "Nicole", img: nicole },
  { name: "Samiyah", img: samiyah },
  { name: "Toni", img: toni },
];

const HonoreesGrid = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gold">Honorees & Speakers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrating the visionaries shaping Houston's creative future
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {honorees.map((p) => (
            <div key={p.name} className="group">
              <div className="aspect-square overflow-hidden rounded-lg border-2 border-border group-hover:border-gold transition-all duration-300">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <p className="mt-3 text-center text-sm uppercase tracking-wider font-semibold">
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonoreesGrid;
