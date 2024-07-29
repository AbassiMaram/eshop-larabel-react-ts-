// src/components/auth/googleSignInRedirect.component.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth.context'; // Importez le hook

const GoogleSignInRedirect: React.FC = () => {
  const location = useLocation();
  const { signInUrl } = useAuthContext(); // Utilisez le hook pour accéder au contexte

  useEffect(() => {
    // Votre logique ici
  }, [location, signInUrl]);

  return <div>{/* Contenu de votre composant */}</div>;
};

export default GoogleSignInRedirect;
