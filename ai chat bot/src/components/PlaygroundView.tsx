import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import { executeCppCode } from '../services/api';
import { ExecutionResult } from '../types';
import { courseModules } from '../data/courseData';
import {
  Play,
  RotateCcw,
  Copy,
  Check,
  Trash2,
  Terminal,
  Clock,
  Sparkles,
  AlertOctagon,
  FileCode,
  ShieldCheck,
} from 'lucide-react';

export const PlaygroundView: React.FC = () => {
  const { language, playgroundCode, setPlaygroundCode, currentLesson, setActiveTab } = useApp();
  const t = translations[language];

  const [stdinInput, setStdinInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<ExecutionResult | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [activeTabPanel, setActiveTabPanel] = useState<'output' | 'stdin'>('output');

  const handleRunCode = async () => {
    setIsRunning(true);
    setActiveTabPanel('output');
    try {
      const res = await executeCppCode(playgroundCode, stdinInput);
      setResult(res);
    } catch (err: any) {
      setResult({
        success: false,
        stage: 'runtime',
        output: '',
        error: err?.message || 'Execution error encountered.',
        exitCode: 1,
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setPlaygroundCode(currentLesson.initialCode);
    setResult(null);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(playgroundCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClearOutput = () => {
    setResult(null);
  };

  const handleSelectPreset = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lessonId = e.target.value;
    for (const mod of courseModules) {
      const found = mod.lessons.find((l) => l.id === lessonId);
      if (found) {
        setPlaygroundCode(found.initialCode);
        setResult(null);
        break;
      }
    }
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Header Toolbar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
              {t.playground.title}
            </h1>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>Isolated Sandbox (g++ C++20)</span>
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Compile, debug, and run standard C++ code in isolated containers with full standard I/O streams.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <FileCode className="w-4 h-4 text-slate-400" />
          <select
            onChange={handleSelectPreset}
            className="w-full md:w-64 px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-cyan-500 cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>
              {t.playground.loadPreset}...
            </option>
            {courseModules.map((mod) => (
              <optgroup key={mod.id} label={`Module ${mod.number}: ${mod.title}`}>
                {mod.lessons.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.title}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      {/* Editor & Terminal Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left Column: Code Editor */}
        <div className="lg:col-span-7 flex flex-col bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
          {/* Editor Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-2">main.cpp</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                title={t.playground.copyCode}
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{isCopied ? t.playground.copied : t.playground.copyCode}</span>
              </button>

              <button
                onClick={handleReset}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                title={t.playground.resetCode}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.playground.resetCode}</span>
              </button>
            </div>
          </div>

          {/* Code Textarea Area */}
          <div className="relative flex-1 min-h-[380px] p-3">
            <textarea
              value={playgroundCode}
              onChange={(e) => setPlaygroundCode(e.target.value)}
              spellCheck={false}
              className="w-full h-full min-h-[380px] bg-transparent text-slate-100 font-mono text-xs sm:text-sm leading-relaxed outline-none resize-y p-2 selection:bg-cyan-500/30"
              placeholder="// Write your C++ code here..."
            />
          </div>

          {/* Run Action Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-t border-slate-800">
            <button
              onClick={() => setActiveTab('tutor')}
              className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-semibold cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask AI Tutor to Analyze Code</span>
            </button>

            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 disabled:opacity-50 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{isRunning ? t.playground.running : t.playground.runCode}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Input / Output Console */}
        <div className="lg:col-span-5 flex flex-col bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl min-h-[460px]">
          {/* Console Tabs */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTabPanel('output')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTabPanel === 'output'
                    ? 'bg-slate-800 text-cyan-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>{t.playground.outputLabel}</span>
              </button>

              <button
                onClick={() => setActiveTabPanel('stdin')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  activeTabPanel === 'stdin'
                    ? 'bg-slate-800 text-cyan-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{t.playground.stdinLabel}</span>
              </button>
            </div>

            {result && (
              <button
                onClick={handleClearOutput}
                className="text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1 cursor-pointer"
                title={t.playground.clearOutput}
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            )}
          </div>

          {/* Console Content */}
          <div className="flex-1 p-4 font-mono text-xs overflow-y-auto">
            {activeTabPanel === 'stdin' ? (
              <div className="space-y-2 h-full flex flex-col">
                <label className="text-[11px] text-slate-400">
                  Provide standard input lines for std::cin commands:
                </label>
                <textarea
                  value={stdinInput}
                  onChange={(e) => setStdinInput(e.target.value)}
                  placeholder={t.playground.stdinPlaceholder}
                  className="w-full flex-1 min-h-[200px] p-3 bg-slate-950 text-slate-200 rounded-xl border border-slate-800 outline-none resize-none focus:border-cyan-500"
                />
              </div>
            ) : (
              <div className="space-y-3">
                {isRunning ? (
                  <div className="flex items-center gap-2.5 text-cyan-400 animate-pulse py-8 justify-center">
                    <Clock className="w-5 h-5 animate-spin" />
                    <span className="font-sans font-semibold text-sm">
                      Compiling C++ source in isolated sandbox...
                    </span>
                  </div>
                ) : result ? (
                  <div className="space-y-3">
                    {/* Status Pill */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px]">
                      <span
                        className={`font-bold px-2 py-0.5 rounded ${
                          result.success
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-red-950 text-red-400 border border-red-800'
                        }`}
                      >
                        {result.success ? t.playground.compilerSuccess : t.playground.compilerFailed}
                      </span>
                      {result.executionTimeMs !== undefined && (
                        <span className="text-slate-400">
                          ⏱ {result.executionTimeMs} ms
                        </span>
                      )}
                    </div>

                    {/* Standard Out */}
                    {result.output && (
                      <div className="text-slate-200 whitespace-pre-wrap leading-relaxed">
                        {result.output}
                      </div>
                    )}

                    {/* Error Out */}
                    {result.error && (
                      <div className="p-3 rounded-xl bg-red-950/40 border border-red-900/60 text-red-300 whitespace-pre-wrap leading-relaxed flex items-start gap-2">
                        <AlertOctagon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <div>{result.error}</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-slate-500 py-16 text-center space-y-1 font-sans">
                    <Terminal className="w-8 h-8 text-slate-700 mx-auto mb-2" />
                    <div className="text-xs font-semibold">Terminal ready</div>
                    <div className="text-[11px] text-slate-600">
                      Click &quot;Run Code&quot; to compile and view stdout
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
