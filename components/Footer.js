import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(201,168,76,0.08)',
      background: '#080C14',
      padding: '20px 24px',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <span style={{ color: '#4A5568', fontSize: '0.78rem' }}>
          © {new Date().getFullYear()} MoneySorted. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <Link href="/privacy" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Privacy Policy
          </Link>
          <Link href="/terms" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
