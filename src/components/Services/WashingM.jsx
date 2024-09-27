import React, { useState, useRef } from "react";

import Main from "../Services/serviceImg/WashingM.png";
import Service from "../Services/serviceImg/WM service.png";
import OnOff from "../Services/serviceImg/WM on off.png";
import Noise from "../Services/serviceImg/WM noise.png";
import Spinning from "../Services/serviceImg/WM spinning.png";
import Waterleakage from "../Services/serviceImg/WM waterleakage.png";
import Display from "../Services/serviceImg/WM display.png";
import Notdraining from "../Services/serviceImg/WM notdraining.png";
import Installation from "../Services/serviceImg/WM installation.png";
import Uninstallation from "../Services/serviceImg/WM uninstallation.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../Services/WashingM.css";

function WashingM() {
  const [selectedService, setSelectedService] = useState("Service1");
  const serviceRef = useRef(null);
  const repairRef = useRef(null);
  const installRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleServiceClick = (service, ref) => {
    setSelectedService(service);
    scrollToRef(ref);
  };

  return (
    <div className="container_WM">
      <h1>
        Washing Machine <br />
        Repair
      </h1>
      <h4>
        <FontAwesomeIcon icon={faStar} className="star-icon_WM" /> 4.7 (6.3
        booking)
      </h4>
      <div className="Service_WM">
        <p>Select a Service:</p>
        <hr />
        <ul className="service-list_WM">
          <ServiceItem
            icon={Service}
            title="Repair"
            selected={selectedService === "General Services"}
            onClick={() => handleServiceClick("General Services", serviceRef)}
          />
          <ServiceItem
            icon={Installation}
            title="Install"
            selected={selectedService === "Repair & Gas Refill"}
            onClick={() => handleServiceClick("Repair & Gas Refill", repairRef)}
          />
          <ServiceItem
            icon={Uninstallation}
            title="Uninstall"
            selected={selectedService === "Install & Uninstall"}
            onClick={() =>
              handleServiceClick("Install & Uninstall", installRef)
            }
          />
        </ul>
      </div>

      <div className="Mainimg_WM">
        <img src={Main} alt="" />
      </div>

      <div className="name-box_WM" id="carouselExampleIndicators_WM">
        <h2>Repair</h2>
        <div className="cart-box_WM">
          <div className="card-content_WM">
            <div className="card-body_WM">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title_WM">
                Washing Machine <br />
                (Service/Checkup)
              </h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon_WM" /> 4.5
                (1.1 review)
              </p>
              <hr />
              <ul>
                <li>Price includes visit & diagnosis</li>
                <li>Clear the condensate drain.</li>
                <li>Remove dirt and debris from coils.</li>
              </ul>
            </div>
            <img
              className="card-img-top_WM"
              src={Service}
              alt="service"
              onClick={() => scrollToRef(serviceRef)}
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr
            style={{
              width: "90%",
              textAlign: "left",
              marginLeft: "25px",
              marginTop: "10px",
            }}
          />
        </div>

        <div className="cart-box_WM">
          <div className="card-content_WM">
            <div className="card-body_WM">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title_WM">Power ON/OFF issue</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon_WM" /> 4.5
                (1.1 review)
              </p>
              <hr />
              <ul>
                <li>Clean or replace air filters.</li>
                <li>Clear the condensate drain.</li>
                <li>Remove dirt and debris from coils.</li>
              </ul>
            </div>
            <img
              className="card-img-top_WM"
              src={OnOff}
              alt="service"
              onClick={() => scrollToRef(serviceRef)}
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr
            style={{
              width: "90%",
              textAlign: "left",
              marginLeft: "25px",
              marginTop: "10px",
            }}
          />
        </div>

        <div className="cart-box_WM">
          <div className="card-content_WM">
            <div className="card-body_WM">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title_WM">Noise Issues</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon_WM" /> 4.5
                (1.1 review)
              </p>
              <hr />
              <ul>
                <li>Clean or replace air filters.</li>
                <li>Clear the condensate drain.</li>
                <li>Remove dirt and debris from coils.</li>
              </ul>
            </div>
            <img
              className="card-img-top_WM"
              src={Noise}
              alt="service"
              onClick={() => scrollToRef(serviceRef)}
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr
            style={{
              width: "90%",
              textAlign: "left",
              marginLeft: "25px",
              marginTop: "10px",
            }}
          />
        </div>
        <div className="cart-box_WM">
          <div className="card-content_WM">
            <div className="card-body_WM">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title_WM">Not Washing/Not Spinning</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon_WM" /> 4.3
                (1.254 review)
              </p>
              <hr />
              <ul>
                <li>Removal of the Old AC Unit.</li>
                <li>Installation of the AC Unit.</li>
                <li>Testing, Adjustments, and Maintenance.</li>
              </ul>
            </div>
            <img
              className="card-img-top_WM"
              src={Spinning}
              alt="Card image cap"
              onClick={() => scrollToRef(repairRef)}
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr
            style={{
              width: "90%",
              textAlign: "left",
              marginLeft: "25px",
              marginTop: "10px",
            }}
          />
        </div>

        <div id="repair" className="cart-box_WM" ref={repairRef}>
          <div className="card-content_WM">
            <div className="card-body_WM">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title_WM">Water Leakage</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon_WM" /> 4.1
                (1.31 review)
              </p>
              <hr />
              <ul>
                <li>Dirty or Frozen Evaporator Coil.</li>
                <li>Damaged or Disconnected Drain Line.</li>
                <li>Improper Installation.</li>
              </ul>
            </div>
            <img
              className="card-img-top_WM"
              src={Waterleakage}
              alt="repair"
              onClick={() => scrollToRef(repairRef)}
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr
            style={{
              width: "90%",
              textAlign: "left",
              marginLeft: "25px",
              marginTop: "10px",
            }}
          />
        </div>

        <div className="cart-box_WM">
          <div className="card-content_WM">
            <div className="card-body_WM">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title_WM">Error on Display</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon_WM" /> 4.5
                (1.178 review)
              </p>
              <hr />
              <ul>
                <li>Gas Leak.</li>
                <li>Refrigerant Leak.</li>
                <li>Other Malfunctions.</li>
              </ul>
            </div>
            <img
              className="card-img-top_WM"
              src={Display}
              alt="Card image cap"
              onClick={() => scrollToRef(repairRef)}
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr
            style={{
              width: "90%",
              textAlign: "left",
              marginLeft: "25px",
              marginTop: "10px",
            }}
          />
        </div>

        <div className="cart-box_WM">
          <div className="card-content_WM">
            <div className="card-body_WM">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title_WM">Not Draining Issue</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon_WM" /> 4.5
                (1.67 review)
              </p>
              <hr />
              <ul>
                <li>AC Unit Won't Turn On.</li>
                <li>Frozen Evaporator Coil.</li>
                <li>Weak Airflow.</li>
              </ul>
            </div>
            <img
              className="card-img-top_WM"
              src={Notdraining}
              alt="Card image cap"
              onClick={() => scrollToRef(repairRef)}
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr
            style={{
              width: "90%",
              textAlign: "left",
              marginLeft: "25px",
              marginTop: "10px",
            }}
          />
        </div>
        <h2>Installation</h2>

        <div id="install" className="cart-box_WM" ref={installRef}>
          <div className="card-content_WM">
            <div className="card-body_WM">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title_WM">
                Washing Machine <br />
                Installation
              </h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon_WM" /> 4.8
                (1.51 review)
              </p>
              <hr />
              <ul>
                <li>Site Assessment and Planning.</li>
                <li>Choosing the AC Unit.</li>
                <li>Electrical Wiring and Power Supply.</li>
                <li>Testing and Balancing</li>
              </ul>
            </div>
            <img
              className="card-img-top_WM"
              src={Installation}
              alt="Install"
              onClick={() => scrollToRef(installRef)}
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr
            style={{
              width: "90%",
              textAlign: "left",
              marginLeft: "25px",
              marginTop: "10px",
            }}
          />
        </div>
        <h2>Uninstallation</h2>
        <div className="cart-box_WM">
          <div className="card-content_WM">
            <div className="card-body_WM">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title_WM">
                Washing Machine <br />
                Uninstallation
              </h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon_WM" /> 4.9
                (1.351 review)
              </p>
              <hr />
              <ul>
                <li>Remove the Condenser Unit.</li>
                <li>Disassemble the AC Unit.</li>
                <li>Uninstall Ductwork (if necessary).</li>
              </ul>
            </div>
            <img
              className="card-img-top_WM"
              src={Uninstallation}
              alt="Card image cap"
              onClick={() => scrollToRef(installRef)}
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr
            style={{
              width: "90%",
              textAlign: "left",
              marginLeft: "25px",
              marginTop: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ icon, title, selected, onClick }) {
  return (
    <li onClick={onClick}>
      <img
        src={icon}
        alt={title}
        className={`service-image ${selected ? "selected" : ""}`}
      />
      {title}
    </li>
  );
}

export default WashingM;
