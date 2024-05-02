import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import jangkauanKota from "../../../assets/kota.png";
import city from "../../../assets/city.png";

const ListKotaSupercamp = () => {
  const [kotaSnbt, setKotaSnbt] = useState([]);

  useEffect(() => {
    fetchKotaSnbt();
  }, []);

  const fetchKotaSnbt = () => {
    fetch("https://api.edulink-indonesia.com/kota")
      .then((res) => res.json())
      .then((data) => {
        setKotaSnbt(data);
        console.log(data);
      });
  };

  return (
    <div className="container-all-tab">
      <div className="parent-list-kota">
        {kotaSnbt.map((item, index) => (
          <Link
            to={`/bimbel-supercamp-edumatrix-di/${item.kota.toLowerCase()}?data=${
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

export default ListKotaSupercamp;
