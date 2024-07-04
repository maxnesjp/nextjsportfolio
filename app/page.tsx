import About from "./components/about";
import Intro from "./components/intro";
import SectionDvider from "./components/sectiondivider";
import Certifications from "./components/certifications";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDvider />
      <About />
      <Certifications />
    </main>
  );
}
