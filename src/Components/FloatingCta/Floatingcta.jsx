import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Floatingcta.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Floatingcta = () => {
  return (
    <div className="box-float-main">
      <a href="tel:+6285600422188">
        <div className="main-parent-call">
          <button className="btn-float-tlp">
            <span className="parent-icon-tlp">
              <FontAwesomeIcon icon={faPhone} />
            </span>{" "}
            TELEPON
          </button>
        </div>
      </a>
      <div className="main-parent-wa">
        <a
          className="parent-btn-wa"
          href="https://wa.me/6281216365729?text=Halo%20Kak%20Nia%2C%20Saya%20ingin%20bertanya%20mengenai%20Bimbel%20di%20Edumatrix%20Indonesia%20Terima%20kasih."
        >
          <button className="btn-float-wa">
            <span className="parent-icon-wa">
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>{" "}
            WHATSAPP
          </button>
        </a>
      </div>
    </div>
  );
};

export default Floatingcta;
