import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Confianca from './components/Confianca'
import Sobre from './components/Sobre'
import PorQue from './components/PorQue'
import Tratamentos from './components/Tratamentos'
import AntesDepois from './components/AntesDepois'
import ComoFunciona from './components/ComoFunciona'
import Especialistas from './components/Especialistas'
import Depoimentos from './components/Depoimentos'
import Duvidas from './components/Duvidas'
import ChamadaFinal from './components/ChamadaFinal'
import Localizacao from './components/Localizacao'
import Rodape from './components/Rodape'

export default function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Hero />
        <Confianca />
        <Sobre />
        <PorQue />
        <Tratamentos />
        <AntesDepois />
        <ComoFunciona />
        <Especialistas />
        <Depoimentos />
        <Duvidas />
        <ChamadaFinal />
        <Localizacao />
      </main>
      <Rodape />
    </>
  )
}
