import SideBar from "../Layout/SideBar";
import Header from "../Components/Header";
import MiniMenu from "../Layout/MiniMenu";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import "../assets/styles/Home.css";
import "../assets/styles/Main.css";

export default function Resume({ details }) {
  const education = details.filter(checkEducation);
  const experience = details.filter(checkExperience);
  function checkEducation(detail) {
    return detail.type === "education";
  }
  function checkExperience(detail) {
    return detail.type === "experience";
  }
  return (
    <>
      <div className="container">
        <div className="body">
          <div className="main-container">
            <Header title={"RESUME"} />
            <div className="education">
              <Education details={education} />
            </div>
            <div className="experience-container">
              <Experience details={experience} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
