import { Link, useNavigate } from "react-router-dom";
import image from "../../../public/img/image.png";
import { useEffect, useState } from "react";
import getUser from "../../api/getUser";
import IsLogin from "../../auth/IsLogin";

export default function UserProfile() {
  const defaultValue = {
    id: 0,
    gender: "null",
    biography: "null",
    email: "null",
  };

  const [user, setUser] = useState(defaultValue);
  useEffect(() => {
    const fetchData = async () => {
      if (IsLogin()) {
        const userData = await getUser();
        if (userData) {
          setUser(userData);
        }
      }
    };

    fetchData();
  }, []);
  console.log(user);
  console.dir(user);
  const navigate = useNavigate();
  const ProfileInfo = [
    { label: "Username", value: `${user.biography}` },
    { label: "Role", value: "Student" },
    {
      label: "Gender",
      value: `${user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}`,
    },
    { label: "Email", value: `${user.email}` },
  ];

  return (
    <>
      {/* You had an invalid Link here — removed */}

      <section className="min-h-screen flex flex-col gap-10 w-full p-6 sm:p-10">
        {/* Profile Header */}
        <div className="container mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="img-profile flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-[120px] h-[120px]">
              <img
                className="border-4 border-transparent outline-4 outline-accent rounded-full w-[120px] h-[120px]"
                src="/img/userprofile.jpg"
                alt="Profile"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl text-primary dark:text-dark-primary font-bold">
                {user.biography}
              </h2>
              <p className="text-primary/70 dark:text-dark-primary/70">
                {user.email}
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
                navigate("/");
              }}
              type="button"
              className="medium-button"
            >
              Log out
            </button>
          </div>
        </div>

        {/* Profile Info & Image */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
          {/* Info Card */}
          <div className="bg-white w-full lg:w-1/2 rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Profile Information
            </h2>
            <div className="space-y-4">
              {ProfileInfo.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-gray-500">
                    {item.label}
                  </p>
                  <p className="flex items-center px-4 h-[52px] text-gray-800 bg-gray-100 rounded-md p-2">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration Image */}
          <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
            <img
              className="w-full max-w-md object-contain"
              src={image}
              alt="Illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
}
