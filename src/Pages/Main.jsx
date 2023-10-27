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

  function handleScroll(id) {
    setIsActive(id);
  }

  return (
    <>
      <div>
        <Home handleScroll={handleScroll} />
        <div className="main-page-container">
          <div className="main-side-bar">
            <SideBar isActive={isActive} handleScroll={handleScroll} />
          </div>
          <div className="main-body">
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
