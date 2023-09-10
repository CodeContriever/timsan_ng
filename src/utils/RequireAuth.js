// Import necessary modules from React and React Router
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

// Import the useAuth custom hook from the 'auth' module
import { useAuth } from './auth'

// Create a component called RequireAuth that takes children and requiredRoles as props
const RequireAuth = ({ children, requiredRoles }) => {
  // Get the current location using the useLocation hook
  const location = useLocation()

  // Get authentication-related data and functions using the useAuth custom hook
  const auth = useAuth()

  // Check if there is no authenticated user
  if (!auth.user) {
    // Redirect to the "/signin" route with the current path as state
    return <Navigate to="/signin" state={{ path: location.pathname }} />;
  }

  // Check if requiredRoles are specified and if the user has at least one of them
  if (requiredRoles && requiredRoles.some((role) => auth.hasRole(role))) {
    // Render the children components if the user has the required role(s)
    return children;
  }

  // Redirect to the "/access-denied" route if the user doesn't have the required role(s)
  return <Navigate to="/access-denied" />;
}

// Export the RequireAuth component as the default export
export default RequireAuth
