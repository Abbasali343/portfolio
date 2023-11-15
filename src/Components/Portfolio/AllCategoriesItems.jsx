import "../../assets/styles/Main.css";

export default function AllCategoriesItems({ details }) {
  let renderCard;
  if (details) {
    renderCard = details.map((item, index) => (
      <>
        <div className="all-categories-containers">
          {item.map((item, index) => (
            <div className="all-categories-sub-containers">
              <img src={item} className="all-categories-image" />
            </div>
          ))}
        </div>
      </>
    ));
  }
  return (
    <>
      <div className="all-container">{renderCard}</div>
    </>
  );
}
