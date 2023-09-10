// Import necessary modules from React and React context API
import React, { createContext, useContext, useState } from "react";

// Create an authentication context using createContext
const AuthContext = createContext(null);

// Create an Authentication Provider component
export const AuthProvider = ({ children }) => {
  // Initialize user state using useState, initially set to null
  const [user, setUser] = useState(null);

  // Define a function to set the user when a user logs in
  const login = (user) => {
    setUser(user);
  };

  // Define a function to clear the user when they log out
  const logout = () => {
    setUser(null);
  };

  // Define a function to check if the user has a specific role
  const hasRole = (role) => {
    // Check if user exists, if roles property exists, and if it includes the specified role
    return user && user.roles && user.roles.includes(role);
  };

  // Create an object containing user-related data and functions
  const value = {
    user,        // Current user object
    setUser,     // Function to set user
    login,       // Function to log in
    logout,      // Function to log out
    hasRole,     // Function to check user roles
  };

  // Return the AuthProvider component that wraps its children with the AuthContext.Provider
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to easily access authentication-related data and functions
export const useAuth = () => {
  return useContext(AuthContext);
};
