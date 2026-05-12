import { useNavigate } from 'react-router-dom'
import './ConsultasHub.css'
import logo from '../assets/TSE_LOGO.png'

function ConsultasHub() {
  const navigate = useNavigate()

  const consultasNacionales = [
    { id: 1, titulo: 'Consulta por número de cédula', ruta: '/consulta/cedula' },
    { id: 2, titulo: 'Consulta por nombre y apellidos', ruta: '/consulta/nombre' },
  ]

  const consultasExtranjeros = [
    { id: 3, titulo: 'Consulta de matrimonios', ruta: '/consulta/matrimonios' },
    { id: 4, titulo: 'Consulta de defunciones', ruta: '/consulta/defunciones' },
  ]

  return (
    <div className="consultas-hub">
      <div className="hub-container">
        
        {/* Header con Consultas Civiles */}
        <div className="header-simple">
          <div className="logo-container">
            <img 
              src={logo}
              alt="Tribunal Supremo de Elecciones - República de Costa Rica"
              className="logo-tse"
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="header-titulo">
            <h1 className="consultas-civiles-titulo">CONSULTAS CIVILES</h1>
          </div>
        </div>

        <div className="escudo-section">
        </div>

        <div className="seccion-consulta-doble">
          <div className="seccion-consulta mitad">
            <div className="seccion-header">
              <span className="badge-consulta">CONSULTAS</span>
              <h4>Personas Nacionales</h4>
            </div>
            <div className="lista-consultas">
              {consultasNacionales.map(op => (
                <button key={op.id} onClick={() => navigate(op.ruta)} className="item-consulta">
                  <span className="consulta-texto">{op.titulo}</span>
                  <span className="consulta-icono">›</span>
                </button>
              ))}
            </div>
          </div>

          <div className="seccion-consulta mitad">
            <div className="seccion-header">
              <span className="badge-consulta">CONSULTAS</span>
              <h4>Personas Extranjeras</h4>
            </div>
            <div className="lista-consultas">
              {consultasExtranjeros.map(op => (
                <button key={op.id} onClick={() => navigate(op.ruta)} className="item-consulta">
                  <span className="consulta-texto">{op.titulo}</span>
                  <span className="consulta-icono">›</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Aviso institucional */}
        <div className="aviso-institucional">
          <div className="aviso-icono">!</div>
          <div className="aviso-contenido">
            <p>
              En caso de detectar alguna inconsistencia en la información que se refleja 
              en este servicio de consultas civiles, podrá solicitar su aclaración o corrección, 
              mediante correo electrónico a la siguiente dirección:
            </p>
            <a href="mailto:actualizaciondedatos@tse.go.cr" className="email-link">
              actualizaciondedatos@tse.go.cr
            </a>
            <p className="formulario-link">
              Para lo cual se deberá completar el formulario{' '}
              <button onClick={() => navigate('/formulario-actualizacion')} className="link-institucional">
                Actualización a la Base de Datos (Haga click aquí)
              </button>
            </p>
          </div>
        </div>

        {/* Bandera de Costa Rica */}
        <div className="bandera-cr">
          <div className="franja-azul"></div>
          <div className="franja-blanca-1"></div>
          <div className="franja-roja"></div>
          <div className="franja-blanca-2"></div>
          <div className="franja-azul-2"></div>
        </div>
      </div>
    </div>
  )
}

export default ConsultasHub