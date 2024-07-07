"use client";
import { experiencesData } from "@/lib/data";
import React, { useEffect, useState } from "react";
import Heading from "./heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.3);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  return (
    <section
      className="mb-20 w-full max-w-6xl text-center leading-8 scroll-m-28 mx-auto"
      id="experience"
      ref={ref}
    >
      <Heading title="Experience" />
      <div>
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            className={`py-6 sm:py-10 flex flex-col sm:flex-row gap-2 ${
              index != experiencesData.length - 1 && "border-b-2"
            } ${
              index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
            } w-full`}
            initial={{
              opacity: 0,
              x: isSmallScreen ? 0 : index % 2 === 0 ? 100 : -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.4,
            }}
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
