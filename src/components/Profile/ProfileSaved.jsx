import React from "react";
import courses from "../../data/savedCourses";
function ProfileSaved() {
  return (
    <div className="space-y-6 p-4 sm:p-6 md:p-10 h-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Saved Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border shadow-sm flex flex-col"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover"
            />

            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 dark:text-gray-900">
                  {course.title}
                </h3>
                <p className="text-gray-400 dark:text-gray-500 text-sm mb-3">
                  by {course.instructor}
                </p>

                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1 dark:text-gray-600">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Last accessed: {course.lastAccessed}
                </span>
                <div className="flex gap-2">
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
      </div>
    </div>
  );
}
export default ProfileSaved;
