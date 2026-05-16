import './ListaResultados.css';

function ListaResultados({ resultados = [], onSelect }) {

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