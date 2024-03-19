import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import logo_edm from "../../assets/logo_edm.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pg-bawah">
      <footer className="bawah">
        <div className="parent-line">
          {/* <hr className="garis-end-2" /> */}
        </div>
        {/* <svg
          className="bawah-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="bawah-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          />
        </svg> */}
        <div className="bawah-content">
          <div className="bawah-content-column">
            <div className="bawah-logo">
              <a className="bawah-logo-link" href="#">
                <span className="hidden-link-text"></span>
                <img className="logo-bawah" src={logo_edm} alt="" />
              </a>
            </div>
            <div className="bawah-menu">
              <h2 className="bawah-menu-name">Edumatrix Indonesia</h2>
              <ul id="menu-get-started" className="bawah-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a className="link-footer" href="#">Ruko Permai Monjali</a>
                  <p className="p-address">
                    Jalan Monjali No 3, Kutu Dukuh, Sinduadi, Mlati, Sleman,
                    Yogyakarta 55241
                  </p>
                  <div className="all-sosmed">
                    <a className="sosmed-bawah" href="https://www.instagram.com/edumatrixindonesia/">
                      <img
                        className="img-sosmed"
                        src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/1%20Homepage%20RG/Optimize%20V2/ic-ig.svg?convert=webp"
                        alt=""
                      />
                    </a>
                    {/* <a className="sosmed-bawah" href="">
                      <img
                        className="img-sosmed"
                        src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/1%20Homepage%20RG/Optimize%20V2/ic-fb.svg?convert=webp"
                        alt=""
                      />
                    </a> */}
                    <a className="sosmed-bawah" href="https://www.youtube.com/channel/UCK6hN90FKuBsYS2_-sCQaFw">
                      <img
                        className="img-sosmed"
                        src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/1%20Homepage%20RG/Optimize%20V2/ic-youtube.svg?convert=webp"
                        alt=""
                      />
                    </a>
                    <a className="sosmed-bawah" href="https://www.tiktok.com/@edumatrixindonesia?is_from_webapp=1&sender_device=pc">
                      <img
                        className="img-sosmed"
                        src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/1%20Homepage%20RG/Optimize%20V2/tiktok-ic-white-40.svg?convert=webp"
                        alt=""
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bawah-content-column">
            <div className="bawah-menu">
              <h2 className="bawah-menu-name"> Konsultasi Program</h2>
              <ul id="menu-company" className="bawah-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a className="link-footer">0821-7414-4728 (Kak Iva)</a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a className="link-footer">0812-1636-5729 (Kak Nia)</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a className="link-footer">0812-1552-3902 (Kak Eka)</a>
                </li>
              </ul>
            </div>
            <div className="bawah-menu">
              <h2 className="bawah-menu-name">Hot Program</h2>
              <ul id="menu-legal" className="bawah-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <a className="link-footer">Bimbel Supercamp SNBT</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a className="link-footer">Bimbel Privat SNBT</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bawah-content-column">
            <div className="bawah-menu">
              <h2 className="bawah-menu-name">other websites</h2>
              <ul id="menu-quick-links" className="bawah-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" className="link-footer" href="https://edumatrix-indonesia.com">
                    EDUMATRIX-INDONESIA.COM
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" className="link-footer" href="https://bimbelsnbt.com">
                    BIMBELSNBT.COM
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a className="link-footer" href="https://masterclass.co.id">MASTERCLASS.CO.ID</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a className="link-footer" href="https://bimbel-kedokteran.co.id">BIMBEL-KEDOKTERAN.CO.ID</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bawah-content-column">
            <div className="bawah-call-to-action">
              <h2 className="bawah-call-to-action-title"> Konsultasi Gratis</h2>
              <p className="bawah-call-to-action-description">
                {" "}
                Punya Pertanyaan?
              </p>
              <a
                className="bawah-call-to-action-button button"
                href="tel:085600422188"
                target="_self"
              >
                {" "}
                Hubungi Kami{" "}
              </a>
            </div>
            {/* <div className="bawah-call-to-action">
              <h2 className="bawah-call-to-action-title"> Kontak Umum</h2>
              <p className="bawah-call-to-action-link-wrapper">
                {" "}
                <a
                  className="bawah-call-to-action-link"
                  href="tel:085600422188"
                  target="_self"
                >
                  {" "}
                  +62 856-0042-2188
                </a>
              </p>
            </div> */}
          </div>
        </div>
        {/* <div className="parent-line">
          <hr className="garis-end-2" />
        </div> */}
        <div className="bawah-copyright">
          <div className="bawah-copyright-wrapper">
            <p className="bawah-copyright-text">
              <a className="bawah-copyright-link" href="" target="_self">
                ©{currentYear}. | Edumatrix Indonesia | All rights reserved.{" "}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
