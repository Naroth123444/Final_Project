import React from "react";
import { useNavigate } from "react-router-dom";

export default function WhoWeAre() {
  const navigate = useNavigate();
  return (
    <>
      <section
        id="whoweare"
        className="z-10 flex flex-col md:flex-row items-center justify-between gap-5 px-5 md:px-[60px] lg:px-[120px]"
      >
        <figure className="flex flex-col">
          <img src={"/img/whoweare.svg"} alt="" />
        </figure>
        <article className="w-full md:w-[45%] items-center text-center md:text-start md:items-start flex flex-col gap-4">
          <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-primary font-bold dark:text-dark-primary">
            Who We Are?
          </h2>
          <p className="text-body-small md:text-body-medium lg:text-body-large text-primary/80 dark:text-dark-primary/80">
            We are a team of passionate students from ISTAD, dedicated to
            creating an innovative education platform that makes learning
            accessible to everyone. As part of our project, we have designed
            this website to provide high-quality courses that empower learners
            to gain new skills and knowledge at their own pace. <br /> <br />
            Join us on this journey and take your learning to the next level!
          </p>
          <button
            className="large-button w-fit dark:bg-dark-accent dark:text-dark-primary hover:dark:bg-dark-accent/90"
            onClick={() => navigate("/login")}
          >
            Join with Us
          </button>
        </article>
      </section>
      <img
        className="z-0 absolute translate-y-[900px] translate-x-[-600px] bottom-0"
        src={"/img/ellipse.svg"}
        alt=""
      />
      <img
        className="z-0 absolute translate-y-[300px] translate-x-[700px] bottom-0"
        src={"/img/ellipse.svg"}
        alt=""
      />
    </>
  );
}
