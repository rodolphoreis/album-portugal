import Home from "./pages/Home";
import History from "./pages/History";
import Attractions from "./pages/Attractions";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AquiNasceuPortugal from "./pages/AquiNasceuPortugal";
import CasteloDeGuimaraes from "./pages/CasteloDeGuimaraes";
import IgrejaDeSaoGualter from "./pages/IgrejaDeSaoGualter";
import RegiaoVinica from "./pages/RegiaoVinica";
import Douro from "./pages/Douro";
import PisaDasUvas from "./pages/PisaDasUvas";
import Ribeira from "./pages/Ribeira";
import VilaNovaDeGaia from "./pages/VilaNovaDeGaia";
import BondesDeLisboa from "./pages/BondesDeLisboa";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/aquinasceuportugal" element={<AquiNasceuPortugal />} />
          <Route path="/castelodeguimaraes" element={<CasteloDeGuimaraes />} />
          <Route path="/igrejadesaogualter" element={<IgrejaDeSaoGualter />} />
          <Route path="/regiaovinica" element={<RegiaoVinica />} />
          <Route path="/douro" element={<Douro />} />
          <Route path="/pisadasuvas" element={<PisaDasUvas />} />
          <Route path="/ribeira" element={<Ribeira />} />
          <Route path="/vilanovadegaia" element={<VilaNovaDeGaia />} />
          <Route path="/bondesdelisboa" element={<BondesDeLisboa />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
