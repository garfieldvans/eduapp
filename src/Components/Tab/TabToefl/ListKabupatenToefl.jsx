import React, { useEffect, useMemo, useState } from "react";
import Tabs from "../Tabs";
import Tab from "../Tab";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ListKabupatenToefl = () => {
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
    fetch(`https://api.edulink-indonesia.com/ibukotakab/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setKabupaten(data);
      });
  };

  return (
    <div className="container-all-tab">
      <div className="parent-list-kota">
        {kabupaten.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            onClick={() => {
              window.location.href = `/bimbel-toefl-toeic-ielts-dan-english-conversation/kabupaten/${item.slug}`;
            }}
          >
            {item.kota_kabupaten}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKabupatenToefl;
