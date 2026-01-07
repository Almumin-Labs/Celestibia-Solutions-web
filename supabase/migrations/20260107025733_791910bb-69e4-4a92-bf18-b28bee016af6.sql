-- Upgrade almuminlabs@gmail.com to super_admin
UPDATE public.user_roles 
SET role = 'super_admin' 
WHERE user_id = '451d650e-b4d0-4817-b413-da92fe5f0aff';

-- Update has_role function so super_admin also has admin privileges
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND (role = _role OR (role = 'super_admin' AND _role = 'admin'))
  )
$$;

-- Allow super admins to insert new admin roles
CREATE POLICY "Super admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'super_admin'));

-- Allow super admins to delete any admin roles
CREATE POLICY "Super admins can delete roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'super_admin'));