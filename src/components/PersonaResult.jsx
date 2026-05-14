import { useState } from 'react';
import './PersonaResult.css';

const MOCK_PERSONA = {
    cedula: "101010101",
    nombreCompleto: "Juan Carlos Pérez Rodríguez",
    conocidoComo: "Juanca",
    padres: {
        padreOMadre1: { nombreCompleto: "María Rodríguez López", identificacion: "201010101" },
        padreOMadre2: { nombreCompleto: "Carlos Pérez Jiménez", identificacion: "301010101" }
    },
    fechaNacimiento: "1995-03-14",
    nacionalidad: "Costarricense",
    edad: 31,
    marginal: false,
    lugarNacimiento: { provincia: "San José", canton: "Desamparados", distrito: "San Miguel" },
    empadronado: true,
    fallecido: false,
    hijosRegistrados: [],
    matrimoniosRegistrados: [],
    lugarVotacion: {
        provincia: "San José",
        canton: "Desamparados",
        distrito: "San Miguel",
        distritoElectoral: "San Miguel Centro",
        numeroElectoral: null,
        centroVotacion: null,
        numeroJunta: null,
        fechaVencimientoCedula: "2031-01-01",
        inscritoEnCantonDesde: "2013-04-10",
        inscritoEnDistritoDesde: "2018-06-01"
    }
};

function SeccionDesplegable({ titulo, children, defaultOpen = false }) {
    const [abierto, setAbierto] = useState(defaultOpen);

    return (
        <div className={`seccion-desplegable ${abierto ? 'abierto' : ''}`}>
            <button className="desplegable-header" onClick={() => setAbierto(!abierto)}>
                <span className="desplegable-titulo">{titulo}</span>
                <span className="desplegable-icono">{abierto ? '▲' : '▼'}</span>
            </button>
            {abierto && (
                <div className="desplegable-contenido">
                    {children}
                </div>
            )}
        </div>
    );
}

function CeldaDato({ label, valor }) {
    if (valor === null || valor === undefined || valor === '') return <div className="celda-dato celda-vacia" />;
    return (
        <div className="celda-dato">
            <span className="celda-label">{label}</span>
            <span className="celda-valor">{valor}</span>
        </div>
    );
}

function FilaDato({ label, valor }) {
    if (valor === null || valor === undefined || valor === '') return null;
    return (
        <div className="fila-dato">
            <span className="fila-label">{label}</span>
            <span className="fila-valor">{valor}</span>
        </div>
    );
}

function PersonaResult({ persona = MOCK_PERSONA }) {

    const formatearFecha = (fecha) => {
        if (!fecha) return '—';
        const [anio, mes, dia] = fecha.split('-');
        return `${dia}/${mes}/${anio}`;
    };

    return (
        <div className="persona-result-wrapper">

            {/* Encabezado */}
            <div className="persona-result-header">
                
                <div className="persona-header-info">
                    <h2 className="persona-nombre">{persona.nombreCompleto}</h2>
                    {persona.conocidoComo && (
                        <p className="persona-alias">Conocido como: {persona.conocidoComo}</p>
                    )}
                    <div className="persona-badges">
                        {persona.fallecido  && <span className="badge-estado fallecido">Fallecido</span>}
                        {persona.marginal   && <span className="badge-estado marginal">Marginal</span>}
                        {persona.empadronado && <span className="badge-estado empadronado">Empadronado</span>}
                    </div>
                </div>
            </div>

            {/* Cuerpo con scroll */}
            <div className="persona-result-body">

                {/* Grid 2 columnas — información personal */}
                <div className="info-grid">
                    <CeldaDato label="Cédula"              valor={persona.cedula} />
                    <CeldaDato label="Nacionalidad"        valor={persona.nacionalidad} />
                    <CeldaDato label="Fecha de nacimiento" valor={formatearFecha(persona.fechaNacimiento)} />
                    <CeldaDato label="Edad"                valor={`${persona.edad} años`} />
                </div>

                <div className="info-seccion-titulo">Filiación</div>

                {/* Grid 2 columnas — padres */}
                <div className="info-grid">
                    <CeldaDato label="Padre / Madre 1" valor={persona.padres.padreOMadre1?.nombreCompleto} />
                    <CeldaDato label="Cédula"          valor={persona.padres.padreOMadre1?.identificacion} />
                    <CeldaDato label="Padre / Madre 2" valor={persona.padres.padreOMadre2?.nombreCompleto} />
                    <CeldaDato label="Cédula"          valor={persona.padres.padreOMadre2?.identificacion} />
                </div>

                {/* Desplegables */}
                <div className="desplegables-grid">

                    <SeccionDesplegable titulo="Lugar de nacimiento">
                        <FilaDato label="Provincia" valor={persona.lugarNacimiento.provincia} />
                        <FilaDato label="Cantón"    valor={persona.lugarNacimiento.canton} />
                        <FilaDato label="Distrito"  valor={persona.lugarNacimiento.distrito} />
                    </SeccionDesplegable>

                    <SeccionDesplegable titulo="Lugar de votación">
                        <FilaDato label="Provincia"                   valor={persona.lugarVotacion.provincia} />
                        <FilaDato label="Cantón"                      valor={persona.lugarVotacion.canton} />
                        <FilaDato label="Distrito"                    valor={persona.lugarVotacion.distrito} />
                        <FilaDato label="Distrito electoral"          valor={persona.lugarVotacion.distritoElectoral} />
                        <FilaDato label="N° electoral"                valor={persona.lugarVotacion.numeroElectoral} />
                        <FilaDato label="Centro de votación"          valor={persona.lugarVotacion.centroVotacion} />
                        <FilaDato label="N° de junta"                 valor={persona.lugarVotacion.numeroJunta} />
                        <FilaDato label="Vencimiento cédula"          valor={formatearFecha(persona.lugarVotacion.fechaVencimientoCedula)} />
                        <FilaDato label="Inscrito en cantón desde"    valor={formatearFecha(persona.lugarVotacion.inscritoEnCantonDesde)} />
                        <FilaDato label="Inscrito en distrito desde"  valor={formatearFecha(persona.lugarVotacion.inscritoEnDistritoDesde)} />
                    </SeccionDesplegable>

                    <SeccionDesplegable titulo={`Matrimonios registrados (${persona.matrimoniosRegistrados.length})`}>
                        {persona.matrimoniosRegistrados.length === 0 ? (
                            <p className="seccion-vacia">No hay matrimonios registrados.</p>
                        ) : (
                            persona.matrimoniosRegistrados.map((m, i) => (
                                <div key={i} className="sub-item">
                                    <FilaDato label="Cónyuge" valor={m.nombreCompleto} />
                                    <FilaDato label="Fecha"   valor={formatearFecha(m.fecha)} />
                                </div>
                            ))
                        )}
                    </SeccionDesplegable>

                    <SeccionDesplegable titulo={`Hijos registrados (${persona.hijosRegistrados.length})`}>
                        {persona.hijosRegistrados.length === 0 ? (
                            <p className="seccion-vacia">No hay hijos registrados.</p>
                        ) : (
                            persona.hijosRegistrados.map((h, i) => (
                                <div key={i} className="sub-item">
                                    <FilaDato label="Nombre" valor={h.nombreCompleto} />
                                    <FilaDato label="Cédula" valor={h.identificacion} />
                                </div>
                            ))
                        )}
                    </SeccionDesplegable>

                </div>
            </div>

            <div className="persona-result-footer">
                <p className="disclaimer">TRIBUNAL SUPREMO DE ELECCIONES - DERECHOS RESERVADOS</p>
            </div>

        </div>
    );
}

export default PersonaResult;