import { clinica } from '../data'
import { Dente } from './Icones'
import Revelar from './Revelar'

const comoChegar = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${clinica.enderecoLinha1}, São Paulo`,
)}`

export default function Localizacao() {
  return (
    <section id="contato" className="container secao-espaco localizacao">
      <Revelar className="localizacao__texto">
        <span className="sobretitulo">Como chegar</span>
        <h2>Visite a clínica nos Jardins.</h2>
        <p className="localizacao__endereco">
          {clinica.enderecoLinha1}
          <br />
          Cerqueira César, São Paulo/SP
        </p>
        <dl className="localizacao__dados">
          <div>
            <dt>Horário</dt>
            <dd>{clinica.horario}</dd>
          </div>
          <div>
            <dt>Telefone</dt>
            <dd>{clinica.telefone}</dd>
          </div>
        </dl>
        <div className="localizacao__acoes">
          <a href={comoChegar} target="_blank" rel="noopener" className="botao botao--azul">
            Como chegar
          </a>
          <a href={clinica.whatsappLink} target="_blank" rel="noopener" className="botao botao--contorno">
            WhatsApp
          </a>
        </div>
      </Revelar>

      <Revelar className="mapa" atraso={120}>
        <img loading="lazy" src="/img/mapa-largo.jpg" alt="Mapa da região da clínica na Rua Haddock Lobo, São Paulo" />
        <div className="mapa__pino">
          <span className="mapa__ponto">
            <Dente size={20} preenchido />
          </span>
          <span className="mapa__rotulo">{clinica.nome}</span>
        </div>
        <span className="mapa__credito">© OpenStreetMap</span>
      </Revelar>
    </section>
  )
}
