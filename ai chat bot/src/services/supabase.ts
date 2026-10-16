import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { UserProfile } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl.startsWith('http') &&
  !supabaseUrl.includes('placeholder')
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null;

// Local storage key for persistent guest storage
const GUEST_STORAGE_KEY = 'cpp_learning_buddy_guest_profile_v1';

export function getLocalProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(GUEST_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading local profile:', err);
  }

  // Initial guest profile
  const defaultProfile: UserProfile = {
    id: 'guest-' + Math.random().toString(36).substring(2, 9),
    name: 'C++ Explorer',
    email: 'guest@cppbuddy.local',
    isGuest: true,
    avatarSeed: 'robot-hero',
    language: 'hinglish',
    theme: 'light',
    experienceLevel: 'beginner',
    xp: 120,
    streak: 3,
    lastActiveDate: new Date().toISOString().split('T')[0],
    completedLessons: ['l-1-1'],
    completedQuizzes: { 'q-1': 100 },
    bookmarks: [],
    savedSnippets: [
      {
        id: 'snip-hello',
        title: 'My First C++ Program',
        code: `#include <iostream>\n\nint main() {\n    std::cout << "Namaste C++ World!" << std::endl;\n    return 0;\n}`,
        date: new Date().toLocaleDateString(),
      },
    ],
  };

  saveLocalProfile(defaultProfile);
  return defaultProfile;
}

export function saveLocalProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error('Error saving local profile:', err);
  }
}

// Cloud sync helper (if Supabase configured)
export async function syncProfileWithCloud(profile: UserProfile): Promise<boolean> {
  if (!supabase || profile.isGuest) {
    saveLocalProfile(profile);
    return true;
  }

  try {
    const { error } = await supabase.from('profiles').upsert({
      id: profile.id,
      name: profile.name,
      email: profile.email,
      language: profile.language,
      theme: profile.theme,
      experience_level: profile.experienceLevel,
      xp: profile.xp,
      streak: profile.streak,
      last_active_date: profile.lastActiveDate,
      completed_lessons: profile.completedLessons,
      completed_quizzes: profile.completedQuizzes,
      bookmarks: profile.bookmarks,
      saved_snippets: profile.savedSnippets,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      console.warn('Supabase upsert warning, falling back to local storage:', error.message);
      saveLocalProfile(profile);
      return false;
    }

    saveLocalProfile(profile);
    return true;
  } catch (err) {
    console.warn('Cloud sync error, saving locally:', err);
    saveLocalProfile(profile);
    return false;
  }
}
