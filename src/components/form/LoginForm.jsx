import React, { useState } from "react";
import style from "./style.module.css";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { Link, useNavigate } from "react-router";
import * as Yup from "yup";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import Loader from "../../components/loading/Loader";
import images from "../../../public/img/Login.svg";
import { loginUser } from "../../api/login";
import ErrorModal from "../modal/ErrorModal";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginForm() {
  const [showPassword, handleShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState({
    open: false,
    title: "",
    description: "",
  });

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const data = await loginUser(values);

      if (data.accessToken !== null && data.accessToken !== undefined) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        navigate("/");
      } else {
        setErrorModal({
          open: true,
          title: "Login Error",
          description: "Invalid email or password! Please try again",
        });
      }
    } catch (error) {
      setErrorModal({
        open: true,
        title: "Login Error",
        description: error?.message || "Something went wrong! Please try again",
      });
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={style.container}>
        <Loader />
      </div>
    );
  }

  return (
    <section className="relative z-1 flex flex-col justify-center dark:bg-dark-bg  px-5 md:px-[60px] lg:px-[120px] h-screen">
      <div className="flex items-center justify-between">
        <article className="w-[50%] hidden md:flex">
          <img src={images} alt="piclogin" className="w-full " />
        </article>

        <main className="w-full max-w-lg p-8 bg-white dark:bg-black shadow-small rounded-small">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="w-full">
              <header className="text-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  Login
                </h1>
                <p className="text-gray-500 dark:text-gray-300 mb-6">
                  Login to access your Rean account
                </p>
              </header>

              <section className="mb-6">
                {/* Email Field */}
                <label className={style.label} htmlFor="email">
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={`${style.input} h-[52px] placeholder:text-gray-500 dark:placeholder:text-gray-400`}
                />
                <ErrorMessage
                  name="email"
                  component="section"
                  className={style.error}
                />
              </section>

              <section className="mb-6">
                {/* Password Field */}
                <label className={style.label} htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className={`${style.input} h-[52px] placeholder:text-gray-500 dark:placeholder:text-gray-400`}
                  />
                  <button
                    type="button"
                    onClick={handleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300"
                  >
                    {showPassword ? (
                      <IoEyeSharp size={20} />
                    ) : (
                      <IoEyeOffSharp size={20} />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="section"
                  className={style.error}
                />
              </section>

              <section className="mb-6">
                {/* Submit Button */}
                <button type="submit" className="large-button w-full">
                  Login
                </button>
              </section>

              <footer className="text-center text-sm text-gray-500 dark:text-gray-300 mt-4">
                <p>
                  Do not have an account?{" "}
                  <Link to="/register" className="text-accent hover:underline">
                    Register
                  </Link>
                </p>
              </footer>
            </Form>
          </Formik>
        </main>
      </div>
      {errorModal.open && (
        <ErrorModal
          title={errorModal.title}
          description={errorModal.description}
          onClose={() => setErrorModal({ ...errorModal, open: false })}
        />
      )}
    </section>
  );
}
