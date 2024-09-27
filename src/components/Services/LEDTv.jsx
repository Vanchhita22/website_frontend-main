import React, { useState, useRef, useEffect } from "react";
import Service from '../Services/serviceImg/Remove LED.png';
import LED from '../Services/serviceImg/LED.png';
import repair from '../Services/serviceImg/repaircctv.png';
import install from '../Services/serviceImg/installation cctv.png';
import Main from'../Services/serviceImg/Header-img.png';
import Display from'../Services/serviceImg/Display-issue.png'
import Adjust from '../Services/serviceImg/Speaker issue.png';
import installation from '../Services/serviceImg/Installation-tv.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import issue from '../Services/serviceImg/issue.png';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../Services/LED.css";


function ServiceContainer() {
  const [selectedService, setSelectedService] = useState("LED Services");
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
    if (selectedService === "LED Services" && serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (selectedService === "LED Repairing" && repairRef.current) {
      repairRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (selectedService === "LED Installation" && installRef.current) {
      installRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedService]);

  return (
    <div className="container1">
      <h1>LED TV</h1>
      <h4>
        <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.7 (6.3 booking)
      </h4>

      <div className="Service">
        <p>Select a Service:</p>
        <hr />
        <ul className="service-list">
          <ServiceItem
            icon={Service}
            title="LED TV Services"
            selected={selectedService === 'LED Services'}
            onClick={() => handleServiceClick('LED Services', serviceRef)}
          />
          <ServiceItem
            icon={repair}
            title="LED TVRepairing"
            selected={selectedService === 'LED Repairing'}
            onClick={() => handleServiceClick('LED Repairing', repairRef)}
          />
          <ServiceItem
            icon={install}
            title="LED TV Installation"
            selected={selectedService === 'LED Installation'}
            onClick={() => handleServiceClick('LED Installation', installRef)}
          />
        </ul>
      </div>

      <div className="Mainimg"><img src={Main} alt="" /></div>

      <div className="name-box" id="carouselExampleIndicators">
    
      <div ref={serviceRef} className="cart-box"> 
    <h2>LED Services</h2>
      <div className="card-content">
        <div className="card-body">
          <span>30 DAYS WARRANTY</span>
          <h5 className="card-title">Replacement LED (remove & fitting at other place)</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
            review)
          </p>
          <hr />
          <ul>
          <li>Disconnect Wiring.</li>
          <li>Note Wiring Configuration.</li>
          <li>Remove Cover or Shade.</li>
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
          <h5 className="card-title">Not turning ON</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
            review)
          </p>
          <hr />
          <ul>
            <li>Check Power Supply.</li>
            <li>Check for Defective Components.</li>
            <li>Test the Fixture.</li>
          </ul>
          
        </div>
        <img
          className="card-img-top"
          src={LED}
          alt="service"
          
        />
      </div>
      <a href="/book-now-page">Book Now</a>
      <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
    </div>

    
    <div ref={repairRef} className="cart-box">
    <h2>LED Repairing</h2>
      <div className="card-content">
        <div className="card-body">
          <span>30 DAYS WARRANTY</span>
          <h5 className="card-title">Display issue</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
            review)
          </p>
          <hr />
          <ul>
            <li>Restart the TV.</li>
            <li>Check Input Source.</li>
            <li>Inspect for Physical Damage.</li>
            <li>Update Firmware/Software.</li>
          </ul>
          
        </div>
        <img
          className="card-img-top"
          src={Display}
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
          <h5 className="card-title"> issue/ No sound</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.3
            (1.254 review)
          </p>
          <hr />
          <ul>
            <li>Impedance Compatibility.</li>
            <li>Check for Short Circuits.</li>
            <li>Reset or Reconfigure Audio Settings.</li>
            <li>Volume and Mute Settings.</li>
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
    <h2>LED Installation</h2>
      <div className="card-content">
        <div className="card-body">
          <span>30 DAYS WARRANTY</span>
          <h5 className="card-title">LED Installation</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5
            (1.178 review)
          </p>
          <hr />
          <ul>
            <li>Secure Furniture and Accessories.</li>
            <li> Read User Manual.</li>
            <li>Testing and Calibration.</li>
            <li> Cable Management</li>
            <li>Test Audio and Video</li>
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
          <h5 className="card-title">Not sure about the issue</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
            review)
          </p>
          <hr />
          <ul>
            <li>Test Different Power Cable.</li>
            <li>Verify Remote Control.</li>
            <li>Factory Reset.</li>
          </ul>
          
        </div>
        <img
          className="card-img-top"
          src={issue}
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
