import { UserProfile, Language, ExperienceLevel } from '../types';
import { getLocalProfile, saveLocalProfile } from './supabase';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  avatarSeed: string;
  language: Language;
  experienceLevel: ExperienceLevel;
  profile: UserProfile;
  createdAt: string;
  lastLogin: string;
}

const ACCOUNTS_STORAGE_KEY = 'cpp_learning_buddy_accounts_v1';
const ACTIVE_ACCOUNT_ID_KEY = 'cpp_learning_buddy_active_account_id';

// Default demo account pre-populated so testing is effortless
const DEFAULT_DEMO_ACCOUNT: UserAccount = {
  id: 'usr-demo-cpp',
  name: 'Rahul Sharma',
  email: 'rahul@cppbuddy.com',
  passwordHash: 'cpp12345',
  avatarSeed: 'robot-hero',
  language: 'hinglish',
  experienceLevel: 'beginner',
  createdAt: '2026-01-15T10:00:00.000Z',
  lastLogin: new Date().toISOString(),
  profile: {
    id: 'usr-demo-cpp',
    name: 'Rahul Sharma',
    email: 'rahul@cppbuddy.com',
    isGuest: false,
    avatarSeed: 'robot-hero',
    language: 'hinglish',
    theme: 'light',
    experienceLevel: 'beginner',
    xp: 450,
    streak: 5,
    lastActiveDate: new Date().toISOString().split('T')[0],
    completedLessons: ['l-1-1', 'l-1-2', 'l-1-3'],
    completedQuizzes: { 'q-1': 100, 'q-2': 90 },
    bookmarks: ['l-1-2'],
    savedSnippets: [
      {
        id: 'snip-pointer-demo',
        title: 'Pointer Address & Dereference',
        code: `#include <iostream>\n\nint main() {\n    int val = 100;\n    int* p = &val;\n    std::cout << "Value: " << *p << " at Address: " << p << std::endl;\n    return 0;\n}`,
        date: new Date().toLocaleDateString(),
      },
    ],
  },
};

export class AuthService {
  // Retrieve all registered accounts
  static getAccounts(): UserAccount[] {
    try {
      const raw = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load accounts from storage:', e);
    }
    // Seed with initial demo account
    const initial = [DEFAULT_DEMO_ACCOUNT];
    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }

  // Save accounts array
  private static saveAccounts(accounts: UserAccount[]): void {
    try {
      localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
    } catch (e) {
      console.error('Failed to save accounts to storage:', e);
    }
  }

  // Get currently active account ID
  static getActiveAccountId(): string | null {
    return localStorage.getItem(ACTIVE_ACCOUNT_ID_KEY);
  }

  // Set active account ID
  static setActiveAccountId(id: string | null): void {
    if (id) {
      localStorage.setItem(ACTIVE_ACCOUNT_ID_KEY, id);
    } else {
      localStorage.removeItem(ACTIVE_ACCOUNT_ID_KEY);
    }
  }

  // Get currently logged in account
  static getCurrentAccount(): UserAccount | null {
    const activeId = this.getActiveAccountId();
    if (!activeId) return null;
    const accounts = this.getAccounts();
    return accounts.find((a) => a.id === activeId) || null;
  }

  // Create a brand new account
  static createAccount(params: {
    name: string;
    email: string;
    password: string;
    language?: Language;
    experienceLevel?: ExperienceLevel;
    avatarSeed?: string;
  }): { success: boolean; message: string; account?: UserAccount } {
    const name = params.name.trim();
    const email = params.email.trim().toLowerCase();
    const password = params.password.trim();

    if (!name) {
      return { success: false, message: 'Please enter your full name.' };
    }
    if (!email || !email.includes('@') || !email.includes('.')) {
      return { success: false, message: 'Please enter a valid email address.' };
    }
    if (!password || password.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters long.' };
    }

    const accounts = this.getAccounts();
    const existing = accounts.find((a) => a.email.toLowerCase() === email);
    if (existing) {
      return {
        success: false,
        message: 'An account with this email already exists. Please log in instead.',
      };
    }

    const userId = 'usr-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 6);
    const lang = params.language || 'hinglish';
    const level = params.experienceLevel || 'beginner';
    const avatar = params.avatarSeed || 'robot-hero';

    // Build fresh profile for this user
    const newProfile: UserProfile = {
      id: userId,
      name,
      email,
      isGuest: false,
      avatarSeed: avatar,
      language: lang,
      theme: 'light',
      experienceLevel: level,
      xp: 150, // Welcome bonus XP!
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      completedLessons: [],
      completedQuizzes: {},
      bookmarks: [],
      savedSnippets: [
        {
          id: 'snip-first',
          title: 'Hello World in C++',
          code: `#include <iostream>\n\nint main() {\n    std::cout << "Namaste C++! My journey begins." << std::endl;\n    return 0;\n}`,
          date: new Date().toLocaleDateString(),
        },
      ],
    };

    const newAccount: UserAccount = {
      id: userId,
      name,
      email,
      passwordHash: password,
      avatarSeed: avatar,
      language: lang,
      experienceLevel: level,
      profile: newProfile,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };

    accounts.push(newAccount);
    this.saveAccounts(accounts);
    this.setActiveAccountId(userId);
    saveLocalProfile(newProfile);

    return {
      success: true,
      message: `Account created successfully! Welcome to C++ Learning Buddy, ${name}!`,
      account: newAccount,
    };
  }

