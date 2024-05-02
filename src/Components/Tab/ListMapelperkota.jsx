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
    fetch(`https://api.edulink-indonesia.com/mapelwilayah/${query.get("data")}`)
      .then((res) => res.json())
      .then((data) => {
        setMapelPerKota(data);
        console.log("data kelasperkota", data);
      });

    // let text = "";
    // fetch(`https://api.edulink-indonesia.com/mapelwilayah/${query.get("data")}`)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (value) {
    //     value.forEach((value) => {
    //       text += `
    //       <Link
    //         to={'/mapel/${value.namaMapel.toLowerCase()}/kota/${
    //           value.namaKota
    //         }?data=${value.mapelId}'}
    //         className="btn-kota"
    //         key={index}
    //       >
    //         ${value.namaKota}
    //       </Link>
    //       `
    //       document.getElementById('button-kota');
    //     });
    //   });
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
          <div id="button-kota" className="parent-list-kota">
            {mapelperkota.map((item, index) => (
              <Link
                to={`/mapel/${item.namaMapel.toLowerCase()}/kota/${item.namaKota}?data=${item.mapelId}`}
                className="btn-kota"
                key={index}
                // onClick={() => {
                //   window.location.href = `/mapel-perkota/${item.namaKota}?data=${item.mapelId}`;
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

export default ListMapelperkota;
