import home from "../assets/images/home.png";
import about from "../assets/images/about_us.png";
import resume from "../assets/images/brief_case.png";
import portfolio from "../assets/images/portfolio.png";
import contact from "../assets/images/contact.png";
import testimonial from "../assets/images/testimonial.png";

export default function MiniMenu({ isActive, handleScroll }) {
  function icons(index, source, id) {
    return (
      <a>
        <img
          className="icon"
          src={source}
          id={isActive === index ? "active-icon" : null}
          onClick={() => {
            handleScroll(index);
            handleScrollClick(index);
          }}
        />
      </a>
    );
  }

  const handleScrollClick = (index) => {
    const elementToScroll = document.getElementById(index);
    if (elementToScroll) {
      elementToScroll.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="menu-sub-container" id="menu-sub-container">
        {icons("main", home, "#main")}
        {icons("about-us", about, "#about-us")}
        {icons("resume", resume, "#resume")}
        {icons("portfolio", portfolio, "#portfolio")}
        {icons("testimonials", testimonial, "#testimonials")}
        {icons("contact-us", contact, "#contact-us")}
      </div>
    </>
  );
}
