
CREATE TABLE public.affiliate_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  partner TEXT NOT NULL,
  cta TEXT NOT NULL,
  destination_url TEXT NOT NULL,
  referrer_path TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.affiliate_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can record an affiliate click"
ON public.affiliate_clicks
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX idx_affiliate_clicks_partner_created
  ON public.affiliate_clicks (partner, created_at DESC);
