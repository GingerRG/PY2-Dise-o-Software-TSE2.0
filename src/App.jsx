import { Routes, Route } from 'react-router-dom'
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
      <Route path="/consulta/:tipo" element={<ConsultasCiviles />} />
      <Route path="/nombresResults" element={<NombresResults/>} />
      <Route path="/persona" element={<Persona/>} />
    </Routes>
  )
}

export default App
