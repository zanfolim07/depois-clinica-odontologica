import { clinica } from '../data'
import { WhatsApp } from './Icones'

const colunas = [
  { titulo: 'Tratamentos', links: ['Lentes de contato', 'Clareamento', 'Implantes', 'Alinhadores'], href: '#tratamentos' },
  { titulo: 'Clínica', links: ['Sobre', 'Antes e depois', 'Dúvidas', 'Contato'], href: '#sobre' },
  { titulo: 'Siga', links: [`Instagram ${clinica.instagram}`, 'Google · 4,9 ★'], href: '#depoimentos' },
]

export default function Rodape() {
  return (
    <>
      <footer className="rodape">
        <div className="container">
          <div className="rodape__topo">
            <div className="rodape__marca">
              <strong>{clinica.nome}</strong>
              <span>Clínica odontológica nos Jardins, São Paulo.</span>
              <span>
                {clinica.enderecoLinha1}
                <br />
                {clinica.enderecoLinha2}
                <br />
                {clinica.telefone} · {clinica.horario}
              </span>
            </div>
            <div className="rodape__colunas">
              {colunas.map((c) => (
                <div key={c.titulo}>
                  <strong>{c.titulo}</strong>
                  {c.links.map((l) => (
                    <a key={l} href={c.href}>{l}</a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="rodape__base">
            <span>© 2026 {clinica.nome} Odontologia Ltda. · CNPJ {clinica.cnpj}</span>
            <span>Responsável técnica: {clinica.responsavel}</span>
          </div>
        </div>
      </footer>
      <a href={clinica.whatsappLink} target="_blank" rel="noopener" className="whatsapp" aria-label="Conversar no WhatsApp">
        <WhatsApp cor="#ffffff" />
      </a>
    </>
  )
}
