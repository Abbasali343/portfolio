import SideBar from "../Layout/SideBar";
import Header from "../Components/Header";
import MiniMenu from "../Layout/MiniMenu";
import TestimonialCard from "../Components/TestimonialCard";
import { useEffect, useState } from "react";
import "../assets/styles/Home.css";
import "../assets/styles/Main.css";

export default function Testimonials({ details }) {
  const renderCard = details.slice(0,4).map((item) => (
    <div key={item}>
      <TestimonialCard
        link={item.link}
        name={item.testimonialName}
        profession={item.profession}
        description={item.description}
      />
    </div>
  ));
  return (
    <>
      <div className="container" id="testimonials">
        <div className="body">
          <div className="main-container">
            <Header title={"TESTIMONIALS"} />
            <div className="testimonial-container">
              {renderCard}

              {/* <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
