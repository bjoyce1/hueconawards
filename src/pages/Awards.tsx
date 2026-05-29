import { useState } from "react";
import PageHero from "@/components/PageHero";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import MarblismRibbon from "@/components/MarblismRibbon";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import heroAwards from "@/assets/hero-awards.jpg";

const NOMINATION_URL = "https://form.jotform.com/260208455201042";
const TERMS_PDF = "/docs/HUECONA_Nominations_Terms_and_Conditions.pdf";

type Category = {
  id: string;
  num: string;
  tag: string;
  discipline: string;
  name: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  byInvitation?: boolean;
};

const categories: Category[] = [
  {
    id: "lifetime",
    num: "01",
    tag: "Highest Honor · By Selection",
    discipline: "Lifetime Achievement",
    name: "Lifetime Achievement Award",
    subtitle: "Honoring a Legacy of Excellence",
    description:
      "Celebrating an individual whose enduring contributions have shaped and transformed Houston's entertainment and creative landscape over the course of their career. The Lifetime Achievement honoree is selected by the HUECONA board rather than nominated.",
    detailedDescription:
      "The HUECONA board reviews candidates whose work has substantively defined Houston's creative identity over a decade or more. Honorees are recognized for a body of work, not a single project.",
    byInvitation: true,
  },
  {
    id: "film",
    num: "02",
    tag: "Film & Cinema",
    discipline: "Film",
    name: "Film Vanguard Award",
    subtitle: "Outstanding Achievement in Film",
    description:
      "Directing, cinematography, screenwriting, or production of a feature, short, or series with Houston creative connection.",
    detailedDescription:
      "Open to directors, cinematographers, screenwriters, and producers. Work must have been released, exhibited, or premiered within the eligibility window. Houston connection may be established through residency, location filming, primary cast/crew, or production company headquartered in the Greater Houston area.",
  },
  {
    id: "music",
    num: "03",
    tag: "Music & Sound",
    discipline: "Music",
    name: "Music Innovator Award",
    subtitle: "Breakthrough in Sound & Production",
    description:
      "Artists, producers, or engineers pushing creative boundaries with measurable impact in the past 24 months.",
    detailedDescription:
      "Open to recording artists, producers, audio engineers, and composers. Eligible work includes commercially released albums, EPs, singles, scores, or production credits. Streaming performance, critical reception, and industry recognition are considered.",
  },
  {
    id: "arts",
    num: "04",
    tag: "Visual & Digital Arts",
    discipline: "Visual Arts",
    name: "Artistic Visionary Award",
    subtitle: "Excellence in Visual & Digital Arts",
    description:
      "Painters, sculptors, photographers, digital creators, and multimedia artists shaping Houston's art scene.",
    detailedDescription:
      "Open to visual artists working in any medium, including painting, sculpture, photography, mixed media, digital art, NFT/blockchain art, and multimedia installation. Solo or group exhibitions, gallery representation, and public commissions qualify.",
  },
  {
    id: "fashion",
    num: "05",
    tag: "Fashion & Design",
    discipline: "Fashion",
    name: "High-Fashion Award",
    subtitle: "Leadership in Style & Design",
    description:
      "Designers, stylists, and creative directors elevating Houston's fashion scene to a national stage.",
    detailedDescription:
      "Open to fashion designers, stylists, creative directors, and brand founders. Eligible work includes collections shown, brand launches, editorial styling, and contributions to Houston Fashion Week or comparable platforms.",
  },
  {
    id: "culinary",
    num: "06",
    tag: "Culinary Arts",
    discipline: "Culinary",
    name: "Culinary Creative Award",
    subtitle: "Trailblazer in Culinary Innovation",
    description:
      "Chefs, restaurateurs, and culinary artists redefining Houston's food culture through originality and execution.",
    detailedDescription:
      "Open to chefs, restaurateurs, pastry chefs, mixologists, and food/beverage entrepreneurs. Operating restaurants, James Beard recognition, regional/national press coverage, and original culinary concepts all qualify.",
  },
  {
    id: "community",
    num: "07",
    tag: "Civic & Cultural",
    discipline: "Community Impact",
    name: "Community Impact Award",
    subtitle: "Cultural & Philanthropic Leadership",
    description:
      "Individuals or organizations making lasting, measurable contributions to Houston's creative community.",
    detailedDescription:
      "Open to nonprofit leaders, cultural organizers, philanthropists, and community advocates whose work has measurably advanced Houston's creative economy or expanded access to creative opportunity.",
  },
  {
    id: "rising",
    num: "08",
    tag: "Emerging Talent",
    discipline: "Rising Star",
    name: "Rising Star Award",
    subtitle: "Emerging Talent Across Disciplines",
    description:
      "Breakthrough creators in their first three years of professional practice. Open to any creative discipline.",
    detailedDescription:
      "Open to creators in any discipline (film, music, arts, fashion, culinary, design) within their first three years of professional practice. Eligibility is based on first paid/commercial work date, not age.",
  },
];

