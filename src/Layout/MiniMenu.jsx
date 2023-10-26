import { useState } from "react";
import { useNavigate } from "react-router-dom";
import home from "../assets/images/home.png";
import about from "../assets/images/about_us.png";
import resume from "../assets/images/brief_case.png";
import portfolio from "../assets/images/portfolio.png";
import contact from "../assets/images/contact.png";
import testimonial from "../assets/images/testimonial.png";

export default function MiniMenu() {

  const navigate = useNavigate();

    const [isActive,setIsActive] = useState(0)
    function handleClick(index,route){
        setIsActive(index);
        navigate(route);
    }

    function icons(index,source,route){
        return <img className="icon" src={source} id= {isActive===index?"active-icon":null} onClick={()=>handleClick(index,route)} />
     }
  return (
    <>
      <div className="menu-sub-container">
        {icons(1,home,"/")}
        {icons(2,about,"/about-us")}
        {icons(3,resume,"/resume")}
        {icons(4,portfolio,"/portfolio")}
        {icons(5,testimonial,"/testimonials")}
        {icons(6,contact,"/contact-us")}
        
      </div>
    </>
  );
}
