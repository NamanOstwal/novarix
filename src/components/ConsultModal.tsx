import { useEffect, useId, useState, type FormEvent } from 'react'
import { COMPANY } from '../brand'
import { Button } from './Button'

export function ConsultModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const titleId = useId()
  const [sent, setSent] = useState(false)

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
    <div className="modal-root" role="presentation">
      <button className="modal-backdrop" aria-label="Close dialog" onClick={onClose} />
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <button className="modal-x" type="button" onClick={onClose} aria-label="Close">
          ×
        </button>
        {sent ? (
          <div className="modal-ok">
            <p className="eyebrow">Received</p>
            <h2 id={titleId}>We'll review the workflow.</h2>
            <p>
              Thanks for writing. A {COMPANY} operator will follow up to map
              the manual steps and identify what can be automated.
            </p>
            <Button onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Consultation</p>
            <h2 id={titleId}>Book an automation consultation</h2>
            <p className="lede">
              Tell us the manual software work. We’ll help identify what should
              become a workflow.
            </p>
            <form onSubmit={submit}>
              <label>
                Name
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                Work email
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                Company
                <input name="company" required autoComplete="organization" />
              </label>
              <label>
                What should we automate?
                <textarea name="work" rows={4} required placeholder="Describe the repetitive software work." />
              </label>
              <Button type="submit">
                Request consultation <span className="arrow">→</span>
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
