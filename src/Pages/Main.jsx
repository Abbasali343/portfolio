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

  window.addEventListener("scroll", () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;
    setScrollAmount(scrollPosition);
    const activeAmount =
      scrollAmount < 1220
        ? "about-us"
        : scrollAmount < 1860
        ? "resume"
        : scrollAmount < 2515
        ? "portfolio"
        : scrollAmount < 3150
        ? "testimonials"
        : scrollAmount < 3220
        ? "contact-us"
        : null;
    setIsActive(activeAmount);
  });

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
  let professionsData = [];

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
    professionsData = data.professionsData;
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

          <div className="main-page-container-2">
            {/* <div className="sidebar-container-2"> */}
            <SideBar
              isActive={isActive}
              handleScroll={handleScroll}
              scrollAmount={scrollAmount}
              link={profile}
            />
            {/* </div> */}
            <div className="main-body-container-2">
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
                professionsData={professionsData}
              />
              <Resume
                education={resumeEducation}
                experience={resumeExperience}
              />
              <Portfolio details={portFolioData} />
              <Testimonials details={testimonialData} />
              <ContactUs
                handleScroll={handleScroll}
                email={email}
                phoneNo={phoneNo}
              />
            </div>
            <div className="mini-menu-container-2-sticky">
              <MiniMenu isActive={isActive} handleScroll={handleScroll} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
