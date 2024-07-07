"use client";
import { experiencesData } from "@/lib/data";
import React, { useEffect } from "react";
import Heading from "./heading";
import { useActiveSectionContext } from "./context/activeSection";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Experience");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      className="sm:pb-40 w-full max-w-6xl text-center leading-8 scroll-m-28 mx-auto"
      id="experience"
      ref={ref}
    >
      <Heading title="Experience" />
      <div>
        {experiencesData.map((item, index) => (
          <div
            key={index}
            className={`py-6 sm:py-10 flex flex-col sm:flex-row gap-2 border-b-2 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
            } w-full`}
          >
            <div
              className={`text-left w-full sm:w-1/2 flex flex-col gap-1 ${
                index % 2 === 0 ? "sm:left-0" : "sm:right-0"
              }`}
            >
              <p className="font-medium bg-gray-700 py-1 px-3 text-gray-100 rounded w-fit shadow-md mb-3">
                {item.date}
              </p>
              <h3 className="font-bold text-xl flex gap-2 items-center">
                {item.icon}
                {item.title}
              </h3>
              <p>{item.description}</p>
              <p>{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