  // Log in with email and password
  static login(
    emailInput: string,
    passwordInput: string
  ): { success: boolean; message: string; account?: UserAccount } {
    const email = emailInput.trim().toLowerCase();
    const password = passwordInput.trim();

    if (!email || !password) {
      return { success: false, message: 'Please provide both email and password.' };
    }

    const accounts = this.getAccounts();
    const account = accounts.find((a) => a.email.toLowerCase() === email);

    if (!account) {
      return {
        success: false,
        message: 'No account found with this email. Please check spelling or create an account.',
      };
    }

    if (account.passwordHash !== password) {
      return {
        success: false,
        message: 'Incorrect password. Please try again or use Forgot Password.',
      };
    }

    // Update last login
    account.lastLogin = new Date().toISOString();
    // Update active day streak if needed
    const today = new Date().toISOString().split('T')[0];
    if (account.profile.lastActiveDate !== today) {
      account.profile.streak += 1;
      account.profile.lastActiveDate = today;
    }

    this.saveAccounts(accounts);
    this.setActiveAccountId(account.id);
    saveLocalProfile(account.profile);

    return {
      success: true,
      message: `Welcome back, ${account.name}! Ready to code C++?`,
      account,
    };
  }

  // Log out current account and revert to guest mode
  static logout(): { success: boolean; message: string; guestProfile: UserProfile } {
    this.setActiveAccountId(null);

    // Provide clean guest profile
    const guestProfile: UserProfile = {
      id: 'guest-' + Math.random().toString(36).substring(2, 9),
      name: 'C++ Explorer',
      email: 'guest@cppbuddy.local',
      isGuest: true,
      avatarSeed: 'robot-hero',
      language: 'hinglish',
      theme: 'light',
      experienceLevel: 'beginner',
      xp: 50,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      completedLessons: [],
      completedQuizzes: {},
      bookmarks: [],
      savedSnippets: [],
    };

    saveLocalProfile(guestProfile);
    return {
      success: true,
      message: 'Logged out successfully. You are now in Guest Explorer mode.',
      guestProfile,
    };
  }

  // Reset password simulation
  static resetPassword(
    emailInput: string,
    newPassword: string
  ): { success: boolean; message: string } {
    const email = emailInput.trim().toLowerCase();
    if (!email) {
      return { success: false, message: 'Please enter your registered email address.' };
    }
    if (!newPassword || newPassword.length < 6) {
      return { success: false, message: 'New password must be at least 6 characters long.' };
    }

    const accounts = this.getAccounts();
    const account = accounts.find((a) => a.email.toLowerCase() === email);

    if (!account) {
      return { success: false, message: 'No registered account found with this email.' };
    }

    account.passwordHash = newPassword;
    this.saveAccounts(accounts);
    return {
      success: true,
      message: `Password reset successfully! You can now log in with your new password.`,
    };
  }

  // Sync profile changes into the logged-in user account
  static syncProfileToAccount(profile: UserProfile): void {
    if (profile.isGuest) return;
    const accounts = this.getAccounts();
    const index = accounts.findIndex((a) => a.id === profile.id);
    if (index !== -1) {
      accounts[index].profile = profile;
      accounts[index].name = profile.name;
      accounts[index].language = profile.language;
      accounts[index].experienceLevel = profile.experienceLevel;
      accounts[index].avatarSeed = profile.avatarSeed;
      this.saveAccounts(accounts);
    }
  }
}
