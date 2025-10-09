import {createClient} from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("supabase url :", import.meta.env.VITE_SUPABASE_URL)
console.log("supabase key :", import.meta.env.VITE_SUPABASE_ANON_KEY)

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("supabase url or key iss missing check your env file")
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
