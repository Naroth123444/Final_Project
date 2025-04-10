import React, { useState } from "react";

export default function QuestionAnswer(props) {
  const { question, answer } = props;
  const [icon, setIcon] = useState("/icons/expand.svg");
  const [isExpand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!isExpand);
    setIcon(isExpand ? "/icons/expand.svg" : "/icons/unexpand.svg");
  };

  return (
    <>
      <article
        className={`flex flex-col p-6 gap-6 rounded-2xl shadow-small transition-all duration-500 ease-in-out ${
          isExpand ? "max-h-[500px]" : "max-h-[100px]"
        } bg-white dark:bg-black`}
      >
        <div className="flex items-center justify-between">
          <p className="text-sub-title-small md:text-sub-title-medium lg:text-sub-title-large font-semibold text-primary dark:text-dark-primary">
            {question}
          </p>
          <span
            className={`h-10 w-10 text-primary  flex justify-center items-center rounded-small ${
              isExpand ? "bg-accent" : "bg-secondary/20"
            } dark:bg-dark-secondary/20 dark:text-dark-primary`}
            onClick={handleClick}
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                isExpand ? "rotate-180" : "rotate-0"
              }`}
            >
              <img src={icon} alt="Menu icons" />
            </div>
          </span>
        </div>
        <p
          className={`${
            isExpand ? "block opacity-100" : "hidden opacity-0"
          } text-black/70 dark:text-dark-primary/70 text-body-text-small md:text-body-text-medium lg:text-body-text-large transition-all ease-in-out duration-300`}
        >
          {answer}
        </p>
      </article>
    </>
  );
}
