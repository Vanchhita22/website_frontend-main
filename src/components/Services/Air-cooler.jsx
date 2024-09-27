import React, { useState, useRef, useEffect } from "react";
import Service from '../Services/serviceImg/Motor.png';
import Power from '../Services/serviceImg/Not-power.png';
import repair from '../Services/serviceImg/Noise issue.png';
import Not from '../Services/serviceImg/Not sure.png';
import Main from'../Services/serviceImg/HeaderAircool.png';
import Water from'../Services/serviceImg/water.png'
import Noise from '../Services/serviceImg/Noise issue.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import grass from '../Services/serviceImg/grass.png';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../Services/Air.css";


function ServiceContainer() {
  const [selectedService, setSelectedService] = useState("Air Cooler Services");
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
    if (selectedService === "Air Cooler Services" && serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (selectedService === "Air Cooler Repairing" && repairRef.current) {
      repairRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (selectedService === "Not Sure about issue" && installRef.current) {
      installRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedService]);

  return (
    <div className="container1">
      <h1>Air Cooler</h1>
      <h4>
        <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.7 (6.3 booking)
      </h4>

      <div className="Service">
        <p>Select a Service:</p>
        <hr />
        <ul className="service-list">
          <ServiceItem
            icon={Service}
            title="Air Cooler Services"
            selected={selectedService === 'Air Cooler Services'}
            onClick={() => handleServiceClick('Air Cooler Services', serviceRef)}
          />
          <ServiceItem
            icon={repair}
            title="Air Cooler Repairing"
            selected={selectedService === 'Air Cooler Repairing'}
            onClick={() => handleServiceClick('Air Cooler Repairing', repairRef)}
          />
          <ServiceItem
            icon={Not}
            title="Not Sure about issue"
            selected={selectedService === 'Not Sure about issue'}
            onClick={() => handleServiceClick('Not Sure about issue', installRef)}
          />
        </ul>
      </div>

      <div className="Mainimg"><img src={Main} alt="" /></div>

      <div className="name-box" id="carouselExampleIndicators">
    
      <div ref={serviceRef} className="cart-box"> 
    <h2>Air Cooler Services</h2>
      <div className="card-content">
        <div className="card-body">
          <span>30 DAYS WARRANTY</span>
          <h5 className="card-title"> Fan motor issue</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
            review)
          </p>
          <hr />
          <ul>
          <li>Excessive vibrations during operation.</li>
          <li>Tripped circuit breaker or blown fuse when the fan is turned on.</li>
          <li>Overheating motor, electrical issues, burnt wiring.</li>
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
          <h5 className="card-title">Not powering ON</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
            review)
          </p>
          <hr />
          <ul>
            <li>Check the power cord for any visible damage.</li>
            <li>Test the outlet with another device to ensure it is supplying power.</li>
            <li>Check the power cord for any visible damage.</li>
          </ul>
          
        </div>
        <img
          className="card-img-top"
          src={Power}
          alt="service"
          
        />
      </div>
      <a href="/book-now-page">Book Now</a>
      <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
    </div>

    
    <div ref={repairRef} className="cart-box">
    <h2>Air Cooler Repairing</h2>
      <div className="card-content">
        <div className="card-body">
          <span>30 DAYS WARRANTY</span>
          <h5 className="card-title">Water pump issue</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
            review)
          </p>
          <hr />
          <ul>
            <li>Check the power cord and connections to make sure there are no issues with the electrical supply.</li>
            
            <li>Some air coolers have temperature-sensitive controls that may prevent the pump from operating if the ambient temperature is too low. Check the user manual for information on temperature requirements.</li>
          </ul>
          
        </div>
        <img
          className="card-img-top"
          src={Water}
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
          <h5 className="card-title"> Noise issue</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.3
            (1.254 review)
          </p>
          <hr />
          <ul>
            <li>Damaged or improperly placed cooling pads can affect the airflow and cause noise.</li>
            <li>Check for any debris, dust, or foreign objects that may be obstructing the fan blades.</li>
            <li>Ensure that the air cooler is placed on a stable and level surface. Unstable surfaces can contribute to vibrations and noise.</li>
            
          </ul>
          
        </div>
        <img
          className="card-img-top"
          src={Noise}
          alt="Card image cap"
          
        />
      </div>
      <a href="/book-now-page">Book Now</a>
      <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
       
      <div className="cart-box">
      <div className="card-content">
        <div className="card-body">
          <span>30 DAYS WARRANTY</span>
          <h5 className="card-title">Grass replacement</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1
            review)
          </p>
          <hr />
          <ul>
            <li>Carefully remove the old cooling pads.</li>
            <li>Wipe down the area around the cooling pad compartment to remove any dust or debris.</li>
            <li>Once the new pads are in place, close and secure the access panels or doors.</li>
          </ul>
          
        </div>
        <img
          className="card-img-top"
          src={grass}
          alt="service"
          
        />
      </div>
      <a href="/book-now-page">Book Now</a>
      <hr style={{ width: "90%", textAlign: "left", marginLeft: "25px", marginTop: "10px" }} />
    </div>
    
    </div>
   
    
    <div ref={installRef} className="cart-box">
    <h2>Not Sure about issue</h2>
      <div className="card-content">
        <div className="card-body">
          <span>30 DAYS WARRANTY</span>
          <h5 className="card-title">Not Sure about issue</h5>
          <p>
            <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5
            (1.178 review)
          </p>
          <hr />
          <ul>
            <li>Unusual Noises.</li>
            <li> Consult the User Manual.</li>
            <li>Testing and Calibration.</li>
            <li> Fan Blades.</li>
            <li>Air Flow.</li>
          </ul>
          
        </div>
        <img
          className="card-img-top"
          src={Not}
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
