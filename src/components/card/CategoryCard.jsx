import React, { useState } from "react";

export default function CategoryCard(props) {
  const [isActive, setIsActive] = useState(false);
  const { title, icon, onClick } = props;

  const handleClick = (title) => {
    setIsActive(!isActive);
    return onClick(title);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        flex items-center gap-4 p-4 rounded-lg cursor-pointer 
        transition-all duration-300 ease-in-out w-fit
        shadow-sm hover:shadow-md
        border border-gray-200 hover:border-accent/30
        ${isActive ? "bg-accent/10 border-accent/50 shadow-inner" : "bg-white"}
      `}
    >
      <i
        className={`
          ${icon} text-lg md:text-xl
          ${isActive ? "text-accent" : "text-gray-600"}
          transition-colors duration-300
        `}
      />
      <span
        className={`
          text-sm md:text-base font-medium capitalize w-fit
          ${isActive ? "text-accent" : "text-gray-700"}
          transition-colors duration-300
        `}
      >
        {title}
      </span>
    </div>
  );
}
