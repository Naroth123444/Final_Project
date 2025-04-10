import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBookOpen, FaBookmark, FaUser } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
function NavLink({ to, icon, text, sidebarOpen, darkMode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center  p-4 mb-2 rounded-lg transition-colors duration-200 ${
        isActive
          ? "bg-gray-800 dark:bg-gray-900 text-white"
          : `${
              darkMode
                ? "hover:bg-gray-800 dark:hover:bg-gray-900 hover:text-white"
                : "hover:bg-gray-800 hover:text-white"
            }`
      }
      ${sidebarOpen ? "" : "justify-center"}`}
    >
      <span className="text-xl">{icon}</span>
      {sidebarOpen && (
        <span className={`ml-3 font-semibold min-w-3xs`}>{text}</span>
      )}
    </Link>
  );
}
export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`flex h-screen  ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`px-4 ${sidebarOpen ? "w-64" : "w-20"} ${
          darkMode ? "bg-gray-800" : "bg-white"
        } transition-all duration-300 border-r ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <Link to={"/"}>{sidebarOpen ? <IoArrowBack /> : ""}</Link>
          <h1 className="text-xl font-bold">{sidebarOpen ? "Account" : ""}</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-700"
          >
            {sidebarOpen ? "◀" : "▶"}
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-2">
          <NavLink
            to="/profile"
            icon={<FaUser />}
            text="PROFILE"
            sidebarOpen={sidebarOpen}
            darkMode={darkMode}
          />
          <NavLink
            to="/saved"
            icon={<FaBookmark />}
            text="SAVED"
            sidebarOpen={sidebarOpen}
            darkMode={darkMode}
          />
        </nav>
      </div>
    </div>
  );
}
