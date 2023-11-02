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

export default function Portfolio({ details }) {
  const [category, setCategory] = useState("all");

  const webDevelopment = details.filter(checkWebDevelopment);
  const graphicDesign = details.filter(checkGraphicDesign);
  const photoGraphy = details.filter(checkPhotoGraphy);
  const allDetails = { webDevelopment, graphicDesign, photoGraphy };

  function checkWebDevelopment(detail) {
    return detail.field === "web development";
  }
  function checkGraphicDesign(detail) {
    return detail.field === "graphic design";
  }
  function checkPhotoGraphy(detail) {
    return detail.field === "photography";
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
            />
            {category === "all" && <AllCategoriesItems details={allDetails} />}
            {category === "graphicDesigner" && (
              <GraphicDesignItems details={graphicDesign} />
            )}
            {category === "webDesigner" && (
              <WebDesignItems details={webDevelopment} />
            )}
            {category === "photoGraphy" && (
              <PhotoGraphyItems details={photoGraphy} />
            )}

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
