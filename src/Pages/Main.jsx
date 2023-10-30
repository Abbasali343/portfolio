import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import SideBar from "../Layout/SideBar";
import MiniMenu from "../Layout/MiniMenu";
import { useState } from "react";

export default function Main() {
  const [isActive, setIsActive] = useState("about-us");
  const [scrollAmount, setScrollAmount] = useState(0);

  function handleScroll(id) {
    if(id==='about-us'){
      setScrollAmount(0);
    }
    setIsActive(id);
  }

  const handleScroll1 = (event) => {
    // Get the current scroll position from the scrollTop property of the div
    const newScrollAmount = event.target.scrollTop;
    setScrollAmount(newScrollAmount);
    const activeAmount =
      scrollAmount < 580
        ? "about-us"
        : scrollAmount < 1190
        ? "resume"
        : scrollAmount < 1820
        ? "portfolio"
        : scrollAmount < 2450
        ? "testimonials"
        : scrollAmount < 2560
        ? "contact-us"
        : null;
        setIsActive(activeAmount);
  };

  return (
    <>
      <div>
        <Home handleScroll={handleScroll} />
        <div className="main-page-container">
          <div className="main-side-bar">
            <SideBar
              isActive={isActive}
              handleScroll={handleScroll}
              scrollAmount={scrollAmount}
            />
          </div>
          <div className="main-body" onScroll={handleScroll1}>
            <div className="main-body-sub-container">
              <AboutUs />
            </div>
            <div className="main-body-sub-container">
              <div id="resume">
                <Resume />
              </div>
            </div>
            <div className="main-body-sub-container">
              <Portfolio />
            </div>
            <div className="main-body-sub-container">
              <Testimonials />
            </div>
            <div className="main-body-sub-container">
              <ContactUs handleScroll={handleScroll} />
            </div>
          </div>
          <div className="main-menu">
            <div className="menu-container">
              <MiniMenu isActive={isActive} handleScroll={handleScroll} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
