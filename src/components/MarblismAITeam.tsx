import { supabase } from "@/integrations/supabase/client";
import eva from "@/assets/sponsors/marblism/eva.png";
import sonny from "@/assets/sponsors/marblism/sonny.png";
import penny from "@/assets/sponsors/marblism/penny.png";
import stan from "@/assets/sponsors/marblism/stan.png";

const MARBLISM_URL = "https://marblism.link/huecona-awards";

const trackClick = (cta: string) => {
  try {
    void supabase.from("affiliate_clicks").insert({
      partner: "marblism",
      cta,
      destination_url: MARBLISM_URL,
      referrer_path: typeof window !== "undefined" ? window.location.pathname : null,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
    });
  } catch {
    // ignore
  }
};

const team = [
  {
    name: "Eva",
    role: "AI Executive Assistant",
    img: eva,
    quote: "I handle your inbox, calendar and craft emails in your tone — so you look prompt, even if you hit snooze three times.",
  },
  {
    name: "Sonny",
    role: "Social Media Manager",
    img: sonny,
    quote: "I'll turn your social media into a lead-generating machine, without you having to dance on camera.",
  },
  {
    name: "Penny",
    role: "AI SEO Blog Writer",
    img: penny,
    quote: "I write SEO blog posts that make Google happy, your audience obsessed, and your competitors uncomfortable.",
  },
  {
    name: "Stan",
    role: "Sales Rep",
    img: stan,
    quote: "I find leads, send cold emails and follow-ups — turning 'not interested' into 'where do I sign?'",
  },
];

const MarblismAITeam = () => {
  return (
    <div className="mt-10">
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-houston mb-2">Meet The Team</p>
        <h3 className="text-2xl md:text-3xl font-bold">
          Your <span className="text-gold">AI Employee</span> Dream Team
        </h3>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
        {team.map((m) => (
          <a
            key={m.name}
            href={MARBLISM_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            onClick={() => trackClick(`ai_employee_${m.name.toLowerCase()}`)}
            onAuxClick={() => trackClick(`ai_employee_${m.name.toLowerCase()}`)}
            className="group relative rounded-xl border border-gold/30 bg-charcoal/70 backdrop-blur p-5 flex flex-col items-center text-center transition-all duration-500 hover:border-gold hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 to-houston/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <img
                src={m.img}
                alt={`${m.name} — ${m.role}`}
                loading="lazy"
                className="relative h-24 w-24 md:h-28 md:w-28 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="text-lg font-bold tracking-wide">{m.name}</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-gold mb-3">{m.role}</div>
            <p className="text-xs text-muted-foreground leading-relaxed">"{m.quote}"</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MarblismAITeam;
