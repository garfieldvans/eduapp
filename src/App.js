import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Home/Homepage";
import Halamankota from "./Components/HalamanKota/Halamankota";
import Halamankabupaten from "./Components/HalamanKabupaten/Halamankabupaten";
import Halamanprogram from "./Components/HalamanProgram/Halamanprogram";
import HalamanProgramperkota from "./Components/HalamanProgramperKota/HalamanProgramperkota";
import Halamanmapel from "./Components/HalamanMapel/Halamanmapel";
import HalamanMapelperkota from "./Components/HalamanMapelperKota/HalamanMapelperkota";
import Errorpage from "./Components/ErrorPage/Errorpage";
import Searchkelas from "./Components/SearchKelas/Searchkelas";
import Aboutus from "./Components/AboutUs/Aboutus";
import BimbelTni from "./Program/BimbelTni/BimbelTni";
import Halamankotatni from "./Components/HalamanKota/HalamanKotaTni/Halamankotatni";
import Halamanprogramtni from "./Components/HalamanProgram/HalamanProgramTni/HalamanProgramTni";
import HalamanProgramperkotaTni from "./Components/HalamanProgramperKota/HalamanProgramperKotaTni/HalamanProgramperKotaTni";
import BimbelSnbt from "./Program/BimbelSnbt/BimbelSnbt";
import HalamankotaSnbt from "./Components/HalamanKota/HalamanKotaSnbt/HalamanKotaSnbt";
import Halamanprogramsnbt from "./Components/HalamanProgram/HalamanProgramSnbt/HalamanProgramSnbt";
import HalamankabupatenSnbt from "./Components/HalamanKabupaten/HalamanKabupatenSnbt/HalamanKabupatenSnbt";
import BimbelSupercamp from "./Program/BimbelSupercamp/BimbelSupercamp";
import HalamankotaSupercamp from "./Components/HalamanKota/HalamanKotaSupercamp/HalamanKotaSupercamp";
import HalamankabupatenSupercamp from "./Components/HalamanKabupaten/HalamanKabupatenSupercamp/HalamanKabupatenSupercamp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        {/* Go to City By ID */}
        <Route path="/les-privat-di-kota/:id" element={<Halamankota />}></Route>
        {/* Go to Kabupaten By ID */}
        <Route path="/les-privat-di-kabupaten/:id" element={<Halamankabupaten />}></Route>
        {/* Go to program By ID */}
        <Route path="/les-privat/:id-terbaik" element={<Halamanprogram />}></Route>
        {/* Go to program per Kota By ID */}
        <Route path="/kelas-perkota/:id" element={<HalamanProgramperkota />}></Route>
        {/* Go to Mapel By ID */}
        <Route path="/mata-pelajaran/:id" element={<Halamanmapel />}></Route>
        {/* Go to Mapel per kota By ID */}
        <Route path="/mapel-perkota/:id" element={<HalamanMapelperkota />}></Route>
        {/* Go to Errorpage */}
        <Route path="*" element={<Errorpage />}></Route>
        {/* Go to Search Kelas */}
        <Route path="/pilihan-program" element={<Searchkelas />}></Route>
        {/* Go to About Us */}
        <Route path="/tentang-kami" element={<Aboutus />}></Route>

        {/* PROGRAM BIMBEL */}
        {/* TNI-POLRI */}
        <Route path="/bimbel-tni-polri-dan-sekolah-kedinasan" element={<BimbelTni />}></Route>
        {/* Go to City TNI By ID */}
        <Route path="/bimbel-tni-polri-di/:id" element={<Halamankotatni />}></Route>
        {/* Go to program TNI By ID */}
        <Route path="/bimbel/:id-terbaik" element={<Halamanprogramtni />}></Route>
        {/* Go to program per Kota TNI By ID */}
        <Route path="/bimbel-di-kota/:id" element={<HalamanProgramperkotaTni />}></Route>

        {/* SNBT */}
        <Route path="/bimbel-snbt-terbaik" element={<BimbelSnbt />}></Route>
        {/* Go to City SNBT By ID */}
        <Route path="/bimbel-snbt-terbaik-di/:id" element={<HalamankotaSnbt />}></Route>
        {/* Go to Program SNBT By ID */}
        <Route path="/bimbel-privat/:id" element={<Halamanprogramsnbt />}></Route>
        {/* Go to Kabupaten SNBT By ID */}
        <Route path="/bimbel-privat-di-kabupaten/:id" element={<HalamankabupatenSnbt />}></Route>

        {/* SUPERCAMP */}
        <Route path="/bimbel-supercamp-edumatrix" element={<BimbelSupercamp />}></Route>
        {/* Go to City SUPERCAMP By ID */}
        <Route path="/bimbel-supercamp-edumatrix-di/:id" element={<HalamankotaSupercamp />}></Route>
        {/* Go to Kabupaten SUPERCAMP By ID */}
        <Route path="/bimbel-supercamp-di-kabupaten/:id" element={<HalamankabupatenSupercamp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
