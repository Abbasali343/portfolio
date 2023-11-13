import SideBar from "../Layout/SideBar";
import Header from "../Components/Header";
import ProjectAnalysis from "../Components/ProjectAnalysis";
import TalentCards from "../Components/TalentCards";
import MiniMenu from "../Layout/MiniMenu";

import "../assets/styles/Home.css";
import "../assets/styles/Main.css";

export default function AboutUs({ details }) {
  return (
    <>
      <div className="body" id="about-us">
        <div className="main-container">
          <Header title={"ABOUT ME"} />
          <div className="intro-container">
            <h1 className="intro-small">
              I'm<span className="intro-styled">{details.name},</span>{" "}
              {details.profession}
            </h1>
            <p className="description-aboutme">{details.description}</p>
            <div className="performance">
              <div className="analytics">
                <ProjectAnalysis details={details} />
              </div>
              <div className="talent">
                <TalentCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
