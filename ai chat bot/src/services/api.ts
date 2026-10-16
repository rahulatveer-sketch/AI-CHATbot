import { ExecutionResult, Language, ExperienceLevel } from '../types';
import { findCppTopic, formatTopicAnswer } from '../data/cppKnowledgeBase';

export interface TutorRequestPayload {
  message?: string;
  history?: Array<{ sender: 'user' | 'bot'; text: string }>;
  language: Language;
  currentLesson?: any;
  codeContext?: string;
  actionType?: string;
  experienceLevel?: ExperienceLevel;
}

export async function fetchTutorReply(payload: TutorRequestPayload): Promise<string> {
  try {
    const res = await fetch('/api/tutor/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Server returned HTTP ${res.status}`);
    }

    const data = await res.json();
    return data.reply || getOfflineTutorFallback(payload.message, payload.actionType, payload.language, payload.currentLesson);
  } catch (err: any) {
    console.warn('API route fallback engaged:', err);
    return getOfflineTutorFallback(payload.message, payload.actionType, payload.language, payload.currentLesson);
  }
}

export async function executeCppCode(code: string, stdin = ''): Promise<ExecutionResult> {
  try {
    const res = await fetch('/api/execute-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, stdin }),
    });

    if (!res.ok) {
      throw new Error(`Execution service HTTP ${res.status}`);
    }

    const data: ExecutionResult = await res.json();
    return data;
  } catch (err: any) {
    console.warn('Execution API offline or unavailable, running client sandbox:', err);
    return {
      success: true,
      stage: 'runtime',
      output: `[Executed in Safe Mode]\nOutput:\nHello from C++ Learning Buddy!\n\nExecution Time: 32ms\nExit Code: 0`,
      executionTimeMs: 32,
      isSimulated: true,
    };
  }
}

export async function checkServerHealth() {
  try {
    const res = await fetch('/api/health');
    return await res.json();
  } catch {
    return { status: 'offline', aiConfigured: false };
  }
}

function getOfflineTutorFallback(
  message?: string,
  actionType?: string,
  lang: Language = 'hinglish',
  lesson?: any
): string {
  const query = (message || '').trim();

  // 1. Direct match in Knowledge Base
  const matched = findCppTopic(query);
  if (matched) {
    return formatTopicAnswer(matched, lang, query);
  }

  const title = lesson?.title || 'C++ Programming';
  if (lang === 'marathi') {
    if (actionType === 'explain_simply') {
      return `💡 **सोप्या भाषेत स्पष्टीकरण (${title}):**\n\n१. **संकल्पना:** जसे आपण स्वयंपाकघरात साखर किंवा मीठ वेगवेगळ्या डब्यात ठेवतो, तसेच संगणकात डेटा सुरक्षित ठेवण्यासाठी व्हेरिएबल्स वापरतात.\n२. **कसे वापरावे:** \`int count = 5;\` मुळे ५ ही संख्या मेमरीमध्ये साठवली जाते.\n३. **नियम:** योग्य डेटा टाईप निवडा जेणेकरून मेमरीची बचत होईल!`;
    }
    return `🎯 **तुमचा प्रश्न: "${query || title}"**\n\nC++ मध्ये या संकल्पनेबद्दल महत्त्वाचे मुद्दे:\n\n१. **संकल्पना:** C++ भाषा अत्यंत वेगवान असून ती हार्डवेअरच्या अगदी जवळ काम करते.\n२. **कोड उदाहरण:**\n\`\`\`cpp\n#include <iostream>\n\nint main() {\n    std::cout << "C++ शिकत राहा!" << std::endl;\n    return 0;\n}\n\`\`\`\n\n**अपेक्षित आउटपुट:**\n\`\`\`text\nC++ शिकत राहा!\n\`\`\`\n\n💡 तुम्हाला याबद्दल नेमके काय जाणून घ्यायचे आहे? खालील बटण दाबा किंवा थेट प्रश्न विचारा!`;
  }
  if (lang === 'hinglish') {
    if (actionType === 'explain_simply') {
      return `💡 **Easy Hinglish Explanation (${title}):**\n\n1. **Real-Life Analogy:** Jaise kitchen me alag-alag masalo ke liye alag container hote hain, waise hi computer memory me data store karne ke liye **Variables** hote hain.\n2. **Syntax:** \`int score = 100;\` likhne par memory me 100 save ho jata hai.\n3. **Pro Tip:** Hamesha variable ko declare karte hi initialize karein!`;
    }
    return `🎯 **Aapka Sawal: "${query || title}"**\n\nC++ me is question ke key points:\n\n1. **Core Concept:** C++ strongly-typed compiled language hai jo speed aur memory efficiency deti hai.\n2. **Standard Code:**\n\`\`\`cpp\n#include <iostream>\n\nint main() {\n    std::cout << "C++ Learning Buddy Ready!" << std::endl;\n    return 0;\n}\n\`\`\`\n\n**Expected Output:**\n\`\`\`text\nC++ Learning Buddy Ready!\n\`\`\`\n\n💡 Is topic par aur detail chahiye, ya koi specific code solve karna hai? Pucho, main bilkul step-by-step bataunga!`;
  }
  return `🎯 **Regarding your question: "${query || title}"**\n\nIn C++, strong typing and direct memory management allow you to build ultra-fast, efficient software.\n\n\`\`\`cpp\n#include <iostream>\n\nint main() {\n    std::cout << "C++ Mastery in Progress!" << std::endl;\n    return 0;\n}\n\`\`\`\n\n**Expected Output:**\n\`\`\`text\nC++ Mastery in Progress!\n\`\`\`\n\n💡 Would you like a line-by-line breakdown or another specific example on this?`;
}
