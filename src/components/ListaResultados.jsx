import './ListaResultados.css';

const MOCK_RESULTADOS = [
    { cedula: '101110111', nombre: 'Juan Pérez Rodríguez' },
    { cedula: '102220222', nombre: 'María Rodríguez López' },
    { cedula: '103330333', nombre: 'Carlos González Mora' },
    { cedula: '104440444', nombre: 'Ana Jiménez Vargas' },
    { cedula: '105550555', nombre: 'Luis Fernández Soto' },
    { cedula: '106660666', nombre: 'Sofía Ramírez Castro' },
    { cedula: '107770777', nombre: 'Pedro Méndez Arias' },
    { cedula: '108880888', nombre: 'Laura Vega Solano' },
]

function ListaResultados({ resultados = MOCK_RESULTADOS, onSelect }) {

    return (
        <div className="lista-resultados-wrapper">

            <div className="lista-resultados-header">
                <span className="lista-resultados-badge">RESULTADOS</span>
                <p className="lista-resultados-count">
                    {resultados.length} persona{resultados.length !== 1 ? 's' : ''} encontrada{resultados.length !== 1 ? 's' : ''}
                </p>
            </div>

            <div className="lista-resultados-scroll">
                {resultados.length === 0 ? (
                    <p className="lista-resultados-vacia">
                        No se encontraron resultados para la búsqueda.
                    </p>
                ) : (
                    resultados.map(persona => (
                        <button
                            key={persona.cedula}
                            className="lista-resultado-item"
                            onClick={() => onSelect?.(persona)}
                        >
                            <div className="resultado-info">
                                <span className="resultado-nombre">{persona.nombre}</span>
                                <span className="resultado-cedula">Cédula: {persona.cedula}</span>
                            </div>
                            <span className="resultado-icono">›</span>
                        </button>
                    ))
                )}
            </div>
            <div className="lista-resultados-footer">
                <p className="disclaimer">TRIBUNAL SUPREMO DE ELECCIONES - DERECHOS RESERVADOS</p>
            </div>
        </div>
    );
}

export default ListaResultados;