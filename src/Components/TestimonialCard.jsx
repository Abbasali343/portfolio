import user from "../assets/images/user1.jpeg";

export default function TestimonialCard({
  link,
  name,
  profession,
  description,
}) {
  return (
    <>
      <div className="test-container">
        <div>
          <img src={link} className="test-image" />
        </div>
        <div className="test-details">
          <h1 className="test-name">{name}</h1>
          <h3 className="test-designation">{profession}</h3>
          <p className="test-description">{description}</p>
        </div>
      </div>
    </>
  );
}
