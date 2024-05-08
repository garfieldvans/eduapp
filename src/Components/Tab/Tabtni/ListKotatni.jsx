import React, { useEffect, useState } from "react";
import Tabs from "../Tabs";
import Tab from "../Tab";
import "../Tab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import jangkauanKota from "../../../assets/kota.png";
import city from "../../../assets/city.png";

const Listkotatni = () => {
  const [kotaTni, setKotatni] = useState([]);
  const [kelas, setKelas] = useState([]);

  useEffect(() => {
    fetchKotatni();
    fetchKelas();
  }, []);

  const fetchKotatni = () => {
    fetch("https://api.edulink-indonesia.com/kotatni")
      .then((res) => res.json())
      .then((data) => {
        setKotatni(data);
      });
  };

  const fetchKelas = () => {
    fetch(`https://api.edulink-indonesia.com/kelastni`)
      .then((res) => res.json())
      .then((data) => {
        setKelas(data);
      });
  };

  return (
    <div className="container-all-tab">
        <Tab title="WILAYAH">
          <div className="parent-list-kota">
            {kotaTni.map((item, index) => (
              <Link
                // to={`/bimbel-tni-polri-di/${item.kotatni.toLowerCase()}?data=${
                //   item.id
                // }`}
                className="btn-kota"
                key={index}
                onClick={() => {
                  window.location.href = `/bimbel-tni-polri-dan-sekolah-kedinasan-di/${item.slug}`;
                }}
              >
                {item.kotatni}
              </Link>
            ))}
          </div>
        </Tab>
    </div>
  );
};

export default Listkotatni;
