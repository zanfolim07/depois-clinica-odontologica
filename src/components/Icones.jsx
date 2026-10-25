const DENTE =
  'M14 8c-6 0-9 6-8 13 1 6 4 9 5 15 1 5 2 10 5 10s3-6 5-11c1-3 2-4 5-4s4 1 5 4c2 5 2 11 5 11s4-5 5-10c1-6 4-9 5-15 1-7-2-13-8-13-5 0-7 3-12 3s-7-3-12-3z'

export function Dente({ size = 28, cor = '#ffffff', preenchido = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" aria-hidden="true">
      <path
        d={DENTE}
        fill={preenchido ? cor : 'none'}
        stroke={preenchido ? 'none' : cor}
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Traco({ size = 24, cor = 'currentColor', largura = 2, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={cor}
      strokeWidth={largura}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export const Setas = (p) => (
  <Traco size={20} largura={2.2} {...p}>
    <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
  </Traco>
)

export const Mais = (p) => (
  <Traco size={18} largura={2.2} {...p}>
    <path d="M12 5v14M5 12h14" />
  </Traco>
)

export const Fechar = (p) => (
  <Traco size={20} largura={2.2} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Traco>
)

export const WhatsApp = (p) => (
  <Traco size={28} largura={1.9} {...p}>
    <path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.5L3 21z" />
    <path d="M9 10c.5 2 2 3.5 4 4l1.2-1.2 2 .8v1.6c-4 .4-8-3.6-7.6-7.6H10l.8 2L9 10z" />
  </Traco>
)
