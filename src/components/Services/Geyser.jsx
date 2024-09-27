import React, { useState, useRef } from 'react';
import Service from '../Services/serviceImg/repair.jpg';
import repair from '../Services/serviceImg/Service.png';
import install from '../Services/serviceImg/install.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ACservice from '../Services/serviceImg/repair.jpg';
import replace from '../Services/serviceImg/image4.png';
import leak from '../Services/serviceImg/Geyser checkupservice.png';
import bad from '../Services/serviceImg/image7.png';
import installation from '../Services/serviceImg/wiring.png';
import uninstall from '../Services/serviceImg/Service.png';
import wiring from'../Services/serviceImg/wiring.png';
import "../Services/Geyser.css";




function GeyserContainer() {
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
       <h1>Geyser Repair</h1>
      <h4><FontAwesomeIcon icon={faStar} className="star-icon" /> 4.7 (6.3 booking)</h4>
      <div className="Service">
        <p>Select a Service:</p>
        <hr />
        <ul className="service-list">
          <ServiceItem
            icon={Service}
            title="Repair"
            selected={selectedService === 'Service'}
            onClick={() => handleServiceClick('Service', serviceRef)}
          />
          <ServiceItem
            icon={repair}
            title="Servicing"
            selected={selectedService === 'Repair & Gas Refill'}
            onClick={() => handleServiceClick('Repair & Gas Refill', repairRef)}
          />
          <ServiceItem
            icon={install}
            title="Installation"
            selected={selectedService === 'Install & Uninstall'}
            onClick={() => handleServiceClick('Install & Uninstall', installRef)}
          />
        </ul>
      </div>
      <div className="Mainimg"><img src={wiring} alt="" /></div>
      <div className="name-box" id="carouselExampleIndicators">
    
    <div ref={repairRef} className="cart-box"> 
  <h2>Geyser Repairing</h2>
    <div className="card-content">
      <div className="card-body">
        <span>30 DAYS WARRANTY</span>
        <h5 className="card-title">Water leakage</h5>
        <p>
          <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
          review)
        </p>
        <hr />
        <ul>
              <li>Preventive Maintenance.</li>
              <li>Tank Leak.</li>
              <li>Drain Valve.</li>
            </ul>
        
      </div>
      <img
        className="card-img-top"
        src={ACservice}
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
        <h5 className="card-title">Gesyer Checkup</h5>
        <p>
          <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
          review)
        </p>
        <hr />
        <ul>
              <li>Inspect the Anode Rod.</li>
              <li>Temperature Setting.</li>
              <li>Safety Check,Visual Inspection</li>
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

  
  <div ref={serviceRef} className="cart-box">
  <h2>Geyser Servicing</h2>
    <div className="card-content">
      <div className="card-body">
        <span>30 DAYS WARRANTY</span>
        <h5 className="card-title">Geyser Servicing</h5>
        <p>
          <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
          review)
        </p>
        <hr />
        <ul>
              <li>Tightening and Replacing Parts.</li>
              <li>Turn Power and Water Back On.</li>
              <li>Testing,Service Report.</li>
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
        <h5 className="card-title"> Geyser not heating</h5>
        <p>
          <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.3
          (1.254 review)
        </p>
        <hr />
        <ul>
              <li>Vent and Exhaust (for gas geysers).</li>
              <li>Check the Power Supply,Gas Supply.</li>
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
  </div>
 
  
  <div ref={installRef} className="cart-box">
  <h2>Gesyer Installation</h2>
    <div className="card-content">
      <div className="card-body">
        <span>30 DAYS WARRANTY</span>
        <h5 className="card-title">Gesyer Installation</h5>
        <p>
          <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5
          (1.178 review)
        </p>
        <hr />
        <ul>
              <li>Choose a Location.</li>
              <li>Mounting the Geyser.</li>
              <li>Water Supply and Discharge.</li>
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
        <h5 className="card-title">Geyser uninstallation</h5>
        <p>
          <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
          review)
        </p>
        <hr />
        <ul>
              <li>Safety Precautions.</li>
              <li>Disconnect Electrical.</li>
              <li>Disconnect Water Pipes.</li>
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

export default GeyserContainer;