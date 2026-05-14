import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import './CedulaLayout.css'

function CedulaLayout({ tipo }) {
  const [cedula, setCedula] = useState('')
  const navigate = useNavigate()

  return (
    <div className="cedula-hub">
      <div className="cedula-container">
        <div className="cedula-wrapper">
          <div className="cedula-card">

            <div className="cedula-card-header">
              <h4 className="cedula-card-titulo">Consulta por número de cédula</h4>
            </div>

            <p className="cedula-hint">Formato: 101110111</p>

            <div className="cedula-field">
              <input
                className="cedula-input"
                placeholder="Ingrese el número de cédula"
                type="number"
                value={cedula}
                onChange={e => setCedula(e.target.value)}
              />
            </div>

            <div className="cedula-actions">
              <button className="cedula-btn-primario" 
                disabled={cedula.length < 9 || cedula.length > 12}>
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