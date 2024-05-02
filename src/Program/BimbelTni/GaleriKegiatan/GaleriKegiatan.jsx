import React, { useEffect, useState } from "react";
import "./GaleriKegiatan.css";

const GaleriKegiatan = () => {
  const [galeriKegiatan, setGaleriKegiatan] = useState([]);

  useEffect(() => {
    fetchKeunggulan();
  }, []);

  const fetchKeunggulan = () => {
    fetch("https://api.edulink-indonesia.com/galerikegiatantni")
      .then((res) => res.json())
      .then((data) => {
        setGaleriKegiatan(data);
        console.log(data);
      });
  };

  return (
    <React.Fragment>
      <div className="parent-box-galeri-kegiatan">
        <h1 className="title-kegiatan">GALERI KEGIATAN</h1>
        <div className="parent-card-kegiatan">
          {galeriKegiatan.map((item, index) => (
            <img
              key={index}
              className="kegiatan-img"
              src={"https://api.edulink-indonesia.com/images/" + item.image}
              alt=""
            />
          ))}
        </div>
        <div className="parent-video">
          <embed
            className="video-kegiatan"
            src="https://www.youtube.com/embed/g6jSRjry8mM"
          ></embed>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
