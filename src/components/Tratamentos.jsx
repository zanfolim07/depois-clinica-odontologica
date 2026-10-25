import { useState } from 'react'
import { tratamentos } from '../data'
import { Mais } from './Icones'
import Revelar from './Revelar'
import { CabecalhoSecao } from './Secao'
import TratamentoModal from './TratamentoModal'

export default function Tratamentos() {
  const [aberto, setAberto] = useState(null)

  return (
    <section id="tratamentos" className="container secao-espaco secao">
      <CabecalhoSecao
        sobretitulo="Tratamentos"
        titulo="Tudo para o seu sorriso, em um só lugar."
        apoio="Clique em um tratamento para ver como funciona, quantas sessões leva e para quem é indicado."
      />
      <div className="tratamentos">
        {tratamentos.map((t, i) => (
          <Revelar
            key={t.titulo}
            as="button"
            type="button"
            atraso={i * 80}
            onClick={() => setAberto(t)}
            aria-label={`Ver detalhes: ${t.titulo}`}
            className={`cartao tratamento zoom ${t.destaque ? 'tratamento--destaque' : ''}`}
          >
            <img loading="lazy" src={t.imagem} alt="" />
            <span className="tratamento__mais" aria-hidden="true">
              <Mais />
            </span>
            <span className="tratamento__texto">
              {t.destaque && <span className="selo">Mais procurado</span>}
              <span className="tratamento__titulo">{t.titulo}</span>
              {t.texto && <span className="tratamento__resumo">{t.texto}</span>}
              <span className="tratamento__detalhe">{t.detalhe}</span>
            </span>
          </Revelar>
        ))}
      </div>
      <Revelar className="especialidades">
        <span>Também atendemos</span>
        <ul>
          {['Clínico geral', 'Canal (endodontia)', 'Gengiva (periodontia)', 'Odontopediatria', 'Próteses', 'Urgências'].map(
            (e) => (
              <li key={e}>{e}</li>
            ),
          )}
        </ul>
      </Revelar>
      {aberto && <TratamentoModal tratamento={aberto} onFechar={() => setAberto(null)} />}
    </section>
  )
}
