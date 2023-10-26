import graphic1 from "../../assets/images/graphics/graphic1.jpg";
import graphic2 from "../../assets/images/graphics/graphic2.jpg";
import graphic3 from "../../assets/images/graphics/graphic3.jpg";
import graphic4 from "../../assets/images/graphics/graphic4.jpg";
import "../../assets/styles/Main.css";

export default function GraphicDesignItems() {
    return (
      <>
        <div className="gd-container">
          <img src={graphic1} className='gd-image' />
          <img src={graphic2} className='gd-image' />
          <img src={graphic3} className='gd-image' />
          <img src={graphic4} className='gd-image' />
        </div>
      </>
    );
  }