import { useState, Search, setSearch, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { FaBookOpen, FaBookmark, FaSearch, FaUser } from "react-icons/fa";
import image from "../../../public/img/image.png";
import getUser from "../../api/getUser";
function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`flex h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"} ${
          darkMode ? "bg-gray-800" : "bg-white"
        } transition-all duration-300 border-r ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold">Profile</h1>
          ) : (
            <h1 className="text-xl font-bold">D</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-700 "
          >
            {sidebarOpen ? "◀" : "▶"}
          </button>
        </div>
        <nav className="mt-6">
          <NavLink
            to="/profile"
            icon={<FaUser />}
            text="PROFILE"
            sidebarOpen={sidebarOpen}
            darkMode={darkMode}
          />
          <NavLink
            to="/my-course"
            icon={<FaBookOpen />}
            text="MY COURSE"
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

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Overview</h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </header>

        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/my-course" element={<MyCoursePage />} />
          <Route path="/saved" element={<SavedPage />} />
        </Routes>
      </div>
    </div>
  );
}

// Improved NavLink Component (with hover + active states)
function NavLink({ to, icon, text, sidebarOpen, darkMode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center p-4 mb-2 rounded-lg transition-colors duration-200 ${
        isActive
          ? "bg-gray-800 dark:bg-gray-900 text-white"
          : `${
              darkMode
                ? "hover:bg-gray-800 dark:hover:bg-gray-900 hover:text-white"
                : "hover:bg-gray-800 hover:text-white"
            }`
      }`}
    >
      <span className="text-xl">{icon}</span>
      {sidebarOpen && <span className="ml-3">{text}</span>}
    </Link>
  );
}

