import { useConsult } from '../context/ConsultContext'

type Variant = 'primary' | 'ghost' | 'lime' | 'light'

export function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  href,
}: {
  children: React.ReactNode
  variant?: Variant
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  href?: string
}) {
  const cls = `btn btn-${variant} ${className}`
  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export function ConsultButton({
  children,
  variant = 'primary',
  className = '',
}: {
  children: React.ReactNode
  variant?: Variant
  className?: string
}) {
  const { openConsult } = useConsult()
  return (
    <Button variant={variant} className={className} onClick={openConsult}>
      {children}
    </Button>
  )
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  align = 'left',
  id,
}: {
  eyebrow?: string
  title: string
  copy?: string
  align?: 'left' | 'center'
  id?: string
}) {
  return (
    <header className={`section-head ${align === 'center' ? 'is-center' : ''}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id}>{title}</h2>
      {copy ? <p className="lede">{copy}</p> : null}
    </header>
  )
}
