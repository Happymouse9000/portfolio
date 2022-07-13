import React, { useState, useEffect } from "react";
import "./navbar.styles.scss";
import { Navbar, Nav } from "react-bootstrap";
import NavLink from "../NavLink/navlink.component";

const NavBar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [homeBorderIn, setHomeBorderIn] = useState(false);
  const [aboutBorderIn, setAboutBorderIn] = useState(false);
  const [skillsBorderIn, setSkillsBorderIn] = useState(false);
  const [portfolioBorderIn, setPortfolioBorderIn] = useState(false);
  const [contactBorderIn, setContactBorderIn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollHeight < 500)
      document
        .querySelector(".navbar-toggler-icon")
        .classList.add("white-burger");
    else if (scrollHeight > 500)
      document
        .querySelector(".navbar-toggler-icon")
        .classList.remove("white-burger");
  }, [scrollHeight]);

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  useEffect(() => {
    const {
      homeBorderIn,
      aboutBorderIn,
      skillsBorderIn,
      portfolioBorderIn,
      contactBorderIn,
    } = scrollSpy();
    setHomeBorderIn(homeBorderIn());
    setAboutBorderIn(aboutBorderIn());
    setSkillsBorderIn(skillsBorderIn());
    setPortfolioBorderIn(portfolioBorderIn());
    setContactBorderIn(contactBorderIn());
  }, [scrollHeight]);

  const scrollSpy = () => {
    const hH = document.querySelector("#header").scrollHeight;
    const hA = document.querySelector("#about").scrollHeight;
    const hS = document.querySelector("#skills").scrollHeight;
    const hP = document.querySelector("#portfolio").scrollHeight;
    const hC = document.querySelector("#contact").scrollHeight;

    const homeBorderIn = () => {
      if (scrollHeight < hH - 250) return true;
      return false;
    };
    const aboutBorderIn = () => {
      if (hH - 250 < scrollHeight && scrollHeight < hA + hH - 250) return true;
      return false;
    };
    const skillsBorderIn = () => {
      if (hA + hH - 250 < scrollHeight && scrollHeight < hA + hH + hS - 250)
        return true;
      return false;
    };
    const portfolioBorderIn = () => {
      if (
        hA + hH + hS - 250 < scrollHeight &&
        scrollHeight < hA + hH + hS + hP - 250
      )
        return true;
      return false;
    };
    const contactBorderIn = () => {
      if (
        hA + hH + hS + hP - 250 < scrollHeight &&
        scrollHeight < hA + hH + hS + hP + hC - 250
      )
        return true;
      return false;
    };

    return {
      homeBorderIn,
      aboutBorderIn,
      skillsBorderIn,
      portfolioBorderIn,
      contactBorderIn,
    };
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={`navbar fixed-top ${
          scrollHeight >= 500 ? "nav2 shadow" : "nav1"
        }`}
        id="mainNav"
      >
        <div>
          <a
            className={`navbar-brand ml-1 ${
              scrollHeight >= 500 ? "text-dark" : "text-white"
            }`}
            href="#"
            id="brandName"
          >
            PAUL
          </a>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              hashLink={"#home"}
              name={"HOME"}
              scrollHeight={scrollHeight}
              borderIn={homeBorderIn}
            />
            <NavLink
              hashLink={"#about"}
              name={"ABOUT"}
              scrollHeight={scrollHeight}
              borderIn={aboutBorderIn}
            />
            <NavLink
              hashLink={"#skills"}
              name={"SKILLS"}
              scrollHeight={scrollHeight}
              borderIn={skillsBorderIn}
            />
            <NavLink
              hashLink={"#portfolio"}
              name={"PORTFOLIO"}
              scrollHeight={scrollHeight}
              borderIn={portfolioBorderIn}
            />
            <NavLink
              hashLink={"#contact"}
              name={"CONTACT"}
              scrollHeight={scrollHeight}
              borderIn={contactBorderIn}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
