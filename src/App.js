
import './App.css';
import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/sections/HeroSection.tsx";
import { AboutSection } from "./components/sections/AboutSection.tsx";
import { ProjectsSection } from "./components/sections/ProjectsSection.tsx";
import { EducationSection } from "./components/sections/EducationSection.tsx";
import { ContactSection } from "./components/sections/ContactSection.tsx";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800">
      <Header />
      <HeroSection />
      <AboutSection />
  <ProjectsSection />
  <EducationSection />
  <ContactSection />
  <Footer />
    </div>
  );
}

export default App;
