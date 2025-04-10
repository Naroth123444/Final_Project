import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IsLogin from "../../auth/IsLogin";
import getUser from "../../api/getUser";

export default function HeaderComponent() {
  const [logo, setLogo] = useState("/icons/menu.svg");
  const [isClick, setClick] = useState(false);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [themeLogo, setThemeLogo] = useState("/icons/night.svg");
  const [isThemeClick, setIsThemeClick] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  // Fetch user information
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();
      setUser(userData);
    };

    fetchData();
  }, []);
  console.log(user);

  useEffect(() => {
    setIsAuth(IsLogin());
  }, []);
  console.log("isAuth is", isAuth);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setThemeLogo(savedTheme ? "/icons/sun.svg" : "/icons/night.svg");
    setDarkMode(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      setClick(false);
      setLogo("/icons/menu.svg");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Header for Small Devices */}
      <header className="fixed sm:hidden w-full animated h-fit z-100 animated">
        <nav
          className={`relative h-[50px] z-50 w-full px-[30px] bg-white dark:bg-[#121212] animated shadow-small flex justify-between items-center`}
        >
          <img
            className="dark:invert-100"
            src={"/icons/logo.svg"}
            width={"48px"}
            alt=""
            onClick={() => navigate("/")}
          />
          <figure
            className="hover:bg-black dark:hover:bg-dark-accent animated h-8 w-8 rounded-small flex justify-center items-center cursor-pointer"
            onClick={() => {
              setLogo(isClick ? "/icons/menu.svg" : "/icons/xmenu.svg");
              setClick(!isClick);
            }}
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                isClick ? "rotate-180" : "rotate-0"
              }`}
            >
              <img src={logo} alt="Menu icons" />
            </div>
          </figure>
        </nav>
        <nav
          className={`absolute w-full h-fit z-40 bg-white dark:bg-[#121212] border-b-[1px] transition-all duration-700 ease-in-out border-gray-300 dark:border-dark-primary px-[30px] py-4 rounded-b-small  ${
            isClick ? "opacity-100 " : " translate-y-[-232px]"
          }`}
        >
          <ul className="h-full space-y-2 flex flex-col justify-between">
            <Link
              className="font-semibold text-detail-medium dark:text-dark-primary"
              to="/"
            >
              Home
            </Link>
            <li>
              <Link
                className="font-semibold text-detail-medium dark:text-dark-primary"
                to="courses"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-detail-medium dark:text-dark-primary"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="font-semibold text-detail-medium dark:text-dark-primary"
              >
                Dark Mode
              </button>
            </li>
            <li>
              <Link
                className="font-semibold text-detail-medium dark:text-dark-primary"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className="text-accent dark:text-dark-accent font-semibold text-detail-medium"
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Header for Large Devices */}
      <header className="hidden  fixed w-full sm:flex flex-col items-end lg:hidden z-100">
        <nav className="relative z-50 h-[72px] w-full px-[60px] shadow-small flex justify-between items-center bg-white dark:bg-[#0D0D0D]">
          <img src={"/icons/logo.svg"} alt="" onClick={() => navigate("/")} />
          <ul className="flex space-x-20 justify-between items-center">
            <li>
              <Link
                className="text-detail-large font-semibold dark:text-dark-primary"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-detail-large font-semibold dark:text-dark-primary"
                to="/courses"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                className="text-detail-large font-semibold dark:text-dark-primary"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <figure
            className=" hover:bg-black dark:hover:bg-dark-accent animated h-8 w-8 rounded-small flex justify-center items-center cursor-pointer"
            onClick={() => {
              setLogo(isClick ? "/icons/menu.svg" : "/icons/xmenu.svg");
              setClick(!isClick);
            }}
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                isClick ? "rotate-180" : "rotate-0"
              }`}
            >
              <img src={logo} alt="Menu icons" />
            </div>
          </figure>
        </nav>
        <menu
          className={`absolute z-0 mr-[60px] mt-[84px] bg-white dark:bg-[#121212] rounded-small shadow-small h-fit w-[110px] flex justify-center items-center py-2.5 px-2 transition-all ease-in-out duration-300 ${
            isClick
              ? "translate-y-0 opacity-100"
              : "translate-y-[-100px] opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 items-center justify-between h-full w-full">
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                type="button"
                className="text-detail-large font-semibold dark:text-dark-primary"
              >
                Dark
              </button>
            </li>
            <li className="w-full h-[0.5px] bg-gray-300 dark:bg-dark-primary"></li>
            <li>
              <Link
                className="text-detail-large font-semibold dark:text-dark-primary"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="w-full h-[0.5px] bg-gray-300 dark:bg-dark-primary"></li>
            <li>
              <Link
                className="text-detail-large font-semibold text-accent dark:text-dark-accent"
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </menu>
      </header>
      {/* Header for large Screen */}
      <header className="hidden animated fixed lg:flex justify-between items-center h-[72px] w-full px-[120px] bg-white dark:bg-[#0D0D0D] dark:text-accent shadow-small z-100">
        <img
          src={"/icons/logo.svg"}
          alt=""
          onClick={() => navigate("/")}
          className="dark:invert-75"
        />
        <nav>
          <ul className="flex space-x-20 w-full  justify-between items-center">
            <li>
              <Link
                className="font-semibold text-detail-large dark:text-dark-primary"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-detail-large dark:text-dark-primary"
                to="/courses"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-detail-large dark:text-dark-primary"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex justify-between space-x-4 items-center h-full">
            <ul
              className={`flex justify-between space-x-4 items-center h-full ${
                isAuth ? "hidden" : ""
              }`}
            >
              <li>
                <Link
                  className="font-semibold text-detail-large dark:text-dark-primary"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="h-[60%] w-[0.8px] bg-gray-300 dark:bg-primary rounded-small"></li>
              <li>
                <Link
                  className="flex justify-center items-center h-10 px-4 text-white dark:bg-primary dark:text-accent font-semibold animated rounded-small bg-accent hover:bg-[#0b6957]"
                  to="/register"
                >
                  Register
                </Link>
              </li>
            </ul>
            <ul className="flex justify-between space-x-4 items-center h-full">
              <button
                onClick={() => {
                  const newMode = !darkMode;
                  setDarkMode(newMode);
                  setThemeLogo(newMode ? "/icons/sun.svg" : "/icons/night.svg");
                  setIsThemeClick(!isThemeClick);
                }}
                type="button"
                className="flex justify-center items-center dark:bg-primary h-10 w-10 rounded-small animated bg-accent hover:bg-[#0b6957]"
              >
                <div
                  className={`transition-transform duration-300 ease-in-out ${
                    isThemeClick ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <img src={themeLogo} alt="Theme icon" />
                </div>
              </button>
              <img
                onClick={() => navigate("/profile")}
                className={`h-10 w-10 rounded-full outline-1 cursor-pointer outline-accent border-2 border-transparent ${
                  isAuth ? "" : "hidden"
                }`}
                src={"/img/userprofile.jpg"}
                alt=""
              />
            </ul>
          </ul>
        </nav>
      </header>
    </>
  );
}
