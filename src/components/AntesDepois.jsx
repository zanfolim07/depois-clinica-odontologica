import { useRef, useState } from 'react'
import { clinica } from '../data'
import { Setas } from './Icones'
import Revelar from './Revelar'
import { CabecalhoSecao } from './Secao'

export default function AntesDepois() {
  const [posicao, setPosicao] = useState(50)
  const area = useRef(null)

  const mover = (e) => {
    const r = area.current.getBoundingClientRect()
    const p = ((e.clientX - r.left) / r.width) * 100
    setPosicao(Math.max(0, Math.min(100, p)))
  }

  const teclado = (e) => {
    if (e.key === 'ArrowLeft') setPosicao((p) => Math.max(0, p - 5))
    if (e.key === 'ArrowRight') setPosicao((p) => Math.min(100, p + 5))
  }

  return (
    <section id="antes-e-depois" className="container secao-espaco antes-depois">
      <CabecalhoSecao
        sobretitulo="Antes e depois"
        titulo="Resultados que falam por si."
        apoio="Caso real de lentes de porcelana. Passe o mouse sobre a foto para comparar."
        centro
      />

      <Revelar atraso={120}>
        <div
          ref={area}
          className="comparador"
          onPointerMove={mover}
          onPointerDown={mover}
          onKeyDown={teclado}
          tabIndex={0}
          role="slider"
          aria-label="Comparar antes e depois"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(posicao)}
        >
          <img loading="lazy" src="/img/caso-depois.jpg" alt="Dentes depois do tratamento com lentes de porcelana" />
          <img
            loading="lazy"
            src="/img/caso-antes.jpg"
            alt="Dentes antes do tratamento, com espaços e manchas"
            style={{ clipPath: `inset(0 ${100 - posicao}% 0 0)` }}
          />
          <div className="comparador__linha" style={{ left: `${posicao}%` }} />
          <div className="comparador__alca" style={{ left: `${posicao}%` }}>
            <Setas cor="#0d1a2e" />
          </div>
          <span className="comparador__rotulo comparador__rotulo--antes">Antes</span>
          <span className="comparador__rotulo comparador__rotulo--depois">Depois</span>
        </div>
      </Revelar>

      <Revelar className="antes-depois__acao" atraso={200}>
        <a href={clinica.whatsappLink} target="_blank" rel="noopener" className="botao botao--azul">
          Quero um resultado assim
        </a>
      </Revelar>
    </section>
  )
}
