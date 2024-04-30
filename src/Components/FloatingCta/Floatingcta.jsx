import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Floatingcta.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Floatingcta = () => {
  return (
    <div className="box-float-main">
      <a href="https://edulink-indonesia.com/lead/edm/call">
        <div className="main-parent-call">
          <button className="btn-float-tlp">
            <span className="parent-icon-tlp">
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </button>
        </div>
      </a>
      <div className="main-parent-wa">
        <a
          className="parent-btn-wa"
          href="https://edulink-indonesia.com/lead/edm/chat"
        >
          <button className="btn-float-wa">
            <span className="parent-icon-wa">
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Floatingcta;
