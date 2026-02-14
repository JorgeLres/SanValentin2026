import { useEffect, useRef } from 'react'
import './CorazonesFlotantes.css'

// Emojis de corazones para la animación
const EMOJIS_CORAZONES = ['❤️', '💕', '💖', '💗', '💓', '💘']

/**
 * Componente que genera corazones flotantes animados
 * Los corazones suben desde abajo de la pantalla y desaparecen arriba
 */
function CorazonesFlotantes() {
  const contenedorRef = useRef(null)

  useEffect(() => {
    const contenedor = contenedorRef.current
    if (!contenedor) return

    // Función para crear un corazón con propiedades aleatorias
    const crearCorazon = () => {
      const corazon = document.createElement('div')
      corazon.className = 'heart'
      corazon.textContent = EMOJIS_CORAZONES[Math.floor(Math.random() * EMOJIS_CORAZONES.length)]
      corazon.style.left = `${Math.random() * 100}vw`
      corazon.style.fontSize = `${Math.random() * 20 + 15}px`
      corazon.style.animationDuration = `${Math.random() * 4 + 6}s`
      corazon.style.animationDelay = `${Math.random() * 2}s`
      contenedor.appendChild(corazon)

      // Eliminar el corazón después de la animación
      setTimeout(() => corazon.remove(), 12000)
    }

    // Crear corazones iniciales
    for (let i = 0; i < 15; i++) {
      setTimeout(crearCorazon, i * 300)
    }

    // Seguir creando corazones cada 800ms
    const intervalo = setInterval(crearCorazon, 800)

    return () => clearInterval(intervalo)
  }, [])

  return <div className="hearts-container" ref={contenedorRef} />
}

export default CorazonesFlotantes
