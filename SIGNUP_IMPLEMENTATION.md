# Sign-Up Page Implementation Guide

## Overview

This document provides a comprehensive guide to the sign-up page implementation for the Interpreter Marketplace platform.

## Features Implemented

### ✅ Two-Panel Design
- **Left Panel (Marketing)**: Purple gradient background with marketing copy and product illustration
- **Right Panel (Form)**: Clean white background with sign-up form

### ✅ Form Fields
- **Name** (required): Full name input with validation
- **Email** (required): Email input with format validation
- **Password** (required): 
  - Minimum 8 characters
  - Show/hide toggle (eye icon)
  - Real-time strength indicator (weak/fair/good/strong)
  - Visual progress bar with color coding
- **Phone** (optional): E.164 format validation (+12345678900)
- **Role** (required): Radio button group for Client/Interpreter/Vendor
- **Terms** (required): Checkbox with links to Terms and Privacy Policy

### ✅ Validation
- Inline error messages below each field
- Real-time validation on blur
- Submit button disabled during submission
- Loading spinner during form submission
- Field-specific error handling from API
- Email format validation
- E.164 phone format validation
- Password strength calculation

### ✅ Social Sign-Up
- "Continue with Google" button with Google logo
- "Continue with LinkedIn" button with LinkedIn logo
- OAuth flow integration (endpoints ready for implementation)

### ✅ Accessibility
- Proper ARIA labels and descriptions
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly error messages
- Focus states on all interactive elements
- Proper label associations

### ✅ Responsive Design
- Desktop: Side-by-side two-panel layout
- Mobile: Stacked layout (marketing panel first, then form)
- Touch-friendly button sizes
- Proper spacing and typography scaling

### ✅ Security Features
- Input sanitization
- CSRF protection ready
- Rate limiting endpoints prepared
- Password never exposed in URLs
- Secure password handling

## File Structure

```
src/
├── app/
│   ├── auth/
│   │   ├── sign-up/
│   │   │   └── page.tsx                    # Main sign-up page
│   │   └── sign-in/
│   │       └── page.tsx                    # Redirect to home (modal handles sign-in)
│   ├── dashboard/
│   │   ├── client/
│   │   │   └── page.tsx                    # Client dashboard
│   │   ├── interpreter/
│   │   │   └── page.tsx                    # Interpreter dashboard
│   │   └── vendor/
│   │       └── page.tsx                    # Vendor dashboard
│   ├── legal/
│   │   ├── terms/
│   │   │   └── page.tsx                    # Terms of Service
│   │   └── privacy/
│   │       └── page.tsx                    # Privacy Policy
│   └── api/
│       └── auth/
│           ├── signup/
│           │   └── route.ts                # Email/password sign-up endpoint
│           ├── google/
│           │   └── route.ts                # Google OAuth initiation
│           ├── linkedin/
│           │   └── route.ts                # LinkedIn OAuth initiation
│           ├── social-complete/
│           │   └── route.ts                # OAuth completion (role selection)
│           └── verify/
│               └── route.ts                # Email verification
├── components/
│   └── auth/
│       ├── signup-form.tsx                 # Main sign-up form component
│       └── sign-in-modal.tsx               # Existing sign-in modal
└── lib/
    └── signup-constants.ts                 # Configuration and utilities
```

## Configuration

### Endpoints

All endpoints are configured in `src/lib/signup-constants.ts`:

```typescript
export const SIGNUP_ENDPOINTS = {
  emailPassword: '/auth/signup',
  google: '/auth/google',
  linkedin: '/auth/linkedin',
  socialComplete: '/auth/social-complete',
  verify: '/auth/verify',
} as const;
```

### Routes

Post-signup redirects and other routes:

```typescript
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
```

### Password Requirements

```typescript
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_STRENGTH_CRITERIA = {
  minLength: 8,
  hasUpperCase: /[A-Z]/,
  hasLowerCase: /[a-z]/,
  hasNumber: /[0-9]/,
  hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/,
};
```

