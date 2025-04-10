import React from "react";
import { useNavigate } from "react-router-dom";
import aboutUsFeatures from "../../../data/homepagedata/aboutUsFeatures";
import Widget from "./Widget";

const datas = aboutUsFeatures;
export default function AboutSection() {
  const navigate = useNavigate();
  return (
    <>
      <section className="hidden xl:flex flex-col gap-y-10 w-full px-5 md:px-[60px] lg:px-[120px] ">
        <main className="flex flex-col md:flex-row w-full gap-x-50">
          <figure className="w-screen md:w-[100%]  md:min-w-[588px] relative flex justify-center md:justify-start items-center h-[588px] ">
            <img
              className=" w-full md:w-[588px] h-[588px] rounded-3xl"
              src="/img/team.jpg"
              alt=""
            />
            <figure className="w-72 h-72 bg-secondary dark:bg-primary p-2 rounded-2xl absolute md:right-[-140px] right-0 flex justify-center items-center">
              <img
                className="h-full rounded-2xl"
                src="/img/team01.jpg"
                alt=""
              />
            </figure>
          </figure>
          <article className=" flex flex-col justify-center gap-y-10 ">
            <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-primary dark:text-dark-primary font-bold">
              About Us
            </h2>
            <p className="text-body-text-small md:text-body-text-medium lg:text-body-text-large text-primary/70 dark:text-dark-primary/70">
              We are dedicated to providing high-quality education for learners
              of all levels. Our platform offers expert-led courses designed to
              help you grow and succeed
            </p>
            <button
              className="medium-button w-fit"
              onClick={() => navigate("/about")}
            >
              Learn more
            </button>
          </article>
        </main>
        <div className="grid grid-cols-3 gap-x-5">
          {datas.map((data) => (
            <Widget
              key={data.id}
              id={data.id}
              title={data.title}
              description={data.description}
              icon={data.icon}
            />
          ))}
        </div>
      </section>
      {/* FOr small screen */}
      <section className="flex xl:hidden flex-col w-full gap-y-10 px-5 md:px-[60px] lg:px-[120px]">
        <figure className="relative flex justify-center items-center">
          <img className=" w-full " src="/img/team.jpg" alt="" />
          <figure className="w-64 h-64 bg-secondary p-2 rounded-2xl absolute bottom-[-130px] flex justify-center items-center">
            <img className="h-full rounded-2xl" src="/img/team01.jpg" alt="" />
          </figure>
        </figure>
        <div className="flex flex-col-reverse md:flex-row gap-10 mt-30">
          <div className="grid grid-cols-1 gap-y-5 w-full md:w-[50%]">
            {datas.map((data) => (
              <Widget
                key={data.id}
                id={data.id}
                title={data.title}
                description={data.description}
                icon={data.icon}
              />
            ))}
          </div>
          <article className="w-full text-center md:text-start md:w-[50%] flex flex-col justify-center items-center md:items-start gap-y-10 ">
            <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-primary font-bold">
              About Us
            </h2>
            <p className="text-body-text-small md:text-body-text-medium lg:text-body-text-large text-primary/70">
              We are dedicated to providing high-quality education for learners
              of all levels. Our platform offers expert-led courses designed to
              help you grow and succeed
            </p>
            <button
              className="medium-button w-fit"
              onClick={() => navigate("/about")}
            >
              Learn more
            </button>
          </article>
        </div>
      </section>
    </>
  );
}
