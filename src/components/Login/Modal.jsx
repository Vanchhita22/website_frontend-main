import React, { useState } from "react";
import key_icon from "../asset/key.png";
import rd from "../asset/rd.jpeg";
import contact_icon from "../asset/person.png";
import "../Login/Modal.css";
import { Row, Col } from "react-bootstrap";

function Modal({ setOpenModal }) {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

    const closeModel = () => {
      setOpenModal(false);
    };

  const handleLoginClick = () => {
    setIsLoginFormVisible(true);
  };
  return (
    <div className="modal-container">
        <button className="modal-close-button" onClick={closeModel}>
          X
        </button>
      <Row className="container">
        <Col xs={12} sm={12} md={8} lg={8} className="rd">
          <img src={rd} alt="" />
        </Col>

        <Col xs={12} sm={12} md={8} lg={8} className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </Col>

        <div className="inputs">
          {isLoginFormVisible ? (
            <>
              <Col xs={12} sm={12} md={8} lg={8} className="input">
                <img src={key_icon} alt="" />
                <input type="text" placeholder="OTP" />
              </Col>
            </>
          ) : (
            <Col xs={12} sm={12} md={8} lg={8} className="input">
              <img src={contact_icon} alt="" />
              <input type="text" placeholder="Phone Number" />
            </Col>
          )}
        </div>
        {!isLoginFormVisible && (
          <div className="submit-container">
            <Col
              xs={12}
              sm={12}
              md={8}
              lg={8}
              className="submit gray"
              onClick={handleLoginClick}
            >
              Get OTP
            </Col>
          </div>
        )}

        {isLoginFormVisible && (
          <div className="submit-container">
            <Col xs={12} sm={12} md={8} lg={8} className="submit gray">
              Login
            </Col>
          </div>
        )}

        {isLoginFormVisible && (
          <Col xs={12} sm={12} md={8} lg={8}>
            <div className="last">
              {" "}
              <p className="privacy">
                {" "}
                By clicking on Login, I accept the{" "}<br/>
                <span className="terms">
                  <a href="https://www.freeprivacypolicy.com/live/152edcce-c955-47c9-9495-862eb9b929a0">
                    <strong>Terms & Conditions</strong>
                  </a>
                </span>{" "}
                &{" "}
                <span className="terms">
                  <a href="https://www.freeprivacypolicy.com/live/9adddeb7-3f49-45b4-93eb-7949c6bb8b87">
                    <strong>Privacy Policy</strong>
                  </a>
                </span>
              </p>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default Modal;
