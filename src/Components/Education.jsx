import ResumeCard from "./ResumeCard";
import "../assets/styles/Main.css";

const degree = "Mcs";
const institute = "University of Sahiwal";
const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

export default function Education() {
  return (
    <>
      <div className="education-container">
        <h1 className="education-heading">EDUCATION</h1>
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
  );
}
