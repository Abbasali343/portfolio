import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import profileImage from "../assets/images/profile-image.jpg";
import "../assets/styles/Home.css";

export default function SideBar({ isActive, handleScroll, scrollAmount,link }) {
  function links(index, name, id, amount) {
    return (
      <div className="clickable-container">
        <a
          onClick={() => {
            handleScrollClick(index);
            handleScroll(index);
          }}
          id={isActive === index ? "active" : null}
          className="clickable"
          // href={id}
        >
          {name}
        </a>
      </div>
    );
  }

  const handleScrollClick = (index) => {
    const elementToScroll = document.getElementById(index);
    if (elementToScroll) {
      elementToScroll.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="sidebar-container">
        <img src={link} className="sidebar-image" />
        <div>
          {links("main", "HOME", "#main")}
          {links("about-us", "about-us", "#about-us")}
          {links("resume", "resume", "#resume")}
          {links("portfolio", "portfolio", "#portfolio")}
          {links("testimonials", "testimonials", "#testimonials")}
          {links("contact-us", "contact-us", "#contact-us")}
        </div>
      </div>
    </>
  );
}
