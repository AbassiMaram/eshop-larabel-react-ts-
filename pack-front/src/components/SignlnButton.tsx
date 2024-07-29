// src/components/SignInButton.tsx
import React from 'react';
import { useAuthContext } from '../contexts/auth.context'; // Use the custom hook instead of direct import
import './sign-in-button.styles.scss'; // Ensure this file exists

const SignInButton: React.FC = () => {
  const { signInUrl } = useAuthContext(); // Use the custom hook to access context values

  const handleSignIn = () => {
    if (signInUrl) {
      window.location.href = signInUrl; // Redirect to sign-in URL
    }
  };

  return (
    <button onClick={handleSignIn} className="sign-in-button">
      Sign In
    </button>
  );
};

export default SignInButton;
