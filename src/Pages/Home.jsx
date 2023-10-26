import "../assets/styles/Home.css";
import profileImage from "../assets/images/profile-image.jpg";
import Introduction from "../Components/Introduction";



export default function Home() {
  return (
    <>
      <div className="container">
        <Introduction />
        <div className="image-container">
          <img src={profileImage} className="profile-img" />
        </div>
      </div>
    </>
  );
}
