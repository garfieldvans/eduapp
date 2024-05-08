import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import jangkauanKota from "../../../assets/kota.png";
import city from "../../../assets/city.png";

const ListKotaIgcse = () => {
  const [kotaIgcse, setKotaIgcse] = useState([]);

  useEffect(() => {
    fetchKotaIgcse();
  }, []);

  const fetchKotaIgcse = () => {
    fetch("https://api.edulink-indonesia.com/kota")
      .then((res) => res.json())
      .then((data) => {
        setKotaIgcse(data);
      });
  };

  return (
    <div className="container-all-tab">
      <div className="parent-list-kota">
        {kotaIgcse.map((item, index) => (
          <Link
            // to={`/bimbel-igcse-dan-ibtutor-di/${item.kota.toLowerCase()}?data=${
            //   item.id
            // }`}
            className="btn-kota"
            key={index}
            onClick={() => {
              window.location.href = `/bimbel-igcse-dan-ibtutor-di/${item.slug}`;
            }}
          >
            {item.kota}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKotaIgcse;
