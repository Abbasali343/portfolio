import Header from "../Components/Header";
import PortfolioNavBar from "../Layout/PortfolioNavBar";
import AllCategoriesItems from "../Components/Portfolio/AllCategoriesItems";
import PortfolioItems from "../Components/Portfolio/PortfolioItems";
import "../assets/styles/Home.css";
import "../assets/styles/Main.css";
import { useState } from "react";

export default function Portfolio({ details }) {
  const [category, setCategory] = useState("all");
  const fields = [];
  const allLinks = [];
  if (details) {
    details.map((item) => {
      fields.push(item.field);
      allLinks.push(item.links);
    });
  }
  let dataArray;
  if (category !== "all") {
    dataArray = details.filter(checkCategory);
  }

  function checkCategory(detail) {
    return detail.field === category;
  }
  function handleCategory(value) {
    setCategory(value);
  }
  return (
    <>
      <div className="container" id="portfolio">
        <div className="body">
          <div className="main-container">
            <Header title={"PORTFOLIO"} />
            <PortfolioNavBar
              handleCategory={handleCategory}
              isActive={category}
              fields={fields}
            />
            {category === "all" && <AllCategoriesItems details={allLinks} />}
            {category !== "all" && <PortfolioItems details={dataArray} />}
          </div>
        </div>
      </div>
    </>
  );
}
