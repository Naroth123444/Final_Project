import React from "react";
import feedbackData from "../../../data/homepagedata/feedbackData";
import FeedbackCard from "./FeedbackCard";

const datas = feedbackData;

export default function ClientFeedback() {
  const handleScroll = () => {
    const targetSection = document.getElementById("feedbackform");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <section className="flex flex-col gap-10 px-5 md:px-[60px] lg:px-[120px]">
      <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-accent font-bold text-center dark:text-dark-accent">
        Client Feedback
      </h2>
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="h-[397px] px-8 gap-y-10 flex flex-col justify-center items-center bg-primary rounded-3xl dark:bg-black">
          <article className="flex flex-col items-start gap-2">
            <span className="text-detail-small md:text-detail-medium lg:text-detail-large text-accent dark:text-dark-accent">
              Learners Feedback
            </span>
            <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-white font-bold dark:text-dark-primary">
              What they say after learning our course
            </h2>
            <p className="text-body-text-small md:text-body-text-medium lg:text-body-text-large text-white dark:text-dark-primary/70">
              Many of our members have started their early careers with us.
            </p>
          </article>
          <button onClick={handleScroll} className="large-button w-full">
            Join Now!
          </button>
        </div>
        {datas.map((data) => (
          <FeedbackCard
            key={data.id}
            profile={data.profile}
            name={data.name}
            role={data.role}
            feedback={data.feedback}
            star={data.star}
          />
        ))}
      </main>
    </section>
  );
}
