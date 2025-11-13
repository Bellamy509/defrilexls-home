'use client';

import { useState, useEffect, FormEvent } from 'react';
import { X, Eye, EyeOff, Loader2 } from 'lucide-react';
import { AUTH_ENDPOINTS, AUTH_LABELS, UserType } from '@/lib/auth-constants';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: UserType;
}

export default function SignInModal({ isOpen, onClose, defaultTab = 'clients' }: SignInModalProps) {
  const [activeTab, setActiveTab] = useState<UserType>(defaultTab);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});

  // Reset form when modal opens/closes or tab changes
  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setPassword('');
      setShowPassword(false);
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen]);

  useEffect(() => {
    setEmail('');
    setPassword('');
    setShowPassword(false);
    setErrors({});
  }, [activeTab]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle keyboard navigation for tabs
  const handleTabKeyDown = (e: React.KeyboardEvent, tab: UserType) => {
    const tabs: UserType[] = ['clients', 'interpreters', 'vendors'];
    const currentIndex = tabs.indexOf(activeTab);
    
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
      setActiveTab(tabs[prevIndex]);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
      setActiveTab(tabs[nextIndex]);
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!email.trim()) {
      newErrors.email = 'Email or username is required';
    }
    
    if (!password.trim()) {
      newErrors.password = 'Password is required';
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
      const endpoint = AUTH_ENDPOINTS[activeTab].signIn;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Sign in failed. Please check your credentials.');
      }
      
      const data = await response.json();
      
      // Track success event (optional analytics)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'login', {
          method: activeTab,
        });
      }
      
      // Handle successful sign in
      console.log('Sign in successful:', data);
      
      // TODO: Store authentication token and redirect user
      // Example: localStorage.setItem('authToken', data.token);
      // Example: window.location.href = '/dashboard';
      
      onClose();
    } catch (error) {
      setErrors({
        general: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const currentLabels = AUTH_LABELS[activeTab];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          aria-label="Close dialog"
        >
          <X className="h-6 w-6 text-gray-500" />
        </button>

        {/* Modal Content */}
        <div className="p-8 md:p-12">
          {/* Title */}
          <h2 id="modal-title" className="text-3xl md:text-4xl font-bold text-center mb-8 text-dark-text">
            {currentLabels.title}
          </h2>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Sign in options"
            className="flex border-b border-gray-300 mb-8"
          >
            {(['clients', 'interpreters', 'vendors'] as UserType[]).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`${tab}-panel`}
                id={`${tab}-tab`}
                tabIndex={activeTab === tab ? 0 : -1}
                onClick={() => setActiveTab(tab)}
                onKeyDown={(e) => handleTabKeyDown(e, tab)}
                className={`flex-1 py-3 text-base md:text-lg font-medium transition-colors relative ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {AUTH_LABELS[tab].tabLabel}
              </button>
            ))}
          </div>

          {/* Form */}
          <div
            role="tabpanel"
            id={`${activeTab}-panel`}
            aria-labelledby={`${activeTab}-tab`}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* General Error Message */}
              {errors.general && (
                <div
                  role="alert"
                  className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm"
                >
                  {errors.general}
                </div>
              )}

              {/* Email/Username Field */}
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                  Email or username <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={currentLabels.emailPlaceholder}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-4 py-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  autoComplete="username"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-base font-medium text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={currentLabels.passwordPlaceholder}
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? 'password-error' : undefined}
                    className={`w-full px-4 py-3 pr-12 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    autoComplete="current-password"
                    disabled={isSubmitting}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    disabled={isSubmitting}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" role="alert" className="mt-1 text-sm text-red-600">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-6 rounded-md text-base font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>

              {/* Forgot Password Link */}
              <div className="text-center">
                <a
                  href={AUTH_ENDPOINTS[activeTab].forgot}
                  className="text-primary hover:underline text-base font-normal"
                >
                  Forgot username or password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
