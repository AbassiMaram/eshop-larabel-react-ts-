// src/contexts/auth.context.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface AuthContextType {
  // Define your context values here
  token?: string;
  signInUrl?: string;
  setToken?: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSignInUrl?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [signInUrl, setSignInUrl] = useState<string | undefined>(undefined);

  return (
    <AuthContext.Provider value={{ token, signInUrl, setToken, setSignInUrl }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
