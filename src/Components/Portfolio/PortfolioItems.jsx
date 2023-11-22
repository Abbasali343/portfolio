import "../../assets/styles/Main.css";

export default function PortfolioItems({ details }) {
  let links;
  let renderCard;
  if (details && details.length > 0) {
    if (details[0].links) {
      links = details[0].links;
    }
    if (links !== null) {
      renderCard = links.map((item) => (
        <div key={item} className="pg-field-image-container">
          <img src={item} className="pg-image" />
        </div>
      ));
    }
  }

  return (
    <>
      <div className="gd-container">{renderCard && renderCard}</div>
    </>
  );
}
