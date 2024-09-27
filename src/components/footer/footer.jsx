import React from "react";
import "../footer/footer.css";
import fb from "../asset/facebook.png";
import twitter from "../asset/twitter.png";
import linkedin from "../asset/linkedin.png";
import insta from "../asset/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/Services">
              <p>Services</p>
            </a>
            <a href="/address">
              <p>
                <b>Address :</b> 37/608, Chinna chowk, Nehru nagar,
                Kadapa-516002
              </p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Servicable cities</h4>
            <a href="/resource">
              <p>Kadapa Town</p>
            </a>
            <a href="/resource">
              <p>Bengalore</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="/employer">
              <p>KAGAV Pvt. Ltd.</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/email">
              <p>E-mail</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Social media</h4>
            <div className="socialmedia">
              <p>
                <img src={fb} alt="/" />
              </p>
              <p>
                <img src={twitter} alt="/" />
              </p>
              <p>
              <a href="https://www.linkedin.com/company/repairs-duniya/" target="tab"><img src={linkedin} alt="linkedin" /></a>
              </p>
              <p>
                <a href="https://www.instagram.com/repairsduniya/" target="tab"><img src={insta} alt="instagram" /></a>
              </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} Repair Duniya. All right reserved.
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
