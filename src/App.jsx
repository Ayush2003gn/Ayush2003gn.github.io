import { useCallback, useEffect, useRef, useState } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import NavRail from "./components/NavRail.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import SystemsThinking from "./sections/SystemsThinking.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Roadmap from "./sections/Roadmap.jsx";
import Writing from "./sections/Writing.jsx";
import Research from "./sections/Research.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return undefined;

    const handleWheel = (event) => {
      if (window.matchMedia("(max-width: 860px)").matches) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      container.scrollBy({ left: event.deltaY * 1.1, behavior: "smooth" });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  const finishLoading = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onComplete={finishLoading} />}
      <div className={`site-shell ${loading ? "site-shell--hidden" : "site-shell--ready"}`}>
        <NavRail />
        <main className="horizontal-stage" ref={scrollRef}>
          <Hero />
          <Projects />
          <About />
          <SystemsThinking />
          <Skills />
          <Roadmap />
          <Writing />
          <Research />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
