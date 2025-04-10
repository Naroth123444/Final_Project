import React, { useEffect, useState } from "react";
import HeroSection from "../components/coursedetail/HeroSection";
import { useParams } from "react-router-dom";
import getCourseBySlug from "../api/getCourseBySlug";
import getCourseById from "../api/getCourseById";

export default function CourseDetail() {
  const { slug } = useParams();
  const [course, setCourse] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourseBySlug(slug);
      if (data) {
        setCourse(data);
      }
    };
    const fetchDataById = async () => {
      const data = await getCourseById(slug);
      if (data) {
        setCourse(data);
      }
    };
    fetchData();
    if (course === undefined || course === null) {
      fetchDataById();
    }
  });

  return (
    <main className="flex flex-col items-center h-screen bg-white dark:bg-dark-bg">
      {/* Hero Section */}
      <HeroSection
        id={course?.id}
        category={course?.categoryName}
        title={course?.title}
        description={course?.description}
        thumbnail={course?.thumbnail}
        instructor={course?.instructorUsername}
      />

      {/* Course Content
      <article className="px-4 md:px-30 space-y-[96px]">
        <section className="w-full flex flex-col space-y-10">
          <h1 className="text-accent text-h2-large font-bold  dark:text-gray-100">
            Course Content
          </h1>
          <DropDown />
        </section>

        {/* Description 
        <section className="w-full">
          <h1 className="text-accent text-h2-large font-bold  dark:text-gray-100">
            Description
          </h1>
          <p className="text-primary text-body-text-large mt-10  dark:text-gray-300">
            It would be best to have a basic understanding of HTML and CSS. If
            you still need to learn the fundamentals, we link to some excellent
            resources inside the path. We recommend starting the path and using
            the resources to boost your knowledge before tackling the first
            challenge.
          </p>
        </section>

        {/* All Courses 
        <section className="w-full flex flex-col space-y-10">
          <div className="flex justify-between items-center">
            <h1 className="text-accent text-h2-large font-bold  dark:text-gray-100">
              All Course
            </h1>
            <div className="mt-5">
              <nav className="text-gray-500 dark:text-gray-400">
                <a href="#" className="hover:text-accent text-body-text-large">
                  View More <span className="mx-3">&gt;</span>
                </a>
              </nav>
            </div>
          </div>
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {recommandCourse.map((data) => (
              <CourseCard
                key={data.id}
                avatar={data.avatar}
                title={data.title}
                subtitle={data.subtitle}
                description={data.description}
                lesson={data.lesson}
                time={data.time}
              />
            ))}
          </section>
        </section>

        {/* Instructor 
        <section className="w-full">
          <h1 className="text-accent text-h2-large font-bold  dark:text-gray-100">
            Instructor
          </h1>
          <article className="bg-white dark:bg-black rounded-lg shadow-md border p-10 mt-10 border-black dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-5">
              <figure className="flex-shrink-0">
                <img
                  src="https://img-c.udemycdn.com/user/200_H/12013100_e696_6.jpg"
                  alt=""
                  className="w-[200px] h-[200px] rounded-full object-cover"
                />
              </figure>
              <div className="flex-grow">
                <h1 className="text-h3-large text-primary font-bold mb-3  dark:text-dark-primary">
                  Joseph Delgadillo
                </h1>
                <p className="text-body-text-large text-primary mt-2  dark:text-dark-primary/70">
                  Joseph Delgadillo is the founder of JTD Courses, an education
                  technology company. He has been active in the online learning
                  industry since 2015 and has worked with several prominent
                  companies. As of 2024, over 1 million students across the
                  globe have enrolled in his courses covering network security,
                  Python programming, web development, and more.
                </p>
              </div>
            </div>
          </article>
        </section>
      </article> */}
    </main>
  );
}
