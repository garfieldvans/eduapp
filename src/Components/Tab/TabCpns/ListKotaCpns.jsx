import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import jangkauanKota from "../../../assets/kota.png";
import city from "../../../assets/city.png";

const ListKotaCpns = () => {
  const [kotaCpns, setKotaCpns] = useState([]);

  useEffect(() => {
    fetchKotaCpns();
  }, []);

  const fetchKotaCpns = () => {
    fetch("https://api.edulink-indonesia.com/kota")
      .then((res) => res.json())
      .then((data) => {
        setKotaCpns(data);
      });
  };

  return (
    <div className="container-all-tab">
      <div className="parent-list-kota">
        {kotaCpns.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            onClick={() => {
              window.location.href = `/bimbel-cpns-dan-pppk-di/${item.slug}`;
            }}
          >
            {item.kota}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKotaCpns;
