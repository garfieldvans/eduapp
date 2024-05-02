import React, { useEffect, useState } from "react";
import Tabs from "../Tabs";
import Tab from "../Tab";
import "../Tab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import jangkauanKota from "../../../assets/kota.png";
import city from "../../../assets/city.png";

const Listkotatni = () => {
  const [kotaTni, setKotatni] = useState([]);
  const [kelas, setKelas] = useState([]);

  useEffect(() => {
    fetchKotatni();
    fetchKelas();
  }, []);

  const fetchKotatni = () => {
    fetch("https://api.edulink-indonesia.com/kotatni")
      .then((res) => res.json())
      .then((data) => {
        setKotatni(data);
        console.log(data);
      });
  };

  const fetchKelas = () => {
    fetch(`https://api.edulink-indonesia.com/kelastni`)
      .then((res) => res.json())
      .then((data) => {
        setKelas(data);
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
                to={`/bimbel/${item.slug.toLowerCase()}-terbaik?data=${
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
                {item.kelastni}
              </Link>
            ))}
          </div>
        </Tab>
        {/* <Tab title="MAPEL">
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
        </Tab> */}
        <Tab title="WILAYAH">
          <div className="parent-list-kota">
            {kotaTni.map((item, index) => (
              <Link
                to={`/bimbel-tni-polri-di/${item.kotatni.toLowerCase()}?data=${
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
                {item.kotatni}
              </Link>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Listkotatni;
