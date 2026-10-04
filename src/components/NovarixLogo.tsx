import type { FC } from 'react'

interface NovarixLogoProps {
  variant?: 'dark' | 'light' | 'white' | 'glow'
  markOnly?: boolean
  className?: string
  height?: number
  withGlow?: boolean
}

export const NovarixLogo: FC<NovarixLogoProps> = ({
  variant = 'glow',
  markOnly = false,
  className = '',
  height = 36,
  withGlow = true,
}) => {
  const iconSize = Math.max(height * 1.35, 36)

  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center' }}
    >
      {/* User's Embedded Logo Icon - Increased size & vibrant glow */}
      <div
        style={{
          position: 'relative',
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {withGlow && (
          <div
            style={{
              position: 'absolute',
              inset: '-6px',
              borderRadius: '35%',
              background: 'radial-gradient(circle, rgba(0, 240, 255, 0.55) 0%, rgba(0, 112, 243, 0.35) 45%, rgba(115, 34, 242, 0.2) 70%, transparent 80%)',
              filter: 'blur(8px)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
        )}
        <img
          src="/assets/novarix-logo.png"
          alt="Novarix Emblem"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '24%',
            filter: withGlow ? 'drop-shadow(0 0 14px rgba(0, 240, 255, 0.8)) drop-shadow(0 0 28px rgba(0, 112, 243, 0.5))' : 'none',
          }}
        />
      </div>

      {!markOnly && (
        <span
          style={{
            fontFamily: 'var(--font-matter)',
            fontWeight: 700,
            fontSize: `${height * 0.95}px`,
            letterSpacing: '-0.025em',
            color: variant === 'dark' ? '#1E2033' : '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            lineHeight: 1,
          }}
        >
          novarix
          <span
            style={{
              fontSize: `${height * 0.44}px`,
              fontWeight: 700,
              color: '#00F0FF',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              background: 'rgba(0, 240, 255, 0.14)',
              border: '1px solid rgba(0, 240, 255, 0.45)',
              padding: '2px 7px',
              borderRadius: '6px',
              boxShadow: '0 0 14px rgba(0, 240, 255, 0.3)',
            }}
          >
            AI
          </span>
        </span>
      )}
    </div>
  )
}
