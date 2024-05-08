import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import jangkauanKota from "../../../assets/kota.png";
import city from "../../../assets/city.png";

const ListKotaOsn = () => {
  const [kotaOsn, setKotaOsn] = useState([]);

  useEffect(() => {
    fetchKotaOsn();
  }, []);

  const fetchKotaOsn = () => {
    fetch("https://api.edulink-indonesia.com/kota")
      .then((res) => res.json())
      .then((data) => {
        setKotaOsn(data);
      });
  };

  return (
    <div className="container-all-tab">
      <div className="parent-list-kota">
        {kotaOsn.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            onClick={() => {
              window.location.href = `/bimbel-osn-di/${item.slug}`;
            }}
          >
            {item.kota}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKotaOsn;
