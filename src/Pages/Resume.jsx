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
        </div>
      </div>
    </>
  );
}
