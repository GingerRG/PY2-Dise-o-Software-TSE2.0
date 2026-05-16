import { Link } from 'react-router-dom'
import './PadronElectoral.css'
import logoTSE from '../assets/TSE_LOGO.png'

function PadronElectoral() {
  return (
    <main className="padron-page">
      <header className="padron-header">
        <div className="padron-header__logo">
          <img src={logoTSE} alt="Tribunal Supremo de Elecciones" />
        </div>

        <nav className="padron-header__nav">
          <Link to="/">Inicio</Link>
          <Link to="/consultas">Consultas</Link>
          <Link to="/accesibilidad">Accesibilidad</Link>
        </nav>
      </header>

      <section className="padron-hero">
        <p className="padron-label">Sistema de consulta oficial</p>

        <h1>Consulta del Padrón Electoral</h1>

        <p>
          Verifique su información electoral y lugar de votación de forma rápida,
          clara y segura.
        </p>

        <div className="padron-actions">
          <a href="#consulta-padron" className="padron-btn-primary">
            Consultar padrón
          </a>

          <a href="#requisitos" className="padron-btn-secondary">
            Ver requisitos
          </a>
        </div>
      </section>

      <section className="padron-search" id="consulta-padron">
        <div className="padron-search-card">
          <div className="padron-search-header">
            <span>🪪</span>
            <div>
              <h2>Ingrese su número de cédula</h2>
              <p>Consulte su información electoral oficial.</p>
            </div>
          </div>

          <div className="padron-form">
            <label htmlFor="cedula">Número de cédula</label>
            <input id="cedula" type="text" placeholder="Ejemplo: 101234567" />
            <small>Ingrese su número de identificación sin guiones ni espacios.</small>

            <button type="button">Buscar</button>
          </div>
        </div>
      </section>

      <section className="padron-info">
        <h2>Información disponible</h2>

        <div className="padron-info-grid">
          <article className="padron-card">
            <span>01</span>
            <h3>Lugar de votación</h3>
            <p>Consulte el centro de votación asignado según su domicilio registrado.</p>
          </article>

          <article className="padron-card">
            <span>02</span>
            <h3>Datos personales</h3>
            <p>Verifique que su nombre y apellidos estén correctamente registrados.</p>
          </article>

          <article className="padron-card">
            <span>03</span>
            <h3>Junta receptora</h3>
            <p>Identifique la mesa electoral donde debe emitir su voto.</p>
          </article>

          <article className="padron-card">
            <span>04</span>
            <h3>Información electoral</h3>
            <p>Acceda a detalles adicionales sobre su inscripción en el padrón.</p>
          </article>
        </div>
      </section>

      <section className="padron-security" id="requisitos">
        <div className="padron-security-card">
          <span>🔒</span>

          <div>
            <h2>Privacidad y seguridad de la información</h2>
            <p>
              La consulta del padrón electoral permite verificar información de
              manera segura. Los datos mostrados deben utilizarse únicamente para
              fines de orientación electoral y consulta ciudadana.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PadronElectoral