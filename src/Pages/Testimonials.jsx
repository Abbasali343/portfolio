import SideBar from "../Layout/SideBar";
import Header from "../Components/Header";
import MiniMenu from "../Layout/MiniMenu";
import TestimonialCard from "../Components/TestimonialCard";
import "../assets/styles/Home.css";
import "../assets/styles/Main.css";

export default function Testimonials() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="body">
          <div className="main-container">
            <Header title={"TESTIMONIALS"} />
            <div className="testimonial-container">
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>
          </div>
          <div className="menu">
            <div className="menu-container">
              <MiniMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
