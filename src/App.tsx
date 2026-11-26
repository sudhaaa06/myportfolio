import { useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { OtherProjects } from "./components/sections/OtherProjects";
import { Certifications } from "./components/sections/Certifications";
import { Resume } from "./components/sections/Resume";
import { Contact } from "./components/sections/Contact";
import { CustomCursor } from "./components/ui/CustomCursor";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { InfinityLoader } from "./components/ui/InfinityLoader";

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#18181B] selection:bg-[#059669]/20 selection:text-[#059669]">
      <CustomCursor />
      <ScrollProgress />

      {!hasEntered ? (
        <InfinityLoader onEnter={() => setHasEntered(true)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <OtherProjects />
          <Certifications />
          <Resume />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
