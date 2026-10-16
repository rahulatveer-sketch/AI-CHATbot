import { Language } from '../types';

export interface Translations {
  appName: string;
  tagline: string;
  selectLanguage: string;
  selectLanguageDesc: string;
  continueBtn: string;
  nav: {
    home: string;
    roadmap: string;
    tutor: string;
    playground: string;
    quiz: string;
    visualizer: string;
    projects: string;
    profile: string;
  };
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    startLearning: string;
    exploreCourse: string;
    tryCode: string;
    modulesCount: string;
    studentsCount: string;
    languagesCount: string;
  };
  features: {
    aiTutorTitle: string;
    aiTutorDesc: string;
    compilerTitle: string;
    compilerDesc: string;
    visualizerTitle: string;
    visualizerDesc: string;
    trilingualTitle: string;
    trilingualDesc: string;
  };
  tutor: {
    welcome: string;
    chatPlaceholder: string;
    send: string;
    thinking: string;
    quickActions: string;
    explainSimply: string;
    explainLineByLine: string;
    anotherExample: string;
    hint: string;
    testKnowledge: string;
    practiceProblem: string;
    summarize: string;
    clearChat: string;
    levelBeginner: string;
    levelIntermediate: string;
    levelAdvanced: string;
  };
  playground: {
    title: string;
    runCode: string;
    resetCode: string;
    copyCode: string;
    clearOutput: string;
    copied: string;
    stdinPlaceholder: string;
    stdinLabel: string;
    outputLabel: string;
    running: string;
    loadPreset: string;
    compilerSuccess: string;
    compilerFailed: string;
  };
  quiz: {
    title: string;
    subtitle: string;
    question: string;
    of: string;
    submit: string;
    next: string;
    retry: string;
    hint: string;
    showExplanation: string;
    score: string;
    filterByTopic: string;
    allTopics: string;
    excellent: string;
    keepPracticing: string;
  };
  visualizer: {
    title: string;
    subtitle: string;
    play: string;
    pause: string;
    nextStep: string;
    reset: string;
    step: string;
    speed: string;
  };
  profile: {
    title: string;
    guestMode: string;
    guestWarning: string;
    streak: string;
    xp: string;
    lessonsCompleted: string;
    quizAccuracy: string;
    bookmarks: string;
    exportData: string;
    importData: string;
    loginWithSupabase: string;
    logout: string;
  };
}

