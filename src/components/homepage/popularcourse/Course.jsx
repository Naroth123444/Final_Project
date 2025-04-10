import React from "react";
import PropTypes from "prop-types";
import { SlUserFollowing } from "react-icons/sl";

const Course = ({ slug, category, title, instructor, thumbnail, onClick }) => {
  const handleClick = () => {
    onClick?.(slug);
  };

  return (
    <article
      onClick={handleClick}
      className="group flex flex-col p-4 gap-3 rounded-small shadow-small hover:shadow-medium transition-shadow cursor-pointer dark:bg-black dark:text-dark-primary/80"
      role="button"
      tabIndex={0}
      aria-label={`View course: ${title}`}
    >
      {/* Thumbnail */}
      <div
        className="w-full h-[169px] rounded-small bg-cover bg-center"
        style={{ backgroundImage: `url(${thumbnail})` }}
        aria-hidden="true"
      />

      {/* Course Category */}
      <span className="text-xs uppercase tracking-wide text-accent dark:text-dark-accent/80">
        {category}
      </span>

      {/* Course Title */}
      <h3 className="text-lg font-semibold line-clamp-1 text-primary dark:text-dark-primary">
        {title}
      </h3>

      {/* Instructor Info */}
      <div className="flex justify-between items-center text-sm text-primary/70 dark:text-dark-primary/60">
        <span className="flex items-center gap-2">
          <SlUserFollowing size={14} /> Instructor
        </span>
        <span>{instructor}</span>
      </div>
    </article>
  );
};

Course.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Course.defaultProps = {
  onClick: undefined,
};

export default Course;
