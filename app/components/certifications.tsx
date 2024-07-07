"use client";
import React, { useEffect } from "react";
import Heading from "./heading";
import { certificationData } from "@/lib/data";
import CertificationCard from "./certificationItem";
import { useSectionInView } from "@/lib/hooks";

export default function Certifications() {
  const { ref } = useSectionInView("Certifications", 0.3);

  return (
    <section
      className="mb-20 max-w-[45rem] text-center leading-8 scroll-m-28"
      id="certifications"
      ref={ref}
    >
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
