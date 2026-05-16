import { Link } from 'react-router-dom'
import { useState } from 'react'
import './CertificacionesDigitales.css'
import logoTSE from '../assets/TSE_LOGO.png'

const tiposCertificacion = [
  {
    numero: '01',
    titulo: 'Nacimiento',
    descripcion: 'Certificación oficial de nacimiento emitida por el Registro Civil.',
  },
  {
    numero: '02',
    titulo: 'Matrimonio',
    descripcion: 'Documento digital sobre inscripción matrimonial registrada.',
  },
  {
    numero: '03',
    titulo: 'Defunción',
    descripcion: 'Certificación digital de defunción inscrita ante el Registro Civil.',
  },
  {
    numero: '04',
    titulo: 'Estado civil',
    descripcion: 'Consulta y emisión de certificación relacionada con estado civil.',
  },
]

function CertificacionesDigitales() {
  const [codigo, setCodigo] = useState('')
  const [tipoSeleccionado, setTipoSeleccionado] = useState('Nacimiento')

  return (
    <main className="cert-page">
      <header className="cert-header">
        <div className="cert-header__logo">
          <img src={logoTSE} alt="Tribunal Supremo de Elecciones" />
        </div>

        <nav className="cert-header__nav">
          <Link to="/">Inicio</Link>
          <Link to="/consultas">Consultas</Link>
          <Link to="/calendario-electoral">Calendario Electoral</Link>
          <Link to="/accesibilidad">Accesibilidad</Link>
        </nav>
      </header>

      <section className="cert-hero">
        <p className="cert-label">Sistema oficial de emisión y verificación</p>

        <h1>Certificaciones Digitales</h1>

        <p>
          Solicite, compre y verifique certificaciones digitales emitidas por el
          Tribunal Supremo de Elecciones de forma clara, segura y accesible.
        </p>

        <div className="cert-actions">
          <a href="#comprar-certificacion" className="cert-btn-primary">
            Comprar certificación
          </a>

          <a href="#verificar-certificacion" className="cert-btn-secondary">
            Verificar documento
          </a>
        </div>
      </section>

      <section className="cert-main-section" id="comprar-certificacion">
        <div className="cert-purchase-card">
          <div className="cert-purchase-header">
            <span>01</span>
            <div>
              <p>Compra digital</p>
              <h2>Adquiera certificaciones oficiales</h2>
            </div>
          </div>

          <div className="cert-form-grid">
            <div className="cert-form-group">
              <label>Tipo de certificación</label>

              <select
                value={tipoSeleccionado}
                onChange={(e) => setTipoSeleccionado(e.target.value)}
              >
                <option>Nacimiento</option>
                <option>Matrimonio</option>
                <option>Defunción</option>
                <option>Estado civil</option>
              </select>
            </div>

            <div className="cert-form-group">
              <label>Número de identificación</label>
              <input type="text" placeholder="Ejemplo: 101234567" />
            </div>
          </div>

          <div className="cert-selected-box">
            <p>Certificación seleccionada</p>
            <h3>{tipoSeleccionado}</h3>
            <span>Entrega digital mediante comprobante de solicitud.</span>
          </div>

          <button type="button" className="cert-buy-button">
            Continuar con la compra
          </button>
        </div>

        <aside className="cert-side-card">
          <p>Proceso seguro</p>
          <h2>¿Cómo funciona?</h2>

          <div className="cert-step">
            <span>1</span>
            <p>Seleccione el tipo de certificación que necesita.</p>
          </div>

          <div className="cert-step">
            <span>2</span>
            <p>Ingrese los datos solicitados para generar la solicitud.</p>
          </div>

          <div className="cert-step">
            <span>3</span>
            <p>Realice el pago y descargue el comprobante digital.</p>
          </div>
        </aside>
      </section>

      <section className="cert-types-section">
        <div className="cert-section-heading">
          <p>Servicios disponibles</p>
          <h2>Tipos de certificaciones</h2>
        </div>

        <div className="cert-types-grid">
          {tiposCertificacion.map((tipo) => (
            <article className="cert-type-card" key={tipo.titulo}>
              <span>{tipo.numero}</span>
              <h3>{tipo.titulo}</h3>
              <p>{tipo.descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cert-verify-section" id="verificar-certificacion">
        <div className="cert-verify-card">
          <div>
            <p>Validación documental</p>
            <h2>Verifique una certificación digital</h2>
            <span>
              Ingrese el código de verificación para confirmar la autenticidad
              del documento emitido.
            </span>
          </div>

          <div className="cert-verify-form">
            <input
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              placeholder="Código de verificación"
            />

            <button type="button">Verificar</button>
          </div>
        </div>
      </section>

      <section className="cert-security-section">
        <article className="cert-security-card">
          <span>Seguridad</span>
          <h3>Documentos oficiales</h3>
          <p>
            Las certificaciones digitales permiten verificar información civil
            mediante canales oficiales del TSE.
          </p>
        </article>

        <article className="cert-security-card">
          <span>Acceso</span>
          <h3>Disponible en línea</h3>
          <p>
            La vista está diseñada para facilitar el acceso ciudadano a trámites
            frecuentes sin saturar la interfaz.
          </p>
        </article>

        <article className="cert-security-card">
          <span>Confianza</span>
          <h3>Validación rápida</h3>
          <p>
            El módulo de verificación permite comprobar la autenticidad de una
            certificación mediante un código.
          </p>
        </article>
      </section>
    </main>
  )
}

export default CertificacionesDigitales