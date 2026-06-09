import React from 'react';

export const ShaperBio: React.FC = () => {
  return (
    <section
      id="shaper-bio"
      style={{
        background: 'var(--bg)',
        padding: '80px 5vw 80px 52px',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
      }}
    >
      <div className="reveal-on-scroll" style={{ maxWidth: '1000px' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div
            className="text-mono"
            style={{
              fontSize: '0.55rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span style={{ width: '20px', height: '1px', background: 'var(--accent)' }} />
            O Shaper
          </div>
          <h2 className="text-anton" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)', textTransform: 'uppercase', marginBottom: '2rem' }}>
            JP: Mais de 500 Pranchas Shapadas
          </h2>
        </div>

        {/* Bio Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Bio Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'var(--text)',
                fontWeight: 300,
              }}
            >
              Com mais de 15 anos dedicados à arte do shaping, JP desenvolveu uma filosofia única de pranchas artesanais em Florianópolis. Cada shape é resultado de pesquisa contínua, testes em condições reais e feedback direto de surfistas.
            </p>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'var(--text)',
                fontWeight: 300,
              }}
            >
              Especializado em custom shapes, JP trabalha com precisão milimétrica no traço de cada prancha. Seu foco é entender perfeitamente o seu nível, as ondas que quer surfar e criar a prancha perfeita para sua sessão ideal.
            </p>
            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: 'var(--muted)',
                fontWeight: 300,
                fontStyle: 'italic',
              }}
            >
              "It comes in waves" — a filosofia de JP é respeitar o ritmo natural do mar e criar pranchas que se adaptam perfeitamente a cada tipo de condição.
            </p>
          </div>

          {/* Right: Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div
              style={{
                border: '1px solid var(--border)',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.01)',
              }}
            >
              <div className="text-anton" style={{ fontSize: '3rem', color: 'var(--accent)', lineHeight: 1 }}>
                500+
              </div>
              <p className="text-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--muted)', marginTop: '0.5rem' }}>
                PRANCHAS SHAPADAS
              </p>
            </div>

            <div
              style={{
                border: '1px solid var(--border)',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.01)',
              }}
            >
              <div className="text-anton" style={{ fontSize: '3rem', color: 'var(--accent)', lineHeight: 1 }}>
                15+
              </div>
              <p className="text-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--muted)', marginTop: '0.5rem' }}>
                ANOS DE EXPERIÊNCIA
              </p>
            </div>

            <div
              style={{
                border: '1px solid var(--border)',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.01)',
              }}
            >
              <div className="text-anton" style={{ fontSize: '3rem', color: 'var(--accent)', lineHeight: 1 }}>
                100%
              </div>
              <p className="text-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--muted)', marginTop: '0.5rem' }}>
                ARTESANAL E CUSTOMIZADO
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #shaper-bio {
            padding: 60px 5vw !important;
          }
          #shaper-bio > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          #shaper-bio {
            padding: 40px 5vw !important;
          }
        }
      `}</style>
    </section>
  );
};
