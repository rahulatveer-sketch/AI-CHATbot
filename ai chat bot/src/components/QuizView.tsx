import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { quizQuestions } from '../data/quizData';
import { translations } from '../data/translations';
import { QuizQuestion, ExperienceLevel } from '../types';
import { RobotMascot } from './RobotMascot';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Trophy,
  Filter,
} from 'lucide-react';

export const QuizView: React.FC = () => {
  const { language, recordQuizScore, profile } = useApp();
  const t = translations[language];

  const [selectedDifficulty, setSelectedDifficulty] = useState<ExperienceLevel | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);
  const [attemptedCount, setAttemptedCount] = useState(0);

  const filteredQuestions = quizQuestions.filter((q) => {
    if (selectedDifficulty === 'all') return true;
    return q.difficulty === selectedDifficulty;
  });

  const currentQ: QuizQuestion | undefined = filteredQuestions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null || !currentQ) return;
    setIsAnswerSubmitted(true);
    setAttemptedCount((prev) => prev + 1);

    const isCorrect = selectedOption === currentQ.correctOptionIndex;
    if (isCorrect) {
      setScoreCount((prev) => prev + 1);
      recordQuizScore(currentQ.id, 100);
    } else {
      recordQuizScore(currentQ.id, 30);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setShowHint(false);
      setShowExplanation(false);
    }
  };

  const handleRetryQuestion = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setShowHint(false);
    setShowExplanation(false);
  };

  const handleResetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setShowHint(false);
    setShowExplanation(false);
    setScoreCount(0);
    setAttemptedCount(0);
  };

  if (!currentQ) {
    return (
      <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
        <p className="text-sm text-slate-500">No questions found for the selected filter.</p>
        <button
          onClick={() => setSelectedDifficulty('all')}
          className="mt-4 px-4 py-2 rounded-xl bg-cyan-500 text-white font-bold text-xs cursor-pointer"
        >
          Reset Filter
        </button>
      </div>
    );
  }

  const qText =
    language === 'marathi'
      ? currentQ.questionMarathi
      : language === 'hinglish'
      ? currentQ.questionHinglish
      : currentQ.question;

  const hintText =
    language === 'marathi'
      ? currentQ.hintMarathi
      : language === 'hinglish'
      ? currentQ.hintHinglish
      : currentQ.hint;

  const explanationText =
    language === 'marathi'
      ? currentQ.explanationMarathi
      : language === 'hinglish'
      ? currentQ.explanationHinglish
      : currentQ.explanation;

  const isCurrentCorrect = isAnswerSubmitted && selectedOption === currentQ.correctOptionIndex;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Quiz Header & Difficulty Selector */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="font-extrabold text-xl text-slate-900 dark:text-white flex items-center gap-2">
            <span>{t.quiz.title}</span>
            <Sparkles className="w-5 h-5 text-amber-500" />
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {t.quiz.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
          <Filter className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
          {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((diff) => (
            <button
              key={diff}
              onClick={() => {
                setSelectedDifficulty(diff);
                handleResetQuiz();
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                selectedDifficulty === diff
                  ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        {/* Progress & Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">
              {t.quiz.question} {currentIndex + 1} {t.quiz.of} {filteredQuestions.length}
            </span>
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
              {currentQ.type.replace('_', ' ')}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>
              {scoreCount}/{attemptedCount} Correct
            </span>
          </div>
        </div>

        {/* Question Statement */}
        <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
          {qText}
        </div>

        {/* Code Snippet if applicable */}
        {currentQ.codeSnippet && (
          <div className="rounded-2xl bg-slate-900 text-slate-100 p-4 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 shadow-inner">
            <pre>{currentQ.codeSnippet}</pre>
          </div>
        )}

        {/* Options Grid */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrectOption = idx === currentQ.correctOptionIndex;

            let optionStyle =
              'border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-700 bg-slate-50/50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200';

            if (isSelected && !isAnswerSubmitted) {
              optionStyle =
                'border-cyan-500 bg-cyan-50 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-200 font-bold shadow-sm';
            }

            if (isAnswerSubmitted) {
              if (isCorrectOption) {
                optionStyle =
                  'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 font-bold';
              } else if (isSelected && !isCorrectOption) {
                optionStyle =
                  'border-red-500 bg-red-50 dark:bg-red-950/60 text-red-800 dark:text-red-200 font-bold';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswerSubmitted}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 text-left text-xs sm:text-sm transition-all cursor-pointer ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                </div>

                {isAnswerSubmitted && isCorrectOption && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                )}
                {isAnswerSubmitted && isSelected && !isCorrectOption && (
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Banner upon Submission */}
        {isAnswerSubmitted && (
          <div
            className={`p-4 rounded-2xl border ${
              isCurrentCorrect
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                : 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300'
            } space-y-2`}
          >
            <div className="flex items-center gap-2 font-bold text-sm">
              {isCurrentCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>{t.quiz.excellent} (+20 XP)</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span>{t.quiz.keepPracticing}</span>
                </>
              )}
            </div>

            <div className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 pt-1">
              <strong>Explanation: </strong> {explanationText}
            </div>
          </div>
        )}

        {/* Hint Box (Optional reveal) */}
        {showHint && !isAnswerSubmitted && (
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Hint: </span>
              <span>{hintText}</span>
            </div>
          </div>
        )}

        {/* Actions Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            {!isAnswerSubmitted && !showHint && (
              <button
                onClick={() => setShowHint(true)}
                className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>{t.quiz.hint}</span>
              </button>
            )}

            {isAnswerSubmitted && !isCurrentCorrect && (
              <button
                onClick={handleRetryQuestion}
                className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.quiz.retry}</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                {t.quiz.submit}
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{currentIndex < filteredQuestions.length - 1 ? t.quiz.next : 'Finish Quiz'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
