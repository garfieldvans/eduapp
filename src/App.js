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
import BimbelLpdp from "./Program/BimbelLpdp/BimbelLpdp";
import HalamankotaLpdp from "./Components/HalamanKota/HalamanKotaLpdp/HalamanKotaLpdp";
import HalamankabupatenLpdp from "./Components/HalamanKabupaten/HalamanKabupatenLpdp/HalamanKabupatenLpdp";
import BimbelPrivat from "./Program/BimbelPrivat/BimbelPrivat";
import HalamankotaPrivat from "./Components/HalamanKota/HalamanKotaPrivat/HalamanKotaPrivat";
import HalamankabupatenPrivat from "./Components/HalamanKabupaten/HalamanKabupatenPrivat/HalamanKabupatenPrivat";
import BimbelCpns from "./Program/BimbelCpns/BimbelCpns";
import HalamankotaCpns from "./Components/HalamanKota/HalamanKotaCpns/HalamanKotaCpns";
import HalamankabupatenCpns from "./Components/HalamanKabupaten/HalamanKabupatenCpns/HalamanKabupatenCpns";
import BimbelBumn from "./Program/BimbelBumn/BimbelBumn";
import HalamankotaBumn from "./Components/HalamanKota/HalamanKotaBumn/HalamanKotaBumn";
import BimbelIgcse from "./Program/BimbelIgcse/BimbelIgcse";
import HalamankotaIgcse from "./Components/HalamanKota/HalamanKotaIgcse/HalamanKotaIgcse";
import HalamankabupatenIgcse from "./Components/HalamanKabupaten/HalamanKabupatenIgcse/HalamanKabupatenIgcse";
import BimbelIup from "./Program/BimbelIup/BimbelIup";
import HalamankotaIup from "./Components/HalamanKota/HalamanKotaIup/HalamanKotaIup";
import HalamankabupatenIup from "./Components/HalamanKabupaten/HalamanKabupatenIup/HalamanKabupatenIup";
import BimbelOsn from "./Program/BimbelOsn/BimbelOsn";
import HalamankotaOsn from "./Components/HalamanKota/HalamanKotaOsn/HalamanKotaOsn";
import HalamankabupatenBumn from "./Components/HalamanKabupaten/HalamanKabupatenBumn/HalamanKabupatenBumn";
import HalamankabupatenOsn from "./Components/HalamanKabupaten/HalamanKabupatenOsn/HalamanKabupatenOsn";
import BimbelToefl from "./Program/BimbelToefl/BimbelToefl";
import HalamankotaToefl from "./Components/HalamanKota/HalamanKotaToefl/HalamanKotaToefl";
import HalamankabupatenToefl from "./Components/HalamanKabupaten/HalamanKabupatenToefl/HalamanKabupatenToefl";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        {/* Go to City By ID */}
        <Route exact path="/les-privat-di-kota/:id" element={<Halamankota />}></Route>
        {/* Go to Kabupaten By ID */}
        <Route exact path="/les-privat-di/:id" element={<Halamankabupaten />}></Route>
        {/* Go to program By ID */}
        <Route exact path="/les-privat/program/:id" element={<Halamanprogram />}></Route>
        {/* Go to program per Kota By ID */}
        <Route exact path="/les-privat/program/:programid/kota/:id" element={<HalamanProgramperkota />}></Route>
        {/* Go to Mapel By ID */}
        <Route exact path="/les-privat/mata-pelajaran/:id" element={<Halamanmapel />}></Route>
        {/* Go to Mapel per kota By ID */}
        <Route exact path="/les-privat/mata-pelajaran/:mapelId/kota/:id" element={<HalamanMapelperkota />}></Route>
        {/* Go to Errorpage */}
        <Route exact path="*" element={<Homepage />}></Route>
        {/* Go to Search Kelas */}
        <Route exact path="/pilihan-kelas" element={<Searchkelas />}></Route>
        {/* Go to About Us */}
        <Route exact path="/tentang-kami" element={<Aboutus />}></Route>

        {/* PROGRAM BIMBEL */}
        {/* TNI-POLRI */}
        <Route exact path="/bimbel-tni-polri-dan-sekolah-kedinasan" element={<BimbelTni />}></Route>
        {/* Go to City TNI By ID */}
        <Route exact path="/bimbel-tni-polri-dan-sekolah-kedinasan-di/:id" element={<Halamankotatni />}></Route>
        {/* Go to program TNI By ID */}
        <Route exact path="/bimbel/:id-terbaik" element={<Halamanprogramtni />}></Route>
        {/* Go to program per Kota TNI By ID */}
        <Route exact path="/bimbel-di-kota/:id" element={<HalamanProgramperkotaTni />}></Route>

        {/* SNBT */}
        <Route exact path="/bimbel-snbt-terbaik" element={<BimbelSnbt />}></Route>
        {/* Go to City SNBT By ID */}
        <Route exact path="/bimbel-snbt-terbaik-di/:id" element={<HalamankotaSnbt />}></Route>
        {/* Go to Program SNBT By ID */}
        <Route exact path="/bimbel-privat/:id" element={<Halamanprogramsnbt />}></Route>
        {/* Go to Kabupaten SNBT By ID */}
        <Route exact path="/bimbel-snbt/kabupaten/:id" element={<HalamankabupatenSnbt />}></Route>

        {/* SUPERCAMP */}
        <Route exact path="/bimbel-supercamp-edumatrix" element={<BimbelSupercamp />}></Route>
        {/* Go to City SUPERCAMP By ID */}
        <Route exact path="/bimbel-supercamp-edumatrix-di/:id" element={<HalamankotaSupercamp />}></Route>
        {/* Go to Kabupaten SUPERCAMP By ID */}
        <Route exact path="/bimbel-supercamp-edumatrix/kabupaten/:id" element={<HalamankabupatenSupercamp />}></Route>

        {/* LPDP */}
        <Route exact path="/bimbel-persiapan-seleksi-lpdp" element={<BimbelLpdp />}></Route>
        {/* Go to City LPDP By ID */}
        <Route exact path="/bimbel-persiapan-seleksi-lpdp-di/:id" element={<HalamankotaLpdp />}></Route>
        {/* Go to Kabupaten LPDP By ID */}
        <Route exact path="/bimbel-persiapan-seleksi-lpdp/kabupaten/:id" element={<HalamankabupatenLpdp />}></Route>

        {/* PRIVAT */}
        <Route exact path="/bimbel-privat-tk-sd-smp-sma-mahasiswa" element={<BimbelPrivat />}></Route>
        {/* Go to City PRIVAT By ID */}
        <Route exact path="/bimbel-privat-tk-sd-smp-sma-mahasiswa-di/:id" element={<HalamankotaPrivat />}></Route>
        {/* Go to Kabupaten PRIVAT By ID */}
        <Route exact path="/bimbel-privat-tk-sd-smp-sma-mahasiswa/kabupaten/:id" element={<HalamankabupatenPrivat />}></Route>

        {/* CPNS */}
        <Route exact path="/bimbel-cpns-dan-pppk" element={<BimbelCpns />}></Route>
        {/* Go to City CPNS By ID */}
        <Route exact path="/bimbel-cpns-dan-pppk-di/:id" element={<HalamankotaCpns />}></Route>
        {/* Go to Kabupaten CPNS By ID */}
        <Route exact path="/bimbel-cpns-dan-pppk/kabupaten/:id" element={<HalamankabupatenCpns />}></Route>

        {/* BUMN */}
        <Route exact path="/bimbel-seleksi-bumn" element={<BimbelBumn />}></Route>
        {/* Go to City BUMN By ID */}
        <Route exact path="/bimbel-seleksi-bumn-di/:id" element={<HalamankotaBumn />}></Route>
        {/* Go to Kabupaten BUMN By ID */}
        <Route exact path="/bimbel-seleksi-bumn/kabupaten/:id" element={<HalamankabupatenBumn />}></Route>

        {/* IGCSE */}
        <Route exact path="/bimbel-kurikulum-igcse" element={<BimbelIgcse />}></Route>
        {/* Go to City IGCSE By ID */}
        <Route exact path="/bimbel-igcse-dan-ibtutor-di/:id" element={<HalamankotaIgcse />}></Route>
        {/* Go to Kabupaten BUMN By ID */}
        <Route exact path="/bimbel-igcse-dan-ibtutor/kabupaten/:id" element={<HalamankabupatenIgcse />}></Route>

        {/* IUP-KKI */}
        <Route exact path="/bimbel-iup-kki" element={<BimbelIup />}></Route>
        {/* Go to City IUPKKI By ID */}
        <Route exact path="/bimbel-iup-kki-di/:id" element={<HalamankotaIup />}></Route>
        {/* Go to Kabupaten IUPKKI By ID */}
        <Route exact path="/bimbel-iup-kki/kabupaten/:id" element={<HalamankabupatenIup />}></Route>

        {/* OSN */}
        <Route exact path="/bimbel-osn" element={<BimbelOsn />}></Route>
        {/* Go to City OSN By ID */}
        <Route exact path="/bimbel-osn-di/:id" element={<HalamankotaOsn />}></Route>
        {/* Go to Kabupaten OSN By ID */}
        <Route exact path="/bimbel-osn/kabupaten/:id" element={<HalamankabupatenOsn />}></Route>

        {/* TOEFL */}
        <Route exact path="/bimbel-toefl-toeic-ielts-dan-english-conversation" element={<BimbelToefl />}></Route>
        {/* Go to City TOEFL By ID */}
        <Route exact path="/bimbel-toefl-toeic-ielts-dan-english-conversation-di/:id" element={<HalamankotaToefl />}></Route>
        {/* Go to Kabupaten TOEFL By ID */}
        <Route exact path="/bimbel-toefl-toeic-ielts-dan-english-conversation/kabupaten/:id" element={<HalamankabupatenToefl />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
