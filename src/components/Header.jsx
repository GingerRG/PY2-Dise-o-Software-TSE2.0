import { useNavigate } from 'react-router-dom'
import logo from '../assets/TSE_LOGO.png'
import './Header.css'

function Header() {
  const navigate = useNavigate()

  return (
    <div className="header-simple">
      <div className="logo-container">
        <img
          src={logo}
          alt="Tribunal Supremo de Elecciones - República de Costa Rica"
          className="logo-tse"
          onClick={() => navigate('/')}
        />
      </div>
      <div className="header-titulo">
        <h1 className="consultas-civiles-titulo">CONSULTAS CIVILES</h1>
      </div>
    </div>
  )
}

export default Header