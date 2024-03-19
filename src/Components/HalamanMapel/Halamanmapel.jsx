import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Bestprogram2 from "../BestProgram/BestProgram2/Bestprogram2";
import Voucer from "../Voucer/Voucer";
import Masterteacher from "../MasterTeacher/Masterteacher";
import Navbar from "../Navbar/Navbar";
import modelTanyaProgram from "../../assets/tanya_program.png";
import ListMapelperkota from "../Tab/ListMapelperkota";
import Footer from "../Footer/Footer";
import Keunggulan from "../Keunggulan/Keunggulan";
import Faq from "../Faq/Faq";
import Testimoni from "../Testimoni/Testimoni";
import { Helmet } from "react-helmet";

const Halamanmapel = () => {
  const { id } = useParams();
  const [mapel, setMapel] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getMapel = async () => {
      const response = await axiosJWT.get(
        `http://localhost:8000/matapelajaran/${query.get("data")}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setMapel(response.data);
    };
    console.log(id);
    getMapel(id);
  }, [id, query]);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bimbel Privat {`${mapel.name}`} Terbaik - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-program">
        <div className="content-program">
          <div className="teks-content">
            <h2 className="title-halaman-program">
              Les Privat {mapel.name} Terbaik
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
          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-tanya-program"
              src={modelTanyaProgram}
              alt=""
            />
          </a>
        </div>
        <Bestprogram2 />
        <Voucer />
        <Masterteacher />
        <ListMapelperkota />
        <Keunggulan />
        <Testimoni />
        <Faq />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Halamanmapel;
