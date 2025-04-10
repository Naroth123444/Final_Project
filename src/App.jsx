import "./App.css";
import { AllCourses } from "./pages/AllCourses";
import { BrowserRouter, Route, Routes } from "react-router";
import RegisterForm from "./components/form/RegisterForm";
import HomePage from "./pages/HomePage";
import LoginForm from "./components/form/LoginForm";
import React from "react";
import AboutPage from "./pages/AboutPage";
import Layout from "./route/Layout";
import AuthPage from "./pages/AuthPage";
import FileNotFound from "./components/filenotfound/FileNotFound";
import CourseDetail from "./pages/CourseDetail";
import "./App.css";
import UserProfile from "./components/Profile/UserProfile";
import UserEnroll from "./components/Profile/UserEnroll";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./route/ProtectedRoute";
import UserRoute from "./route/UserRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Route */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/courses"
            element={
              <Layout>
                <AllCourses />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <ProfilePage>
                <UserProfile />
              </ProfilePage>
            }
          />
          <Route path="/coursedetail/:slug" element={<CourseDetail />} />
          <Route
            path="/saved"
            element={
              <ProfilePage>
                <UserEnroll />
              </ProfilePage>
            }
          />

          <Route
            path="/coursedetail"
            element={
              <Layout>
                <CourseDetail />
              </Layout>
            }
          />
        </Route>

        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/courses"
          element={
            <Layout>
              <AllCourses />
            </Layout>
          }
        />

        <Route path="/courses/:id" element={<h1>Courses Page ID</h1>} />

        {/* User Mode Route */}
        <Route element={<UserRoute />}>
          <Route
            path="/register"
            element={
              <AuthPage>
                <RegisterForm />
              </AuthPage>
            }
          />
          <Route
            path="/login"
            element={
              <AuthPage>
                <LoginForm />
              </AuthPage>
            }
          />
        </Route>

        <Route path="*" element={<FileNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
