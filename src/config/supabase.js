import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zxzxktwzdtxjqfgpvnbm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4enhrdHd6ZHR4anFmZ3B2bmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyODE2ODQsImV4cCI6MjAyNjg1NzY4NH0.ivO4Gdm6uXKdkBIDhvOYKPh5lncZE0JvpXoLsOK6OyU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
