CREATE TABLE public.consultas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  telefono TEXT,
  email TEXT,
  jurisdiccion TEXT,
  motivo TEXT,
  preferencia TEXT,
  mensaje TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.consultas TO service_role;

ALTER TABLE public.consultas ENABLE ROW LEVEL SECURITY;