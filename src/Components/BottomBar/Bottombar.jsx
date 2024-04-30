import React from "react";
import "./Bottombar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHouse } from "@fortawesome/free-solid-svg-icons";
import iconHome from "../../assets/home_.png";
import iconKelas from "../../assets/Kelas.png";
import iconAbout from "../../assets/about us.png";
import iconDaftar from "../../assets/daftar.png";
import { useNavigate } from "react-router-dom";

const Bottombar = () => {
  const navigate = useNavigate();

  const goToKelas = () => {
    navigate("/pilihan-program");
  };

  const goToAbout = () => {
    navigate("/tentang-kami");
  }

  const goToHome = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <div className="wrapper">
        <div id="bottom-bar">
          <div onClick={() => goToHome()} className="bottom-bar-element">
            {/* <FontAwesomeIcon icon={faHouse} /> */}
            <img className="icon-home-bottombar" src={iconHome} alt="" />
            <br />
            <span className="text-bottombar">Home</span>
          </div>
          <div onClick={() => goToKelas()} className="bottom-bar-element">
            <img className="icon-home-bottombar" src={iconKelas} alt="" />
            <br />
            <span className="text-bottombar">Program</span>
          </div>
          <div onClick={() => goToAbout()} className="bottom-bar-element">
            <img className="icon-home-bottombar-about" src={iconAbout} alt="" />
            <br />
            <span className="text-bottombar">About</span>
          </div>
          <div className="bottom-bar-element">
            <a href="https://edulink-indonesia.com/lead/edm/chat">
              <img className="icon-home-bottombar" src={iconDaftar} alt="" />
              <br />
              <span className="text-bottombar">Daftar</span>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bottombar;