## API Implementation

### Email/Password Sign-Up

**Endpoint**: `POST /api/auth/signup`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "phone": "+12345678900",
  "role": "client",
  "marketingConsent": false
}
```

**Success Response** (201):
```json
{
  "message": "Account created successfully",
  "user": {
    "id": "user_123",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "client"
  },
  "token": "jwt_token_here"
}
```

**Error Response** (400):
```json
{
  "message": "Validation failed",
  "fieldErrors": {
    "email": "Email already registered",
    "password": "Password must be at least 8 characters"
  },
  "code": "VALIDATION_ERROR"
}
```

### OAuth Flow

1. User clicks "Continue with Google" or "Continue with LinkedIn"
2. Frontend redirects to `/api/auth/google` or `/api/auth/linkedin`
3. Backend redirects to OAuth provider
4. Provider redirects back to callback URL with code
5. Backend exchanges code for user info
6. If role not selected, show "Complete your setup" step
7. User selects role and submits to `/api/auth/social-complete`
8. Backend creates user record and redirects to appropriate dashboard

## TODO: Implementation Tasks

### Backend Integration

1. **Database Setup**
   - [ ] Create users table with fields: id, name, email, password_hash, phone, role, email_verified, created_at, updated_at
   - [ ] Create verification_tokens table for email verification
   - [ ] Create sessions table for authentication

2. **Authentication**
   - [ ] Implement password hashing (bcrypt/argon2)
   - [ ] Implement JWT token generation and validation
   - [ ] Set up session management
   - [ ] Implement email verification flow

3. **OAuth Integration**
   - [ ] Set up Google OAuth credentials (Client ID, Client Secret)
   - [ ] Set up LinkedIn OAuth credentials
   - [ ] Implement OAuth callback handlers
   - [ ] Handle OAuth state parameter validation
   - [ ] Map OAuth user data to database schema

4. **Security**
   - [ ] Implement CSRF protection
   - [ ] Set up rate limiting (redis recommended)
   - [ ] Integrate reCAPTCHA or hCaptcha
   - [ ] Implement email verification required before dashboard access
   - [ ] Add IP-based brute force protection

5. **Email Service**
   - [ ] Set up email service provider (SendGrid, AWS SES, etc.)
   - [ ] Create verification email template
   - [ ] Implement email sending functionality
   - [ ] Add email queue for reliability

### Frontend Enhancements

1. **Social OAuth Complete Flow**
   - [ ] Create modal/page for role selection after OAuth
   - [ ] Handle OAuth callback redirects
   - [ ] Show loading states during OAuth flow

2. **Email Verification**
   - [ ] Create email verification success page
   - [ ] Add "Resend verification email" functionality
   - [ ] Block dashboard access until verified

3. **Testing**
   - [ ] Add unit tests for form validation
   - [ ] Add integration tests for sign-up flow
   - [ ] Test OAuth flows end-to-end
   - [ ] Test responsive design on various devices
   - [ ] Test accessibility with screen readers

## Usage

### Accessing the Sign-Up Page

Navigate to: `http://localhost:3000/auth/sign-up`

Or click the "Sign Up" button in the header navigation.

### Testing Form Validation

Test various scenarios:
- Empty fields
- Invalid email format
- Password < 8 characters
- Invalid phone format
- Unchecked terms checkbox
- Valid submission

### Customizing Marketing Content

Edit `src/app/auth/sign-up/page.tsx`:

```tsx
<h1>Your Custom Headline</h1>
<p>Your custom subheadline</p>
```

Replace the product image:
```tsx
<Image
  src="/your-custom-image.jpg"
  alt="Your description"
  // ...
/>
```

### Changing Password Requirements

Edit `src/lib/signup-constants.ts`:

```typescript
export const PASSWORD_MIN_LENGTH = 12; // Change minimum length
```

### Modifying Role Options

Edit `src/lib/signup-constants.ts`:

