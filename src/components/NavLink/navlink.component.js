import React from "react";
import "./navlink.styles.scss";

const NavLink = ({ name, hashLink, scrollHeight, borderIn }) => {
  const handleMouseOver = (e) => {
    e.target.classList.add("borderIn");
  };
  const handleMouseOut = (e) => {
    e.target.classList.remove("borderIn");
  };
  return (
    <>
      <li className="nav-item">
        <a
          className={`nav-link px-2 m-1 ${
            scrollHeight >= 500 ? "text-dark" : "text-white"
          } ${borderIn ? "borderIn" : null}`}
          href={hashLink}
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={(e) => handleMouseOut(e)}
        >
          {name}
        </a>
      </li>
    </>
  );
};

export default NavLink;
