import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { registerUser, loginUser, resetUserPassword, getRegisteredAccounts } from '../services/auth';
import { translations } from '../data/translations';
import { ExperienceLevel } from '../types';
import {
  X,
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Cloud,
  ArrowRight,
  KeyRound,
  ShieldCheck,
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { showAuthModal, setShowAuthModal, profile, updateProfile, language } = useApp();
  const t = translations[language];

  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>('beginner');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!showAuthModal) return null;

  const handleClose = () => {
    setShowAuthModal(false);
    setMessage(null);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match. Please re-enter.' });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const res = registerUser({
        name,
        email,
        password,
        experienceLevel,
        currentProfile: profile,
      });

      setIsLoading(false);
      if (res.success && res.profile) {
        updateProfile(res.profile);
        setMessage({ type: 'success', text: res.message });
        setTimeout(() => handleClose(), 1200);
      } else {
        setMessage({ type: 'error', text: res.message });
      }
    }, 400);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);

    setTimeout(() => {
      const res = loginUser({
        email,
        password,
        currentProfile: profile,
      });

      setIsLoading(false);
      if (res.success && res.profile) {
        updateProfile(res.profile);
        setMessage({ type: 'success', text: res.message });
        setTimeout(() => handleClose(), 1200);
      } else {
        setMessage({ type: 'error', text: res.message });
      }
    }, 400);
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);

    setTimeout(() => {
      const res = resetUserPassword(email, password);
      setIsLoading(false);
      if (res.success) {
        setMessage({ type: 'success', text: res.message });
        setMode('signin');
      } else {
        setMessage({ type: 'error', text: res.message });
      }
    }, 400);
  };

  const handleQuickDemoLogin = () => {
    setEmail('rahul@example.com');
    setPassword('cppmaster123');
    setIsLoading(true);

    setTimeout(() => {
      const res = loginUser({
        email: 'rahul@example.com',
        password: 'cppmaster123',
        currentProfile: profile,
      });
      setIsLoading(false);
      if (res.success && res.profile) {
        updateProfile(res.profile);
        setMessage({ type: 'success', text: res.message });
        setTimeout(() => handleClose(), 1000);
      }
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative">
        {/* Header Bar */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
                {mode === 'signup'
                  ? 'Create Free Account'
                  : mode === 'signin'
                  ? 'Sign In to C++ Buddy'
                  : 'Reset Password'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {mode === 'signup'
                  ? 'Save your streak, XP, and cloud sync across all devices'
                  : 'Access your saved C++ lessons, code, and quiz scores'}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        {mode !== 'forgot' && (
          <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 p-1.5 gap-1.5 m-4 rounded-2xl">
            <button
              onClick={() => {
                setMode('signup');
                setMessage(null);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === 'signup'
                  ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Create Account</span>
            </button>
            <button
              onClick={() => {
                setMode('signin');
                setMessage(null);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === 'signin'
                  ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 pt-2 space-y-4">
          {message && (
            <div
              className={`p-3.5 rounded-2xl text-xs font-semibold flex items-center gap-2 ${
                message.type === 'success'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800'
              }`}
            >
              {message.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-500" />
              ) : (
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-500" />
              )}
              <span>{message.text}</span>
            </div>
          )}

          {/* Sign Up Mode Form */}
          {mode === 'signup' && (
            <form onSubmit={handleRegister} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 mb-1">
                  <User className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Full Name or Username</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Veer"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul@example.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between mb-1">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-cyan-500" />
                    <span>Password</span>
                  </span>
                  <span className="text-[10px] text-slate-400">Min 6 characters</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a secure password"
                    className="w-full px-3.5 py-2.5 pr-10 text-xs bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between mb-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                    <span>Confirm Password</span>
                  </span>
                  {confirmPassword && password === confirmPassword && (
                    <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Passwords match
                    </span>
                  )}
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter your password"
                    className="w-full px-3.5 py-2.5 pr-10 text-xs bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Experience Level Selector */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Starting Experience Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['beginner', 'intermediate', 'advanced'] as ExperienceLevel[]).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setExperienceLevel(lvl)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer text-center ${
                        experienceLevel === lvl
                          ? 'bg-cyan-500 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
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
            </form>
          )}

          {/* Sign In Mode Form */}
          {mode === 'signin' && (
            <form onSubmit={handleLogin} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 mb-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul@example.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
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
                      setMode('forgot');
                      setMessage(null);
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-3.5 py-2.5 pr-10 text-xs bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
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

              {/* Instant Quick Demo Account Button */}
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
            </form>
          )}

          {/* Forgot Password Mode Form */}
          {mode === 'forgot' && (
            <form onSubmit={handleReset} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 mb-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Your Registered Email</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul@example.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 mb-1">
                  <Lock className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Set New Password</span>
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="New password (min 6 characters)"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Back to Sign In
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {isLoading ? 'Updating...' : 'Update Password'}
                </button>
              </div>
            </form>
          )}

          {/* Toggle Footer text */}
          <div className="text-center pt-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
            {mode === 'signup' ? (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signin');
                    setMessage(null);
                  }}
                  className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                >
                  Sign In here
                </button>
              </p>
            ) : mode === 'signin' ? (
              <p>
                Don't have an account yet?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setMessage(null);
                  }}
                  className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                >
                  Create Free Account
                </button>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
