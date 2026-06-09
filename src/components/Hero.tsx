import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: '60px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg)',
      }}
    >
      {/* Background Grid */}
      <div className="tech-grid-overlay" />
      
      {/* Editorial Red Bar on Right edge of Grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '3px',
          height: '100%',
          background: 'linear-gradient(180deg, var(--accent) 0%, var(--accent-dark) 60%, transparent 100%)',
          zIndex: 2,
        }}
      />

      {/* Vertical Shaper Signature */}
      <div
        className="text-mono"
        style={{
          position: 'absolute',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          transformOrigin: 'center',
          fontSize: '0.52rem',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          color: 'rgba(138, 138, 138, 0.25)',
          whiteSpace: 'nowrap',
          zIndex: 3,
        }}
      >
        Florianópolis, SC — Brasil — Est. 2020
      </div>

      {/* Main Content Layout */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 420px',
          alignItems: 'center',
          padding: '0 80px 0 52px',
          position: 'relative',
          zIndex: 2,
          gap: 0,
        }}
        className="hero-main-container"
      >
        {/* Left Side Info */}
        <div style={{ paddingRight: '4vw' }} className="hero-left-side">
          <div
            className="text-mono"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.58rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '2rem',
            }}
          >
            <span style={{ width: '28px', height: '1px', background: 'var(--accent)' }} />
            Handcrafted Performance Surfboards
          </div>
          
          <h1
            className="text-anton"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 8.5rem)',
              lineHeight: 0.88,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              color: 'var(--text)',
            }}
          >
            JP
            <span
              style={{
                display: 'block',
                lineHeight: 0.82,
                color: 'var(--accent)',
              }}
            >
              SURF
            </span>
            BOARDS
          </h1>

          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              alignItems: 'baseline',
              gap: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <span style={taglineItemStyle}>Handcrafted</span>
            <span style={taglineItemStyle}>Performance</span>
            <span style={taglineItemStyle}>Custom Shapes</span>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            <a href="#catalog" className="btn-premium">
              Catálogo técnico ➔
            </a>
            <a href="#about" className="btn-premium-outline">
              A fábrica
            </a>
          </div>
        </div>

        {/* Right Side Blueprint */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderLeft: '1px solid var(--border)',
          }}
          className="hero-right-side"
        >
          <div className="hero-blueprint-container">
            <svg
              style={{ width: '100%', height: '100%' }}
              viewBox="0 0 220 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Glow */}
              <path
                d="M110 14C152 14 185 60 188 150C191 218 189 318 181 396C170 450 152 508 110 520C68 508 50 450 39 396C31 318 29 218 32 150C35 60 68 14 110 14Z"
                stroke="rgba(179, 18, 23, 0.08)"
                strokeWidth="12"
                fill="none"
              />
              {/* Main Board Outline */}
              <path
                d="M110 14C152 14 185 60 188 150C191 218 189 318 181 396C170 450 152 508 110 520C68 508 50 450 39 396C31 318 29 218 32 150C35 60 68 14 110 14Z"
                stroke="rgba(245, 245, 245, 0.12)"
                strokeWidth="1.2"
                fill="rgba(245, 245, 245, 0.01)"
              />
              {/* Center Stringer */}
              <line
                x1="110"
                y1="14"
                x2="110"
                y2="520"
                stroke="rgba(179, 18, 23, 0.5)"
                strokeWidth="1"
                strokeDasharray="6 9"
              />
              {/* Rail/Foam curves */}
              <path d="M52,190 Q88,181 110,179 Q132,181 168,190" stroke="rgba(245,245,245,0.06)" strokeWidth="1" fill="none" />
              <path d="M34,290 Q72,281 110,279 Q148,281 186,290" stroke="rgba(245,245,245,0.06)" strokeWidth="1" fill="none" />
              <path d="M38,380 Q74,371 110,369 Q146,371 182,380" stroke="rgba(245,245,245,0.06)" strokeWidth="1" fill="none" />
              {/* Fins */}
              <rect x="104" y="456" width="5" height="42" rx="1" stroke="rgba(179,18,23,0.7)" strokeWidth="1" fill="none" />
              <rect
                x="82"
                y="467"
                width="4.5"
                height="30"
                rx="1"
                stroke="rgba(179,18,23,0.4)"
                strokeWidth="1"
                fill="none"
                transform="rotate(-11 84 482)"
              />
              <rect
                x="136"
                y="467"
                width="4.5"
                height="30"
                rx="1"
                stroke="rgba(179,18,23,0.4)"
                strokeWidth="1"
                fill="none"
                transform="rotate(11 138 482)"
              />
              {/* Brand stamp on stringer */}
              <text
                x="110"
                y="110"
                textAnchor="middle"
                className="text-anton"
                fontSize="24"
                fill="rgba(245, 245, 245, 0.05)"
                letterSpacing="5"
              >
                JP
              </text>
              {/* Dimension grids */}
              <line x1="25" y1="150" x2="25" y2="396" stroke="rgba(179, 18, 23, 0.2)" strokeWidth="0.8" />
              <line x1="22" y1="150" x2="28" y2="150" stroke="rgba(179, 18, 23, 0.2)" strokeWidth="0.8" />
              <line x1="22" y1="396" x2="28" y2="396" stroke="rgba(179, 18, 23, 0.2)" strokeWidth="0.8" />
              <text
                x="18"
                y="275"
                textAnchor="middle"
                className="text-mono"
                fontSize="7"
                fill="rgba(179, 18, 23, 0.4)"
                transform="rotate(-90,18,275)"
              >
                DECK LENGTH
              </text>
            </svg>
            <div
              className="text-mono"
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <div style={specsOverlayStyle}>Shape Manual</div>
              <div style={specsOverlayStyle}>Florianópolis</div>
              <div style={specsOverlayStyle}>Blank Virgem</div>
            </div>
            <span
              className="text-mono"
              style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '0.48rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                whiteSpace: 'nowrap',
              }}
            >
              [ SHAPER BLUEPRINT ]
            </span>
          </div>
        </div>
      </div>

      {/* Model Shortcuts Bottom bar */}
      <div
        style={{
          padding: '1.25rem 4vw 1.25rem 52px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          position: 'relative',
          zIndex: 2,
        }}
        className="hero-foot-bar"
      >
        <span
          className="text-mono"
          style={{
            fontSize: '0.55rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(138, 138, 138, 0.4)',
          }}
        >
          Modelos
        </span>
        <div
          className="text-mono hero-foot-links"
          style={{
            display: 'flex',
            gap: '2.2rem',
            marginLeft: 'auto',
          }}
        >
          <a href="#performance" style={footLinkStyle}>
            Performance
          </a>
          <a href="#fish" style={footLinkStyle}>
            Fish
          </a>
          <a href="#funboard" style={footLinkStyle}>
            Funboard
          </a>
          <a href="#longboard" style={footLinkStyle}>
            Longboard
          </a>
          <a href="#step-up" style={footLinkStyle}>
            Step Up
          </a>
          <a href="#custom" style={footLinkStyle}>
            Heavy Water
          </a>
        </div>
      </div>

      <style>{`
        .hero-blueprint-container {
          position: relative;
          width: 200px;
          height: 520px;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-blueprint-container:hover {
          transform: rotate(-3deg) scale(1.03);
        }
        @media (max-width: 1024px) {
          .hero-main-container {
            grid-template-columns: 1fr !important;
            padding: 3rem 5vw 3rem 52px !important;
            min-height: calc(100vh - 60px) !important;
          }
          .hero-right-side {
            display: none !important;
          }
          .hero-foot-links {
            display: none !important;
          }
        }
        @media (max-width: 900px) {
          .hero-main-container {
            padding-left: 36px !important;
          }
          .hero-foot-bar {
            padding-left: 36px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-main-container {
            padding-left: 5vw !important;
          }
          .hero-foot-bar {
            padding-left: 5vw !important;
          }
        }
        .hero-foot-links a:hover {
          color: var(--accent) !important;
        }
      `}</style>
    </section>
  );
};

const taglineItemStyle: React.CSSProperties = {
  fontFamily: "'Space Mono', monospace",
  fontSize: '0.62rem',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.6rem',
};

const specsOverlayStyle: React.CSSProperties = {
  fontSize: '0.48rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'rgba(245, 245, 245, 0.35)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const footLinkStyle: React.CSSProperties = {
  fontSize: '0.52rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  textDecoration: 'none',
  transition: 'color 0.15s ease',
};
