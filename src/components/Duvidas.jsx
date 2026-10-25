import { useState } from 'react'
import { clinica, duvidas } from '../data'
import Revelar from './Revelar'

export default function Duvidas() {
  const [aberta, setAberta] = useState(0)

  return (
    <section id="duvidas" className="container secao-espaco duvidas">
      <Revelar className="duvidas__texto">
        <span className="sobretitulo">Dúvidas frequentes</span>
        <h2>Tudo o que você quer saber antes de começar.</h2>
        <p>Não achou sua pergunta? Fale com a nossa equipe pelo WhatsApp {clinica.whatsapp}.</p>
      </Revelar>
      <Revelar className="duvidas__lista" atraso={120}>
        {duvidas.map((d, i) => {
          const estaAberta = aberta === i
          return (
            <div key={d.pergunta} className={`duvida ${estaAberta ? 'duvida--aberta' : ''}`}>
              <button
                type="button"
                aria-expanded={estaAberta}
                aria-controls={`duvida-${i}`}
                onClick={() => setAberta(estaAberta ? -1 : i)}
              >
                <span>{d.pergunta}</span>
                <span className="duvida__icone" aria-hidden="true">{estaAberta ? '−' : '+'}</span>
              </button>
              <div id={`duvida-${i}`} className="duvida__resposta" hidden={!estaAberta}>
                <p>{d.resposta}</p>
              </div>
            </div>
          )
        })}
      </Revelar>
    </section>
  )
}
