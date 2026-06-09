import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { Process } from './components/Process';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Stringer scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection Observer for Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once animated in
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Find all revealable elements
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Stringer (Vertical board centerline progress) */}
      <div className="stringer-line">
        <div
          className="stringer-line-progress"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Assembly */}
      <Header />
      
      <main>
        <Hero />
        <About />
        <Catalog />
        <Process />
        <Gallery />
      </main>

      <Footer />

      {/* Floating Desktop WhatsApp Button */}
      <a
        href="https://wa.me/5548991663544?text=Olá,%20vim%20pelo%20site%20da%20JP%20Surf%20Boards."
        target="_blank"
        rel="noopener noreferrer"
        className="float-wa-widget"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'var(--accent)', transition: 'fill 0.2s ease' }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.85L.057 23.427a.75.75 0 0 0 .916.916l5.577-1.476A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.932 0-3.742-.522-5.295-1.432l-.38-.225-3.944 1.044 1.044-3.944-.225-.38A9.952 9.952 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
        </svg>
      </a>

      {/* Mobile Sticky CTA bar */}
      <div className="mobile-sticky-cta">
        <a
          href="https://wa.me/5548991663544?text=Olá,%20vim%20pelo%20site%20da%20JP%20Surf%20Boards."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          Falar com a fábrica ➔
        </a>
      </div>

      <style>{`
        .float-wa-widget {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 600;
          width: 48px;
          height: 48px;
          background: var(--bg);
          border: 1px solid var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.4);
        }
        
        .float-wa-widget:hover {
          background: var(--accent);
        }
        
        .float-wa-widget:hover svg {
          fill: #fff !important;
        }

        .mobile-sticky-cta {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 590;
          background: rgba(5, 5, 5, 0.96);
          backdrop-filter: blur(12px);
          border-top: 1px solid var(--border);
          padding: 0.65rem 1rem;
        }

        @media (max-width: 600px) {
          .mobile-sticky-cta {
            display: block !important;
          }
          .float-wa-widget {
            bottom: 5rem !important;
          }
        }
      `}</style>
    </>
  );
};
export default App;
