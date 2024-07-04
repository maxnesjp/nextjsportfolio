"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { certificationData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type CertificationData = (typeof certificationData)[number];

const CertificationCard = ({
  title,
  description,
  tags,
  imageUrl,
  proofpath,
}: CertificationData) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const isScrollable = imageUrl.length > 1;

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.15 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group w-full flex border-[0.1rem] bg-gray-100 border-gray-300 p-2 rounded-lg shadow-lg hover:bg-gray-700 hover:text-gray-100 transition"
    >
      <div className="w-full sm:w-7/12 text-left p-4 relative">
        <h2 className="font-medium text-xl mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2 absolute bottom-0">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 group-hover:bg-gray-800 group-hover:text-gray-100 hover:scale-105 transition  mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`w-full sm:w-5/12 ${
          isScrollable ? "overflow-y-auto" : ""
        } flex flex-col justify-start items-center p-4 gap-4 relative`}
        style={{ maxHeight: "400px" }}
      >
        {imageUrl.map((url, index) => (
          <a
            key={index}
            href={proofpath[index]}
            target="_blank"
            rel="noopener noreferrer"
            className={`block flex-shrink-0 mb-4 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-50 hover:opacity-100"
            }`}
            onClick={() => handleImageClick(index)}
          >
            <div className="relative">
              <Image
                src={url}
                alt={`${title} ${index}`}
                className="rounded-sm shadow-xl"
                width={400}
                height={400}
                quality="95"
                priority={true}
              />
              {isScrollable && (
                <div className="absolute top-2 right-2 bg-gray-900 text-white rounded-full p-1 text-xs font-semibold">
                  {index + 1}/{imageUrl.length}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default CertificationCard;
