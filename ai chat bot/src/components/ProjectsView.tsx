import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { projectsData } from '../data/projectsData';
import { ProjectItem } from '../types';
import {
  FolderGit2,
  Terminal,
  Lightbulb,
  CheckCircle2,
  Play,
  Copy,
  Check,
  ChevronRight,
  Code2,
} from 'lucide-react';

export const ProjectsView: React.FC = () => {
  const { language, setPlaygroundCode, setActiveTab } = useApp();
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(projectsData[0]);
  const [showSolution, setShowSolution] = useState(false);
  const [copied, setCopied] = useState(false);

  const title =
    language === 'marathi'
      ? selectedProject.titleMarathi
      : language === 'hinglish'
      ? selectedProject.titleHinglish
      : selectedProject.title;

  const desc =
    language === 'marathi'
      ? selectedProject.descriptionMarathi
      : language === 'hinglish'
      ? selectedProject.descriptionHinglish
      : selectedProject.description;

  const handleOpenPlayground = (code: string) => {
    setPlaygroundCode(code);
    setActiveTab('playground');
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-12">
      {/* Left Column: Projects Catalog */}
      <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-4 shadow-sm space-y-2 max-h-[85vh] overflow-y-auto">
        <div className="px-2 pb-2 border-b border-slate-100 dark:border-slate-800">
          <h2 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-cyan-500" />
            <span>10 Practical C++ Projects</span>
          </h2>
        </div>

        <div className="space-y-1.5">
          {projectsData.map((proj) => {
            const isSelected = selectedProject.id === proj.id;
            const pTitle =
              language === 'marathi'
                ? proj.titleMarathi
                : language === 'hinglish'
                ? proj.titleHinglish
                : proj.title;

            return (
              <button
                key={proj.id}
                onClick={() => {
                  setSelectedProject(proj);
                  setShowSolution(false);
                }}
                className={`w-full flex items-center justify-between p-3 rounded-2xl text-left text-xs transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-200 font-bold border border-cyan-200 dark:border-cyan-800'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      proj.difficulty === 'beginner'
                        ? 'bg-emerald-500'
                        : proj.difficulty === 'intermediate'
                        ? 'bg-cyan-500'
                        : 'bg-purple-500'
                    }`}
                  />
                  <span className="line-clamp-1">{pTitle}</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Project Viewer */}
      <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        {/* Title & Difficulty */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              {desc}
            </p>
          </div>

          <span
            className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
              selectedProject.difficulty === 'beginner'
                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                : selectedProject.difficulty === 'intermediate'
                ? 'bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300'
                : 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
            }`}
          >
            {selectedProject.difficulty}
          </span>
        </div>

        {/* Hints */}
        {selectedProject.hints && selectedProject.hints.length > 0 && (
          <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/60 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-xs text-amber-900 dark:text-amber-300">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Implementation Tips & Architecture:</span>
            </div>
            <ul className="text-xs text-amber-800 dark:text-amber-300 space-y-1 list-disc list-inside">
              {selectedProject.hints.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Code View with Solution Toggle */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
              <Code2 className="w-4 h-4 text-cyan-500" />
              <span>{showSolution ? 'Reference Solution (Production Ready)' : 'Starter Template'}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSolution(!showSolution)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  showSolution
                    ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {showSolution ? 'Hide Solution' : 'Reveal Solution'}
              </button>

              <button
                onClick={() =>
                  handleCopy(showSolution ? selectedProject.solutionCode : selectedProject.starterCode)
                }
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer"
                title="Copy Code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner">
            <pre>
              {showSolution ? selectedProject.solutionCode : selectedProject.starterCode}
            </pre>
          </div>
        </div>

        {/* Expected Output */}
        {selectedProject.expectedOutput && (
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 font-mono text-xs border border-slate-200 dark:border-slate-700">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Expected Output:
            </div>
            <div className="text-emerald-600 dark:text-emerald-400 whitespace-pre-wrap">
              {selectedProject.expectedOutput}
            </div>
          </div>
        )}

        {/* Open in Playground CTA */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={() =>
              handleOpenPlayground(
                showSolution ? selectedProject.solutionCode : selectedProject.starterCode
              )
            }
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Load & Run in C++ Playground</span>
          </button>
        </div>
      </div>
    </div>
  );
};
