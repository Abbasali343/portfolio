import ResumeCard from "./ResumeCard";
import "../assets/styles/Main.css";

const degree = "Web Developer";
const institute = "Regal Systems";
const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

export default function Experience(){
    return(
        <>
        <div className="education-container">
        <h1 className="education-heading">EXPERIENCE</h1>
        <div className="education-sub-container">
          <ResumeCard
            degree={degree}
            institute={institute}
            description={description}
          />
          <ResumeCard
            degree={degree}
            institute={institute}
            description={description}
          />
          <ResumeCard
            degree={degree}
            institute={institute}
            description={description}
          />
        </div>
      </div>
        </>
    )
}