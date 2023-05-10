import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from local storage on component mount
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = (data) => {
    // Perform login logic and set user state
    setUser({ data });

    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify({ data }));
  };

  const logout = () => {
    // Perform logout logic and reset user state
    setUser(null);

    // Remove user data from local storage
    localStorage.removeItem('user');
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};