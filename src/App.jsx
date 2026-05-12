import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import ConsultasHub from './pages/ConsultasHub'
import ConsultasCiviles from './pages/ConsultasCiviles'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <main className="app">
          <section className="hero">
            <p className="eyebrow">Proyecto de Diseño</p>
            <h1>Base limpia de React</h1>
            <p className="description">
              Esta pantalla está lista para reemplazarse por las vistas, componentes y estilos del nuevo proyecto.
            </p>
            <Link to="/consultas">
              <button className="btn-temp">Ir a Consultas →</button>
            </Link>
          </section>
        </main>
      } />
      
      <Route path="/consultas" element={<ConsultasHub />} />
      <Route path="/consulta/:tipo" element={<ConsultasCiviles />} />
    </Routes>
  )
}

export default App