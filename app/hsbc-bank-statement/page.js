import Link from 'next/link';
import BlogNavWrapper from '@/components/BlogNavWrapper';

export const metadata = {
  title: 'HSBC Bank Statement Analyser | Free PDF to Excel Converter UK',
  description: 'Upload your HSBC bank statement PDF and get instant spending analysis, transaction breakdown, and Excel export. Free, secure, no login required.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/hsbc-bank-statement' },
};

const FAQ_ITEMS = [
  {
    q: 'How do I download my HSBC bank statement as PDF?',
    a: 'Log into HSBC online banking at hsbc.co.uk, go to Accounts, select your account, click Statements, choose your date range and download as PDF. You can also do this in the HSBC Mobile app under Statements.',
  },
  {
    q: 'How far back can I get HSBC statements?',
    a: 'HSBC provides up to 7 years of statements online for current accounts. Statements older than 7 years can be requested by contacting HSBC directly, though a fee may apply.',
  },
  {
    q: 'Does MoneySorted work with HSBC business accounts?',
    a: 'Yes, MoneySorted analyses both HSBC personal and business account statements. Simply download your business statement PDF from HSBC Business Online Banking and upload it.',
  },
  {
    q: 'Is my HSBC data safe?',
    a: 'Your statement PDF is processed on our secure servers and immediately deleted after analysis. We never store your banking data, never see your login credentials, and never connect to your HSBC account.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.getmoneysorted.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'HSBC Bank Statement Analyser', item: 'https://www.getmoneysorted.co.uk/hsbc-bank-statement' },
      ],
    },
  ],
};

