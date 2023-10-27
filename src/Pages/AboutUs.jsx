import SideBar from "../Layout/SideBar";
import Header from "../Components/Header";
import ProjectAnalysis from "../Components/ProjectAnalysis";
import TalentCards from "../Components/TalentCards";
import MiniMenu from "../Layout/MiniMenu";

import "../assets/styles/Home.css";
import "../assets/styles/Main.css";

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export default function AboutUs() {
  return (
    <>
     
        <div className="body" id="about-us">
          <div className="main-container">
            <Header title={"ABOUT ME"} />
            <div className="intro-container">
              <h1 className="intro-small">
                I'm<span className="intro-styled">Benjamin,</span> Graphic
                Designer/Photographer
              </h1>
              <p className="description-aboutme">{text}</p>
              <div className="performance">
                <div className="analytics">
                  <ProjectAnalysis />
                </div>
                <div className="talent">
                  <TalentCards />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="menu">
            <div className="menu-container">
              <MiniMenu />
            </div>
          </div> */}
        </div>
      
    </>
  );
}
