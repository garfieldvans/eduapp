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
    fetch(`http://localhost:8000/kelasperkota/${query.get("data")}`)
      .then((res) => res.json())
      .then((data) => {
        setKelasPerKota(data);
        console.log("data kelasperkota",data);
      });
  };

  const fetchKelas = () => {
    fetch(`http://localhost:8000/kelas`)
      .then((res) => res.json())
      .then((data) => {
        setKelas(data);
        console.log(data);
      });
  };

  const fetchMapel = () => {
    fetch("http://localhost:8000/matapelajaran")
      .then((res) => res.json())
      .then((data) => {
        setMapel(data);
        console.log(data);
      });
  };

  return (
    <div className="container-all-tab">
      <Tabs>
        <Tab title="JANGKAUAN KOTA">
          <div className="parent-list-kota">
            {kelasperkota.map((item, index) => (
              <Link
                to={`/kelas-perkota/${item.namaKota}?data=${
                  item.kelasId
                }`}
                className="btn-kota"
                key={index}
              >
                {item.namaKota}
              </Link>
            ))}
          </div>
        </Tab>
        <Tab title="PROGRAM">
          <div className="parent-list-kelas">
            {kelas.map((item, index) => (
              <Link
                to={`/les-privat/${item.slug.toLowerCase()}-terbaik?data=${item.id}`}
                className="btn-kelas"
                key={index}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Tab>
        <Tab title="PILIHAN MATA PELAJARAN">
          <div className="parent-list-mapel">
            {mapel.map((item, index) => (
              <Link
                to={`/mata-pelajaran/${item.name.toLowerCase()}?data=${item.id}`}
                className="btn-mapel"
                key={index}
              >
                <div className="combine-icon-text">
                  <img
                    className="icon-mapel"
                    src={"http://localhost:8000/images/" + item.image}
                    alt=""
                  />
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Listkelasperkota;
