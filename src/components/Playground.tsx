import { useState, useEffect, type FC } from 'react'
import { useConsult } from '../context/ConsultContext'

interface AgentScenario {
  id: string
  agentName: string
  label: string
  description: string
  messages: Array<{
    speaker: 'agent' | 'user'
    text: string
  }>
}

const VOICE_SCENARIOS: AgentScenario[] = [
  {
    id: 'cart-recovery',
    agentName: 'Simran',
    label: 'Cart Recovery Nudge',
    description: 'Autonomous conversational agent guiding high-intent customers to complete orders.',
    messages: [
      { speaker: 'agent', text: 'Hi, I noticed you left a few items in your cart. Would you like help completing the order?' },
      { speaker: 'user', text: 'Yes, but I need delivery confirmed by Friday evening.' },
      { speaker: 'agent', text: 'I can verify the express fulfillment slot right now. Express courier to your pincode is guaranteed by Thursday 6 PM.' },
      { speaker: 'user', text: 'That works! Can I pay via UPI on delivery?' },
      { speaker: 'agent', text: 'Absolutely. I have updated your payment preference to UPI at delivery. Sending your order confirmation link now.' }
    ]
  },
  {
    id: 'emi-reminder',
    agentName: 'Arjun',
    label: 'EMI Payment Reminder',
    description: 'Empathetic financial agent assisting customers with schedule adjustments and payments.',
    messages: [
      { speaker: 'agent', text: 'Namaste Rahul, calling from Novarix Finance regarding your auto-loan installment due on the 5th.' },
      { speaker: 'user', text: 'Hi Arjun. I have a salary delay this month until the 10th. Can I reschedule?' },
      { speaker: 'agent', text: 'I understand completely. We can extend your due date to the 10th with zero late penalty fee.' },
      { speaker: 'user', text: 'Thank you so much, please confirm that.' },
      { speaker: 'agent', text: 'Done! Your grace extension is confirmed. You will receive an SMS reminder on the morning of the 10th.' }
    ]
  },
  {
    id: 'appointment-booking',
    agentName: 'Priya',
    label: 'Healthcare Concierge',
    description: '24/7 multilingual healthcare coordinator triaging patients and scheduling specialists.',
    messages: [
      { speaker: 'agent', text: 'Hello, welcome to Apex Health. Would you like to schedule an in-clinic consultation or tele-health visit?' },
      { speaker: 'user', text: 'Looking for a pediatric specialist in Indiranagar tomorrow morning.' },
      { speaker: 'agent', text: 'Dr. Anita Mehta is available at 10:30 AM or 11:45 AM at our 100ft Road clinic. Which works better for you?' },
      { speaker: 'user', text: '10:30 AM is perfect.' },
      { speaker: 'agent', text: 'Booked! You are scheduled for 10:30 AM tomorrow with Dr. Mehta. A WhatsApp map pin has been sent.' }
    ]
  }
]

