import "../../assets/styles/Main.css";

export default function AllCategoriesItems({ details }) {
  const webContainer = details.webDevelopment[0];
  const graphicContainer = details.graphicDesign[0];
  const photoContainer = details.photoGraphy[0];
  let links1;
  let links2;
  let links3;
  let renderCard1;
  let renderCard2;
  let renderCard3;

  if (webContainer) {
    links1 = webContainer.links;
  }
  if (graphicContainer) {
    links2 = graphicContainer.links;
  }
  if (photoContainer) {
    links3 = photoContainer.links;
  }

  if (links1) {
    renderCard1 = links1.map((item) => (
      <div key={item}>
        <img src={item} className="all-image" />
      </div>
    ));
  }
  if (links2) {
    renderCard2 = links2.map((item) => (
      <div key={item}>
        <img src={item} className="all-image" />
      </div>
    ));
  }
  if (links3) {
    renderCard3 = links3.map((item) => (
      <div key={item}>
        <img src={item} className="all-image" />
      </div>
    ));
  }

  return (
    <>
      <div className="all-container">
        <div className="all-sub-container">{renderCard1}</div>
        <div className="all-sub-container">{renderCard2}</div>
        <div className="all-sub-container">{renderCard3}</div>
      </div>
    </>
  );
}
