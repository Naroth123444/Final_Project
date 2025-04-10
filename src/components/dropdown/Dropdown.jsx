import { useState } from "react";
import { ChevronUp, ChevronDown, PlayCircle } from "lucide-react";

const Dropdown = ({ title, lessons }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border rounded-lg overflow-hidden bg-white shadow-md">
      {/* Header Section */}
      <button
        className={`w-full flex items-center justify-between p-4 font-semibold text-lg ${isOpen ? "bg-yellow-400" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {lessons.map((lesson, index) => (
          <div key={index} className="flex items-center justify-between p-4 border-t bg-gray-50 hover:bg-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                <PlayCircle size={20} className="text-gray-700" />
              </div>
              <p className="text-gray-800">{lesson.title}</p>
            </div>
            <span className="text-gray-600">{lesson.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
const CourseList = () => {
  const sections = [
    {
      title: "Introduction",
      lessons: [
        { title: "Introduction, basics of terminology, construction of web pages", duration: "2h 40m" },
        { title: "Semantic and Accessibility", duration: "5h 30m" },
      ],
    },
    {
      title: "HTML",
      lessons: [
        { title: "State Management in React", duration: "3h 20m" },
        { title: "Performance Optimization", duration: "4h 10m" },
      ],
    },
    {
      title: "CSS",
      lessons: [
        { title: "State Management in React", duration: "3h 20m" },
        { title: "Performance Optimization", duration: "4h 10m" },
      ],
    },
    {
      title: "Tailwind CSS",
      lessons: [
        { title: "State Management in React", duration: "3h 20m" },
        { title: "Performance Optimization", duration: "4h 10m" },
      ],
    },
    {
      title: "UX & UI Design",
      lessons: [
        { title: "State Management in React", duration: "3h 20m" },
        { title: "Performance Optimization", duration: "4h 10m" },
      ],
    },
    {
      title: "Javascript",
      lessons: [
        { title: "State Management in React", duration: "3h 20m" },
        { title: "Performance Optimization", duration: "4h 10m" },
      ],
    },
  ];

  return (
    <div className="space-y-2 mt-[100px]">
      {sections.map((section, index) => (
        <Dropdown key={index} title={section.title} lessons={section.lessons} />
      ))}
    </div>
  );
};

export default CourseList;
