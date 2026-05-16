import { useLocation, useNavigate } from 'react-router-dom'
import Header from "../components/Header";
import PersonaResult from "../components/PersonaResult";
import './Persona.css'

function Persona () {
    const { state } = useLocation();
    const navigate = useNavigate();

    // Si alguien llega directo a /persona sin datos, regresa
    if (!state?.persona) {
        navigate('/consultas', { replace: true })
        return null
    }

    return (
        <div className="persona-results">
            <div className="persona-above-results">
                <Header/>
            </div>
            <div className="persona-below-results">
                <PersonaResult persona={state.persona} />
            </div>
        </div>
    );
}

export default Persona;