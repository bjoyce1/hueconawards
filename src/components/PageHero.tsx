import { ReactNode, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import hueLogo from "@/assets/hue-logo.png";

interface PageHeroProps {
  backgroundImage: string;
  videoSrc?: string;
  audioSrc?: string;
  eyebrow?: string;
  eyebrowSecondary?: string;
  title: ReactNode;
  accent?: ReactNode;
  description?: string;
  children?: ReactNode;
}

/**
 * Site-wide page hero mirroring the Home page hero layout:
 * dark surface, ken-burns background image, eyebrow badges,
 * black sans display headline with gold accent, supporting copy,
 * and optional CTA slot. Uses the Home title font (font-black, tracking-tight).
 */
const PageHero = ({
  backgroundImage,
  videoSrc,
  audioSrc,
  eyebrow,
  eyebrowSecondary,
  title,
  accent,
  description,
  children,
}: PageHeroProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioOn, setAudioOn] = useState(false);

  const toggleAudio = () => {
    const a = audioRef.current;
    if (!a) return;
    if (audioOn) {
      a.pause();
      setAudioOn(false);
    } else {
      a.play().then(() => setAudioOn(true)).catch(() => setAudioOn(false));
    }
  };

  return (
    <section className="relative pt-28 pb-24 bg-[#0f1419] overflow-hidden">
      {videoSrc ? (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
          src={videoSrc}
          poster={backgroundImage}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 z-0 animate-ken-burns"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {audioSrc && (
        <>
          <audio ref={audioRef} src={audioSrc} preload="auto" />
          <button
            type="button"
            onClick={toggleAudio}
            aria-label={audioOn ? "Mute voiceover" : "Play voiceover"}
            aria-pressed={audioOn}
            className="absolute top-32 right-6 z-20 h-11 w-11 rounded-full border border-gold/40 bg-black/50 backdrop-blur text-gold hover:bg-gold hover:text-charcoal transition-colors flex items-center justify-center"
          >
            {audioOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        </>
      )}

      <div className="container mx-auto px-4 z-10 relative text-center">
        <div className="animate-fade-in max-w-4xl mx-auto">
          <img
            src={hueLogo}
            alt="HUECONA"
            className="h-20 md:h-28 w-auto mx-auto mb-10"
          />

          {(eyebrow || eyebrowSecondary) && (
            <div className="inline-flex flex-wrap items-center justify-center gap-3 mb-8">
              {eyebrow && (
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold px-3 py-1.5 border border-white/10 bg-[#1a2129]">
                  {eyebrow}
                </span>
              )}
              {eyebrowSecondary && (
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-houston px-3 py-1.5 border border-white/10 bg-[#1a2129] hidden sm:inline-block">
                  {eyebrowSecondary}
                </span>
              )}
            </div>
          )}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 text-white">
            {title}
            {accent && (
              <>
                {" "}
                <span className="text-gold">{accent}</span>
              </>
            )}
          </h1>

          {description && (
            <p className="text-base md:text-lg font-light text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
              {description}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
