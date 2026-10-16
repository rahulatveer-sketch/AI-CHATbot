import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { LanguageModal } from './components/LanguageModal';
import { AdminModal } from './components/AdminModal';
import { AuthModal } from './components/AuthModal';
import { HomeView } from './components/HomeView';
import { RoadmapView } from './components/RoadmapView';
import { AITutorView } from './components/AITutorView';
import { PlaygroundView } from './components/PlaygroundView';
import { QuizView } from './components/QuizView';
import { VisualizersView } from './components/VisualizersView';
import { ProjectsView } from './components/ProjectsView';
import { ProfileView } from './components/ProfileView';
import { RobotMascot } from './components/RobotMascot';
import { Globe, Heart, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

const MainAppContent: React.FC = () => {
  const { activeTab, setActiveTab, setLanguage, language, setShowLanguageModal } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Navigation Header */}
      <Navbar />

      {/* Primary Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'roadmap' && <RoadmapView />}
        {activeTab === 'tutor' && <AITutorView />}
        {activeTab === 'playground' && <PlaygroundView />}
        {activeTab === 'quiz' && <QuizView />}
        {activeTab === 'visualizer' && <VisualizersView />}
        {activeTab === 'projects' && <ProjectsView />}
        {activeTab === 'profile' && <ProfileView />}
      </main>

      {/* Floating Bottom Quick AI Tutor trigger if not on tutor tab */}
      {activeTab !== 'tutor' && (
        <button
          onClick={() => setActiveTab('tutor')}
          className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all cursor-pointer border border-cyan-400/40"
          title="Open AI Tutor"
        >
          <RobotMascot mood="happy" size="sm" className="w-6 h-6" />
          <span className="text-xs font-bold hidden sm:inline">Ask AI Tutor</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </button>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-mono font-bold text-sm">
                C++
              </div>
              <div>
                <div className="font-extrabold text-sm text-slate-900 dark:text-white">
                  C++ Learning Buddy
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Master C++ from Zero to Advanced with AI Tutor in Hinglish, Marathi & English
                </div>
              </div>
            </div>

            {/* Language Quick links */}
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="text-slate-400 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                <span>Language:</span>
              </span>
              <button
                onClick={() => setLanguage('hinglish')}
                className={`hover:text-cyan-500 transition-colors cursor-pointer ${
                  language === 'hinglish' ? 'text-cyan-600 dark:text-cyan-400 font-bold underline' : ''
                }`}
              >
                Hinglish
              </button>
              <span>•</span>
              <button
                onClick={() => setLanguage('marathi')}
                className={`hover:text-cyan-500 transition-colors cursor-pointer ${
                  language === 'marathi' ? 'text-cyan-600 dark:text-cyan-400 font-bold underline' : ''
                }`}
              >
                मराठी
              </button>
              <span>•</span>
              <button
                onClick={() => setLanguage('en')}
                className={`hover:text-cyan-500 transition-colors cursor-pointer ${
                  language === 'en' ? 'text-cyan-600 dark:text-cyan-400 font-bold underline' : ''
                }`}
              >
                English
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <span>Built for C++ learners worldwide</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Isolated Sandbox Execution</span>
              </span>
              <button
                onClick={() => setShowLanguageModal(true)}
                className="hover:underline text-cyan-600 dark:text-cyan-400 cursor-pointer"
              >
                Language Settings
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <LanguageModal />
      <AdminModal />
      <AuthModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
