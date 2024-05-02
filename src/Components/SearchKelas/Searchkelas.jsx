import React, { useEffect, useState } from "react";
import "./Searchkelas.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import searchIcon from "../../assets/search_.png";
import iconKampus from "../../assets/KAMPUS.png";
import iconTniPolri from "../../assets/TNI POLRI.png";
import iconCpns from "../../assets/CPNS_ICON.png";
import iconOsn from "../../assets/OSN.png";
import iconPrivat from "../../assets/PRIVAT.png";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import Floatingcta from "../FloatingCta/Floatingcta";
import Bottombar from "../BottomBar/Bottombar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import tanyaProgram from "../../assets/tanya_program.png";

const Searchkelas = () => {
  const [loading, setLoading] = useState([]);
  const [cardKelas, setCardKelas] = useState([]);
  const [cardKelasTniPolri, setCardKelasTniPolri] = useState([]);
  const [cardKelasCpns, setCardKelasCpns] = useState([]);
  const [cardKelasOsn, setCardKelasOsn] = useState([]);
  const [cardKelasPrivat, setCardKelasPrivat] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get("https://api.edulink-indonesia.com/pilihankelas");
      const tniPolri = await axios.get(
        "https://api.edulink-indonesia.com/pilihankelas-polri"
      );
      setCardKelas(response.data);
      setCardKelasTniPolri(tniPolri.data);
      setLoading(false);
    };

    const loadPostsPolri = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://api.edulink-indonesia.com/pilihankelas-polri"
      );
      setCardKelasTniPolri(response.data);
      setLoading(false);
    };

    const loadPostsCpns = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://api.edulink-indonesia.com/pilihankelas-cpns"
      );
      setCardKelasCpns(response.data);
      setLoading(false);
    };

    const loadPostsOsn = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://api.edulink-indonesia.com/pilihankelas-osn"
      );
      setCardKelasOsn(response.data);
      setLoading(false);
    };

    const loadPostsPrivat = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://api.edulink-indonesia.com/pilihankelas-privat"
      );
      setCardKelasPrivat(response.data);
      setLoading(false);
    };

    loadPosts();
    loadPostsPolri();
    loadPostsCpns();
    loadPostsOsn();
    loadPostsPrivat();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Pilih Program Les Privat Terbaik - Edumatrix Indonesia"
        />
        <title>Pilih Program Les Privat Terbaik - Edumatrix Indonesia</title>
        <link rel="canonical" href="/pilihan-program" />
      </Helmet>
      <div className="container-search-kelas">
        <div className="parent-search">
          <input
            onChange={(e) => setSearchTitle(e.target.value)}
            className="input-src"
            type="search"
            placeholder="cari program atau kelas..."
          />
          <button className="btn-src">
            <FontAwesomeIcon className="icon-src" icon={faSearch} />
          </button>
        </div>
        <div className="parent-container-utama">
          <h1 className="title-search-kelas">
            <img src={iconKampus} alt="" /> PROGRAM LOLOS KAMPUS FAVORIT
          </h1>
          <div className="container-card">
            {loading ? (
              <h4>Loading ...</h4>
            ) : (
              cardKelas
                .filter((value) => {
                  if (searchTitle === "") {
                    return value;
                  } else if (
                    value.name.toLowerCase().includes(searchTitle.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((item, index) => (
                  <div className="card-utama">
                    <a href="https://edulink-indonesia.com/lead/edm/chat">
                      <img
                        key={index}
                        className="img-pilihkelas"
                        src={"https://api.edulink-indonesia.com/images/" + item.image}
                        alt="Avatar"
                      />
                    </a>
                  </div>
                ))
            )}
          </div>
        </div>
        {/* POLRI */}
        <div className="super-parent-container">
          <div className="parent-container-polri">
            <h1 className="title-search-kelas-polri">
              <img src={iconTniPolri} alt="" /> PROGRAM LOLOS TNI POLRI &
              KEDINASAN
            </h1>
            <div className="container-card-polri">
              {loading ? (
                <h4>Loading ...</h4>
              ) : (
                cardKelasTniPolri
                  .filter((value) => {
                    if (searchTitle === "") {
                      return value;
                    } else if (
                      value.name
                        .toLowerCase()
                        .includes(searchTitle.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((item, index) => (
                    <div key={index} className="card-utama">
                      <a href="https://edulink-indonesia.com/lead/edm/chat">
                        <img
                          className="img-pilihkelas-polri"
                          src={"https://api.edulink-indonesia.com/images/" + item.image}
                          alt="Avatar"
                        />
                      </a>
                    </div>
                  ))
              )}
            </div>
          </div>
          {/* CPNS */}
          <div className="parent-container-cpns">
            <h1 className="title-search-kelas-polri">
              <img src={iconCpns} alt="" /> PROGRAM LOLOS CPNS, PPPK & BUMN
            </h1>
            <div className="container-card-polri">
              {loading ? (
                <h4>Loading ...</h4>
              ) : (
                cardKelasCpns
                  .filter((value) => {
                    if (searchTitle === "") {
                      return value;
                    } else if (
                      value.name
                        .toLowerCase()
                        .includes(searchTitle.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((item, index) => (
                    <div key={index} className="card-utama">
                      <a href="https://edulink-indonesia.com/lead/edm/chat">
                        <img
                          className="img-pilihkelas-cpns"
                          src={"https://api.edulink-indonesia.com/images/" + item.image}
                          alt="Avatar"
                        />
                      </a>
                    </div>
                  ))
              )}
            </div>
          </div>
          {/* OSN */}
          <div className="parent-container-polri">
            <h1 className="title-search-kelas-polri">
              <img src={iconOsn} alt="" /> PROGRAM BELAJAR OSN SD, SMP & SMA
            </h1>
            <div className="container-card-polri">
              {loading ? (
                <h4>Loading ...</h4>
              ) : (
                cardKelasOsn
                  .filter((value) => {
                    if (searchTitle === "") {
                      return value;
                    } else if (
                      value.name
                        .toLowerCase()
                        .includes(searchTitle.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((item, index) => (
                    <div key={index} className="card-utama">
                      <a href="https://edulink-indonesia.com/lead/edm/chat">
                        <img
                          className="img-pilihkelas-polri"
                          src={"https://api.edulink-indonesia.com/images/" + item.image}
                          alt="Avatar"
                        />
                      </a>
                    </div>
                  ))
              )}
            </div>
          </div>
          {/* PRIVAT */}
          <div className="parent-container-privat">
            <h1 className="title-search-kelas-polri">
              <img src={iconPrivat} alt="" /> PROGRAM PRIVAT SD, SMP & SMA
            </h1>
            <div className="container-card-polri">
              {loading ? (
                <h4>Loading ...</h4>
              ) : (
                cardKelasPrivat
                  .filter((value) => {
                    if (searchTitle === "") {
                      return value;
                    } else if (
                      value.name
                        .toLowerCase()
                        .includes(searchTitle.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((item, index) => (
                    <div key={index} className="card-utama">
                      <a href="https://edulink-indonesia.com/lead/edm/chat">
                        <img
                          className="img-pilihkelas-polri"
                          src={"https://api.edulink-indonesia.com/images/" + item.image}
                          alt="Avatar"
                        />
                      </a>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
      <a
        className="parent-img-modeltanya-program"
        href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
      >
        <img className="model-program-kota" src={tanyaProgram} alt="" />
      </a>
      <Bottombar />
      <Floatingcta />
      <Footer />
    </React.Fragment>
  );
};

export default Searchkelas;
