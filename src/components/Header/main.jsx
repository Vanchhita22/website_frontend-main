import React from "react";
import "../Header/main.css";
import Repairs from "../RD img/Repair.jpeg";

const Main = () => {
  return (
    <div className="main">
      <img src={Repairs} alt="" />
      <div className="sub-text">
        Get experts <br />
        in <br />
        <span className="minutes">"45 minutes"</span>
      </div>
    </div>
  );
};

export default Main;
