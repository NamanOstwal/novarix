import { useEffect, useRef, useState, type FC } from 'react'

interface SplitBlurTextProps {
  children: string
  className?: string
  style?: React.CSSProperties
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
  delay?: number
  stagger?: number
  direction?: 'down' | 'up' | 'right'
}

export const SplitBlurText: FC<SplitBlurTextProps> = ({
  children,
  className = '',
  style = {},
  as: Component = 'div',
  delay = 0,
  stagger = 35,
  direction = 'up',
}) => {
  const containerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const words = children.split(' ')

  const getTransform = (visible: boolean) => {
    if (visible) return 'translate3d(0, 0, 0) scale(1)'
    if (direction === 'up') return 'translate3d(0, 24px, 0) scale(0.96)'
    if (direction === 'down') return 'translate3d(0, -24px, 0) scale(0.96)'
    return 'translate3d(24px, 0, 0) scale(0.96)'
  }

  return (
    <Component
      ref={containerRef as any}
      className={`split-blur-container ${className}`}
      style={{
        display: 'inline-block',
        ...style,
      }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{
            display: 'inline-block',
            marginRight: '0.28em',
            overflow: 'hidden',
            verticalAlign: 'top',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              filter: isVisible ? 'blur(0px)' : 'blur(10px)',
              transform: getTransform(isVisible),
              transition: `opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)`,
              transitionDelay: `${delay + wordIndex * stagger}ms`,
              willChange: 'transform, filter, opacity',
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  )
}
