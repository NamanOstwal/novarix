import { useEffect, useRef, type FC } from 'react'

interface ParticlesBackgroundProps {
  className?: string
  particleCount?: number
}

export const ParticlesBackground: FC<ParticlesBackgroundProps> = ({
  className = '',
  particleCount = 50,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Particle definition
    interface Particle {
      x: number
      y: number
      radius: number
      baseAlpha: number
      alpha: number
      speedY: number
      speedX: number
      pulseSpeed: number
      color: string
    }

    const colors = [
      'rgba(0, 240, 255, ',   // Neon Cyan
      'rgba(0, 112, 243, ',   // Electric Blue
      'rgba(151, 128, 255, ', // Violet / Purple
      'rgba(255, 255, 255, ', // Starlight
    ]

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.6,
      baseAlpha: Math.random() * 0.5 + 0.2,
      alpha: Math.random() * 0.5 + 0.2,
      speedY: -(Math.random() * 0.35 + 0.15),
      speedX: (Math.random() - 0.5) * 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    let time = 0

    const render = () => {
      time += 0.03
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        p.y += p.speedY
        p.x += p.speedX
        p.alpha = p.baseAlpha + Math.sin(time * 2 + p.x) * 0.2

        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${Math.max(0.05, Math.min(1, p.alpha))})`
        ctx.shadowBlur = 8
        ctx.shadowColor = '#00F0FF'
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [particleCount])

  return (
    <canvas
      ref={canvasRef}
      className={`particles-canvas ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}
