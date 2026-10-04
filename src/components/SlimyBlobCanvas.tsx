import { useEffect, useRef, type FC } from 'react'

interface SlimyBlobCanvasProps {
  className?: string
  style?: React.CSSProperties
}

export const SlimyBlobCanvas: FC<SlimyBlobCanvasProps> = ({ className, style }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let cssWidth = 0
    let cssHeight = 0

    const updateSize = () => {
      if (!canvas) return
      cssWidth = canvas.offsetWidth || window.innerWidth
      cssHeight = canvas.offsetHeight || window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(cssWidth * dpr)
      canvas.height = Math.floor(cssHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    updateSize()
    window.addEventListener('resize', updateSize, { passive: true })

    // Organic harmonic oscillators for fluid slimy motion
    let t = 0
    const numPoints = 16
    const angles: number[] = []
    const speeds: number[] = []
    const phases: number[] = []

    for (let i = 0; i < numPoints; i++) {
      angles.push((i / numPoints) * Math.PI * 2)
      speeds.push(0.7 + (i % 5) * 0.25)
      phases.push((i * 1.3) % (Math.PI * 2))
    }

    const render = () => {
      t += 0.018
      ctx.clearRect(0, 0, cssWidth, cssHeight)

      const isMobile = cssWidth < 768
      const cx = cssWidth * 0.5
      // On mobile portrait, place the blob slightly higher up behind the hero text
      const cy = cssHeight * (isMobile ? 0.44 : 0.48)
      const baseRadius = Math.min(cssWidth, cssHeight) * (isMobile ? 0.48 : 0.38)

      // 1. Calculate main slimy blob organic spline contour
      const pts: Array<{ x: number; y: number }> = []
      for (let i = 0; i < numPoints; i++) {
        const a = angles[i]
        const w1 = Math.sin(t * speeds[i] + phases[i]) * 0.24
        const w2 = Math.cos(t * 0.5 + a * 2.2) * 0.18
        const w3 = Math.sin(t * 1.1 + a * 3.5) * 0.1
        const r = baseRadius * (1 + w1 + w2 + w3)
        pts.push({
          x: cx + Math.cos(a) * r,
          y: cy + Math.sin(a) * r,
        })
      }

      // 2. Draw Outer Cosmic Aura Gradient (deep diffuse cyan-purple glow)
      const aura = ctx.createRadialGradient(cx, cy, baseRadius * 0.15, cx, cy, baseRadius * 1.5)
      aura.addColorStop(0, 'rgba(0, 240, 255, 0.48)')
      aura.addColorStop(0.35, 'rgba(0, 112, 243, 0.38)')
      aura.addColorStop(0.65, 'rgba(115, 34, 242, 0.25)')
      aura.addColorStop(0.88, 'rgba(10, 5, 22, 0.06)')
      aura.addColorStop(1, 'rgba(12, 11, 12, 0)')

      ctx.fillStyle = aura
      ctx.beginPath()
      ctx.arc(cx, cy, baseRadius * 1.5, 0, Math.PI * 2)
      ctx.fill()

      // 3. Draw Main Gelatinous Body Path using smooth quadratic spline
      ctx.save()
      ctx.beginPath()
      const n = pts.length
      ctx.moveTo((pts[0].x + pts[n - 1].x) / 2, (pts[0].y + pts[n - 1].y) / 2)
      for (let i = 0; i < n; i++) {
        const next = (i + 1) % n
        const mx = (pts[i].x + pts[next].x) / 2
        const my = (pts[i].y + pts[next].y) / 2
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my)
      }
      ctx.closePath()

      // Iridescent Liquid Fill Gradient
      const fillGrad = ctx.createRadialGradient(
        cx - baseRadius * 0.28,
        cy - baseRadius * 0.22,
        baseRadius * 0.05,
        cx,
        cy,
        baseRadius * 1.15
      )
      fillGrad.addColorStop(0, '#00F0FF') // Core cyan
      fillGrad.addColorStop(0.28, '#0070F3') // Vivid sapphire
      fillGrad.addColorStop(0.62, '#7322F2') // Deep cosmic violet
      fillGrad.addColorStop(0.85, '#38104e') // Dark plum
      fillGrad.addColorStop(1, 'rgba(12, 11, 12, 0.1)')

      ctx.fillStyle = fillGrad
      ctx.fill()

      // Outer rim luminance
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.75)'
      ctx.lineWidth = isMobile ? 3 : 4
      ctx.stroke()
      ctx.restore()

      // 4. Secondary Orbiting Metaball Pods (merging and slithering around the core)
      for (let j = 0; j < 3; j++) {
        const orbitSpeed = 0.45 + j * 0.2
        const orbitAngle = t * orbitSpeed + (j * Math.PI * 2) / 3
        const dist = baseRadius * (0.65 + Math.sin(t * 0.8 + j) * 0.2)
        const subX = cx + Math.cos(orbitAngle) * dist
        const subY = cy + Math.sin(orbitAngle) * (dist * 0.72)
        const subR = baseRadius * (0.22 + Math.sin(t * 1.2 + j * 1.5) * 0.08)

        const subGrad = ctx.createRadialGradient(subX, subY, 0, subX, subY, subR)
        if (j === 0) {
          subGrad.addColorStop(0, 'rgba(0, 240, 255, 0.95)')
          subGrad.addColorStop(0.5, 'rgba(0, 112, 243, 0.8)')
          subGrad.addColorStop(1, 'rgba(12, 11, 12, 0)')
        } else if (j === 1) {
          subGrad.addColorStop(0, 'rgba(151, 128, 255, 0.95)')
          subGrad.addColorStop(0.5, 'rgba(115, 34, 242, 0.8)')
          subGrad.addColorStop(1, 'rgba(12, 11, 12, 0)')
        } else {
          subGrad.addColorStop(0, 'rgba(56, 189, 248, 0.9)')
          subGrad.addColorStop(0.6, 'rgba(0, 112, 243, 0.65)')
          subGrad.addColorStop(1, 'rgba(12, 11, 12, 0)')
        }

        ctx.fillStyle = subGrad
        ctx.beginPath()
        ctx.arc(subX, subY, subR, 0, Math.PI * 2)
        ctx.fill()
      }

      // 5. Specular Liquid Sheen (smooth undulating surface reflection)
      const sheenX = cx - baseRadius * 0.32 + Math.sin(t * 0.7) * (baseRadius * 0.12)
      const sheenY = cy - baseRadius * 0.3 + Math.cos(t * 0.85) * (baseRadius * 0.1)
      const sheenR = baseRadius * 0.38

      const sheenGrad = ctx.createRadialGradient(sheenX, sheenY, 0, sheenX, sheenY, sheenR)
      sheenGrad.addColorStop(0, 'rgba(255, 255, 255, 0.82)')
      sheenGrad.addColorStop(0.3, 'rgba(0, 240, 255, 0.55)')
      sheenGrad.addColorStop(0.75, 'rgba(0, 112, 243, 0.15)')
      sheenGrad.addColorStop(1, 'rgba(0, 112, 243, 0)')

      ctx.fillStyle = sheenGrad
      ctx.beginPath()
      ctx.arc(sheenX, sheenY, sheenR, 0, Math.PI * 2)
      ctx.fill()

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', updateSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        // Universal hardware-accelerated CSS blur that runs smoothly on 100% of iOS & Android devices
        filter: 'blur(10px) contrast(125%)',
        WebkitFilter: 'blur(10px) contrast(125%)',
        transform: 'translateZ(0)',
        willChange: 'transform',
        ...style,
      }}
    />
  )
}
