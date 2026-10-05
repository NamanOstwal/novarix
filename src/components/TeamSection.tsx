import type { FC } from 'react'
import { Globe, Shield, Terminal, Award } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  bio: string
  specialty: string
  linkedin?: string
  github?: string
  avatarInitial: string
}

const TEAM: TeamMember[] = [
  {
    name: 'Naman Ostwal',
    role: 'Founder & Chief AI Architect',
    bio: 'Systems engineer and AI researcher specializing in multi-agent orchestration, sovereign foundation model infrastructure, and enterprise RAG systems.',
    specialty: 'Distributed AI Infrastructure & Agent Systems',
    linkedin: 'https://www.linkedin.com/in/namanostwal',
    github: 'https://github.com/NamanOstwal',
    avatarInitial: 'NO'
  },
  {
    name: 'Core Engineering & Research Swarm',
    role: 'Systems, SRE & ML Infrastructure',
    bio: 'Experienced backend, distributed systems, and ML engineers dedicated to low-latency inference, deterministic safety guardrails, and enterprise VPC compliance.',
    specialty: 'Sub-100ms Inference & Air-Gapped Deployments',
    github: 'https://github.com/NamanOstwal/novarix',
    avatarInitial: 'NX'
  }
]

export const TeamSection: FC = () => {
  return (
    <section
      id="team"
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
          <span>About Novarix</span>
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
          Engineers Building Production AI, Not Toy Chatbots
        </h2>

        {/* Founding Philosophy Callout */}
        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.85)',
            textAlign: 'center',
            maxWidth: '780px',
            lineHeight: 1.65,
            marginBottom: '48px',
          }}
        >
          <span style={{ color: 'var(--neon-cyan)', fontWeight: 600 }}>"Who are you trusting with your company's proprietary data?"</span>
          <br />
          We are engineers and researchers focused on building deterministic, secure, and sovereign AI systems that integrate directly into enterprise workflows with verifiable guarantees.
        </p>

        {/* Team Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '28px',
            width: '100%',
            maxWidth: '960px',
            marginBottom: '48px',
          }}
        >
          {TEAM.map((member, idx) => (
            <div
              key={idx}
              className="sc-bento-tile"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(21, 20, 25, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  {/* Initial Avatar */}
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '18px',
                      backgroundColor: 'rgba(0, 112, 243, 0.2)',
                      border: '1.5px solid var(--neon-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-matter)',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--neon-cyan)',
                      boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
                    }}
                  >
                    {member.avatarInitial}
                  </div>

                  <div>
                    <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '20px', fontWeight: 600, color: '#FFFFFF' }}>
                      {member.name}
                    </h3>
                    <div style={{ fontSize: '13.5px', color: 'var(--neon-cyan)', fontWeight: 500 }}>
                      {member.role}
                    </div>
                  </div>
                </div>

                <p style={{ fontFamily: 'var(--font-matter)', fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {member.bio}
                </p>

                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '12.5px',
                    color: 'rgba(255, 255, 255, 0.85)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Terminal size={14} color="var(--neon-cyan)" />
                  <span>{member.specialty}</span>
                </div>
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      fontSize: '12.5px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#00F0FF">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                )}

                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      fontSize: '12.5px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFFFFF">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Company Commitment Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            width: '100%',
            maxWidth: '960px',
          }}
        >
          <div style={{ padding: '18px 22px', borderRadius: '14px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Shield size={20} color="#10B981" />
            <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>Zero Data Retention Guarantees</span>
          </div>
          <div style={{ padding: '18px 22px', borderRadius: '14px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Award size={20} color="var(--neon-cyan)" />
            <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>Engineering-First Direct Support</span>
          </div>
          <div style={{ padding: '18px 22px', borderRadius: '14px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Globe size={20} color="#9780FF" />
            <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>Sovereign VPC Deployable Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}
