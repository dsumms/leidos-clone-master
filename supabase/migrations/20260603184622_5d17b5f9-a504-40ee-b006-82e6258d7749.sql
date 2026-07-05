-- Ensure no SELECT/UPDATE/DELETE is exposed to anon or authenticated roles via the Data API.
REVOKE SELECT, UPDATE, DELETE ON public.contact_submissions FROM anon;
REVOKE SELECT, UPDATE, DELETE ON public.contact_submissions FROM authenticated;
REVOKE SELECT, UPDATE, DELETE ON public.contact_submissions FROM PUBLIC;

-- Service role retains full access for backend/edge-function code.
GRANT ALL ON public.contact_submissions TO service_role;

-- Keep public INSERT capability for the contact form.
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
