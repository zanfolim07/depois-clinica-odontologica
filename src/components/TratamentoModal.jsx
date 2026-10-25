import { useEffect, useRef } from 'react'
import { clinica } from '../data'
import { Fechar } from './Icones'

export default function TratamentoModal({ tratamento: t, onFechar }) {
  const botaoFechar = useRef(null)

  useEffect(() => {
    const anterior = document.activeElement
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    botaoFechar.current?.focus()

    const tecla = (e) => {
      if (e.key === 'Escape') onFechar()
    }
    window.addEventListener('keydown', tecla)

    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', tecla)
      anterior?.focus?.()
    }
  }, [onFechar])

  const mensagem = encodeURIComponent(`Olá! Gostaria de agendar uma avaliação para ${t.titulo.toLowerCase()}.`)

  return (
    <div className="modal" onClick={onFechar}>
      <div
        className="modal__caixa"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={botaoFechar} type="button" className="modal__fechar" onClick={onFechar} aria-label="Fechar">
          <Fechar />
        </button>

        <img loading="lazy" className="modal__foto" src={t.imagem} alt={t.alt} />

        <div className="modal__conteudo">
          <span className="sobretitulo">Tratamento</span>
          <h3 id="modal-titulo">{t.titulo}</h3>
          <p>{t.descricao}</p>

          <div className="modal__dados">
            <div>
              <small>Sessões</small>
              <strong>{t.sessoes}</strong>
            </div>
            <div>
              <small>Duração</small>
              <strong>{t.duracao}</strong>
            </div>
          </div>

          <div className="modal__listas">
          <div className="modal__bloco">
            <strong>Indicado para</strong>
            <ul>
              {t.indicado.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal__bloco">
            <strong>Como é feito</strong>
            <ul>
              {t.etapas.map((etapa) => (
                <li key={etapa}>{etapa}</li>
              ))}
            </ul>
          </div>
          </div>

          <a
            href={`${clinica.whatsappLink}?text=${mensagem}`}
            target="_blank"
            rel="noopener"
            className="botao botao--azul"
          >
            Agendar avaliação gratuita
          </a>
        </div>
      </div>
    </div>
  )
}
