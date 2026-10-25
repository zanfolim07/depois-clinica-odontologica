import { clinica } from '../data'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <img
        className="hero__foto"
        src="/img/hero-sorriso.jpg"
        alt="Paciente sorrindo ao ver o resultado no espelho do consultório"
        fetchPriority="high"
      />
      <div className="hero__sombra" />

      <div className="hero__grade">
        <div className="hero__conteudo">
          <h1>
            O sorriso que você sempre quis, <span>planejado em detalhes.</span>
          </h1>
          <p>
            Lentes de contato dental, clareamento, implantes e ortodontia com especialistas e prévia digital do
            resultado.
          </p>
          <div className="hero__acoes">
            <a href={clinica.whatsappLink} target="_blank" rel="noopener" className="botao botao--branco">
              Agendar avaliação gratuita
            </a>
            <span className="hero__telefone">
              Ou ligue: <strong>{clinica.telefone}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
