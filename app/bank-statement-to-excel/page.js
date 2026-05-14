import Link from 'next/link';
import BlogNavWrapper from '@/components/BlogNavWrapper';

export const metadata = {
  title: 'Convert Bank Statements to Excel Free | MoneySorted',
  description: 'Upload your UK bank statement PDF and instantly get a clean Excel file with spending categories and monthly totals. Works with Barclays, HSBC, Monzo, Starling and more. Free to try.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/bank-statement-to-excel' },
};

const STEPS = [
  {
    num: '01',
    title: 'Download your PDF',
    desc: 'Log in to your bank app or online banking and download your statement as a PDF. Takes about 30 seconds — no special settings needed.',
  },
  {
    num: '02',
    title: 'Upload to MoneySorted',
    desc: 'Drop your PDF into MoneySorted. We parse every transaction automatically — no manual entry, no linking your account.',
  },
  {
    num: '03',
    title: 'Download your Excel file',
    desc: 'Get a clean 3-sheet Excel workbook with your full transaction list, spending by category, and monthly totals — instantly.',
  },
];

const WHAT_YOU_GET = [
  {
    icon: '📊',
    title: 'Clean Excel Workbook',
    desc: 'A 3-sheet workbook with your full transaction list, a spending summary by category, and a month-by-month breakdown — formatted and ready to use.',
  },
  {
    icon: '🏷️',
    title: 'Spending Categories',
    desc: '12+ categories applied automatically: groceries, bills, transport, eating out, online shopping, subscriptions, and more. No manual tagging required.',
  },
  {
    icon: '⚡',
    title: 'Instant Dashboard',
    desc: 'Visual charts showing where your money went, your top merchants, and monthly income vs spending — ready in seconds after upload.',
  },
];

const BANKS = [
  { name: 'Barclays',   slug: 'barclays-bank-statement-analyser' },
  { name: 'HSBC',       slug: 'hsbc-bank-statement-analyser' },
  { name: 'Monzo',      slug: 'monzo-bank-statement-analyser' },
  { name: 'Starling',   slug: 'starling-bank-statement-analyser' },
  { name: 'Lloyds',     slug: 'lloyds-bank-statement-analyser' },
  { name: 'NatWest',    slug: 'natwest-bank-statement-analyser' },
  { name: 'Santander',  slug: 'santander-bank-statement-analyser' },
  { name: 'Halifax',    slug: 'halifax-bank-statement-analyser' },
];

const PAIN_POINTS = [
  {
    icon: '⏱️',
    title: 'It takes hours',
    desc: 'Manually copying transactions from a PDF into Excel is slow, tedious, and error-prone. A 3-month statement can take an entire afternoon to transcribe.',
  },
  {
    icon: '🤯',
    title: 'Formatting is a nightmare',
    desc: 'Bank PDFs don\'t paste cleanly into Excel. Columns break, dates format incorrectly, and amounts come out as text. You spend more time fixing the spreadsheet than reading it.',
  },
  {
    icon: '📉',
    title: 'You still won\'t see patterns',
    desc: 'Even with a clean spreadsheet, raw transaction data doesn\'t tell you where your money actually went. You need categories, totals, and charts to see the real picture.',
  },
];

const FAQS = [
  {
    q: 'Is it really free?',
    a: 'Yes. MoneySorted lets you convert one bank statement per month for free — no credit card, no signup required to try. The Pro plan (£4.99/month) gives you unlimited uploads and full history.',
  },
  {
    q: 'Which banks are supported?',
    a: 'All major UK banks: Barclays, HSBC, Lloyds, NatWest, Santander, Halifax, Monzo, Starling, and more. If your bank exports PDF statements, MoneySorted can read them.',
  },
  {
    q: 'Is my data safe?',
    a: 'Yes. Your statement is processed securely on our servers and permanently deleted after analysis. We never store your PDF, never sell your data, and never require you to connect your bank account.',
  },
  {
    q: 'Do I need to connect my bank?',
    a: 'No. Just download your PDF statement from your bank app or online banking and upload it here. No bank login, no open banking connection, no account linking required.',
  },
  {
    q: 'What format is the Excel file?',
    a: 'A 3-sheet workbook: Sheet 1 has your full transaction list with dates, descriptions, amounts, and categories. Sheet 2 shows totals by spending category. Sheet 3 is a month-by-month summary of income vs spending.',
  },
];

const CTA_STYLE = {
  display: 'inline-block',
  background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
  color: '#080C14', fontWeight: 700, fontSize: '0.95rem',
  padding: '15px 36px', borderRadius: 50,
  textDecoration: 'none', letterSpacing: '-0.01em',
  boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
};

const DIVIDER = (
  <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)', marginBottom: 80 }} />
);

