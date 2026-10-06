import { useEffect, useId, useState, type FormEvent, type FC } from 'react'
import { X, CheckCircle2, Calendar, Send, ShieldCheck } from 'lucide-react'

export const ConsultModal: FC<{
  open: boolean
  onClose: () => void
}> = ({ open, onClose }) => {
  const titleId = useId()
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [leadId, setLeadId] = useState('')
  const [fullName, setFullName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companySize, setCompanySize] = useState('11-50')
  const [selectedWorkflows, setSelectedWorkflows] = useState<string[]>(['AI Agents & Operations'])
  const [problemDescription, setProblemDescription] = useState('')

  useEffect(() => {
    if (!open) {
      setSent(false)
      setIsSubmitting(false)
      setErrorMessage('')
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

  const toggleWorkflow = (name: string) => {
    if (selectedWorkflows.includes(name)) {
      if (selectedWorkflows.length > 1) {
        setSelectedWorkflows(selectedWorkflows.filter((w) => w !== name))
      }
    } else {
      setSelectedWorkflows([...selectedWorkflows, name])
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const payload = {
        fullName,
        workEmail,
        companyName,
        companySize,
        selectedWorkflows,
        problemDescription,
      }

      const res = await fetch('/api/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setErrorMessage(data.error || 'Failed to submit consultation request. Please verify inputs.')
        return
      }

      if (data.leadId) {
        setLeadId(data.leadId)
      }
      setSent(true)
    } catch (err: any) {
      console.error('Backend API submission error:', err)
      setErrorMessage(err.message || 'Network error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!open) return null

  const WORKFLOW_OPTIONS = [
    'AI Agents & Operations',
    'Enterprise RAG & Knowledge',
    'Customer Support & Voice',
    'Document Intelligence & OCR',
    'Engineering & SRE Triage',
    'Custom Sovereign AI'
  ]

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
          backgroundColor: 'rgba(12, 11, 12, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          transition: 'opacity 0.25s ease',
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
          maxWidth: '580px',
          backgroundColor: '#121118',
          borderRadius: '24px',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(0, 112, 243, 0.25)',
          padding: 'clamp(24px, 4vw, 36px)',
          maxHeight: '92vh',
          overflowY: 'auto',
          color: '#FFFFFF',
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <X size={18} />
        </button>

        {!sent ? (
          <div>
            {/* Header */}
            <div style={{ marginBottom: '24px' }}>
              <div className="sc-telemetry-badge" style={{ marginBottom: '10px' }}>
                <Calendar size={13} color="var(--neon-cyan)" />
                <span>30-Minute AI Architecture Strategy Call</span>
              </div>
              <h3
                id={titleId}
                style={{
                  fontFamily: 'var(--font-season-mix)',
                  fontSize: 'clamp(24px, 3vw, 30px)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  marginBottom: '6px',
                }}
              >
                Book a Technical Consultation
              </h3>
              <p style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5 }}>
                Connect directly with our engineering founders. We’ll map your manual workflow, evaluate data architecture, and discuss custom POC feasibility.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Name & Work Email */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      fontFamily: 'var(--font-matter)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px' }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      fontFamily: 'var(--font-matter)',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Company Name & Team Size */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px' }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Enterprises"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      fontFamily: 'var(--font-matter)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px' }}>
                    Company Size
                  </label>
                  <select
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      backgroundColor: '#1C1B22',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      fontFamily: 'var(--font-matter)',
                      outline: 'none',
                    }}
                  >
                    <option value="1-10">1 – 10 employees</option>
                    <option value="11-50">11 – 50 employees</option>
                    <option value="51-200">51 – 200 employees</option>
                    <option value="201-1000">201 – 1,000 employees</option>
                    <option value="1000+">1,000+ enterprise</option>
                  </select>
                </div>
              </div>

              {/* What are you looking to automate? */}
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', marginBottom: '8px' }}>
                  What are you looking to automate? (Select all that apply)
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '8px' }}>
                  {WORKFLOW_OPTIONS.map((opt) => {
                    const isChecked = selectedWorkflows.includes(opt)
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleWorkflow(opt)}
                        style={{
                          padding: '8px 12px',
                          borderRadius: '8px',
                          backgroundColor: isChecked ? 'rgba(0, 112, 243, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                          border: `1px solid ${isChecked ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.08)'}`,
                          color: isChecked ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.7)',
                          fontSize: '12px',
                          fontWeight: isChecked ? 600 : 400,
                          textAlign: 'left',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {isChecked ? '✓ ' : '+ '} {opt}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Problem Description */}
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px' }}>
                  Tell us about your current manual workflow or operational problem:
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Our operations team spends 20 hours a week manually matching PDF invoices to SAP purchase orders..."
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    fontSize: '13.5px',
                    fontFamily: 'var(--font-matter)',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* Error Message if Any */}
              {errorMessage && (
                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 75, 75, 0.12)',
                    border: '1px solid rgba(255, 75, 75, 0.3)',
                    color: '#FF8080',
                    fontSize: '13px',
                    fontFamily: 'var(--font-matter)',
                    textAlign: 'center',
                  }}
                >
                  {errorMessage}
                </div>
              )}

              {/* Submit CTA Button */}
              <div style={{ marginTop: '8px' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-superconscious-primary"
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.6rem',
                    fontSize: '15px',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  <Send size={16} className={isSubmitting ? 'animate-spin-slow' : ''} />
                  <span>{isSubmitting ? 'Processing Enterprise Intake...' : 'Confirm Consultation Request'}</span>
                </button>
              </div>

              {/* Trust Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
                <ShieldCheck size={14} color="#10B981" />
                <span>NDA protected · Zero data training guarantee</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1.5px solid #10B981',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)',
              }}
            >
              <CheckCircle2 size={32} />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-season-mix)',
                fontSize: '26px',
                fontWeight: 500,
                color: '#FFFFFF',
                marginBottom: '10px',
              }}
            >
              Consultation Request Received!
            </h3>

            {leadId && (
              <div
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: '#10B981',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  marginBottom: '16px',
                }}
              >
                Tracking ID: {leadId}
              </div>
            )}

            <p style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 24px' }}>
              Thank you, <strong>{fullName || 'there'}</strong>. Our engineering team has received your workflow brief for <strong>{companyName || 'your company'}</strong>. We’ll reach out to <strong>{workEmail}</strong> within 4 business hours with calendar invites.
            </p>

            <div
              style={{
                padding: '16px 20px',
                borderRadius: '12px',
                backgroundColor: 'rgba(0, 112, 243, 0.1)',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                fontSize: '13px',
                color: 'var(--neon-cyan)',
                marginBottom: '24px',
              }}
            >
              Selected Target Workflows: {selectedWorkflows.join(', ')}
            </div>

            <button
              type="button"
              className="btn-superconscious-primary"
              onClick={onClose}
              style={{ padding: '0.75rem 2rem', fontSize: '14.5px' }}
            >
              <span>Back to Overview</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
