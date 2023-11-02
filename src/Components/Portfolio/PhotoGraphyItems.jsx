import "../../assets/styles/Main.css";

export default function PhotoGraphyItems({ details }) {
  const links = details[0].links;
  const renderCard = links.map((item) => (
    <div key={item}>
      <img src={item} className="pg-image" />
    </div>
  ));
  return (
    <>
      <div className="pg-container">{renderCard}</div>
    </>
  );
}
