import React, { useState } from "react";
import { Link } from "react-router-dom";
import memberdata from "../../data/aboutpagedata/memberdata";
import saveToWatchLater from "../../api/saveToWatchLater";

export default function HeroSection(props) {
  const { id, category, title, description, thumbnail, instructor } = props;
  const instructorInfo = memberdata.find((data) => data.name === instructor);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    try {
      setIsSaving(true); // Add loading state if needed
      const success = await saveToWatchLater(id);
      if (success) {
        alert("Course saved successfully!"); // Consider using toast instead of alert
      } else {
        alert("Failed to save course");
      }
    } catch (e) {
      alert("Error saving course: " + e.message);
      console.error("Save error:", e);
    } finally {
      setIsSaving(false); // Reset loading state
    }
  };
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 md:py-0 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-secondary filter blur-3xl"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text content */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center md:justify-start space-x-3 text-lg text-gray-300">
            <Link
              to="/courses"
              className="hover:text-accent transition-colors duration-300 hover:underline"
            >
              Courses
            </Link>
            <span className="text-accent">/</span>
            <span className="text-white font-medium">{category}</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight md:leading-[1.2]">
            {title}
          </h1>

          {/* Rating and details */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-300">
            <div className="flex items-center">
              <div className="relative mr-2">
                <span className="text-gray-600 text-xl">★★★★★</span>
                <span className="text-yellow-400 text-xl absolute top-0 left-0">
                  ★★★★★
                </span>
              </div>
              <span>5.0 (1.2k reviews)</span>
            </div>
            <div className="w-px h-6 bg-gray-500"></div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>34 Hours</span>
            </div>
            <div className="w-px h-6 bg-gray-500"></div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              <span>15 Lessons</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto md:mx-0 leading-relaxed">
            {description}
          </p>

          {/* CTA section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="relative px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all duration-300 overflow-hidden group">
              <span className="relative z-10 flex items-center justify-center">
                Start Learning Now
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>

            <button
              onClick={handleSave}
              disabled={isSaving}
              className="relative px-8 py-4 border-2 border-gray-500 hover:border-accent text-white font-medium rounded-lg transition-all duration-300 group"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  ></path>
                </svg>
                {isSaving ? "Saving..." : "Save for Later"}
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4 text-gray-400">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>With Good Instructor</span>
            </div>
            <div className="w-px h-6 bg-gray-500"></div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Full Free Learning Course</span>
            </div>
          </div>
        </div>

        {/* Image container */}
        <div className="flex-1 max-w-2xl relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border-2 border-gray-700">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <button className="flex items-center justify-center w-full py-3 bg-white/90 hover:bg-white text-gray-900 font-bold rounded-lg transition-colors duration-300">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                </svg>
                Watch Course Preview
              </button>
            </div>
          </div>

          {/* Floating instructor card */}
          <div className="absolute -bottom-6 -left-6 bg-gray-800 rounded-xl shadow-xl p-4 flex items-center w-64 border border-gray-700">
            <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden mr-3 border-2 border-accent">
              <img
                src={instructorInfo?.avatar}
                alt="Instructor"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs text-gray-400">Instructor</p>
              <p className="font-medium text-white">{instructor}</p>
              <div className="flex mt-1">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-gray-400 text-xs ml-1">(4.9)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
