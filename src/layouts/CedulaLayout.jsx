import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  buscarPorCedula,
  buscarMatrimonioPorCedula,
  buscarDefuncionPorCedula
} from '../logic/algoritmosConsulta'
import './CedulaLayout.css'

function CedulaLayout({ tipo }) {
  const [cedula, setCedula] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const algoritmos = {
    cedula:       buscarPorCedula,
    matrimonios:  buscarMatrimonioPorCedula,
    defunciones:  buscarDefuncionPorCedula,
  }

  const handleConsultar = () => {
    setError('')
    const buscar = algoritmos[tipo] ?? buscarPorCedula
    const resultado = buscar(cedula)

    if (!resultado) {
      setError('No se encontró ningún registro con esa cédula.')
      return
    }

    navigate(`/persona/${tipo}`, { state: { persona: resultado } })
  }

  const hints = {
    cedula:      { texto: 'Formato: 101110111',          placeholder: 'Ingrese el número de cédula' },
    matrimonios: { texto: 'Extranjeros: use su N° DIMEX', placeholder: 'Ingrese cédula o N° DIMEX' },
    defunciones: { texto: 'Extranjeros: use su N° DIMEX', placeholder: 'Ingrese cédula o N° DIMEX' },
  }

  const hint = hints[tipo] ?? hints.cedula

  return (
    <div className="cedula-hub">
      <div className="cedula-container">
        <div className="cedula-wrapper">
          <div className="cedula-card">

            <div className="cedula-card-header">
              <h4 className="cedula-card-titulo">Consulta por número de cédula</h4>
            </div>

            <p className="cedula-hint">{hint.texto}</p>

            <div className="cedula-field">
              <input
                className="cedula-input"
                placeholder={hint.placeholder}
                type="text"
                value={cedula}
                onChange={e => {setCedula(e.target.value); setError('')}}
              />
            </div>

            {error && <p className="cedula-error">{error}</p>}

            <div className="cedula-actions">
              <button className="cedula-btn-primario" 
                disabled={cedula.length !== 9 && cedula.length !== 10}
                onClick={handleConsultar}
              >
                Consultar →
              </button>
            </div>

            <p className="disclaimer">TRIBUNAL SUPREMO DE ELECCIONES - DERECHOS RESERVADOS</p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default CedulaLayout