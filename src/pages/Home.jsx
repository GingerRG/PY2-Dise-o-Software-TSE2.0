import { Link } from 'react-router-dom'
import './Home.css'
import logoTSE from '../assets/TSE_LOGO.png'
import arcoTSE from '../assets/arco-tse.png'
import mapaCR from '../assets/mapa-cr.png'

function Home() {
  return (
    <main className="home">
      <header className="home-header">
        <div className="home-header__logo">
          <img src={logoTSE} alt="Tribunal Supremo de Elecciones" />
        </div>

        <nav className="home-header__nav">
          <a href="#servicios">Servicios</a>
          <a href="#elecciones">Elecciones</a>
          <a href="#transparencia">Transparencia</a>
          <Link to="/consultas">Consultas</Link>
        </nav>
      </header>

      <section className="home-hero">
  <img src={arcoTSE} alt="" className="home-hero-arco" />

  <div className="home-hero-content">
    <div className="home-hero-text">
      <p className="home-badge">Tribunal Supremo de Elecciones</p>

      <h1>Democracia, identidad y participación ciudadana</h1>

      <p>
        Una propuesta más moderna, clara y accesible para consultar servicios,
        trámites e información electoral del TSE.
      </p>

      <div className="home-buttons">
        <Link to="/consultas" className="btn-primary">
          Ir a consultas
        </Link>

        <a href="#servicios" className="btn-secondary">
          Ver servicios
        </a>
      </div>
    </div>

    <div className="home-hero-map">
      <img src={mapaCR} alt="Mapa de Costa Rica" />
    </div>
  </div>
</section>

<section className="home-quick-actions" id="servicios">
  <div className="quick-actions-container">
    <div className="quick-actions-header">
      <p>Accesos rápidos</p>
      <h2>Servicios más visitados</h2>
    </div>

    <div className="quick-actions-grid">
      <Link to="/consultas" className="quick-card">
        <span className="quick-icon">🔎</span>
        <h3>Consultas civiles</h3>
        <p>Consulte información por cédula, nombre, matrimonios o defunciones.</p>
      </Link>

      <article className="quick-card">
        <span className="quick-icon">📄</span>
        <h3>Certificaciones digitales</h3>
        <p>Solicite certificaciones civiles de forma rápida y sencilla.</p>
      </article>

      <article className="quick-card">
        <span className="quick-icon">🪪</span>
        <h3>Documento de identidad</h3>
        <p>Información sobre cédula, identidad y trámites relacionados.</p>
      </article>

      <article className="quick-card">
        <span className="quick-icon">🗳️</span>
        <h3>Elecciones</h3>
        <p>Acceda a información electoral, padrón y procesos democráticos.</p>
      </article>
    </div>
  </div>
</section>
    </main>
  )
}

export default Home