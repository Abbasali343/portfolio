import CardAboutMe from "../Components/CardAboutMe";
import photography from "../assets/images/photography.png";
import development from "../assets/images/web-development.png";
import paint from "../assets/images/paint.png";
import "../assets/styles/Main.css";

const text1 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const text2 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const text3 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const title1 = "PAINT DESIGN";
const title2 = "WEB DESIGN";
const title3 = "PHOTOGRAPHY";

export default function TalentCards() {
  return (
    <>
      <div className="talent-container">
        <h1 className="talent-heading">What I Do ?</h1>
        <CardAboutMe title={title1} text={text1} source={paint} />
        <CardAboutMe title={title2} text={text2} source={development} />
        <CardAboutMe title={title3} text={text3} source={photography} />
      </div>
    </>
  );
}
