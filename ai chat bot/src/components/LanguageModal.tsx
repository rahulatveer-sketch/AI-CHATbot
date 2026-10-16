import React from 'react';
import { useApp } from '../context/AppContext';
import { Language } from '../types';
import { RobotMascot } from './RobotMascot';
import { Sparkles, Check, Globe } from 'lucide-react';

export const LanguageModal: React.FC = () => {
  const { language, setLanguage, showLanguageModal, setShowLanguageModal } = useApp();

  if (!showLanguageModal) return null;

  const languagesConfig: Array<{
    id: Language;
    title: string;
    nativeName: string;
    flagBadge: string;
    description: string;
    tagline: string;
    sampleAnalogy: string;
  }> = [
    {
      id: 'hinglish',
      title: 'Hinglish',
      nativeName: 'Hindi + English',
      flagBadge: '🇮🇳 हिंदी + English',
      description: 'Conversational Indian mix that feels like a friendly senior engineer explaining coding in simple words.',
      tagline: 'Best for college students & Indian learners',
      sampleAnalogy: '"Variables computer memory me ek dabbe (box) ki tarah hote hain!"',
    },
    {
      id: 'marathi',
      title: 'Marathi',
      nativeName: 'मराठी',
      flagBadge: '🚩 अस्सल मराठी',
      description: 'C++ च्या सर्व संकल्पना अगदी साध्या मराठीत, रोजच्या उदाहरणांसह आणि ओळ-दर-ओळ स्पष्टीकरणासह शिका.',
      tagline: 'मराठी विद्यार्थ्यांसाठी सर्वोत्तम',
      sampleAnalogy: '"व्हेरिएबल म्हणजे मेमरीमधील एक नाव दिलेला सुरक्षित डबा!"',
    },
    {
      id: 'en',
      title: 'English',
      nativeName: 'English (Global)',
      flagBadge: '🌐 Global Standard',
      description: 'Clear, modern, industry-standard English with technical precision, best practices, and memory models.',
      tagline: 'Standard international curriculum',
      sampleAnalogy: '"A variable is a labeled memory cell holding structured binary data."',
    },
  ];

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setShowLanguageModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-cyan-100 dark:border-cyan-900/60 rounded-3xl shadow-2xl max-w-3xl w-full p-6 sm:p-8 overflow-hidden relative">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center text-center mb-6">
          <RobotMascot
            mood="happy"
            size="md"
            speechText="Namaste! Please choose your preferred learning language!"
          />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3 flex items-center gap-2">
            <span>Welcome to C++ Learning Buddy</span>
            <Sparkles className="w-6 h-6 text-amber-500 animate-spin-slow" />
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg mt-1">
            Choose how you want your AI tutor, lessons, and quizzes explained. All C++ code and keywords remain in standard English.
          </p>
        </div>

        {/* 3 Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {languagesConfig.map((item) => {
            const isSelected = language === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setLanguage(item.id)}
                className={`relative flex flex-col text-left p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-cyan-500 bg-cyan-50/60 dark:bg-cyan-950/40 shadow-lg shadow-cyan-500/15 scale-[1.02]'
                    : 'border-slate-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-700 bg-white/60 dark:bg-slate-800/60'
                }`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {item.flagBadge}
                  </span>
                  {isSelected ? (
                    <div className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-700" />
                  )}
                </div>

                <div className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </div>
                <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                  {item.nativeName}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3 flex-1">
                  {item.description}
                </p>

                {/* Sample analogy quote */}
                <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-[11px] text-slate-700 dark:text-slate-300 italic">
                  {item.sampleAnalogy}
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Globe className="w-4 h-4 text-cyan-500" />
            <span>You can switch languages anytime from the header bar.</span>
          </div>

          <button
            onClick={() => handleSelect(language)}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold text-sm shadow-md hover:shadow-cyan-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Start Learning C++ Now</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
