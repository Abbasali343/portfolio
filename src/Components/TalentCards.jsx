import CardAboutMe from "../Components/CardAboutMe";
import photography from "../assets/images/photography.png";
import development from "../assets/images/web-development.png";
import paint from "../assets/images/paint.png";
import "../assets/styles/Main.css";

export default function TalentCards({professionsData}) {
  let renderCard;
  if(professionsData){
    renderCard = professionsData.slice(0,3).map((item,index)=>(
      <>
      <CardAboutMe title={item.title} text={item.description} source={item.link} key={index} />
      </>
    ))
  }
  return (
    <>
      <div className="talent-container">
        <h1 className="talent-heading">What I Do ?</h1>
        {renderCard}
      </div>
    </>
  );
}
