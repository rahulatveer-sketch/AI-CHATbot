import { UserProfile, Language, ExperienceLevel } from '../types';
import { saveLocalProfile, getLocalProfile, syncProfileWithCloud } from './supabase';

export interface StoredAccount {
  id: string;
  name: string;
  email: string;
  passwordHash: string; // simple obfuscated string for local simulation
  experienceLevel: ExperienceLevel;
  language: Language;
  createdAt: string;
  profileData?: UserProfile;
}

const ACCOUNTS_STORAGE_KEY = 'cpp_learning_buddy_registered_accounts_v1';
const CURRENT_AUTH_EMAIL_KEY = 'cpp_learning_buddy_auth_current_email';

// Retrieve all accounts registered on this browser
export function getRegisteredAccounts(): StoredAccount[] {
  try {
    const raw = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Failed to read registered accounts:', err);
  }
  return [];
}

// Save accounts array
function saveRegisteredAccounts(accounts: StoredAccount[]): void {
  try {
    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
  } catch (err) {
    console.error('Failed to save registered accounts:', err);
  }
}

// Simple deterministic hash for password checking
function simpleHash(text: string): string {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return 'h_' + Math.abs(hash).toString(16);
}

// Register a new user account
export function registerUser(params: {
  name: string;
  email: string;
  password: string;
  experienceLevel?: ExperienceLevel;
  language?: Language;
  currentProfile: UserProfile;
}): { success: boolean; message: string; profile?: UserProfile } {
  const emailClean = params.email.trim().toLowerCase();
  const nameClean = params.name.trim();

  if (!emailClean || !nameClean || !params.password) {
    return { success: false, message: 'Please fill in all required fields.' };
  }

  if (params.password.length < 6) {
    return { success: false, message: 'Password must be at least 6 characters long.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailClean)) {
    return { success: false, message: 'Please provide a valid email address.' };
  }

  const accounts = getRegisteredAccounts();
  const existing = accounts.find((a) => a.email.toLowerCase() === emailClean);

  if (existing) {
    return {
      success: false,
      message: 'An account with this email already exists. Please switch to Sign In.',
    };
  }

  // Create new profile by copying current progress or creating fresh
  const newProfile: UserProfile = {
    ...params.currentProfile,
    id: 'user_' + Math.random().toString(36).substring(2, 10),
    name: nameClean,
    email: emailClean,
    isGuest: false,
    experienceLevel: params.experienceLevel || params.currentProfile.experienceLevel || 'beginner',
    language: params.language || params.currentProfile.language || 'hinglish',
  };

  const newAccount: StoredAccount = {
    id: newProfile.id,
    name: nameClean,
    email: emailClean,
    passwordHash: simpleHash(params.password),
    experienceLevel: newProfile.experienceLevel,
    language: newProfile.language,
    createdAt: new Date().toISOString(),
    profileData: newProfile,
  };

  accounts.push(newAccount);
  saveRegisteredAccounts(accounts);
  saveLocalProfile(newProfile);
  localStorage.setItem(CURRENT_AUTH_EMAIL_KEY, emailClean);
  syncProfileWithCloud(newProfile).catch(() => {});

  return {
    success: true,
    message: `Account created successfully! Welcome, ${nameClean}! 🎉`,
    profile: newProfile,
  };
}

// Sign in an existing user
export function loginUser(params: {
  email: string;
  password: string;
  currentProfile: UserProfile;
}): { success: boolean; message: string; profile?: UserProfile } {
  const emailClean = params.email.trim().toLowerCase();
  if (!emailClean || !params.password) {
    return { success: false, message: 'Please enter both email and password.' };
  }

  const accounts = getRegisteredAccounts();
  const existing = accounts.find((a) => a.email.toLowerCase() === emailClean);

  if (!existing) {
    // If not found in local registry, create an instant account or verify demo
    const nameFromEmail = emailClean.split('@')[0].replace(/[._]/g, ' ');
    const formattedName =
      nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);

    const newProfile: UserProfile = {
      ...params.currentProfile,
      id: 'user_' + Math.random().toString(36).substring(2, 10),
      name: formattedName,
      email: emailClean,
      isGuest: false,
    };

    const newAccount: StoredAccount = {
      id: newProfile.id,
      name: formattedName,
      email: emailClean,
      passwordHash: simpleHash(params.password),
      experienceLevel: newProfile.experienceLevel,
      language: newProfile.language,
      createdAt: new Date().toISOString(),
      profileData: newProfile,
    };

    accounts.push(newAccount);
    saveRegisteredAccounts(accounts);
    saveLocalProfile(newProfile);
    localStorage.setItem(CURRENT_AUTH_EMAIL_KEY, emailClean);
    syncProfileWithCloud(newProfile).catch(() => {});

    return {
      success: true,
      message: `Welcome to C++ Learning Buddy, ${formattedName}! Signed in successfully.`,
      profile: newProfile,
    };
  }

  // Account found: check password
  if (existing.passwordHash !== simpleHash(params.password)) {
    return {
      success: false,
      message: 'Incorrect password. Please try again or use the reset helper.',
    };
  }

  // Load user's saved profile or merge
  const loadedProfile: UserProfile = existing.profileData || {
    ...params.currentProfile,
    id: existing.id,
    name: existing.name,
    email: existing.email,
    isGuest: false,
    experienceLevel: existing.experienceLevel,
    language: existing.language,
  };

  saveLocalProfile(loadedProfile);
  localStorage.setItem(CURRENT_AUTH_EMAIL_KEY, emailClean);
  syncProfileWithCloud(loadedProfile).catch(() => {});

  return {
    success: true,
    message: `Welcome back, ${existing.name}! Your progress is synced. 🚀`,
    profile: loadedProfile,
  };
}

// Reset password for a registered account
export function resetUserPassword(
  email: string,
  newPassword: string
): { success: boolean; message: string } {
  const emailClean = email.trim().toLowerCase();
  const accounts = getRegisteredAccounts();
  const index = accounts.findIndex((a) => a.email.toLowerCase() === emailClean);

  if (index === -1) {
    return {
      success: false,
      message: `No account found with ${emailClean}. You can create a new account!`,
    };
  }

  if (newPassword.length < 6) {
    return {
      success: false,
      message: 'New password must be at least 6 characters.',
    };
  }

  accounts[index].passwordHash = simpleHash(newPassword);
  saveRegisteredAccounts(accounts);
  return {
    success: true,
    message: `Password updated successfully! You can now sign in with your new password.`,
  };
}

// Sign out and revert to guest mode
export function logoutToGuest(): UserProfile {
  localStorage.removeItem(CURRENT_AUTH_EMAIL_KEY);
  const guestProfile: UserProfile = {
    ...getLocalProfile(),
    id: 'guest-' + Math.random().toString(36).substring(2, 9),
    name: 'C++ Explorer',
    email: 'guest@cppbuddy.local',
    isGuest: true,
  };
  saveLocalProfile(guestProfile);
  return guestProfile;
}
