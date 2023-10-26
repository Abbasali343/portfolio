import SideBar from "../Layout/SideBar";
import Header from "../Components/Header";
import MiniMenu from "../Layout/MiniMenu";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import "../assets/styles/Home.css";
import "../assets/styles/Main.css";

export default function Resume() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="body">
          <div className="main-container">
            <Header title={"RESUME"} />
            <div className="education">
              <Education />
            </div>
            <div className="experience-container">
              <Experience />
            </div>
          </div>
          <div className="menu">
            <div className="menu-container">
              <MiniMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
