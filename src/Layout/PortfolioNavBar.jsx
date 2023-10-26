import "../assets/styles/Main.css";

export default function PortfolioNavBar({handleCategory,isActive}){
    return(
        <>
        <div className="navbar">
            <span id={isActive==='all' ? 'isActive':null} className="nav-item" onClick={()=>handleCategory('all')}>All</span>
            <span id={isActive==='graphicDesigner' ? 'isActive':null} className="nav-item" onClick={()=>handleCategory('graphicDesigner')}>Graphic Design</span>
            <span id={isActive==='webDesigner' ? 'isActive':null} className="nav-item" onClick={()=>handleCategory('webDesigner')}>Web Design</span>
            <span id={isActive==='photoGraphy' ? 'isActive':null} className="nav-item" onClick={()=>handleCategory('photoGraphy')}>PhotoGraphy</span>
        </div>
        </>
    )
}