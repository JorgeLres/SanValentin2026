import { useState, useEffect } from 'react'
import './Contador.css'

/**
 * Componente contador de tiempo juntos
 * Muestra años, meses, días, horas, minutos y segundos desde la fecha de inicio
 */
function Contador({ fechaInicio }) {
  const [tiempo, setTiempo] = useState({
    anios: 0,
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  })

  useEffect(() => {
    const calcularTiempo = () => {
      const ahora = new Date()
      const diferencia = ahora - fechaInicio

      const totalSegundos = Math.floor(diferencia / 1000)
      const totalMinutos = Math.floor(totalSegundos / 60)
      const totalHoras = Math.floor(totalMinutos / 60)
      const totalDias = Math.floor(totalHoras / 24)

      let anios = ahora.getFullYear() - fechaInicio.getFullYear()
      let meses = ahora.getMonth() - fechaInicio.getMonth()

      if (meses < 0) {
        anios--
        meses += 12
      }

      if (ahora.getDate() < fechaInicio.getDate()) {
        meses--
        if (meses < 0) {
          anios--
          meses += 12
        }
      }

      setTiempo({
        anios,
        meses,
        dias: totalDias,
        horas: totalHoras % 24,
        minutos: totalMinutos % 60,
        segundos: totalSegundos % 60
      })
    }

    calcularTiempo()
    const intervalo = setInterval(calcularTiempo, 1000)

    return () => clearInterval(intervalo)
  }, [fechaInicio])

  const formatearFecha = () => {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' }
    return fechaInicio.toLocaleDateString('es-ES', opciones)
  }

  return (
    <section className="counter-section">
      <h2 className="dancing-font">Tiempo juntos desde el {formatearFecha()}</h2>
      <div className="counter">
        <ElementoContador numero={tiempo.anios} etiqueta="Años" />
        <ElementoContador numero={tiempo.meses} etiqueta="Meses" />
        <ElementoContador numero={tiempo.dias} etiqueta="Días" />
        <ElementoContador numero={tiempo.horas} etiqueta="Horas" />
        <ElementoContador numero={tiempo.minutos} etiqueta="Minutos" />
        <ElementoContador numero={tiempo.segundos} etiqueta="Segundos" />
      </div>
    </section>
  )
}

function ElementoContador({ numero, etiqueta }) {
  return (
    <div className="counter-item">
      <span className="number">{numero}</span>
      <span className="label">{etiqueta}</span>
    </div>
  )
}

export default Contador
