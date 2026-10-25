import { Dente } from './Icones'
import Revelar from './Revelar'

const fotos = {
  esquerda: { src: '/img/especialista.jpg', alt: 'Dentista usando lupas de aumento', classe: 'foto-flutuante--a' },
  direita: { src: '/img/ambiente.jpg', alt: 'Consultório com vista para o jardim', classe: 'foto-flutuante--b' },
}

function Coluna({ lado }) {
  return (
    <div className={`sobre__coluna sobre__coluna--${lado}`}>
      <div className={`foto-flutuante ${fotos[lado].classe}`}>
        <img loading="lazy" src={fotos[lado].src} alt={fotos[lado].alt} />
      </div>
    </div>
  )
}

export default function Sobre() {
  return (
    <section id="sobre" className="container sobre">
      <Coluna lado="esquerda" />
      <Revelar className="sobre__texto">
        <span className="marca-dagua" aria-hidden="true">
          <Dente size={420} cor="#eaf1fe" preenchido />
        </span>
        <span className="sobretitulo">Sobre a clínica</span>
        <h2>Cuidado acolhedor, técnica de especialista.</h2>
        <p>
          Desde 2010, a Sorriso Lumière transforma a ida ao dentista em uma experiência leve. Unimos tecnologia digital,
          especialistas dedicados e um plano feito sob medida para o seu sorriso.
        </p>
        <a href="#tratamentos" className="botao botao--contorno">Conheça a clínica</a>
      </Revelar>
      <Coluna lado="direita" />
    </section>
  )
}
