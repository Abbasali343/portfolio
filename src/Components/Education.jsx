import ResumeCard from "./ResumeCard";
import "../assets/styles/Main.css";

export default function Education({ details }) {
  const renderCard = details.slice(0,3).map((item,index) => (
    <div key={index} className="resume-all-cards">
      <ResumeCard
        degree={item.title}
        institute={item.company}
        description={item.description}
      />
    </div>
  ));
  return (
    <>
      <div className="education-container">
        <h1 className="education-heading">EDUCATION</h1>
        <div className="education-sub-container">{renderCard}</div>
      </div>
    </>
  );
}
