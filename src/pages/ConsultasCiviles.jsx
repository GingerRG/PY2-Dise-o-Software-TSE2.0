import './ConsultasCiviles.css'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CedulaLayout from '../layouts/CedulaLayout';
import NombreLayout from '../layouts/NombreLayout';

function ConsultasCiviles() {

    const { tipo } = useParams();
    const navigate = useNavigate();

    // La estrategia es independiente del tipo de consulta
    const estrategiaInicial = tipo === 'cedula' ? 'cedula' : 'nombre';
    const [estrategia, setEstrategia] = useState(estrategiaInicial);

    const renderLayout = () => {
        return estrategia === 'cedula'
            ? <CedulaLayout tipo={tipo} />
            : <NombreLayout tipo={tipo} />
    }

    return (
        <div className="body-consultas">
            <div className="above">
                <Header />
            </div>

            <div className="nav-strip">
                <button
                    className={`nav-strip-btn ${estrategia === 'cedula' ? 'active' : ''}`}
                    onClick={() => setEstrategia('cedula')}
                >
                    Consulta por cédula
                </button>
                <button
                    className={`nav-strip-btn ${estrategia === 'nombre' ? 'active' : ''}`}
                    onClick={() => setEstrategia('nombre')}
                >
                    Consulta por nombre
                </button>
            </div>

            <div className="below">
                {renderLayout()}
            </div>
        </div>
    );
}

export default ConsultasCiviles;