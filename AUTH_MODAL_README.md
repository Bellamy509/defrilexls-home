# Sign In Modal Documentation

## Overview

The Sign In Modal is a tabbed authentication interface that supports three user types: Clients, Interpreters, and Vendors. It provides a secure, accessible, and user-friendly way for users to authenticate on your platform.

## Features

- ✅ Three-tab interface (Clients, Interpreters, Vendors)
- ✅ Modal dialog with focus trap
- ✅ ESC key, X button, and backdrop click to close
- ✅ Keyboard navigation support (Arrow keys for tabs)
- ✅ Password visibility toggle
- ✅ Form validation with inline error messages
- ✅ Loading state with spinner
- ✅ Fully accessible (ARIA attributes, semantic HTML)
- ✅ Responsive design (mobile and desktop)
- ✅ No external redirects - stays on your domain

## Configuration

### Changing Endpoints

All authentication endpoints are configured in `src/lib/auth-constants.ts`:

```typescript
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
};
```

**To change endpoints:**

1. Open `src/lib/auth-constants.ts`
2. Update the endpoint URLs for the specific user type(s)
3. Save the file - changes will be reflected automatically

### Changing Labels and Text

All labels and text are also configured in `src/lib/auth-constants.ts`:

```typescript
export const AUTH_LABELS = {
  clients: {
    title: 'Client Sign In',
    tabLabel: 'Clients',
    emailPlaceholder: 'Email or username',
    passwordPlaceholder: 'Password',
  },
  // ... similar for interpreters and vendors
};
```

**To change labels:**

1. Open `src/lib/auth-constants.ts`
2. Update the label values for the specific user type(s)
3. Save the file

## Usage

### Basic Usage

The modal is already integrated into the header. Clicking the "Sign in" button will open the modal:

```tsx
import SignInModal from '@/components/auth/sign-in-modal';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Sign In</button>
      <SignInModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}
```

### Opening with Specific Tab

You can specify which tab should be active by default:

```tsx
<SignInModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  defaultTab="interpreters" // Options: 'clients' | 'interpreters' | 'vendors'
/>
```

## API Integration

The modal sends a POST request to the configured endpoint with the following payload:

```json
{
  "email": "user@example.com",
  "password": "userpassword"
}
```

### Expected Response Format

**Success Response (200 OK):**

```json
{
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "name": "User Name"
  }
}
```

**Error Response (401 Unauthorized or 400 Bad Request):**

```json
{
  "message": "Invalid credentials"
}
```

### Implementing Success Handler

Update the `handleSubmit` function in `src/components/auth/sign-in-modal.tsx`:

```typescript
// After successful response
const data = await response.json();

// Store authentication token
localStorage.setItem('authToken', data.token);

// Redirect user to appropriate dashboard
if (activeTab === 'clients') {
  window.location.href = '/client-dashboard';
} else if (activeTab === 'interpreters') {
  window.location.href = '/interpreter-dashboard';
} else if (activeTab === 'vendors') {
  window.location.href = '/vendor-dashboard';
}

onClose();
```

## Security Features

- ✅ Credentials never exposed in URLs
- ✅ Password field with autocomplete="current-password"
- ✅ CSRF protection ready (add CSRF token to requests)
- ✅ Input sanitization (trim email/username)
- ✅ Validation before submission
- ✅ Rate limiting should be implemented on backend

### Adding CSRF Protection

To add CSRF token support:

1. Get CSRF token from your backend
2. Include it in the request headers:

```typescript
const response = await fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken, // Add this
  },
  body: JSON.stringify({
    email: email.trim(),
    password: password,
  }),
});
```

## Analytics Integration

The modal includes optional analytics tracking. It currently tracks sign-in success events using Google Analytics (if available):

```typescript
if (typeof window !== 'undefined' && (window as any).gtag) {
  (window as any).gtag('event', 'login', {
    method: activeTab,
  });
}
```

### Adding Custom Analytics

To track additional events (modal open, tab switches, errors), add tracking calls:

```typescript
// Track modal open
useEffect(() => {
  if (isOpen) {
    trackEvent('modal_open', { modal: 'sign_in' });
  }
}, [isOpen]);

// Track tab switches
const setActiveTabWithTracking = (tab: UserType) => {
  setActiveTab(tab);
  trackEvent('tab_switch', { tab });
};
```

## Testing

Unit tests are located in `src/components/auth/__tests__/sign-in-modal.test.tsx`.

**Run tests:**

```bash
npm test
# or
npm test -- sign-in-modal
```

**Test Coverage:**

- Modal open/close functionality
- Tab switching and keyboard navigation
- Form validation
- Password visibility toggle
- Backdrop and ESC key handling
- Form reset on close/tab switch
- Disabled state during submission

## Accessibility

The modal follows WCAG 2.1 AA standards:

- ✅ Semantic HTML with proper ARIA attributes
- ✅ Keyboard navigation (Tab, Arrow keys, ESC)
- ✅ Focus trap when modal is open
- ✅ Visible focus indicators
- ✅ Screen reader announcements for errors
- ✅ Proper labeling of all form inputs
- ✅ Color contrast compliance

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Troubleshooting

### Modal doesn't open

Check that `isOpen` prop is being set to `true` when the trigger button is clicked.

### Form submission doesn't work

1. Check browser console for errors
2. Verify endpoint URLs in `src/lib/auth-constants.ts`
3. Check network tab to see if request is being sent
4. Verify backend is running and accepting requests

### Styling issues

The modal uses Tailwind CSS classes. Make sure Tailwind is properly configured in your project.

## Future Enhancements

Potential improvements:

- [ ] Remember me checkbox
- [ ] Social login options (Google, Microsoft, etc.)
- [ ] Two-factor authentication support
- [ ] Password strength indicator
- [ ] Biometric authentication support

## Support

For issues or questions, please contact your development team or refer to the main project documentation.
