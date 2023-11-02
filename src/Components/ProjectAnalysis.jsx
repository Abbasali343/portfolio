import ProjectsCount from "../Components/ProjectsCount";
import "../assets/styles/Main.css";

export default function ProjectAnalysis({details}){
    return(
        <>
        <div className="projects">
                    <div className="projects-1">
                      <ProjectsCount
                        value={details.experience}
                        string={"Years of Experience"}
                      />
                      <hr className="hr-line" />
                      <ProjectsCount value={details.clients} string={"Happy Clients"} />
                    </div>
                    <div className="vr-line"></div>
                    <div className="projects-2">
                      <ProjectsCount
                        value={details.projects}
                        string={"Projects Done"}
                      />
                      <hr className="hr-line" />
                      <ProjectsCount value={details.followers} string={"Followers"} />
                    </div>
                  </div>
        </>
    )
}