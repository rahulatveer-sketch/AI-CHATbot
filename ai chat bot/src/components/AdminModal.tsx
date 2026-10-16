import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { courseModules } from '../data/courseData';
import { quizQuestions } from '../data/quizData';
import { projectsData } from '../data/projectsData';
import { checkServerHealth } from '../services/api';
import { isSupabaseConfigured } from '../services/supabase';
import { DATABASE_SCHEMA_SQL } from '../data/databaseSchemaSql';
import {
  Shield,
  CheckCircle2,
  Server,
  Terminal,
  X,
  Database,
  Bot,
  Copy,
  Check,
  Code2,
  Key,
  ExternalLink,
} from 'lucide-react';

export const AdminModal: React.FC = () => {
  const { showAdminModal, setShowAdminModal } = useApp();
  const [healthStatus, setHealthStatus] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'sql'>('overview');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (showAdminModal) {
      checkServerHealth().then(setHealthStatus);
    }
  }, [showAdminModal]);

  if (!showAdminModal) return null;

  const totalLessons = courseModules.reduce((acc, m) => acc + m.lessons.length, 0);

  const handleCopySql = () => {
    navigator.clipboard.writeText(DATABASE_SCHEMA_SQL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl max-w-3xl w-full p-6 overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <h2 className="font-extrabold text-lg text-slate-900 dark:text-white">
              System Diagnostics & Database SQL Manager
            </h2>
          </div>
          <button
            onClick={() => setShowAdminModal(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-100 dark:border-slate-800 pt-3 gap-2 flex-shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Subsystems Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('sql')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'sql'
                ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Database SQL Code & Connection</span>
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="py-5 space-y-5 text-xs text-slate-700 dark:text-slate-300 overflow-y-auto pr-1">
            {/* Status grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
                <div className="font-mono text-xl font-bold text-cyan-600 dark:text-cyan-400">
                  {courseModules.length}
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Modules</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
                <div className="font-mono text-xl font-bold text-emerald-600 dark:text-emerald-400">
                  {totalLessons}
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">
                  Total Lessons
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
                <div className="font-mono text-xl font-bold text-purple-600 dark:text-purple-400">
                  {quizQuestions.length}
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Quizzes</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
                <div className="font-mono text-xl font-bold text-amber-600 dark:text-amber-400">
                  {projectsData.length}
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Projects</div>
              </div>
            </div>

            {/* Integration Statuses */}
            <div className="space-y-2">
              <div className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-[11px]">
                Active Subsystems:
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-500" />
                  <span className="font-semibold">AI Tutor Engine</span>
                </div>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    {healthStatus?.aiConfigured ? 'Live Model Attached' : 'Smart Fallback Active'}
                  </span>
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-500" />
                  <span className="font-semibold">Isolated C++ Execution Engine</span>
                </div>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Sandbox Ready</span>
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-500" />
                  <span className="font-semibold">Cloud Database & Storage</span>
                </div>
                <span className="text-slate-500 font-bold flex items-center gap-1">
                  <span>
                    {isSupabaseConfigured
                      ? 'Supabase Cloud Connected'
                      : 'Local Storage Persistence Active'}
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: SQL Code & Connection Guide */}
        {activeTab === 'sql' && (
          <div className="py-4 space-y-4 text-xs overflow-y-auto pr-1 flex-1">
            <div className="p-3.5 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 space-y-1">
              <div className="font-bold text-cyan-900 dark:text-cyan-200 flex items-center gap-1.5">
                <Key className="w-4 h-4 text-cyan-600" />
                <span>How to connect this database:</span>
              </div>
              <p className="text-cyan-800 dark:text-cyan-300 leading-relaxed text-[11px]">
                1. Open your PostgreSQL / Supabase project dashboard and navigate to the <strong>SQL Editor</strong>.<br />
                2. Paste and run the SQL code below. It creates the <code>profiles</code>, <code>accounts</code>, <code>saved_snippets</code>, and <code>quiz_records</code> tables with RLS policies.<br />
                3. Copy your project URL & Anon Key into <code>.env</code> as <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code>.
              </p>
            </div>

            {/* Connection snippet */}
            <div className="bg-slate-900 text-slate-100 rounded-2xl p-4 font-mono text-[11px] border border-slate-800 space-y-2">
              <div className="text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Environment Configuration (.env)</span>
              </div>
              <pre className="text-emerald-400">
{`# Supabase / PostgreSQL Credentials
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your-anon-key-here"

# Direct PostgreSQL Connection URL (if using backend ORM / node-postgres)
DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:5432/[DB_NAME]"`}
              </pre>
            </div>

            {/* SQL Script block */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-cyan-500" />
                  <span>PostgreSQL / Supabase Schema SQL Script</span>
                </span>
                <button
                  onClick={handleCopySql}
                  className="px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full SQL</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-950 text-cyan-300 rounded-2xl p-4 font-mono text-[11px] border border-slate-800 overflow-x-auto max-h-64 shadow-inner">
                <pre>{DATABASE_SCHEMA_SQL}</pre>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between flex-shrink-0">
          <div className="text-[11px] text-slate-400">
            {isSupabaseConfigured
              ? 'Status: Cloud Database Connected'
              : 'Status: Local Storage Fallback Mode'}
          </div>
          <button
            onClick={() => setShowAdminModal(false)}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
