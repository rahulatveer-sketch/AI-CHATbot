import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { courseModules } from '../data/courseData';
import { Lesson } from '../types';
import {
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  Terminal,
  Sparkles,
  ChevronRight,
  ChevronDown,
  AlertTriangle,
  Lightbulb,
  Check,
  Play,
} from 'lucide-react';

export const RoadmapView: React.FC = () => {
  const {
    language,
    currentLesson,
    selectLesson,
    setActiveTab,
    setPlaygroundCode,
    completeLesson,
    toggleBookmark,
    profile,
    searchQuery,
  } = useApp();

  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'mod-1': true,
    'mod-2': true,
    'mod-7': true,
  });

  const toggleModule = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !prev[modId],
    }));
  };

  const isCompleted = profile.completedLessons.includes(currentLesson.id);
  const isBookmarked = profile.bookmarks.includes(currentLesson.id);

  const lessonTitle =
    language === 'marathi'
      ? currentLesson.titleMarathi
      : language === 'hinglish'
      ? currentLesson.titleHinglish
      : currentLesson.title;

  const lessonSummary =
    language === 'marathi'
      ? currentLesson.summaryMarathi
      : language === 'hinglish'
      ? currentLesson.summaryHinglish
      : currentLesson.summary;

  const lessonContent =
    language === 'marathi'
      ? currentLesson.contentMarathi
      : language === 'hinglish'
      ? currentLesson.contentHinglish
      : currentLesson.content;

  const keyPoints =
    language === 'marathi'
      ? currentLesson.keyPointsMarathi
      : language === 'hinglish'
      ? currentLesson.keyPointsHinglish
      : currentLesson.keyPoints;

  const handleOpenPlayground = () => {
    setPlaygroundCode(currentLesson.initialCode);
    setActiveTab('playground');
  };

  const handleAskTutor = () => {
    setActiveTab('tutor');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-12">
      {/* Left Sidebar: Course Roadmap List */}
      <div className="lg:col-span-4 space-y-3 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-4 shadow-sm max-h-[85vh] overflow-y-auto">
        <div className="px-2 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h2 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
            Course Curriculum (10 Modules)
          </h2>
          <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950 px-2 py-0.5 rounded-full">
            {profile.completedLessons.length} Completed
          </span>
        </div>

        <div className="space-y-2">
          {courseModules.map((mod) => {
            const isExpanded = expandedModules[mod.id] || false;
            const completedCount = mod.lessons.filter((l) =>
              profile.completedLessons.includes(l.id)
            ).length;
            const modCompleted = completedCount === mod.lessons.length && mod.lessons.length > 0;

            const modTitle =
              language === 'marathi'
                ? mod.titleMarathi
                : language === 'hinglish'
                ? mod.titleHinglish
                : mod.title;

            // Filter if user searched
            const matchingLessons = searchQuery
              ? mod.lessons.filter((l) =>
                  l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  l.titleHinglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  l.titleMarathi.toLowerCase().includes(searchQuery.toLowerCase())
                )
              : mod.lessons;

            if (searchQuery && matchingLessons.length === 0) {
              return null;
            }

            return (
              <div
                key={mod.id}
                className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 overflow-hidden bg-slate-50/50 dark:bg-slate-800/40"
              >
                <button
                  onClick={() => toggleModule(mod.id)}
                  className="w-full flex items-center justify-between p-3 text-left font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[10px] font-bold flex items-center justify-center">
                      {mod.number}
                    </span>
                    <span className="font-bold line-clamp-1">{modTitle}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {modCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <span className="text-[10px] text-slate-400 font-semibold">
                        {completedCount}/{mod.lessons.length}
                      </span>
                    )}
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-1 space-y-0.5 border-t border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-900">
                    {matchingLessons.map((lesson) => {
                      const isSelected = currentLesson.id === lesson.id;
                      const isLessonDone = profile.completedLessons.includes(lesson.id);

                      const lTitle =
                        language === 'marathi'
                          ? lesson.titleMarathi
                          : language === 'hinglish'
                          ? lesson.titleHinglish
                          : lesson.title;

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => selectLesson(lesson)}
                          className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 font-bold border border-cyan-200 dark:border-cyan-800'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {isLessonDone ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            ) : (
                              <div
                                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                  isSelected ? 'bg-cyan-500' : 'bg-slate-300 dark:bg-slate-700'
                                }`}
                              />
                            )}
                            <span className="line-clamp-1">{lTitle}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content Center: Lesson Reader */}
      <div className="lg:col-span-8 space-y-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          {/* Top Actions & Tags */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">
                Lesson {currentLesson.number}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Module {currentLesson.moduleId.replace('mod-', '')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleBookmark(currentLesson.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {isBookmarked ? (
                  <>
                    <BookmarkCheck className="w-4 h-4 text-cyan-500" />
                    <span>Saved</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span>Bookmark</span>
                  </>
                )}
              </button>

              <button
                onClick={() => completeLesson(currentLesson.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isCompleted
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm hover:shadow'
                }`}
              >
                {isCompleted ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Completed! (+50 XP)</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Mark as Done (+50 XP)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Lesson Title & Summary */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {lessonTitle}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 font-medium leading-relaxed">
              {lessonSummary}
            </p>
          </div>

          {/* Educational Content */}
          <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line bg-slate-50/70 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800">
            {lessonContent}
          </div>

          {/* Key Takeaways */}
          {keyPoints && keyPoints.length > 0 && (
            <div className="p-5 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/30 border border-cyan-200/60 dark:border-cyan-800/60 space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-sm text-cyan-900 dark:text-cyan-300">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Key Concepts to Remember:</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-500 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Mistakes Gotchas */}
          {currentLesson.commonMistakes && currentLesson.commonMistakes.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/60 space-y-2">
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-900 dark:text-amber-300">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Common Beginner Gotchas:</span>
              </div>
              <ul className="space-y-1 text-xs text-amber-800 dark:text-amber-300">
                {currentLesson.commonMistakes.map((m, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span>⚠️</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Code Example Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                <Terminal className="w-4 h-4 text-cyan-500" />
                <span>Runnable C++ Code Example</span>
              </div>
              <button
                onClick={handleOpenPlayground}
                className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Edit in Interactive Playground</span>
                <span>→</span>
              </button>
            </div>

            <div className="rounded-2xl bg-slate-900 text-slate-100 p-4 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 shadow-inner">
              <pre>{currentLesson.initialCode}</pre>
            </div>

            {currentLesson.expectedOutput && (
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Expected Output:
                </div>
                <div className="text-emerald-600 dark:text-emerald-400 whitespace-pre-line">
                  {currentLesson.expectedOutput}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Interactive Toolbar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handleAskTutor}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 font-bold text-xs sm:text-sm hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Ask AI Tutor to Explain Line by Line</span>
            </button>

            <button
              onClick={handleOpenPlayground}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Run Code in C++ Playground</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