export default function Page() {
  return (
    <div style={{ background: '#080C14', minHeight: '100vh', color: '#F5F0E8' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        .hbsa h2 {
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          font-weight: 800;
          color: #F5F0E8;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }
        .hbsa p { color: #8A9BB5; font-size: 1rem; line-height: 1.75; margin: 0 0 1em; }
        .hbsa strong { color: #F5F0E8; }
      `}</style>

      <BlogNavWrapper />

      <main className="hbsa" style={{ maxWidth: 860, margin: '0 auto', padding: '120px 24px 96px' }}>

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
            HSBC Bank Statement Analyser
          </h1>
          <p style={{ color: '#8A9BB5', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 640, margin: '0 auto 36px' }}>
            MoneySorted works perfectly with all HSBC statements — personal current accounts, HSBC Advance, Premier, and business accounts. Upload your PDF and get a full spending breakdown, transaction list, and Excel export in seconds.
          </p>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexWrap: 'wrap', gap: '6px 4px',
            fontSize: '0.8rem', color: '#C9A84C', opacity: 0.8, marginBottom: 36,
          }}>
            <span>🔒 No bank login required</span>
            <span style={{ opacity: 0.4, margin: '0 6px' }}>·</span>
            <span>🇬🇧 UK-based</span>
            <span style={{ opacity: 0.4, margin: '0 6px' }}>·</span>
            <span>🗑️ Files processed securely</span>
          </div>

          <Link
            href="/upload"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
              color: '#080C14', fontWeight: 700, fontSize: '1rem',
              padding: '15px 38px', borderRadius: 50,
              textDecoration: 'none', letterSpacing: '-0.01em',
              boxShadow: '0 4px 24px rgba(201,168,76,0.35)',
            }}
          >
            Analyse My HSBC Statement →
          </Link>
        </section>

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)', marginBottom: 80 }} />

        {/* ── How it works ── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>How it works</p>
            <h2>Three steps to instant results</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              {
                num: '01',
                title: 'Download your HSBC statement',
                desc: 'Log in to HSBC online banking or the HSBC app, go to Statements, choose your date range, and download your statement as a PDF. Takes about 30 seconds.',
              },
              {
                num: '02',
                title: 'Upload to MoneySorted',
                desc: 'Drop your HSBC PDF into MoneySorted. We parse every transaction automatically — no manual entry, no linking your account, no HSBC login needed.',
              },
              {
                num: '03',
                title: 'Get your full breakdown',
                desc: 'Instant spending breakdown by category, complete transaction list, and an Excel or CSV export ready to download. All in under 60 seconds.',
              },
            ].map(step => (
              <div key={step.num} style={{
                background: 'linear-gradient(135deg, #0D1117 0%, #111820 100%)',
                border: '1px solid #1E2A3A', borderRadius: 16, padding: '28px 24px',
              }}>
                <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>{step.num}</p>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#F5F0E8', margin: '0 0 10px' }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)', marginBottom: 80 }} />

        {/* ── What you get ── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>What you get</p>
            <h2>What you get from your HSBC statement</h2>
            <p style={{ maxWidth: 540, margin: '0 auto' }}>Everything MoneySorted extracts from your HSBC PDF — automatically, with no manual work.</p>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16,
          }}>
            {[
              { icon: '↕️', title: 'Total money in vs out', desc: 'See exactly how much came in and went out across the statement period.' },
              { icon: '🏷️', title: 'Spending by category', desc: 'Every transaction automatically labelled — Groceries, Transport, Bills, Eating Out, and more.' },
              { icon: '🔁', title: 'Subscription detection', desc: 'Recurring charges flagged automatically so you can spot forgotten subscriptions.' },
              { icon: '📅', title: 'Monthly comparison', desc: 'Compare spending patterns across multiple months when you upload more than one statement.' },
              { icon: '📊', title: 'Excel & CSV download', desc: 'Export your clean, categorised transaction data to Excel or CSV — ready for your accountant or personal records.' },
            ].map(item => (
              <div key={item.title} style={{
                background: 'rgba(201,168,76,0.03)',
                border: '1px solid rgba(201,168,76,0.12)',
                borderRadius: 14, padding: '22px 22px',
                display: 'flex', gap: 16, alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '1.4rem', lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                <div>
                  <p style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 4px' }}>{item.title}</p>
                  <p style={{ fontSize: '0.85rem', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)', marginBottom: 80 }} />

        {/* ── FAQ ── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>FAQ</p>
            <h2>Common HSBC statement questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQ_ITEMS.map(item => (
              <div key={item.q} style={{
                background: 'linear-gradient(135deg, #0D1117 0%, #111820 100%)',
                border: '1px solid #1E2A3A',
                borderLeft: '3px solid rgba(201,168,76,0.4)',
                borderRadius: 14, padding: '24px 28px',
              }}>
                <p style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '1rem', margin: '0 0 10px' }}>{item.q}</p>
                <p style={{ margin: 0, fontSize: '0.9375rem' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0D1117 0%, #111820 100%)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: 20, padding: '52px 32px', marginBottom: 40,
        }}>
          <h2 style={{ marginBottom: 12 }}>Ready to understand your HSBC spending?</h2>
          <p style={{ maxWidth: 480, margin: '0 auto 32px' }}>
            Upload your HSBC statement now and get a full breakdown in seconds. Free, private, no account required to try.
          </p>
          <Link
            href="/upload"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
              color: '#080C14', fontWeight: 700, fontSize: '1rem',
              padding: '15px 38px', borderRadius: 50,
              textDecoration: 'none', letterSpacing: '-0.01em',
              boxShadow: '0 4px 24px rgba(201,168,76,0.35)',
            }}
          >
            Analyse My HSBC Statement →
          </Link>
        </section>

        <p style={{ textAlign: 'center', color: '#4A5568', fontSize: '0.82rem', margin: 0 }}>
          Also see:{' '}
          <Link href="/hsbc-bank-statement-guide" style={{ color: '#8A9BB5', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            HSBC statement guide
          </Link>
          {' · '}
          <Link href="/bank-statement-to-excel" style={{ color: '#8A9BB5', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            Convert any UK bank statement to Excel →
          </Link>
        </p>

      </main>
    </div>
  );
}
