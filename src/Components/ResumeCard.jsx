import "../assets/styles/Main.css";

export default function EducationCard({degree,institute,description}){
    return(
        <>
        <div className="res-card">
            <div className="res-head-container">
            <h1 className="res-card-heading">{degree}</h1>
            </div>
            <h3 className="company">{institute}</h3>
            <p className="res-description">{description}</p>
            
        </div>
        </>
    )
}