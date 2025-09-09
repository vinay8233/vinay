// src/Components/Admin components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check if admin is logged in (for now, using localStorage token)
  const isAdminLoggedIn = localStorage.getItem("adminToken");

  if (!isAdminLoggedIn) {
    // Not logged in → redirect to login page
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

