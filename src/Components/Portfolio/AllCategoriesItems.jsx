import vacation1 from "../../assets/images/photography/vacation1.jpg";
import vacation2 from "../../assets/images/photography/vacation2.jpg";
import vacation3 from "../../assets/images/photography/vacation3.jpg";
import vacation4 from "../../assets/images/photography/vacation4.jpg";
import graphic1 from "../../assets/images/graphics/graphic1.jpg";
import graphic2 from "../../assets/images/graphics/graphic2.jpg";
import graphic3 from "../../assets/images/graphics/graphic3.jpg";
import graphic4 from "../../assets/images/graphics/graphic4.jpg";
import web1 from "../../assets/images/web/web1.jpg";
import web2 from "../../assets/images/web/web2.jpg";
import web3 from "../../assets/images/web/web3.jpg";
import web4 from "../../assets/images/web/web4.jpg";
import "../../assets/styles/Main.css";

export default function AllCategoriesItems() {
  return (
    <>
      <div className="all-container">
        <div className="all-sub-container">
          <img src={graphic1} className="all-image" />
          <img src={graphic2} className="all-image" />
          <img src={graphic3} className="all-image" />
          <img src={graphic4} className="all-image" />
        </div>
        <div className="all-sub-container">
        <img src={web1} className="all-image" />
          <img src={web2} className="all-image" />
          <img src={web3} className="all-image" />
          <img src={web4} className="all-image" />
        </div>
        <div className="all-sub-container">
        <img src={vacation1} className="all-image" />
          <img src={vacation2} className="all-image" />
          <img src={vacation3} className="all-image" />
          <img src={vacation4} className="all-image" />
        </div>
      </div>
    </>
  );
}
