import { Routes, Route } from 'react-router-dom'
import './App.css'
import ConsultasHub from './pages/ConsultasHub'
import ConsultasCiviles from './pages/ConsultasCiviles'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/consultas" element={<ConsultasHub />} />
      <Route path="/consulta/:tipo" element={<ConsultasCiviles />} />
    </Routes>
  )
}

export default App
