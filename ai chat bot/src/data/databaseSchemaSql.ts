export const DATABASE_SCHEMA_SQL = `-- ============================================================
-- C++ Learning Buddy - Database Schema for PostgreSQL / Supabase
-- Execute this script in your Supabase SQL Editor or PostgreSQL client
-- ============================================================

-- 1. Enable UUID Extension (standard in PostgreSQL / Supabase)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create the Profiles Table
-- Stores user account info, XP, streak, language preference, and learning records
CREATE TABLE IF NOT EXISTS public.profiles (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL DEFAULT 'C++ Explorer',
    email TEXT UNIQUE NOT NULL,
    language TEXT NOT NULL DEFAULT 'hinglish' CHECK (language IN ('hinglish', 'marathi', 'en')),
    theme TEXT NOT NULL DEFAULT 'light' CHECK (theme IN ('light', 'dark')),
    experience_level TEXT NOT NULL DEFAULT 'beginner' CHECK (experience_level IN ('beginner', 'intermediate', 'advanced')),
    xp INTEGER NOT NULL DEFAULT 120,
    streak INTEGER NOT NULL DEFAULT 1,
    last_active_date DATE NOT NULL DEFAULT CURRENT_DATE,
    completed_lessons JSONB NOT NULL DEFAULT '["l-1-1"]'::jsonb,
    completed_quizzes JSONB NOT NULL DEFAULT '{"q-1": 100}'::jsonb,
    bookmarks JSONB NOT NULL DEFAULT '[]'::jsonb,
    saved_snippets JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create Registered Accounts Table
-- Stores authenticated login credentials and security hashes
CREATE TABLE IF NOT EXISTS public.accounts (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    user_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    last_login_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Create Saved Code Snippets Table (Individual Normalized Rows)
-- Allows users to save and run custom C++ playground programs
CREATE TABLE IF NOT EXISTS public.saved_snippets (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    user_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    code TEXT NOT NULL,
    language TEXT DEFAULT 'cpp',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Create Quiz Records Table
-- Tracks quiz attempts, scores, and accuracy
CREATE TABLE IF NOT EXISTS public.quiz_records (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    user_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    quiz_id TEXT NOT NULL,
    module_id TEXT NOT NULL,
    score INTEGER NOT NULL CHECK (score >= 0 AND score <= 100),
    total_questions INTEGER NOT NULL DEFAULT 5,
    attempted_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Create Indexes for High Performance
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_accounts_email ON public.accounts(email);
CREATE INDEX IF NOT EXISTS idx_snippets_user_id ON public.saved_snippets(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_records_user ON public.quiz_records(user_id);

-- 7. Trigger to Auto-Update 'updated_at' Timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_profiles_updated_at ON public.profiles;
CREATE TRIGGER trigger_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- 8. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_snippets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_records ENABLE ROW LEVEL SECURITY;

-- 9. Permissive Policies for Web App Access (Anon key)
-- Allows the web app to query and upsert user profiles seamlessly
CREATE POLICY "Allow public read access to profiles"
    ON public.profiles FOR SELECT
    USING (true);

CREATE POLICY "Allow public upsert to profiles"
    ON public.profiles FOR ALL
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow public access to snippets"
    ON public.saved_snippets FOR ALL
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow public access to quiz records"
    ON public.quiz_records FOR ALL
    USING (true)
    WITH CHECK (true);

-- 10. Sample Seed Profile
INSERT INTO public.profiles (id, name, email, language, xp, streak, completed_lessons)
VALUES (
    'user_demo_101',
    'Rahul Veer',
    'rahul@example.com',
    'hinglish',
    350,
    5,
    '["l-1-1", "l-1-2", "l-1-3"]'::jsonb
)
ON CONFLICT (email) DO NOTHING;
`;
