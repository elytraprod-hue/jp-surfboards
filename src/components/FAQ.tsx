import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Qual é o preço médio de uma prancha?',
    answer: 'Todas as pranchas começam em R$ 2.490. Este é nosso preço de entrada para a coleção completa. Customizações adicionais (cores especiais, grafismos, materiais premium) podem incrementar o valor final.',
  },
  {
    question: 'Quanto tempo demora para receber minha prancha?',
    answer: 'O tempo padrão é de 4 a 6 semanas a partir da confirmação do pedido. Este período inclui shaping, laminação e acabamento artesanal. Para pedidos expressos em Florianópolis, consulte disponibilidade direta via WhatsApp.',
  },
  {
    question: 'Vocês fazem cores e designs customizados?',
    answer: 'Sim! Cada prancha pode ser customizada completamente. Trabalhamos com diversas cores de resina, laminações especiais e grafismos personalizados. Consulte JP diretamente para ver opções e preços especiais.',
  },
  {
    question: 'Como funciona o processo de pedido?',
    answer: 'Use nosso Configurador para compartilhar suas informações (nível, tipo de onda, peso, altura). JP entrará em contato via WhatsApp para discussão técnica do shape, preço final e agendamento da produção.',
  },
  {
    question: 'Qual prancha é melhor para iniciante?',
    answer: 'Para iniciantes avançados, recomendamos o Funboard (Wasabi) pela versatilidade e facilidade de paddle. Para quem está começando, o Longboard (Skeleton Bird) oferece estabilidade e espaço para progressão.',
  },
  {
    question: 'Fazem envio para fora do Brasil?',
    answer: 'Sim! Fazemos envios internacionais. O frete varia conforme o país e região. Consulte JP para cotação específica de shipping, alfândega e prazos de entrega internacional.',
  },
  {
    question: 'Qual é a garantia da prancha?',
    answer: 'Todas as pranchas saem do nosso ateliê com qualidade verificada. Oferecemos suporte técnico integral durante os primeiros 30 dias. Danos por defeito de manufatura são cobertos. Danos por uso regular não estão inclusos.',
  },
  {
    question: 'Como devo cuidar da minha prancha?',
    answer: 'Guarde em local fresco e seco, longe de luz solar direta. Após o uso, enxague com água doce. Evite calor extremo que pode danificar a resina. Conserte pequenos dings rapidamente para evitar infiltração de água.',
  },
  {
    question: 'Posso trocar se não gostar?',
    answer: 'Como cada prancha é artesanal e customizada, trocas não são automáticas. Qualquer questão com o produto deve ser discutida diretamente com JP nos primeiros 7 dias após receita. Trabalharemos juntos para resolver qualquer problema.',
  },
  {
    question: 'Vocês oferecem modelos em estoque?',
    answer: 'Não mantemos estoque fixo. Cada prancha é shapada sob demanda para garantir que você recebe exatamente o que encomendou. Isso garante máxima customização e qualidade artesanal.',
  },
  {
    question: 'Qual prancha para surfar ondas grandes?',
    answer: 'Para ondas grandes (acima de 2m), recomendamos o Step Up (Black Buffalo) para consistência, ou o Phantom Shark (Heavy Water Gun) para condições extremas. Ambas oferecem controle e segurança em highspeed.',
  },
  {
    question: 'Como faço meu pedido?',
    answer: 'Clique em "Falar com a Fábrica", preencha o formulário rápido com suas informações. JP entrará em contato no WhatsApp fornecido para detalhar seu shape ideal, confirmar preço e agendar produção.',
  },
];

export const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        background: 'var(--bg)',
        padding: '80px 5vw 80px 52px',
        borderTop: '1px solid var(--border)',
        position: 'relative',
      }}
    >
      <div className="reveal-on-scroll" style={{ maxWidth: '800px' }}>
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
            Dúvidas Frequentes
          </div>
          <h2 className="text-anton" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)', textTransform: 'uppercase' }}>
            PERGUNTAS COMUNS
          </h2>
        </div>

        {/* FAQ List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {faqItems.map((item, index) => (
            <div
              key={index}
              style={{
                border: '1px solid var(--border)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  background: expandedIndex === index ? 'rgba(179, 18, 23, 0.05)' : 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (expandedIndex !== index) {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (expandedIndex !== index) {
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  }
                }}
              >
                <span
                  className="text-mono"
                  style={{
                    fontSize: '0.9rem',
                    letterSpacing: '0.02em',
                    color: 'var(--text)',
                    fontWeight: expandedIndex === index ? 600 : 400,
                    flex: 1,
                  }}
                >
                  {item.question}
                </span>
                <span
                  style={{
                    color: 'var(--accent)',
                    fontSize: '1.2rem',
                    transition: 'transform 0.3s ease',
                    transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  ▼
                </span>
              </button>

              {expandedIndex === index && (
                <div
                  style={{
                    padding: '0 1.5rem 1.5rem 1.5rem',
                    background: 'rgba(179, 18, 23, 0.02)',
                    borderTop: '1px solid var(--border)',
                    animation: 'slideDown 0.3s ease',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      color: 'var(--muted)',
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          style={{
            marginTop: '3rem',
            padding: '2rem',
            border: '1px solid var(--accent)',
            background: 'rgba(179, 18, 23, 0.05)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '1rem' }}>
            Ainda tem dúvidas?
          </p>
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('open-configurator'));
            }}
            className="btn-premium"
            style={{ cursor: 'pointer' }}
          >
            Fale com a Fábrica
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 900px) {
          #faq {
            padding: 60px 5vw !important;
          }
        }

        @media (max-width: 600px) {
          #faq {
            padding: 40px 5vw !important;
          }
          #faq button {
            padding: 1.25rem !important;
          }
          #faq .text-mono {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
};
