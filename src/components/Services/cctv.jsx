import React, { useState, useRef, useEffect } from "react";
import Service from '../Services/serviceImg/Servicecctv.png';
import repair from '../Services/serviceImg/repaircctv.png';
import install from '../Services/serviceImg/installation cctv.png';
import Main from'../Services/serviceImg/installcctv.png';
import Servicecctv from '../Services/serviceImg/Servicecctv.png';
import cable from'../Services/serviceImg/cablecctv.png'
import Adjust from '../Services/serviceImg/adjust.png';
import installation from '../Services/serviceImg/installation cctv.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../Services/cctv.css";

function ServiceContainer() {
  const [selectedService, setSelectedService] = useState("CCTV Service");
  const serviceRef = useRef(null);
  const repairRef = useRef(null);
  const installRef = useRef(null);

  const handleServiceClick = (service, ref) => {
    setSelectedService(service);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (selectedService === "CCTV Service" && serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (selectedService === "CCTV Repairing" && repairRef.current) {
      repairRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (selectedService === "CCTV Installation" && installRef.current) {
      installRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedService]);

  return (
    <div className="container1">
      <h1>CCTV Page</h1>
      <h4>
        <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.7 (6.3 booking)
      </h4>

      <div className="Service">
        <p>Select a Service:</p>
        <hr />
        <ul className="service-list">
          <ServiceItem
            icon={Service}
            title="CCTV Service"
            selected={selectedService === 'CCTV Service'}
            onClick={() => handleServiceClick('CCTV Service', serviceRef)}
          />
          <ServiceItem
            icon={repair}
            title="CCTV Repairing"
            selected={selectedService === 'CCTV Repairing'}
            onClick={() => handleServiceClick('CCTV Repairing', repairRef)}
          />
          <ServiceItem
            icon={install}
            title="CCTV Installation"
            selected={selectedService === 'CCTV Installation'}
            onClick={() => handleServiceClick('CCTV Installation', installRef)}
          />
        </ul>
      </div>

      <div className="Mainimg"><img src={Main} alt="" /></div>

      <div className="name-box" id="carouselExampleIndicators">
    
      <div ref={serviceRef} className="cart-box"> 
    <h2>CCTV Services</h2>
      <div className="card-content">
        <div className="card-body">
          <span>30 DAYS WARRANTY</span>
          <h5 className="card-title">Camera Lens & Image Issues</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
            review)
          </p>
          <hr />
          <ul>
          <li>Clean Lens.</li>
          <li>Adjust Focus.</li>
          <li>Check for Condensation.</li>
        </ul>
          
        </div>
        <img
          className="card-img-top"
          src={Main}
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
          <h5 className="card-title">Software Updates</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
            review)
          </p>
          <hr />
          <ul>
            <li>Enter the model number of your device to see.</li>
            <li>Perform testing on various aspects of the CCTV system.</li>
          </ul>
          
        </div>
        <img
          className="card-img-top"
          src={Servicecctv}
          alt="service"
          
        />
      </div>
      <a href="/book-now-page">Book Now</a>
      <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
    </div>

    
    <div ref={repairRef} className="cart-box">
    <h2>CCTV Repairing</h2>
      <div className="card-content">
        <div className="card-body">
          <span>30 DAYS WARRANTY</span>
          <h5 className="card-title">Cable & Connection Maintenance</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
            review)
          </p>
          <hr />
          <ul>
            <li>Verify the integrity of power cables & connectors.</li>
            <li>Ensure that the firmware is up-to-date.</li>
            <li>Verify that cameras are properly positioned and focused.</li>
          </ul>
          
        </div>
        <img
          className="card-img-top"
          src={cable}
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
          <h5 className="card-title">Camera Adjustment</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.3
            (1.254 review)
          </p>
          <hr />
          <ul>
            <li>Zoom Settings.</li>
            <li>Lighting Conditions.</li>
            <li>WDR (Wide Dynamic Range) Adjustment.</li>
          </ul>
          
        </div>
        <img
          className="card-img-top"
          src={Adjust}
          alt="Card image cap"
          
        />
      </div>
      <a href="/book-now-page">Book Now</a>
      <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
    </div>
   
    
    <div ref={installRef} className="cart-box">
    <h2>CCTV Installation</h2>
      <div className="card-content">
        <div className="card-body">
          <span>30 DAYS WARRANTY</span>
          <h5 className="card-title">CCTV Installation</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5
            (1.178 review)
          </p>
          <hr />
          <ul>
            <li>Remote Viewing Setup.</li>
            <li>Integration with Other Systems.</li>
            <li>Testing and Calibration.</li>
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
