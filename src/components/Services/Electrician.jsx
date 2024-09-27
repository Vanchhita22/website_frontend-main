import React, { useState, useRef } from "react";

import Main from "../Services/serviceImg/ElectricianMain.png"
import Drill from "../Services/serviceImg/Drill Holes.png";
import Meter from "../Services/serviceImg/House Meter.png";
import Switchboard from "../Services/serviceImg/Switch Board.png";
import Faninstall from "../Services/serviceImg/Fan Install.png";
import Fanrepair from "../Services/serviceImg/Fan Repair.png";
import Tubelight from "../Services/serviceImg/Tublelight Repair.png";
import Wiring from "../Services/serviceImg/House Wiring.png";
import MCB from "../Services/serviceImg/MCB.png";
import Appliance from "../Services/serviceImg/Geyser repair.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../Services/Electrician.css";

function ServiceContainer() {
  const [selectedService, setSelectedService] = useState("Service");
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
    <div className="container1">
      <h1>Electrician</h1>
      <h4>
        <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.7 (6.3
        booking)
      </h4>
      <div className="Service">
        <p>Select a Service:</p>
        <hr />
        <ul className="service-list">
          <ServiceItem
            icon={Drill}
            title="General"
            selected={selectedService === "General Services"}
            onClick={() => handleServiceClick("General Services", serviceRef)}
          />
          <ServiceItem
            icon={Switchboard}
            title="Switch Board"
            selected={selectedService === "Repair & Gas Refill"}
            onClick={() => handleServiceClick("Repair & Gas Refill", repairRef)}
          />
          <ServiceItem
            icon={Faninstall}
            title="Fan"
            selected={selectedService === "Install & Uninstall"}
            onClick={() =>
              handleServiceClick("Install & Uninstall", installRef)
            }
          />
        </ul>
        <ul className="service-list">
          <ServiceItem
            icon={Tubelight}
            title="Light"
            selected={selectedService === "General Services"}
            onClick={() => handleServiceClick("General Services", serviceRef)}
          />
          <ServiceItem
            icon={Wiring}
            title="Wiring"
            selected={selectedService === "Repair & Gas Refill"}
            onClick={() => handleServiceClick("Repair & Gas Refill", repairRef)}
          />
          <ServiceItem
            icon={MCB}
            title="MCB"
            selected={selectedService === "Install & Uninstall"}
            onClick={() =>
              handleServiceClick("Install & Uninstall", installRef)
            }
          />
        </ul>
        <ul className="service-list">
          <ServiceItem
            icon={Appliance}
            title="Appliance"
            selected={selectedService === "General Services"}
            onClick={() => handleServiceClick("General Services", serviceRef)}
          />
        </ul>
      </div>

      <div className="Mainimg"><img src={Main} alt="" /></div>

      <div className="name-box" id="carouselExampleIndicators">
        <h2>General Services</h2>
        <div className="cart-box">
          <div className="card-content">
            <div className="card-body">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title">Drill Holes</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
                review)
              </p>
              <hr />
              <ul>
                <li>Clean or replace air filters.</li>
                <li>Clear the condensate drain.</li>
                <li>Remove dirt and debris from coils.</li>
              </ul>
              
            </div>
            <img
              className="card-img-top"
              src={Drill}
              alt="service"
              
            />
            
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
        </div>

        <div className="cart-box">
          <div className="card-content">
            <div className="card-body">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title">House Meter Issue</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
                review)
              </p>
              <hr />
              <ul>
                <li>Clean or replace air filters.</li>
                <li>Clear the condensate drain.</li>
                <li>Remove dirt and debris from coils.</li>
              </ul>
              
            </div>
            <img
              className="card-img-top"
              src={Meter}
              alt="service"
              
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
        </div>

        <h2>Switch & Socket</h2>
        <div className="cart-box">
          <div className="card-content">
            <div className="card-body">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title">Switch Board</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
                review)
              </p>
              <hr />
              <ul>
                <li>Clean or replace air filters.</li>
                <li>Clear the condensate drain.</li>
                <li>Remove dirt and debris from coils.</li>
              </ul>
              
            </div>
            <img
              className="card-img-top"
              src={Switchboard}
              alt="service"
              
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
        </div>
        <h2>Fan</h2>
        <div className="cart-box">
          <div className="card-content">
            <div className="card-body">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title">Ceiling Fan Install/Uninstall</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.3
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
              className="card-img-top"
              src={Faninstall}
              alt="Card image cap"
              
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
        </div>

        <div id="repair" className="cart-box" ref={repairRef}>
          <div className="card-content">
            <div className="card-body">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title">Ceiling Fan/Table Fan Repair</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.1
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
              className="card-img-top"
              src={Fanrepair}
              alt="repair"
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
        </div>
        <h2>Light</h2>

        <div className="cart-box">
          <div className="card-content">
            <div className="card-body">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title">Tubelight Repair/Install</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5
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
              className="card-img-top"
              src={Tubelight}
              alt="Card image cap"
            />
            
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
        </div>
        <h2>Wiring</h2>

        <div className="cart-box">
          <div className="card-content">
            <div className="card-body">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title">House Wiring</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5
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
              className="card-img-top"
              src={Wiring}
              alt="Card image cap"
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px" , marginTop: "10px"}} />
        </div>
        <h2>MCB</h2>

        <div id="install" className="cart-box" ref={installRef}>
          <div className="card-content">
            <div className="card-body">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title">MCB install & repair</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.8
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
              className="card-img-top"
              src={MCB}
              alt="Install"
              
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
        </div>
        <h2>Appliance Repair</h2>

        <div className="cart-box">
          <div className="card-content">
            <div className="card-body">
              <span>30 DAYS WARRANTY</span>
              <h5 className="card-title">Geyser Repair</h5>
              <p>
                <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.9
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
              className="card-img-top"
              src={Appliance}
              alt="Card image cap"
            />
          </div>
          <a href="/book-now-page">Book Now</a>
          <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
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

export default ServiceContainer;
