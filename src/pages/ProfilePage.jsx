import React from "react";
import ProfileSaved from "../components/Profile/ProfileSaved";
import UserEnroll from "../components/Profile/UserEnroll";
import UserProfile from "../components/Profile/UserProfile";
import Sidebar from "../components/Profile/Sidebar";
export default function ProfilePage({ children }) {
  return (
    <main className="flex h-screen">
      <Sidebar />
      {children}
    </main>
  );
}
