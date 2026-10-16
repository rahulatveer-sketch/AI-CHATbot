import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import { courseModules } from '../data/courseData';
import { RobotMascot } from './RobotMascot';
import {
  Sparkles,
  ArrowRight,
  Terminal,
  ChevronDown,
  CheckCircle2,
  Flame,
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { language, setActiveTab, selectLesson, profile } = useApp();
  const t = translations[language];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      qEn: 'Do I need any previous coding experience?',
      qMr: 'मला आधी कोणत्याही कोडिंगचा अनुभव असणे आवश्यक आहे का?',
      qHi: 'Kya mujhe pehle se coding aani zaroori hai?',
      aEn: 'Not at all! C++ Learning Buddy starts from absolute zero—explaining what a computer program is, how memory works, and builds up to advanced OOP and Data Structures.',
      aMr: 'मुळीच नाही! हा कोर्स अगदी शून्यापासून सुरू होतो—संगणक कसा काम करतो, मेमरी काय असते यापासून ते प्रगत OOP पर्यंत सर्व काही मराठीत शिकवले जाते.',
      aHi: 'Bilkul nahi! Ye course zero se start hota hai—computer memory kaise kaam karti hai se lekar high-level OOP aur Data Structures tak.',
    },
    {
      qEn: 'Can I switch between Hinglish, Marathi, and English?',
      qMr: 'मी शिकत असताना हिंग्लिश, मराठी आणि इंग्रजीत भाषा बदलू शकतो का?',
      qHi: 'Kya main beech me language switch kar sakta hoon?',
      aEn: 'Yes! You can toggle between languages anytime from the header. Your progress, code, and quiz scores will remain safely saved.',
      aMr: 'होय! तुम्ही हेडरमधील बटणावरून केव्हाही भाषा बदलू शकता. तुमची प्रगती आणि सोडवलेले कोड सुरक्षित राहतील.',
      aHi: 'Haan! Header me language switcher se aap kabhi bhi switch kar sakte hain, aapki progress bilkul safe rahegi.',
    },
    {
      qEn: 'How does the interactive C++ execution work?',
      qMr: 'थेट C++ कोड चालवणे कसे काम करते?',
      qHi: 'Live C++ code execution kaise kaam karta hai?',
      aEn: 'Your code is sent to an isolated, secure compiler sandbox that compiles it with modern g++ flags, executes it with resource limits, and streams stdout/stderr back in real time.',
      aMr: 'तुमचा कोड सुरक्षित क्लाउड कंपायलर सँडबॉक्सवर पाठवला जातो, जिथे तो कंपाईल होऊन सेकंदात आउटपुट स्क्रीनवर दाखवला जातो.',
      aHi: 'Aapka code isolated sandbox me g++ compiler se securely compile hota hai aur real-time terminal output browser par aata hai.',
    },
    {
      qEn: 'Are smart pointers and modern C++ covered?',
      qMr: 'यात आधुनिक C++ (C++11/17/20) आणि स्मार्ट पॉइंटर्स शिकवले आहेत का?',
      qHi: 'Kya isme modern C++ aur smart pointers shamil hain?',
      aEn: 'Yes! In Module 5, 7, and 8, you will learn std::unique_ptr, RAII, move semantics, lambdas, and templates as used in real-world systems.',
      aMr: 'होय! मॉड्यूल ५, ७ आणि ८ मध्ये आधुनिक C++, स्मार्ट पॉइंटर्स, RAII आणि मेमरी मॅनेजमेंट सविस्तरपणे शिकवले आहे.',
      aHi: 'Haan! Module 5, 7 aur 8 me smart pointers, RAII, move semantics aur modern C++20 features cover kiye gaye hain.',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 rounded-3xl bg-gradient-to-b from-cyan-50/70 via-blue-50/30 to-white dark:from-slate-900 dark:via-slate-900/60 dark:to-slate-950 border border-cyan-100/60 dark:border-cyan-900/40 px-6 sm:px-12">
        {/* Glow backdrop circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Interactive AI Teacher in Hinglish, Marathi & English</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              {t.hero.titlePrefix}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => setActiveTab('roadmap')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>{t.hero.startLearning}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActiveTab('playground')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-slate-300 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 font-bold text-sm sm:text-base shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4 text-cyan-500" />
                <span>{t.hero.tryCode}</span>
              </button>

              <button
                onClick={() => setActiveTab('tutor')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-300 font-bold text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Ask AI Tutor</span>
              </button>
            </div>

            {/* Micro badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>10 Structured Modules</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Isolated C++ Compiler</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Visual Memory Models</span>
              </div>
            </div>
          </div>

          {/* Right Mascot Column */}
          <div className="flex flex-col items-center justify-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-3xl border border-cyan-100 dark:border-cyan-900/60 shadow-xl relative">
            <RobotMascot
              mood="coding"
              size="lg"
              speechText={
                language === 'marathi'
                  ? 'चला C++ शिकूया! मी तुमच्यासोबत प्रत्येक पायरीवर आहे!'
                  : language === 'hinglish'
                  ? 'Ready to master C++? Chalo mast coding shuru karte hain!'
                  : 'Ready to write modern high-performance C++? Let\'s go!'
              }
            />

            {/* Quick Live Preview Card */}
            <div className="mt-4 w-full bg-slate-900 text-slate-100 rounded-2xl p-3.5 font-mono text-xs shadow-inner border border-slate-700">
              <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800 mb-2">
                <span>main.cpp</span>
                <span className="text-emerald-400 font-bold">● Compiled</span>
              </div>
              <pre className="text-cyan-300 leading-tight">
{`#include <iostream>
int main() {
  std::cout << "C++ Buddy Active! 🚀";
  return 0;
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>



      {/* Curriculum Preview Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Complete Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              10 Structured Learning Modules
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('roadmap')}
            className="text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1.5 cursor-pointer"
          >
            <span>Browse Full Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseModules.map((mod) => {
            const completedCount = mod.lessons.filter((l) =>
              profile.completedLessons.includes(l.id)
            ).length;
            const isCompleted = completedCount === mod.lessons.length && mod.lessons.length > 0;

            const modTitle =
              language === 'marathi'
                ? mod.titleMarathi
                : language === 'hinglish'
                ? mod.titleHinglish
                : mod.title;

            const modDesc =
              language === 'marathi'
                ? mod.descriptionMarathi
                : language === 'hinglish'
                ? mod.descriptionHinglish
                : mod.description;

            return (
              <div
                key={mod.id}
                onClick={() => {
                  selectLesson(mod.lessons[0]);
                  setActiveTab('roadmap');
                }}
                className="group p-5 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/90 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300">
                      Module {mod.number}
                    </span>
                    {isCompleted ? (
                      <span className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Done
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400">
                        {completedCount}/{mod.lessons.length} Lessons
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {modTitle}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2">
                    {modDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  <span>Start Module</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Student Progress & Gamification Preview */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold">
            <Flame className="w-4 h-4 text-orange-400 fill-orange-400 animate-pulse" />
            <span>Learning Dashboard</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold">
            Track Every Step of Your Journey
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Save lessons, earn XP, track consecutive day streaks, and review quiz accuracy with persistent local & Supabase storage.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-center px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
            <div className="text-2xl font-black text-amber-400">{profile.xp}</div>
            <div className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Total XP</div>
          </div>

          <div className="text-center px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
            <div className="text-2xl font-black text-orange-400 flex items-center justify-center gap-1">
              <span>{profile.streak}</span>
              <Flame className="w-5 h-5 fill-orange-400 text-orange-400" />
            </div>
            <div className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Day Streak</div>
          </div>

          <button
            onClick={() => setActiveTab('profile')}
            className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer shadow-md"
          >
            Open Dashboard
          </button>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-4 max-w-3xl mx-auto">
        <div className="text-center space-y-1 mb-6">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Everything you need to know about learning C++ with your AI Buddy
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            const question =
              language === 'marathi' ? faq.qMr : language === 'hinglish' ? faq.qHi : faq.qEn;
            const answer =
              language === 'marathi' ? faq.aMr : language === 'hinglish' ? faq.aHi : faq.aEn;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  <span>{question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-500' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3 leading-relaxed">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
