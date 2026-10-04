import { useEffect, useId, useState, type FormEvent } from 'react'

export function ConsultModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const titleId = useId()
  const [sent, setSent] = useState(false)
  const [fullName, setFullName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [useCase, setUseCase] = useState('voice-agents')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!open) {
      setSent(false)
      return
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      role="presentation"
    >
      {/* Backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(30, 32, 51, 0.65)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          transition: 'opacity 0.2s ease',
        }}
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '520px',
          backgroundColor: '#121118',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 24px 70px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          padding: 'clamp(24px, 4vw, 36px)',
          maxHeight: '90vh',
          overflowY: 'auto',
          color: '#FFFFFF',
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.7)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FFFFFF'
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)'
          }}
          aria-label="Close dialog"
        >
          ×
        </button>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '24px 12px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '24px',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.25)',
              }}
            >
              ✓
            </div>
            <h2
              id={titleId}
              style={{
                fontFamily: 'var(--font-season-mix)',
                fontSize: '28px',
                fontWeight: 500,
                color: '#FFFFFF',
                marginBottom: '10px',
              }}
            >
              Consultation Request Received
            </h2>
            <p style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, marginBottom: '28px' }}>
              Thank you for reaching out. A Novarix Forward Deployed AI Architect will contact you within 2 business hours to review your enterprise requirements.
            </p>
            <button type="button" className="btn-superconscious-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={onClose}>
              Return to Platform
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-matter)',
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: '#00F0FF',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Forward Deployed Engineering
              </span>
              <h2
                id={titleId}
                style={{
                  fontFamily: 'var(--font-season-mix)',
                  fontSize: '28px',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  marginBottom: '8px',
                }}
              >
                Schedule an AI Strategy Session
              </h2>
              <p style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)' }}>
                Explore production deployment of autonomous voice, document, or workflow agents.
              </p>
            </div>

            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    outline: 'none',
                    fontFamily: 'var(--font-matter)',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#00F0FF')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '6px' }}>
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  placeholder="name@company.com"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    outline: 'none',
                    fontFamily: 'var(--font-matter)',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#00F0FF')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '6px' }}>
                    Company *
                  </label>
                  <input
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Company name"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      fontSize: '14px',
                      color: '#FFFFFF',
                      outline: 'none',
                      fontFamily: 'var(--font-matter)',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#00F0FF')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '6px' }}>
                    Primary Use Case
                  </label>
                  <select
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      backgroundColor: '#1C1B22',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      fontSize: '14px',
                      color: '#FFFFFF',
                      outline: 'none',
                      fontFamily: 'var(--font-matter)',
                    }}
                  >
                    <option value="voice-agents" style={{ background: '#1C1B22', color: '#fff' }}>Autonomous Voice Agents</option>
                    <option value="doc-digitisation" style={{ background: '#1C1B22', color: '#fff' }}>Document Intelligence & OCR</option>
                    <option value="workflows" style={{ background: '#1C1B22', color: '#fff' }}>Workflow Orchestration</option>
                    <option value="translation" style={{ background: '#1C1B22', color: '#fff' }}>Multilingual Translation</option>
                    <option value="custom" style={{ background: '#1C1B22', color: '#fff' }}>Sovereign On-Premises VPC</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '6px' }}>
                  Project Overview
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your operational volume or workflows you want to automate..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    outline: 'none',
                    resize: 'none',
                    fontFamily: 'var(--font-matter)',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#00F0FF')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              <div style={{ marginTop: '8px' }}>
                <button
                  type="submit"
                  className="btn-superconscious-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Submit Consultation Request
                </button>
              </div>

              <div style={{ textAlign: 'center', fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)', marginTop: '4px' }}>
                Protected by Novarix Enterprise Sovereign Privacy. Zero training on submitted inputs.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
