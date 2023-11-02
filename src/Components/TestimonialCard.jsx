import user from "../assets/images/user1.jpeg";

const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const designation = 'Software Engineer'
const name ='JOHN'

export default function TestimonialCard({name,profession,description}) {
  return (
    <>
      <div className="test-container">
        <div>
          <img src={user} className="test-image" />
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
