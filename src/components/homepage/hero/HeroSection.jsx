import React from "react";
import Widget from "./Widget";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <section className="relative z-10 flex flex-col w-full h-fit md:h-[100vh] md:flex-row justify-center pt-[50px] sm:pt-[72px] px-5 md:px-[60px] lg:px-[120px] dark:bg-[#121212] dark:text-white">
        <article className="space-y-8 w-full h-[80vh] md:h-full md:w-[70vw] flex flex-col justify-center text-center md:text-start">
          <h1 className="text-h1-small md:text-h1-medium xl:text-h1-large font-bold text-primary dark:text-accent">
            Transform Your Future with Quality{" "}
            <span className="text-accent dark:text-[#FFD700]">Education</span>{" "}
            and Lifelong Learning
          </h1>
          <p className="text-black/60 text-body-text-small md:text-body-text-medium xl:text-body-text-large dark:text-gray-300">
            Explore expert-led courses, gain valuable skills, and unlock new
            opportunities for personal and professional growth.{" "}
          </p>
          <div className="flex space-x-2.5 justify-center md:justify-start">
            <button className="large-button w-full max-w-[232px]">
              Get Started
            </button>
            <button
              className="flex justify-center items-center w-full max-w-[232px] rounded-small bg-transparent text-accent border-2 border-accent hover:text-white hover:bg-accent transition-colors ease-in-out duration-300 h-full dark:bg-transparent font-semibold dark:text-dark-accent"
              onClick={() => navigate("/about")}
            >
              Learn more
            </button>
          </div>
        </article>
        <figure className="hidden md:flex relative w-full h-full justify-center items-center overflow-y-visible">
          <img
            className="md:absolute md:top-[-80px] w-full h-full"
            src={"./img/heroimage.svg"}
            alt=""
          />
          <Widget
            className="hidden xl:flex absolute translate-x-[-200px] translate-y-[10px]"
            img={"./icons/calculate.svg"}
            title={"100+"}
            des={"Courses"}
            bg={"bg-accent"}
          />
          <Widget
            className="hidden xl:flex absolute translate-x-20 translate-y-75"
            img={"./icons/calculate.svg"}
            title={"Learners"}
            des={"500+"}
            bg={"bg-primary"}
          />
          <Widget
            className="hidden xl:flex absolute translate-x-60 translate-y-[-150px]"
            img={"./icons/star.svg"}
            title={"4.8"}
            des={"Satisfaction"}
          />
        </figure>
      </section>
      <img
        className="hidden z-20 md:inline absolute translate-x-180 translate-y-10"
        src={"./img/elementarrow.svg"}
        alt=""
      />
      <img
        className="hidden z-20 md:inline absolute translate-x-[-700px] translate-y-[-200px]"
        src={"./img/ellipse.svg"}
        alt=""
      />
      <img
        className="hidden z-20 md:inline absolute translate-x-[800px] translate-y-[500px]"
        src={"./img/ellipse.svg"}
        alt=""
      />
      <img
        className="hidden z-20 md:inline md:absolute translate-x-[-720px] translate-y-[580px]"
        src={"./img/elementarrow01.svg"}
        alt=""
      />
    </>
  );
}
