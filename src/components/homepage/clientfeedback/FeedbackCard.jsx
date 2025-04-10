import React from "react";

export default function FeedbackCard(props) {
  const { profile, name, role, feedback, star } = props;
  return (
    <div className="h-[397px] text-center px-8 gap-y-6 flex flex-col justify-center items-center shadow-small rounded-3xl bg-white dark:bg-black/50">
      <figure className="flex flex-col justify-center items-center gap-4">
        <img className="w-20 h-20 rounded-full" src={profile} alt="" />
        <figcaption className="flex flex-col gap-0.5">
          <span className="text-sub-title-small md:text-sub-title-medium lg:text-sub-title-large text-primary dark:text-dark-primary font-semibold">
            {name}
          </span>
          <span className="text-detail-small md:text-detail-medium lg:text-detail-large text-primary/70 dark:text-dark-primary/70">
            {role}
          </span>
        </figcaption>
      </figure>
      <div className="h-[1px] w-full bg-[#E9EFF5] rounded-full dark:bg-dark-accent"></div>
      <article className="flex flex-col gap-4">
        <p className="text-body-small md:text-body-medium lg:text-body-large text-[#0F1125] dark:text-dark-primary/70">
          {feedback}
        </p>
        <span className="flex justify-center items-center gap-1">
          {Array(star)
            .fill(0)
            .map((value, index) => (
              <img key={index} src="/icons/ratingstar.svg" alt="" />
            ))}
        </span>
      </article>
    </div>
  );
}
