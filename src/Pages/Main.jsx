import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import SideBar from "../Layout/SideBar";
import MiniMenu from "../Layout/MiniMenu";
import ProfileSelector from "../Components/ProfileSelector";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Main() {
  const [isActive, setIsActive] = useState("about-us");
  const [scrollAmount, setScrollAmount] = useState(0);
  const [data, setData] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  const fetchUser = (name) => {
    axios
      .get(`http://localhost:3000/v1/admin/oneUser?name=${name}`)
      .then((response) => {
        setData(response.data);
      });
  };

  function getName(name) {
    setSelectedName(name);
    fetchUser(name);
  }

  let name = "";
  let profession = "";
  let description = "";
  let clients = null;
  let experience = null;
  let projects = null;
  let followers = null;
  let profile = "";
  let email = "";
  let phoneNo = "";
  let resumeEducation = [];
  let resumeExperience = [];
  let portFolioData = [];
  let testimonialData = [];

  if (data) {
    name = data.name;
    profession = data.profession;
    description = data.description;
    clients = data.clients;
    experience = data.experience;
    projects = data.projects;
    followers = data.followers;
    profile = data.profilePicture;
    email = data.email;
    phoneNo = data.phoneNo;
    resumeEducation = data.education;
    resumeExperience = data.experienceData;
    portFolioData = data.pfLinks;
    testimonialData = data.testimonials;
  }

  function handleScroll(id) {
    if (id === "about-us") {
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
      {selectedName === "" ? (
        <ProfileSelector getName={getName} />
      ) : (
        <div>
          <Home
            handleScroll={handleScroll}
            details={{ name, profession, description, profile }}
          />
          <div className="main-page-container">
            <div className="main-side-bar">
              <SideBar
                isActive={isActive}
                handleScroll={handleScroll}
                scrollAmount={scrollAmount}
                link={profile}
              />
            </div>
            <div className="main-body" onScroll={handleScroll1}>
              <div className="main-body-sub-container">
                <AboutUs
                  details={{
                    name,
                    profession,
                    description,
                    clients,
                    projects,
                    followers,
                    experience,
                  }}
                />
              </div>
              <div className="main-body-sub-container">
                <div id="resume">
                  <Resume
                    education={resumeEducation}
                    experience={resumeExperience}
                  />
                </div>
              </div>
              <div className="main-body-sub-container">
                <Portfolio details={portFolioData} />
              </div>
              <div className="main-body-sub-container">
                <Testimonials details={testimonialData} />
              </div>
              <div className="main-body-sub-container">
                <ContactUs
                  handleScroll={handleScroll}
                  email={email}
                  phoneNo={phoneNo}
                />
              </div>
            </div>
            <div className="main-menu">
              <div className="menu-container">
                <MiniMenu isActive={isActive} handleScroll={handleScroll} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
