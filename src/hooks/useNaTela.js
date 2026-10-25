import { useEffect, useRef, useState } from 'react'

export function useNaTela(limite = 0.15) {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          observador.disconnect()
        }
      },
      { threshold: limite },
    )
    observador.observe(el)
    return () => observador.disconnect()
  }, [limite])

  return [ref, visivel]
}
