'use client';

import { useState, FormEvent, useEffect } from 'react';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  SIGNUP_ENDPOINTS,
  SIGNUP_ROUTES,
  UserRole,
  ROLE_LABELS,
  PASSWORD_MIN_LENGTH,
  calculatePasswordStrength,
  validateEmail,
  validatePhone,
} from '@/lib/signup-constants';

interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: UserRole | '';
  termsAccepted: boolean;
  marketingConsent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  role?: string;
  termsAccepted?: string;
  general?: string;
}

export default function SignupForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: '',
    termsAccepted: false,
    marketingConsent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, label: 'weak' as const, color: '#EF4444' });
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (formData.password) {
      setPasswordStrength(calculatePasswordStrength(formData.password));
    }
  }, [formData.password]);

  const handleFieldBlur = (fieldName: string) => {
    setTouchedFields(prev => new Set(prev).add(fieldName));
    validateField(fieldName);
  };

  const validateField = (fieldName: string) => {
    const newErrors: FormErrors = { ...errors };

    switch (fieldName) {
      case 'name':
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
        } else {
          delete newErrors.name;
        }
        break;

      case 'email':
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;

      case 'password':
        if (!formData.password) {
          newErrors.password = 'Password is required';
        } else if (formData.password.length < PASSWORD_MIN_LENGTH) {
          newErrors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters`;
        } else {
          delete newErrors.password;
        }
        break;

      case 'phone':
        if (formData.phone && !validatePhone(formData.phone)) {
          newErrors.phone = 'Please enter a valid phone number';
        } else {
          delete newErrors.phone;
        }
        break;

      case 'role':
        if (!formData.role) {
          newErrors.role = 'Please select your role';
        } else {
          delete newErrors.role;
        }
        break;

      case 'termsAccepted':
        if (!formData.termsAccepted) {
          newErrors.termsAccepted = 'You must agree to the Terms and Privacy Policy';
        } else {
          delete newErrors.termsAccepted;
        }
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < PASSWORD_MIN_LENGTH) {
      newErrors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters`;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must agree to the Terms and Privacy Policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch(SIGNUP_ENDPOINTS.emailPassword, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          password: formData.password,
          phone: formData.phone.trim() || null,
          role: formData.role,
          marketingConsent: formData.marketingConsent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        
        if (errorData.fieldErrors) {
          setErrors(errorData.fieldErrors);
          return;
        }
        
        throw new Error(errorData.message || 'Sign up failed. Please try again.');
      }

      const data = await response.json();

      // Track success event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'sign_up', {
          method: 'email',
          role: formData.role,
        });
      }

      // Redirect based on role
      const redirectUrl = SIGNUP_ROUTES.dashboards[formData.role as UserRole];
      window.location.href = redirectUrl;
    } catch (error) {
      setErrors({
        general: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialSignup = async (provider: 'google' | 'linkedin') => {
    try {
      // Track event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'sign_up', {
          method: provider,
        });
      }

      // Redirect to OAuth provider
      const endpoint = provider === 'google' ? SIGNUP_ENDPOINTS.google : SIGNUP_ENDPOINTS.linkedin;
      window.location.href = endpoint;
    } catch (error) {
      setErrors({
        general: `Failed to initiate ${provider} sign up. Please try again.`,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* General Error Message */}
      {errors.general && (
        <div
          role="alert"
          className="p-2.5 bg-red-50 border border-red-200 rounded text-red-800 text-xs leading-relaxed"
        >
          {errors.general}
        </div>
      )}

      {/* Name Field */}
      <div>
        <Label htmlFor="name" className="text-xs font-semibold text-gray-900 mb-1.5 block">
          Full Name
        </Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onBlur={() => handleFieldBlur('name')}
          placeholder="John Doe"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`h-10 text-sm ${errors.name && touchedFields.has('name') ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
          autoComplete="name"
          disabled={isSubmitting}
        />
        {errors.name && touchedFields.has('name') && (
          <p id="name-error" role="alert" className="mt-1 text-xs text-red-600 font-medium">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <Label htmlFor="email" className="text-xs font-semibold text-gray-900 mb-1.5 block">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onBlur={() => handleFieldBlur('email')}
          placeholder="you@company.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`h-10 text-sm ${errors.email && touchedFields.has('email') ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
          autoComplete="email"
          disabled={isSubmitting}
        />
        {errors.email && touchedFields.has('email') && (
          <p id="email-error" role="alert" className="mt-1 text-xs text-red-600 font-medium">
            {errors.email}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <Label htmlFor="password" className="text-xs font-semibold text-gray-900 mb-1.5 block">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            onBlur={() => handleFieldBlur('password')}
            placeholder="Create a strong password"
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'password-error password-strength' : 'password-strength'}
            className={`h-10 text-sm pr-10 ${errors.password && touchedFields.has('password') ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            autoComplete="new-password"
            disabled={isSubmitting}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            disabled={isSubmitting}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {formData.password && (
          <div id="password-strength" className="mt-1.5">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-300 rounded-full"
                  style={{
                    width: `${(passwordStrength.score / 5) * 100}%`,
                    backgroundColor: passwordStrength.color,
                  }}
                />
              </div>
              <span className="text-[10px] font-semibold capitalize min-w-[50px] text-right" style={{ color: passwordStrength.color }}>
                {passwordStrength.label}
              </span>
            </div>
          </div>
        )}
        {errors.password && touchedFields.has('password') && (
          <p id="password-error" role="alert" className="mt-1 text-xs text-red-600 font-medium">
            {errors.password}
          </p>
        )}
      </div>

      {/* Phone Field (Optional) */}
      <div>
        <Label htmlFor="phone" className="text-xs font-semibold text-gray-900 mb-1.5 block">
          Phone Number <span className="text-gray-500 font-normal">(optional)</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          onBlur={() => handleFieldBlur('phone')}
          placeholder="+1 (555) 000-0000"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={`h-10 text-sm ${errors.phone && touchedFields.has('phone') ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
          autoComplete="tel"
          disabled={isSubmitting}
        />
        {errors.phone && touchedFields.has('phone') && (
          <p id="phone-error" role="alert" className="mt-1 text-xs text-red-600 font-medium">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Role Selector - Card Based */}
      <div>
        <Label className="text-xs font-semibold text-gray-900 mb-2 block">
          I am a:
        </Label>
        <div className="grid grid-cols-3 gap-2">
          {(Object.keys(ROLE_LABELS) as UserRole[]).map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => {
                setFormData({ ...formData, role });
                setTouchedFields(prev => new Set(prev).add('role'));
                setErrors(prev => ({ ...prev, role: undefined }));
              }}
              disabled={isSubmitting}
              className={`relative p-3 rounded-lg border-2 transition-all duration-200 text-center ${
                formData.role === role
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              aria-pressed={formData.role === role}
            >
              <div className="text-xs font-semibold text-gray-900 leading-tight">
                {ROLE_LABELS[role]}
              </div>
              {formData.role === role && (
                <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
        {errors.role && touchedFields.has('role') && (
          <p id="role-error" role="alert" className="mt-1.5 text-xs text-red-600 font-medium">
            {errors.role}
          </p>
        )}
      </div>

      {/* Terms Checkbox */}
      <div className="space-y-3 pt-1">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.termsAccepted}
            onCheckedChange={(checked) => {
              setFormData({ ...formData, termsAccepted: checked as boolean });
              setTouchedFields(prev => new Set(prev).add('termsAccepted'));
              setErrors(prev => ({ ...prev, termsAccepted: undefined }));
            }}
            aria-invalid={!!errors.termsAccepted}
            aria-describedby={errors.termsAccepted ? 'terms-error' : undefined}
            disabled={isSubmitting}
            className="mt-0.5"
          />
          <Label htmlFor="terms" className="text-xs font-normal leading-relaxed cursor-pointer text-gray-700">
            I agree to the{' '}
            <a
              href={SIGNUP_ROUTES.terms}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href={SIGNUP_ROUTES.privacy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Privacy Policy
            </a>
          </Label>
        </div>
        {errors.termsAccepted && touchedFields.has('termsAccepted') && (
          <p id="terms-error" role="alert" className="text-xs text-red-600 font-medium">
            {errors.termsAccepted}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-10 text-sm font-semibold shadow-sm hover:shadow transition-shadow"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          'Create Account'
        )}
      </Button>

      {/* Divider */}
      <div className="relative py-1">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="px-3 bg-white text-gray-500 font-medium">or continue with</span>
        </div>
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => handleSocialSignup('google')}
          disabled={isSubmitting}
          className="h-10 text-sm font-medium border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors"
        >
          <svg className="mr-1.5 h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => handleSocialSignup('linkedin')}
          disabled={isSubmitting}
          className="h-10 text-sm font-medium border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors"
        >
          <svg className="mr-1.5 h-4 w-4" fill="#0A66C2" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </Button>
      </div>

      {/* Sign In Link */}
      <div className="text-center pt-2">
        <p className="text-xs text-gray-600">
          Already have an account?{' '}
          <a href={SIGNUP_ROUTES.signIn} className="text-primary hover:underline font-semibold">
            Sign in
          </a>
        </p>
      </div>
    </form>
  );
}