// Placeholder Pages
function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();
      setUser(userData);
    };
  }, []);

  const ProfileInfo = [
    { label: "Username", value: "Kung Sovamda" },
    { label: "Role", value: "Student" },
    { label: "Gender", value: "Male" },
    { label: "Email", value: "much@gmail.com" },
  ];
  return (
    <>
      <div className="container w-[92%] flex justify-between ml-6">
        <div className="img-profile flex justify-content-center items-center ">
          <div className="w-[120px] h-[120px] pt-2">
            <img
              className="border-1 rounded-full w-[120px] h-[120px]"
              src="https://cdn.pixabay.com/photo/2022/12/10/13/46/attack-7647136_1280.png"
              alt=""
            />
          </div>
          <div className="mr-[100px] flex-col p-2">
            <h2 className="mb-2 text-2xl">{user.name}</h2>{" "}
            {/* Added margin-bottom */}
            <p className="">moah@gmail.com</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-accent p-3 rounded-2xl mt-5"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto mt-10 ml-7 h-[50vh]">
        {/* Profile Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6 w-[400px] border border-gray-200">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Profile Information
          </h2>

          <div className="space-y-4">
            {ProfileInfo.map((item, index) => (
              <div key={index}>
                <p className="text-sm font-medium text-gray-500">
                  {item.label}
                </p>
                <p className="mt-1 text-gray-800 bg-gray-100 rounded-md p-2">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bigger Illustration (matching form size) */}
        <div className="w-[500px] h-full flex justify-center items-center">
          <img
            className="w-[550px] h-[500px] object-contain"
            src={image}
            alt="Illustration"
          />
        </div>
      </div>

      <footer className="w-full bg-gray-900 text-white py-10 mt-[50px]">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-lg font-bold">JOIN OUR DISCORD COMMUNITY</h2>
          <p className="mt-4 text-gray-300">
            Join thousands of students sharing knowledge and experiences. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Possimus amet,
            debitis corporis rerum impedit saepe maxime sed vero, voluptate
            quasi error praesentium a dicta consectetur! Illum, accusamus
            deserunt. Aspernatur, voluptatem!
          </p>
          <button className="mt-6 bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition">
            Join us
          </button>
        </div>
      </footer>
    </>
  );
}
function MyCoursePage() {
  const coursesInProgress = [
    {
      name: "Web design",
      lessons: 12,
      start: "March 27",
      rate: 4.8,
      level: "Elementary",
      icon: "https://cdn.pixabay.com/photo/2018/09/05/10/12/domain-3655918_1280.png",
    },
    {
      name: "Mobile Development",
      lessons: 10,
      start: "June 17",
      rate: 4.9,
      level: "Intermediate",
      icon: "https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307_1280.png",
    },
    {
      name: "UI/UX design",
      lessons: 7,
      start: "August 05",
      rate: 4.8,
      level: "Elementary",
      icon: "https://cdn.pixabay.com/photo/2022/05/27/11/18/ux-design-7224948_1280.png",
    },
    {
      name: "Networking",
      lessons: 10,
      start: "October 12",
      rate: 4.6,
      level: "Intermediate",
      icon: "https://cdn.pixabay.com/photo/2021/02/08/10/46/world-5994330_1280.png",
    },
    {
      name: "Cloud Computing",
      lessons: 10,
      start: "October 30",
      rate: 4.5,
      level: "Elementary",
      icon: "https://media.istockphoto.com/id/470267100/vector/cloud-symbol.jpg?s=2048x2048&w=is&k=20&c=KcT6uEQmSVdRkRZl_zROHC0X0wjMCKsXU0bG5XVjcuU=",
    },
    {
      name: "Cyber Security",
      lessons: 12,
      start: "December 27",
      rate: 4.8,
      level: "Elementary",
      icon: "https://cdn.pixabay.com/photo/2014/04/03/00/32/padlock-308589_1280.png",
    },
    {
      name: "Database System",
      lessons: 15,
      start: "December 28",
      rate: 4.7,
      level: "Intermediate",
      icon: "https://media.istockphoto.com/id/1783729778/vector/database-and-server-icon-concept.jpg?s=2048x2048&w=is&k=20&c=HUGnquJm4MFVfw-QMlv-AvdRtG8srB0tCiikn5ldXnc=",
    },
  ];

  const recommendedCourses = [
    {
      title: "Cloud Computing",
      description: "Access, Store, and Manage Data",
      lessons: 12,
      hours: 34,
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
    },
    {
      title: "Cloud Computing",
      description: "Access, Store, and Manage Data",
      lessons: 12,
      hours: 34,
      image:
        "https://media.istockphoto.com/id/1421646169/vector/software-development-ide-flat-design.jpg?s=2048x2048&w=is&k=20&c=f5DDKRDi6pCAUANn0KowHnjZyTiMU9jQELQaUnSLi50=",
    },
    {
      title: "Cloud Computing",
      description: "Access, Store, and Manage Data",
      lessons: 12,
      hours: 34,
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png",
    },
  ];

  return (
    <>
      <div className="p-6 w-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Courses in Progress</h2>

          {/* Search Bar */}
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg px-4 py-2 pl-10 w-72"
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Search Button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full text-left">
          {/* Table Header */}
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="pb-4 text-sm font-medium uppercase">
                Course name
              </th>
              <th className="pb-4 text-sm font-medium uppercase">Start</th>
              <th className="pb-4 text-sm font-medium uppercase">Rate</th>
              <th className="pb-4 text-sm font-medium uppercase">Level</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {coursesInProgress.map((course, index) => (
              <tr key={index} className="border-b last:border-none">
                {/* Course Name with Icon */}
                <td className="py-4 flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg d">
                    <img
                      src={course.icon}
                      alt={course.name}
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{course.name}</p>
                    <p className="text-sm text-gray-500">
                      {course.lessons} Lessons
                    </p>
                  </div>
                </td>

                {/* Start Date */}
                <td className="py-4 text-gray-700">{course.start}</td>

                {/* Rate */}
                <td className="py-4 text-gray-700">{course.rate}</td>

                {/* Level */}
                <td className="py-4 text-gray-700">{course.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recommended Courses */}
      <div>
        <h2 className="text-2xl font-bold mt-8">Recommended Courses</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {recommendedCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 ">
              <img
                src={course.image}
                alt={course.title}
                className="rounded w-full h-40 object-cover"
              />
              <h3 className="mt-2 text-lg font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.description}</p>
              <div className="flex justify-between text-sm mt-2">
                <span>{course.lessons} Lessons</span>
                <span>{course.hours} Hours</span>
              </div>
              <button className="mt-2 w-full bg-green-500 text-white py-1 rounded flex items-center justify-center gap-2">
                <FaBookmark size={16} /> Save
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function SavedPage() {
  const courses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Sarah Johnson",
      thumbnail:
        " https://cdn.pixabay.com/photo/2019/08/10/13/26/website-4396924_1280.jpg",
      progress: 75,
      lastAccessed: "2 days ago",
    },
    {
      id: 2,
      title: "Tailwind CSS Mastery",
      instructor: "Mike Chen",
      thumbnail:
        "https://cdn.pixabay.com/photo/2020/09/27/13/15/data-5606639_1280.jpg",
      progress: 30,
      lastAccessed: "1 week ago",
    },
    {
      id: 3,
      title: "Node.js Backend Fundamentals",
      instructor: "Alex Rodriguez",
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/05/02/09/16/web-development-8734249_1280.png",
      progress: 90,
      lastAccessed: "Yesterday",
    },
  ];

  return (
    <div className="space-y-6 h-auto">
      <h2 className="text-2xl font-bold mb-6">Saved Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-70 object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-lg mb-1 dark:text-gray-900">
                {course.title}
              </h3>
              <p className="text-gray-200 dark:text-gray-500 text-sm mb-3">
                by {course.instructor}
              </p>

              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1 dark:text-gray-600">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 dark:text-white rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Last accessed: {course.lastAccessed}
                </span>
                <div className="space-x-2">
                  <button className="px-3 py-1 bg-accent text-white rounded-md text-sm hover:bg-blue-600">
                    Continue
                  </button>
                  <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-sm hover:bg-gray-300 dark:hover:bg-gray-600">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <footer className=" relative w-[1215px] bg-gray-900 text-white text-center px-4 py-8">
          <div className="max-w-screen-lg">
            <h3 className="text-lg md:text-xl font-bold">
              JOIN OUR DISCORD COMMUNITY
            </h3>
            <p className="text-sm md:text-base mt-2 leading-relaxed ml-30 ">
              Join thousands of students sharing knowledge and experiences.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              amet, debitis corporis rerum impedit saepe maxime sed vero,
              voluptate quasi error praesentium a dicta consectetur! Illum,
              accusamus deserunt. Aspernatur, voluptatem!
            </p>
            <button className="mt-4 bg-green-500 px-6 py-2 rounded text-white hover:bg-green-600 transition">
              Join us
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Profile;
