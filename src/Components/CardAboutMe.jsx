import "../assets/styles/Main.css";

export default function CardAboutMe({title,text,source}) {
  return (
    <>
      <div className="card-container">
        <img src={source} className="talent-image" />
        <div className="card-text-container">
            <h1 className="card-title">{title}</h1>
            <p className="card-text">{text}</p>
        </div>
      </div>
    </>
  );
}
