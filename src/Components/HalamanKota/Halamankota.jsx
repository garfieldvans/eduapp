import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Halamankota.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import rumahAdat from "../../assets/rumah_adat.png";
import tanyaProgram from "../../assets/tanya_program.png";
import Bestprogram2 from "../BestProgram/BestProgram2/Bestprogram2";
import Voucer from "../Voucer/Voucer";
import ListKabupaten from "../Tab/ListKabupaten";
import Masterteacher from "../MasterTeacher/Masterteacher";
import Footer from "../Footer/Footer";
import Keunggulan from "../Keunggulan/Keunggulan";
import Faq from "../Faq/Faq";
import Testimoni from "../Testimoni/Testimoni";
import Asalsekolah from "../AsalSekolah/Asalsekolah";
import { Helmet } from "react-helmet";
import Floatingcta from "../FloatingCta/Floatingcta";
import Bottombar from "../BottomBar/Bottombar";

const Halamankota = () => {
  const { id } = useParams();
  const [kota, setKota] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getKota = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/kota/${query.get("data")}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setKota(response.data);
    };
    console.log(id);
    getKota(id);
  }, [id, query]);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Les Privat Terbaik di {`${kota.kota}`} #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h2 className="title-halaman-kota">
              Les Privat Terbaik di {kota.kota}
            </h2>

            <div className="paragraf-kota">
              <p>
                Jasa Les Privat di Kota {kota.kota} untuk TK, SD, SMP, SMA,
                UN/AKM, OSN, CPNS, LPDP, PPDS, SIMAK UI, SNBT, AKPOL, AKMIL,
                Kedinasan, Mahasiswa dan Karyawan.{" "}
              </p>
              <p className="child-paragraf-kota">
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
            <img className="model-program-kota" src={tanyaProgram} alt="" />
          </a>
        </div>
        <Bestprogram2 />
        <Voucer />
        <Masterteacher />
        <ListKabupaten />
        <Keunggulan />
        <Testimoni />
        <Faq />
        <Asalsekolah />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default Halamankota;