export const Playground: FC = () => {
  const [activeTab, setActiveTab] = useState<'voice' | 'ocr' | 'workflow' | 'translate'>('voice')
  const [selectedScenario, setSelectedScenario] = useState<AgentScenario>(VOICE_SCENARIOS[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [visibleMessages, setVisibleMessages] = useState<number>(3)
  const [copiedOcr, setCopiedOcr] = useState(false)
  const { openConsult } = useConsult()

  useEffect(() => {
    setVisibleMessages(3)
    setIsPlaying(false)
  }, [selectedScenario])

  const toggleCall = () => {
    if (!isPlaying) {
      setIsPlaying(true)
      if (visibleMessages < selectedScenario.messages.length) {
        setTimeout(() => {
          setVisibleMessages((prev) => Math.min(selectedScenario.messages.length, prev + 1))
        }, 1200)
      }
    } else {
      setIsPlaying(false)
    }
  }

  const handleCopyOcr = () => {
    const jsonStr = JSON.stringify({
      document_type: "tax_invoice",
      invoice_number: "NVX-9821",
      currency: "INR",
      vendor: { name: "Novarix Global Logistics Ltd.", gstin: "29AAACN8472M1Z0" },
      total_amount: 249000.00,
      verification_status: "AUTO_APPROVED"
    }, null, 2)
    navigator.clipboard.writeText(jsonStr)
    setCopiedOcr(true)
    setTimeout(() => setCopiedOcr(false), 2000)
  }

  return (
    <section
      id="playground"
      data-scale-reveal
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1540px',
        margin: '0 auto',
        padding: '60px 24px 100px',
        overflow: 'hidden',
        backgroundColor: '#0C0B0C',
      }}
    >
      {/* Background Rotating Nebula Light */}
      <div
        className="card-gradient-point"
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 112, 243, 0.22) 0%, rgba(115, 34, 242, 0.18) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="container-sarvam"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '36px',
        }}
      >
        {/* Section Heading with Superconscious Accent */}
        <div style={{ textAlign: 'center', maxWidth: '750px' }}>
          <div className="sc-telemetry-badge" style={{ marginBottom: '16px' }}>
            <span className="dot" />
            <span>Interactive Runtime Environment</span>
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
            The AI Platform Enterprises Build On
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-matter)',
              fontSize: '17px',
              color: 'rgba(255, 255, 255, 0.72)',
              lineHeight: 1.6,
            }}
          >
            Full-stack speech, vision, and reasoning agents engineered for population-scale throughput and sovereign reliability.
          </p>
        </div>

        {/* Superconscious Segmented Category Control */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
            overflowX: 'auto',
            maxWidth: '100%',
          }}
        >
          {(['voice', 'ocr', 'workflow', 'translate'] as const).map((tab) => {
            const labels = {
              voice: 'Autonomous Voice Agents',
              ocr: 'Document Digitisation',
              workflow: 'Workflow Orchestrator',
              translate: 'Enterprise Translation',
            }
            const isActive = activeTab === tab
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{
                  fontFamily: 'var(--font-matter)',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  padding: '9px 22px',
                  borderRadius: '9999px',
                  transition: 'all 0.3s var(--ease-super)',
                  backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                  color: isActive ? '#0C0B0C' : 'rgba(255, 255, 255, 0.75)',
                  boxShadow: isActive ? '0 0 24px rgba(0, 240, 255, 0.45), 0 4px 12px rgba(0, 0, 0, 0.3)' : 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {labels[tab]}
              </button>
            )
          })}
        </div>

        {/* Main Boxed Component Frame with Superconscious Rotating Gradient Stroke */}
        <div className="sc-stroke-card" style={{ width: '100%' }}>
          <div className="sc-gradient-beam" />
          <div className="sc-card-body">
            
            {/* Top Chrome / Telemetry Status Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 28px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
                </div>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.6)', marginLeft: '8px' }}>
                  novarix.runtime.playground // {activeTab}.sandbox
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span className="sc-telemetry-badge">
                  <span className="dot" />
                  <span>48kHz Full-Duplex · 58ms</span>
                </span>
                <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.45)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  22 Indic Dialects Ready
                </span>
              </div>
            </div>

            {/* =========================================================================
                TAB 1: AUTONOMOUS VOICE AGENTS PLAYGROUND
               ========================================================================= */}
            {activeTab === 'voice' && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  minHeight: '480px',
                }}
              >
                {/* Left Side: Call Visualizer with User's Logo */}
                <div
                  style={{
                    padding: '36px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: 'rgba(255, 255, 255, 0.015)',
                  }}
                >
                  {/* Scenario Selector Pills */}
                  <div style={{ width: '100%', marginBottom: '20px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-matter)',
                        fontSize: '11.5px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: 'var(--neon-cyan)',
                        display: 'block',
                        marginBottom: '10px',
                      }}
                    >
                      Select an Autonomous Scenario:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {VOICE_SCENARIOS.map((sc) => (
                        <button
                          key={sc.id}
                          type="button"
                          onClick={() => setSelectedScenario(sc)}
                          style={{
                            padding: '7px 16px',
                            borderRadius: '9999px',
                            fontSize: '12.5px',
                            fontFamily: 'var(--font-matter)',
                            fontWeight: 500,
                            border: '1px solid',
                            borderColor: selectedScenario.id === sc.id ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.12)',
                            backgroundColor: selectedScenario.id === sc.id ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                            color: selectedScenario.id === sc.id ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.75)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: selectedScenario.id === sc.id ? '0 0 16px rgba(0, 240, 255, 0.3)' : 'none',
                          }}
                        >
                          {sc.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pulsating Voice Orb Canvas with Embedded User Logo */}
                  <div
                    style={{
                      position: 'relative',
                      width: '240px',
                      height: '240px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '16px 0',
                    }}
                  >
                    <div className="pulse-ring" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />
                    <div className="pulse-ring" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />
                    <div className="pulse-ring" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />

                    {/* Center Core Button with Embedded User Logo */}
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 10,
                        width: '124px',
                        height: '124px',
                        borderRadius: '50%',
                        backgroundColor: '#16151D',
                        border: '1.5px solid rgba(0, 240, 255, 0.45)',
                        boxShadow: '0 0 40px rgba(0, 112, 243, 0.5), inset 0 0 25px rgba(0, 240, 255, 0.25)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease',
                      }}
                      onClick={toggleCall}
                    >
                      <img
                        src="/assets/novarix-logo.png"
                        alt="Novarix"
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          marginBottom: '4px',
                          filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.9))',
                        }}
                      />

                      {/* Equalizer Frequency Bars */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '16px', marginBottom: '4px' }}>
                        <div style={{ width: '3px', height: isPlaying ? '16px' : '4px', backgroundColor: '#00F0FF', borderRadius: '2px', transition: 'height 0.2s ease' }} />
                        <div style={{ width: '3px', height: isPlaying ? '20px' : '8px', backgroundColor: '#0070F3', borderRadius: '2px', transition: 'height 0.2s ease' }} />
                        <div style={{ width: '3px', height: isPlaying ? '14px' : '6px', backgroundColor: '#9780FF', borderRadius: '2px', transition: 'height 0.2s ease' }} />
                        <div style={{ width: '3px', height: isPlaying ? '18px' : '10px', backgroundColor: '#00F0FF', borderRadius: '2px', transition: 'height 0.2s ease' }} />
                        <div style={{ width: '3px', height: isPlaying ? '12px' : '4px', backgroundColor: '#0070F3', borderRadius: '2px', transition: 'height 0.2s ease' }} />
                      </div>

                      <span
                        style={{
                          fontFamily: 'var(--font-matter)',
                          fontSize: '10px',
                          fontWeight: 600,
                          color: isPlaying ? '#F87171' : 'var(--neon-cyan)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {isPlaying ? 'Pause' : 'Start Speaking'}
                      </span>
                    </div>
                  </div>

                  {/* Micro Hint */}
                  <p
                    style={{
                      fontFamily: 'var(--font-matter)',
                      fontSize: '13.5px',
                      color: 'rgba(255, 255, 255, 0.55)',
                      textAlign: 'center',
                      maxWidth: '280px',
                    }}
                  >
                    Click <strong style={{ color: 'var(--neon-cyan)' }}>Start Speaking</strong> to simulate low-latency full-duplex dialogue with{' '}
                    <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{selectedScenario.agentName}</span>.
                  </p>
                </div>

                {/* Right Side: High-End Chat Transcript */}
                <div
                  style={{
                    padding: '36px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: 'rgba(12, 11, 12, 0.65)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingBottom: '16px',
                      marginBottom: '20px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', fontWeight: 600, color: '#FFFFFF' }}>
                        Live Telemetry Transcript
                      </span>
                      <span
                        style={{
                          fontSize: '11px',
                          color: isPlaying ? '#10B981' : '#9780FF',
                          backgroundColor: isPlaying ? 'rgba(16, 185, 129, 0.15)' : 'rgba(151, 128, 255, 0.12)',
                          border: `1px solid ${isPlaying ? 'rgba(16, 185, 129, 0.3)' : 'rgba(151, 128, 255, 0.25)'}`,
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          fontWeight: 500,
                        }}
                      >
                        {isPlaying ? '● Live Session Active' : '● Standing by'}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--neon-cyan)', fontWeight: 500 }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--neon-cyan)', display: 'inline-block', boxShadow: '0 0 8px var(--neon-cyan)' }} />
                      Agent: {selectedScenario.agentName}
                    </div>
                  </div>

                  {/* Chat Messages Log */}
                  <div
                    className="scrollbar-thin-st"
                    style={{
                      flex: 1,
                      minHeight: '260px',
                      maxHeight: '320px',
                      overflowY: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      paddingRight: '8px',
                    }}
                  >
                    {selectedScenario.messages.slice(0, visibleMessages).map((msg, i) => (
                      <div
                        key={i}
                        style={{
                          maxWidth: '84%',
                          padding: '14px 18px',
                          borderRadius: '16px',
                          fontFamily: 'var(--font-matter)',
                          fontSize: '14px',
                          lineHeight: '1.5',
                          marginLeft: msg.speaker === 'user' ? 'auto' : '0',
                          marginRight: msg.speaker === 'agent' ? 'auto' : '0',
                          borderBottomRightRadius: msg.speaker === 'user' ? '4px' : '16px',
                          borderBottomLeftRadius: msg.speaker === 'agent' ? '4px' : '16px',
                          backgroundColor: msg.speaker === 'agent' ? 'rgba(0, 112, 243, 0.14)' : 'rgba(115, 34, 242, 0.15)',
                          border: msg.speaker === 'agent' ? '1px solid rgba(0, 240, 255, 0.25)' : '1px solid rgba(151, 128, 255, 0.3)',
                          color: '#FFFFFF',
                          boxShadow: msg.speaker === 'agent'
                            ? '0 4px 16px rgba(0, 112, 243, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 4px 16px rgba(115, 34, 242, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        <div style={{ fontSize: '11px', color: msg.speaker === 'agent' ? '#00F0FF' : '#9780FF', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {msg.speaker === 'agent' ? `Novarix AI (${selectedScenario.agentName})` : 'Customer'}
                        </div>
                        {msg.text}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>
                      End-to-end encryption · Zero audio storage
                    </span>
                    <button
                      type="button"
                      className="btn-superconscious-primary"
                      onClick={openConsult}
                      style={{ padding: '0.65rem 1.6rem', fontSize: '14px' }}
                    >
                      <span>Deploy Voice Agent</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 2: DOCUMENT DIGITISATION PLAYGROUND
               ========================================================================= */}
            {activeTab === 'ocr' && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  padding: '36px',
                  gap: '32px',
                }}
              >
                {/* Document Scan Preview HUD */}
                <div
                  style={{
                    position: 'relative',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '18px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '28px',
                    minHeight: '360px',
                    overflow: 'hidden',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div
                    className="animate-laser"
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #00F0FF, #0070F3, #9780FF, transparent)',
                      boxShadow: '0 0 20px #00F0FF, 0 0 40px #0070F3',
                      zIndex: 10,
                    }}
                  />

                  {/* Coordinate Reticle Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                    <div className="sc-telemetry-badge">
                      <span className="dot" />
                      <span>BOX_PRED: [0.124, 0.589, 0.812]</span>
                    </div>
                    <span style={{ fontSize: '11.5px', color: '#10B981', fontWeight: 600 }}>
                      Spatial Accuracy 99.8%
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#FFFFFF' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.15)', paddingBottom: '14px' }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--neon-cyan)' }}>TAX INVOICE #NVX-9821</div>
                        <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.6)' }}>Novarix Global Logistics Ltd.</div>
                      </div>
                      <div style={{ fontSize: '12px', textAlign: 'right', color: 'rgba(255,255,255,0.6)' }}>
                        <div>Date: 03-Oct-2026</div>
                        <div>GSTIN: 29AAACN8472M1Z0</div>
                      </div>
                    </div>

                    <div style={{ fontSize: '13.5px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Enterprise Autonomous Pipeline</span>
                        <strong>₹1,84,000.00</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>High-throughput ASR Clusters</span>
                        <strong>₹65,000.00</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px' }}>
                        <span style={{ fontWeight: 600 }}>Total Payable</span>
                        <strong style={{ color: 'var(--neon-cyan)', fontSize: '16px' }}>₹2,49,000.00</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extracted Structured JSON */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                        Extracted JSON Schema (Dense Tabular)
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyOcr}
                        style={{
                          fontSize: '12px',
                          color: copiedOcr ? '#10B981' : 'var(--neon-cyan)',
                          fontWeight: 600,
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                        }}
                      >
                        {copiedOcr ? 'Copied ✓' : 'Copy JSON'}
                      </button>
                    </div>
                    <pre
                      style={{
                        backgroundColor: '#08070A',
                        color: '#A5B4FC',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12.5px',
                        padding: '18px',
                        borderRadius: '14px',
                        border: '1px solid rgba(0, 240, 255, 0.25)',
                        overflowX: 'auto',
                        lineHeight: '1.6',
                        boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.8)',
                      }}
                    >
{`{
  "document_type": "tax_invoice",
  "invoice_number": "NVX-9821",
  "currency": "INR",
  "vendor": {
    "name": "Novarix Global Logistics Ltd.",
    "gstin": "29AAACN8472M1Z0"
  },
  "line_items": [
    { "description": "Enterprise Autonomous Pipeline", "amount": 184000.00 },
    { "description": "High-throughput ASR Clusters", "amount": 65000.00 }
  ],
  "total_amount": 249000.00,
  "verification_status": "AUTO_APPROVED"
}`}
                    </pre>
                  </div>

                  <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="button" className="btn-superconscious-primary" onClick={openConsult} style={{ padding: '0.65rem 1.6rem', fontSize: '14px' }}>
                      <span>Integrate Document API</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 3: WORKFLOW ORCHESTRATOR
               ========================================================================= */}
            {activeTab === 'workflow' && (
              <div
                style={{
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '28px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '19px', fontWeight: 600, color: '#FFFFFF' }}>
                      Autonomous Multi-Agent Settlement Swarm
                    </h3>
                    <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.65)' }}>Zero-touch operational loop from customer trigger to ERP ledger settlement.</p>
                  </div>
                  <span className="sc-telemetry-badge">
                    <span className="dot" />
                    <span>Average Execution: 1.4s · Zero Human Interventions</span>
                  </span>
                </div>

                {/* 4 Connected Visual Workflow Nodes */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
                  <div className="sc-bento-tile" style={{ padding: '20px' }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontWeight: 600 }}>Step 1: Ingestion</div>
                    <div style={{ fontWeight: 600, fontSize: '16px', color: '#FFFFFF', margin: '6px 0' }}>Voice / Doc Inflow</div>
                    <div style={{ fontSize: '12.5px', color: '#10B981' }}>Omnichannel trigger verified ✓</div>
                  </div>

                  <div className="sc-bento-tile" style={{ padding: '20px', borderColor: 'rgba(0, 240, 255, 0.4)', backgroundColor: 'rgba(0, 112, 243, 0.12)' }}>
                    <div style={{ fontSize: '11px', color: 'var(--neon-cyan)', textTransform: 'uppercase', fontWeight: 600 }}>Step 2: Reasoning</div>
                    <div style={{ fontWeight: 600, fontSize: '16px', color: '#FFFFFF', margin: '6px 0' }}>Policy Match Agent</div>
                    <div style={{ fontSize: '12.5px', color: 'var(--neon-cyan)' }}>Rule compliance score 99.9%</div>
                  </div>

                  <div className="sc-bento-tile" style={{ padding: '20px' }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontWeight: 600 }}>Step 3: ERP Sync</div>
                    <div style={{ fontWeight: 600, fontSize: '16px', color: '#FFFFFF', margin: '6px 0' }}>Core Banking Ledger</div>
                    <div style={{ fontSize: '12.5px', color: '#10B981' }}>CDC sync settled in 38ms</div>
                  </div>

                  <div className="sc-bento-tile" style={{ padding: '20px', borderColor: 'rgba(16, 185, 129, 0.4)', backgroundColor: 'rgba(16, 185, 129, 0.08)' }}>
                    <div style={{ fontSize: '11px', color: '#10B981', textTransform: 'uppercase', fontWeight: 600 }}>Step 4: Dispatch</div>
                    <div style={{ fontWeight: 600, fontSize: '16px', color: '#FFFFFF', margin: '6px 0' }}>Instant Payout</div>
                    <div style={{ fontSize: '12.5px', color: '#10B981' }}>Receipt dispatched via SMS & WhatsApp</div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                  <button type="button" className="btn-superconscious-primary" onClick={openConsult} style={{ padding: '0.65rem 1.6rem', fontSize: '14px' }}>
                    <span>Deploy Custom Orchestrator</span>
                  </button>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 4: ENTERPRISE TRANSLATION
               ========================================================================= */}
            {activeTab === 'translate' && (
              <div
                style={{
                  padding: '36px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px',
                }}
              >
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '10px' }}>
                    Source Text (English Enterprise Context):
                  </label>
                  <div
                    style={{
                      padding: '20px',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: '#FFFFFF',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    "Welcome to Novarix. Your instant loan approval has been processed and disbursed directly to your primary bank account."
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--neon-cyan)', display: 'block', marginBottom: '10px' }}>
                    Sovereign Translation (Nuanced Indic Tone):
                  </label>
                  <div
                    style={{
                      padding: '20px',
                      backgroundColor: 'rgba(0,112,243,0.14)',
                      borderRadius: '16px',
                      border: '1px solid rgba(0,240,255,0.35)',
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: '#FFFFFF',
                      boxShadow: '0 4px 20px rgba(0, 112, 243, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    "नोवारिक्स में आपका स्वागत है। आपके तत्काल ऋण की स्वीकृति पूरी हो चुकी है और राशि सीधे आपके प्राथमिक बैंक खाते में भेज दी गई है।"
                  </div>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '14px', alignItems: 'center' }}>
                    <span className="sc-telemetry-badge">
                      <span className="dot" />
                      <span>Dialect Precision: 99.4%</span>
                    </span>
                    <span style={{ fontSize: '12px', color: '#9780FF', fontWeight: 600 }}>
                      BLEU Benchmark: 44.8
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
