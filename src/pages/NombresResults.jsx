import { useLocation, useNavigate } from 'react-router-dom'
import Header from "../components/Header";
import ListaResultados from "../components/ListaResultados";
import './NombresResults.css'

function NombresResults() {

    const { state } = useLocation()
    const navigate = useNavigate()

    if (!state?.resultados) {
        navigate('/consultas', { replace: true })
        return null
    }

    // Adapta el array al formato que espera ListaResultados
    const resultadosFormateados = state.resultados.map(p => ({
        cedula: p.cedula,
        nombre: p.nombreCompleto,
        _persona: p  // guardamos el objeto completo para pasarlo al detalle
    }))

    const handleSelect = (item) => {
        navigate(`/persona/${state.tipo}`, { state: { persona: item._persona } })
    }

    return (
        <div className="nombres-results">
            <div className="nombres-above-results">
                <Header />
            </div>
            <div className="nombres-below-results">
                <ListaResultados
                    resultados={resultadosFormateados}
                    onSelect={handleSelect}
                />
            </div>
        </div>
    );
}

export default NombresResults;