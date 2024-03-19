import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faBars,
  faSchool,
  faSignIn,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import iconSupercamp from "../../assets/supercamp.png"
import iconLiveClass from "../../assets/live_class.png"
import iconTrainingCamp from "../../assets/training_camp.png"

const Navbar = () => {
  const navigate = useNavigate();

  const goToKelas = () => {
    navigate("/pilihan-kelas");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <ul className="menu-items">
            <li>
              <a onClick={() => goToHome()} className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSignIn} /> Home
              </a>
            </li>
            <li class="services">
              <a className="menu-nav">
                Program
                <FontAwesomeIcon
                  className="icon-navbar"
                  icon={faArrowCircleDown}
                />
              </a>
              <ul className="dropdown">
                <li>
                  <a className="child-dropdown" href="/les-privat/snbt-terbaik?data=19">
                    <img className="icon-dropdown" src={iconSupercamp} alt="" />
                    Supercamp/Karantina - Sukses Masuk PTN 2024
                  </a>
                </li>
                <li>
                  <a className="child-dropdown" href="/les-privat/akmil-terbaik?data=2">
                  <img className="icon-dropdown" src={iconLiveClass} alt="" />
                    Live Class - Sukses Masuk PTN 2024
                  </a>
                </li>
                <li>
                  <a className="child-dropdown" href="/les-privat/akpol-terbaik?data=3">
                  <img className="icon-dropdown" src={iconTrainingCamp} alt="" />
                    Training Camp - Sukses Masuk TNI/POLRI & Sekolah Kedinasan
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={() => goToKelas()} className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSchool} />{" "}
                Kelas
              </a>
            </li>
            <li>
              <a
                className="menu-nav-daftar"
                href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20Saya%20ingin%20daftar%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah:"
              >
                <FontAwesomeIcon className="icon-navbar" icon={faSignIn} />{" "}
                Daftar
              </a>
            </li>
          </ul>
          <img
            onClick={() => goToKelas()}
            alt="logo edm"
            className="logo"
            src="https://edumatrix-education.vercel.app/static/media/logo_edm.d190f8a81fb23ea9ea9b.png"
          />
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
