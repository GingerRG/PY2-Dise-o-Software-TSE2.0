import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './AccessibilityWidget.css'

function AccessibilityWidget() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [nivelTexto, setNivelTexto] = useState(0)
  const [modoGuiaVoz, setModoGuiaVoz] = useState(false)

  const location = useLocation()
  const ultimoTextoLeidoRef = useRef('')
  const temporizadorLecturaRef = useRef(null)

  function hablar(texto) {
    if (!('speechSynthesis' in window)) {
      alert('Este navegador no permite lectura de texto en voz alta.')
      return
    }

    if (!texto || texto.trim().length < 3) return

    window.speechSynthesis.cancel()

    const lectura = new SpeechSynthesisUtterance(texto)
    lectura.lang = 'es-ES'
    lectura.rate = 0.95
    lectura.pitch = 1
    lectura.volume = 1

    window.speechSynthesis.speak(lectura)
  }

  function leerPagina() {
    const contenido = document.querySelector('main')

    if (!contenido) return

    const texto = contenido.innerText.replace(/\s+/g, ' ').trim()

    if (!texto) return

    hablar(texto)
  }

  function detenerLectura() {
    window.speechSynthesis.cancel()
  }

  function aumentarTexto() {
    setNivelTexto((nivelActual) => Math.min(nivelActual + 1, 2))
  }

  function disminuirTexto() {
    setNivelTexto((nivelActual) => Math.max(nivelActual - 1, 0))
  }

  function aplicarTamanoTexto() {
    const contenido = document.querySelector('main')

    if (!contenido) return

    const escala = nivelTexto === 0 ? 1 : nivelTexto === 1 ? 1.12 : 1.24

    const elementos = contenido.querySelectorAll(
      'h1, h2, h3, h4, p, a, button, label, input, select, small, span, strong, li, td, th'
    )

    elementos.forEach((elemento) => {
      if (!elemento.dataset.fontOriginal) {
        elemento.dataset.fontOriginal = window.getComputedStyle(elemento).fontSize
      }

      if (nivelTexto === 0) {
        elemento.style.fontSize = ''
      } else {
        const tamanoBase = parseFloat(elemento.dataset.fontOriginal)
        elemento.style.fontSize = `${tamanoBase * escala}px`
      }
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      aplicarTamanoTexto()
    }, 80)

    return () => clearTimeout(timer)
  }, [nivelTexto, location.pathname])

  useEffect(() => {
    detenerLectura()
    ultimoTextoLeidoRef.current = ''
  }, [location.pathname])

  useEffect(() => {
    if (!modoGuiaVoz) {
      window.speechSynthesis.cancel()
      ultimoTextoLeidoRef.current = ''

      if (temporizadorLecturaRef.current) {
        clearTimeout(temporizadorLecturaRef.current)
      }

      return
    }

    function leerElementoActual(event) {
      const elementoBase = document.elementFromPoint(event.clientX, event.clientY)

      if (!elementoBase) return

      if (elementoBase.closest('.global-access-widget')) return

      const elemento = elementoBase.closest(
        'a, button, h1, h2, h3, p, label, article, input, select, .quick-card, .election-card, .participation-card, .access-card, .padron-card, .cert-type-card, .timeline-card, .summary-card, .calendar-table-row'
      )

      if (!elemento) return

      let texto = ''

      if (elemento.tagName === 'INPUT') {
        texto = elemento.placeholder || elemento.value || 'Campo de texto'
      } else if (elemento.tagName === 'SELECT') {
        texto = 'Lista desplegable'
      } else {
        texto = elemento.innerText || elemento.textContent || ''
      }

      texto = texto.replace(/\s+/g, ' ').trim()

      if (!texto || texto.length < 3) return
      if (texto === ultimoTextoLeidoRef.current) return

      if (temporizadorLecturaRef.current) {
        clearTimeout(temporizadorLecturaRef.current)
      }

      temporizadorLecturaRef.current = setTimeout(() => {
        ultimoTextoLeidoRef.current = texto
        hablar(texto)
      }, 350)
    }

    document.addEventListener('mousemove', leerElementoActual)

    return () => {
      document.removeEventListener('mousemove', leerElementoActual)

      if (temporizadorLecturaRef.current) {
        clearTimeout(temporizadorLecturaRef.current)
      }
    }
  }, [modoGuiaVoz])

  return (
    <div className={`global-access-widget ${menuAbierto ? 'global-access-widget--open' : ''}`}>
      <div className="global-access-panel">
        <p>Opciones de accesibilidad</p>

        <Link to="/accesibilidad">Ver accesibilidad</Link>

        <button type="button" onClick={leerPagina}>
          Leer página
        </button>

        <button type="button" onClick={detenerLectura}>
          Detener lectura
        </button>

        <button
          type="button"
          aria-pressed={modoGuiaVoz}
          onClick={() => {
            const nuevoEstado = !modoGuiaVoz

            setModoGuiaVoz(nuevoEstado)
            ultimoTextoLeidoRef.current = ''
            window.speechSynthesis.cancel()

            if (nuevoEstado) {
              hablar(
                'Modo guía por voz activado. Pase el mouse sobre un texto o botón para escucharlo.'
              )
            }
          }}
        >
          {modoGuiaVoz ? 'Desactivar guía por voz' : 'Activar guía por voz'}
        </button>

        <div className="global-text-size-control">
          <span>Tamaño del texto</span>

          <div className="global-text-size-buttons">
            <button type="button" onClick={disminuirTexto}>
              −
            </button>

            <strong>
              {nivelTexto === 0 ? 'Normal' : nivelTexto === 1 ? 'Grande' : 'Muy grande'}
            </strong>

            <button type="button" onClick={aumentarTexto}>
              +
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="global-access-button"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-expanded={menuAbierto}
      >
        <span>Aa</span>
        Accesibilidad
      </button>
    </div>
  )
}

export default AccessibilityWidget