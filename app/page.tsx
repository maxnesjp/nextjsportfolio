import About from "./components/about";
import Intro from "./components/intro";
import SectionDivider from "./components/sectiondivider";
import Certifications from "./components/certifications";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 overflow-x-hidden">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Skills />
      <SectionDivider />
      <Certifications />
      <Contact />
    </main>
  );
}
