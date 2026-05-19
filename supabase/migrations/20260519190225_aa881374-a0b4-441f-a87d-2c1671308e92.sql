
-- Sponsor submissions table
CREATE TABLE public.sponsor_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  tier TEXT NOT NULL,
  message TEXT,
  logo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.sponsor_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can submit (public form)
CREATE POLICY "Anyone can submit sponsor inquiry"
ON public.sponsor_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No public SELECT; admins will read via service role / dashboard
-- (No SELECT/UPDATE/DELETE policies = denied by default)

-- Storage bucket for sponsor logos (public so logos can be displayed)
INSERT INTO storage.buckets (id, name, public)
VALUES ('sponsor-logos', 'sponsor-logos', true)
ON CONFLICT (id) DO NOTHING;

-- Public read
CREATE POLICY "Sponsor logos are publicly readable"
ON storage.objects
FOR SELECT
USING (bucket_id = 'sponsor-logos');

-- Anyone can upload a logo to this bucket
CREATE POLICY "Anyone can upload sponsor logo"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'sponsor-logos');
