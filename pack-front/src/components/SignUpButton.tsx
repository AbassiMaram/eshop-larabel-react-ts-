// src/components/SignUpButton.tsx
import React from 'react';
import { useAuthContext } from '../contexts/auth.context'; // Use the correct hook
import './sign-up-button.styles.scss'; // Ensure this file exists

const SignUpButton: React.FC = () => {
  const { signInUrl } = useAuthContext(); // Use the hook to access context values

  const handleSignUp = () => {
    if (signInUrl) {
      window.location.href = signInUrl; // Redirect to sign-in URL
    }
  };

  return (
    <button onClick={handleSignUp} className="sign-up-button">
      Sign Up
    </button>
  );
};

export default SignUpButton;
