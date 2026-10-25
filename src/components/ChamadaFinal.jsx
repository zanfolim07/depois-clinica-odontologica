import { clinica } from '../data'
import { Dente } from './Icones'
import Revelar from './Revelar'

export default function ChamadaFinal() {
  return (
    <section className="chamada">
      <img loading="lazy" src="/img/atendimento.jpg" alt="" className="chamada__foto" />
      <span className="marca-dagua" aria-hidden="true">
        <Dente size={380} />
      </span>
      <div className="container">
        <Revelar className="chamada__texto">
          <h2>Pronto para amar o seu sorriso?</h2>
          <p>Agende sua avaliação gratuita e receba a prévia digital do seu novo sorriso na primeira consulta.</p>
          <div className="chamada__acoes">
            <a href={clinica.whatsappLink} target="_blank" rel="noopener" className="botao botao--branco">
              Agendar avaliação gratuita
            </a>
            <a href={clinica.whatsappLink} target="_blank" rel="noopener" className="botao botao--contorno-branco">
              WhatsApp {clinica.whatsapp}
            </a>
          </div>
        </Revelar>
      </div>
    </section>
  )
}
