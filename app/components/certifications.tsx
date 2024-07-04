"use client";
import React from "react";
import Heading from "./heading";
import { certificationData } from "@/lib/data";
import Image from "next/image";
import CertificationCard from "./certificationItem";

// Define a type for the certification data with readonly arrays
interface CertificationData {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: readonly string[];
  proofpath: readonly string[];
}

export default function Certifications() {
  return (
    <section className="mb-18 max-w-[45rem] text-center leading-8 sm:mb-40">
      <Heading title="Certifications" />
      <div className="flex flex-wrap w-full flex-col gap-6">
        {certificationData.map((section, index) => (
          <React.Fragment key={index}>
            <CertificationCard {...section} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function Certification({
  title,
  description,
  tags,
  imageUrl,
  proofpath,
}: CertificationData) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const isScrollable = imageUrl.length > 1;

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full flex border-[0.1rem] border-gray-300 p-2 rounded-lg shadow-lg">
      <div className="w-full sm:w-5/12 text-left p-4">
        <h2 className="font-medium text-xl mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="mb-4 flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`w-full sm:w-7/12 ${
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
    </div>
  );
}
