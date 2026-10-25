const itens = [
  { titulo: 'Biossegurança total', texto: 'Esterilização classe B rastreável' },
  { titulo: 'Especialistas com CRO', texto: 'Cada área com seu especialista' },
  { titulo: 'Radiografia digital', texto: 'Diagnóstico preciso no consultório' },
  { titulo: 'Urgência no mesmo dia', texto: 'Dor de dente? Atendemos hoje' },
]

export default function Confianca() {
  return (
    <section className="confianca" aria-label="Diferenciais da clínica">
      <ul className="container confianca__lista">
        {itens.map((item) => (
          <li key={item.titulo}>
            <strong>{item.titulo}</strong>
            <span>{item.texto}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
