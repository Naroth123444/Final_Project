import React from "react";
import { Link } from "react-router-dom";

export default function MemberCard(props) {
  const { avatar, name, role, facebook, github } = props;
  return (
    <div
      className={`flex flex-col gap-1 px-4 py-8 shadow-small rounded-3xl w-auto md:w-[285px] ${
        role === "Leader"
          ? "md:col-span-2 md:justify-self-center xl:col-span-1"
          : ""
      } dark:bg-black dark:text-dark-primary`}
    >
      <figure className="flex flex-col items-center gap-4">
        <img
          className="hover:scale-105 transition-all ease-in-out duration-300 w-30 h-30 md:w-[189px] md:h-[189px] rounded-full overflow-hidden shadow-small outline-2 border-4 border-transparent outline-secondary/80 dark:outline-dark-accent"
          src={avatar}
          alt={"Our Team : " + name}
        />
        <figcaption className="flex flex-col gap-0.5 items-center text-center">
          <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold text-primary dark:text-dark-primary">
            {name}
          </h3>
          <p className="text-detail-small md:text-detail-medium lg:text-detail-large text-primary/70 dark:text-dark-primary/70">
            {role}
          </p>
        </figcaption>
      </figure>
      {/* Division */}
      <div className="h-[1px] w-full bg-[#E9EFF5] rounded-full dark:bg-dark-accent"></div>
      <nav className="flex gap-2.5 justify-center items-center p-2.5">
        <li>
          <Link
            className="hover:scale-105 dark:bg-dark-bg  transition-all ease-in-out duration-300 w-12 h-12 rounded-small shadow-small flex justify-center items-center"
            target="_blank"
            to={facebook}
          >
            <img src={"/icons/facebook.svg"} alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link
            className="hover:scale-105 dark:bg-dark-bg transition-all ease-in-out duration-300 w-12 h-12 rounded-small shadow-small flex justify-center items-center"
            target="_blank"
            to={github}
          >
            <img src={"/icons/github.svg"} alt="Git Hub" />
          </Link>
        </li>
      </nav>
    </div>
  );
}
