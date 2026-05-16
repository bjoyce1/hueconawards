import hueLogo from "@/assets/hue-logo.png";

/**
 * Animated brand loader. Gold gradient breathes through the
 * monogram while a halo pulses.
 */
const HFlameLoader = ({ label = "Loading" }: { label?: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <img
          src={hueLogo}
          alt=""
          aria-hidden="true"
          className="w-20 h-auto animate-flame-pulse"
        />
        <div className="absolute inset-0 animate-flame-shimmer mix-blend-overlay" />
      </div>
      <div className="font-serif italic text-xs tracking-[0.3em] uppercase text-gold/70 flex items-center">
        {label}
        <span className="loader-dots ml-0.5 w-3 inline-block text-left" />
      </div>
    </div>
  </div>
);

export default HFlameLoader;
