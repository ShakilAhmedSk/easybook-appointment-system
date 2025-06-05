import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // ⏳ Restore auth state from cookie on page load
  useEffect(() => {
    const token = Cookies.get("jwt_token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
        setLoggedIn(true);
      } catch (error) {
        console.error("Invalid token:", error);
        Cookies.remove("jwt_token");
      }
    }
  }, []);

  // ✅ Call this on successful login
  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
      setLoggedIn(true);
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  // ✅ Call this to logout
  const logout = () => {
    Cookies.remove("jwt_token");
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
