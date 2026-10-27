import { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
<<<<<<< HEAD
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { OtherProjects } from "./components/sections/OtherProjects";
import { Certifications } from "./components/sections/Certifications";
=======
import { Skills } from "./components/sections/Skills";
import { FeaturedProject } from "./components/sections/FeaturedProject";
import { OtherProjects } from "./components/sections/OtherProjects";
>>>>>>> 7809539102a77c4a2d5532e473e0f02192b6ce77
import { Resume } from "./components/sections/Resume";
import { Contact } from "./components/sections/Contact";
import { CustomCursor } from "./components/ui/CustomCursor";
import { ScrollProgress } from "./components/ui/ScrollProgress";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smoother experience
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black-rich min-h-screen text-white selection:bg-gold selection:text-black-rich">
      <CustomCursor />
      <ScrollProgress />

      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black-rich z-50">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
<<<<<<< HEAD
          <Experience />
          <Skills />
          <OtherProjects />
          <Certifications />
=======
          <Skills />
          <FeaturedProject />
          <OtherProjects />
>>>>>>> 7809539102a77c4a2d5532e473e0f02192b6ce77
          <Resume />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
