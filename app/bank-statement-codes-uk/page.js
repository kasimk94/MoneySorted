import Link from 'next/link';
import BlogNavWrapper from '@/components/BlogNavWrapper';

export const metadata = {
  title: 'UK Bank Statement Codes Explained | What Every Abbreviation Means',
  description: 'What does FPI, TFR, CDR, VIS, SO, DD mean on your bank statement? We explain every UK bank statement code and abbreviation in plain English.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/bank-statement-codes-uk' },
};

const CODES = [
  {
    code: 'DD',
    name: 'Direct Debit',
    meaning: 'A recurring payment that a company collects from your account on agreed dates. You authorise it once and the company can vary the amount within agreed limits.',
    example: 'Your monthly gym membership, gas bill, or phone contract appearing on the same date each month.',
  },
  {
    code: 'SO',
    name: 'Standing Order',
    meaning: 'A fixed recurring payment you set up yourself through your bank, for the same amount each time. Unlike a Direct Debit, only you can change or cancel it.',
    example: 'Sending £500 rent to your landlord on the 1st of every month.',
  },
  {
    code: 'TFR',
    name: 'Transfer',
    meaning: 'An internal transfer between your own accounts at the same bank — for example moving money from your current account to a savings account.',
    example: 'Moving £200 from your NatWest current account to your NatWest savings account.',
  },
  {
    code: 'FPI',
    name: 'Faster Payment In',
    meaning: 'Money received into your account via the Faster Payments network — near-instant transfers from another UK bank account, usually clearing within seconds.',
    example: 'A friend sending you £50 via their banking app to split a restaurant bill.',
  },
  {
    code: 'FPO',
    name: 'Faster Payment Out',
    meaning: 'Money you sent to another account via the Faster Payments network. Most UK bank-to-bank transfers are processed this way.',
    example: 'Paying a freelancer £300 via your banking app — it appears as FPO on your statement.',
  },
  {
    code: 'VIS',
    name: 'Visa Card Transaction',
    meaning: 'A purchase made using your Visa debit or credit card, either in-store or online.',
    example: 'Buying groceries at Tesco using your debit card — it appears as VIS TESCO STORES on your statement.',
  },
  {
    code: 'ATM',
    name: 'Cash Machine Withdrawal',
    meaning: 'A cash withdrawal made at an ATM (Automated Teller Machine). The location or machine operator is usually shown alongside the code.',
    example: 'Withdrawing £60 cash from a Barclays ATM appears as ATM followed by the machine location.',
  },
  {
    code: 'CHQ',
    name: 'Cheque',
    meaning: 'A cheque payment, either written by you or paid into your account. Usually followed by the cheque serial number.',
    example: 'Paying a tradesperson by cheque — it appears as CHQ 000123 once they present it for payment.',
  },
  {
    code: 'CDR',
    name: 'Credit (Halifax)',
    meaning: "Used by Halifax to indicate a credit — money coming into your account. It is equivalent to CR on other banks' statements.",
    example: 'A salary payment at Halifax appearing as CDR EMPLOYER NAME.',
  },
  {
    code: 'DR',
    name: 'Debit',
    meaning: 'An indicator that money is leaving your account. Sometimes appended to a balance amount rather than shown in a separate column.',
    example: 'An overdrawn balance shown as 45.00 DR means you owe the bank £45.',
  },
  {
    code: 'CR',
    name: 'Credit',
    meaning: 'An indicator that money has come into your account. The opposite of DR.',
    example: 'A refund appearing as 29.99 CR means £29.99 has been credited back to your account.',
  },
  {
    code: 'BAC',
    name: 'BACS Payment',
    meaning: "A payment processed through the Bankers' Automated Clearing Services network. Takes 3 working days to clear. Commonly used for salaries and supplier payments.",
    example: "Your employer paying your salary via BACS — it appears as BAC or BACS followed by your employer's name.",
  },
  {
    code: 'BGC',
    name: 'Bank Giro Credit',
    meaning: 'A credit payment into your account via the Bank Giro system — commonly used for salary payments, pension credits, and HMRC tax refunds.',
    example: 'Your monthly salary arriving as BGC EMPLOYER LTD.',
  },
  {
    code: 'OD',
    name: 'Overdrawn',
    meaning: 'Your account balance is in the negative — you owe money to the bank. OD is shown alongside your balance figure, not as a transaction itself.',
    example: 'A balance shown as 120.00 OD means you are £120 overdrawn.',
  },
  {
    code: 'REV',
    name: 'Reversal',
    meaning: 'A transaction that was processed and then reversed — either a refund, an error correction, or a returned payment.',
    example: 'A retailer refunding a purchase appears as REV followed by the original merchant name.',
  },
];

