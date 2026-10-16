import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import { fetchTutorReply } from '../services/api';
import { ChatMessage, ExperienceLevel } from '../types';
import { RobotMascot } from './RobotMascot';
import {
  Send,
  Sparkles,
  RefreshCw,
  Lightbulb,
  ListOrdered,
  HelpCircle,
  FileQuestion,
  FileText,
  Copy,
  Check,
  Play,
  Terminal,
} from 'lucide-react';

export const AITutorView: React.FC = () => {
  const { language, currentLesson, playgroundCode, setPlaygroundCode, setActiveTab, profile, updateProfile } = useApp();
  const t = translations[language];

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedCodeSnippet, setCopiedCodeSnippet] = useState<string | null>(null);
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>(profile.experienceLevel || 'beginner');
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Suggested questions based on selected language
  const suggestedQuestions =
    language === 'marathi'
      ? [
          'पॉइंटर (Pointer) म्हणजे काय?',
          'Class आणि Object स्पष्ट करा',
          'Loops कसे काम करतात?',
          'std::vector म्हणजे काय?',
          'Pass by Reference (&) सांगा',
          'रिकर्शन (Recursion) म्हणजे काय?',
        ]
      : language === 'hinglish'
      ? [
          'Pointer kya hai?',
          'Class vs Object samjhao',
          'Loops kaise kaam karte hain?',
          'std::vector kya hota hai?',
          'Pass by Reference (&) samjhao',
          'Recursion kya hota hai?',
        ]
      : [
          'What is a Pointer in C++?',
          'Explain Class and Object',
          'How do Loops work?',
          'What is std::vector?',
          'Pass by Reference vs Value',
          'What is Recursion in C++?',
        ];

  // Initial welcome greeting adapted to language & lesson
  const initialGreeting =
    language === 'marathi'
      ? `नमस्कार! मी तुमचा **C++ Learning Buddy** आहे 🤖\n\nआम्ही सध्या **"${currentLesson.titleMarathi}"** या विषयावर चर्चा करू शकतो. मी तुम्हाला C++ मधील कोणत्याही संकल्पनेचे उत्तर सोप्या भाषेत, रोजच्या उदाहरणांसह आणि कोडसहित समजावून सांगेन.\n\nतुम्हाला काय अडचण आहे किंवा कोणता प्रश्न विचारायचा आहे? खालीलपैकी क्विक अ‍ॅक्शन निवडा किंवा थेट प्रश्न विचारा!`
      : language === 'hinglish'
      ? `Namaste! Main hoon aapka personal **C++ Learning Buddy** 🤖\n\nAap abhi **"${currentLesson.titleHinglish}"** explore kar rahe hain. Main aapke har ek sawal ka direct, accurate aur simple jawab dunga with desi analogies aur clean C++ code.\n\nNeeche diye gaye quick questions par click karein ya apna sawal type karein!`
      : `Hello! I am your **C++ Learning Buddy** 🤖\n\nI am ready with context for **"${currentLesson.title}"** (Module ${currentLesson.moduleId.replace('mod-', '')}). Ask me anything about C++—from pointers and memory to classes and algorithms—and I'll provide clear explanations with runnable code.\n\nSelect a quick suggestion below or ask any question!`;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'bot',
      text: initialGreeting,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string, actionType: string = 'general') => {
    const text = (textToSend || inputMessage).trim();
    if (!text && actionType === 'general') return;

    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: text || actionType,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actionType,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);

    try {
      const history = messages.slice(-6).map((m) => ({
        sender: m.sender,
        text: m.text,
      }));

      const reply = await fetchTutorReply({
        message: text,
        history,
        language,
        currentLesson,
        codeContext: playgroundCode,
        actionType,
        experienceLevel,
      });

      const botMsg: ChatMessage = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: reply || 'I am here to help you learn C++! Please ask any question.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionType,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.error('Tutor chat failed:', err);
      const errorMsg: ChatMessage = {
        id: 'bot-err-' + Date.now(),
        sender: 'bot',
        text:
          language === 'marathi'
            ? 'माफ करा, संपर्क साधण्यात अडचण आली. कृपया पुन्हा प्रश्न विचारा!'
            : language === 'hinglish'
            ? 'Network glitch ki wajah se dikkat aayi. Please ek baar fir se apna question send karein!'
            : 'A brief connection issue occurred. Please ask your question again!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionType,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleQuickAction = (actionType: string) => {
    let label = '';
    switch (actionType) {
      case 'explain_simply': label = t.tutor.explainSimply; break;
      case 'explain_line_by_line': label = t.tutor.explainLineByLine; break;
      case 'another_example': label = t.tutor.anotherExample; break;
      case 'hint': label = t.tutor.hint; break;
      case 'test_knowledge': label = t.tutor.testKnowledge; break;
      case 'practice_problem': label = t.tutor.practiceProblem; break;
      case 'summarize': label = t.tutor.summarize; break;
    }
    handleSendMessage(label, actionType);
  };

  const handleCopyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeSnippet(code);
    setTimeout(() => setCopiedCodeSnippet(null), 2000);
  };

  const handleSendToPlayground = (codeSnippet: string) => {
    setPlaygroundCode(codeSnippet);
    setActiveTab('playground');
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'msg-cleared',
        sender: 'bot',
        text: initialGreeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const setLevel = (level: ExperienceLevel) => {
    setExperienceLevel(level);
    updateProfile({ experienceLevel: level });
  };

  // Render message body with clean separation of text and code blocks
  const renderMessageContent = (text: string, isUser: boolean) => {
    if (isUser) {
      return <div className="whitespace-pre-wrap">{text}</div>;
    }

    // Parse message into text and code block parts
    const parts = text.split(/(```[\s\S]*?```)/g);

    return (
      <div className="space-y-3">
        {parts.map((part, pIdx) => {
          if (part.startsWith('```') && part.endsWith('```')) {
            const firstLineBreak = part.indexOf('\n');
            const langHeader = part.slice(3, firstLineBreak).trim() || 'cpp';
            const codeContent = part.slice(firstLineBreak + 1, -3).trim();
            const isCpp = langHeader === 'cpp' || langHeader === 'c++' || codeContent.includes('#include') || codeContent.includes('int main');

            return (
              <div
                key={pIdx}
                className="my-3 rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 text-slate-100 shadow-lg font-mono text-xs sm:text-sm"
              >
                {/* Header toolbar */}
                <div className="flex items-center justify-between px-3.5 py-2 bg-slate-900 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                    </div>
                    <span className="font-semibold uppercase tracking-wider text-cyan-400">
                      {isCpp ? 'C++ Snippet' : langHeader.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyCode(codeContent)}
                      className="flex items-center gap-1 hover:text-white px-2 py-0.5 rounded transition-colors cursor-pointer"
                      title="Copy code"
                    >
                      {copiedCodeSnippet === codeContent ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-[10px] text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span className="text-[10px]">Copy</span>
                        </>
                      )}
                    </button>

                    {isCpp && (
                      <button
                        onClick={() => handleSendToPlayground(codeContent)}
                        className="flex items-center gap-1 bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-2 py-0.5 rounded-lg transition-all cursor-pointer shadow-sm text-[10px]"
                        title="Run in Playground"
                      >
                        <Play className="w-2.5 h-2.5 fill-current" />
                        <span>Run</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Code body */}
                <div className="p-3.5 overflow-x-auto leading-relaxed whitespace-pre font-mono">
                  <code>{codeContent}</code>
                </div>
              </div>
            );
          }

          // Format normal text with bolding and readable spacing
          return (
            <div key={pIdx} className="whitespace-pre-wrap leading-relaxed">
              {part.split('\n').map((line, lIdx) => {
                const isHeading = line.startsWith('###') || line.startsWith('##') || line.startsWith('#');
                const isBullet = line.trim().startsWith('-') || line.trim().startsWith('•') || /^\d+\./.test(line.trim());

                // Parse inline **bold**
                const boldParts = line.split(/(\*\*.*?\*\*)/g);

                return (
                  <div
                    key={lIdx}
                    className={`${isHeading ? 'font-bold text-slate-900 dark:text-white text-sm sm:text-base mt-2 mb-1' : ''} ${
                      isBullet ? 'pl-2 my-0.5' : 'my-1'
                    }`}
                  >
                    {boldParts.map((bPart, bIdx) => {
                      if (bPart.startsWith('**') && bPart.endsWith('**')) {
                        return (
                          <strong key={bIdx} className="font-extrabold text-cyan-700 dark:text-cyan-300">
                            {bPart.slice(2, -2)}
                          </strong>
                        );
                      }
                      if (bPart.startsWith('`') && bPart.endsWith('`')) {
                        return (
                          <code key={bIdx} className="px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 font-mono text-[11px] text-cyan-600 dark:text-cyan-400">
                            {bPart.slice(1, -1)}
                          </code>
                        );
                      }
                      return bPart;
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto space-y-4 pb-12">
      {/* Top Banner with Mascot, Context & Experience Selector */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <RobotMascot mood={isLoading ? 'thinking' : 'happy'} size="sm" />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                C++ AI Tutor & Code Mentor
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">
                {language.toUpperCase()}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Active Context: <span className="font-semibold text-slate-700 dark:text-slate-300">{currentLesson.title}</span>
            </p>
          </div>
        </div>

        {/* Experience Level Switcher */}
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
          <button
            onClick={() => setLevel('beginner')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              experienceLevel === 'beginner'
                ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {t.tutor.levelBeginner}
          </button>
          <button
            onClick={() => setLevel('intermediate')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              experienceLevel === 'intermediate'
                ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {t.tutor.levelIntermediate}
          </button>
          <button
            onClick={() => setLevel('advanced')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              experienceLevel === 'advanced'
                ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {t.tutor.levelAdvanced}
          </button>
        </div>
      </div>

      {/* Quick Action Buttons Toolbar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-3 shadow-sm">
        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-1">
          {t.tutor.quickActions} for &quot;{currentLesson.title}&quot;:
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleQuickAction('explain_simply')}
            disabled={isLoading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200/80 dark:border-cyan-800/80 text-cyan-800 dark:text-cyan-300 font-bold text-xs hover:bg-cyan-100 transition-colors cursor-pointer"
          >
            <Lightbulb className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.tutor.explainSimply}</span>
          </button>

          <button
            onClick={() => handleQuickAction('explain_line_by_line')}
            disabled={isLoading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-800 dark:text-blue-300 font-bold text-xs hover:bg-blue-100 transition-colors cursor-pointer"
          >
            <ListOrdered className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.tutor.explainLineByLine}</span>
          </button>

          <button
            onClick={() => handleQuickAction('another_example')}
            disabled={isLoading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200/80 dark:border-purple-800/80 text-purple-800 dark:text-purple-300 font-bold text-xs hover:bg-purple-100 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{t.tutor.anotherExample}</span>
          </button>

          <button
            onClick={() => handleQuickAction('hint')}
            disabled={isLoading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-800/80 text-amber-800 dark:text-amber-300 font-bold text-xs hover:bg-amber-100 transition-colors cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.tutor.hint}</span>
          </button>

          <button
            onClick={() => handleQuickAction('test_knowledge')}
            disabled={isLoading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 font-bold text-xs hover:bg-emerald-100 transition-colors cursor-pointer"
          >
            <FileQuestion className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.tutor.testKnowledge}</span>
          </button>

          <button
            onClick={() => handleQuickAction('summarize')}
            disabled={isLoading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-600" />
            <span>{t.tutor.summarize}</span>
          </button>
        </div>
      </div>

      {/* Suggested Questions Pills */}
      <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 rounded-2xl p-3">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-500" />
          <span>Ask Instant Question:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              disabled={isLoading}
              className="text-xs bg-white dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-950/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-xl transition-all font-medium cursor-pointer shadow-2xs hover:border-cyan-300"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Stream Container */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-sm min-h-[440px] max-h-[620px] overflow-y-auto space-y-4">
        {messages.map((msg, index) => {
          const isUser = msg.sender === 'user';

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {!isUser && (
                <div className="flex-shrink-0 mt-1">
                  <RobotMascot mood="happy" size="sm" />
                </div>
              )}

              <div
                className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                    : 'bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 shadow-sm'
                }`}
              >
                {renderMessageContent(msg.text, isUser)}

                <div
                  className={`text-[10px] mt-2.5 flex items-center justify-end gap-2 ${
                    isUser ? 'text-cyan-200' : 'text-slate-400'
                  }`}
                >
                  <span>{msg.timestamp}</span>
                  {!isUser && (
                    <button
                      onClick={() => handleCopyText(msg.text, index)}
                      className="hover:text-cyan-500 transition-colors cursor-pointer"
                      title="Copy response"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-3 h-3 text-emerald-500" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-center gap-3">
            <RobotMascot mood="thinking" size="sm" />
            <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2 animate-pulse shadow-sm">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-500" />
              <span>{t.tutor.thinking}</span>
            </div>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* Input Box & Bottom Toolbar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-3 shadow-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={t.tutor.chatPlaceholder}
            disabled={isLoading}
            className="flex-1 px-4 py-3 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl border border-transparent focus:border-cyan-500 outline-none transition-all placeholder:text-slate-400"
          />

          <button
            type="submit"
            disabled={isLoading || !inputMessage.trim()}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>{t.tutor.send}</span>
            <Send className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={clearChat}
            title={t.tutor.clearChat}
            className="p-3 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
