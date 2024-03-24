import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zxzxktwzdtxjqfgpvnbm.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_PASSWORD;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
