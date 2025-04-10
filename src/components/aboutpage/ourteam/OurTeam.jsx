import React from "react";
import memberdata from "../../../data/aboutpagedata/memberdata";
import MemberCard from "./MemberCard";

const instructors = memberdata.filter((member) => member.role === "Instructor");
const membersMale = memberdata.filter(
  (member) => member.gender === "male" && member.role !== "Instructor"
);
const membersFemale = memberdata.filter(
  (member) => member.gender === "female" && member.role !== "Instructor"
);

export default function OurTeam() {
  return (
    <section className="relative w-full z-10 flex flex-col items-center gap-10 px-5 md:px-[60px] lg:px-[120px] dark:bg-dark-bg">
      {/* Mentors Section */}
      <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-primary font-bold dark:text-dark-primary">
        Our Mentors
      </h2>
      <div className="w-full md:w-fit grid grid-cols-1 md:grid-cols-2 gap-5">
        {instructors.map((data) => (
          <MemberCard
            key={data.id}
            avatar={data.avatar}
            name={data.name}
            role={data.role}
            facebook={data.facebook}
            github={data.github}
          />
        ))}
      </div>

      {/* Team Section */}
      <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-primary font-bold dark:text-dark-primary">
        Our Team
      </h2>
      <section className="flex flex-col gap-5 items-center w-full">
        <div className="w-full md:w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {membersMale.map((data) => (
            <MemberCard
              key={data.id}
              avatar={data.avatar}
              name={data.name}
              role={data.role}
              facebook={data.facebook}
              github={data.github}
            />
          ))}
        </div>
        <div className="w-full md:w-fit grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {membersFemale.map((data) => (
            <MemberCard
              key={data.id}
              avatar={data.avatar}
              name={data.name}
              role={data.role}
              facebook={data.facebook}
              github={data.github}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
