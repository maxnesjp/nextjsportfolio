"use client";
import React from "react";
import Heading from "./heading";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mb-18 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.22 }}
    >
      <Heading title="About Me"></Heading>
      <p className="mb-3">
        Graduated with degrees of{" "}
        <span className="font-medium">Computer Science and Economics</span> with
        GPA of 3.84/4.00. Having had 2 software engineering internships both
        specializing in{" "}
        <span className="font-medium">
          .NET, Javascript and Microsoft DevOps
        </span>
        , I have gained just enough to knowledge to get my first full-time in{" "}
        <span className="italic">full stack development</span> at tax company
        working on{" "}
        <span className="font-medium">Japan tax processing and management</span>{" "}
        web app. Since then I have been more and more passionate about coding
        and software. <span className="underline">2.5 years since then</span> I
        can confidently say that I am highly proficient with{" "}
        <span className="font-medium">
          .NET, React.js, Next.js, Node.js, SQL Server and Microsoft DevOps
        </span>
        . I am also familiar with Python and Java. I am always looking to learn
        new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer mainly focusing on the{" "}
        <span className="underline">back-end in .NET</span>
      </p>

      <p>
        <span className="italic">Apart from my passion</span>, I enjoy
        motorcycle riding, going on road trips with friends and spending time
        around animals (I myself am raising 2 cockatiels). Also, I am into{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          human psychology and world economies
        </span>
      </p>
    </motion.section>
  );
};

export default About;
