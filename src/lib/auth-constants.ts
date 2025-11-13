/**
 * Authentication Configuration
 * 
 * This file contains all authentication endpoints and route configurations.
 * Update these values to point to your actual authentication backend.
 */

export const AUTH_ENDPOINTS = {
  clients: {
    signIn: '/auth/client/sign-in',
    forgot: '/auth/client/forgot',
  },
  interpreters: {
    signIn: '/auth/interpreter/sign-in',
    forgot: '/auth/interpreter/forgot',
  },
  vendors: {
    signIn: '/auth/vendor/sign-in',
    forgot: '/auth/vendor/forgot',
  },
} as const;

export const AUTH_LABELS = {
  clients: {
    title: 'Client Sign In',
    tabLabel: 'Clients',
    emailPlaceholder: 'Email or username',
    passwordPlaceholder: 'Password',
  },
  interpreters: {
    title: 'Interpreter Sign In',
    tabLabel: 'Interpreters',
    emailPlaceholder: 'Email or username',
    passwordPlaceholder: 'Password',
  },
  vendors: {
    title: 'Vendor Sign In',
    tabLabel: 'Vendors',
    emailPlaceholder: 'Email or username',
    passwordPlaceholder: 'Password',
  },
} as const;

export type UserType = keyof typeof AUTH_ENDPOINTS;
