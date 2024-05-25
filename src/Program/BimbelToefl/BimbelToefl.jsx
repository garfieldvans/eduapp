import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/Navbar/Navbar";
import SliderSnbt from "../../Components/SlideTop/SliderSnbt/SliderSnbt";
import Testimoni from "../../Components/Testimoni/Testimoni";
import Keunggulan from "../../Components/Keunggulan/Keunggulan";
import Masterteacher from "../../Components/MasterTeacher/Masterteacher";
import Voucer from "../../Components/Voucer/Voucer";
import Footer from "../../Components/Footer/Footer";
import Bottombar from "../../Components/BottomBar/Bottombar";
import Floatingcta from "../../Components/FloatingCta/Floatingcta";
import BestprogramSnbt from "../../Components/BestProgram/BestProgramSnbt/BestProgramSnbt";
import ListUtbkSnbt from "../../Components/Tab/TabUtbkSnbt/ListUtbkSnbt";
import Listkota from "../../Components/Tab/Listkota";
import Faqtni from "../../Components/Faq/FaqTni/FaqTni";
import SliderSupercamp from "../../Components/SlideTop/SliderSupercamp/SliderSupercamp";
import ListKotaSupercamp from "../../Components/Tab/TabSupercamp/ListKotaSupercamp";
import Asalsekolah from "../../Components/AsalSekolah/Asalsekolah";
import SliderToefl from "../../Components/SlideTop/SliderToefl/SliderToefl";
import ListKotaToefl from "../../Components/Tab/TabToefl/ListKotaToefl";

const BimbelToefl = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Bimbel Privat TOEFL, TOEIC, IELTS dan English Conversation Terbaik #1 - Edumatrix
          Indonesia"
        />
        <title>
          Bimbel Privat TOEFL, TOEIC, IELTS dan English Conversation Terbaik #1 - Edumatrix
          Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <SliderToefl />
        <BestprogramSnbt />
        <Voucer />
        <Masterteacher />
        <ListKotaToefl />
        <Keunggulan />
        <Testimoni />
        <Faqtni />
        <Asalsekolah />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default BimbelToefl;
