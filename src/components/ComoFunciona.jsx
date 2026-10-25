import { passos } from '../data'
import Revelar from './Revelar'

export default function ComoFunciona() {
  return (
    <section className="container secao-espaco como-funciona">
      <Revelar className="como-funciona__foto zoom">
        <img loading="lazy" src="/img/planejamento.jpg" alt="Dentista explicando o planejamento para a paciente" />
      </Revelar>
      <Revelar className="como-funciona__texto" atraso={120}>
        <div className="cabecalho-secao__titulo">
          <span className="sobretitulo">Como funciona</span>
          <h2>Do primeiro “oi” ao sorriso novo em 4 passos.</h2>
        </div>
        <ol className="passos">
          {passos.map((p, i) => (
            <li key={p.titulo}>
              <span className="passos__numero">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <strong>{p.titulo}</strong>
                <p>{p.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </Revelar>
    </section>
  )
}
