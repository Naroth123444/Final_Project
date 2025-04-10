import React from "react";
import { Link } from "react-router-dom";

export default function AuthPage({ children }) {
  return (
    <>
      <header className="relative flex justify-between items-center h-[72px] px-5 md:px-[60px] lg:px-[120px] bg-white dark:bg-[var(--color-dark-bg)] w-full">
        <div className="flex items-center">
          {/* Back to Home Button */}
          <Link
            to="/"
            className="text-sm text-[var(--color-accent)] hover:underline dark:text-[var(--color-dark-accent)]"
          >
            &larr; Back to home
          </Link>
        </div>
        <div className="flex items-center justify-end">
          {/* Logo space */}
          <div className="h-[40px] w-[120px] flex items-center justify-end">
            <img
              src={"/icons/logo.svg"}
              alt="logo"
              className="h-full w-auto dark:invert-75"
            />
          </div>
        </div>
      </header>
      <main className="bg-white text-black dark:bg-[var(--color-dark-bg)] dark:text-[var(--color-dark-primary)]">
        {children}
      </main>
    </>
  );
}
