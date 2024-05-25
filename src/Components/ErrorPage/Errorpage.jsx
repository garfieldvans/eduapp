import React from "react";
import "./Errorpage.css";
import Navbar from "../Navbar/Navbar";
import bgError from "../../assets/404_pic.png";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Errorpage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Halaman tidak ditemukan</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container-error-page">
        <div className="parent-error-page">
          <div className="text-error-page">
            <h1 className="title-error">Oopss !</h1>
            <p className="desk-error">Halaman tidak ditemukan</p>
            <button onClick={() => goToHome()} className="btn-error-back">KEMBALI</button>
          </div>
          <img className="bg-error" src={bgError} alt="" />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Errorpage;
