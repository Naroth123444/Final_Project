import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import IsLogin from "../auth/IsLogin";

export default function ProtectedRoute() {
  return IsLogin() ? <Outlet /> : <Navigate to="/login" />;
}
