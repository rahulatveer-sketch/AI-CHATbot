export type Language = 'hinglish' | 'marathi' | 'en';
export type Theme = 'light' | 'dark';
export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Lesson {
  id: string;
  moduleId: string;
  number: number;
  title: string;
  titleMarathi: string;
  titleHinglish: string;
  summary: string;
  summaryMarathi: string;
  summaryHinglish: string;
  content: string;
  contentMarathi: string;
  contentHinglish: string;
  initialCode: string;
  expectedOutput: string;
  keyPoints: string[];
  keyPointsMarathi: string[];
  keyPointsHinglish: string[];
  commonMistakes: string[];
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  titleMarathi: string;
  titleHinglish: string;
  description: string;
  descriptionMarathi: string;
  descriptionHinglish: string;
  iconName: string;
  lessons: Lesson[];
}

export type QuizType = 'mcq' | 'predict_output' | 'find_error' | 'code_completion';

export interface QuizQuestion {
  id: string;
  moduleId: string;
  type: QuizType;
  difficulty: ExperienceLevel;
  question: string;
  questionMarathi: string;
  questionHinglish: string;
  codeSnippet?: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  explanationMarathi: string;
  explanationHinglish: string;
  hint: string;
  hintMarathi: string;
  hintHinglish: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  titleMarathi: string;
  titleHinglish: string;
  difficulty: ExperienceLevel;
  description: string;
  descriptionMarathi: string;
  descriptionHinglish: string;
  starterCode: string;
  solutionCode: string;
  expectedOutput: string;
  hints: string[];
}

export type VisualizerType =
  | 'variables'
  | 'flowchart'
  | 'loops'
  | 'callstack'
  | 'pointers'
  | 'stackqueue'
  | 'sorting'
  | 'binarysearch'
  | 'oop'
  | 'inheritance';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  codeSnippet?: string;
  actionType?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  isGuest: boolean;
  avatarSeed: string;
  language: Language;
  theme: Theme;
  experienceLevel: ExperienceLevel;
  xp: number;
  streak: number;
  lastActiveDate: string;
  completedLessons: string[];
  completedQuizzes: Record<string, number>; // quizId -> score (0-100)
  bookmarks: string[];
  savedSnippets: Array<{
    id: string;
    title: string;
    code: string;
    date: string;
  }>;
}

export interface ExecutionResult {
  success: boolean;
  stage?: 'compilation' | 'runtime';
  output: string;
  error?: string;
  exitCode?: number;
  executionTimeMs?: number;
  isSimulated?: boolean;
}
