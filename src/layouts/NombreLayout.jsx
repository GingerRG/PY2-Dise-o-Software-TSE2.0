import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  buscarPorNombre,
  buscarMatrimoniosPorNombre,
  buscarDefuncionesPorNombre
} from '../logic/algoritmosConsulta'
import './NombreLayout.css'

function NombreLayout({ tipo }) {
  const [nombre, setNombre] = useState('')
  const [apellido1, setApellido1] = useState('')
  const [apellido2, setApellido2] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const algoritmos = {
    cedula:      buscarPorNombre,
    nombre:      buscarPorNombre,
    matrimonios: buscarMatrimoniosPorNombre,
    defunciones: buscarDefuncionesPorNombre,
  }

  const handleConsultar = () => {
    setError('')
    const buscar = algoritmos[tipo] ?? buscarPorNombre
    const resultados = buscar(nombre, apellido1, apellido2)

    if (resultados.length === 0) {
      setError('No se encontraron resultados para la búsqueda.')
      return
    }

    navigate('/nombresResults', { state: { resultados, tipo } })
  }

  const titulos = {
      cedula:      'Consulta por nombre y apellidos',
      nombre:      'Consulta por nombre y apellidos',
      matrimonios: 'Consulta de matrimonios',
      defunciones: 'Consulta de defunciones',
  }

  return (
    <div className="nombre-hub">
      <div className="nombre-container">
        <div className="nombre-wrapper">
          <div className="nombre-card">

            <div className="nombre-card-header">
              <h4 className="nombre-card-titulo">
                {titulos[tipo] ?? 'Consulta por nombre y apellidos'}
              </h4>
            </div>

            <p className="nombre-hint">
              Ingrese el nombre completo y los apellidos completos de la persona.
            </p>

            <div className="nombre-fields-row">
              <div className="nombre-field">
                <label className="nombre-field-label">Nombre Completo</label>
                <input
                  className="nombre-input"
                  placeholder="Nombre"
                  type="text"
                  value={nombre}
                  onChange={e => { setNombre(e.target.value); setError('') }}
                />
              </div>
              <div className="nombre-field">
                <label className="nombre-field-label">Primer apellido Completo</label>
                <input
                  className="nombre-input"
                  placeholder="Primer apellido"
                  type="text"
                  value={apellido1}
                  onChange={e => { setApellido1(e.target.value); setError('') }}
                />
              </div>
              <div className="nombre-field">
                <label className="nombre-field-label">Segundo apellido Completo</label>
                <input
                  className="nombre-input"
                  placeholder="Segundo apellido"
                  type="text"
                  value={apellido2}
                  onChange={e => setApellido2(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="nombre-error">{error}</p>}

            <div className="nombre-actions">
              <button
                className="nombre-btn-primario"
                disabled={!nombre || (!apellido1 && !apellido2)}
                onClick={handleConsultar}
              >
                Consultar →
              </button>
            </div>

            <p className="nombre-disclaimer">
              TRIBUNAL SUPREMO DE ELECCIONES - DERECHOS RESERVADOS
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NombreLayout