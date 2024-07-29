import { useEffect } from "react";

const Logout: React.FC = () => {
  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/auth/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token") ?? ""}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        sessionStorage.clear();
        window.location.replace(data.url);
      } catch (error) {
        console.error("There was an error with the logout operation:", error);
      }
    };

    handleLogout();
  }, []);

  return null; // Le composant n'affiche rien
};

export default Logout;
