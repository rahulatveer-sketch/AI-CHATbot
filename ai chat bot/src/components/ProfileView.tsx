import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import { courseModules } from '../data/courseData';
import { isSupabaseConfigured } from '../services/supabase';
import {
  registerUser,
  loginUser,
  resetUserPassword,
  logoutToGuest,
  getRegisteredAccounts,
  StoredAccount,
} from '../services/auth';
import { ExperienceLevel } from '../types';
import {
  User,
  Flame,
  Award,
  BookOpen,
  HelpCircle,
  Download,
  Upload,
  Cloud,
  CheckCircle2,
  AlertCircle,
  LogOut,
  Sparkles,
  Lock,
  Mail,
  Eye,
  EyeOff,
  KeyRound,
  ShieldCheck,
  Check,
  Edit2,
  UserCheck,
  ArrowRight,
  Database,
} from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { language, profile, updateProfile, setActiveTab, selectLesson } = useApp();
  const t = translations[language];

  // Auth form states
  const [authMode, setAuthMode] = useState<'signup' | 'signin' | 'forgot'>('signup');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [experienceLevelInput, setExperienceLevelInput] = useState<ExperienceLevel>(
    profile.experienceLevel || 'beginner'
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Status & feedback
  const [authMessage, setAuthMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  // Inline name editing for authenticated users
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState(profile.name);

  const registeredAccounts = getRegisteredAccounts();

  const totalLessons = courseModules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedPercent = Math.round((profile.completedLessons.length / totalLessons) * 100);

  // Calculate average quiz score
  const quizScores = Object.values(profile.completedQuizzes);
  const avgQuizScore =
    quizScores.length > 0
      ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
      : 0;

  // Next recommended lesson
  let recommendedLesson = courseModules[0].lessons[0];
  for (const mod of courseModules) {
    const uncompleted = mod.lessons.find((l) => !profile.completedLessons.includes(l.id));
    if (uncompleted) {
      recommendedLesson = uncompleted;
      break;
    }
  }

  // Handle Account Registration
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthMessage(null);

    if (passwordInput !== confirmPasswordInput) {
      setAuthMessage({ type: 'error', text: 'Passwords do not match. Please verify.' });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const res = registerUser({
        name: nameInput,
        email: emailInput,
        password: passwordInput,
        experienceLevel: experienceLevelInput,
        currentProfile: profile,
      });

      setIsLoading(false);
      if (res.success && res.profile) {
        updateProfile(res.profile);
        setAuthMessage({ type: 'success', text: res.message });
        setNameInput('');
        setEmailInput('');
        setPasswordInput('');
        setConfirmPasswordInput('');
      } else {
        setAuthMessage({ type: 'error', text: res.message });
      }
    }, 350);
  };

  // Handle Sign In
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthMessage(null);
    setIsLoading(true);

    setTimeout(() => {
      const res = loginUser({
        email: emailInput,
        password: passwordInput,
        currentProfile: profile,
      });

      setIsLoading(false);
      if (res.success && res.profile) {
        updateProfile(res.profile);
        setAuthMessage({ type: 'success', text: res.message });
        setEmailInput('');
        setPasswordInput('');
      } else {
        setAuthMessage({ type: 'error', text: res.message });
      }
    }, 350);
  };

  // Handle Password Reset
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthMessage(null);
    setIsLoading(true);

    setTimeout(() => {
      const res = resetUserPassword(emailInput, passwordInput);
      setIsLoading(false);
      if (res.success) {
        setAuthMessage({ type: 'success', text: res.message });
        setAuthMode('signin');
      } else {
        setAuthMessage({ type: 'error', text: res.message });
      }
    }, 350);
  };

  // Quick 1-Click Demo Login
  const handleQuickDemoLogin = () => {
    setIsLoading(true);
    setAuthMessage(null);
    setTimeout(() => {
      const res = loginUser({
        email: 'rahul@example.com',
        password: 'cppmaster123',
        currentProfile: profile,
      });
      setIsLoading(false);
      if (res.success && res.profile) {
        updateProfile(res.profile);
        setAuthMessage({ type: 'success', text: res.message });
      }
    }, 300);
  };

  // Switch to an existing stored account
  const handleSwitchAccount = (acc: StoredAccount) => {
    setIsLoading(true);
    setTimeout(() => {
      const res = loginUser({
        email: acc.email,
        password: '', // will be checked or loaded
        currentProfile: profile,
      });
      setIsLoading(false);
      if (res.profile) {
        updateProfile(res.profile);
        setAuthMessage({ type: 'success', text: `Switched account to ${acc.email}!` });
      }
    }, 200);
  };

  // Sign out back to guest
  const handleSignOut = () => {
    const guest = logoutToGuest();
    updateProfile(guest);
    setAuthMessage({
      type: 'success',
      text: 'You have signed out. Continued in local Guest Mode.',
    });
  };

  // Save updated profile name
  const handleSaveName = () => {
    if (editedName.trim()) {
      updateProfile({ name: editedName.trim() });
      setIsEditingName(false);
    }
  };

  // Export progress as JSON file
  const handleExportData = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(profile, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute(
      'download',
      `cpp_learning_buddy_progress_${profile.name.replace(/\s+/g, '_')}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import progress JSON
  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        if (imported.completedLessons) {
          updateProfile(imported);
          setAuthMessage({
            type: 'success',
            text: 'Learning progress imported and restored successfully!',
          });
        }
      } catch {
        setAuthMessage({ type: 'error', text: 'Invalid progress JSON file format.' });
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Profile Header Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 font-extrabold text-2xl flex-shrink-0">
            {profile.name[0]?.toUpperCase() || 'C'}
          </div>

          <div>
            <div className="flex items-center gap-2">
              {isEditingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="px-2.5 py-1 text-sm bg-slate-100 dark:bg-slate-800 rounded-lg border border-cyan-500 outline-none text-slate-900 dark:text-white"
                  />
                  <button
                    onClick={handleSaveName}
                    className="p-1 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 cursor-pointer text-xs font-bold px-2 py-1"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditingName(false)}
                    className="text-xs text-slate-400 hover:text-slate-600"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {profile.name}
                  </h1>
                  {!profile.isGuest && (
                    <button
                      onClick={() => {
                        setEditedName(profile.name);
                        setIsEditingName(true);
                      }}
                      title="Edit Name"
                      className="text-slate-400 hover:text-cyan-500 cursor-pointer"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}

              {profile.isGuest ? (
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300">
                  Guest Mode
                </span>
              ) : (
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                  <Cloud className="w-3 h-3" />
                  <span>Cloud Synced</span>
                </span>
              )}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {profile.email} • Level:{' '}
              <span className="font-semibold text-cyan-600 capitalize">
                {profile.experienceLevel}
              </span>{' '}
              • Learning in{' '}
              <span className="font-semibold text-cyan-600 capitalize">{profile.language}</span>
            </p>
          </div>
        </div>

        {/* Stats Badges */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 text-center min-w-[75px]">
            <div className="flex items-center justify-center gap-1 text-orange-600 dark:text-orange-400 font-black text-lg">
              <Flame className="w-4 h-4 fill-orange-500" />
              <span>{profile.streak}</span>
            </div>
            <div className="text-[10px] font-bold text-slate-500 uppercase">{t.profile.streak}</div>
          </div>

          <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 text-center min-w-[75px]">
            <div className="text-cyan-600 dark:text-cyan-400 font-black text-lg">
              {profile.xp}
            </div>
            <div className="text-[10px] font-bold text-slate-500 uppercase">{t.profile.xp}</div>
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center min-w-[75px]">
            <div className="text-emerald-600 dark:text-emerald-400 font-black text-lg">
              {completedPercent}%
            </div>
            <div className="text-[10px] font-bold text-slate-500 uppercase">Progress</div>
          </div>
        </div>
      </div>

      {/* Guest Warning Banner if in Guest mode */}
      {profile.isGuest && (
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-xs font-bold text-amber-900 dark:text-amber-200">
              {t.profile.guestMode} - Temporary Local Storage
            </div>
            <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
              Your lessons, quizzes, and streaks are currently stored in this browser only. Create an
              account below to back up your progress to the cloud so you never lose it across devices!
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PROPER AUTHENTICATION & ACCOUNT MANAGEMENT CENTER                          */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              <h2 className="font-extrabold text-lg text-slate-900 dark:text-white">
                {profile.isGuest ? 'Create Account or Sign In' : 'Account Management & Cloud Sync'}
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {profile.isGuest
                ? 'Sign up in seconds to enable multi-device sync, AI tutor memory, and verified badges.'
                : 'Manage your active session, switch accounts, or update your profile.'}
            </p>
          </div>

          {!profile.isGuest && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleSignOut}
                className="px-3.5 py-1.5 rounded-xl border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>

        {/* Global Feedback Banner */}
        {authMessage && (
          <div
            className={`p-3.5 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${
              authMessage.type === 'success'
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800'
                : 'bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800'
            }`}
          >
            {authMessage.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-500" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-500" />
            )}
            <span>{authMessage.text}</span>
          </div>
        )}

        {/* When User is a Guest -> Present Two-Tab Responsive Sign Up / Sign In Experience */}
        {profile.isGuest ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: The Interactive Form */}
            <div className="lg:col-span-7 space-y-5">
              {/* Modern Tab Selector */}
              {authMode !== 'forgot' && (
                <div className="flex p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl gap-1">
                  <button
                    onClick={() => {
                      setAuthMode('signup');
                      setAuthMessage(null);
                    }}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      authMode === 'signup'
                        ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Create New Account</span>
                  </button>

                  <button
                    onClick={() => {
                      setAuthMode('signin');
                      setAuthMessage(null);
                    }}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      authMode === 'signin'
                        ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <KeyRound className="w-3.5 h-3.5" />
                    <span>Sign In</span>
                  </button>
                </div>
              )}

              {/* Mode 1: CREATE ACCOUNT FORM */}
              {authMode === 'signup' && (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 mb-1">
                        <User className="w-3.5 h-3.5 text-cyan-500" />
                        <span>Full Name / Username</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        placeholder="e.g. Rahul Veer"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 mb-1">
                        <Mail className="w-3.5 h-3.5 text-cyan-500" />
                        <span>Email Address</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Password & Confirm Password */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between mb-1">
                        <span className="flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5 text-cyan-500" />
                          <span>Password</span>
                        </span>
                        <span className="text-[10px] text-slate-400">Min 6 chars</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={passwordInput}
                          onChange={(e) => setPasswordInput(e.target.value)}
                          placeholder="Create password"
                          className="w-full px-3.5 py-2.5 pr-9 text-xs bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                        >
                          {showPassword ? (
                            <EyeOff className="w-3.5 h-3.5" />
                          ) : (
                            <Eye className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between mb-1">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                          <span>Confirm Password</span>
                        </span>
                        {confirmPasswordInput && passwordInput === confirmPasswordInput && (
                          <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-0.5">
                            <Check className="w-3 h-3" /> Match
                          </span>
                        )}
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          required
                          value={confirmPasswordInput}
                          onChange={(e) => setConfirmPasswordInput(e.target.value)}
                          placeholder="Repeat password"
                          className="w-full px-3.5 py-2.5 pr-9 text-xs bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-3.5 h-3.5" />
                          ) : (
                            <Eye className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Starting Experience Level */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Starting C++ Experience Level
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['beginner', 'intermediate', 'advanced'] as ExperienceLevel[]).map(
                        (lvl) => (
                          <button
                            key={lvl}
                            type="button"
                            onClick={() => setExperienceLevelInput(lvl)}
                            className={`py-2 px-2.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer text-center ${
                              experienceLevelInput === lvl
                                ? 'bg-cyan-500 text-white shadow-sm'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                            }`}
                          >
                            {lvl}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded text-cyan-600 focus:ring-cyan-500"
                      />
                      <span>Keep me signed in on this device</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span>Creating Account...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Create Account & Sync Progress</span>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2 text-xs text-slate-500 dark:text-slate-400">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setAuthMode('signin');
                        setAuthMessage(null);
                      }}
                      className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                    >
                      Sign In here →
                    </button>
                  </div>
                </form>
              )}

              {/* Mode 2: SIGN IN FORM */}
              {authMode === 'signin' && (
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 mb-1">
                      <Mail className="w-3.5 h-3.5 text-cyan-500" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5 text-cyan-500" />
                        <span>Password</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setAuthMode('forgot');
                          setAuthMessage(null);
                        }}
                        className="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-3.5 py-2.5 pr-9 text-xs bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                      >
                        {showPassword ? (
                          <EyeOff className="w-3.5 h-3.5" />
                        ) : (
                          <Eye className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <label className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-300">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded text-cyan-600 focus:ring-cyan-500"
                      />
                      <span>Keep me signed in</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span>Signing In...</span>
                    ) : (
                      <>
                        <KeyRound className="w-4 h-4" />
                        <span>Sign In & Sync Progress</span>
                      </>
                    )}
                  </button>

                  {/* 1-Click Fast Demo Login for instant testing */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleQuickDemoLogin}
                      className="w-full py-2.5 px-3 rounded-xl border border-dashed border-cyan-300 dark:border-cyan-700/60 bg-cyan-50/50 dark:bg-cyan-950/30 hover:bg-cyan-100/60 dark:hover:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>⚡ Quick 1-Click Demo Login (rahul@example.com)</span>
                    </button>
                  </div>

                  <div className="text-center pt-2 text-xs text-slate-500 dark:text-slate-400">
                    Don't have an account yet?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setAuthMode('signup');
                        setAuthMessage(null);
                      }}
                      className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                    >
                      Create Free Account →
                    </button>
                  </div>
                </form>
              )}

              {/* Mode 3: FORGOT PASSWORD FORM */}
              {authMode === 'forgot' && (
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 text-cyan-800 dark:text-cyan-200 text-xs">
                    Enter your registered email and choose a new password to reset access immediately.
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 mb-1">
                      <Mail className="w-3.5 h-3.5 text-cyan-500" />
                      <span>Registered Email</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 mb-1">
                      <Lock className="w-3.5 h-3.5 text-cyan-500" />
                      <span>New Password</span>
                    </label>
                    <input
                      type="password"
                      required
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      placeholder="Enter new password (min 6 characters)"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="flex gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setAuthMode('signin')}
                      className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      Back to Sign In
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      {isLoading ? 'Updating...' : 'Set New Password'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right 5 Columns: Benefits of Having an Account */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-extrabold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Why Create an Account?</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Unlock full cloud persistence and seamless learning across your phone, tablet, and
                desktop.
              </p>

              <div className="space-y-3.5 pt-1 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Permanent Cloud Backup</div>
                    <div className="text-slate-400 text-[11px] leading-tight mt-0.5">
                      Never lose your streaks, completed lessons, and quiz badges even if browser cache clears.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Tailored AI Tutor Memory</div>
                    <div className="text-slate-400 text-[11px] leading-tight mt-0.5">
                      The AI Mascot adapts to your pace, experience level, and preferred language (Hinglish/Marathi/English).
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Personal Code Repository</div>
                    <div className="text-slate-400 text-[11px] leading-tight mt-0.5">
                      Bookmark algorithms, save custom playground snippets, and review execution histories anytime.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Verified C++ Mastery Certificate</div>
                    <div className="text-slate-400 text-[11px] leading-tight mt-0.5">
                      Complete all 10 modules and quizzes to unlock an exportable portfolio credential.
                    </div>
                  </div>
                </div>
              </div>

              {/* Stored accounts on this machine */}
              {registeredAccounts.length > 0 && (
                <div className="pt-3 border-t border-slate-800">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Saved Accounts On This Device:
                  </div>
                  <div className="space-y-1.5">
                    {registeredAccounts.slice(0, 3).map((acc) => (
                      <button
                        key={acc.id}
                        type="button"
                        onClick={() => handleSwitchAccount(acc)}
                        className="w-full flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 text-left transition-colors cursor-pointer text-xs"
                      >
                        <div className="truncate">
                          <div className="font-semibold text-white truncate">{acc.name}</div>
                          <div className="text-[10px] text-slate-400 truncate">{acc.email}</div>
                        </div>
                        <span className="text-[11px] text-cyan-400 font-bold flex items-center gap-1">
                          Log In →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* When User IS Authenticated -> Show Complete Account Management Suite */
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-200/80 dark:border-emerald-900/60 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-extrabold text-xl shadow-lg shadow-emerald-500/20">
                  <UserCheck className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-base text-slate-900 dark:text-white">
                      {profile.name}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Account</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    {profile.email} • ID: <span className="font-mono text-[11px]">{profile.id}</span>
                  </p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-semibold flex items-center gap-1">
                    <Cloud className="w-3.5 h-3.5" />
                    <span>Real-time Cloud Sync is Active</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setEditedName(profile.name);
                    setIsEditingName(true);
                  }}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Edit2 className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Edit Name</span>
                </button>

                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-xs font-bold text-rose-600 dark:text-rose-300 hover:bg-rose-100 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            {/* Switch Account or Register Another Section */}
            {registeredAccounts.length > 1 && (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-200 mb-2">
                  Switch to Another Account on This Device:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {registeredAccounts
                    .filter((a) => a.email.toLowerCase() !== profile.email.toLowerCase())
                    .map((acc) => (
                      <button
                        key={acc.id}
                        onClick={() => handleSwitchAccount(acc)}
                        className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-400 text-left transition-all cursor-pointer flex items-center justify-between"
                      >
                        <div className="truncate">
                          <div className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate">
                            {acc.name}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">{acc.email}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Overall Progress Bars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>{t.profile.lessonsCompleted}</span>
            <span className="font-bold text-cyan-600">{completedPercent}%</span>
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-white">
            {profile.completedLessons.length} / {totalLessons}
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-cyan-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${completedPercent}%` }}
            />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>{t.profile.quizAccuracy}</span>
            <span className="font-bold text-emerald-600">{avgQuizScore}%</span>
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-white">
            {Object.keys(profile.completedQuizzes).length} Solved
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${avgQuizScore}%` }}
            />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Bookmarked Lessons</span>
            <span className="font-bold text-purple-600">{profile.bookmarks.length}</span>
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-white">
            {profile.bookmarks.length} Saved
          </div>
          <div className="text-xs text-slate-400">Quick reference from your roadmap</div>
        </div>
      </div>

      {/* Recommended Next Lesson Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 border border-cyan-200 dark:border-cyan-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Recommended Next Step
          </span>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
            {recommendedLesson.title}
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-lg">
            {recommendedLesson.summary}
          </p>
        </div>

        <button
          onClick={() => {
            selectLesson(recommendedLesson);
            setActiveTab('roadmap');
          }}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex-shrink-0"
        >
          Continue Lesson →
        </button>
      </div>

      {/* Export / Import Backup Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">
            Data Portability & Offline Backup
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Download your progress JSON file or restore from a previous backup anytime.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportData}
            className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-cyan-500" />
            <span>{t.profile.exportData}</span>
          </button>

          <label className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer">
            <Upload className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.profile.importData}</span>
            <input type="file" accept=".json" onChange={handleImportData} className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
};
