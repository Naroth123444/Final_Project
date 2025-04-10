import React from "react";
import faqData from "../../../data/homepagedata/faqData";
import QuestionAnswer from "./QuestionAnswer";

const datas = faqData;

export default function Faq() {
  return (
    <section className="flex flex-col xl:flex-row gap-5 px-5 md:px-[60px] lg:px-[120px] bg-white dark:bg-dark-bg">
      <article className="flex flex-col justify-start items-center gap-4">
        <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-primary dark:text-dark-primary font-bold text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-detail-small text-center md:text-detail-medium lg:text-detail-large text-primary/70 dark:text-dark-primary/[0.7]">
          Find answers to common questions about Rean, including course
          offerings, enrollment, learning format, and more.
        </p>
        <figure>
          <img src={"/img/faqimage.svg"} alt="" />
        </figure>
      </article>
      <section className="flex flex-col w-full xl:w-[70%] gap-5">
        {datas.map((data) => (
          <QuestionAnswer
            key={data.id}
            question={data.question}
            answer={data.answer}
          />
        ))}
      </section>
    </section>
  );
}
