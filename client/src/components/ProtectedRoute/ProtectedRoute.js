import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  isAllowed = false,
  redirectPath = "/login",
  component,
}) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return <>{component}</>;
}
