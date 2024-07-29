import React from 'react';

const LogoutRedirect: React.FC = () => {
  React.useEffect(() => {
    sessionStorage.clear();
    window.location.replace("http://localhost:3000");
  }, []);

  return null; // Le composant n'affiche rien
};

export default LogoutRedirect;
