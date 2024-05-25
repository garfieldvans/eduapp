import React from "react";
import Slidertni from "../../Components/SlideTop/SliderTni/Slidertni";
import Navbar from "../../Components/Navbar/Navbar";
import BestprogramTni from "../../Components/BestProgram/BestProgramTni/BestProgramTni";
import Voucer from "../../Components/Voucer/Voucer";
import Masterteacher from "../../Components/MasterTeacher/Masterteacher";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import Keunggulan from "../../Components/Keunggulan/Keunggulan";
import GaleriKegiatan from "./GaleriKegiatan/GaleriKegiatan";
import Listkotatni from "../../Components/Tab/Tabtni/ListKotatni";
import Bottombar from "../../Components/BottomBar/Bottombar";
import Floatingcta from "../../Components/FloatingCta/Floatingcta";
import Faqtni from "../../Components/Faq/FaqTni/FaqTni";
import ProgramUnggulanTni from "../../Components/ProgramUnggulan/ProgramUnggulanTni/ProgramUnggulanTni";
import roadmapTni from "../../assets/roadmap tni.jpeg";
import "./BimbelTni.css"
import Testimonitni from "../../Components/Testimoni/TestimoniTni/TestimoniTni";
import MasterteacherTni from "../../Components/MasterTeacher/MasterteacherTni/MasterteacherTni";

const BimbelTni = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Bimbel Privat & Trainingcamp Masuk TNI - Polri dan Sekolah Kedinasan #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel TNI - Polri dan Sekolah Kedinasan Terbaru #1 - Edumatrix
          Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <Slidertni />
        <BestprogramTni />
        <Voucer />
        <MasterteacherTni />
        <div className="parent-roadmap">
          <img className="image-roadmap" src={roadmapTni} alt="roadmap tni" />
        </div>
        <Listkotatni />
        <Keunggulan />
        <ProgramUnggulanTni />
        <GaleriKegiatan />
        <Testimonitni />
        <Faqtni />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default BimbelTni;
