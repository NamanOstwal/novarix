import type { FC } from 'react'

interface ResearchArticle {
  id: string
  date: string
  category: string
  title: string
  description: string
  readTime: string
}

const ARTICLES: ResearchArticle[] = [
  {
    id: 'saaras-v4',
    date: 'Oct 01, 2026',
    category: 'Announcement',
    title: 'Introducing Novarix Saaras V4: Multi-Agent Reasoning for Operations',
    description: 'A breakthrough in autonomous decision synthesis and deterministic policy alignment for enterprise-grade workloads with zero manual interventions.',
    readTime: '4 min read',
  },
  {
    id: 'vision-21',
    date: 'Sep 24, 2026',
    category: 'Research',
    title: 'Novarix Vision 2.1: Pushing the Pareto frontier of document intelligence',
    description: 'Sub-millisecond spatial document understanding and dense tabular reconstruction across unstructured enterprise scans and complex multilingual forms.',
    readTime: '6 min read',
  },
  {
    id: 'diar-bench',
    date: 'Aug 11, 2026',
    category: 'Benchmark',
    title: 'Indic DiarBench: A Joint Diarization-ASR Benchmark Dataset',
    description: 'Open benchmark evaluating simultaneous speaker diarization and conversational ASR across 22 Indian languages with diverse background acoustic noise.',
    readTime: '8 min read',
  },
]

export const ResearchUpdates: FC = () => {
  return (
    <section
      id="research"
      data-section-reveal
      style={{
        position: 'relative',
        width: '100%',
        padding: '80px 24px 100px',
        backgroundColor: '#0C0B0C',
        overflow: 'hidden',
      }}
    >
      <div className="container-sarvam" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Section Heading with Superconscious Accent */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="sc-telemetry-badge" style={{ marginBottom: '16px' }}>
              <span className="dot" />
              <span>Frontier Research & Benchmarks</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-season-mix)',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 500,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '10px',
                textShadow: '0 0 35px rgba(0, 112, 243, 0.3)',
              }}
            >
              Research & Updates
            </h2>
            <p style={{ fontFamily: 'var(--font-matter)', fontSize: '17px', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.6 }}>
              Frontier research powering sovereign AI architectures, reasoning benchmarks, and enterprise automation.
            </p>
          </div>

          <a
            href="#research"
            style={{
              fontFamily: 'var(--font-matter)',
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--neon-cyan)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(0, 240, 255, 0.08)',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              transition: 'all 0.25s ease',
            }}
          >
            <span>View All Papers</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* 3 Research Cards in Superconscious Bento Tiles */}
        <div
          data-blog-grid
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px',
          }}
        >
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="sc-bento-tile"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '34px',
                cursor: 'pointer',
              }}
            >
              <div>
                {/* Date & Category tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span className="sc-telemetry-badge">
                    <span className="dot" />
                    <span>{article.category}</span>
                  </span>
                  <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>{article.date}</span>
                </div>

                {/* Article Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-matter)',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: '1.4',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {article.title}
                </h3>

                {/* Article Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-matter)',
                    fontSize: '14.5px',
                    lineHeight: '1.65',
                    color: 'rgba(255, 255, 255, 0.68)',
                  }}
                >
                  {article.description}
                </p>
              </div>

              {/* Bottom Meta */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  marginTop: '28px',
                }}
              >
                <span style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.45)', fontWeight: 500 }}>
                  {article.readTime}
                </span>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--neon-cyan)',
                  }}
                >
                  <span>Read Paper</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