const FAQ_ITEMS = [
  {
    q: 'What does FPI mean on a bank statement?',
    a: 'FPI stands for Faster Payment In — it means money has been sent to your account via the Faster Payments system, typically from another UK bank account.',
  },
  {
    q: 'What does TFR mean on a bank statement?',
    a: 'TFR means Transfer — usually an internal transfer between your own accounts at the same bank.',
  },
  {
    q: 'What does CDR mean on a Halifax bank statement?',
    a: 'CDR on a Halifax statement means Credit — money coming into your account.',
  },
  {
    q: 'What does VIS mean on a bank statement?',
    a: 'VIS means a Visa card transaction — a purchase made using your debit or credit card.',
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
        { '@type': 'ListItem', position: 2, name: 'Bank Statement Codes Explained', item: 'https://www.getmoneysorted.co.uk/bank-statement-codes-uk' },
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
        .bscuk h2 {
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          font-weight: 800;
          color: #F5F0E8;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }
        .bscuk p { color: #8A9BB5; font-size: 1rem; line-height: 1.75; margin: 0 0 1em; }
        .bscuk strong { color: #F5F0E8; }
      `}</style>

      <BlogNavWrapper />

      <main className="bscuk" style={{ maxWidth: 860, margin: '0 auto', padding: '120px 24px 96px' }}>

        {/* ── Hero ── */}
        <section style={{ textAlign: 'center', marginBottom: 80 }}>
          <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
            Reference Guide
          </p>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 800,
            color: '#F5F0E8', letterSpacing: '-0.03em', lineHeight: 1.15,
            marginBottom: 24,
          }}>
            UK Bank Statement Codes Explained
          </h1>
          <p style={{ color: '#8A9BB5', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 640, margin: '0 auto' }}>
            Understanding the codes and abbreviations on your UK bank statement can be confusing. This guide explains what every common code means across all major UK banks.
          </p>
        </section>

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)', marginBottom: 80 }} />

        {/* ── Codes ── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Codes & Abbreviations</p>
            <h2>Every UK bank statement code explained</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {CODES.map(item => (
              <div key={item.code} style={{
                background: 'linear-gradient(135deg, #0D1117 0%, #111820 100%)',
                border: '1px solid #1E2A3A',
                borderLeft: '3px solid rgba(201,168,76,0.4)',
                borderRadius: 14, padding: '24px 28px',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 10 }}>
                  <span style={{
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    color: '#C9A84C',
                    fontWeight: 800, fontSize: '0.85rem',
                    padding: '3px 10px', borderRadius: 6,
                    letterSpacing: '0.05em', flexShrink: 0,
                  }}>{item.code}</span>
                  <span style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '1rem' }}>{item.name}</span>
                </div>
                <p style={{ margin: '0 0 8px' }}>{item.meaning}</p>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>
                  <strong style={{ color: '#8A9BB5' }}>Example:</strong> {item.example}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)', marginBottom: 80 }} />

        {/* ── FAQ ── */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>FAQ</p>
            <h2>Common bank statement code questions</h2>
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
          <h2 style={{ marginBottom: 12 }}>See exactly what's on your statement</h2>
          <p style={{ maxWidth: 480, margin: '0 auto 32px' }}>
            Upload your bank statement PDF and MoneySorted will automatically categorise every transaction — no codes to decode manually.
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
            Analyse My Bank Statement Free →
          </Link>
        </section>

        <p style={{ textAlign: 'center', color: '#4A5568', fontSize: '0.82rem', margin: 0 }}>
          Also see:{' '}
          <Link href="/what-does-bank-statement-mean" style={{ color: '#8A9BB5', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            What does a bank statement mean?
          </Link>
          {' · '}
          <Link href="/how-to-analyse-a-bank-statement" style={{ color: '#8A9BB5', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            How to analyse a bank statement →
          </Link>
        </p>

      </main>
    </div>
  );
}
