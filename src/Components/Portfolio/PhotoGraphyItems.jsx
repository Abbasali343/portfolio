import vacation1 from "../../assets/images/photography/vacation1.jpg";
import vacation2 from "../../assets/images/photography/vacation2.jpg";
import vacation3 from "../../assets/images/photography/vacation3.jpg";
import vacation4 from "../../assets/images/photography/vacation4.jpg";
import "../../assets/styles/Main.css";

export default function PhotoGraphyItems() {
    return (
      <>
        <div className="pg-container">
          <img src={vacation1} className='pg-image' />
          <img src={vacation2} className='pg-image' />
          <img src={vacation3} className='pg-image' />
          <img src={vacation4} className='pg-image' />
        </div>
      </>
    );
  }