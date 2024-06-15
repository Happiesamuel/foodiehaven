import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xceyclksptcinpzjtque.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjZXljbGtzcHRjaW5wemp0cXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MjQzNjYsImV4cCI6MjAzMzEwMDM2Nn0.fZ34w5XIX20xljNonn3wk5dtPVh_mOISM4Duq9z3zKQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
