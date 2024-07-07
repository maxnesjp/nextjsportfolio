import About from "./components/about";
import Intro from "./components/intro";
import SectionDivider from "./components/sectiondivider";
import Certifications from "./components/certifications";
import Experience from "./components/experience";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
    </main>
  );
}
