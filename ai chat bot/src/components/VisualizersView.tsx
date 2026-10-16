import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import { VisualizerType } from '../types';
import {
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  Sparkles,
  Layers,
  ArrowRight,
  Cpu,
  Box,
  Binary,
  GitBranch,
} from 'lucide-react';

export const VisualizersView: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];

  const [activeVis, setActiveVis] = useState<VisualizerType>('pointers');
  const [isPlaying, setIsPlaying] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  // Auto-play timer
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setStepIndex((prev) => (prev + 1) % 4);
      }, 1800);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNext = () => {
    setStepIndex((prev) => (prev + 1) % 4);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setStepIndex(0);
  };

  const visualizersList: Array<{ id: VisualizerType; title: string; icon: any }> = [
    { id: 'pointers', title: 'Pointers & Addresses', icon: Cpu },
    { id: 'variables', title: 'Variables & Data Types', icon: Box },
    { id: 'flowchart', title: 'If-Else Branching', icon: GitBranch },
    { id: 'loops', title: 'Loop Execution', icon: RotateCcw },
    { id: 'callstack', title: 'Recursion Call Stack', icon: Layers },
    { id: 'stackqueue', title: 'Stack (LIFO) & Queue', icon: Layers },
    { id: 'sorting', title: 'Sorting (Bubble/Selection)', icon: Binary },
    { id: 'binarysearch', title: 'Binary Search (O(log N))', icon: Binary },
    { id: 'oop', title: 'OOP Class Blueprint & Objects', icon: Box },
    { id: 'inheritance', title: 'Inheritance & VTable', icon: GitBranch },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-extrabold text-xl text-slate-900 dark:text-white">
              {t.visualizer.title}
            </h1>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">
              Live State Animations
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {t.visualizer.subtitle}
          </p>
        </div>

        {/* Global Controls: Play, Pause, Next Step, Reset */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              isPlaying
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-emerald-500 text-white shadow-md'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white" />}
            <span>{isPlaying ? t.visualizer.pause : t.visualizer.play}</span>
          </button>

          <button
            onClick={handleNext}
            className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <SkipForward className="w-3.5 h-3.5" />
            <span>{t.visualizer.nextStep}</span>
          </button>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title={t.visualizer.reset}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {visualizersList.map((item) => {
          const isActive = activeVis === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveVis(item.id);
                setStepIndex(0);
                setIsPlaying(false);
              }}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-400'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Canvas Area */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        {/* Step tracker */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping" />
            <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              {t.visualizer.step} {stepIndex + 1} of 4
            </span>
          </div>

          <div className="text-xs font-mono text-slate-400">
            {activeVis.toUpperCase()} SIMULATOR
          </div>
        </div>

        {/* 1. POINTERS VISUALIZER */}
        {activeVis === 'pointers' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Variable Card */}
              <div
                className={`p-6 rounded-2xl border-2 transition-all ${
                  stepIndex >= 2 ? 'border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/40' : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="text-xs font-mono text-slate-400 uppercase">Variable: int count</div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white my-3">
                  {stepIndex === 3 ? '100' : '42'}
                </div>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono text-xs text-cyan-600 dark:text-cyan-400">
                  Address (&count): 0x7ffd5820a4bc
                </div>
              </div>

              {/* Pointer Card */}
              <div
                className={`p-6 rounded-2xl border-2 transition-all ${
                  stepIndex >= 1 ? 'border-purple-500 bg-purple-50/50 dark:bg-purple-950/40' : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="text-xs font-mono text-slate-400 uppercase">Pointer: int* ptr</div>
                <div className="text-sm font-mono font-bold text-purple-600 dark:text-purple-400 my-3">
                  {stepIndex >= 1 ? '0x7ffd5820a4bc' : 'nullptr (0x0)'}
                </div>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono text-xs text-slate-600 dark:text-slate-300">
                  Dereferencing (*ptr): {stepIndex >= 1 ? (stepIndex === 3 ? '100' : '42') : 'UNDEFINED'}
                </div>
              </div>
            </div>

            {/* Explanation of current step */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm leading-relaxed border border-slate-200 dark:border-slate-700">
              {stepIndex === 0 && 'Step 1: Declare `int count = 42;`. The operating system allocates 4 bytes on the stack at RAM address 0x7ffd5820a4bc.'}
              {stepIndex === 1 && 'Step 2: Declare `int* ptr = &count;`. The pointer variable `ptr` now stores the hexadecimal memory address of `count`.'}
              {stepIndex === 2 && 'Step 3: Dereferencing `*ptr`. C++ follows the memory arrow directly into the storage cell of `count`.'}
              {stepIndex === 3 && 'Step 4: Executing `*ptr = 100;`. Because `ptr` holds count\'s address, mutating `*ptr` directly changes `count` to 100!'}
            </div>
          </div>
        )}

        {/* 2. VARIABLES VISUALIZER */}
        {activeVis === 'variables' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 text-center">
                <div className="text-xs font-bold text-cyan-700 dark:text-cyan-300">int (4 Bytes)</div>
                <div className="text-2xl font-black text-slate-900 dark:text-white my-2">{stepIndex * 25 + 10}</div>
                <div className="text-[11px] font-mono text-slate-500">32-bit signed int</div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-center">
                <div className="text-xs font-bold text-blue-700 dark:text-blue-300">double (8 Bytes)</div>
                <div className="text-2xl font-black text-slate-900 dark:text-white my-2">{(3.14 + stepIndex * 0.5).toFixed(2)}</div>
                <div className="text-[11px] font-mono text-slate-500">IEEE 754 float</div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-center">
                <div className="text-xs font-bold text-purple-700 dark:text-purple-300">char (1 Byte)</div>
                <div className="text-2xl font-black text-slate-900 dark:text-white my-2">{['\'A\'', '\'B\'', '\'C\'', '\'D\''][stepIndex]}</div>
                <div className="text-[11px] font-mono text-slate-500">ASCII code {65 + stepIndex}</div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center">
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300">bool (1 Byte)</div>
                <div className="text-2xl font-black text-slate-900 dark:text-white my-2">{stepIndex % 2 === 0 ? 'true' : 'false'}</div>
                <div className="text-[11px] font-mono text-slate-500">Boolean logic</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              Notice how each primitive C++ data type takes an exact number of bytes in memory. Choosing \`int\` over \`double\` when decimals aren&apos;t required saves 50% RAM.
            </div>
          </div>
        )}

        {/* 3. RECURSION CALL STACK */}
        {activeVis === 'callstack' && (
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800 text-slate-100 font-mono text-xs space-y-2">
              <div className="text-slate-400 text-[11px] mb-2 uppercase tracking-wider">
                Call Stack for factorial(3):
              </div>
              {stepIndex >= 2 && (
                <div className="w-64 p-3 rounded-xl bg-purple-950/80 border border-purple-500 text-purple-300 flex items-center justify-between animate-fade-in">
                  <span>factorial(1)</span>
                  <span className="text-emerald-400 font-bold">Base Case: return 1</span>
                </div>
              )}
              {stepIndex >= 1 && (
                <div className="w-64 p-3 rounded-xl bg-blue-950/80 border border-blue-500 text-blue-300 flex items-center justify-between animate-fade-in">
                  <span>factorial(2)</span>
                  <span>return 2 * fact(1)</span>
                </div>
              )}
              <div className="w-64 p-3 rounded-xl bg-slate-800 border border-cyan-500 text-cyan-300 flex items-center justify-between">
                <span>factorial(3)</span>
                <span>return 3 * fact(2)</span>
              </div>
              <div className="w-64 p-2 rounded-xl bg-slate-900 text-slate-400 text-center text-[10px]">
                main() [Root Frame]
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {stepIndex === 0 && 'Step 1: main() calls factorial(3). A new stack frame is pushed onto the call stack.'}
              {stepIndex === 1 && 'Step 2: factorial(3) needs factorial(2) to multiply. It pushes factorial(2) frame.'}
              {stepIndex === 2 && 'Step 3: Base case reached: factorial(1) hits if (n <= 1) and returns 1 immediately.'}
              {stepIndex === 3 && 'Step 4: Unwinding! Each frame resolves and pops off the stack: 1 -> 2*1=2 -> 3*2=6!'}
            </div>
          </div>
        )}

        {/* 4. SORTING VISUALIZER */}
        {activeVis === 'sorting' && (
          <div className="space-y-6">
            <div className="flex items-end justify-center gap-3 h-48 p-4 bg-slate-950 rounded-2xl border border-slate-800">
              {[
                { val: 15, h: 'h-16' },
                { val: stepIndex >= 1 ? 40 : 80, h: stepIndex >= 1 ? 'h-32' : 'h-44' },
                { val: stepIndex >= 1 ? 80 : 40, h: stepIndex >= 1 ? 'h-44' : 'h-32' },
                { val: 95, h: 'h-48' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <div
                    className={`w-12 rounded-t-xl bg-gradient-to-t ${
                      idx === 1 || idx === 2
                        ? 'from-cyan-600 to-teal-400 animate-pulse'
                        : 'from-blue-700 to-cyan-500'
                    } ${item.h} flex items-center justify-center text-white font-mono text-xs font-bold shadow-md transition-all duration-300`}
                  >
                    {item.val}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">[{idx}]</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              Bubble Sort compares adjacent pairs \`arr[j]\` and \`arr[j+1]\`. If the left element is larger than the right, a swap occurs via \`std::swap()\`.
            </div>
          </div>
        )}

        {/* 5. OOP & CLASS VISUALIZER */}
        {activeVis === 'oop' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Blueprint */}
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-2">
                <div className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase">
                  Class Blueprint (Code)
                </div>
                <div className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
                  <div>class Car &#123;</div>
                  <div className="text-red-500 pl-2">private: speed;</div>
                  <div className="text-emerald-500 pl-2">public: drive();</div>
                  <div>&#125;;</div>
                </div>
              </div>

              {/* Object 1 */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase">
                  Object instance: car1
                </div>
                <div className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-emerald-200/50 dark:border-emerald-800/50">
                  <div>RAM: 0x7ffd10</div>
                  <div>speed = 120 km/h</div>
                  <div>status = Driving</div>
                </div>
              </div>

              {/* Object 2 */}
              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-2">
                <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase">
                  Object instance: car2
                </div>
                <div className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-purple-200/50 dark:border-purple-800/50">
                  <div>RAM: 0x7ffd28</div>
                  <div>speed = 0 km/h</div>
                  <div>status = Parked</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              A Class is just a template in your compiled executable. Objects (instances) are allocated in real RAM with their own independent member variables!
            </div>
          </div>
        )}

        {/* 6. GENERAL FALLBACK FOR OTHER VISUALIZERS */}
        {!['pointers', 'variables', 'callstack', 'sorting', 'oop'].includes(activeVis) && (
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-slate-950 text-slate-200 text-center font-mono text-xs space-y-3">
              <div className="text-cyan-400 font-bold text-sm">
                Active Simulation: {activeVis.toUpperCase()}
              </div>
              <div className="max-w-md mx-auto text-slate-400">
                Visualizing state changes, pointer links, and memory transitions at Step {stepIndex + 1}.
              </div>
              <div className="flex items-center justify-center gap-2 pt-2">
                <span className="px-3 py-1 rounded bg-slate-800 text-emerald-400">Status: Stable</span>
                <span className="px-3 py-1 rounded bg-slate-800 text-cyan-400">Cycles: {stepIndex * 4}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              Use the Play, Next Step, and Reset buttons above to step through algorithm state changes in real time.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
