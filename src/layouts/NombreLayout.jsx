import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NombreLayout.css'

function NombreLayout() {
  const [nombre, setNombre] = useState('')
  const [apellido1, setApellido1] = useState('')
  const [apellido2, setApellido2] = useState('')

  const navigate = useNavigate()

  return (
    <div className="nombre-hub">
      <div className="nombre-container">
        <div className="nombre-wrapper">
          <div className="nombre-card">

            <div className="nombre-card-header">
              <h4 className="nombre-card-titulo">
                Consulta por nombre y apellidos
              </h4>
            </div>

            <p className="nombre-hint">
              Ingrese el nombre y los apellidos de la persona.
            </p>

            <div className="nombre-fields-row">
                <div className="nombre-field">
                    <label className="nombre-field-label">Nombre</label>
                    <input
                    className="nombre-input"
                    placeholder="Nombre"
                    type="text"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="nombre-field">
                    <label className="nombre-field-label">Primer apellido</label>
                    <input
                    className="nombre-input"
                    placeholder="Primer apellido"
                    type="text"
                    value={apellido1}
                    onChange={e => setApellido1(e.target.value)}
                    />
                </div>
                <div className="nombre-field">
                    <label className="nombre-field-label">Segundo apellido</label>
                    <input
                    className="nombre-input"
                    placeholder="Segundo apellido"
                    type="text"
                    value={apellido2}
                    onChange={e => setApellido2(e.target.value)}
                    />
                </div>
                </div>

            <div className="nombre-actions">
              <button
                className="nombre-btn-primario"
                disabled={!nombre || !apellido1}
              >
                Consultar →
              </button>
            </div>

            <p className="disclaimer">
              TRIBUNAL SUPREMO DE ELECCIONES - DERECHOS RESERVADOS
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NombreLayout