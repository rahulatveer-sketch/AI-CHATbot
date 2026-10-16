# C++ Learning Buddy 🤖

A comprehensive, interactive AI-powered C++ educational platform teaching programming from zero to advanced mastery, complete with Object-Oriented Programming (OOP), Data Structures & Algorithms, real-time isolated compiler execution, interactive visual learning tools, and tri-lingual AI teaching support in **Hinglish**, **Marathi (मराठी)**, and **English**.

---

## 🌟 Key Features

1. **Tri-lingual Learning System**:
   - **Hinglish (Hindi + English)**: Relatable Indian colloquial analogies (e.g. *Variables computer memory me dabbe ki tarah hain*).
   - **Marathi (मराठी)**: Complete vernacular explanations, hints, and error breakdowns.
   - **English (Global)**: Industry-standard technical descriptions and memory paradigms.
   - Language can be switched anytime without losing user progress or code state.

2. **Complete 10-Module C++ Curriculum**:
   - **Module 1**: C++ Fundamentals (`#include <iostream>`, `main()`, `cout`/`cin`, variables, types, operators).
   - **Module 2**: Conditions & Loops (`if-else`, `switch`, `for`, `while`, `do-while`, pattern printing).
   - **Module 3**: Functions (`pass-by-value`, `pass-by-reference (&)`, recursion call stack).
   - **Module 4**: Arrays, Strings & Vectors (`std::string`, `std::vector`, memory layout).
   - **Module 5**: Pointers & Memory Management (addresses `&`, dereferencing `*`, `new`/`delete`, `std::unique_ptr`, `std::shared_ptr`).
   - **Module 6**: Structures & File I/O (`struct`, `enum class`, `ifstream`, `ofstream`).
   - **Module 7**: Complete OOP (classes, encapsulation, constructors/destructors, inheritance, polymorphism, `virtual` functions, vtable, abstract interfaces).
   - **Module 8**: Advanced C++ & STL (templates, exception handling `try-catch`, `std::map`, `std::set`, lambdas, C++17/C++20).
   - **Module 9**: Data Structures & Algorithms (Big O, Binary Search, Linked Lists, Stacks, Queues).
   - **Module 10**: 10 Real-world Projects (Calculator, Guessing Game, Student Records, OOP Banking Simulation, Capstone LRU In-Memory Store).

3. **Intelligent AI Tutor Chatbot**:
   - Powered by Gemini 3.8 Flash server-side SDK.
   - Quick Action buttons: *Explain Simply*, *Line by Line Breakdown*, *Another Example*, *Give Hint*, *Test Knowledge*, *Practice Problem*, *Summarize*.
   - Adapts to beginner, intermediate, and advanced experience levels.
   - Fallback offline reasoning tutor for instant responsiveness.

4. **Isolated C++ Execution Sandbox**:
   - Compiles and runs modern C++ (g++ C++20).
   - Full standard input (`std::cin`) and standard output (`std::cout`, `std::cerr`) support.
   - Real-time compilation and runtime error stack trace reporting with execution timing.

5. **Interactive Visual Learning Suite**:
   - Visual step-by-step animations for Pointers & RAM addresses, Variable memory frames, Recursion Call Stack push/pop, Sorting bars, and OOP Blueprint vs Instance states.

6. **Authentication & Persistence**:
   - Supabase client integration for cloud user accounts and remote database synchronization.
   - Seamless local persistent Guest Mode with JSON progress export and import.
   - Daily learning streak tracker and XP gamification.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ installed on your machine
- npm or yarn

### 2. Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Configure your environment variables:
```env
# Required for live Gemini AI Tutor (injected automatically in AI Studio)
GEMINI_API_KEY="your-gemini-api-key"

# Optional: Supabase configuration for cloud account sync
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your-anon-key"

PORT=3000
```

### 3. Install & Start Local Dev Server
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Supabase Database Schema (SQL Migration)

If connecting to Supabase for multi-device sync, run this SQL in your Supabase SQL Editor:

```sql
-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  language TEXT DEFAULT 'hinglish',
  theme TEXT DEFAULT 'light',
  experience_level TEXT DEFAULT 'beginner',
  xp INTEGER DEFAULT 100,
  streak INTEGER DEFAULT 1,
  last_active_date DATE DEFAULT CURRENT_DATE,
  completed_lessons TEXT[] DEFAULT '{}',
  completed_quizzes JSONB DEFAULT '{}'::jsonb,
  bookmarks TEXT[] DEFAULT '{}',
  saved_snippets JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Allow users to read and update only their own profile
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);
```

---

## 🌐 Deployment Instructions (Netlify / Cloud)

### Deploying Frontend to Netlify:
1. Connect your GitHub repository to Netlify.
2. Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. In Netlify Site Settings > **Environment variables**, set:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy the backend API (`server.ts`) as a Netlify Function, Cloud Run service, or Docker container with `GEMINI_API_KEY` set in the environment.
