import React from "react";

export default function Widget(props) {
  const { title, description, icon } = props;
  return (
    <div className="h-fit w-full flex items-start gap-x-4 p-6 bg-white shadow-small rounded-3xl dark:bg-black">
      <figure className="w-12 h-12 flex-none rounded-full bg-accent flex justify-center items-center dark:bg-dark-accent">
        <img className="h-5" src={icon} alt="" />
      </figure>
      <article className="flex flex-col items-start gap-y-1">
        <span className="text-sub-title-small md:text-sub-title-medium lg:text-sub-title-large text-primary font-semibold dark:text-dark-primary/[0.8]">
          {title}
        </span>
        <p className="text-detail-small md:text-detail-medium lg:text-detail-large text-primary line-clamp-2 dark:text-dark-primary/[0.7]">
          {description}
        </p>
      </article>
    </div>
  );
}
