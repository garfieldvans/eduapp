/* eslint-disable no-unused-expressions */

import React, { useEffect, useMemo, useState } from "react";
import Bestprogram2 from "../BestProgram/BestProgram2/Bestprogram2";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Voucer from "../Voucer/Voucer";
import Masterteacher from "../MasterTeacher/Masterteacher";
import modelTanyaProgram from "../../assets/tanya_program.png";
import Footer from "../Footer/Footer";
import Keunggulan from "../Keunggulan/Keunggulan";
import Faq from "../Faq/Faq";
import { Helmet } from "react-helmet-async";
import Floatingcta from "../FloatingCta/Floatingcta";
import Bottombar from "../BottomBar/Bottombar";
import rumahAdat from "../../assets/rumah_adat.png";

const HalamanMapelperkota = () => {
  const [kota, setKota] = useState([]);
  const [mapel, setMapel] = useState([]);
  const { id, mapelId } = useParams();

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getKota = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/kota/${id}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setKota(response.data);
    };

    const getMapel = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/matapelajaran/${mapelId}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setMapel(response.data);
    };
    getKota(id);
    getMapel(mapelId);
  }, [id, query]);


  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" name="robots" />
        <title>
          Les Privat {`${mapel.name}`} #1 Terbaik di {`${kota.kota}`} - Edumatrix
          Indonesia
        </title>
        <link
          rel="canonical"
          href=""
        />
      </Helmet>
      <Navbar />
      <div className="container-halaman-program">
        <div className="content-program">
          <div className="teks-content">
            <h2 className="title-halaman-program">
              Les Privat {mapel.name} Terbaik di {kota.kota}
            </h2>
            <div className="paragraf-program">
              <p>
                Jasa Les Privat untuk TK, SD, SMP, SMA, UN/AKM, OSN, CPNS, LPDP,
                PPDS, SIMAK UI, SNBT, AKPOL, AKMIL, Kedinasan, Mahasiswa dan
                Karyawan.{" "}
              </p>
              <p className="child-paragraf-program">
                Dapatkan layanan Les Privat kapan pun dan dimana pun dengan
                lebih dari 5.000 Master Teacher Edumatrix yang siap memberikan
                pelayanan terbaik.
              </p>
            </div>
          </div>
          <a className="parent-img-modeltanya-program" href="">
            <img className="rumah-adat" src={rumahAdat} alt="" />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt=""
            />
          </a>
        </div>
        <Bestprogram2 />
        <Voucer />
        <Masterteacher />
        <Keunggulan />
        <Faq />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default HalamanMapelperkota;
