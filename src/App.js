import React, { useState, useEffect } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import NavBar from "./components/NavBar/navbar.component";
import LandingSection from "./components/LandingSection/landing-section.component";
import AboutSection from "./components/AboutSection/about-section.component";
import SkillsSection from "./components/SkillsSection/skills-section.component";
import PortfolioSection from "./components/PortfolioSection/portfolio-section.component";
import ContactSection from "./components/ContactSection/contact-section.component";
import Footer from "./components/Footer/footer.component";

const App = () => {
  return (
    <>
      <header id="header">
        <NavBar />
        <LandingSection />
      </header>
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
