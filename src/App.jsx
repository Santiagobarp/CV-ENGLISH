import React from "react";
import { Routes, Route } from 'react-router-dom';
import CV from './pages/CV';
import Evolve from './pages/Evolve';
import GEOVANNY from './pages/GEOVANNY';

function App() {
  return (
    <Routes>
      <Route path="/CV" element={<CV />} />
      <Route path="/evolve" element={<Evolve />} />
      <Route path="/GEOVANNY" element={<GEOVANNY />} />
    </Routes>
  );
}

export default App;
