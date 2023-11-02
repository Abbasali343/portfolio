import "../../assets/styles/Main.css";

export default function WebDesignItems({ details }) {
  const links = details[0].links;
  const renderCard = links.map((item) => (
    <div key={item}>
      <img src={item} className="pg-image" />
    </div>
  ));
  return (
    <>
      <div className="wd-container">{renderCard}</div>
    </>
  );
}
