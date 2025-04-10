import React from "react";
import keybenefitsdata from "../../../data/aboutpagedata/keybenefitsdata";
import CardKeyBenefit from "./CardKeyBenefit";

const datas = keybenefitsdata;

export default function KeyBenefit() {
  return (
    <section className="relative z-10 flex flex-col gap-10 px-5 md:px-[60px] lg:px-[120px] dark:bg-dark-bg">
      <article className="flex flex-col items-center justify-center text-center gap-1">
        <span className="text-sub-title-small md:text-sub-title-medium lg:text-sub-title-large text-accent font-semibold dark:text-dark-accent">
          Our key benefits
        </span>
        <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-primary font-bold dark:text-dark-primary">
          Experience These Perks <br /> When You Become a Member
        </h2>
      </article>
      <main className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {datas.map((data) => (
          <CardKeyBenefit
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
          />
        ))}
      </main>
    </section>
  );
}