export const translations: Record<Language, Translations> = {
  hinglish: {
    appName: 'C++ Learning Buddy',
    tagline: 'Aapka Personal AI Coding Teacher',
    selectLanguage: 'Apni Pasandida Bhasha Chunein',
    selectLanguageDesc: 'Aap baad me bhi kisi bhi waqt language badal sakte hain.',
    continueBtn: 'Aage Badhein',
    nav: {
      home: 'Home',
      roadmap: 'Roadmap & Lessons',
      tutor: 'AI Tutor',
      playground: 'C++ Playground',
      quiz: 'Quizzes & Practice',
      visualizer: 'Visual Learning',
      projects: 'Projects',
      profile: 'My Profile',
    },
    hero: {
      titlePrefix: 'C++ Seekhein ',
      titleHighlight: 'Zero Se Pro Level Tak',
      subtitle: 'Aapka personal AI coding guru jo Hinglish, Marathi aur English me line-by-line coding sikhata hai. Har concept ko visual animations aur real code ke sath master karein.',
      startLearning: 'Shuru Karein (Free)',
      exploreCourse: 'Course Roadmap Dekhein',
      tryCode: 'Compiler Run Karein',
      modulesCount: '10 Complete Modules',
      studentsCount: '100% Free & Open',
      languagesCount: '3 Languages Support',
    },
    features: {
      aiTutorTitle: 'AI Robot Tutor 🤖',
      aiTutorDesc: 'Real-life desi analogies ke sath har C++ concept aur error ko line-by-line samjhe.',
      compilerTitle: 'Interactive C++ Sandbox ⚡',
      compilerDesc: 'Browser me hi bina kisi setup ke live C++ code likhein aur instant execution dekhein.',
      visualizerTitle: 'Visual Memory Models 🧠',
      visualizerDesc: 'Pointers, memory addresses, recursion stack aur OOP blueprints ko visually observe karein.',
      trilingualTitle: 'Trilingual Flexibility 🌐',
      trilingualDesc: 'Hinglish, Marathi aur English me switch karein bina koi progress khoye.',
    },
    tutor: {
      welcome: 'Namaste! Main hoon aapka C++ Buddy. Aaj hum kaunsa concept master karne wale hain?',
      chatPlaceholder: 'C++ ka koi bhi sawal ya code pucho...',
      send: 'Bhejo',
      thinking: 'AI Buddy soch raha hai...',
      quickActions: 'Quick Actions',
      explainSimply: '💡 Easy me samjhao',
      explainLineByLine: '🔍 Line by Line breakdown',
      anotherExample: '🚀 Ek aur example',
      hint: '🔑 Ek hint do',
      testKnowledge: '🎯 Mujhe test karo',
      practiceProblem: '💻 Practice problem do',
      summarize: '📝 Summary do',
      clearChat: 'Chat Clear Karein',
      levelBeginner: 'Shuruwaati (Beginner)',
      levelIntermediate: 'Thoda Pata Hai (Intermediate)',
      levelAdvanced: 'Pro (Advanced)',
    },
    playground: {
      title: 'Interactive C++ Playground',
      runCode: 'Run Code ⚡',
      resetCode: 'Reset',
      copyCode: 'Copy',
      clearOutput: 'Clear Output',
      copied: 'Code Copy Ho Gaya!',
      stdinPlaceholder: 'Input data yahan likhein (cin ke liye agar zaroorat ho)...',
      stdinLabel: 'Standard Input (stdin)',
      outputLabel: 'Terminal Output',
      running: 'Code Compiling & Executing...',
      loadPreset: 'Preset Code Load Karein',
      compilerSuccess: 'Success (Exit Code 0)',
      compilerFailed: 'Execution Error',
    },
    quiz: {
      title: 'C++ Quizzes & Practice',
      subtitle: 'Apni C++ skills ko test karein aur instant feedback paayein',
      question: 'Sawal',
      of: 'ka',
      submit: 'Submit Answer',
      next: 'Agla Sawal',
      retry: 'Dubara Koshish Karein',
      hint: 'Hint Dekhein',
      showExplanation: 'Explanation Dekhein',
      score: 'Aapka Score',
      filterByTopic: 'Topic chunein:',
      allTopics: 'Sabhi Topics',
      excellent: 'Shabash! Zabardast understanding!',
      keepPracticing: 'Practice jari rakhein, aap seekh rahe hain!',
    },
    visualizer: {
      title: 'Interactive Visual Learning Lab',
      subtitle: 'Pointers, memory stack, loops aur sorting ko visually dekhein',
      play: 'Play',
      pause: 'Pause',
      nextStep: 'Next Step ⏩',
      reset: 'Reset 🔄',
      step: 'Step',
      speed: 'Speed',
    },
    profile: {
      title: 'Aapki Learning Progress',
      guestMode: 'Guest Mode Active',
      guestWarning: 'Aapka data local browser me safe hai. Account banakar cloud sync kar sakte hain.',
      streak: 'Streak',
      xp: 'XP Points',
      lessonsCompleted: 'Lessons Complete',
      quizAccuracy: 'Quiz Score Average',
      bookmarks: 'Saved Bookmarks',
      exportData: 'Progress Export (JSON)',
      importData: 'Progress Import',
      loginWithSupabase: 'Supabase Cloud Sync / Login',
      logout: 'Logout',
    },
  },
  marathi: {
    appName: 'C++ Learning Buddy',
    tagline: 'तुमचा वैयक्तिक AI कोडिंग शिक्षक',
    selectLanguage: 'तुमची पसंतीची भाषा निवडा',
    selectLanguageDesc: 'तुम्ही नंतर कधीही सेटिंग्जमधून भाषा बदलू शकता.',
    continueBtn: 'पुढे चला',
    nav: {
      home: 'मुख्यपृष्ठ',
      roadmap: 'अभ्यासक्रम आणि धडे',
      tutor: 'AI शिक्षक',
      playground: 'C++ प्लेग्राउंड',
      quiz: 'चाचणी आणि सराव',
      visualizer: 'दृकश्राव्य साधने',
      projects: 'प्रकल्प (Projects)',
      profile: 'माझे प्रोफाईल',
    },
    hero: {
      titlePrefix: 'C++ शिका ',
      titleHighlight: 'शून्यापासून प्रगत पातळीपर्यंत',
      subtitle: 'तुमचा स्वतःचा AI रोबोट शिक्षक जो मराठी, हिंग्लिश आणि इंग्रजीमध्ये C++ अगदी सोप्या दैनंदिन उदाहरणांसह शिकवतो.',
      startLearning: 'शिकण्यास सुरुवात करा',
      exploreCourse: 'अभ्यासक्रम पहा',
      tryCode: 'कंपाइलर चालवा',
      modulesCount: '१० संपूर्ण मॉड्यूल्स',
      studentsCount: '१००% मोफत व सुलभ',
      languagesCount: '३ भाषांमध्ये उपलब्ध',
    },
    features: {
      aiTutorTitle: 'AI रोबोट शिक्षक 🤖',
      aiTutorDesc: 'मराठीत सोप्या उदाहरणांसह C++ चे सर्व नियम आणि संकल्पना समजून घ्या.',
      compilerTitle: 'थेट C++ कंपाइलर ⚡',
      compilerDesc: 'कोणत्याही सॉफ्टवेअर इन्स्टॉलेशनशिवाय थेट ब्राऊझरमध्ये कोड लिहा आणि चालवा.',
      visualizerTitle: 'व्हिज्युअल मेमरी मॉडेल्स 🧠',
      visualizerDesc: 'पॉइंटर्स, मेमरी अ‍ॅड्रेसेस आणि ऑब्जेक्ट्स प्रत्यक्ष चित्रांच्या स्वरूपात अनुभवा.',
      trilingualTitle: '३ भाषांमध्ये शिकण्याची सोय 🌐',
      trilingualDesc: 'मराठी, हिंग्लिश आणि इंग्रजीत अखंडपणे स्विच करा, प्रगती कायम राहील.',
    },
    tutor: {
      welcome: 'नमस्कार! मी तुमचा C++ Buddy आहे. आज आपण कोणता विषय शिकणार आहोत?',
      chatPlaceholder: 'C++ बद्दल कोणताही प्रश्न किंवा अडचण विचारा...',
      send: 'पाठवा',
      thinking: 'AI शिक्षक विचार करत आहे...',
      quickActions: 'जलद कृती (Quick Actions)',
      explainSimply: '💡 सोप्या भाषेत सांगा',
      explainLineByLine: '🔍 ओळ-दर-ओळ स्पष्टीकरण',
      anotherExample: '🚀 आणखी एक उदाहरण द्या',
      hint: '🔑 थोडी सूचना (Hint) द्या',
      testKnowledge: '🎯 माझी परीक्षा घ्या',
      practiceProblem: '💻 एक सराव प्रश्न द्या',
      summarize: '📝 सारांश द्या',
      clearChat: 'संवाद साफ करा',
      levelBeginner: 'नवशिका (Beginner)',
      levelIntermediate: 'मध्यम (Intermediate)',
      levelAdvanced: 'प्रगत (Advanced)',
    },
    playground: {
      title: 'परस्परसंवादी C++ प्लेग्राउंड',
      runCode: 'कोड चालवा ⚡',
      resetCode: 'पूर्ववत करा',
      copyCode: 'प्रत करा (Copy)',
      clearOutput: 'आउटपुट साफ करा',
      copied: 'कोड कॉपी झाला!',
      stdinPlaceholder: 'येथे इनपुट टाका (cin साठी आवश्यक असल्यास)...',
      stdinLabel: 'स्टँडर्ड इनपुट (stdin)',
      outputLabel: 'टर्मिनल आउटपुट',
      running: 'कोड कंपाइल आणि रन होत आहे...',
      loadPreset: 'नमुना कोड लोड करा',
      compilerSuccess: 'यशस्वी (Exit Code 0)',
      compilerFailed: 'त्रुटी आढळली (Error)',
    },
    quiz: {
      title: 'C++ प्रश्नमंजुषा आणि सराव',
      subtitle: 'आपल्या ज्ञानाची चाचणी घ्या आणि त्वरित अभिप्राय मिळवा',
      question: 'प्रश्न',
      of: 'पैकी',
      submit: 'उत्तर तपासा',
      next: 'पुढील प्रश्न',
      retry: 'पुन्हा प्रयत्न करा',
      hint: 'सूचना (Hint) पहा',
      showExplanation: 'स्पष्टीकरण पहा',
      score: 'तुमचे गुण',
      filterByTopic: 'विषय निवडा:',
      allTopics: 'सर्व विषय',
      excellent: 'उत्कृष्ट! तुमची संकल्पना स्पष्ट झाली आहे!',
      keepPracticing: 'सराव चालू ठेवा, प्रगती उत्तम आहे!',
    },
    visualizer: {
      title: 'दृश्य शिक्षण प्रयोगशाळा',
      subtitle: 'पॉइंटर्स, स्टॅक, लूप्स आणि सॉर्टिंगचे जिवंत अ‍ॅनिमेशन पहा',
      play: 'सुरू करा',
      pause: 'थांबवा',
      nextStep: 'पुढील टप्पा ⏩',
      reset: 'रीसेट 🔄',
      step: 'टप्पा',
      speed: 'गती',
    },
    profile: {
      title: 'तुमची अध्ययन प्रगती',
      guestMode: 'अतिथी मोड (Guest Mode)',
      guestWarning: 'तुमचा डेटा स्थानिक ब्राउझरमध्ये सुरक्षित आहे.',
      streak: 'सलग दिवस (Streak)',
      xp: 'XP गुण',
      lessonsCompleted: 'पूर्ण झालेले धडे',
      quizAccuracy: 'चाचणी सरासरी',
      bookmarks: 'जतन केलेले धडे',
      exportData: 'डेटा निर्यात करा (JSON)',
      importData: 'डेटा आयात करा',
      loginWithSupabase: 'Supabase क्लाउड सिंक / लॉगिन',
      logout: 'लॉगआउट',
    },
  },
  en: {
    appName: 'C++ Learning Buddy',
    tagline: 'Your Personal AI Coding Teacher',
    selectLanguage: 'Choose Your Preferred Language',
    selectLanguageDesc: 'You can switch languages anytime from the navigation bar or settings.',
    continueBtn: 'Continue to Learning',
    nav: {
      home: 'Home',
      roadmap: 'Roadmap & Lessons',
      tutor: 'AI Tutor',
      playground: 'C++ Playground',
      quiz: 'Quizzes & Practice',
      visualizer: 'Visual Learning',
      projects: 'Projects',
      profile: 'My Profile',
    },
    hero: {
      titlePrefix: 'Master C++ from ',
      titleHighlight: 'Zero to Advanced',
      subtitle: 'Your personal AI coding teacher that teaches with relatable analogies, line-by-line breakdown, visual memory diagrams, and live isolated compiler execution.',
      startLearning: 'Start Learning (Free)',
      exploreCourse: 'Explore Roadmap',
      tryCode: 'Launch Compiler',
      modulesCount: '10 Complete Modules',
      studentsCount: '100% Free & Open',
      languagesCount: '3 Languages Available',
    },
    features: {
      aiTutorTitle: 'AI Robot Tutor 🤖',
      aiTutorDesc: 'Deep conceptual explanations, real-world analogies, and instant line-by-line code breakdowns.',
      compilerTitle: 'Interactive C++ Sandbox ⚡',
      compilerDesc: 'Run modern C++ code directly in your browser with real-time compilation and stdin input.',
      visualizerTitle: 'Visual Memory Models 🧠',
      visualizerDesc: 'Step through pointers, memory addresses, recursion call stacks, and sorting step-by-step.',
      trilingualTitle: 'Trilingual Learning 🌐',
      trilingualDesc: 'Learn in Hinglish, Marathi, or English seamlessly without ever losing your progress.',
    },
    tutor: {
      welcome: 'Hello! I am your C++ Learning Buddy. What concept would you like to conquer today?',
      chatPlaceholder: 'Ask any C++ question or paste code...',
      send: 'Send',
      thinking: 'AI Buddy is thinking...',
      quickActions: 'Quick Actions',
      explainSimply: '💡 Explain Simply',
      explainLineByLine: '🔍 Explain Line by Line',
      anotherExample: '🚀 Give Another Example',
      hint: '🔑 Give Me a Hint',
      testKnowledge: '🎯 Test My Knowledge',
      practiceProblem: '💻 Give Practice Problem',
      summarize: '📝 Summarize Lesson',
      clearChat: 'Clear Conversation',
      levelBeginner: 'Beginner',
      levelIntermediate: 'Intermediate',
      levelAdvanced: 'Advanced',
    },
    playground: {
      title: 'Interactive C++ Playground',
      runCode: 'Run Code ⚡',
      resetCode: 'Reset',
      copyCode: 'Copy',
      clearOutput: 'Clear Output',
      copied: 'Code copied to clipboard!',
      stdinPlaceholder: 'Type stdin input here (for cin operations)...',
      stdinLabel: 'Standard Input (stdin)',
      outputLabel: 'Terminal Output',
      running: 'Compiling & Executing C++...',
      loadPreset: 'Load Preset Example',
      compilerSuccess: 'Success (Exit Code 0)',
      compilerFailed: 'Execution Error',
    },
    quiz: {
      title: 'C++ Quizzes & Challenges',
      subtitle: 'Sharpen your skills with multiple-choice, predict-the-output, and error-spotting challenges.',
      question: 'Question',
      of: 'of',
      submit: 'Submit Answer',
      next: 'Next Question',
      retry: 'Try Again',
      hint: 'Show Hint',
      showExplanation: 'View Explanation',
      score: 'Your Score',
      filterByTopic: 'Filter by Module:',
      allTopics: 'All Modules',
      excellent: 'Outstanding! You have nailed this concept!',
      keepPracticing: 'Keep practicing! Review the explanation to master it.',
    },
    visualizer: {
      title: 'Interactive Visual Learning Lab',
      subtitle: 'Visualize memory addresses, recursion call stacks, loops, and sorting algorithms.',
      play: 'Play',
      pause: 'Pause',
      nextStep: 'Next Step ⏩',
      reset: 'Reset 🔄',
      step: 'Step',
      speed: 'Speed',
    },
    profile: {
      title: 'Your Learning Dashboard',
      guestMode: 'Guest Mode Active',
      guestWarning: 'Your progress is stored securely in local browser storage. Connect Supabase for cloud sync across devices.',
      streak: 'Day Streak',
      xp: 'XP Points',
      lessonsCompleted: 'Lessons Completed',
      quizAccuracy: 'Average Quiz Score',
      bookmarks: 'Bookmarked Lessons',
      exportData: 'Export Progress (JSON)',
      importData: 'Import Progress',
      loginWithSupabase: 'Supabase Cloud Sync / Sign In',
      logout: 'Logout',
    },
  },
};
