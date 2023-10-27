import "../assets/styles/Home.css";
import profileImage from "../assets/images/profile-image.jpg";
import Introduction from "../Components/Introduction";



export default function Home({handleScroll}) {
  return (
    <>
      <div className="container" id="main">
        <Introduction handleScroll={handleScroll} />
        <div className="image-container" style={{background:"black"}}>
          <img src={profileImage} className="profile-img" />
        </div>
      </div>
    </>
  );
}
