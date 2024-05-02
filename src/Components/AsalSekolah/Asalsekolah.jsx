import React, { useEffect, useState } from "react";
import "./Asalsekolah.css";
import logoSekolah from "../../assets/scroll.png";

const Asalsekolah = () => {
  return (
    <div className="container-asal-sekolah">
      <div className="parent-title-asal-sekolah">
        <h1 className="title-asal-sekolah">ASAL SEKOLAH SISWA</h1>
        <div className="parent-card-asalsekolah">
          <div className="marquee">
            <div className="track">
              <div className="content">
                <img className="logo-school" src={logoSekolah} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asalsekolah;