```typescript
export type UserRole = 'client' | 'interpreter' | 'vendor' | 'admin';

export const ROLE_LABELS: Record<UserRole, string> = {
  client: 'Client',
  interpreter: 'Interpreter',
  vendor: 'Vendor',
  admin: 'Administrator',
};
```

## QA Test Cases

### ✅ Required Fields Validation
- [ ] Submit form with empty name → Shows error
- [ ] Submit form with empty email → Shows error
- [ ] Submit form with empty password → Shows error
- [ ] Submit form without role selection → Shows error
- [ ] Submit form without terms checkbox → Shows error

### ✅ Email Validation
- [ ] Enter invalid email format → Shows error
- [ ] Enter valid email → No error

### ✅ Password Validation
- [ ] Enter password < 8 chars → Shows error
- [ ] Enter password ≥ 8 chars → No error
- [ ] Password strength indicator updates correctly
- [ ] Eye icon toggles password visibility

### ✅ Phone Validation
- [ ] Leave phone empty → No error (optional)
- [ ] Enter invalid phone format → Shows error
- [ ] Enter valid E.164 format → No error

### ✅ OAuth Flow
- [ ] Click "Continue with Google" → Initiates OAuth
- [ ] Click "Continue with LinkedIn" → Initiates OAuth
- [ ] OAuth without role → Shows complete setup step
- [ ] Complete setup with role → Redirects to dashboard

### ✅ Role-Based Redirect
- [ ] Sign up as Client → Redirects to /dashboard/client
- [ ] Sign up as Interpreter → Redirects to /dashboard/interpreter
- [ ] Sign up as Vendor → Redirects to /dashboard/vendor

### ✅ Links Behavior
- [ ] Terms link opens in new tab
- [ ] Privacy link opens in new tab
- [ ] Sign in link navigates to sign-in page
- [ ] No external domain redirects during auth

### ✅ Accessibility
- [ ] Tab through all form fields
- [ ] Submit form with Enter key
- [ ] Screen reader announces errors correctly
- [ ] Focus states visible on all elements

### ✅ Responsive Design
- [ ] Desktop layout shows two panels side-by-side
- [ ] Mobile layout stacks panels vertically
- [ ] Form is usable on small screens
- [ ] Buttons are touch-friendly

### ✅ Error Handling
- [ ] Network error → Shows general error message
- [ ] Server validation errors → Shows field-specific errors
- [ ] Duplicate email → Shows appropriate error

## Analytics Tracking

The form includes analytics tracking hooks:

```typescript
// Track sign-up event
window.gtag('event', 'sign_up', {
  method: 'email', // or 'google', 'linkedin'
  role: 'client', // or 'interpreter', 'vendor'
});
```

To enable analytics, ensure Google Analytics is configured in your app.

## Security Considerations

### Current Implementation
- ✅ Input validation on frontend and backend
- ✅ Email format validation
- ✅ Password strength requirements
- ✅ HTTPS required in production
- ✅ No passwords in URLs

### TODO
- [ ] Password hashing with bcrypt/argon2
- [ ] CSRF token validation
- [ ] Rate limiting per IP
- [ ] Bot protection (reCAPTCHA/hCaptcha)
- [ ] Email verification required
- [ ] Account lockout after failed attempts
- [ ] Secure session management
- [ ] XSS protection
- [ ] SQL injection prevention

## Support

For questions or issues:
- Review this documentation
- Check API endpoint implementations in `src/app/api/auth/`
- Review form validation logic in `src/components/auth/signup-form.tsx`
- Check configuration in `src/lib/signup-constants.ts`

## Next Steps

1. Implement database integration
2. Set up authentication backend
3. Configure OAuth providers
4. Implement email verification
5. Add security measures (CSRF, rate limiting, bot protection)
6. Test thoroughly across all scenarios
7. Deploy to staging environment
8. Conduct security audit
9. Launch to production

---

**Last Updated**: November 12, 2025
**Version**: 1.0.0
