import './App.css'
import HelloWorld from './HelloWorld'
import ParagrafoSaudacao from './Saudacao'
import Stacks from './Stacks'

function App() {

  return (
    <>
      <div>
        <HelloWorld/>
        <ParagrafoSaudacao/>
      </div>

      {/* Desafio de código */}
      <div>
        <Stacks tipoTecnologia="Backend" linguagem="Java" framework="Javalin" database="PostgreSQL"/> 
        <Stacks tipoTecnologia="Frontend" linguagem="Javascript" framework="React" database="no-db"/> 
      </div>
    </>
  )
}

export default App
