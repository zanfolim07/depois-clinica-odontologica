import Revelar from './Revelar'

export function CabecalhoSecao({ sobretitulo, titulo, apoio, centro = false, children }) {
  return (
    <Revelar className={`cabecalho-secao ${centro ? 'cabecalho-secao--centro' : ''}`}>
      <div className="cabecalho-secao__titulo">
        <span className="sobretitulo">{sobretitulo}</span>
        <h2>{titulo}</h2>
      </div>
      {apoio && <p>{apoio}</p>}
      {children}
    </Revelar>
  )
}
