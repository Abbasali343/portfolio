
import profileImage from "../assets/images/profile-image.jpg";
import Introduction from "../Components/Introduction";
import "../assets/styles/Home.css";

export default function Home({ handleScroll,details }) {
  return (
    <>
      <div className="container" id="main">
        <Introduction handleScroll={handleScroll} details={details} />
        <div className="image-container" style={{ background: "black" }}>
          <img src={profileImage} className="profile-img" />
        </div>
      </div>
    </>
  );
}
