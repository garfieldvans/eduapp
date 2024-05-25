/* eslint-disable no-unused-expressions */

import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import modelTanyaProgram from "../../../assets/tanya_program.png";
import { Helmet } from "react-helmet-async";
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
import ListkelasperkotaTni from "../../Tab/Tabtni/ListKelasperkotaTni";
import ListUtbkSnbt from "../../Tab/TabUtbkSnbt/ListUtbkSnbt";
import BestprogramSnbt2 from "../../BestProgram/BestProgram2/BestProgramSnbt2/BestProgramSnbt2";
import Faqtni from "../../Faq/FaqTni/FaqTni";

const Halamanprogramsnbt = () => {
  const { id } = useParams();
  const [program, setProgram] = useState([]);
  const [kelasperkota, setKelasPerKota] = useState([]);
  const [promo, setPromo] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getProgram = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/kelassnbt/${query.get("data")}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setProgram(response.data);
    };
    const getPromo = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/kelas/${query.get("data")}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setPromo(response.data);
    };
    (id);
    getProgram(id);
    getPromo(id);
    fetchKelasperKota();
  }, [id, query]);

  const fetchKelasperKota = () => {
    fetch(`https://api.edulink-indonesia.com/kelasperkota/${query.get("data")}`)
      .then((res) => res.json())
      .then((data) => {
        setKelasPerKota(data);
      });
  };

  return (
    <React.Fragment>
      <Helmet prioritizeSeoTags>
        <meta charSet="utf-8"/>
        <meta name="description" content={`Bimbel ${program.kelassnbt} #1 Terbaik - Edumatrix Indonesia`} />
        <title>
          Bimbel {`${program.kelassnbt}`} #1 Terbaik - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-program">
        <div className="content-program">
          <div className="teks-content">
            <h2 className="title-halaman-program">
              Bimbel {program.kelassnbt} Terbaik - Edumatrix Indonesia
            </h2>
            <div className="paragraf-program">
              <p>
                Jasa Les Privat untuk UTBK-SNBT, Kedokteran, UMPTN, UMPTKIN,
                SIMAK UI dan UTUL UGM
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
        <BestprogramSnbt2 />
        <Voucer />
        <Masterteacher />
        {/* <ListkelasperkotaTni /> */}
        <ListUtbkSnbt />
        <Keunggulan />
        <Testimoni />
        <Faqtni />
        <Asalsekolah />
        <div className="parent-promo">
          <img
            className="discount-promo"
            src={"https://api.edulink-indonesia.com/images/" + promo.image}
            alt=""
          />
        </div>
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default Halamanprogramsnbt;
