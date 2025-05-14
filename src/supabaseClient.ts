import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://kvoegaekeuydcrnsdmzo.supabase.co"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2b2VnYWVrZXV5ZGNybnNkbXpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMDI5MzgsImV4cCI6MjA2Mjc3ODkzOH0.ZRYVzNVfCHKz1pzyxvSnxzrzpDB6B7AOUQXbLiMnRrc"

export const supabase = createClient(supabaseUrl, supabaseKey);