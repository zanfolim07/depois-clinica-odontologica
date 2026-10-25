import { especialistas } from '../data'
import Revelar from './Revelar'
import { CabecalhoSecao } from './Secao'

export default function Especialistas() {
  return (
    <section className="container secao-espaco secao">
      <CabecalhoSecao
        sobretitulo="Especialistas"
        titulo={
          <>
            Quem cuida do seu sorriso, <span className="titulo-suave">nosso maior orgulho.</span>
          </>
        }
        apoio="Uma equipe que trabalha junta em cada caso, unindo estética, função e saúde."
      />
      <div className="grade grade--3">
        {especialistas.map((e, i) => (
          <Revelar key={e.nome} atraso={i * 100} className="cartao especialista zoom">
            <img loading="lazy" src={e.foto} alt={e.nome} style={{ objectPosition: e.posicao ?? 'top' }} />
            <div className="especialista__info">
              <strong>{e.nome}</strong>
              <span>{e.area}</span>
              <span className="especialista__destaque">{e.destaque}</span>
            </div>
          </Revelar>
        ))}
      </div>
    </section>
  )
}
