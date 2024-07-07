"use client";
import { motion } from "framer-motion";
import React from "react";

const SectionDivider = () => {
  return (
    <motion.div
      className="bg-gray-300 my-12 sm:my-20 h-16 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    ></motion.div>
  );
};

export default SectionDivider;
