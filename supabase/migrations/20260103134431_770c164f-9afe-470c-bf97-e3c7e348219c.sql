-- Add image_url column to blogs table for featured images
ALTER TABLE public.blogs 
ADD COLUMN IF NOT EXISTS image_url TEXT;