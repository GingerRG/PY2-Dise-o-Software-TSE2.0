import personas from '../data/personas.json'

const normalizar = (texto) => {
    if (!texto) return '';
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
};

const esExtranjero = (persona) => {
    return persona.nacionalidad !== 'Costarricense';
};

// Busca por cédula nacional O por número DIMEX
const encontrarPorIdentificacion = (identificacion) => {
    const id = identificacion.trim();
    return personas.personas.find(p =>
        p.cedula === id ||
        p.condicionMigratoria?.numeroDIMEX === id
    ) ?? null;
};

// ─────────────────────────────────────────
// BÚSQUEDA POR CÉDULA — Persona nacional
// ─────────────────────────────────────────
export const buscarPorCedula = (cedula) => {
    if (!cedula.trim()) return null;
    return encontrarPorIdentificacion(cedula);
};

// ─────────────────────────────────────────
// BÚSQUEDA POR CÉDULA — Matrimonios
// Extranjera + casada
// ─────────────────────────────────────────
export const buscarMatrimonioPorCedula = (cedula) => {
    if (!cedula.trim()) return null;

    const persona = encontrarPorIdentificacion(cedula);
    if (!persona)                                    return null;
    if (!esExtranjero(persona))                      return null;
    if (persona.matrimoniosRegistrados.length === 0) return null;

    return persona;
};

// ─────────────────────────────────────────
// BÚSQUEDA POR CÉDULA — Defunciones
// Extranjera + fallecida
// ─────────────────────────────────────────
export const buscarDefuncionPorCedula = (cedula) => {
    if (!cedula.trim()) return null;

    const persona = encontrarPorIdentificacion(cedula);
    if (!persona)           return null;
    if (!esExtranjero(persona)) return null;
    if (!persona.fallecido) return null;

    return persona;
};

// ─────────────────────────────────────────
// BÚSQUEDA POR NOMBRE — Persona nacional
// ─────────────────────────────────────────
export const buscarPorNombre = (nombre, apellido1, apellido2 = '') => {
    const terminosNombre   = normalizar(nombre.trim()).split(/\s+/).filter(Boolean);
    const terminoApellido1 = normalizar(apellido1.trim());
    const terminoApellido2 = normalizar(apellido2.trim());

    // Requiere al menos nombre y uno de los dos apellidos
    if (terminosNombre.length === 0) return [];
    if (!terminoApellido1 && !terminoApellido2) return [];

    // Apellidos ingresados (solo los que tienen valor)
    const apellidosIngresados = [terminoApellido1, terminoApellido2].filter(Boolean);

    return personas.personas.filter(persona => {
        const nombreNormalizado = normalizar(persona.nombreCompleto);

        // Todos los términos del nombre deben aparecer como palabras completas
        const nombreOk = terminosNombre.every(termino => {
            const regex = new RegExp(`(^|\\s)${termino}(\\s|$)`);
            return regex.test(nombreNormalizado);
        });

        // Todos los apellidos ingresados deben aparecer como palabras completas
        const apellidosOk = apellidosIngresados.every(termino => {
            const regex = new RegExp(`(^|\\s)${termino}(\\s|$)`);
            return regex.test(nombreNormalizado);
        });

        return nombreOk && apellidosOk;
    });
};

// ─────────────────────────────────────────
// BÚSQUEDA POR NOMBRE — Matrimonios
// Extranjera + casada
// ─────────────────────────────────────────
export const buscarMatrimoniosPorNombre = (nombre, apellido1, apellido2 = '') => {
    return buscarPorNombre(nombre, apellido1, apellido2).filter(p =>
        esExtranjero(p) && p.matrimoniosRegistrados.length > 0
    );
};

// ─────────────────────────────────────────
// BÚSQUEDA POR NOMBRE — Defunciones
// Extranjera + fallecida
// ─────────────────────────────────────────
export const buscarDefuncionesPorNombre = (nombre, apellido1, apellido2 = '') => {
    return buscarPorNombre(nombre, apellido1, apellido2).filter(p =>
        esExtranjero(p) && p.fallecido === true
    );
};