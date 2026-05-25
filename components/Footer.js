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
          <Link href="/hsbc-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            HSBC Bank Statement Help
          </Link>
          <Link href="/barclays-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Barclays Bank Statement Help
          </Link>
          <Link href="/monzo-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Monzo Bank Statement Help
          </Link>
          <Link href="/starling-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Starling Bank Statement Help
          </Link>
          <Link href="/lloyds-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Lloyds Bank Statement Help
          </Link>
          <Link href="/natwest-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            NatWest Bank Statement Help
          </Link>
          <Link href="/halifax-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Halifax Bank Statement Help
          </Link>
          <Link href="/santander-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Santander Bank Statement Help
          </Link>
          <Link href="/nationwide-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Nationwide Bank Statement Help
          </Link>
          <Link href="/tsb-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            TSB Bank Statement Help
          </Link>
          <Link href="/revolut-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Revolut Bank Statement Help
          </Link>
          <Link href="/first-direct-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            first direct Bank Statement Help
          </Link>
          <Link href="/chase-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Chase Bank Statement Help
          </Link>
          <Link href="/starling-business-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Starling Business Bank Statement Help
          </Link>
          <Link href="/monzo-business-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Monzo Business Bank Statement Help
          </Link>
          <Link href="/barclays-business-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Barclays Business Bank Statement Help
          </Link>
          <Link href="/hsbc-business-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            HSBC Business Bank Statement Help
          </Link>
          <Link href="/lloyds-business-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Lloyds Business Bank Statement Help
          </Link>
          <Link href="/natwest-business-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            NatWest Business Bank Statement Help
          </Link>
          <Link href="/halifax-business-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Halifax Business Bank Statement Help
          </Link>
          <Link href="/santander-business-bank-statement" style={{ color: '#8A9BB5', fontSize: '0.78rem', textDecoration: 'none' }}>
            Santander Business Bank Statement Help
          </Link>
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
