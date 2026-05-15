import Link from 'next/link';
import BlogNavWrapper from '@/components/BlogNavWrapper';

export default function ContentPage({ label, h1, intro, children, ctaLabel = 'Try MoneySorted Free →' }) {
  return (
    <div style={{ background: '#080C14', minHeight: '100vh', color: '#F5F0E8' }}>
      <style>{`
        .cp-article h2 {
          font-size: clamp(1.15rem, 2.5vw, 1.4rem);
          font-weight: 800;
          color: #F5F0E8;
          letter-spacing: -0.02em;
          margin: 2.4em 0 0.6em;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(201,168,76,0.12);
        }
        .cp-article p {
          color: #A8B8CC;
          font-size: 0.9375rem;
          line-height: 1.82;
          margin: 0 0 1.1em;
        }
        .cp-article ul, .cp-article ol {
          margin: 0 0 1.2em;
          padding-left: 0;
          list-style: none;
        }
        .cp-article ul li, .cp-article ol li {
          color: #A8B8CC;
          font-size: 0.9375rem;
          line-height: 1.75;
          padding: 4px 0 4px 20px;
          position: relative;
        }
        .cp-article ul li::before {
          content: '';
          position: absolute;
          left: 0; top: 13px;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #C9A84C;
          opacity: 0.65;
        }
        .cp-article ol { counter-reset: cp-counter; }
        .cp-article ol li { counter-increment: cp-counter; }
        .cp-article ol li::before {
          content: counter(cp-counter) '.';
          position: absolute;
          left: 0;
          color: #C9A84C;
          font-size: 0.8rem;
          font-weight: 700;
          top: 5px;
        }
        .cp-article strong { color: #F5F0E8; font-weight: 600; }
        .cp-article a { color: #C9A84C; text-underline-offset: 3px; }
        .cp-callout {
          background: rgba(201,168,76,0.04);
          border: 1px solid rgba(201,168,76,0.18);
          border-left: 3px solid #C9A84C;
          border-radius: 12px;
          padding: 18px 22px;
          margin: 1.6em 0;
        }
        .cp-callout p { margin: 0; color: #C9A84C !important; font-size: 0.9rem !important; }
      `}</style>

      <BlogNavWrapper />

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '120px 24px 80px' }}>

        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
            {label}
          </p>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800,
            color: '#F5F0E8', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 20px',
          }}>
            {h1}
          </h1>
          <p style={{ color: '#8A9BB5', fontSize: '1.05rem', lineHeight: 1.75, margin: 0 }}>
            {intro}
          </p>
        </div>

        <div style={{ height: 1, background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)', marginBottom: 48 }} />

        {/* Article body */}
        <article className="cp-article">
          {children}
        </article>

        {/* CTA box */}
        <div style={{
          marginTop: 56,
          background: 'linear-gradient(135deg, #0D1117 0%, #111820 100%)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: 16, padding: '36px 32px', textAlign: 'center',
        }}>
          <p style={{ color: '#F5F0E8', fontWeight: 800, fontSize: '1.1rem', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
            Skip the manual work
          </p>
          <p style={{ color: '#8A9BB5', fontSize: '0.9rem', margin: '0 0 24px', lineHeight: 1.65 }}>
            Upload your bank statement and MoneySorted does all of this in seconds — for free.
          </p>
          <Link
            href="/upload"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
              color: '#080C14', fontWeight: 700, fontSize: '0.95rem',
              padding: '13px 32px', borderRadius: 50,
              textDecoration: 'none', letterSpacing: '-0.01em',
              boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
            }}
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Pillar backlink */}
        <p style={{ textAlign: 'center', marginTop: 28, color: '#4A5568', fontSize: '0.82rem' }}>
          Also see:{' '}
          <Link href="/bank-statement-to-excel" style={{ color: '#8A9BB5', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            Convert any UK bank statement to Excel →
          </Link>
        </p>

      </main>
    </div>
  );
}
