import Header from "../Components/Header";
import TestimonialCard from "../Components/TestimonialCard";
import "../assets/styles/Home.css";
import "../assets/styles/Main.css";

export default function Testimonials({ details }) {
  const renderCard = details.slice(0, 4).map((item, index) => (
    <div key={index}>
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
            <div className="testimonial-container">{renderCard}</div>
          </div>
        </div>
      </div>
    </>
  );
}
