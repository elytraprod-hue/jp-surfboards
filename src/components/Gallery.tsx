import React from 'react';

interface GalleryItem {
  title: string;
  subtitle: string;
  imgSrc?: string;
  isBlueprint?: boolean;
  slug?: string;
  blueprintSvg?: React.ReactNode;
}

export const Gallery: React.FC = () => {
  const items: GalleryItem[] = [
    {
      title: "Double Viper Specs",
      subtitle: "Performance / 01",
      isBlueprint: true,
      slug: "performance",
      blueprintSvg: (
        <svg viewBox="0 0 100 240" fill="none" stroke="var(--accent)" strokeWidth="0.8" style={{ width: '60%', opacity: 0.25 }}>
          <path d="M50 5C70 5 86 25 88 70C90 105 88 165 82 200C74 225 64 235 50 240C36 235 26 225 18 200C12 165 10 105 12 70C14 25 30 5 50 5Z" />
          <line x1="50" y1="5" x2="50" y2="240" stroke="rgba(245,245,245,0.15)" strokeDasharray="3 5" />
          <path d="M20,120 Q50,115 80,120" stroke="rgba(245,245,245,0.1)" strokeWidth="0.5" />
          <path d="M15,160 Q50,155 85,160" stroke="rgba(245,245,245,0.1)" strokeWidth="0.5" />
        </svg>
      )
    },
    {
      title: "A Fábrica",
      subtitle: "Florianópolis, SC",
      imgSrc: "/boards/webp/factory-about.webp",
    },
    {
      title: "Dark Rabbit Profile",
      subtitle: "Fish Twin-fin / 02",
      isBlueprint: true,
      slug: "fish",
      blueprintSvg: (
        <svg viewBox="0 0 100 240" fill="none" stroke="var(--accent)" strokeWidth="0.8" style={{ width: '68%', opacity: 0.25 }}>
          <path d="M50 8C70 8 88 25 90 70C92 105 88 165 80 200C72 225 64 232 50 236C36 232 28 225 20 200C12 165 8 105 10 70C12 25 30 8 50 8Z" />
          <line x1="50" y1="8" x2="50" y2="236" stroke="rgba(245,245,245,0.15)" strokeDasharray="3 5" />
          <path d="M16,190 Q50,195 84,190" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
        </svg>
      )
    },
    {
      title: "Wasabi Contour",
      subtitle: "Funboard / 03",
      isBlueprint: true,
      slug: "funboard",
      blueprintSvg: (
        <svg viewBox="0 0 100 240" fill="none" stroke="var(--accent)" strokeWidth="0.8" style={{ width: '58%', opacity: 0.25 }}>
          <path d="M50 6C66 6 82 22 84 65C86 100 84 170 78 205C72 228 62 236 50 239C38 236 28 228 22 205C16 170 14 100 16 65C18 22 34 6 50 6Z" />
          <line x1="50" y1="6" x2="50" y2="239" stroke="rgba(245,245,245,0.15)" strokeDasharray="3 5" />
        </svg>
      )
    },
    {
      title: "Skeletton Bird Line",
      subtitle: "Longboard / 04",
      isBlueprint: true,
      slug: "longboard",
      blueprintSvg: (
        <svg viewBox="0 0 100 240" fill="none" stroke="var(--accent)" strokeWidth="0.8" style={{ width: '52%', opacity: 0.25 }}>
          <path d="M50 4C62 4 78 18 80 60C82 95 80 180 75 215C70 234 60 238 50 240C40 238 30 234 25 215C20 180 18 95 20 60C22 18 38 4 50 4Z" />
          <line x1="50" y1="4" x2="50" y2="240" stroke="rgba(245,245,245,0.15)" strokeDasharray="3 5" />
        </svg>
      )
    },
    {
      title: "Black Buffalo Detail",
      subtitle: "Step Up / 05",
      isBlueprint: true,
      slug: "step-up",
      blueprintSvg: (
        <svg viewBox="0 0 100 240" fill="none" stroke="var(--accent)" strokeWidth="0.8" style={{ width: '60%', opacity: 0.25 }}>
          <path d="M50 5C68 5 84 25 86 70C88 105 86 170 78 205C70 230 58 237 50 240C42 237 30 230 22 205C14 170 12 105 14 70C16 25 32 5 50 5Z" />
          <line x1="50" y1="5" x2="50" y2="240" stroke="rgba(245,245,245,0.15)" strokeDasharray="3 5" />
        </svg>
      )
    },
    {
      title: "Phantom Shark Curve",
      subtitle: "Heavy Water / 06",
      isBlueprint: true,
      slug: "custom",
      blueprintSvg: (
        <svg viewBox="0 0 100 240" fill="none" stroke="var(--accent)" strokeWidth="0.8" style={{ width: '55%', opacity: 0.25 }}>
          <path d="M50 5C65 5 80 28 82 72C84 105 82 175 74 210C66 232 55 238 50 240C45 238 34 232 26 210C18 175 16 105 18 72C20 28 35 5 50 5Z" />
          <line x1="50" y1="5" x2="50" y2="240" stroke="rgba(245,245,245,0.15)" strokeDasharray="3 5" />
        </svg>
      )
    },
    {
      title: "Bus Driver Outline",
      subtitle: "Daily Driver / 07",
      isBlueprint: true,
      slug: "bus-driver",
      blueprintSvg: (
        <svg viewBox="0 0 100 240" fill="none" stroke="var(--accent)" strokeWidth="0.8" style={{ width: '60%', opacity: 0.25 }}>
          <path d="M50 5C70 5 86 25 88 70C90 105 88 165 82 200C74 225 64 235 50 240C36 235 26 225 18 200C12 165 10 105 12 70C14 25 30 5 50 5Z" />
          <line x1="50" y1="5" x2="50" y2="240" stroke="rgba(245,245,245,0.15)" strokeDasharray="3 5" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="gallery"
      style={{
        background: 'var(--bg)',
        padding: '80px 4vw 80px 52px',
        borderBottom: '1px solid var(--border)',
      }}
      className="reveal-on-scroll"
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '3rem',
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
            Shaping & Laboratory
          </div>
          <h2 className="text-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', textTransform: 'uppercase' }}>
            Galeria de Linhas
          </h2>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="gallery-grid-container">
        {items.map((item, idx) => (
          <div key={idx} className={`gallery-item g-card-${idx + 1}`}>
            {item.isBlueprint ? (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
                className="blueprint-card"
              >
                {/* Tech scanline / grids */}
                <div className="blueprint-grid-bg" />
                
                {item.blueprintSvg}
                
                {/* Board thumbnail in absolute overlay for interactiveness */}
                <img
                  src={`/boards/thumbs/${item.slug}.webp`}
                  alt={item.title}
                  style={{
                    position: 'absolute',
                    height: '65%',
                    width: 'auto',
                    opacity: 0,
                    transform: 'translateY(10px)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    pointerEvents: 'none',
                  }}
                  className="blueprint-thumb-img"
                  loading="lazy"
                />

                <span
                  className="text-mono gallery-caption"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    fontSize: '0.48rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    padding: '0.6rem 0.8rem',
                    background: 'rgba(5, 5, 5, 0.8)',
                    borderTop: '1px solid var(--border)',
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.title}</span>
                  <span style={{ color: 'var(--accent)' }}>{item.subtitle}</span>
                </span>
              </div>
            ) : (
              // Image card (A fábrica)
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  background: 'var(--surface-2)',
                  transition: 'all 0.3s ease',
                }}
                className="photo-card"
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    opacity: 0.65,
                    transition: 'transform 0.5s ease, opacity 0.5s ease',
                  }}
                  loading="lazy"
                />
                
                <span
                  className="text-mono gallery-caption"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    fontSize: '0.48rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                    padding: '0.6rem 0.8rem',
                    background: 'rgba(5, 5, 5, 0.85)',
                    borderTop: '1px solid var(--border)',
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.title}</span>
                  <span style={{ color: 'var(--accent)' }}>{item.subtitle}</span>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .gallery-grid-container {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 160px;
          gap: 6px;
        }
        
        .blueprint-grid-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.005) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.005) 1px, transparent 1px);
          background-size: 15px 15px;
        }

        .gallery-item {
          cursor: pointer;
        }
        
        /* Grid mapping classes */
        .g-card-1 { grid-column: span 5; grid-row: span 2; }
        .g-card-2 { grid-column: span 3; grid-row: span 1; }
        .g-card-3 { grid-column: span 4; grid-row: span 2; }
        .g-card-4 { grid-column: span 3; grid-row: span 1; }
        .g-card-5 { grid-column: span 4; grid-row: span 2; }
        .g-card-6 { grid-column: span 3; grid-row: span 1; }
        .g-card-7 { grid-column: span 5; grid-row: span 1; }
        .g-card-8 { grid-column: span 3; grid-row: span 1; }

        /* Hover states */
        .blueprint-card:hover {
          border-color: var(--accent) !important;
          box-shadow: 0 0 15px rgba(179, 18, 23, 0.15);
        }
        .blueprint-card:hover svg {
          opacity: 0.05 !important;
          transform: scale(0.95);
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        .blueprint-card:hover .blueprint-thumb-img {
          opacity: 0.9 !important;
          transform: translateY(0) rotate(-3deg);
        }
        .photo-card:hover {
          border-color: var(--accent) !important;
        }
        .photo-card:hover img {
          transform: scale(1.03);
          opacity: 0.85 !important;
        }

        @media (max-width: 900px) {
          #gallery {
            padding-left: 36px !important;
          }
          .gallery-grid-container {
            grid-template-columns: repeat(6, 1fr) !important;
            grid-auto-rows: 150px !important;
          }
          .g-card-1 { grid-column: span 3; grid-row: span 2; }
          .g-card-2 { grid-column: span 3; grid-row: span 1; }
          .g-card-3 { grid-column: span 3; grid-row: span 2; }
          .g-card-4 { grid-column: span 3; grid-row: span 1; }
          .g-card-5 { grid-column: span 3; grid-row: span 2; }
          .g-card-6 { grid-column: span 3; grid-row: span 1; }
          .g-card-7 { grid-column: span 6; grid-row: span 1; }
          .g-card-8 { grid-column: span 3; grid-row: span 1; }
        }

        @media (max-width: 600px) {
          #gallery {
            padding-left: 5vw !important;
            padding-right: 5vw !important;
          }
          .gallery-grid-container {
            grid-template-columns: 1fr 1fr !important;
            grid-auto-rows: 140px !important;
            gap: 4px !important;
          }
          .g-card-1, .g-card-2, .g-card-3, .g-card-4, .g-card-5, .g-card-6, .g-card-8 {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
          .g-card-7 {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};
