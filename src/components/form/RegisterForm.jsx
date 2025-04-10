import { ErrorMessage, Field, Formik, Form } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import * as Yup from "yup";
import Loader from "../../components/loading/Loader";
import style from "./style.module.css";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import images from "../../../public/img/register.svg";
import { registerUser } from "../../api/register";
import { verifyUser } from "../../api/verify";
import ErrorModal from "../modal/ErrorModal";
import VerifyCode from "../modal/VerifyCode";

const initialValues = {
  name: "",
  gender: "",
  email: "",
  password: "",
  confirmedPassword: "",
  biography: name,
  role: "student",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Username is required"),
  email: Yup.string().required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      // validation on password input
      // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{6})/,
      /^(?=.*[a-z])(?=.*[A-Z])(?=.{6})/,
      "Please use a strong password"
      // "Password must contain one uppercase, one lowercase, one number, and one specail case character"
    )
    .required("Password is required"),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password not match")
    .required("Confirm password is required"),
});

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmedPassword, setShowconfirmedPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState({
    open: false,
    title: "",
    description: "",
  });
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [verifyCode, setVerifyCode] = useState(0);
  const handleVerifyCode = (code) => {
    setVerifyCode(code);
    console.log("User entered code:", code);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowconfirmedPassword = () => {
    setShowconfirmedPassword(!showconfirmedPassword);
  };

  // adjust path as needed

  const handleSubmit = async (values) => {
    values.biography = values.name;
    console.log(values);
    setLoading(true);

    try {
      await registerUser(values); // now abstracted
      // setShowVerifyModal(true);
      const verifyCode = prompt("Enter verification code sent to your email:");
      alert("Verifying with code: " + verifyCode);

      const data = await verifyUser(values.email, verifyCode); // now abstracted
      console.log(data);
      navigate("/login");
    } catch (error) {
      setErrorModal({
        open: true,
        title: "Register Error",
        description: error?.message || "Something went wrong! Please try again",
      });
    } finally {
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
    <section className="flex flex-col justify-center px-5 md:px-[60px] lg:px-[120px] h-screen">
      <section className="flex items-center justify-between">
        <img
          src={images}
          alt="pic-register"
          className=" w-[40%] hidden lg:flex"
        />

        <main className="w-full flex justify-center max-w-lg p-8 bg-white shadow-small rounded-small dark:bg-black">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="w-full ">
              <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
                Register
              </h1>
              <p className="text-gray-500 mb-6 text-center dark:text-gray-300">
                Register to access all lessons with Rean
              </p>

              {/* Username and Gender Fields */}
              <div className="flex flex-col gap-4 md:flex-row md:gap-6 mb-6">
                <div className="w-full">
                  <label className={style.label} htmlFor="name">
                    Username
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Username"
                    className={`${style.input} h-[52px]`}
                  />
                  <ErrorMessage
                    name="name"
                    component="section"
                    className={style.error}
                  />
                </div>

                <div className="w-full">
                  <label className={style.label} htmlFor="gender">
                    Gender
                  </label>
                  <Field
                    as="select"
                    name="gender"
                    id="gender"
                    className={`${style.input} h-[52px]`}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="section"
                    className={style.error}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label className={style.label} htmlFor="email">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={`${style.input} h-[52px]`}
                />
                <ErrorMessage
                  name="email"
                  component="section"
                  className={style.error}
                />
              </div>

              {/* Password Field */}
              <div className="mb-6">
                <label className={style.label} htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className={`${style.input} h-[52px]`}
                  />
                  <button
                    type="button"
                    onClick={handleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
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
              </div>

              {/* Confirm Password Field */}
              <div className="mb-6">
                <label className={style.label} htmlFor="confirmedPassword">
                  Confirm Password
                </label>
                <div className="relative">
                  <Field
                    type={showconfirmedPassword ? "text" : "password"}
                    name="confirmedPassword"
                    id="confirmedPassword"
                    placeholder="Confirm Password"
                    className={`${style.input} h-[52px]`}
                  />
                  <button
                    type="button"
                    onClick={handleShowconfirmedPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  >
                    {showconfirmedPassword ? (
                      <IoEyeSharp size={20} />
                    ) : (
                      <IoEyeOffSharp size={20} />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="confirmedPassword"
                  component="section"
                  className={style.error}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="large-button w-full">
                Register
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-accent hover:underline">
                  Login
                </Link>
              </p>
            </Form>
          </Formik>
        </main>
      </section>
      {errorModal.open && (
        <ErrorModal
          title={errorModal.title}
          description={errorModal.description}
          onClose={() => setErrorModal({ ...errorModal, open: false })}
        />
      )}
      {showVerifyModal && (
        <VerifyCode
          onClick={(code) => {
            handleVerifyCode(code);
            setShowVerifyModal(false); // Close modal after input
          }}
        />
      )}
    </section>
  );
}

// <div className=" flex items-center  from-green-50 to-white px-5 md:px-[60px] lg:px-[120px]  ">
//       <div className=" w-full ">
//         <div className="w-full flex  bg-white  rounded-lg p-6  ">
//           <a
//             href="/"
//             className="text-sm text-accent hover:underline mb-4 inline-block"
//           >
//             &larr; Back to home
//           </a>
//           <div className="flex justify-content-between mt-10 ">
//             <div className=" w-[50%] bg-red-300 ">

//             </div>

//           </div>
//         </div>
//       </div>
//     </div>

// <main className={`${style.container} w-[50%] bg-red-50`}>

//             </main>
