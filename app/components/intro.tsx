"use client";
import Image from "next/image";
import React from "react";
import profilePhoto from "@/public/IMG_4053.png";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
          >
            <Image
              src={profilePhoto}
              alt="profilePhoto"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.25rem] border-spacing-3 border-red-600 shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute -bottom-1 right-3 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.7,
            }}
          >
            🤌
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Maxim (Max).</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">full-stack web apps</span>. My focus
        is <span className="underline">.NET and React (Next.js)</span>.
      </motion.h1>
    </section>
  );
};

export default Intro;
