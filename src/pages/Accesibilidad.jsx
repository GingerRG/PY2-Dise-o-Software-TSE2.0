import { Link } from 'react-router-dom'
import './Accesibilidad.css'
import logoTSE from '../assets/TSE_LOGO.png'

function Accesibilidad() {
  return (
    <main className="access-page">
      <header className="access-header">
        <div className="access-header__logo">
          <img src={logoTSE} alt="Tribunal Supremo de Elecciones" />
        </div>

        <nav className="access-header__nav">
          <Link to="/">Inicio</Link>
          <Link to="/consultas">Consultas</Link>
        </nav>
      </header>

      <section className="access-hero">
        <div>
          <p className="access-label">Accesibilidad ciudadana</p>
          <h1>Una plataforma más clara, legible e inclusiva</h1>
          <p>
            Esta sección reúne opciones pensadas para mejorar la experiencia de
            navegación de personas con distintas necesidades visuales, cognitivas
            o tecnológicas.
          </p>

          <Link to="/" className="access-main-button">
            Volver a la página principal
          </Link>
        </div>
      </section>

      <section className="access-options">
        <article className="access-card">
          <span>01</span>
          <h2>Texto claro y legible</h2>
          <p>
            Se priorizan tamaños de letra adecuados, buena separación visual y
            textos breves para facilitar la lectura.
          </p>
        </article>

        <article className="access-card">
          <span>02</span>
          <h2>Contraste visual</h2>
          <p>
            Los elementos principales utilizan contraste entre fondo, texto y
            botones para mejorar la visibilidad.
          </p>
        </article>

        <article className="access-card">
          <span>03</span>
          <h2>Navegación sencilla</h2>
          <p>
            Los accesos principales se organizan en botones, tarjetas y enlaces
            claros para reducir la carga visual del usuario.
          </p>
        </article>

        <article className="access-card">
          <span>04</span>
          <h2>Diseño institucional</h2>
          <p>
            La interfaz mantiene una estructura ordenada, formal y coherente con
            el carácter público del TSE.
          </p>
        </article>
      </section>
    </main>
  )
}

export default Accesibilidad