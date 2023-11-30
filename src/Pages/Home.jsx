import { useState,useEffect } from "react";
import Resizer from "react-image-file-resizer";
import profileImage from "../assets/images/profile-image.jpg";
import Introduction from "../Components/Introduction";
import "../assets/styles/Home.css";

export default function Home({ handleScroll,details }) {
  const [newImage, setNewImage] = useState();

  const profileImage = details.profile
  

  useEffect(() => {
    const fetchAndResizeImage = async () => {
      try {
        // Fetch the image as a Blob
        const response = await fetch(details.profile);
        const blob = await response.blob();

      } catch (error) {
        console.error("Error fetching or resizing image:", error);
      }
    };
    fetchAndResizeImage();
  }, []);
  console.log(profileImage)
  return (
    <>
      <div className="container" id="main">
        <Introduction handleScroll={handleScroll} details={details} />
        <div className="image-container" style={{ background: "black" }}>
          <img src={details.profile} className="profile-img" />
        </div>
      </div>
    </>
  );
}
