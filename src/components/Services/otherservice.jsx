import React from "react";
import "../Services/otherservice.css";
import img1 from "../RD img/Electrician.png";
import img2 from "../RD img/Plumber.png";
import img3 from "../RD img/Homeconstruction.png";
import img4 from "../RD img/Buy new appliance (1).png";
import { Link } from "react-router-dom";

const Other = () => {
  return (
      <div className="parentDiv1">
        <div className="subheadingDiv1">
            <h3>Other Services</h3>
        </div>
        <div className="all">
        <p>See all</p>
        </div>
        <div className="imageDiv1">
          <Link to={"/electrician"}>
          <div className="indiImage1">
            <img src={img1} alt="" />
            <p>Electrician
            <div className="rating1">
              <p>
                Rate :
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
              </p>
            </div>
            <p>
              <div className="ratingDetail1">
                <span className="otherstar1">&#9733;</span>
                4.8 (3.4K bookings)
              </div>
            </p>
            </p>
          </div>
          </Link>
          <Link to={"/plumber"}>
          <div className="indiImage1">
         
            <img src={img2} alt="" />
            <p>Plumber
            <div className="rating1">
              <p>
                Rate :
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
              </p>
            </div>
            <p>
              <div className="ratingDetail1">
                <span className="otherstar1">&#9733;</span>
                4.8 (3.4K bookings)
              </div>
            </p>
            </p>
          </div>
          </Link>
          <div className="indiImage1">
            <img src={img3} alt="" />
            <p>Home construction
            <div className="rating1">
              <p>
                Rate :
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
              </p>
            </div>
            <p>
              <div className="ratingDetail1">
                <span className="otherstar1">&#9733;</span>
                4.8 (3.4K bookings)
              </div>
            </p>
            </p>
          </div>
          <div className="indiImage1">
            <img src={img4} alt="" />
            <p>Home aplliances
            <div className="rating1">
              <p>
                Rate :
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
                <span className="star1">&#9733;</span>
              </p>
            </div>
            <p>
              <div className="ratingDetail1">
                <span className="otherstar1">&#9733;</span>
                4.8 (3.4K bookings)
              </div>
            </p>
            </p>
          </div>
        </div>
      </div>
  );
};

export default Other;
