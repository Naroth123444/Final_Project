import React from "react";

export default function AddressCard(props) {
  const { icon, title, description, value } = props;
  return (
    <div className="flex flex-col items-start gap-6 px-4 py-6 shadow-small rounded-small dark:bg-black/50 dark:text-dark-primary">
      <span className="h-12 w-12 flex justify-center items-center shadow-small dark:bg-dark-bg rounded-small">
        <img className="dark:invert" src={icon} alt="" />
      </span>
      <article className="flex flex-col gap-2">
        <span className="text-sub-title-small md:text-sub-title-medium lg:text-sub-title-large font-semibold text-primary dark:text-dark-primary">
          {title}
        </span>
        <p className="text-detail-small md:text-detail-medium lg:text-detail-large text-primary/80 dark:text-dark-primary/80">
          {description}
        </p>
      </article>
      <p className="font-medium text-[16px] underline dark:text-dark-accent">
        {value}
      </p>
    </div>
  );
}
