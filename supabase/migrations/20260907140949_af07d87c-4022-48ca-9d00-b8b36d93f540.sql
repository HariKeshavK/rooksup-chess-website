CREATE TYPE public.app_role AS ENUM ('admin','coach','user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read their own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  student_age integer NOT NULL,
  fide_rating integer,
  parent_phone text NOT NULL,
  parent_email text,
  attended_before boolean NOT NULL,
  parental_consent boolean NOT NULL DEFAULT false,
  privacy_policy_accepted boolean NOT NULL DEFAULT false,
  consent_timestamp timestamptz NOT NULL DEFAULT now(),
  privacy_policy_version text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.enquiries TO anon, authenticated;
GRANT SELECT ON public.enquiries TO authenticated;
GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry" ON public.enquiries
FOR INSERT TO anon, authenticated
WITH CHECK (
  privacy_policy_accepted = true
  AND student_age BETWEEN 3 AND 120
  AND char_length(student_name) BETWEEN 1 AND 100
  AND char_length(parent_phone) BETWEEN 5 AND 30
  AND (student_age >= 18 OR parental_consent = true)
);

CREATE POLICY "Admins and coaches can read enquiries" ON public.enquiries
FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'coach'));