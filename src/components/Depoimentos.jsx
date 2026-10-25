import { depoimentos } from '../data'
import Revelar from './Revelar'
import { CabecalhoSecao } from './Secao'

const iniciais = (nome) =>
  nome
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')

function Cartao({ d, oculto }) {
  return (
    <figure className="depoimento" aria-hidden={oculto || undefined}>
      <span className="estrelas">★★★★★</span>
      <blockquote>{d.texto}</blockquote>
      <figcaption>
        {d.foto ? (
          <img loading="lazy" src={d.foto} alt="" />
        ) : (
          <span className="depoimento__iniciais">{iniciais(d.nome)}</span>
        )}
        <span>
          <strong>{d.nome}</strong>
          <small>{d.detalhe}</small>
        </span>
      </figcaption>
    </figure>
  )
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="secao-espaco depoimentos">
      <div className="container">
        <CabecalhoSecao sobretitulo="Depoimentos" titulo="Quem sorri, recomenda." centro>
          <span className="nota-google">
            <span className="estrelas">★★★★★</span> 4,9 de média em 312 avaliações no Google
          </span>
        </CabecalhoSecao>
      </div>

      <Revelar className="depoimentos__faixa" atraso={120}>
        <div className="depoimentos__trilho">
          {depoimentos.map((d) => (
            <Cartao key={d.nome} d={d} />
          ))}
          {depoimentos.map((d) => (
            <Cartao key={`${d.nome}-copia`} d={d} oculto />
          ))}
        </div>
      </Revelar>
    </section>
  )
}
