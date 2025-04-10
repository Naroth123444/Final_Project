import React from "react";

export default function Card(props) {
  const { type, title, description, courses } = props;
  return (
    <div className="px-7 py-6 flex flex-col gap-y-3 items-start rounded-2xl shadow-small bg-white dark:bg-black">
      <span className="bg-secondary/20 px-2 rounded-small text-detail-small md:text-detail-medium lg:text-detail-large text-secondary dark:text-dark-secondary">
        {type}
      </span>
      <span className="text-sub-title-small md:text-sub-title-medium lg:text-sub-title-large text-primary font-semibold dark:text-dark-primary">
        {title}
      </span>
      <p className="text-detail-small md:text-detail-medium lg:text-detail-large text-primary/70 line-clamp-3 dark:text-dark-primary/[0.7]">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <figure></figure>
        <span className="flex justify-center items-center gap-x-1 text-detail-small text-[#858585] md:text-detail-medium lg:text-detail-large dark:text-dark-primary/[0.6]">
          <img src={"/icons/folder.svg"} alt="" /> {courses} courses
        </span>
      </div>
    </div>
  );
}
