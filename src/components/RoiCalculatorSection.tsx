import { useState, useMemo, type FC } from 'react'
import { DollarSign, Clock, Users, Percent, ArrowRight } from 'lucide-react'
import { useConsult } from '../context/ConsultContext'

export const RoiCalculatorSection: FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR')
  const [employees, setEmployees] = useState<number>(12)
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(8)
  const [hourlyRate, setHourlyRate] = useState<number>(currency === 'INR' ? 600 : 45)
  const [automationRate, setAutomationRate] = useState<number>(65)
  const { openConsult } = useConsult()

  // Handle currency toggle adjustments
  const toggleCurrency = (c: 'INR' | 'USD') => {
    if (c === currency) return
    setCurrency(c)
    setHourlyRate(c === 'INR' ? 600 : 45)
  }

  // Calculations
  const { currentAnnualCost, hoursSaved, annualSavings } = useMemo(() => {
    const WEEKS_PER_YEAR = 52
    const totalAnnualHours = employees * hoursPerWeek * WEEKS_PER_YEAR
    const totalCost = totalAnnualHours * hourlyRate
    const totalHoursSaved = Math.round(totalAnnualHours * (automationRate / 100))
    const totalSavings = Math.round(totalCost * (automationRate / 100))

    return {
      currentAnnualCost: totalCost,
      hoursSaved: totalHoursSaved,
      annualSavings: totalSavings,
    }
  }, [employees, hoursPerWeek, hourlyRate, automationRate])

  const formatCurrency = (val: number) => {
    if (currency === 'INR') {
      return `₹${val.toLocaleString('en-IN')}`
    }
    return `$${val.toLocaleString('en-US')}`
  }

  return (
    <section
      id="calculator"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '100px 24px',
        backgroundColor: '#0C0B0C',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Eyebrow badge */}
        <div className="sc-telemetry-badge" style={{ marginBottom: '16px' }}>
          <span className="dot" />
          <span>Interactive Business Value Model</span>
        </div>

        {/* Section Heading */}
        <h2
          style={{
            fontFamily: 'var(--font-season-mix)',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 500,
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '14px',
          }}
        >
          Calculate Your Annual Automation ROI
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.72)',
            textAlign: 'center',
            maxWidth: '720px',
            lineHeight: 1.6,
            marginBottom: '48px',
          }}
        >
          See the tangible financial impact of automating manual operational workflows across your team.
        </p>

        {/* Calculator Frame */}
        <div
          className="sc-stroke-card"
          style={{
            width: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
          }}
        >
          <div className="sc-gradient-beam" />
          <div
            className="sc-card-body"
            style={{
              padding: 'clamp(28px, 4vw, 48px)',
              backgroundColor: 'rgba(18, 17, 23, 0.9)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: 'clamp(32px, 4vw, 56px)',
                alignItems: 'center',
              }}
            >
              {/* Left Column: Sliders & Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '18px', fontWeight: 600, color: '#FFFFFF' }}>
                    Workflow Inputs
                  </h3>

                  {/* Currency Toggle */}
                  <div
                    style={{
                      display: 'flex',
                      padding: '3px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleCurrency('INR')}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 600,
                        backgroundColor: currency === 'INR' ? 'var(--neon-cyan)' : 'transparent',
                        color: currency === 'INR' ? '#0C0B0C' : 'rgba(255, 255, 255, 0.7)',
                        cursor: 'pointer',
                        border: 'none',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      INR (₹)
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleCurrency('USD')}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 600,
                        backgroundColor: currency === 'USD' ? 'var(--neon-cyan)' : 'transparent',
                        color: currency === 'USD' ? '#0C0B0C' : 'rgba(255, 255, 255, 0.7)',
                        cursor: 'pointer',
                        border: 'none',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      USD ($)
                    </button>
                  </div>
                </div>

                {/* Slider 1: Employees */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Users size={16} color="var(--neon-cyan)" />
                      <span>Team members performing manual task:</span>
                    </label>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700, color: 'var(--neon-cyan)' }}>
                      {employees} people
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--neon-cyan)', cursor: 'pointer' }}
                  />
                </div>

                {/* Slider 2: Hours/Week */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={16} color="var(--neon-cyan)" />
                      <span>Hours per week spent per employee:</span>
                    </label>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700, color: 'var(--neon-cyan)' }}>
                      {hoursPerWeek} hrs / week
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--neon-cyan)', cursor: 'pointer' }}
                  />
                </div>

                {/* Slider 3: Hourly Rate */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <DollarSign size={16} color="var(--neon-cyan)" />
                      <span>Estimated average employee hourly cost:</span>
                    </label>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700, color: 'var(--neon-cyan)' }}>
                      {formatCurrency(hourlyRate)} / hr
                    </span>
                  </div>
                  <input
                    type="range"
                    min={currency === 'INR' ? 100 : 15}
                    max={currency === 'INR' ? 3000 : 250}
                    step={currency === 'INR' ? 50 : 5}
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--neon-cyan)', cursor: 'pointer' }}
                  />
                </div>

                {/* Slider 4: Target Automation Rate */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Percent size={16} color="#10B981" />
                      <span>Target autonomous execution rate:</span>
                    </label>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700, color: '#10B981' }}>
                      {automationRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="90"
                    step="5"
                    value={automationRate}
                    onChange={(e) => setAutomationRate(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#10B981', cursor: 'pointer' }}
                  />
                </div>
              </div>

              {/* Right Column: Calculated Impact Dashboard */}
              <div
                style={{
                  padding: 'clamp(24px, 4vw, 36px)',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(12, 11, 12, 0.85)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 35px rgba(0, 112, 243, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '24px',
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--neon-cyan)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
                    Projected Annual Business Impact
                  </div>

                  {/* Net Annual Savings Hero Card */}
                  <div
                    style={{
                      padding: '20px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.45)',
                      marginBottom: '20px',
                    }}
                  >
                    <div style={{ fontSize: '13px', color: '#6EE7B7', fontWeight: 600, marginBottom: '6px' }}>
                      Potential Annual Cost Savings:
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'clamp(32px, 4vw, 44px)',
                        fontWeight: 800,
                        color: '#34D399',
                        lineHeight: 1.1,
                        textShadow: '0 0 25px rgba(16, 185, 129, 0.4)',
                      }}
                    >
                      {formatCurrency(annualSavings)}
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', marginTop: '6px' }}>
                      Based on {automationRate}% workflow automation across {employees} employees
                    </div>
                  </div>

                  {/* Secondary Metrics */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontWeight: 600 }}>
                        Current Annual Cost
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>
                        {formatCurrency(currentAnnualCost)}
                      </div>
                    </div>

                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontWeight: 600 }}>
                        Annual Hours Recovered
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: 700, color: 'var(--neon-cyan)', marginTop: '4px' }}>
                        {hoursSaved.toLocaleString()} hrs
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div>
                  <button
                    type="button"
                    className="btn-superconscious-primary"
                    onClick={openConsult}
                    style={{ width: '100%', padding: '0.9rem 1.6rem', fontSize: '15px' }}
                  >
                    <span>Get Custom ROI Audit For Your Team</span>
                    <ArrowRight size={16} />
                  </button>
                  <div style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255, 255, 255, 0.45)', marginTop: '10px' }}>
                    Includes custom feasibility analysis & security review
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
