import React from "react";
import "../Services/Service.css";
import { Link } from "react-router-dom";
import img1 from "../RD img/Laptop (1).png";
import img2 from "../RD img/Geyser (4).png";
import img3 from "../RD img/Fridge.png";
import img4 from "../RD img/Washing machine (1).png";
import img5 from "../RD img/AC (1).png";
import img6 from "../RD img/TV (1).png";
import img7 from "../RD img/cctv (1).png";
import img11 from "../RD img/11.png";

const Service = () => {
  return (
    <div className="parentDiv">
      <div className="headingDiv">
        <h2>Services</h2>
        <span>Servicing, Repair, installation & Uninstallation</span>
      </div>
      <div className="subheadingDiv">
        <h3>Popular Services</h3>
      </div>
      <div className="imageDiv">
        <div className="indiImage">
          <img src={img1} alt="" />
          <p>
            Laptop/PC repair
            <div className="rating">
              <p>
                Rate :<span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </p>
            </div>
            <p>
              <div className="ratingDetail">
                <span className="otherstar">&#9733;</span>
                4.8 (3.4K bookings)
              </div>
            </p>
          </p>
        </div>
        <Link to={"/geyser"}>
        <div className="indiImage">
          <img src={img2} alt="" />
          <p>
            Geyser repair
            <div className="rating">
              <p>
                Rate :<span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </p>
            </div>
            <p>
              <div className="ratingDetail">
                <span className="otherstar">&#9733;</span>
                4.8 (3.4K bookings)
              </div>
            </p>
          </p>
        </div>
        </Link>
        <Link to={"/refrigerator"}>
        <div className="indiImage">
          <img src={img3} alt="" />
          <p>
            Fridge repair
            <div className="rating">
              <p>
                Rate :<span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </p>
            </div>
            <p>
              <div className="ratingDetail">
                <span className="otherstar">&#9733;</span>
                4.8 (3.4K bookings)
              </div>
            </p>
          </p>
        </div>
        </Link>
        <Link to={"/washingm"}>
        <div className="indiImage">
          <img src={img4} alt="" />
          <p>
            Washing machine repair
            <div className="rating">
              <p>
                Rate :<span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </p>
            </div>
            <p>
              <div className="ratingDetail">
                <span className="otherstar">&#9733;</span>
                4.8 (3.4K bookings)
              </div>
            </p>
          </p>
          
        </div>
        </Link>
        <Link to={"/ac"}>
        <div className="indiImage">
          <img src={img5} alt="" />
          <p>
            AC repair
            <div className="rating">
              <p>
                Rate :<span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </p>
            </div>
            <p>
              <div className="ratingDetail">
                <span className="otherstar">&#9733;</span>
                4.8 (3.4K bookings)
              </div>
            </p>
          </p>
        </div>
        </Link>
        <Link to={"/ledtv"}>
        <div className="indiImage">
          <img src={img6} alt="" />
          <p>
          LED TV
            <div className="rating">
              <p>
                Rate :<span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </p>
            </div>
            <p>
              <div className="ratingDetail">
                <span className="otherstar">&#9733;</span>
                4.8 (3.4K bookings)
              </div>
            </p>
          </p>
        </div>
        </Link>
        <Link to={"/cctv"}>
        <div className="indiImage">
          <img src={img7} alt="" />
          <p>
            CCTV service
            <div className="rating">
              <p>
                Rate :<span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </p>
            </div>
            <p>
              <div className="ratingDetail">
                <span className="otherstar">&#9733;</span>
                4.8 (3.4K bookings)
              </div>
            </p>
          </p>
        </div>
        </Link>
        <Link to={"/aircooler"}>
        <div className="indiImage">
          <img src={img11} alt="" />
          <p>
           Air Cooler
            <div className="rating">
              <p>
                Rate :<span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </p>
            </div>
            <p>
              <div className="ratingDetail">
                <span className="otherstar">&#9733;</span>
                4.8 (3.4K bookings)
              </div>
            </p>
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Service;
