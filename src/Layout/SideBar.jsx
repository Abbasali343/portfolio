import Resizer from "react-image-file-resizer";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import profileImage from "../assets/images/profile-image.jpg";
import "../assets/styles/Home.css";

export default function SideBar({
  isActive,
  handleScroll,
  scrollAmount,
  link,
}) {
  const [newImage, setNewImage] = useState();

  useEffect(() => {
    const fetchAndResizeImage = async () => {
      try {
        // Fetch the image as a Blob
        const response = await fetch(link);
        const blob = await response.blob();

        // Resize the image using react-image-file-resizer
        Resizer.imageFileResizer(
          blob,
          320,
          200,
          "png",
          100,
          0,
          (uri) => {
            setNewImage(uri);
          },
          "base64",
          320,
          200
        );
      } catch (error) {
        console.error("Error fetching or resizing image:", error);
      }
    };
    fetchAndResizeImage();
  }, []);

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
        <img
          src={link}
          id="profile-image-sidebar"
          className="sidebar-image"
        />
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
