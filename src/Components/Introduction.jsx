import "../assets/styles/Home.css";

export default function Introduction({ handleScroll, details }) {
  return (
    <>
      <div className="text-container">
        <div className="sub-container">
          <h1 className="greetings">Hi There!</h1>
          <h1 className="intro">
            I'M <span className="intro-name">{details.name}</span>
          </h1>
          <h3 className="profession">{details.profession}</h3>
          <p className="description">{details.description}</p>

          <a
            href="#about-us"
            className="home-btn"
            onClick={() => handleScroll("about-us")}
          >
            More About Me
          </a>
        </div>
      </div>
    </>
  );
}
