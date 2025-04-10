import { useEffect, useState } from "react";
import CategoryCard from "../components/card/CategoryCard.jsx";
import CourseCard from "../components/card/CourseCard.jsx";
import getCategory from "../api/getCategory.js";
import getAllCourses from "../api/getAllCourses.js";
import { useNavigate } from "react-router-dom";

export function AllCourses() {
  const [popularCourses, setPopularCourses] = useState([]);
  const [courses, setCourses] = useState();
  const navigate = useNavigate();
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
  console.log(courses);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleCourseClick = (slug) => {
    navigate(`/coursedetail/${slug}`);
  };

  // Fetching the categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    try {
      const fetchCategory = async () => {
        const data = await getCategory();
        setCategories(data ? data : []);
      };

      fetchCategory();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      {/* <main className="bg-white">
            <section className="w-full bg-gray-200 h-[400px] flex flex-col items-center justify-center">
                    <div className="text-center flex flex-col items-center gap-y-4">
                        <h1 className="text-primary-light text-2xl md:text-4xl lg:text-5xl"><b>Discover Your Next<br/>Learning Adventure</b></h1>
                        <div className="hidden">
                            <h3 className="text-primary-light md:text-md lg:text:md">Unlock a world of knowledge with our expert-led IT courses.
                            Whether <br/> you're a beginner or an experienced professional,
                            we have something for<br/>everyone. Start learning today!
                            </h3>
                        </div>
                        <div className="absolute top-10 left-1/6 w-6 h-6 bg-accent-light rounded-full"></div>
                        <div className="absolute top-40 right-1/8 w-4 h-4 bg-secondary-light rounded-full"></div>
                        <div className="absolute bottom-120 left-1/4 w-4 h-4 bg-secondary-light rounded-full"></div>
                        <img className="absolute top-32 left-1/10" src="/images/light.svg"/>
                        <img className="absolute top-12 right-1/6" src="/images/ufo.svg"/>
                        <div className="md:hidden lg:hidden">
                            <h3 className="text-primary-light text-xs">Unlock a world of knowledge with our expert-led IT courses.
                            <br/>Whether you're a beginner or an experienced professional,
                                we have <br/> something for everyone. Start learning today!
                            </h3>
                        </div>
                        <div className="text-gray-500 w-68 md:w-120 lg:w-160 h-12 px-4 bg-white p-2 rounded-md flex justify-between items-center shadow-sm">
                            <input className="text-xs md:text-md focus:outline-none w-full h-full" type="search" name="search" id="search" placeholder="Search" />
                            <i class="text-xs md:text-md fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
            </section>
        <section>
            <div className="flex gap-x-4 overflow-scroll w-full px-30 py-8">
                {CategoryData.map((category) => (
                    <CategoryCard key={category.id} title={category.title} icon={category.icon} />
                ))}
            </div>
        </section>
       
        <div className="px-5 md:px-15 py-4 lg:px-30">
            <h2 className="text-2xl text-primary-light"><b>Popular Courses</b></h2>
        </div>
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:gap-50 lg:grid-cols-4 gap-5 px-30">
                {PopularCourseData.map((course) => (
                    <PopularCourseCard key={course.id} avatar={course.avatar} title={course.title}
                                       subtitle={course.subtitle} icon={course.icon} lesson={course.lesson} 
                                       time={course.time} description={course.description} />
                ))}
            </div>
        </section>
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-30">
                <h2><b>All Courses</b></h2>
                {AllCourseData.map((course) => (
                    <AllCourseCard key={course.id} avatar={course.avatar} title={course.title} subtitle={course.subtitle} icon={course.icon} />
                ))}</div>
        </section>
        </main> */}
      <main className="bg-white">
        <section className="w-full bg-gray-200 h-[400px] md:h-[500px] relative overflow-hidden flex flex-col items-center justify-center px-4">
          <div className="text-center flex flex-col items-center gap-y-4 max-w-4xl mx-auto">
            <h1 className="text-primary text-h1-small md:text-h1-medium lg:text-h1-large font-bold">
              Discover Your Next Learning Adventure
            </h1>

            <div className="absolute top-10 left-1/6 w-6 h-6 bg-accent-light rounded-full"></div>
            <div className="absolute top-40 right-1/8 w-4 h-4 bg-secondary-light rounded-full"></div>
            <div className="absolute bottom-30 left-1/4 w-4 h-4 bg-secondary-light rounded-full"></div>
            <img
              className="absolute top-32 left-1/10 w-8 h-8"
              src="/images/light.svg"
              alt="decoration"
            />
            <img
              className="absolute top-12 right-1/6 w-8 h-8"
              src="/images/ufo.svg"
              alt="decoration"
            />

            <p className="text-primary/90 text-detail-small md:text-detail-medium lg:text-detail-large mx-auto">
              Unlock a world of knowledge with our expert-led IT courses.
              Whether <br /> you're a beginner or an experienced professional,
              we have something for everyone. Start learning today!
            </p>

            <div className="w-164 max-w-4xl h-12 px-4 bg-white rounded-md flex justify-between items-center shadow-sm">
              <input
                className="text-sm sm:text-base focus:outline-none w-full h-full"
                type="search"
                placeholder="Search courses..."
              />
              <i className="text-sm sm:text-base fa-solid fa-magnifying-glass text-gray-500"></i>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-5 md:px-15 lg:px-30 py-8">
          <div className="flex gap-4 overflow-x-auto py-2 scrollbar-hidden">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category?.name}
                onClick={handleCategoryClick}
                icon={category?.icon.replace(
                  "http://localhost:8080/image/",
                  ""
                )}
              />
            ))}
          </div>
        </section>

        <section className="px-5 md:px-[60px] lg:px-[120px] py-8">
          <h2 className="text-2xl md:text-3xl text-primary-light font-bold mb-6">
            Popular Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularCourses?.map((course) => (
              <CourseCard
                key={course?.id}
                id={course?.id}
                onClick={handleCourseClick}
                thumbnail={course?.thumbnail}
                title={course?.title}
                subtitle={course.subtitle}
                instructor={course?.instructorUsername}
                description={course?.description}
              />
            ))}
          </div>
        </section>

        <section className="px-5 md:px-[60px] lg:px-[120px] py-8">
          <h2 className="text-2xl md:text-3xl text-primary-light font-bold mb-6">
            All Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
            {courses?.map((course) => (
              <CourseCard
                key={course?.id}
                id={course?.id}
                onClick={handleCourseClick}
                thumbnail={course?.thumbnail}
                title={course?.title}
                subtitle={course.subtitle}
                instructor={course?.instructorUsername}
                description={course?.description}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
