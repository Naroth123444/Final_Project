import React from "react";

export default function CardKeyBenefit(props) {
  const { id, title, description } = props;
  return (
    <div
      className={`flex flex-col p-5 gap-5 items-start shadow-small rounded-small ${
        id % 2 == 0
          ? "bg-white dark:bg-black"
          : "bg-secondary/5 dark:bg-black/30"
      }`}
    >
      <span className="relative flex w-14 h-14 items-start justify-start">
        <span className="text-[34px] font-medium text-accent dark:text-dark-accent">
          0{id}
        </span>
        <img
          className="absolute bottom-0 right-0 dark:invert"
          src={"/img/halfellipse.svg"}
          alt=""
        />
      </span>
      <span className="text-sub-title-small md:text-sub-title-medium lg:text-sub-title-large text-primary font-semibold dark:text-dark-primary">
        {title}
      </span>
      <p className="text-detail-small md:text-detail-medium lg:text-detail-large text-primary/80 dark:text-dark-primary/80">
        {description}
      </p>
    </div>
  );
}
