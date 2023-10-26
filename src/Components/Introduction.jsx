import { useNavigate } from "react-router-dom";
import "../assets/styles/Home.css";

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  
export default function Introduction(){

  const navigate = useNavigate();

  const handleClick = ()=>navigate('/about-us');

    return(
        <>
        <div className="text-container">
          <div className="sub-container">
            <h1 className="greetings">Hi There!</h1>
            <h1 className="intro">I'M <span className="intro-name">BENJAMIN</span></h1>
            <h3 className="profession">GRAPHIC DESINER/PHOTOGRAPHER</h3>
            <p className="description">{text}</p>
            <button className="home-btn" onClick={handleClick}>MORE ABOUT ME</button>
          </div>
        </div>
        </>
    )
}