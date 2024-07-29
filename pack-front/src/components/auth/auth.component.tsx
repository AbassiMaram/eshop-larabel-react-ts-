// src/components/auth/auth.component.tsx
import React from 'react';
import { useAuthContext } from '../../contexts/auth.context'; // Make sure this path is correct

const Auth: React.FC = () => {
  const { token, signInUrl } = useAuthContext(); // Use the hook

  return (
    <div className="authentication-container">
      {/* Your component logic */}
    </div>
  );
};

export default Auth;
