import ProjectsCount from "../Components/ProjectsCount";
import "../assets/styles/Main.css";

export default function ProjectAnalysis(){
    return(
        <>
        <div className="projects">
                    <div className="projects-1">
                      <ProjectsCount
                        value={"15+"}
                        string={"Years of Experience"}
                      />
                      <hr className="hr-line" />
                      <ProjectsCount value={"200+"} string={"Happy Clients"} />
                    </div>
                    <div className="vr-line"></div>
                    <div className="projects-2">
                      <ProjectsCount
                        value={"350+"}
                        string={"Projects Done"}
                      />
                      <hr className="hr-line" />
                      <ProjectsCount value={"45K"} string={"Followers"} />
                    </div>
                  </div>
        </>
    )
}