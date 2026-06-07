import Link from 'next/link';

export default function MidCta({ bank = 'your bank' }) {
  return (
    <div style={{
      margin: '2.5em 0',
      padding: '28px 28px',
      background: 'rgba(201,168,76,0.05)',
      border: '1px solid rgba(201,168,76,0.28)',
      borderRadius: 14,
      textAlign: 'center',
    }}>
      <p style={{ color: '#F5F0E8', fontWeight: 800, fontSize: '1.05rem', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
        Want to skip the manual work?
      </p>
      <p style={{ color: '#8A9BB5', fontSize: '0.9rem', margin: '0 0 20px', lineHeight: 1.65 }}>
        Upload your {bank} statement to MoneySorted and get an instant breakdown of every transaction, spending category and monthly trend — free, no login needed.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
          color: '#080C14', fontWeight: 700, fontSize: '0.9rem',
          padding: '11px 28px', borderRadius: 50,
          textDecoration: 'none', letterSpacing: '-0.01em',
          boxShadow: '0 4px 16px rgba(201,168,76,0.25)',
        }}
      >
        Try MoneySorted Free →
      </Link>
    </div>
  );
}
