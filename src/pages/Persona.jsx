import Header from "../components/Header";
import PersonaResult from "../components/PersonaResult";
import './Persona.css'

function Persona () {

    return (
        <div className="persona-results">
            <div className="persona-above-results">
                <Header/>
            </div>
            <div className="persona-below-results">
                <PersonaResult />
            </div>
        </div>
    );
}

export default Persona;