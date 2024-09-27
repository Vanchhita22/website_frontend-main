import React, { useState, useRef } from "react";
import ACmain from "../Services/serviceImg/AC mainimg.jpg"
import Service from "../Services/serviceImg/Ac service.png";
import repair from "../Services/serviceImg/repair.jpg";
import install from "../Services/serviceImg/Ac install.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ACservice from "../Services/serviceImg/Ac service.png";
import replace from "../Services/serviceImg/replacement.png";
import leak from "../Services/serviceImg/leakage.png";
import bad from "../Services/serviceImg/bad smell.png";
import cool from "../Services/serviceImg/Ac cooling.png";
import installation from "../Services/serviceImg/Ac install.png";
import uninstall from "../Services/serviceImg/ac unstall.png";
import "../Services/AC.css";

function AC() {
    const [selectedService, setSelectedService] = useState('Service');
    const serviceRef = useRef(null);
    const repairRef = useRef(null);
    const installRef = useRef(null);
  
    const scrollToRef = (ref) => {
      if (ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth',
        });
      }
    };
  
    const handleServiceClick = (service, ref) => {
      setSelectedService(service);
      scrollToRef(ref);
    };
  
    return (
      <div className="container1">
        <h1>AC Repair</h1>
        <h4><FontAwesomeIcon icon={faStar} className="star-icon_AC" /> 4.7 (6.3 booking)</h4>
        <div className="Service">
          <p>Select a Service:</p>
          <hr />
          <ul className="service-list">
            <ServiceItem
              icon={Service}
              title="Service"
              selected={selectedService === 'Service'}
              onClick={() => handleServiceClick('Service', serviceRef)}
            />
            <ServiceItem
              icon={repair}
              title="Repair & Gas Refill"
              selected={selectedService === 'Repair & Gas Refill'}
              onClick={() => handleServiceClick('Repair & Gas Refill', repairRef)}
            />
            <ServiceItem
              icon={install}
              title="Install & Uninstall"
              selected={selectedService === 'Install & Uninstall'}
              onClick={() => handleServiceClick('Install & Uninstall', installRef)}
            />
          </ul>
        </div>
        <div className="Mainimg"><img src={ACmain} alt="" /></div>
  
        <div className="name-box" id="carouselExampleIndicators">
    
    <div ref={serviceRef} className="cart-box"> 
  <h2> Services</h2>
    <div className="card-content">
      <div className="card-body">
        <span>30 DAYS WARRANTY</span>
        <h5 className="card-title">AC Cleaning</h5>
        <p>
          <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
          review)
        </p>
        <hr />
        <ul >
                <li>Clean or replace air filters.</li>
                <li>Clear the condensate drain.</li>
                <li>Remove dirt and debris from coils.</li>
              </ul>
        
      </div>
      <img
        className="card-img-top"
        src={Service}
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
        <h5 className="card-title">AC replacement(remove & fit at another place)</h5>
        <p>
          <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
          review)
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
        src={replace}
        alt="service"
        
      />
    </div>
    <a href="/book-now-page">Book Now</a>
    <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
  </div>

  
  <div ref={repairRef} className="cart-box">
  <h2>Repair</h2>
    <div className="card-content">
      <div className="card-body">
        <span>30 DAYS WARRANTY</span>
        <h5 className="card-title">Water leakage from AC</h5>
      
        <p>
          <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
          review)
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
        src={leak}
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
        <h5 className="card-title"> Gas bad smell from AC</h5>
        <p>
          <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.3
          (1.254 review)
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
        src={bad}
        alt="Card image cap"
        
      />
    </div>
    <a href="/book-now-page">Book Now</a>
    <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
     
    <div className="cart-box">
    <div className="card-content">
      <div className="card-body">
        <span>30 DAYS WARRANTY</span>
        <h5 className="card-title">AC cooling issue</h5>
        <p>
          <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
          review)
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
        src={cool}
        alt="service"
        
      />
    </div>
    <a href="/book-now-page">Book Now</a>
    <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
  </div>
  
  </div>
 
  
  <div ref={installRef} className="cart-box">
  <h2>Install & Uninstall</h2>
    <div className="card-content">
      <div className="card-body">
        <span>30 DAYS WARRANTY</span>
        <h5 className="card-title">AC Installation</h5>
        <p>
          <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5
          (1.178 review)
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
        src={installation}
        alt="Card image cap"
      />
      
    </div>
    <a href="/book-now-page">Book Now</a>
    <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
  </div>
  <div className="cart-box">
      <div className="card-content">
        <div className="card-body">
          <span>30 DAYS WARRANTY</span>
          <h5 className="card-title">AC Uninstallation</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
            review)
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
          src={uninstall}
          alt="service"
          
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
        <img src={icon} alt={title} className={`service-image ${selected ? 'selected' : ''}`} />
        {title}
      </li>
    );
  }
  
  export default AC;
