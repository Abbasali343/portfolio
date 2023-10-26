import web1 from "../../assets/images/web/web1.jpg";
import web2 from "../../assets/images/web/web2.jpg";
import web3 from "../../assets/images/web/web3.jpg";
import web4 from "../../assets/images/web/web4.jpg";
import "../../assets/styles/Main.css";


export default function WebDesignItems() {
    return (
      <>
        <div className="wd-container">
          <img src={web1} className='wd-image' />
          <img src={web2} className='wd-image' />
          <img src={web3} className='wd-image' />
          <img src={web4} className='wd-image' />
        </div>
      </>
    );
  }