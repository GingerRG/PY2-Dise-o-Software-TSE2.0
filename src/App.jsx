import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import ConsultasHub from './pages/ConsultasHub'
import ConsultasCiviles from './pages/ConsultasCiviles'
import Home from './pages/Home'
import NombresResults from './pages/NombresResults'
import Persona from './pages/Persona'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/consultas" element={<ConsultasHub />} />
      <Route path="/consulta/:tipo" element={<ConsultasCiviles key={location.pathname} />} />
      <Route path="/nombresResults" element={<NombresResults/>} />
      <Route path="/persona/:tipo" element={<Persona/>} />
    </Routes>
  )
}

export default App
