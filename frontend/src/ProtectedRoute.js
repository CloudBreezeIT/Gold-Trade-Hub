import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      console.log("Token missing, redirecting...");
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  if (!token) {
    localStorage.removeItem('token');
    return <Navigate to="/user-onboarding" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
