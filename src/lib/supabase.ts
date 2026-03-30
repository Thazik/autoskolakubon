import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://lxqphaarqqajujngonbf.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cXBoYWFycXFhanVqbmdvbmJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4OTQyNDgsImV4cCI6MjA5MDQ3MDI0OH0.lBlfAJ580r8DZdVYsqLZ-krHYXitoO08NEkUgwqXPRM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
