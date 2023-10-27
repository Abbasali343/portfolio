import SideBar from "../Layout/SideBar";
import Header from "../Components/Header";
import MiniMenu from "../Layout/MiniMenu";
import PortfolioNavBar from "../Layout/PortfolioNavBar";
import AllCategoriesItems from "../Components/Portfolio/AllCategoriesItems";
import PhotoGraphyItems from "../Components/Portfolio/PhotoGraphyItems";
import WebDesignItems from "../Components/Portfolio/WebDesignItems";
import GraphicDesignItems from "../Components/Portfolio/GraphicDesignItems";
import "../assets/styles/Home.css";
import "../assets/styles/Main.css";
import { useState } from "react";

export default function Portfolio() {
  const [category, setCategory] = useState("all");

  function handleCategory(value) {
    setCategory(value);
  }
  return (
    <>
      <div className="container" id="portfolio">
        
        <div className="body">
          <div className="main-container">
            <Header title={"PORTFOLIO"} />
            <PortfolioNavBar handleCategory={handleCategory} isActive={category} />
            {category === "all" && <AllCategoriesItems />}
            {category === "graphicDesigner" && <GraphicDesignItems />}
            {category === "webDesigner" && <WebDesignItems />}
            {category === "photoGraphy" && <PhotoGraphyItems />}

            <div></div>
          </div>
          
        </div>
      </div>
    </>
  );
}
