import { Link } from 'react-router-dom'
import { useState } from 'react'
import './CalendarioElectoral.css'
import logoTSE from '../assets/TSE_LOGO.png'

const categorias = {
  todos: { label: 'Todos', color: '#1d64ff' },
  padron: { label: 'Padrón electoral', color: '#1d64ff' },
  candidaturas: { label: 'Candidaturas', color: '#7c3aed' },
  partidos: { label: 'Partidos políticos', color: '#4f46e5' },
  campana: { label: 'Campaña electoral', color: '#d97706' },
  financiamiento: { label: 'Financiamiento electoral', color: '#0891b2' },
  votacion: { label: 'Votación', color: '#dc2626' },
  resultados: { label: 'Resultados', color: '#16a34a' },
  organizacion: { label: 'Organización electoral', color: '#64748b' },
  restricciones: { label: 'Restricciones electorales', color: '#ea580c' },
  encuestas: { label: 'Encuestas', color: '#db2777' },
  juntas: { label: 'Juntas receptoras', color: '#0d9488' },
}

const eventos = [
  {
    fecha: '2025-01-31',
    titulo: 'Último día para presentar solicitudes de inscripción de partidos políticos',
    categoria: 'partidos',
    estado: 'Finalizado',
  },
  {
    fecha: '2025-07-31',
    titulo: 'Último día para que el Registro Civil prepare listas provisionales de electores',
    categoria: 'padron',
    estado: 'Finalizado',
  },
  {
    fecha: '2025-09-30',
    titulo: 'Último día para modificar el padrón electoral',
    categoria: 'padron',
    estado: 'Finalizado',
  },
  {
    fecha: '2025-10-01',
    titulo: 'Convocatoria oficial a Elecciones Nacionales',
    categoria: 'organizacion',
    estado: 'Importante',
  },
  {
    fecha: '2025-10-17',
    titulo: 'Vence plazo para presentar solicitudes de inscripción de candidaturas',
    categoria: 'candidaturas',
    estado: 'Importante',
  },
  {
    fecha: '2025-12-16',
    titulo: 'Inicia suspensión de propaganda política en medios de comunicación colectiva',
    categoria: 'restricciones',
    estado: 'Importante',
  },
  {
    fecha: '2025-12-31',
    titulo: 'Último día para imprimir listas definitivas de electores',
    categoria: 'padron',
    estado: 'Importante',
  },
  {
    fecha: '2026-01-17',
    titulo: 'Último día para distribuir el padrón impreso a juntas cantonales',
    categoria: 'juntas',
    estado: 'Próximo',
  },
  {
    fecha: '2026-01-28',
    titulo: 'Último día para publicar encuestas y difundir propaganda',
    categoria: 'encuestas',
    estado: 'Próximo',
  },
  {
    fecha: '2026-02-01',
    titulo: 'Día de votación para Presidencia, Vicepresidencias y Diputaciones',
    categoria: 'votacion',
    estado: 'Importante',
  },
  {
    fecha: '2026-03-03',
    titulo: 'Vence plazo para declaratoria definitiva de Presidencia y Vicepresidencias',
    categoria: 'resultados',
    estado: 'Próximo',
  },
  {
    fecha: '2026-04-02',
    titulo: 'Vence plazo para declaratoria definitiva de diputaciones',
    categoria: 'resultados',
    estado: 'Próximo',
  },
  {
    fecha: '2026-04-05',
    titulo: 'Segunda vuelta presidencial, si fuera necesaria',
    categoria: 'votacion',
    estado: 'Importante',
  },
  {
    fecha: '2026-08-02',
    titulo: 'El TSE vuelve a quedar integrado con tres magistrados propietarios',
    categoria: 'organizacion',
    estado: 'Próximo',
  },
]

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

const dias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

function formatearFecha(fecha) {
  const [year, month, day] = fecha.split('-')
  return `${day} ${meses[Number(month) - 1]} ${year}`
}

