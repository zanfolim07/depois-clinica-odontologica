import { useEffect, useState } from 'react'
import { clinica, menu } from '../data'
import { Dente } from './Icones'

export default function Cabecalho() {
  const [rolou, setRolou] = useState(() => window.scrollY > 40)
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 40)
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  const fechar = () => setAberto(false)

  return (
    <header className={`cabecalho ${rolou || aberto ? 'cabecalho--solido' : ''}`}>
      <div className="cabecalho__linha">
        <a href="#inicio" className="marca" onClick={fechar}>
          <Dente size={24} cor="currentColor" />
          <span>
            {clinica.nome}
            <small>Clínica Odontológica</small>
          </span>
        </a>

        <nav className="cabecalho__menu" aria-label="Menu principal">
          {menu.map((item) => (
            <a key={item.href} href={item.href} className="link-animado">
              {item.label}
            </a>
          ))}
        </nav>

        <a href={clinica.whatsappLink} target="_blank" rel="noopener" className="botao botao--azul cabecalho__cta">
          Agendar avaliação
        </a>

        <button
          type="button"
          className="cabecalho__hamburguer"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          aria-controls="menu-celular"
          onClick={() => setAberto((a) => !a)}
        >
          <span className={aberto ? 'aberto' : ''} />
        </button>
      </div>

      {aberto && (
        <nav id="menu-celular" className="cabecalho__painel" aria-label="Menu">
          {menu.map((item) => (
            <a key={item.href} href={item.href} onClick={fechar}>
              {item.label}
            </a>
          ))}
          <a href={clinica.whatsappLink} target="_blank" rel="noopener" className="botao botao--azul" onClick={fechar}>
            Agendar avaliação gratuita
          </a>
        </nav>
      )}
    </header>
  )
}
