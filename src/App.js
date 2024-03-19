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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        {/* Go to City By ID */}
        <Route path="/les-privat-di/kota/:id" element={<Halamankota />}></Route>
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
        <Route path="/pilihan-kelas" element={<Searchkelas />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
