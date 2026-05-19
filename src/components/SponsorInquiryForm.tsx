import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Upload, Loader2 } from "lucide-react";

const schema = z.object({
  company_name: z.string().trim().min(1, "Required").max(150),
  contact_name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  website: z.string().trim().url("Invalid URL").max(255).optional().or(z.literal("")),
  tier: z.string().min(1, "Select a tier"),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const MAX_LOGO_BYTES = 5 * 1024 * 1024; // 5MB
const ALLOWED = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];

const SponsorInquiryForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [logo, setLogo] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      company_name: String(fd.get("company") || ""),
      contact_name: String(fd.get("contact") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      website: String(fd.get("website") || ""),
      tier: String(fd.get("tier") || ""),
      message: String(fd.get("message") || ""),
    };

    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
      toast({ title: "Please check the form", description: first ?? "Invalid input", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      let logo_url: string | null = null;

      if (logo) {
        if (!ALLOWED.includes(logo.type)) {
          throw new Error("Logo must be PNG, JPG, WEBP, or SVG.");
        }
        if (logo.size > MAX_LOGO_BYTES) {
          throw new Error("Logo must be under 5MB.");
        }
        const ext = logo.name.split(".").pop()?.toLowerCase() || "png";
        const path = `${crypto.randomUUID()}.${ext}`;
        const { error: upErr } = await supabase.storage
          .from("sponsor-logos")
          .upload(path, logo, { contentType: logo.type, upsert: false });
        if (upErr) throw upErr;
        const { data } = supabase.storage.from("sponsor-logos").getPublicUrl(path);
        logo_url = data.publicUrl;
      }

      const { error } = await supabase.from("sponsor_submissions").insert({
        ...parsed.data,
        phone: parsed.data.phone || null,
        website: parsed.data.website || null,
        message: parsed.data.message || null,
        logo_url,
      });
      if (error) throw error;

      toast({ title: "Inquiry submitted", description: "Our sponsorship team will be in touch within 24 hours." });
      form.reset();
      setLogo(null);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      toast({ title: "Submission failed", description: msg, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Company Name *</Label>
          <Input id="company" name="company" placeholder="Your company" required maxLength={150} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact">Contact Name *</Label>
          <Input id="contact" name="contact" placeholder="Your name" required maxLength={100} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" placeholder="company@email.com" required maxLength={255} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" maxLength={40} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Company Website</Label>
        <Input id="website" name="website" type="url" placeholder="https://yourcompany.com" maxLength={255} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tier">Interested Sponsorship Tier *</Label>
        <select
          id="tier"
          name="tier"
          className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          required
          defaultValue=""
        >
          <option value="" disabled>Select a tier</option>
          <option value="gold">Gold Sponsor</option>
          <option value="silver">Silver Sponsor</option>
          <option value="bronze">Bronze Sponsor</option>
          <option value="custom">Custom Package</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="logo">Company Logo</Label>
        <label
          htmlFor="logo"
          className="flex items-center gap-3 px-4 py-3 border border-dashed border-border rounded-md cursor-pointer hover:border-gold/60 transition-colors"
        >
          <Upload size={18} className="text-gold" />
          <span className="text-sm text-muted-foreground truncate">
            {logo ? logo.name : "Upload PNG, JPG, WEBP, or SVG (max 5MB)"}
          </span>
        </label>
        <input
          id="logo"
          type="file"
          accept="image/png,image/jpeg,image/webp,image/svg+xml"
          className="hidden"
          onChange={(e) => setLogo(e.target.files?.[0] ?? null)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message / Questions</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your sponsorship goals and any questions you have..."
          rows={6}
          maxLength={2000}
        />
      </div>

      <Button variant="hero" type="submit" className="w-full" size="lg" disabled={submitting}>
        {submitting ? (<><Loader2 className="mr-2 animate-spin" size={18} /> Submitting…</>) : "Submit Inquiry"}
      </Button>
    </form>
  );
};

export default SponsorInquiryForm;
