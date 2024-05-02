import React, { useEffect, useMemo, useState } from "react";
import Tabs from "../Tabs";
import Tab from "../Tab";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ListKabupatenCpns = () => {
  const [kabupaten, setKabupaten] = useState([]);
  const [kelas, setKelas] = useState([]);
  const [mapel, setMapel] = useState([]);
  const { id } = useParams();

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    fetchKabupaten(id);
  }, []);

  const fetchKabupaten = () => {
    fetch(`https://api.edulink-indonesia.com/ibukotakab/${query.get("data")}`)
      .then((res) => res.json())
      .then((data) => {
        setKabupaten(data);
        console.log(data);
      });
  };

  return (
    <div className="container-all-tab">
      <div className="parent-list-kota">
        {kabupaten.map((item, index) => (
          <Link
            to={`/bimbel-cpns-pppk-terbaik-di-kabupaten/${item.kota_kabupaten}?data=${item.id}`}
            className="btn-kota"
            key={index}
            // onClick={() => {
            //   window.location.href = `/les-privat-di-kabupaten/${item.kota_kabupaten}?data=${item.id}`;
            // }}
          >
            {item.kota_kabupaten}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKabupatenCpns;
