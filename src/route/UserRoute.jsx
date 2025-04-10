import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import IsLogin from "../auth/IsLogin";

export default function UserRoute() {
  return IsLogin() ? <Navigate to={"/profile"} /> : <Outlet />;
}
