import "../assets/styles/Main.css";

export default function PortfolioNavBar({ handleCategory, isActive, fields }) {
  return (
    <>
      <div className="navbar">
        <div className="pf-nav-all">
          <span
            id={isActive === "all" ? "isActive" : null}
            className="nav-item"
            onClick={() => handleCategory("all")}
          >
            All
          </span>
        </div>
        <div className="pf-nav-options">
          <div className="pf-nav-body">
            {fields &&
              fields.map((item, index) => (
                <div key={index} className="pf-option-container">
                  <span
                    id={isActive === item ? "isActive" : null}
                    className="nav-body-item"
                    onClick={() => handleCategory(item)}
                  >
                    {item}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
