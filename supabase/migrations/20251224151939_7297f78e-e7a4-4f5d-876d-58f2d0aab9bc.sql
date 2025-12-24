-- Create A/B testing experiments table
CREATE TABLE public.ab_experiments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  variant_a_name TEXT NOT NULL DEFAULT 'Control',
  variant_b_name TEXT NOT NULL DEFAULT 'Variant',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create A/B testing impressions table
CREATE TABLE public.ab_impressions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  experiment_id UUID REFERENCES public.ab_experiments(id) ON DELETE CASCADE NOT NULL,
  variant TEXT NOT NULL CHECK (variant IN ('A', 'B')),
  session_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create A/B testing conversions table
CREATE TABLE public.ab_conversions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  experiment_id UUID REFERENCES public.ab_experiments(id) ON DELETE CASCADE NOT NULL,
  variant TEXT NOT NULL CHECK (variant IN ('A', 'B')),
  session_id TEXT NOT NULL,
  conversion_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.ab_experiments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ab_impressions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ab_conversions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for ab_experiments (admins can manage, anyone can read active)
CREATE POLICY "Anyone can read active experiments"
ON public.ab_experiments FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage experiments"
ON public.ab_experiments FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for ab_impressions (anyone can insert, admins can read)
CREATE POLICY "Anyone can insert impressions"
ON public.ab_impressions FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can view impressions"
ON public.ab_impressions FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for ab_conversions (anyone can insert, admins can read)
CREATE POLICY "Anyone can insert conversions"
ON public.ab_conversions FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can view conversions"
ON public.ab_conversions FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Seed default experiments for conversion points
INSERT INTO public.ab_experiments (name, variant_a_name, variant_b_name) VALUES
('cta_button', 'Schedule a Consultation', 'Get Started Today'),
('cta_headline', 'Ready to Transform Your Business?', 'Take Your Business to the Next Level'),
('contact_button', 'Send Message', 'Get in Touch Now');

-- Create index for faster queries
CREATE INDEX idx_impressions_experiment ON public.ab_impressions(experiment_id);
CREATE INDEX idx_conversions_experiment ON public.ab_conversions(experiment_id);