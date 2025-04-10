import React, { useEffect, useState } from "react";
import IsLogin from "../../auth/IsLogin";
import { useNavigate } from "react-router-dom";
import saveToWatchLater from "../../api/saveToWatchLater";

export default function CourseCard(props) {
  const { id, thumbnail, title, subtitle, description, instructor, onClick } =
    props;
  const [isAuth, setAuth] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setAuth(IsLogin);
  }, []);
  const courseId = id;
  const handleCourseClick = () => {
    if (onClick) {
      onClick(courseId);
    }
  };

  const handleClick = async () => {
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
    <div
      className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[450px] cursor-pointer"
      onClick={handleCourseClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with hover effect */}
      <div className="relative h-[50%] overflow-hidden">
        <img
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          src={thumbnail}
          alt={title}
        />
        {/* Premium badge */}
        <div className="absolute top-3 right-3 bg-white text-primary font-bold px-3 py-1 rounded-full text-xs shadow-md">
          Free
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex-grow">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1 mb-1">
              {title}
            </h3>
            <p className="text-accent font-medium">{subtitle}</p>
          </div>

          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {description}
          </p>
        </div>

        {/* Instructor and action */}
        <div className="mt-auto">
          <div className="border-t border-gray-200 pt-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Instructor</span>
              <span className="text-sm font-medium text-gray-700">
                {instructor}
              </span>
            </div>
          </div>

          <button
            onClick={handleClick}
            disabled={isSaving}
            className={`w-full mt-4 py-2 rounded-md font-medium text-white transition-colors duration-300 ${
              isHovered ? "bg-dark-accent" : "bg-accent"
            }`}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