const Awards = () => {
  const [selected, setSelected] = useState<Category | null>(null);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <SEO
        title="The HUE Awards 2026 — Eight Categories Honoring Houston's Best"
        description="The inaugural HUE Awards honor excellence across Film, Music, Fashion, Visual Arts, Culinary, Community Impact, Rising Star, and Lifetime Achievement. Nominations open through May 31, 2026."
        path="/awards"
      />

      {/* ============ HERO (kept: video + voiceover) ============ */}
      <PageHero
        backgroundImage={heroAwards}
        videoSrc="/videos/award-hero.mp4"
        audioSrc="/audio/awards-voiceover.mp3"
        eyebrow="Inaugural Edition · 2026"
        title="The"
        accent="HUE Awards"
        description="Eight categories. One sculpted gold flame trophy. Recognizing the people moving the culture forward across Houston's entertainment, fashion, and culinary landscape."
      />

      {/* ============ HERO SLATE — practical info row ============ */}
      <section className="bg-charcoal border-y border-gold-antique">
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
          {[
            { label: "Categories", value: "08", italic: true },
            { label: "Nominations Close", value: "May 31, 2026", italicPart: "May 31" },
            { label: "Ceremony", value: "July 17, 2026", italicPart: "July 17" },
            { label: "Eligibility", value: "Houston Metro", italicPart: "Metro" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`px-6 py-6 flex flex-col gap-1.5 ${
                i > 0 ? "md:border-l border-border" : ""
              } ${i % 2 === 1 ? "border-l border-border md:border-l" : ""}`}
            >
              <span className="font-mono text-[10px] font-medium tracking-[0.25em] uppercase text-gold-antique">
                {item.label}
              </span>
              <span
                className="font-serif font-medium text-foreground"
                style={{ fontSize: "clamp(1rem, 1.3vw, 1.25rem)" }}
              >
                {item.italic ? (
                  <em className="italic text-gold-highlight">{item.value}</em>
                ) : item.italicPart ? (
                  <>
                    {item.value.split(item.italicPart)[0]}
                    <em className="italic text-gold-highlight">{item.italicPart}</em>
                    {item.value.split(item.italicPart)[1]}
                  </>
                ) : (
                  item.value
                )}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ INTRO STATEMENT ============ */}
      <section className="py-32 bg-charcoal">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 max-w-5xl mx-auto px-[max(2rem,5vw)]">
          <div className="font-mono text-[11px] font-medium tracking-[0.3em] uppercase text-gold pt-4 border-t border-gold self-start">
            The Awards
            <br />§ 01
          </div>
          <p
            className="font-serif leading-snug font-normal text-foreground"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
          >
            The HUE Awards are{" "}
            <em className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
              Houston's first multidisciplinary awards platform
            </em>{" "}
            bringing Hollywood-grade recognition standards to the city. Eight categories. One sculpted gold flame trophy. Recognizing the people moving the culture forward across every creative discipline.
          </p>
        </div>
      </section>

      {/* ============ REGISTRY OF CATEGORIES ============ */}
      <section className="py-32 bg-background border-t border-border">
        <div className="flex items-baseline justify-between flex-wrap gap-8 px-[max(2rem,5vw)] pb-16 border-b border-border max-w-7xl mx-auto">
          <h2
            className="font-serif font-medium leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            The 2026{" "}
            <span className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold">
            08 Awards · Open for Nomination
          </span>
        </div>

        <div>
          {categories.map((cat) => (
            <CategoryRow
              key={cat.id}
              category={cat}
              onLearnMore={() => setSelected(cat)}
            />
          ))}
        </div>
      </section>

      {/* ============ SELECTION CRITERIA — DOCUMENT STYLE ============ */}
      <section className="py-32 bg-charcoal border-t border-border">
        <div className="text-center mb-20 px-[max(2rem,5vw)]">
          <div className="font-mono text-[11px] font-medium tracking-[0.3em] uppercase text-gold mb-6">
            § 02 — Selection &amp; Eligibility
          </div>
          <h2
            className="font-serif font-medium leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            How{" "}
            <span className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
              Honorees
            </span>{" "}
            Are Chosen
          </h2>
        </div>

        <div className="max-w-3xl mx-auto px-[max(2rem,5vw)]">
          <CriteriaSection
            label="Eligibility"
            num="§ 02.01"
            isFirst
            body={
              <>
                Open to creators, artists, and organizations with{" "}
                <strong className="text-foreground font-semibold">
                  permanent residence, active studio, or substantive creative practice in the Greater Houston metropolitan area.
                </strong>{" "}
                Self-nominations and third-party nominations accepted. Past honorees of other awards programs remain eligible.
              </>
            }
          />
          <CriteriaSection
            label="Eligibility Window"
            num="§ 02.02"
            body={
              <>
                Released, exhibited, performed, or published work between{" "}
                <em className="italic text-gold-highlight">January 1, 2024</em> and{" "}
                <em className="italic text-gold-highlight">April 30, 2026</em>. Lifetime Achievement honorees are exempt from the window.
              </>
            }
          />
          <CriteriaSection
            label="Judging Panel"
            num="§ 02.03"
            body={
              <>
                An independent panel of industry professionals reviews nominations across each discipline. Panel members are drawn from{" "}
                <strong className="text-foreground font-semibold">working artists, established producers, journalists, and academic faculty</strong>{" "}
                active in Houston's creative economy. Panel composition is published in May 2026.
              </>
            }
          />
          <CriteriaSection
            label="Selection Standards"
            num="§ 02.04"
            body={
              <>
                Each nomination is evaluated against three criteria:
                <ul className="list-none mt-3 space-y-2">
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 text-xs text-gold-antique">◆</span>
                    <strong className="text-foreground font-semibold">Excellence</strong> — demonstrated mastery of craft and execution at a national-quality standard.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 text-xs text-gold-antique">◆</span>
                    <strong className="text-foreground font-semibold">Innovation</strong> — original perspective or method that advances the discipline beyond convention.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 text-xs text-gold-antique">◆</span>
                    <strong className="text-foreground font-semibold">Impact</strong> — meaningful, measurable contribution to Houston's cultural landscape or the discipline at large.
                  </li>
                </ul>
              </>
            }
          />
          <CriteriaSection
            label="Key Dates"
            num="§ 02.05"
            body={
              <ul className="list-none space-y-2">
                {[
                  ["March 1, 2026", "Nominations open"],
                  ["May 31, 2026", "Nominations close"],
                  ["June 15, 2026", "Shortlist published"],
                  ["July 1, 2026", "Finalists announced"],
                  ["July 17, 2026", "Awards ceremony, Blossom Hotel Houston"],
                ].map(([date, label]) => (
                  <li key={date} className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 text-xs text-gold-antique">◆</span>
                    <strong className="text-foreground font-semibold">{date}</strong> — {label}
                  </li>
                ))}
              </ul>
            }
          />
          <CriteriaSection
            label="The Award"
            num="§ 02.06"
            isLast
            body={
              <>
                Honorees receive the{" "}
                <em className="italic text-gold-highlight">HUE Award</em> — a sculpted gold flame monogram designed as both the brand mark and the physical trophy. The award is presented at the July 17 ceremony and accompanied by professional photography, press features, and inclusion in the inaugural honoree registry.
              </>
            }
          />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative py-32 bg-background border-t border-border text-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 50% 50%, hsla(43 74% 53% / 0.06), transparent 60%)",
          }}
        />
        <div className="relative z-[1] max-w-3xl mx-auto px-[max(2rem,5vw)]">
          <div className="font-mono text-xs tracking-[0.4em] uppercase text-gold mb-6">
            § 03 — Submit a Nomination
          </div>
          <h2
            className="font-serif font-medium leading-[0.95] tracking-[-0.03em] mb-8"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            Know someone who{" "}
            <span className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
              moves the culture?
            </span>
          </h2>
          <p className="font-serif text-xl leading-snug text-muted-foreground mb-12">
            Nominate them in any of the seven open categories. The process takes 5 minutes. The recognition lasts a career.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={NOMINATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-mono text-xs font-bold tracking-[0.3em] uppercase transition-all duration-400 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, hsl(var(--gold-highlight)) 0%, hsl(var(--gold)) 50%, hsl(var(--gold-deep)) 100%)",
                color: "hsl(var(--background))",
                boxShadow: "0 8px 32px hsla(43 74% 53% / 0.3)",
              }}
            >
              Submit a Nomination ↗
            </a>
            <a
              href={TERMS_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-mono text-xs font-medium tracking-[0.3em] uppercase text-gold border border-gold-antique hover:border-gold hover:bg-gold/5 transition-all duration-400"
            >
              Download Terms (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Category detail dialog */}
      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="bg-charcoal border-gold-antique max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-gold mb-2">
                  {selected.tag}
                </div>
                <DialogTitle className="font-serif text-3xl md:text-4xl font-medium leading-none tracking-tight">
                  {selected.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="font-serif italic text-lg text-gold-highlight">
                  "{selected.subtitle}"
                </p>
                <p className="font-serif text-base leading-relaxed text-foreground/80">
                  {selected.detailedDescription}
                </p>
                {!selected.byInvitation && (
                  <a
                    href={NOMINATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="hero" className="w-full mt-4">
                      Nominate in This Category
                    </Button>
                  </a>
                )}
                {selected.byInvitation && (
                  <div className="mt-4 p-4 border border-gold-antique rounded bg-background/50">
                    <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-highlight">
                      Honoree Selected by HUECONA Board
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <MarblismRibbon
        eyebrow="Awards Night Sponsor"
        headline="Tonight's stage is powered by Marblism — your AI Employee dream team."
        ctaLabel="Hire AI Employees"
        ctaKey="awards_ribbon"
      />
      <Footer />
    </div>
  );
};

// ============ SUB-COMPONENTS ============

const CategoryRow = ({
  category: c,
  onLearnMore,
}: {
  category: Category;
  onLearnMore: () => void;
}) => {
  const isFeatured = c.byInvitation;

  return (
    <div
      className={`group relative grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_auto] gap-6 md:gap-12 items-center px-[max(1.5rem,5vw)] border-b border-border max-w-7xl mx-auto cursor-pointer transition-colors duration-700 ${
        isFeatured
          ? "py-12 md:py-16 bg-[hsl(0_0%_6%)] border-b-gold-antique"
          : "py-10 hover:bg-gold/[0.02]"
      }`}
      onClick={onLearnMore}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, hsla(43 74% 53% / 0.04), transparent)",
        }}
      />

      <div
        className={`font-serif italic font-normal leading-none transition-all duration-700 group-hover:translate-x-2 ${
          isFeatured
            ? "bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent"
            : "text-gold-antique group-hover:text-gold"
        }`}
        style={{ fontSize: isFeatured ? "clamp(3rem, 5vw, 5rem)" : "clamp(2rem, 3.5vw, 3rem)" }}
      >
        {c.num}
      </div>

      <div className="min-w-0">
        <div className={`inline-flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.3em] uppercase mb-3 ${
          isFeatured ? "text-gold-highlight" : "text-gold"
        }`}>
          <span className="w-4 h-px bg-current" />
          {c.tag}
        </div>

        <h3
          className="font-serif font-medium leading-tight tracking-tight mb-2"
          style={{ fontSize: isFeatured ? "clamp(2rem, 4vw, 3.5rem)" : "clamp(1.5rem, 2.8vw, 2.5rem)" }}
        >
          {isFeatured ? (
            <>
              <span className="italic bg-[linear-gradient(135deg,hsl(var(--gold-highlight))_0%,hsl(var(--gold))_50%,hsl(var(--gold-deep))_100%)] bg-clip-text text-transparent">
                Lifetime Achievement
              </span>{" "}
              Award
            </>
          ) : (
            c.name
          )}
        </h3>

        <p
          className="font-serif italic text-gold-highlight mb-3"
          style={{ fontSize: "clamp(1rem, 1.3vw, 1.25rem)" }}
        >
          "{c.subtitle}"
        </p>

        <p className={`font-serif leading-relaxed text-foreground/75 ${
          isFeatured ? "text-lg max-w-2xl" : "text-base max-w-xl"
        }`}>
          {c.description}
        </p>
      </div>

      <div className="md:flex hidden flex-col items-end gap-2">
        {c.byInvitation ? (
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold-antique">
            By Selection Only
          </span>
        ) : (
          <>
            <a
              href={NOMINATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold font-mono text-[11px] font-medium tracking-[0.25em] uppercase text-gold bg-transparent transition-all duration-500 group-hover:bg-gold group-hover:text-background"
            >
              Nominate
            </a>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold-antique">
              Open Submissions
            </span>
          </>
        )}
      </div>
    </div>
  );
};

const CriteriaSection = ({
  label,
  num,
  body,
  isFirst,
  isLast,
}: {
  label: string;
  num: string;
  body: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
}) => (
  <div
    className={`grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-t ${
      isFirst ? "border-gold" : "border-border"
    } ${isLast ? "border-b border-border" : ""}`}
  >
    <div>
      <div className="font-mono text-xs font-medium tracking-[0.25em] uppercase text-gold">
        {label}
      </div>
      <span className="block font-serif italic text-sm text-gold-antique mt-1">
        {num}
      </span>
    </div>
    <div className="font-serif text-[17px] leading-relaxed text-foreground/80">
      {body}
    </div>
  </div>
);

export default Awards;
