import { useEffect, useState } from 'react'

const formatar = new Intl.NumberFormat('pt-BR')
const semAnimacao = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Contador({ valor, ativo }) {
  const [atual, setAtual] = useState(0)

  useEffect(() => {
    if (!ativo || semAnimacao) return
    const duracao = 1600
    const inicio = performance.now()
    let quadro
    const passo = (agora) => {
      const t = Math.min(1, (agora - inicio) / duracao)
      const suave = 1 - Math.pow(1 - t, 3)
      setAtual(Math.round(valor * suave))
      if (t < 1) quadro = requestAnimationFrame(passo)
    }
    quadro = requestAnimationFrame(passo)
    return () => cancelAnimationFrame(quadro)
  }, [ativo, valor])

  return formatar.format(semAnimacao ? valor : atual)
}
