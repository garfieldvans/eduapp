import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import jangkauanKota from "../../../assets/kota.png";
import city from "../../../assets/city.png";

const ListKotaLpdp = () => {
  const [kotaLpdp, setKotaLpdp] = useState([]);

  useEffect(() => {
    fetchKotaLpdp();
  }, []);

  const fetchKotaLpdp = () => {
    fetch("https://api.edulink-indonesia.com/kota")
      .then((res) => res.json())
      .then((data) => {
        setKotaLpdp(data);
        console.log(data);
      });
  };

  return (
    <div className="container-all-tab">
      <div className="parent-list-kota">
        {kotaLpdp.map((item, index) => (
          <Link
            to={`/bimbel-lpdp-terbaik-di/${item.kota.toLowerCase()}?data=${
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

export default ListKotaLpdp;
