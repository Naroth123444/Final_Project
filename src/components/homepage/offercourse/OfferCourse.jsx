import React from "react";
import offerCourses from "../../../data/homepagedata/offerCourses";
import Card from "./Card";

const datas = offerCourses;

export default function OfferCourse() {
  return (
    <section className="flex flex-col gap-y-10 px-5 md:px-[60px] lg:px-[120px] bg-white dark:bg-dark-bg">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large font-bold text-primary dark:text-dark-primary">
          Courses We Offer
        </h2>
        <p className="text-detail-small text-center md:text-detail-medium lg:text-detail-large text-primary/70 dark:text-dark-primary/[0.7]">
          Learn from expert-led courses in web development, UI/UX, and more to
          boost your skills.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
        {datas.map((data) => (
          <Card
            key={data.id}
            type={data.type}
            title={data.title}
            description={data.description}
            courses={data.courses}
          />
        ))}
      </div>
    </section>
  );
}
