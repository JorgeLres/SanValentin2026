import { useState } from 'react'
import './TarjetasRazones.css'

/**
 * Componente que muestra tarjetas con razones de amor
 * Cada tarjeta se voltea al hacer clic para revelar la razón
 */
function TarjetasRazones({ razones }) {
  return (
    <section className="reasons-section">
      <h2 className="dancing-font">Razones por las que te amo</h2>
      <p className="reasons-hint">(Haz clic en cada tarjeta para voltearla)</p>
      <div className="reasons-grid">
        {razones.map((razon, indice) => (
          <TarjetaRazon key={indice} numero={indice + 1} razon={razon} />
        ))}
      </div>
    </section>
  )
}

function TarjetaRazon({ numero, razon }) {
  const [volteada, setVolteada] = useState(false)

  return (
    <div
      className={`reason-card ${volteada ? 'flipped' : ''}`}
      onClick={() => setVolteada(!volteada)}
    >
      <div className="reason-card-inner">
        <div className="reason-front">
          {numero}
        </div>
        <div className="reason-back">
          {razon}
        </div>
      </div>
    </div>
  )
}

export default TarjetasRazones
