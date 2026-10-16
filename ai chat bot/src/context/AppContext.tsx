import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Theme, Lesson, UserProfile } from '../types';
import { getLocalProfile, saveLocalProfile, syncProfileWithCloud } from '../services/supabase';
import { courseModules } from '../data/courseData';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentLesson: Lesson;
  selectLesson: (lesson: Lesson) => void;
  playgroundCode: string;
  setPlaygroundCode: (code: string) => void;
  profile: UserProfile;
  updateProfile: (updated: Partial<UserProfile>) => void;
  completeLesson: (lessonId: string) => void;
  recordQuizScore: (quizId: string, score: number) => void;
  toggleBookmark: (lessonId: string) => void;
  showLanguageModal: boolean;
  setShowLanguageModal: (show: boolean) => void;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
  showAdminModal: boolean;
  setShowAdminModal: (show: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  streakIncrementToday: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>(() => getLocalProfile());
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('cpp_learning_buddy_lang');
    return (saved as Language) || profile.language || 'hinglish';
  });
  const [theme, setTheme] = useState<Theme>(profile.theme || 'light');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currentLesson, setCurrentLesson] = useState<Lesson>(courseModules[0].lessons[0]);
  const [playgroundCode, setPlaygroundCode] = useState<string>(courseModules[0].lessons[0].initialCode);
  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(() => {
    return !localStorage.getItem('cpp_learning_buddy_lang_chosen');
  });
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [showAdminModal, setShowAdminModal] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Synchronize language state
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('cpp_learning_buddy_lang', lang);
    localStorage.setItem('cpp_learning_buddy_lang_chosen', 'true');
    updateProfile({ language: lang });
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    updateProfile({ theme: nextTheme });
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const selectLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson);
    setPlaygroundCode(lesson.initialCode);
  };

  const updateProfile = (updated: Partial<UserProfile>) => {
    setProfile((prev) => {
      const merged = { ...prev, ...updated };
      saveLocalProfile(merged);
      syncProfileWithCloud(merged).catch(() => {});
      return merged;
    });
  };

  const completeLesson = (lessonId: string) => {
    setProfile((prev) => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      const newCompleted = [...prev.completedLessons, lessonId];
      const newXp = prev.xp + 50;
      const updated = { ...prev, completedLessons: newCompleted, xp: newXp };
      saveLocalProfile(updated);
      syncProfileWithCloud(updated).catch(() => {});
      return updated;
    });
  };

  const recordQuizScore = (quizId: string, score: number) => {
    setProfile((prev) => {
      const existingScore = prev.completedQuizzes[quizId] || 0;
      const newScores = { ...prev.completedQuizzes, [quizId]: Math.max(existingScore, score) };
      const gainedXp = score > existingScore ? (score - existingScore) : 10;
      const updated = { ...prev, completedQuizzes: newScores, xp: prev.xp + gainedXp };
      saveLocalProfile(updated);
      syncProfileWithCloud(updated).catch(() => {});
      return updated;
    });
  };

  const toggleBookmark = (lessonId: string) => {
    setProfile((prev) => {
      const exists = prev.bookmarks.includes(lessonId);
      const bookmarks = exists
        ? prev.bookmarks.filter((b) => b !== lessonId)
        : [...prev.bookmarks, lessonId];
      const updated = { ...prev, bookmarks };
      saveLocalProfile(updated);
      syncProfileWithCloud(updated).catch(() => {});
      return updated;
    });
  };

  const streakIncrementToday = () => {
    const today = new Date().toISOString().split('T')[0];
    setProfile((prev) => {
      if (prev.lastActiveDate === today) return prev;
      const updated = {
        ...prev,
        lastActiveDate: today,
        streak: prev.streak + 1,
        xp: prev.xp + 25,
      };
      saveLocalProfile(updated);
      syncProfileWithCloud(updated).catch(() => {});
      return updated;
    });
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        toggleTheme,
        activeTab,
        setActiveTab,
        currentLesson,
        selectLesson,
        playgroundCode,
        setPlaygroundCode,
        profile,
        updateProfile,
        completeLesson,
        recordQuizScore,
        toggleBookmark,
        showLanguageModal,
        setShowLanguageModal,
        showAuthModal,
        setShowAuthModal,
        showAdminModal,
        setShowAdminModal,
        searchQuery,
        setSearchQuery,
        streakIncrementToday,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
