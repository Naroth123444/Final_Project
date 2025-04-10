const Profile = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 flex-1">
        <Routes>
          <Route
            path="/profile"
            element={<h1 className="text-2xl font-bold">Profile Page</h1>}
          />
          <Route
            path="/courses"
            element={<h1 className="text-2xl font-bold">Courses Page</h1>}
          />
          <Route
            path="/saved"
            element={
              <div>
                <h1 className="text-2xl font-bold mb-6">Saved Courses</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {courses.map((course, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-16 h-16 rounded-lg"
                      />
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold">
                          {course.title}
                        </h2>
                        <p className="text-gray-600">
                          {course.lessons} Lessons
                        </p>
                      </div>
                      <span className="text-gray-500 sm:ml-auto">
                        {course.hours} Hours
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
