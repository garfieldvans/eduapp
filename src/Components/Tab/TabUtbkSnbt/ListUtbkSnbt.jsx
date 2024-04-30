import React, { useEffect, useState } from "react";
import Tabs from "../Tabs";
import Tab from "../Tab";
import "../Tab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import jangkauanKota from "../../../assets/kota.png";
import city from "../../../assets/city.png";

const ListUtbkSnbt = () => {
  const [kotaSnbt, setKotaSnbt] = useState([]);
  const [kelasSnbt, setKelasSnbt] = useState([]);

  useEffect(() => {
    fetchKotaSnbt();
    fetchKelasSnbt();
  }, []);

  const fetchKotaSnbt = () => {
    fetch("http://localhost:8000/kota")
      .then((res) => res.json())
      .then((data) => {
        setKotaSnbt(data);
        console.log(data);
      });
  };

  const fetchKelasSnbt = () => {
    fetch(`http://localhost:8000/kelassnbt`)
      .then((res) => res.json())
      .then((data) => {
        setKelasSnbt(data);
        console.log(data);
      });
  };

  return (
    <div className="container-all-tab">
      <div className="parent-list-kota">
        {kotaSnbt.map((item, index) => (
          <Link
            to={`/bimbel-snbt-terbaik-di/${item.kota.toLowerCase()}?data=${
              item.id
            }`}
            className="btn-kota"
            key={index}
            // onClick={() => {
            //   window.location.href = `/les-privat-di/kota/${item.kota.toLowerCase()}?data=${
            //     item.id
            //   }`;
            // }}
          >
            {item.kota}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListUtbkSnbt;
