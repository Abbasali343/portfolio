import Header from "../Components/Header";
import emailPic from "../assets/images/contact1.png";
import call from "../assets/images/contact2.png";
import "../assets/styles/Home.css";
import "../assets/styles/Main.css";

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s,";

export default function ContactUs({ email,phoneNo }) {
    return (
    <>
      <div className="container" id="contact-us">
        <div className="body">
          <div className="main-container">
            <Header title={"CONTACT ME"} />
            <div className="contact-container">
              <h1 className="cnt-heading">
                Feel <span className="cnt-span">free</span> to Contact Me!
              </h1>
              <p className="cnt-description">{text}</p>
              <div className="cnt-main">
                <div className="cnt-email">
                  <img className="cnt-image" src={emailPic} />
                  <div className="cnt-details">
                    <h4>{email}</h4>
                    
                  </div>
                </div>
                <div className="cnt-call">
                  <img className="cnt-image" src={call} />
                  <div className="cnt-details">
                    <h4>{phoneNo}</h4>
                    
                  </div>
                </div>
              </div>
              <h1 className="cnt-greetings">Thanks for Patience!</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
