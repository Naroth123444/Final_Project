import { useNavigate } from "react-router-dom";
import Course from "./Course";
import { useEffect, useState } from "react";
import getAllCourses from "../../../api/getAllCourses";

export default function PopularCourses() {
  const [popularCourses, setPopularCourses] = useState([]);
  const [courses, setCourses] = useState();
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getAllCourses();
      if (data) {
        setCourses(data?.content);
        setPopularCourses(courses?.slice(0, 8));
      }
    };

    fetchCourses();
  });
  console.log(popularCourses);
  const navigate = useNavigate();
  const handleCourseClick = (slug) => {
    navigate(`/coursedetail/${slug}`);
  };

  return (
    <section className="w-full flex flex-col space-y-10 px-5 md:px-[60px] lg:px-[120px] dark:bg-dark-bg dark:text-white">
      <article className="flex justify-between items-center">
        <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-primary font-bold text-start dark:text-accent">
          Popular Courses
        </h2>
        <button
          className="relative flex lg:hidden z-10 text-accent underline text-detail-large dark:text-dark-accent"
          onClick={() => navigate("/courses")}
        >
          View all courses
        </button>
      </article>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
        {popularCourses?.map((course) => (
          <Course
            key={course.id}
            category={course.categoryName}
            slug={course.slug}
            title={course.title}
            instructor={course.instructorUsername}
            thumbnail={course.thumbnail}
            onClick={handleCourseClick}
          />
        ))}
      </section>
      <button
        className="hidden lg:flex mx-auto justify-center items-center px-6 py-3 w-fit bg-accent text-white hover:bg-[#0b6957] hover:text-white rounded-small transition-colors ease-in-out duration-300 dark:bg-dark-accent dark:hover:bg-dark-accent"
        onClick={() => navigate("/courses")}
      >
        View all Courses
      </button>
    </section>
  );
}
