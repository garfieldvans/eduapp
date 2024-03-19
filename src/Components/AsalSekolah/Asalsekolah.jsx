import React, { useEffect, useState } from "react";
import "./Asalsekolah.css";
import logoSekolah from "../../assets/scroll.png";

const Asalsekolah = () => {
  return (
    <div className="container-asal-sekolah">
      <div className="parent-title-asal-sekolah">
        <h1 className="title-asal-sekolah">Asal Sekolah Siswa</h1>
        <div className="parent-card-asalsekolah">
          <div className="marquee">
            <div className="track">
              <div className="content">
                <img
                  className="logo-school"
                  src={logoSekolah}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* --- */}
        {/* <div className="parent-card-asalsekolah">
          <div className="marquee2">
            <div className="track2">
              <div className="content"></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Asalsekolah;
