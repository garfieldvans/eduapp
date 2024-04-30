import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import rumahAdat from "../../../assets/rumah_adat.png";
import tanyaProgram from "../../../assets/tanya_program.png";
import { Helmet } from "react-helmet";
import Bestprogram2 from "../../BestProgram/BestProgram2/Bestprogram2";
import Voucer from "../../Voucer/Voucer";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import ListKabupaten from "../../Tab/ListKabupaten";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Testimoni from "../../Testimoni/Testimoni";
import Faq from "../../Faq/Faq";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import Floatingcta from "../../FloatingCta/Floatingcta";
import Bottombar from "../../BottomBar/Bottombar";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import ListUtbkSnbt from "../../Tab/TabUtbkSnbt/ListUtbkSnbt";
import ListKabupatenSnbt from "../../Tab/TabUtbkSnbt/ListKabupatenSnbt";
import BestprogramSnbt2 from "../../BestProgram/BestProgram2/BestProgramSnbt2/BestProgramSnbt2";

const HalamankotaSnbt = () => {
  const { id } = useParams();
  const [kotasnbt, setKotasnbt] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getKota = async () => {
      const response = await axiosJWT.get(
        `http://localhost:8000/kota/${query.get("data")}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setKotasnbt(response.data);
    };
    console.log(id);
    getKota(id);
  }, [id, query]);

  return (
    <React.Fragment>
      <Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bimbel SNBT Persiapan Masuk PTN terbaik di {`${kotasnbt.kota}`} #1 -
          Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h2 className="title-halaman-kota">
              Bimbel SNBT Persiapan Masuk PTN terbaik di {kotasnbt.kota}
            </h2>

            <div className="paragraf-kota">
              <p>
                Jasa Les Privat di Kota {kotasnbt.kota} untuk UTBK-SNBT,
                Kedokteran, UMPTN, UMPTKIN, SIMAK UI dan UTUL UGM
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
        <BestprogramSnbt2 />
        <Voucer />
        <Masterteacher />
        <ListKabupatenSnbt />
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

export default HalamankotaSnbt;
