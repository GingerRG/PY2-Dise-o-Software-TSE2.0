import { Routes, Route } from 'react-router-dom'
import './App.css'
import ConsultasHub from './pages/ConsultasHub'
import ConsultasCiviles from './pages/ConsultasCiviles'
import Home from './pages/Home'
import Accesibilidad from './pages/Accesibilidad'
import PadronElectoral from './pages/PadronElectoral'
import CalendarioElectoral from './pages/CalendarioElectoral'
import CertificacionesDigitales from './pages/CertificacionesDigitales'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consultas" element={<ConsultasHub />} />
      <Route path="/consulta/:tipo" element={<ConsultasCiviles />} />
      <Route path="/accesibilidad" element={<Accesibilidad />} />
      <Route path="/padron-electoral" element={<PadronElectoral />} />
      <Route path="/calendario-electoral" element={<CalendarioElectoral />} />
      <Route path="/certificaciones-digitales" element={<CertificacionesDigitales />} />
    </Routes>
  )
}

export default App