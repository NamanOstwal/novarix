import { useState, type FC } from 'react'
import { useConsult } from '../context/ConsultContext'

export const DeveloperSection: FC = () => {
  const [activeLang, setActiveLang] = useState<'python' | 'javascript' | 'curl' | 'go'>('python')
  const [copied, setCopied] = useState(false)
  const [copiedPip, setCopiedPip] = useState(false)
  const [isExecuting, setIsExecuting] = useState(false)
  const [executionOutput, setExecutionOutput] = useState<string | null>(null)
  const { openConsult } = useConsult()

  const codeSnippets = {
    python: `from novarix import NovarixAI
from novarix.voice import synthesize

# Initialize client with sovereign key
client = NovarixAI(api_key="nvx_live_secret_key")

response = client.agents.execute(
    agent_id="claims-adjuster-v3",
    input_text="नमस्ते, आपकी ऑटो पॉलिसी का क्लेम स्वीकृत हो गया है।",
    language_code="hi-IN",
    speaker="ananya",
    telemetry_logging=True
)

synthesize(response, "confirmation.wav")`,
    javascript: `import { NovarixClient } from '@novarix/sdk';

const novarix = new NovarixClient({
  apiKey: process.env.NOVARIX_API_KEY
});

const execution = await novarix.agents.run({
  workflow: 'enterprise-kyc-verify',
  documentUrl: 'https://storage.enterprise.internal/doc_992.pdf',
  targetLanguage: 'hi-IN'
});

console.log('Verified Status:', execution.status);`,
    curl: `curl -X POST https://api.novarix.ai/v1/agents/execute \\
  -H "Authorization: Bearer nvx_live_secret_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "cart-recovery-v2",
    "customer_phone": "+919876543210",
    "language": "hi-IN",
    "autonomous_payout": true
  }'`,
    go: `package main

import (
  "context"
  "fmt"
  "github.com/novarix/novarix-go"
)

func main() {
  client := novarix.NewClient("nvx_live_secret_key")
  res, _ := client.Agents.Execute(context.Background(), &novarix.AgentParams{
    AgentID:  "support-triage-v1",
    Dialect:  "ta-IN",
    Realtime: true,
  })
  fmt.Println("Agent Dispatched:", res.SessionID)
}`,
  }

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyPip = () => {
    navigator.clipboard.writeText('pip install novarix')
    setCopiedPip(true)
    setTimeout(() => setCopiedPip(false), 2000)
  }

  const handleRunExecution = () => {
    setIsExecuting(true)
    setExecutionOutput(null)
    setTimeout(() => {
      setIsExecuting(false)
      setExecutionOutput(`HTTP/2 200 OK
content-type: application/json
x-novarix-latency: 42ms
x-novarix-region: bom1-sovereign

{
  "status": "COMPLETED",
  "agent_id": "claims-adjuster-v3",
  "session_token": "nvx_sess_89f02c",
  "synthesis_latency_ms": 42.18,
  "confidence": 0.9984,
  "dispatched_events": 1
}`)
    }, 900)
  }

  return (
    <section
      id="developers"
      data-section-reveal
      style={{
        position: 'relative',
        width: '100%',
        padding: '80px 24px 100px',
        backgroundColor: '#0C0B0C',
      }}
    >
      <div className="container-sarvam" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Section Heading with Superconscious Accent */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <div className="sc-telemetry-badge" style={{ marginBottom: '16px' }}>
            <span className="dot" />
            <span>Developer Sandbox & SDKs</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-season-mix)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '14px',
              textShadow: '0 0 35px rgba(0, 112, 243, 0.3)',
            }}
          >
            Build anything with<br />Novarix APIs
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-matter)',
              fontSize: '17px',
              color: 'rgba(255, 255, 255, 0.72)',
              lineHeight: 1.6,
            }}
          >
            Everything you need to add Sovereign AI & Autonomous Automation to your product with first-class SDKs and zero latency overhead.
          </p>
        </div>

        {/* 50/50 Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Card: High-End Code IDE in Superconscious Stroke Card */}
          <div className="sc-stroke-card" style={{ height: '100%' }}>
            <div className="sc-gradient-beam" />
            <div
              className="sc-card-body"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-matter)',
                      fontSize: '22px',
                      fontWeight: 600,
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em',
                      color: '#FFFFFF',
                    }}
                  >
                    Add <span style={{ color: 'var(--neon-cyan)', textShadow: '0 0 16px rgba(0, 240, 255, 0.4)' }}>Autonomous Agents</span><br />
                    to your app in minutes
                  </h3>
                  <span className="sc-telemetry-badge">
                    <span className="dot" />
                    <span>REST / gRPC / SDK</span>
                  </span>
                </div>

                {/* Code Terminal Container */}
                <div
                  style={{
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    overflow: 'hidden',
                    backgroundColor: '#09080C',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {/* Titlebar with Window Dots & Language Tabs */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '0 14px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                        <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                        <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
                      </div>

                      <div style={{ display: 'flex' }}>
                        {(['python', 'javascript', 'curl', 'go'] as const).map((lang) => {
                          const labels = {
                            python: 'Python',
                            javascript: 'TypeScript',
                            curl: 'cURL',
                            go: 'Go SDK',
                          }
                          const isActive = activeLang === lang
                          return (
                            <button
                              key={lang}
                              type="button"
                              onClick={() => setActiveLang(lang)}
                              style={{
                                padding: '10px 14px',
                                fontSize: '12.5px',
                                fontWeight: 600,
                                fontFamily: 'var(--font-matter)',
                                color: isActive ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.5)',
                                backgroundColor: isActive ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
                                borderBottom: isActive ? '2px solid var(--neon-cyan)' : '2px solid transparent',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                              }}
                            >
                              {labels[lang]}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Copy Button */}
                    <button
                      type="button"
                      onClick={copyCode}
                      style={{
                        padding: '6px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: copied ? '#10B981' : 'rgba(255, 255, 255, 0.7)',
                        cursor: 'pointer',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      {copied ? 'Copied ✓' : 'Copy'}
                    </button>
                  </div>

                  {/* Preformatted Code Content */}
                  <div style={{ padding: '20px', maxHeight: '270px', overflowY: 'auto' }}>
                    <pre
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12.5px',
                        lineHeight: '1.7',
                        color: '#E0E7FF',
                        whiteSpace: 'pre',
                        margin: 0,
                      }}
                    >
                      {codeSnippets[activeLang]}
                    </pre>
                  </div>

                  {/* Interactive Terminal Output / Run Simulation */}
                  {executionOutput && (
                    <div
                      style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: '14px 20px',
                        fontSize: '11.5px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--neon-cyan)',
                        lineHeight: '1.5',
                        maxHeight: '150px',
                        overflowY: 'auto',
                      }}
                    >
                      <pre style={{ margin: 0 }}>{executionOutput}</pre>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  marginTop: '24px',
                  alignItems: 'center',
                }}
              >
                <button
                  type="button"
                  onClick={handleRunExecution}
                  disabled={isExecuting}
                  style={{
                    padding: '0.8rem 1.6rem',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-matter)',
                    backgroundColor: isExecuting ? 'rgba(0, 240, 255, 0.2)' : 'rgba(0, 240, 255, 0.12)',
                    border: '1px solid rgba(0, 240, 255, 0.4)',
                    color: 'var(--neon-cyan)',
                    cursor: isExecuting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 0 15px rgba(0, 240, 255, 0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--neon-cyan)' }} />
                  <span>{isExecuting ? 'Dispatching...' : 'Test Run Endpoint'}</span>
                </button>

                <button
                  type="button"
                  className="btn-superconscious-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                  onClick={openConsult}
                >
                  <span>Request API Credentials</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Feature Bento Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px', flex: 1 }}>
              
              {/* Card 1: Text to Speech */}
              <div className="sc-bento-tile" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div className="sc-icon-pod">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  </div>
                  <span className="sc-telemetry-badge">
                    <span className="dot" />
                    <span>48kHz HD</span>
                  </span>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
                    Speech Synthesis
                  </h4>
                  <p style={{ fontFamily: 'var(--font-matter)', fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.5' }}>
                    Ultra-natural human voices across 22 Indic dialects with emotional nuance.
                  </p>
                </div>
              </div>

              {/* Card 2: Speech to Text */}
              <div className="sc-bento-tile" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div className="sc-icon-pod" style={{ outlineColor: '#0070F3' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0070F3" strokeWidth="2">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    </svg>
                  </div>
                  <span className="sc-telemetry-badge" style={{ color: '#0070F3' }}>
                    <span className="dot" style={{ backgroundColor: '#0070F3', boxShadow: '0 0 8px #0070F3' }} />
                    <span>58ms RTT</span>
                  </span>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
                    Conversational ASR
                  </h4>
                  <p style={{ fontFamily: 'var(--font-matter)', fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.5' }}>
                    Real-time speech recognition resilient to heavy background noise and code-mixing.
                  </p>
                </div>
              </div>

              {/* Card 3: Enterprise Translation */}
              <div className="sc-bento-tile" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div className="sc-icon-pod" style={{ outlineColor: '#9780FF' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9780FF" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" x2="22" y1="12" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <span className="sc-telemetry-badge" style={{ color: '#9780FF' }}>
                    <span className="dot" style={{ backgroundColor: '#9780FF', boxShadow: '0 0 8px #9780FF' }} />
                    <span>22 Languages</span>
                  </span>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
                    Neural Translation
                  </h4>
                  <p style={{ fontFamily: 'var(--font-matter)', fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.5' }}>
                    Contextual enterprise translation preserving domain jargon and legal semantics.
                  </p>
                </div>
              </div>

              {/* Card 4: Document Intelligence */}
              <div className="sc-bento-tile" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div className="sc-icon-pod">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <span className="sc-telemetry-badge">
                    <span className="dot" />
                    <span>99.8% Spatial</span>
                  </span>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
                    Document Vision
                  </h4>
                  <p style={{ fontFamily: 'var(--font-matter)', fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.5' }}>
                    Reconstruct tables, handwritten signatures, and complex invoices into clean JSON.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom 3 Developer Telemetry Pills */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
              <div className="sc-bento-tile" style={{ padding: '16px' }}>
                <div style={{ fontFamily: 'var(--font-matter)', fontSize: '14.5px', fontWeight: 600, color: '#FFFFFF' }}>OpenAPI Spec</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>Fully typed REST endpoints</div>
              </div>

              <div
                className="sc-bento-tile"
                style={{ padding: '16px', cursor: 'pointer' }}
                onClick={copyPip}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-matter)', fontSize: '14.5px', fontWeight: 600, color: '#FFFFFF' }}>Python Package</span>
                  <span style={{ fontSize: '11px', color: copiedPip ? '#10B981' : 'var(--neon-cyan)', fontWeight: 600 }}>
                    {copiedPip ? 'Copied ✓' : 'Copy'}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--neon-cyan)', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>
                  pip install novarix
                </div>
              </div>

              <div className="sc-bento-tile" style={{ padding: '16px' }}>
                <div style={{ fontFamily: 'var(--font-matter)', fontSize: '14.5px', fontWeight: 600, color: '#FFFFFF' }}>Interactive Console</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>Zero-setup in browser</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
