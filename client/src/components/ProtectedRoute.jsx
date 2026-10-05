import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userAuth = localStorage.getItem("userAuth");

  const authUser = userAuth ? JSON.parse(userAuth) : null;

  if (!authUser?.isLogin) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;