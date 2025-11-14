import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignInModal from '../sign-in-modal';

describe('SignInModal', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('should not render when isOpen is false', () => {
    render(<SignInModal isOpen={false} onClose={mockOnClose} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render when isOpen is true', () => {
    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should display the correct title for default tab (clients)', () => {
    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText('Client Sign In')).toBeInTheDocument();
  });

  it('should switch tabs when clicked', async () => {
    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    const interpretersTab = screen.getByRole('tab', { name: /interpreters/i });
    fireEvent.click(interpretersTab);
    
    expect(screen.getByText('Interpreter Sign In')).toBeInTheDocument();
  });

  it('should switch to vendors tab', async () => {
    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    const vendorsTab = screen.getByRole('tab', { name: /vendors/i });
    fireEvent.click(vendorsTab);
    
    expect(screen.getByText('Vendor Sign In')).toBeInTheDocument();
  });

  it('should handle keyboard navigation (Arrow keys)', () => {
    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    const clientsTab = screen.getByRole('tab', { name: /clients/i });
    clientsTab.focus();
    
    // Press ArrowRight to move to next tab
    fireEvent.keyDown(clientsTab, { key: 'ArrowRight' });
    expect(screen.getByText('Interpreter Sign In')).toBeInTheDocument();
    
    // Press ArrowRight again
    const interpretersTab = screen.getByRole('tab', { name: /interpreters/i });
    fireEvent.keyDown(interpretersTab, { key: 'ArrowRight' });
    expect(screen.getByText('Vendor Sign In')).toBeInTheDocument();
    
    // Press ArrowLeft to go back
    const vendorsTab = screen.getByRole('tab', { name: /vendors/i });
    fireEvent.keyDown(vendorsTab, { key: 'ArrowLeft' });
    expect(screen.getByText('Interpreter Sign In')).toBeInTheDocument();
  });

  it('should close modal when close button is clicked', () => {
    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    const closeButton = screen.getByLabelText(/close dialog/i);
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should close modal when ESC key is pressed', () => {
    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    fireEvent.keyDown(document, { key: 'Escape' });
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should close modal when backdrop is clicked', () => {
    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    const backdrop = screen.getByRole('dialog').parentElement;
    if (backdrop) {
      fireEvent.click(backdrop);
    }
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should not close modal when clicking inside the modal content', () => {
    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    const modalContent = screen.getByText('Client Sign In');
    fireEvent.click(modalContent);
    
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('should show validation errors for empty fields', async () => {
    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    const submitButton = screen.getByRole('button', { name: /sign in/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Email or username is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
    });
  });

  it('should toggle password visibility', () => {
    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    const passwordInput = screen.getByLabelText(/^password/i) as HTMLInputElement;
    const toggleButton = screen.getByLabelText(/show password/i);
    
    expect(passwordInput.type).toBe('password');
    
    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe('text');
    
    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe('password');
  });

  it('should reset form when modal is closed and reopened', () => {
    const { rerender } = render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    const emailInput = screen.getByLabelText(/email or username/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/^password/i) as HTMLInputElement;
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
    
    // Close modal
    rerender(<SignInModal isOpen={false} onClose={mockOnClose} />);
    
    // Reopen modal
    rerender(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    const newEmailInput = screen.getByLabelText(/email or username/i) as HTMLInputElement;
    const newPasswordInput = screen.getByLabelText(/^password/i) as HTMLInputElement;
    
    expect(newEmailInput.value).toBe('');
    expect(newPasswordInput.value).toBe('');
  });

  it('should reset form when switching tabs', () => {
    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    const emailInput = screen.getByLabelText(/email or username/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/^password/i) as HTMLInputElement;
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    // Switch to Interpreters tab
    const interpretersTab = screen.getByRole('tab', { name: /interpreters/i });
    fireEvent.click(interpretersTab);
    
    const newEmailInput = screen.getByLabelText(/email or username/i) as HTMLInputElement;
    const newPasswordInput = screen.getByLabelText(/^password/i) as HTMLInputElement;
    
    expect(newEmailInput.value).toBe('');
    expect(newPasswordInput.value).toBe('');
  });

  it('should disable form inputs and button while submitting', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: async () => ({ token: 'fake-token' }),
      } as Response)
    );

    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    const emailInput = screen.getByLabelText(/email or username/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/^password/i) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: /sign in/i }) as HTMLButtonElement;
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
    
    // Check that inputs and button are disabled during submission
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });

  it('should display forgot password link with correct href', () => {
    render(<SignInModal isOpen={true} onClose={mockOnClose} />);
    
    const forgotLink = screen.getByText(/forgot username or password/i);
    expect(forgotLink).toHaveAttribute('href', '/auth/client/forgot');
    
    // Switch to Interpreters tab
    const interpretersTab = screen.getByRole('tab', { name: /interpreters/i });
    fireEvent.click(interpretersTab);
    
    const interpretersForgotLink = screen.getByText(/forgot username or password/i);
    expect(interpretersForgotLink).toHaveAttribute('href', '/auth/interpreter/forgot');
  });
});
