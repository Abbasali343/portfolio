import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/images/profile-image.jpg";
import "../assets/styles/Home.css";

export default function SideBar() {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(0);

  const handleClick = (index,route) => {
    setIsActive(index);
    navigate(route);

  };
  function links(index, name,route) {
    return (
      <h3
        onClick={() => handleClick(index,route)}
        id={isActive === index ? "active" : null}
        className="clickable"
      >
        {name}
      </h3>
    );
  }
  return (
    <>
      <div className="sidebar-container">
        <img src={profileImage} className="sidebar-image" />
        <div>
          {links(1, "HOME","/")}
          {links(2, "ABOUT ME","/about-us")}
          {links(3, "RESUME","/resume")}
          {links(4, "PORTFOLIO","/portfolio")}
          {links(5, "TESTIMONIALS","/testimonials")}
          {links(6, "CONTACT","/contact-us")}
        </div>
      </div>
    </>
  );
}