export default function BankStatementToExcelPage() {
  return (
    <div style={{ background: '#080C14', minHeight: '100vh', color: '#F5F0E8' }}>
      <style>{`
        .pillar-content h2 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          color: #F5F0E8;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
        }
        .pillar-content p {
          color: #8A9BB5;
          font-size: 1rem;
          line-height: 1.75;
          margin: 0 0 1em;
        }
        .pillar-step-num {
          font-size: 0.72rem;
          font-weight: 700;
          color: #C9A84C;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .pillar-faq-q {
          color: #F5F0E8;
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 8px;
        }
        .pillar-faq-a {
          color: #8A9BB5;
          font-size: 0.9375rem;
          line-height: 1.75;
          margin: 0;
        }
        .bank-card-link {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0D1117 0%, #111820 100%);
          border: 1px solid #1E2A3A;
          border-radius: 12px;
          padding: 20px 16px;
          text-decoration: none;
          color: #8A9BB5;
          font-size: 0.9rem;
          font-weight: 600;
          text-align: center;
          transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;
        }
        .bank-card-link:hover {
          border-color: rgba(201,168,76,0.5);
          color: #F5F0E8;
          background: rgba(201,168,76,0.05);
        }
      `}</style>

      <BlogNavWrapper />

      <main className="pillar-content" style={{ maxWidth: 900, margin: '0 auto', padding: '120px 24px 96px' }}>

        {/* ── 1. HERO ── */}
        <section style={{ textAlign: 'center', marginBottom: 80 }}>
          <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
            Free UK Bank Statement Converter
          </p>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: 800,
            color: '#F5F0E8', letterSpacing: '-0.03em', lineHeight: 1.12,
            marginBottom: 24,
          }}>
            Convert Bank Statements to Excel —{' '}
            <span style={{ color: '#C9A84C' }}>Free &amp; Instant</span>
          </h1>
          <p style={{
            color: '#8A9BB5', fontSize: '1.1rem', lineHeight: 1.75,
            maxWidth: 640, margin: '0 auto 36px',
          }}>
            Upload any UK bank statement PDF and get a clean, formatted Excel file with spending categories, monthly totals, and a full transaction list. No bank login. No signup required to try.
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

          <Link href="/upload" style={CTA_STYLE}>Convert My Statement Free →</Link>
        </section>

        {DIVIDER}

        {/* ── 2. WHAT YOU GET ── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>What you get</p>
            <h2>What you get from every conversion</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {WHAT_YOU_GET.map(item => (
              <div key={item.title} style={{
                background: 'linear-gradient(135deg, #0D1117 0%, #111820 100%)',
                border: '1px solid #1E2A3A', borderRadius: 16, padding: '28px 24px',
              }}>
                <div style={{
                  width: 48, height: 48, background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.2)', borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', marginBottom: 18,
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#F5F0E8', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#8A9BB5', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {DIVIDER}

        {/* ── 3. HOW IT WORKS ── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>How it works</p>
            <h2>Three steps to a clean Excel file</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {STEPS.map(step => (
              <div key={step.num} style={{
                background: 'linear-gradient(135deg, #0D1117 0%, #111820 100%)',
                border: '1px solid #1E2A3A', borderRadius: 16, padding: '28px 24px',
              }}>
                <div className="pillar-step-num">{step.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#F5F0E8', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#8A9BB5', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {DIVIDER}

        {/* ── 4. SUPPORTED BANKS ── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Supported banks</p>
            <h2>Works with every major UK bank</h2>
            <p style={{ color: '#8A9BB5', fontSize: '1rem', maxWidth: 520, margin: '0 auto' }}>
              Select your bank below for a dedicated guide — or just upload your PDF directly and we'll detect your bank automatically.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
            {BANKS.map(bank => (
              <Link key={bank.slug} href={`/${bank.slug}`} className="bank-card-link">
                {bank.name}
              </Link>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#4A5568', fontSize: '0.82rem', marginTop: 20 }}>
            Also works with TSB, Nationwide, First Direct, Chase UK, Revolut, Co-op Bank, Metro Bank and more.
          </p>
        </section>

        {DIVIDER}

        {/* ── 5. WHY NOT COPY-PASTE ── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>The alternative</p>
            <h2>Why not just copy-paste it yourself?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PAIN_POINTS.map(pt => (
              <div key={pt.title} style={{
                background: 'rgba(239,68,68,0.03)',
                border: '1px solid rgba(239,68,68,0.12)',
                borderLeft: '3px solid rgba(239,68,68,0.3)',
                borderRadius: 16, padding: '24px 24px',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 14 }}>{pt.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#F5F0E8', marginBottom: 8 }}>{pt.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#8A9BB5', lineHeight: 1.65, margin: 0 }}>{pt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {DIVIDER}

        {/* ── 6. FAQ ── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>FAQ</p>
            <h2>Frequently asked questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQS.map(faq => (
              <div key={faq.q} style={{
                background: 'rgba(201,168,76,0.03)',
                border: '1px solid rgba(201,168,76,0.12)',
                borderRadius: 14, padding: '22px 24px',
              }}>
                <p className="pillar-faq-q">{faq.q}</p>
                <p className="pillar-faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. BOTTOM CTA ── */}
        <section style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0D1117 0%, #111820 100%)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: 20, padding: '56px 32px',
        }}>
          <h2 style={{ marginBottom: 12 }}>Ready to understand your spending?</h2>
          <p style={{ maxWidth: 480, margin: '0 auto 32px', color: '#8A9BB5', fontSize: '1rem', lineHeight: 1.75 }}>
            Upload your bank statement now and get a clean Excel file in seconds. Free, private, no account required to try.
          </p>
          <Link href="/upload" style={CTA_STYLE}>Convert My Statement Free →</Link>
        </section>

      </main>
    </div>
  );
}
