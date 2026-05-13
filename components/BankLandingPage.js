import Link from 'next/link';
import BlogNavWrapper from '@/components/BlogNavWrapper';

const STEPS = [
  {
    num: '01',
    title: 'Download your PDF',
    desc: 'Log in to your bank app or online banking and download your statement as a PDF. It takes about 30 seconds.',
  },
  {
    num: '02',
    title: 'Upload to MoneySorted',
    desc: 'Drop your PDF into MoneySorted. We parse every transaction automatically — no manual entry, no linking your account.',
  },
  {
    num: '03',
    title: 'See your full breakdown',
    desc: 'Get a complete dashboard showing spending by category, top merchants, monthly trends, and an Excel export — instantly.',
  },
];

export default function BankLandingPage({ bank }) {
  return (
    <div style={{ background: '#080C14', minHeight: '100vh', color: '#F5F0E8' }}>
      <style>{`
        .bank-page-content h2 {
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          font-weight: 800;
          color: #F5F0E8;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
        }
        .bank-page-content p {
          color: #8A9BB5;
          font-size: 1rem;
          line-height: 1.75;
          margin: 0 0 1em;
        }
        .bank-step-num {
          font-size: 0.72rem;
          font-weight: 700;
          color: #C9A84C;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .bank-pdf-li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #8A9BB5;
          font-size: 0.9375rem;
          line-height: 1.65;
          padding: 6px 0;
        }
        .bank-pdf-li::before {
          content: '';
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #C9A84C;
          opacity: 0.7;
          margin-top: 9px;
          flex-shrink: 0;
        }
      `}</style>

      <BlogNavWrapper />

      <main className="bank-page-content" style={{ maxWidth: 860, margin: '0 auto', padding: '120px 24px 96px' }}>

        {/* ── Hero ── */}
        <section style={{ textAlign: 'center', marginBottom: 80 }}>
          <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
            Free Bank Statement Analyser
          </p>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 800,
            color: '#F5F0E8', letterSpacing: '-0.03em', lineHeight: 1.15,
            marginBottom: 24,
          }}>
            {bank.h1}
          </h1>
          <p style={{
            color: '#8A9BB5', fontSize: '1.1rem', lineHeight: 1.75,
            maxWidth: 620, margin: '0 auto 36px',
          }}>
            {bank.intro}
          </p>

          {/* Trust badges */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexWrap: 'wrap', gap: '6px 4px',
            fontSize: '0.8rem', color: '#C9A84C', opacity: 0.8,
            marginBottom: 36,
          }}>
            <span>🔒 No bank login required</span>
            <span style={{ opacity: 0.4, margin: '0 6px' }}>·</span>
            <span>🇬🇧 UK-based</span>
            <span style={{ opacity: 0.4, margin: '0 6px' }}>·</span>
            <span>🗑️ Files processed securely</span>
          </div>

          {/* CTA */}
          <Link
            href="/upload"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
              color: '#080C14', fontWeight: 700, fontSize: '0.95rem',
              padding: '15px 36px', borderRadius: 50,
              textDecoration: 'none', letterSpacing: '-0.01em',
              boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
            }}
          >
            {bank.ctaLabel}
          </Link>
        </section>

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)', marginBottom: 80 }} />

        {/* ── How it works ── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>How it works</p>
            <h2>Three steps to spending clarity</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {STEPS.map(step => (
              <div key={step.num} style={{
                background: 'linear-gradient(135deg, #0D1117 0%, #111820 100%)',
                border: '1px solid #1E2A3A', borderRadius: 16, padding: '28px 24px',
              }}>
                <div className="bank-step-num">{step.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#F5F0E8', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#8A9BB5', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)', marginBottom: 80 }} />

        {/* ── Works perfectly with ── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Compatibility</p>
            <h2>Works perfectly with {bank.name} statements</h2>
          </div>
          <div style={{
            background: 'rgba(201,168,76,0.03)',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: 16, padding: '28px 32px',
          }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {bank.pdfNotes.map(note => (
                <li key={note} className="bank-pdf-li">{note}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0D1117 0%, #111820 100%)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: 20, padding: '52px 32px',
        }}>
          <h2 style={{ marginBottom: 12 }}>Ready to understand your spending?</h2>
          <p style={{ maxWidth: 480, margin: '0 auto 32px' }}>
            Upload your {bank.name} statement now and get a full breakdown in seconds. Free, private, no account required to try.
          </p>
          <Link
            href="/upload"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
              color: '#080C14', fontWeight: 700, fontSize: '0.95rem',
              padding: '15px 36px', borderRadius: 50,
              textDecoration: 'none', letterSpacing: '-0.01em',
              boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
            }}
          >
            {bank.ctaLabel}
          </Link>
        </section>

      </main>
    </div>
  );
}
