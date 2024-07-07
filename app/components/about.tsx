"use client";
import React, { useEffect } from "react";
import Heading from "./heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.22 }}
      id="about"
      ref={ref}
    >
      <Heading title="About Me"></Heading>
      <p className="mb-3">
        I graduated with degrees in{" "}
        <span className="font-medium">Computer Science and Economics</span> with
        a GPA of 3.84/4.00. Having completed two software engineering
        internships specializing in{" "}
        <span className="font-medium">
          .NET, JavaScript, and Microsoft DevOps
        </span>
        , I gained enough knowledge to secure my first full-time position in{" "}
        <span className="italic">full-stack development</span> at a tax company,
        working on a{" "}
        <span className="font-medium">Japan tax processing and management</span>{" "}
        web app. Since then, my passion for coding and software has only grown.{" "}
        <span className="underline">2.5 years later</span>, I can confidently
        say that I am highly proficient in{" "}
        <span className="font-medium">
          .NET, React.js, Next.js, Node.js, SQL Server, and Microsoft DevOps
        </span>
        . I am also familiar with Python and Java and am always looking to learn
        new technologies. I am currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer, mainly focusing on the{" "}
        <span className="underline">back-end in .NET</span>.
      </p>
      <p>
        <span className="italic">Apart from my passion for coding</span>, I
        enjoy motorcycle riding, going on road trips with friends, and spending
        time with animals (I am raising two cockatiels). I also love{" "}
        <span className="font-medium">learning new things</span>. Currently, I
        am learning about{" "}
        <span className="font-medium">
          human psychology and world economies
        </span>
        .
      </p>
    </motion.section>
  );
};

export default About;
