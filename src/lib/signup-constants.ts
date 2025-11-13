/**
 * Sign Up Configuration
 * 
 * This file contains all sign-up endpoints and route configurations.
 * Update these values to point to your actual authentication backend.
 */

export const SIGNUP_ENDPOINTS = {
  emailPassword: '/auth/signup',
  google: '/auth/google',
  linkedin: '/auth/linkedin',
  socialComplete: '/auth/social-complete',
  verify: '/auth/verify',
} as const;

export const SIGNUP_ROUTES = {
  signIn: '/auth/sign-in',
  terms: '/legal/terms',
  privacy: '/legal/privacy',
  dashboards: {
    client: '/dashboard/client',
    interpreter: '/dashboard/interpreter',
    vendor: '/dashboard/vendor',
  },
} as const;

export type UserRole = 'client' | 'interpreter' | 'vendor';

export const ROLE_LABELS: Record<UserRole, string> = {
  client: 'Client',
  interpreter: 'Interpreter',
  vendor: 'Vendor',
};

export const PASSWORD_MIN_LENGTH = 8;

export const PASSWORD_STRENGTH_CRITERIA = {
  minLength: PASSWORD_MIN_LENGTH,
  hasUpperCase: /[A-Z]/,
  hasLowerCase: /[a-z]/,
  hasNumber: /[0-9]/,
  hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/,
} as const;

export function calculatePasswordStrength(password: string): {
  score: number;
  label: 'weak' | 'fair' | 'good' | 'strong';
  color: string;
} {
  let score = 0;
  
  if (password.length >= PASSWORD_STRENGTH_CRITERIA.minLength) score++;
  if (PASSWORD_STRENGTH_CRITERIA.hasUpperCase.test(password)) score++;
  if (PASSWORD_STRENGTH_CRITERIA.hasLowerCase.test(password)) score++;
  if (PASSWORD_STRENGTH_CRITERIA.hasNumber.test(password)) score++;
  if (PASSWORD_STRENGTH_CRITERIA.hasSpecialChar.test(password)) score++;
  
  if (score <= 1) return { score, label: 'weak', color: '#EF4444' };
  if (score === 2) return { score, label: 'fair', color: '#F97316' };
  if (score === 3) return { score, label: 'good', color: '#EAB308' };
  return { score, label: 'strong', color: '#22C55E' };
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  // E.164 format: +[country code][subscriber number]
  const e164Regex = /^\+[1-9]\d{1,14}$/;
  return e164Regex.test(phone);
}
