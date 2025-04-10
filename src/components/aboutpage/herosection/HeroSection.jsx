import React from "react";

export default function HeroSection() {
  const handleScroll = () => {
    const targetSection = document.getElementById("whoweare");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <>
      <section className="relative z-10 flex flex-col items-center md:flex-row pt-[50px] sm:pt-[72px] px-5 md:px-[60px] lg:px-[120px] h-fit md:h-screen justify-center ">
        <article className="w-full h-screen md:h-fit md:w-[70%] items-center md:items-start flex flex-col text-center md:text-start justify-center gap-5">
          <h1 className="text-h1-small md:text-h1-medium lg:text-h1-large text-accent font-bold dark:text-dark-primary">
            About Us
          </h1>
          <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-primary font-bold dark:text-dark-primary">
            A Community of Passionate Learners &{" "}
            <span className="text-secondary dark:text-dark-accent">
              Educators
            </span>
          </h2>
          <div className="flex flex-col gap-14">
            <p className="text-body-small md:text-body-medium lg:text-body-large text-primary/80 dark:text-dark-primary/80">
              At Rean, we believe that education is the key to unlocking
              potential and shaping a brighter future. Our platform is designed
              to provide high-quality, accessible, and engaging learning
              experiences for students, professionals, and lifelong learners
              worldwide.
            </p>
            <button
              onClick={handleScroll}
              className="large-button w-fit m-auto md:m-0 dark:bg-dark-accent dark:text-dark-primary hover:dark:bg-dark-accent/90"
            >
              Explore more
            </button>
          </div>
        </article>
        <figure className="w-full h-full justify-center md:justify-end items-center overflow-y-visible relative flex">
          <img className="w-[90%]" src={"/img/heroabout.svg"} alt="" />
        </figure>
      </section>
      <img
        className="absolute top-[358px] left-[-148px] z-0 "
        src={"/img/circle-round.svg"}
        alt=""
      />
      <img
        className="absolute top-[-100px] right-[-250px] z-0 "
        src={"/img/circle-round.svg"}
        alt=""
      />
    </>
  );
}
