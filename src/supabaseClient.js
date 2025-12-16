
import { createClient } from '@supabase/supabase-js';

// Ganti string kosong di bawah ini dengan URL dan Key dari dashboard Supabase kamu
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://clztbdlvenmxisgitqsc.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsenRiZGx2ZW5teGlzZ2l0cXNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4ODEyMzAsImV4cCI6MjA4MTQ1NzIzMH0.jTT-lGxdPHMHQEb-cMocStc2-8RE2AL_l1-DJJQjgZQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
