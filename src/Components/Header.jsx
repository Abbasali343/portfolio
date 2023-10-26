import "../assets/styles/Main.css";

export default function Header({title}) {
  return (
    <>
      <div className="header-container">
      <h1 className="header-heading">{title}</h1>
      </div>
      
    </>
  );
}
