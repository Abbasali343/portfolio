import "../../assets/styles/Main.css";

export default function PhotoGraphyItems({ details }) {
  let links;
  let renderCard;
  if (details && details.length > 0) {
    if (details[0].links) {
      links = details[0].links;
    }
    if (links !== null) {
      renderCard = links.map((item) => (
        <div key={item}>
          <img src={item} className="pg-image" alt={`Web Design Item`} />
        </div>
      ));
    }
  }
  return (
    <>
      <div className="pg-container">{renderCard && renderCard}</div>
    </>
  );
}
