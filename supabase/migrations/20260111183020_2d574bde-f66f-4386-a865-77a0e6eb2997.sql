-- Create the blog-images bucket (public for displaying images)
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true);

-- Allow authenticated admins to upload images
CREATE POLICY "Admins can upload blog images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'blog-images' 
  AND public.has_role(auth.uid(), 'admin')
);

-- Allow authenticated admins to update their uploads
CREATE POLICY "Admins can update blog images"
ON storage.objects FOR UPDATE TO authenticated
USING (
  bucket_id = 'blog-images' 
  AND public.has_role(auth.uid(), 'admin')
);

-- Allow authenticated admins to delete images
CREATE POLICY "Admins can delete blog images"
ON storage.objects FOR DELETE TO authenticated
USING (
  bucket_id = 'blog-images' 
  AND public.has_role(auth.uid(), 'admin')
);

-- Allow public read access (so blog images display on the site)
CREATE POLICY "Public can view blog images"
ON storage.objects FOR SELECT TO public
USING (bucket_id = 'blog-images');