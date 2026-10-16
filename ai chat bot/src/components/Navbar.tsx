import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import { Language } from '../types';
import {
  Code,
  Sparkles,
  Sun,
  Moon,
  Flame,
  Globe,
  Search,
  Menu,
  X,
  User,
  Shield,
  Layers,
  Terminal,
  HelpCircle,
  FolderGit2,
  BookOpen,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    language,
    setLanguage,
    theme,
    toggleTheme,
    activeTab,
    setActiveTab,
    profile,
    searchQuery,
    setSearchQuery,
    setShowAdminModal,
    setShowAuthModal,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const t = translations[language];

  const navItems = [
    { id: 'home', label: t.nav.home, icon: BookOpen },
    { id: 'roadmap', label: t.nav.roadmap, icon: Layers },
    { id: 'tutor', label: t.nav.tutor, icon: Sparkles, badge: 'AI' },
    { id: 'playground', label: t.nav.playground, icon: Terminal, badge: 'Run' },
    { id: 'quiz', label: t.nav.quiz, icon: HelpCircle },
    { id: 'visualizer', label: t.nav.visualizer, icon: Code },
    { id: 'projects', label: t.nav.projects, icon: FolderGit2 },
    { id: 'profile', label: t.nav.profile, icon: User },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  const languagesList: Array<{ id: Language; label: string; flag: string }> = [
    { id: 'hinglish', label: 'Hinglish (Hindi+Eng)', flag: '🇮🇳' },
    { id: 'marathi', label: 'मराठी (Marathi)', flag: '🚩' },
    { id: 'en', label: 'English', flag: '🌐' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 cursor-pointer text-left flex-shrink-0 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-base font-mono">C++</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
                <span>Learning Buddy</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">
                  AI
                </span>
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                Zero to Advanced Mastery
              </div>
            </div>
          </button>

          {/* Search bar (desktop) */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs relative mx-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g. pointers, OOP, loops)..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 rounded-xl border border-transparent focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer relative ${
                    isActive
                      ? 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-600 dark:text-cyan-400' : ''}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[9px] px-1 py-0.2 rounded font-bold ${
                        item.badge === 'AI'
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                          : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Header Utilities: Streak, Language Switcher, Theme, Profile */}
          <div className="flex items-center gap-2">
            {/* Streak Counter */}
            <div
              title={`${profile.streak} Days Learning Streak`}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400 text-xs font-bold"
            >
              <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-pulse" />
              <span>{profile.streak}</span>
            </div>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span className="uppercase text-[11px] font-bold">
                  {language === 'hinglish' ? 'Hinglish' : language === 'marathi' ? 'मराठी' : 'EN'}
                </span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50 animate-fade-in">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Switch Language
                  </div>
                  {languagesList.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => {
                        setLanguage(l.id);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                        language === l.id
                          ? 'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-300 font-bold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Quick Auth Button */}
            {profile.isGuest ? (
              <button
                onClick={() => setShowAuthModal(true)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-xs font-bold shadow-sm shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <User className="w-3.5 h-3.5" />
                <span>Create Account / Sign In</span>
              </button>
            ) : (
              <button
                onClick={() => handleNavClick('profile')}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="max-w-[110px] truncate">{profile.name}</span>
              </button>
            )}

            {/* Admin tool trigger */}
            <button
              onClick={() => setShowAdminModal(true)}
              title="Course Catalog Inspector"
              className="hidden md:flex p-2 rounded-xl text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Shield className="w-4 h-4" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-3 border-t border-slate-200 dark:border-slate-800 animate-fade-in space-y-1">
            {/* Mobile Search */}
            <div className="relative mb-2 px-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold cursor-pointer ${
                      isActive
                        ? 'bg-cyan-500 text-white'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
