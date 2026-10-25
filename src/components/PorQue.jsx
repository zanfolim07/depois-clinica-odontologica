import { diferenciais, numeros } from '../data'
import { useNaTela } from '../hooks/useNaTela'
import Contador from './Contador'
import Revelar from './Revelar'
import { CabecalhoSecao } from './Secao'

export default function PorQue() {
  const [ref, visivel] = useNaTela(0.4)

  return (
    <section className="container secao-espaco secao">
      <CabecalhoSecao
        sobretitulo="Por que nos escolhem"
        titulo="Uma clínica onde dá vontade de voltar."
        apoio="Do primeiro contato ao pós-tratamento, tudo é pensado para você se sentir seguro, confortável e bem informado."
      />
      <div className="porque">
        <Revelar className="porque__foto zoom">
          <img loading="lazy" src="/img/consultorio.jpg" alt="Consultório amplo e iluminado da clínica" />
          <ul ref={ref} className="porque__foto-texto">
            {numeros.map((n) => (
              <li key={n.valor}>
                <strong>
                  <Contador valor={n.valor} ativo={visivel} />
                  {n.sufixo}
                </strong>
                <span>{n.legenda.join(' ')}</span>
              </li>
            ))}
          </ul>
        </Revelar>
        <div className="porque__grade">
          {diferenciais.map((d, i) => (
            <Revelar key={d.titulo} atraso={i * 90} className="cartao diferencial">
              <span className="diferencial__numero">{String(i + 1).padStart(2, '0')}</span>
              <div className="diferencial__texto">
                <h3>{d.titulo}</h3>
                <p>{d.texto}</p>
              </div>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}
