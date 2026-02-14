import CorazonesFlotantes from './components/CorazonesFlotantes'
import Encabezado from './components/Encabezado'
import Contador from './components/Contador'
import MensajeEscritura from './components/MensajeEscritura'
import TarjetasRazones from './components/TarjetasRazones'
import PiePagina from './components/PiePagina'
import { CONFIG } from './config'
import './App.css'

function App() {
  return (
    <>
      <CorazonesFlotantes />

      <div className="container">
        <Encabezado nombre={CONFIG.nombre} />

        <Contador fechaInicio={CONFIG.fechaInicio} />

        <MensajeEscritura mensaje={CONFIG.mensaje} />

        <TarjetasRazones razones={CONFIG.razones} />

        <PiePagina />
      </div>
    </>
  )
}

export default App
