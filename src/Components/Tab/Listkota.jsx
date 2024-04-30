import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import "./Tab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import jangkauanKota from "../../assets/kota.png";
import city from "../../assets/city.png";

const Listkota = () => {
  const [kota, setKota] = useState([]);
  const [program, setProgram] = useState([]);
  const [mapel, setMapel] = useState([]);

  useEffect(() => {
    fetchKota();
    fetchKelas();
    fetchMapel();
  }, []);

  const fetchKota = () => {
    fetch("http://localhost:8000/kota")
      .then((res) => res.json())
      .then((data) => {
        setKota(data);
        console.log(data);
      });
  };

  const fetchKelas = () => {
    fetch(`http://localhost:8000/kelas`)
      .then((res) => res.json())
      .then((data) => {
        setProgram(data);
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
        <Tab title="PROGRAM">
          <div className="parent-list-kelas">
            {program.map((item, index) => (
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
                    src={"http://localhost:8000/images/" + item.image}
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
            {kota.map((item, index) => (
              <Link
                to={`/les-privat-di-kota/${item.kota.toLowerCase()}?data=${
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
        </Tab>
      </Tabs>
    </div>
  );
};

export default Listkota;
