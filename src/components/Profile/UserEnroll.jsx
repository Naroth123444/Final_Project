import React, { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

import getAllCourses from "../../api/getAllCourses";
import getSavedCourses from "../../api/getSavedCourses";

import CourseCard from "../card/CourseCard";

export default function UserEnroll() {
  const [searchTerm, setSearchTerm] = useState("");
  const [savedCourses, setSavedCourses] = useState([]);
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getAllCourses();
      if (data?.content) {
        setAllCourses(data.content);
        setRecommendedCourses(data.content.slice(0, 4));
      }
    };

    const fetchSavedCourses = async () => {
      try {
        const response = await getSavedCourses();
        if (response) setSavedCourses(response);
      } catch (e) {
        alert("Error fetching saved courses: " + e.message);
      }
    };

    fetchCourses();
    fetchSavedCourses();
  }, []);

  const handleCourseClick = (slug) => {
    navigate(`/coursedetail/${slug}`);
  };

  const handleRowClick = (courseId) => {
    navigate(`/coursedetail/${courseId}`);
  };

  const filteredCourses = savedCourses?.filter((course) =>
    course?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-10 w-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Saved Courses</h2>

        {/* Search Bar */}
        <div className=" flex items-center gap-2 ">
          <input
            type="text"
            placeholder="Search by title..."
            className="border-1 border-gray-200 focus:outline-0  focus:border-gray-400 animated rounded-lg py-2 pl-10 w-72"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-500 text-white flex w-10 justify-center items-center h-10 rounded-lg hover:bg-blue-600 transition">
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Saved Courses Table */}
      <div className="bg-white rounded-lg shadow-md  mb-10">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
          <thead className="bg-gray-50">
  <tr className="text-gray-600 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap">
    <th className="px-4 sm:px-6 py-3">Course ID</th>
    <th className="px-4 sm:px-6 py-3">Course Title</th>
    <th className="px-4 sm:px-6 py-3">Instructor</th>
    <th className="px-4 sm:px-6 py-3">Added At</th>
  </tr>
</thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCourses?.length > 0 ? (
                filteredCourses.map((course, index) => (
                  <tr
                    key={course?.courseId || index}
                    className="hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
                    onClick={() => handleRowClick(course?.courseId)}
                  >
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {course?.courseId}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {course?.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {course?.instructor}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(course?.addedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No courses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommended Courses */}
      <section>
        <h2 className="text-2xl font-bold mb-10">Recommend Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recommendedCourses?.map((course) => (
            <CourseCard
              key={course?.id}
              id={course?.id}
              onClick={handleCourseClick}
              thumbnail={course?.thumbnail}
              title={course?.title}
              subtitle={course?.subtitle}
              instructor={course?.instructorUsername}
              description={course?.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
