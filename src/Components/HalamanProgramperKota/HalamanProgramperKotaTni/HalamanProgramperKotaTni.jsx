import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";;
import modelTanyaProgram from "../../../assets/tanya_program.png";
import { Helmet } from "react-helmet";
import rumahAdat from "../../../assets/rumah_adat.png";
import Footer from "../../Footer/Footer";
import Bottombar from "../../BottomBar/Bottombar";
import Floatingcta from "../../FloatingCta/Floatingcta";
import Bestprogram2 from "../../BestProgram/BestProgram2/Bestprogram2";
import Voucer from "../../Voucer/Voucer";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Testimoni from "../../Testimoni/Testimoni";
import Faq from "../../Faq/Faq";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import Navbar from "../../Navbar/Navbar";

const HalamanProgramperkotaTni = () => {
  const [kota, setKota] = useState([]);
  const [program, setProgram] = useState([]);
  const { id } = useParams();

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getKota = async () => {
      const response = await axiosJWT.get(
        `http://localhost:8000/kotatni/${query.get("data")}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setKota(response.data);
    };

    const getProgram = async () => {
      const response = await axiosJWT.get(
        `http://localhost:8000/kelastni/${query.get("data")}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setProgram(response.data);
    };

    console.log(id);
    getKota(id);
    getProgram(id);
    // fetchKabupaten(id);
    // fetchKota();
    // fetchKelas();
    // fetchMapel();
    // fetchKelasperKota();
  }, [id, query]);
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bimbel {`${program.kelastni}`} #1 Terbaik di {id} - Edumatrix
          Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-program">
        <div className="content-program">
          <div className="teks-content">
            <h2 className="title-halaman-program">
              Bimbel {program.kelastni} Terbaik di {id} - Edumatrix Indonesia
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

export default HalamanProgramperkotaTni;