function CalendarioElectoral() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos')
  const [busqueda, setBusqueda] = useState('')
  const [mesActual, setMesActual] = useState(9)
  const [anioActual, setAnioActual] = useState(2025)
  const [fechaSeleccionada, setFechaSeleccionada] = useState('2025-10-01')

  const eventosFiltrados = eventos.filter((evento) => {
    const coincideCategoria =
      categoriaActiva === 'todos' || evento.categoria === categoriaActiva

    const texto = `${evento.fecha} ${evento.titulo} ${categorias[evento.categoria].label}`.toLowerCase()

    const coincideBusqueda = texto.includes(busqueda.toLowerCase())

    return coincideCategoria && coincideBusqueda
  })

  const eventosProximos = eventos
    .filter((evento) => evento.estado === 'Próximo' || evento.estado === 'Importante')
    .slice(0, 4)

  const obtenerEventosPorFecha = (fecha) => {
    return eventosFiltrados.filter((evento) => evento.fecha === fecha)
  }

  const diasEnMes = new Date(anioActual, mesActual + 1, 0).getDate()
  const primerDia = new Date(anioActual, mesActual, 1).getDay()

  const diasCalendario = [
    ...Array.from({ length: primerDia }, () => null),
    ...Array.from({ length: diasEnMes }, (_, i) => i + 1),
  ]

  function cambiarMes(direccion) {
    if (direccion === 'siguiente') {
      if (mesActual === 11) {
        setMesActual(0)
        setAnioActual(anioActual + 1)
      } else {
        setMesActual(mesActual + 1)
      }
    } else {
      if (mesActual === 0) {
        setMesActual(11)
        setAnioActual(anioActual - 1)
      } else {
        setMesActual(mesActual - 1)
      }
    }
  }

  function seleccionarDia(dia) {
    const fecha = `${anioActual}-${String(mesActual + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`
    if (obtenerEventosPorFecha(fecha).length > 0) {
      setFechaSeleccionada(fecha)
    }
  }

  const eventosDelDia = obtenerEventosPorFecha(fechaSeleccionada)

  return (
    <main className="calendar-page">
      <header className="calendar-header">
        <div className="calendar-header__logo">
          <img src={logoTSE} alt="Tribunal Supremo de Elecciones" />
        </div>

        <nav className="calendar-header__nav">
          <Link to="/">Inicio</Link>
          <Link to="/consultas">Consultas</Link>
          <Link to="/accesibilidad">Accesibilidad</Link>
        </nav>
      </header>

      <section className="calendar-hero">
        <p className="calendar-label">Proceso Electoral 2025-2026</p>
        <h1>Calendario Electoral</h1>
        <p>
          Consulte las fechas más importantes del proceso electoral costarricense,
          incluyendo plazos, eventos, restricciones y fechas clave.
        </p>

        <div className="calendar-actions">
          <a href="#proximas-fechas" className="calendar-btn-primary">
            Ver próximas fechas
          </a>

          <a href="#filtros" className="calendar-btn-secondary">
            Filtrar por categoría
          </a>
        </div>
      </section>

      <section className="calendar-summary">
        <article className="summary-card">
          <span>01</span>
          <p>Convocatoria oficial</p>
          <h3>1 de octubre de 2025</h3>
        </article>

        <article className="summary-card summary-card--red">
          <span>02</span>
          <p>Día de votación</p>
          <h3>1 de febrero de 2026</h3>
        </article>

        <article className="summary-card">
          <span>03</span>
          <p>Segunda vuelta</p>
          <h3>5 de abril de 2026</h3>
        </article>
      </section>

      <section className="calendar-filters" id="filtros">
        <div className="filter-card">
          <div className="filter-header">
            <div>
              <p>Filtros de consulta</p>
              <h2>Buscar eventos electorales</h2>
            </div>
          </div>

          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por fecha, evento o categoría…"
          />

          <div className="filter-chips">
            {Object.entries(categorias).map(([key, categoria]) => (
              <button
                key={key}
                type="button"
                onClick={() => setCategoriaActiva(key)}
                className={categoriaActiva === key ? 'chip chip--active' : 'chip'}
                style={{ '--chip-color': categoria.color }}
              >
                {categoria.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="calendar-main-section">
        <div className="calendar-layout">
          <div className="timeline-panel">
            <div className="section-heading">
              <p>Línea de tiempo</p>
              <h2>Eventos principales</h2>
            </div>

            <div className="timeline-list">
              {eventosFiltrados.map((evento) => (
                <article className="timeline-item" key={`${evento.fecha}-${evento.titulo}`}>
                  <div
                    className="timeline-dot"
                    style={{ background: categorias[evento.categoria].color }}
                  />

                  <div className="timeline-card">
                    <div className="timeline-date">{formatearFecha(evento.fecha)}</div>
                    <h3>{evento.titulo}</h3>
                    <div className="timeline-meta">
                      <span
                        style={{
                          color: categorias[evento.categoria].color,
                          borderColor: categorias[evento.categoria].color,
                        }}
                      >
                        {categorias[evento.categoria].label}
                      </span>
                      <strong>{evento.estado}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="calendar-side" id="proximas-fechas">
            <div className="mini-calendar-card">
              <div className="mini-calendar-header">
                <button type="button" onClick={() => cambiarMes('anterior')}>
                  ‹
                </button>

                <h2>
                  {meses[mesActual]} {anioActual}
                </h2>

                <button type="button" onClick={() => cambiarMes('siguiente')}>
                  ›
                </button>
              </div>

              <div className="mini-calendar-grid">
                {dias.map((dia) => (
                  <div className="calendar-day-name" key={dia}>
                    {dia}
                  </div>
                ))}

                {diasCalendario.map((dia, index) => {
                  if (!dia) {
                    return <div key={`empty-${index}`} />
                  }

                  const fecha = `${anioActual}-${String(mesActual + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`

                  const tieneEvento = obtenerEventosPorFecha(fecha).length > 0

                  return (
                    <button
                      type="button"
                      key={fecha}
                      onClick={() => seleccionarDia(dia)}
                      className={
                        fechaSeleccionada === fecha
                          ? 'calendar-day calendar-day--selected'
                          : tieneEvento
                          ? 'calendar-day calendar-day--event'
                          : 'calendar-day'
                      }
                    >
                      {dia}
                    </button>
                  )
                })}
              </div>

              <div className="selected-date-card">
                <h3>{formatearFecha(fechaSeleccionada)}</h3>

                {eventosDelDia.length > 0 ? (
                  eventosDelDia.map((evento) => (
                    <p key={evento.titulo}>{evento.titulo}</p>
                  ))
                ) : (
                  <p>No hay eventos registrados para esta fecha.</p>
                )}
              </div>
            </div>

            <div className="upcoming-card">
              <h2>Próximas fechas importantes</h2>

              {eventosProximos.map((evento) => (
                <button
                  type="button"
                  key={evento.titulo}
                  onClick={() => {
                    const [year, month] = evento.fecha.split('-').map(Number)
                    setAnioActual(year)
                    setMesActual(month - 1)
                    setFechaSeleccionada(evento.fecha)
                  }}
                >
                  <span>{formatearFecha(evento.fecha)}</span>
                  {evento.titulo}
                </button>
              ))}
            </div>

            <div className="legend-card">
              <h2>Leyenda de categorías</h2>

              {Object.entries(categorias)
                .filter(([key]) => key !== 'todos')
                .slice(0, 8)
                .map(([key, categoria]) => (
                  <div className="legend-item" key={key}>
                    <span style={{ background: categoria.color }} />
                    {categoria.label}
                  </div>
                ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="calendar-table-section">
        <div className="section-heading">
          <p>Listado completo</p>
          <h2>Fechas del calendario electoral</h2>
        </div>

        <div className="calendar-table">
          <div className="calendar-table-row calendar-table-head">
            <span>Fecha</span>
            <span>Evento</span>
            <span>Categoría</span>
            <span>Estado</span>
          </div>

          {eventosFiltrados.map((evento) => (
            <div className="calendar-table-row" key={`table-${evento.fecha}-${evento.titulo}`}>
              <span>{formatearFecha(evento.fecha)}</span>
              <span>{evento.titulo}</span>
              <span>{categorias[evento.categoria].label}</span>
              <span className="state-pill">{evento.estado}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default CalendarioElectoral