import React from "react";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ToolsSection from "./components/ToolsSection";
import Projects from "./components/Projects";
import ReviewsSection from "./components/ReviewsSection";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <AboutMe />
      <ToolsSection />
      <Projects />
      <Skills />
      <ReviewsSection />
      <Contact />
    </div>
  );
};

export default App;
