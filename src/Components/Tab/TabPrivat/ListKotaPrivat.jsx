import React, { useEffect, useState } from "react";
import Tabs from "../Tabs";
import Tab from "../Tab";
import "../Tab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import jangkauanKota from "../../../assets/kota.png";
import city from "../../../assets/city.png";

const ListKotaPrivat = () => {
  const [kotaPrivat, setKotatni] = useState([]);

  useEffect(() => {
    fetchKota();
  }, []);

  const fetchKota = () => {
    fetch("https://api.edulink-indonesia.com/kota")
      .then((res) => res.json())
      .then((data) => {
        setKotatni(data);
      });
  };

  return (
    <div className="container-all-tab">
      <div className="parent-list-kota">
        {kotaPrivat.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            onClick={() => {
              window.location.href = `/bimbel-privat-tk-sd-smp-sma-mahasiswa-di/${item.slug}`;
            }}
          >
            {item.kota}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKotaPrivat;
