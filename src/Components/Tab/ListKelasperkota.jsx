import React, { useEffect, useMemo, useState } from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import "./Tab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import jangkauanKota from "../../assets/kota.png";
import axios from "axios";

const Listkelasperkota = () => {
  const [kelasperkota, setKelasPerKota] = useState([]);
  const [kelas, setKelas] = useState([]);
  const [mapel, setMapel] = useState([]);

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    fetchKelasperKota();
    fetchKelas();
    fetchMapel();
  }, []);

  const fetchKelasperKota = () => {
    fetch(`https://api.edulink-indonesia.com/kelasperkota/${query.get("data")}`)
      .then((res) => res.json())
      .then((data) => {
        setKelasPerKota(data);
        console.log("data kelasperkota", data);
      }); 
  };

  const fetchKelas = () => {
    fetch(`https://api.edulink-indonesia.com/kelas`)
      .then((res) => res.json())
      .then((data) => {
        setKelas(data);
        console.log(data);
      });
  };

  const fetchMapel = () => {
    fetch("https://api.edulink-indonesia.com/matapelajaran")
      .then((res) => res.json())
      .then((data) => {
        setMapel(data);
        console.log(data);
      });
  };

  

  return (
    <div className="container-all-tab">
      <Tabs>
        <Tab title="PROGRAM">
          <div className="parent-list-kelas">
            {kelas.map((item, index) => (
              <Link
                to={`/les-privat/${item.slug.toLowerCase()}-terbaik?data=${
                  item.id
                }`}
                className="btn-kelas"
                key={index}
                // onClick={() => {
                //   window.location.href = `/les-privat/${item.slug.toLowerCase()}-terbaik?data=${
                //     item.id
                //   }`;
                // }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Tab>
        <Tab title="MAPEL">
          <div className="parent-list-mapel">
            {mapel.map((item, index) => (
              <Link
                to={`/mata-pelajaran/${item.name.toLowerCase()}?data=${
                  item.id
                }`}
                className="btn-mapel"
                key={index}
                // onClick={() => {
                //   window.location.href = `/mata-pelajaran/${item.name.toLowerCase()}?data=${
                //     item.id
                //   }`;
                // }}
              >
                <div className="combine-icon-text">
                  <img
                    className="icon-mapel"
                    src={"https://api.edulink-indonesia.com/images/" + item.image}
                    alt=""
                  />
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </Tab>
        <Tab title="WILAYAH">
          <div className="parent-list-kota">
            {kelasperkota.map((item, index) => (
              <Link
                to={`/program/${item.kelasId}/kota/${item.namaKota}?data=${item.kelasId}`}
                className="btn-kota"
                key={index}
                // onClick={() => {
                //   window.location.href = `/kelas-perkota/${item.namaKota}?data=${item.kelasId}`;
                // }}
              >
                {item.namaKota}
              </Link>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Listkelasperkota;
