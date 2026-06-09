import React from 'react';

interface ProcessStep {
  label: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    label: "BLANK",
    title: "Seleção do Bloco",
    description: "Escolha do bloco virgem (PU ou EPS) com densidade e rocker ideais para o seu peso e tipo de onda."
  },
  {
    label: "SHAPE",
    title: "Shaping Artesanal",
    description: "Cada detalhe esculpido à mão pelo shaper: o outline, concaves, caimento de bordas e distribuição de flutuação."
  },
  {
    label: "LAMINAÇÃO",
    title: "Glassing Técnico",
    description: "Laminação em fibra de vidro e resina de alta qualidade. Camadas calculadas para peso, flexibilidade e resistência."
  },
  {
    label: "ACABAMENTO",
    title: "Lixamento e Setup",
    description: "Lixamento de precisão, instalação dos copos de quilha (FCS II ou Futures), polimento e arte personalizada."
  },
  {
    label: "MAR",
    title: "Pronta para o Mar",
    description: "Sua prancha finalizada, embalada com proteção e pronta para fazer o que foi shapada para fazer: entrar no mar."
  }
];

export const Process: React.FC = () => {
  return (
    <section
      id="order"
      style={{
        background: 'var(--surface-2)',
        padding: '80px 4vw 80px 52px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
      }}
      className="reveal-on-scroll"
    >
      {/* Background decoration */}
      <div className="diagonal-lines" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '4rem',
          position: 'relative',
          zIndex: 2,
        }}
        className="process-header"
      >
        <h2
          className="text-anton"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
            lineHeight: 0.88,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: 'var(--text)',
          }}
        >
          DO BLANK<br />
          <span style={{ color: 'var(--accent)' }}>AO MAR.</span>
        </h2>
        <div
          className="text-mono"
          style={{
            fontSize: '0.55rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            lineHeight: 1.6,
          }}
        >
          JP Surf Boards — Florianópolis, SC
          <br />
          27°14'S / 48°33'W
        </div>
      </div>

      {/* Horizontal Pipeline Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          border: '1px solid var(--border)',
          marginBottom: '3.5rem',
          position: 'relative',
          zIndex: 2,
          background: 'var(--surface)',
        }}
        className="process-grid"
      >
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="process-step-card"
            style={{
              borderRight: idx === steps.length - 1 ? 'none' : '1px solid var(--border)',
              padding: '2.5rem 1.8rem',
              position: 'relative',
              transition: 'background-color 0.2s ease',
            }}
          >
            {/* Arrow decoration */}
            {idx < steps.length - 1 && (
              <span
                className="text-mono step-arrow-icon"
                style={{
                  position: 'absolute',
                  right: '-10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  background: 'var(--surface)',
                  padding: '0 4px',
                  zIndex: 2,
                  transition: 'background-color 0.2s ease',
                }}
              >
                ➔
              </span>
            )}
            
            <div
              className="text-mono"
              style={{
                fontSize: '0.52rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '0.8rem',
              }}
            >
              {step.label}
            </div>
            
            <h4
              className="text-anton"
              style={{
                fontSize: '1.25rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--text)',
                marginBottom: '0.75rem',
              }}
            >
              {step.title}
            </h4>
            
            <p
              style={{
                fontSize: '0.75rem',
                color: 'var(--muted)',
                lineHeight: 1.6,
              }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Process Footer CTA */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
          borderTop: '1px solid var(--border)',
          paddingTop: '2.5rem',
          position: 'relative',
          zIndex: 2,
        }}
        className="process-footer"
      >
        <p
          style={{
            maxWidth: '420px',
            fontSize: '0.85rem',
            color: 'var(--muted)',
            lineHeight: 1.65,
          }}
        >
          Falar diretamente com o shaper no WhatsApp é o canal ideal para alinhar suas medidas, volume ideal e tirar dúvidas técnicas sobre a laminação.
        </p>
        <button
          onClick={() => {
            window.dispatchEvent(new CustomEvent('open-configurator'));
          }}
          className="btn-premium"
          style={{ cursor: 'pointer' }}
        >
          Iniciar Atendimento ➔
        </button>
      </div>

      <style>{`
        .process-step-card:hover {
          background-color: var(--surface-2) !important;
        }
        .process-step-card:hover .step-arrow-icon {
          background-color: var(--surface-2) !important;
        }
        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .process-step-card {
            border-right: 1px solid var(--border) !important;
            border-bottom: 1px solid var(--border) !important;
          }
          .process-step-card:nth-child(even) {
            border-right: none !important;
          }
          .process-step-card:last-child {
            border-bottom: none !important;
          }
          .step-arrow-icon {
            display: none !important;
          }
        }
        @media (max-width: 900px) {
          #order {
            padding-left: 36px !important;
          }
        }
        @media (max-width: 600px) {
          #order {
            padding-left: 5vw !important;
            padding-right: 5vw !important;
          }
          .process-grid {
            grid-template-columns: 1fr !important;
          }
          .process-step-card {
            border-right: none !important;
            padding: 2rem 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
