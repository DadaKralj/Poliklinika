// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Protetika from "./pages/usluge/Protetika";
import Hirurgija from "./pages/usluge/Hirurgija";
import Ortodoncija from "./pages/usluge/Ortodoncija";
import Restaurativna from "./pages/usluge/Restaurativna";
import Tim from "./pages/Tim/Tim";
import Decija from "./pages/usluge/Decija";
import Implantologija from "./pages/usluge/Implantologija";
import Estetika from "./pages/usluge/Estetika";
import Dijagnostika from "./pages/usluge/Dijagnostika";
import JelenaStojanov from "./pages/Tim/JelenaStojanov";
import JelenaGudelj from "./pages/Tim/JelenaGudelj";
import NadaJelaca from "./pages/Tim/NadaJelaca";
import DjordjePetrovic from "./pages/Tim/DjordjePetrovic";
import DanicaNovakovic from "./pages/Tim/DanicaNovakovic";
import MirjanaSkakic from "./pages/Tim/MirjanaSkakic";
import MomirkaNedeljkov from "./pages/Tim/MomirkaNedeljkov";
import DraganaMalbasa from "./pages/Tim/DraganaMalbasa";
import GordanaPapic from "./pages/Tim/GordanaPapic";



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usluge/protetika" element={<Protetika />} />
        <Route path="/usluge/hirurgija" element={<Hirurgija />} />
        <Route path="/usluge/ortodoncija" element={<Ortodoncija />} />
        <Route path="/usluge/restaurativna-endodoncija" element={<Restaurativna />} />
        <Route path="/tim" element={<Tim />} />
        <Route path="/usluge/decija" element={<Decija />} />
        <Route path="/usluge/implantologija" element={<Implantologija />} />
        <Route path="/usluge/estetski-tretmani" element={<Estetika />} />
        <Route path="/usluge/dijagnostika" element={<Dijagnostika />} />

        {/* tim routes */}
        <Route path="/tim/jelena-stojanov" element={<JelenaStojanov />} />
        <Route path="/tim/jelena-gudelj" element={<JelenaGudelj />} />
        <Route path="/tim/nada-jelaca" element={<NadaJelaca />} />
        <Route path="/tim/djordje-petrovic" element={<DjordjePetrovic />} />
        <Route path="/tim/danica-novakovic" element={<DanicaNovakovic />} />
        <Route path="/tim/mirjana-skakic" element={<MirjanaSkakic />} />
        <Route path="/tim/momirka-nedeljkov" element={<MomirkaNedeljkov />} />
        <Route path="/tim/dragana-malbasa" element={<DraganaMalbasa />} />
        <Route path="/tim/gordana-papic" element={<GordanaPapic />} />

        <Route path="/tim/jelena-stojanov" element={<JelenaStojanov />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
