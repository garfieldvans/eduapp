import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Tabs from "./Tabs";
import Tab from "./Tab";

const ListMapelperkota = () => {
  const [mapelperkota, setMapelPerKota] = useState([]);
  const [kelas, setKelas] = useState([]);
  const [mapel, setMapel] = useState([]);

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    fetchMapelperKota();
    fetchKelas();
    fetchMapel();
  }, []);

  const fetchMapelperKota = () => {
    fetch(`http://localhost:8000/mapelwilayah/${query.get("data")}`)
      .then((res) => res.json())
      .then((data) => {
        setMapelPerKota(data);
        console.log("data kelasperkota", data);
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
            {mapelperkota.map((item, index) => (
              <Link
                to={`/mapel-perkota/${item.namaKota}?data=${item.mapelId}`}
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
                to={`/les-privat/${item.slug.toLowerCase()}-terbaik?data=${
                  item.id
                }`}
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

export default ListMapelperkota;
