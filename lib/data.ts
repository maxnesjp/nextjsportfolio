import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";



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
    name: "Certifications",
    hash: "#certifications",
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

const getYearsAndMonthsSince = (() => {
  const startDate = new Date("2022-05-01"), currentDate = new Date();
  return `${currentDate.getFullYear() - startDate.getFullYear() - (currentDate.getMonth() < startDate.getMonth() ? 1 : 0)} y. ${(currentDate.getMonth() + 12 - startDate.getMonth()) % 12 + 1} m.`;
})();

export const experiencesData = [
  {
    title: "Software Engineer Engineer",
    company: "Vialto Partners 税理士法人",
    description:
      "Currently, I am engaged in full-stack development, primarily focusing on .NET for the back-end and React.js, Next.js, and TypeScript for the front-end. The primary objective of the web application is to create, manage, and submit Japan tax returns and related deliverables to the Japanese tax authorities. The back-end extensively employs tax calculation logic, which we update annually. Additionally, the application includes several streamlined functionalities such as PDF to XML and XML to PDF conversions for document interpretation and submission, automatic error detection in XML files to be sent to the tax authorities, and features for resending or force-sending documents as needed.",
      icon: React.createElement(CgWorkAlt),
    location: "Tokyo, Japan",
    date: `05.2022 - present (${getYearsAndMonthsSince})` ,
  },
  {
    title: "Graduation",
    company: "Temple University",
    description:
      "Completed 4-year double degree in 2.5 years with GPA of 3.84/4.00 at an american university.",
    icon: React.createElement(LuGraduationCap),
    location: "Tokyo, Japan",
    date: "09.2019 - 05.2022",
  },
  {
    title: "Software Engineer Intern",
    company: "PwC 税理士法人",
    description:
      "I specialized in back-end development, using .NET to develop specialized logic for tax return preparation within the application.",
    icon: React.createElement(CgWorkAlt),
    location: "Tokyo, Japan",
    date: "01.2022 - 04.2022",
  },
  {
    title: "Software Engineer Intern",
    company: "rinna Co. Ltd",
    description:
      "I developed a chatbot within a .NET MVC application that utilized internal API endpoints, enabling real-time interactions with an AI-trained robot. This project involved integrating advanced AI capabilities into the chatbot, ensuring responsive and engaging user interactions.",
      icon: React.createElement(CgWorkAlt),
    location: "Tokyo, Japan",
    date: "08.2021 - 10.2021",
  },
  
] as const;
export const certificationData = [
  {
    title: "Codecademy courses",
    description: "I've successfully completed a demanding 'Back-End Career Path' course, investing over 100 hours to earn certification through an examination. I've also pursued courses aimed at honing my skills in Java.",
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
    title: "Temple University",
    description: "Alongside my computer science degree, I achieved the 'Fundamentals of Programming' certification by successfully completing all available computer science courses offered at my university during that period.",
    tags: ["Python", "C", "Java", "SQL", "Data Structures in Java", "Low-level programming"] as const,
    imageUrl: [
      "/temple_uni_FoB_certificate.png",
    ] as const,
    proofpath: [
      "https://www.parchment.com/u/award/c3fe6312988083feeb2db7ff97b7baef"]
  },
  {
    title: "LinkedIn",
    description: "I completed the C# Algorithms course, which focused on efficient algorithm design in C#. The course covered essential algorithms for strings, arrays, linked lists, queues, stacks, hash-based structures, and trees, emphasizing creating custom solutions using built-in C# functionalities.",
    tags: ["C#", "Efficient Algorithm Design", "Data Assumptions", "Handling Various Data Structures in C#", "Custom Algorithm Creation"] as const,
    imageUrl: [
      "/linkedin_csharp_certificate.png"],
    proofpath: [
      "https://www.linkedin.com/learning/certificates/92d10fbcdf54a139d5b2f1a09ade81a9007808cf18ffb95d2b47a1e3eb810184?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BX8R%2BcXsXTDi3beIYXRR0Xg%3D%3D",
    ] as const,
  },
  {
    title: "Coursera",
    description: "I completed the Google IT Support Professional Certificate, gaining essential skills for entry-level IT roles in computer assembly, networking, troubleshooting, and more.",
    tags: ["Customer Service", "Network Protocols", "Cloud Computing", "Encryption Techniques", "Debugging", "Computer Assembly", "Wireless Networking", "Program Installation", "Systems Knowledge (Linux, DNS, CLI)"] as const,
    imageUrl: [
      "/coursera_google_certificate.png"],
    proofpath: [
      "https://www.coursera.org/account/accomplishments/verify/MAW3TSLHDDEV?utm_campaign=sharing_cta&utm_content=cert_image&utm_medium=certificate&utm_product=course&utm_source=link",
    ] as const,
  },
] as const;


export const skills = [
  ".NET (C#)",
  "JavaScript",
  "Node.js",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "OutSystems",
  "Azure DevOps",
  "Azure App Service",
  "Azure Key Vault",
  "Azure SQL Database",
  "SQL Server Management Studio (SSMS)",
  "Database migration",
  "Java",
  "Spring Controllers",
  "JPA",
  "Java Database Connectivity (JDBC)",
  "Java Servlets",
  "Java Native Interface (JNI)",
  "Java Sockets",
  "JUnit",
  "Spring Framework"
] as const;
