import { useNaTela } from '../hooks/useNaTela'

export default function Revelar({ as: Tag = 'div', atraso = 0, className = '', style, children, ...resto }) {
  const [ref, visivel] = useNaTela()
  return (
    <Tag
      ref={ref}
      className={`revelar ${visivel ? 'revelar--visivel' : ''} ${className}`.trim()}
      style={{ '--atraso': `${atraso}ms`, ...style }}
      {...resto}
    >
      {children}
    </Tag>
  )
}
