import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import SideBar from "../Layout/SideBar";
import MiniMenu from "../Layout/MiniMenu";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Main() {
  const [isActive, setIsActive] = useState("about-us");
  const [scrollAmount, setScrollAmount] = useState(0);
  const [data, setData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [mixData, setMixData] = useState([]);
  const [PortfolioData, setPortfolioData] = useState([]);

  const fetchUser = () => {
    axios.get("http://localhost:3000/v1/admin/allUsers").then((response) => {
      setData(response.data);
    });
  };
  const fetchTestimonial = () => {
    axios
      .get("http://localhost:3000/v1/admin/allTestimonials")
      .then((response) => {
        setTestimonialData(response.data);
      });
  };
  const fetchContact = () => {
    axios.get("http://localhost:3000/v1/admin/allContacts").then((response) => {
      setContactData(response.data);
    });
  };
  const fetchEducationAndExperience = () => {
    axios
      .get("http://localhost:3000/v1/admin/allEducations")
      .then((response) => {
        setMixData(response.data);
      });
  };
  const fetchPortFolio = () => {
    axios
      .get("http://localhost:3000/v1/admin/allPortfolios")
      .then((response) => {
        setPortfolioData(response.data);
      });
  };

  useEffect(() => {
    fetchUser();
    fetchTestimonial();
    fetchContact();
    fetchEducationAndExperience();
    fetchPortFolio();
  }, []);

  let name = "";
  let profession = "";
  let description = "";
  let clients = null;
  let experience = null;
  let projects = null;
  let followers = null;
  let link = "";

  if (data.length !== 0) {
    name = data[0].name;
    profession = data[0].profession;
    description = data[0].description;
    clients = data[0].clients;
    experience = data[0].experience;
    projects = data[0].projects;
    followers = data[0].followers;
    link = data[0].link;
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
      <div>
        <Home
          handleScroll={handleScroll}
          details={{ name, profession, description, link }}
        />
        <div className="main-page-container">
          <div className="main-side-bar">
            <SideBar
              isActive={isActive}
              handleScroll={handleScroll}
              scrollAmount={scrollAmount}
              link={link}
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
                <Resume details={mixData} />
              </div>
            </div>
            <div className="main-body-sub-container">
              <Portfolio details={PortfolioData} />
            </div>
            <div className="main-body-sub-container">
              <Testimonials details={testimonialData} />
            </div>
            <div className="main-body-sub-container">
              <ContactUs handleScroll={handleScroll} details={contactData} />
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
