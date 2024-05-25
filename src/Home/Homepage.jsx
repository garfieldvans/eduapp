import React from "react";
import Slidertop from "../Components/SlideTop/Slidertop";
import Navbar from "../Components/Navbar/Navbar";
import "./Homepage.css";
import BestProgram from "../Components/BestProgram/Bestprogram";
import Voucer from "../Components/Voucer/Voucer";
import Masterteacher from "../Components/MasterTeacher/Masterteacher";
import Listkota from "../Components/Tab/Listkota";
import Footer from "../Components/Footer/Footer";
import Faq from "../Components/Faq/Faq";
import Testimoni from "../Components/Testimoni/Testimoni";
import Keunggulan from "../Components/Keunggulan/Keunggulan";
import Asalsekolah from "../Components/AsalSekolah/Asalsekolah";
import { Helmet } from "react-helmet-async";
import PreLoader from "../Components/Preloader/PreLoader";
import Floatingcta from "../Components/FloatingCta/Floatingcta";
import Bottombar from "../Components/BottomBar/Bottombar";

const Homepage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Les Privat & Supercamp Masuk PTN Terbaik #1 Indonesia - Edumatrix Indonesia"
        />
        <title>
          Les Privat & Supercamp Masuk PTN Terbaik #1 Indonesia - Edumatrix
          Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      {/* <PreLoader /> */}
      <Navbar />
      <div className="container-all">
        <Slidertop />
        <BestProgram />
        <Voucer />
        <Masterteacher />
        <Listkota />
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

export default Homepage;
