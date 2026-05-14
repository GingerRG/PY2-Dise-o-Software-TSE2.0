import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './Home.css'
import logoTSE from '../assets/TSE_LOGO.png'
import arcoTSE from '../assets/arco-tse.png'
import mapaCR from '../assets/mapa-cr.png'

function Home() {
  const serviciosRef = useRef(null)
  const [serviciosVisibles, setServiciosVisibles] = useState(false)
  const [menuAccesibilidad, setMenuAccesibilidad] = useState(false)

useEffect(() => {
  const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setServiciosVisibles(true)
    }
  },
  {
    threshold: 0.35,
    rootMargin: '0px 0px -120px 0px',
  }
)

  if (serviciosRef.current) {
    observer.observe(serviciosRef.current)
  }

  return () => observer.disconnect()
}, [])
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
              Una propuesta moderna, clara y accesible para consultar servicios,
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

      <section
        ref={serviciosRef}
        className={`home-quick-actions ${serviciosVisibles ? 'home-quick-actions--visible' : ''}`}
        id="servicios"
      >
        <div className="quick-actions-container">
          <div className="quick-actions-header">
            <p>Accesos rápidos</p>
            <h2>Servicios más visitados</h2>
          </div>

          <div className="quick-actions-grid">
            <Link to="/consultas" className="quick-card" style={{ '--delay': '0ms' }}>
              <span className="quick-icon">01</span>
              <h3>Consultas civiles</h3>
              <p>
                Consulte información por cédula, nombre, matrimonios o defunciones.
              </p>
            </Link>

            <article className="quick-card" style={{ '--delay': '120ms' }}>
              <span className="quick-icon">02</span>
              <h3>Certificaciones digitales</h3>
              <p>
                Solicite certificaciones civiles de forma rápida y sencilla.
              </p>
            </article>

            <article className="quick-card" style={{ '--delay': '240ms' }}>
              <span className="quick-icon">03</span>
              <h3>Documento de identidad</h3>
              <p>
                Información sobre cédula, identidad y trámites relacionados.
              </p>
            </article>

            <article className="quick-card" style={{ '--delay': '360ms' }}>
              <span className="quick-icon">04</span>
              <h3>Elecciones</h3>
              <p>
                Acceda a información electoral, padrón y procesos democráticos.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-election-section" id="elecciones">
  <div className="election-container">
    <div className="election-text">
      <p className="section-label">Procesos electorales</p>

      <h2>Información electoral en un solo lugar</h2>

      <p>
        Acceda de forma clara a la información relacionada con el padrón electoral,
        partidos políticos, calendario electoral y participación ciudadana.
      </p>

      <div className="election-main-actions">
        <a href="#" className="election-main-button">
          Ver información electoral
        </a>

        <a href="#transparencia" className="election-secondary-button">
          Participación ciudadana
        </a>
      </div>
    </div>

    <div className="election-actions">
      <article className="election-card">
        <div className="election-card-number">01</div>
        <div>
          <h3>Padrón electoral</h3>
          <p>Consulte su lugar de votación y datos electorales.</p>
        </div>
      </article>

      <article className="election-card">
        <div className="election-card-number">02</div>
        <div>
          <h3>Partidos políticos</h3>
          <p>Información sobre agrupaciones políticas y normativa electoral.</p>
        </div>
      </article>

      <article className="election-card">
        <div className="election-card-number">03</div>
        <div>
          <h3>Calendario electoral</h3>
          <p>Fechas importantes de los procesos electorales.</p>
        </div>
      </article>
    </div>
  </div>
</section>

      <section className="home-participation" id="transparencia">
        <div className="participation-container">
          <div className="participation-header">
            <p>Información institucional</p>
            <h2>Transparencia y participación</h2>
          </div>

          <div className="participation-grid">
            <article className="participation-card">
              <span className="participation-icon">A</span>
              <h3>Transparencia institucional</h3>
              <p>
                Consulte información pública sobre gestión, informes, recursos
                y procesos administrativos.
              </p>
              <a href="#">Ingresar</a>
            </article>

            <article className="participation-card">
              <span className="participation-icon">B</span>
              <h3>Normativa electoral</h3>
              <p>
                Acceda a reglamentos, jurisprudencia y documentos relacionados
                con el sistema electoral.
              </p>
              <a href="#">Ingresar</a>
            </article>

            <article className="participation-card">
              <span className="participation-icon">C</span>
              <h3>Participación ciudadana</h3>
              <p>
                Información sobre democracia, educación cívica y participación
                política de la ciudadanía.
              </p>
              <a href="#">Ingresar</a>
            </article>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>Tribunal Supremo de Elecciones - Rediseño académico</p>
      </footer>
      <div className={`accessibility-widget ${menuAccesibilidad ? 'accessibility-widget--open' : ''}`}>
        <div className="accessibility-panel">
          <p>Opciones de accesibilidad</p>

          <button type="button">Aumentar texto</button>
          <button type="button">Alto contraste</button>
          <button type="button">Lectura fácil</button>
        </div>

        <button
          type="button"
          className="accessibility-button"
          onClick={() => setMenuAccesibilidad(!menuAccesibilidad)}
          aria-expanded={menuAccesibilidad}
        >
          <span>Aa</span>
          Accesibilidad
      </button>
</div>

    </main>
  )
}

export default Home