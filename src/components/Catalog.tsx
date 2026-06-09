import React from 'react';
import { boards } from '../data/boards';

export const Catalog: React.FC = () => {
  return (
    <section id="catalog" style={{ background: 'var(--bg)', position: 'relative' }}>
      {/* Catalog Section Header */}
      <div
        className="reveal-on-scroll"
        style={{
          padding: '80px 5vw 48px 52px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '3rem',
          flexWrap: 'wrap',
          background: 'var(--bg)',
        }}
      >
        <div>
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
            <span style={{ width: '20px', height: '1px', background: 'var(--accent)', display: 'block' }} />
            Modelos Disponíveis
          </div>
          <h2 className="text-anton" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)', textTransform: 'uppercase' }}>
            CATÁLOGO TÉCNICO
          </h2>
        </div>
        <p
          className="text-mono"
          style={{
            maxWidth: '320px',
            fontSize: '0.65rem',
            letterSpacing: '0.08em',
            color: 'var(--muted)',
            lineHeight: 1.7,
          }}
        >
          Cada shape foi projetado sob parâmetros específicos de hidrodinâmica, volume e rocker. Encontre a prancha ideal para o seu nível e o tipo de onda que quer surfar.
        </p>
      </div>

      {/* Product List */}
      <div>
        {boards.map((board, index) => {
          const isAlt = index % 2 !== 0;
          return (
            <div
              key={board.id}
              id={board.id}
              className="board-entry reveal-on-scroll"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: '100vh',
                position: 'relative',
                borderBottom: '1px solid var(--border)',
                overflow: 'hidden',
              }}
            >
              {/* Board Visual Frame */}
              <div
                className="board-img-frame"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRight: isAlt ? 'none' : '1px solid var(--border)',
                  borderLeft: isAlt ? '1px solid var(--border)' : 'none',
                  order: isAlt ? 2 : 1,
                  padding: '60px 0',
                }}
              >
                {/* Tech drawing overlays (grid texture) */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 24px, rgba(255, 255, 255, 0.005) 24px, rgba(255, 255, 255, 0.005) 25px)',
                  }}
                />

                {/* Big watermark background letter */}
                <div
                  className="text-anton"
                  style={{
                    position: 'absolute',
                    fontSize: 'clamp(8rem, 20vw, 22rem)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.01em',
                    color: 'var(--text)',
                    opacity: 0.012,
                    whiteSpace: 'nowrap',
                    bottom: '-2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    lineHeight: 1,
                  }}
                >
                  {board.bgWord}
                </div>

                {/* Volume watermark */}
                <div
                  className="text-anton"
                  style={{
                    position: 'absolute',
                    top: '2.5rem',
                    right: '2.5rem',
                    fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
                    color: 'var(--accent)',
                    opacity: 0.045,
                    letterSpacing: '0.02em',
                    pointerEvents: 'none',
                    lineHeight: 1,
                    textAlign: 'right',
                  }}
                >
                  {board.volume.replace(/\s+/g, '')}
                </div>

                {/* Outer frame coordinate details */}
                <div
                  className="text-mono"
                  style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '2rem',
                    zIndex: 3,
                    fontSize: '0.52rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(138, 138, 138, 0.4)',
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ display: 'block' }}>SIZE: {board.sizes}</span>
                  <span style={{ display: 'block' }}>FINS: {board.fins}</span>
                  <span style={{ display: 'block' }}>COORDS: {board.coordinates}</span>
                </div>

                {/* Main Surfboard Image */}
                <div className="board-img-wrapper" style={{ width: '48%', maxWidth: '280px', position: 'relative', zIndex: 2 }}>
                  <img
                    src={board.mainImage}
                    alt={`${board.category} — ${board.name}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.85))',
                      transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onError={(e) => {
                      // fallback to a clean SVG silhouette if image fails to load
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const svgFallback = target.nextElementSibling as HTMLElement;
                      if (svgFallback) svgFallback.style.display = 'block';
                    }}
                    loading="lazy"
                  />
                  
                  {/* Blueprint fallback SVG */}
                  <svg
                    style={{ display: 'none', width: '100%', opacity: 0.12 }}
                    viewBox="0 0 200 460"
                    fill="none"
                    stroke="var(--text)"
                    strokeWidth="1.5"
                  >
                    <path d="M100 10C135 10 162 48 165 125C168 188 165 290 158 355C148 408 130 450 100 460C70 450 52 408 42 355C35 290 32 188 35 125C38 48 65 10 100 10Z" />
                    <line x1="100" y1="10" x2="100" y2="460" stroke="var(--accent)" strokeDasharray="5 8" />
                    <path d="M40,280 Q70,272 100,270 Q130,272 160,280" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                  </svg>
                </div>
              </div>

              {/* Board Info Column */}
              <div
                className="board-info-side"
                style={{
                  padding: '60px 4.5vw',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  background: 'var(--bg)',
                  order: isAlt ? 1 : 2,
                }}
              >
                {/* Meta Header */}
                <div
                  className="text-mono"
                  style={{
                    fontSize: '0.5rem',
                    letterSpacing: '0.38em',
                    textTransform: 'uppercase',
                    color: 'rgba(138, 138, 138, 0.4)',
                    marginBottom: '1rem',
                  }}
                >
                  {board.number} / 06
                </div>

                <div
                  className="text-mono"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '0.58rem',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                  }}
                >
                  <span style={{ width: '14px', height: '1px', background: 'var(--accent)', display: 'block' }} />
                  {board.category}
                </div>

                <h3
                  className="text-anton"
                  style={{
                    fontSize: 'clamp(2.8rem, 5.5vw, 6.2rem)',
                    lineHeight: 0.88,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                    marginBottom: '1.8rem',
                  }}
                >
                  {board.name.split(' ').map((word, idx) => (
                    <span key={idx} style={{ display: 'block' }}>
                      {word}
                    </span>
                  ))}
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--muted)',
                    lineHeight: 1.8,
                    maxWidth: '420px',
                    marginBottom: '2rem',
                  }}
                >
                  {board.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.25rem' }}>
                  {board.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-mono catalog-feel-tag"
                      style={{
                        fontSize: '0.5rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: tIdx === 0 ? 'var(--accent)' : 'var(--muted)',
                        border: '1px solid var(--border)',
                        borderColor: tIdx === 0 ? 'rgba(179, 18, 23, 0.3)' : 'var(--border)',
                        padding: '0.28rem 0.7rem',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Specs Blueprint Table */}
                <div
                  style={{
                    borderTop: '1px solid var(--border)',
                    marginBottom: '2.5rem',
                    width: '100%',
                    maxWidth: '420px',
                  }}
                >
                  <div className="spec-row-item">
                    <span className="spec-key text-mono">Tamanhos</span>
                    <span className="spec-val text-mono">{board.sizes}</span>
                  </div>
                  <div className="spec-row-item highlight-row">
                    <span className="spec-key text-mono">Volume</span>
                    <span className="spec-val text-mono">{board.volume}</span>
                  </div>
                  <div className="spec-row-item">
                    <span className="spec-key text-mono">Quilhas Setup</span>
                    <span className="spec-val text-mono">{board.fins}</span>
                  </div>
                  <div className="spec-row-item">
                    <span className="spec-key text-mono">Rabeta (Tail)</span>
                    <span className="spec-val text-mono">{board.tail}</span>
                  </div>
                  <div className="spec-row-item">
                    <span className="spec-key text-mono">Tipo de Rocker</span>
                    <span className="spec-val text-mono">{board.rocker}</span>
                  </div>
                  <div className="spec-row-item">
                    <span className="spec-key text-mono">Indicado para</span>
                    <span className="spec-val text-mono">{board.waveType}</span>
                  </div>
                </div>

                {/* CTA Action */}
                <div style={{ alignSelf: 'flex-start' }}>
                  <a
                    href={`https://wa.me/5548991663544?text=${encodeURIComponent(board.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium"
                  >
                    Encomendar esse shape ➔
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .board-entry:hover .board-img-wrapper img {
          transform: rotate(-3deg) scale(1.04);
        }
        .spec-row-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--border);
          padding: 0.8rem 0;
          transition: background-color 0.2s ease;
        }
        .spec-row-item:hover {
          background-color: rgba(255, 255, 255, 0.01);
        }
        .spec-key {
          font-size: 0.62rem;
          color: rgba(138, 138, 138, 0.4);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .spec-val {
          font-size: 0.62rem;
          color: var(--text);
          font-weight: 500;
          letter-spacing: 0.06em;
          text-align: right;
        }
        .highlight-row .spec-val {
          color: var(--accent);
          font-weight: 700;
        }
        @media (max-width: 900px) {
          .board-entry {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .board-img-frame {
            order: -1 !important;
            min-height: 380px !important;
            border: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
          .board-info-side {
            order: 1 !important;
            padding: 3rem 36px !important;
          }
          .board-entry:hover .board-img-wrapper img {
            transform: none !important;
          }
        }
        @media (max-width: 600px) {
          .board-info-side {
            padding: 2.5rem 5vw !important;
          }
        }
      `}</style>
    </section>
  );
};
