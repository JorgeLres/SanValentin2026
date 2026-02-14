import './PiePagina.css'

/**
 * Componente de pie de página
 * Muestra mensaje de San Valentín y corazón animado
 */
function PiePagina() {
  return (
    <footer className="footer">
      <p className="dancing-font feliz-san-valentin">
        ¡Feliz San Valentín!
      </p>
      <p className="dancing-font">
        Te amo infinitamente <span className="heart-beat">❤️</span>
      </p>
    </footer>
  )
}

export default PiePagina
