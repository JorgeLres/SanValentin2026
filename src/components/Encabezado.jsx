import './Encabezado.css'

/**
 * Componente de encabezado con el nombre de la persona
 * Muestra un título animado con gradiente
 */
function Encabezado({ nombre }) {
  return (
    <header className="header">
      <h1 className="dancing-font">Para ti, {nombre}</h1>
      <p className="subtitle">Mi persona favorita en el mundo</p>
    </header>
  )
}

export default Encabezado
