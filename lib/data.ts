import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import back_end from "@/public/codecademy_back_end_certificate.png";
import interm_java from "@/public/codecademy_intermediate_java_certificate.png";
import advanced_java from "@/public/codecademy_advanced_java_certificate.png";
import data_structures_java from "@/public/codecademy_data_structures_java_certificate.png";
import spring_java from "@/public/codecademy_spring_java_certificate.png";
import temple_fop from "@/public/temple_uni_FoB_certificate.png";
import { cert_data } from "./types";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;
export const certificationData = [
  {
    title: "Codecademy courses",
    description: "Back-End Career Path: 100h with examination. Other courses are related to improving my skills in Java.",
    tags: ["Node.js", "Express.js", "SQL", "PostgreSQL", "Java",  "JUnit", "Servlets", "Java Native Interface (JNI)", "Sockets", "Java Database Connectivity (JDBC)", "Spring Controllers", "Spring Framework", "JPA", "Data Structures in Java"] as const,
    imageUrl: [
      "/codecademy_back_end_certificate.png",
      "/codecademy_advanced_java_certificate.png",
      "/codecademy_intermediate_java_certificate.png",
      "/codecademy_data_structures_java_certificate.png",
      "/codecademy_spring_java_certificate.png",
    ] as const,
    proofpath: [
      "https://www.codecademy.com/profiles/nesmax/certificates/810f53d14de24b938cc13c7c2af1e686",
      "https://www.codecademy.com/profiles/nesmax/certificates/2124b7916d514bdcba1194367d7fdf9a",
      "https://www.codecademy.com/profiles/nesmax/certificates/2624ed9b49bb4d5c994983877e5263f0",
      "https://www.codecademy.com/profiles/nesmax/certificates/5f29ae1fc9647d0013a7284b",
      "https://www.codecademy.com/profiles/nesmax/certificates/0508ba5df9a2422f333f4f6bceaced00",
    ] as const
  },
  {
    title: "Coursera",
    description: "",
    tags: [] as const,
    imageUrl: [
      "/coursera_google_certificate.png"],
    proofpath: [
      "https://www.coursera.org/account/accomplishments/verify/MAW3TSLHDDEV?utm_campaign=sharing_cta&utm_content=cert_image&utm_medium=certificate&utm_product=course&utm_source=link",
    ] as const,
  },
  {
    title: "LinkedIn",
    description: "Since I had enough hands-on practice with C#, I decided to get certified to prove my knowledge.",
    tags: ["C#", "Data Structures in C#"] as const,
    imageUrl: [
      "/linkedin_csharp_certificate.png"],
    proofpath: [
      "https://www.linkedin.com/learning/certificates/92d10fbcdf54a139d5b2f1a09ade81a9007808cf18ffb95d2b47a1e3eb810184?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BX8R%2BcXsXTDi3beIYXRR0Xg%3D%3D",
    ] as const,
  },
  {
    title: "Temple University",
    description: "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Python", "C", "Java", "SQL", "Data Structures in Java", "Low-level programming"] as const,
    imageUrl: [
      "/temple_uni_FoB_certificate.png",
    ] as const,
    proofpath: [
      "https://www.parchment.com/u/award/c3fe6312988083feeb2db7ff97b7baef"]
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
