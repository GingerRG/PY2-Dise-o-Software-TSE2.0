import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import ConsultasHub from './pages/ConsultasHub'
import ConsultasCiviles from './pages/ConsultasCiviles'
import Home from './pages/Home'

import Accesibilidad from './pages/Accesibilidad'
import PadronElectoral from './pages/PadronElectoral'
import CalendarioElectoral from './pages/CalendarioElectoral'
import CertificacionesDigitales from './pages/CertificacionesDigitales'
import AccessibilityWidget from './components/AccessibilityWidget'

import NombresResults from './pages/NombresResults'
import Persona from './pages/Persona'

function App() {
  const location = useLocation()

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/consultas" element={<ConsultasHub />} />

        <Route
          path="/consulta/:tipo"
          element={<ConsultasCiviles key={location.pathname} />}
        />

        <Route path="/nombresResults" element={<NombresResults />} />
        <Route path="/persona/:tipo" element={<Persona />} />

        <Route path="/accesibilidad" element={<Accesibilidad />} />
        <Route path="/padron-electoral" element={<PadronElectoral />} />
        <Route path="/calendario-electoral" element={<CalendarioElectoral />} />
        <Route
          path="/certificaciones-digitales"
          element={<CertificacionesDigitales />}
        />
      </Routes>

      <AccessibilityWidget />
    </>
  )
}

export default App