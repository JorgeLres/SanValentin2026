import { useState, useEffect } from 'react'
import './MensajeEscritura.css'

/**
 * Componente de mensaje con efecto máquina de escribir
 * El texto aparece letra por letra como si se estuviera escribiendo
 */
function MensajeEscritura({ mensaje }) {
  const [textoMostrado, setTextoMostrado] = useState('')
  const [mostrarCursor, setMostrarCursor] = useState(true)

  useEffect(() => {
    let indice = 0
    const velocidadEscritura = 40

    const temporizador = setTimeout(() => {
      const intervaloEscritura = setInterval(() => {
        if (indice < mensaje.length) {
          setTextoMostrado(mensaje.slice(0, indice + 1))
          indice++
        } else {
          clearInterval(intervaloEscritura)
        }
      }, velocidadEscritura)

      return () => clearInterval(intervaloEscritura)
    }, 1500)

    return () => clearTimeout(temporizador)
  }, [mensaje])

  // Efecto de parpadeo del cursor (como en un editor de texto)
  useEffect(() => {
    const intervaloCursor = setInterval(() => {
      setMostrarCursor(prev => !prev)
    }, 500)

    return () => clearInterval(intervaloCursor)
  }, [])

  return (
    <section className="message-section">
      <h2 className="dancing-font">Una carta para ti...</h2>
      <div className="typewriter">
        <span className="typed-text">
          {textoMostrado.split('\n').map((linea, i) => (
            <span key={i}>
              {linea}
              {i < textoMostrado.split('\n').length - 1 && <br />}
            </span>
          ))}
        </span>
        <span className={`cursor ${mostrarCursor ? 'visible' : ''}`}>|</span>
      </div>
    </section>
  )
}

export default MensajeEscritura
