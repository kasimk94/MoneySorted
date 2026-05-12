import Link from 'next/link';
import BlogNavWrapper from '@/components/BlogNavWrapper';

export const metadata = {
  title: 'Privacy Policy | MoneySorted',
  description: 'Privacy Policy for MoneySorted — how we collect, use, and protect your personal data in accordance with UK GDPR.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/privacy' },
};

export default function PrivacyPage() {
  return (
    <div style={{ background: '#080C14', minHeight: '100vh', color: '#F5F0E8' }}>
      <style>{`
        .legal-content h2 {
          color: #F5F0E8;
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 2.2em 0 0.65em;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(201,168,76,0.15);
        }
        .legal-content h3 {
          color: #C9A84C;
          font-size: 0.95rem;
          font-weight: 600;
          margin: 1.5em 0 0.4em;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .legal-content p {
          color: #A8B8CC;
          font-size: 0.9375rem;
          line-height: 1.8;
          margin: 0 0 1em;
        }
        .legal-content ul {
          margin: 0 0 1.2em;
          padding-left: 0;
          list-style: none;
        }
        .legal-content ul li {
          color: #A8B8CC;
          font-size: 0.9375rem;
          line-height: 1.75;
          padding: 3px 0 3px 18px;
          position: relative;
        }
        .legal-content ul li::before {
          content: '';
          position: absolute;
          left: 0; top: 13px;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #C9A84C;
          opacity: 0.6;
        }
        .legal-content a { color: #C9A84C; text-underline-offset: 3px; }
        .legal-content strong { color: #F5F0E8; font-weight: 600; }
        .legal-info-box {
          background: rgba(201,168,76,0.04);
          border: 1px solid rgba(201,168,76,0.18);
          border-radius: 12px;
          padding: 20px 24px;
          margin-bottom: 2em;
        }
        .legal-info-box p { margin: 0; }
      `}</style>

      <BlogNavWrapper />

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '120px 24px 80px' }}>

        <div style={{ marginBottom: 48 }}>
          <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Legal</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#F5F0E8', letterSpacing: '-0.03em', margin: '0 0 16px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#8A9BB5', fontSize: '0.875rem', margin: 0 }}>
            Last updated: 12 May 2026
          </p>
        </div>

        <div style={{ height: 1, background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)', marginBottom: 48 }} />

        <div className="legal-info-box">
          <p style={{ color: '#A8B8CC', fontSize: '0.875rem', lineHeight: 1.7 }}>
            <strong>Data Controller:</strong> MoneySorted (getmoneysorted.co.uk)<br />
            <strong>Contact:</strong> <a href="mailto:kas_94@hotmail.co.uk">kas_94@hotmail.co.uk</a><br />
            <strong>Jurisdiction:</strong> England and Wales, United Kingdom
          </p>
        </div>

        <article className="legal-content">

          <h2>1. Who We Are</h2>
          <p>MoneySorted ("we", "us", "our") is a UK-based software service available at <a href="https://www.getmoneysorted.co.uk">getmoneysorted.co.uk</a>. We provide a bank statement analysis tool that allows users to upload PDF bank statements and receive spending insights and data exports.</p>
          <p>This Privacy Policy explains how we collect, use, store, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

          <h2>2. What Data We Collect</h2>

          <h3>Account Data</h3>
          <p>When you create an account, we collect:</p>
          <ul>
            <li>Your name and email address</li>
            <li>A hashed version of your password (we never store your password in plain text)</li>
            <li>Your subscription plan and billing status</li>
          </ul>

          <h3>Bank Statement Data</h3>
          <p>When you upload a bank statement PDF:</p>
          <ul>
            <li>The PDF is processed in server memory to extract transaction data</li>
            <li>The original PDF file is <strong>deleted immediately</strong> after processing — it is never written to permanent storage</li>
            <li>Extracted transaction data (dates, amounts, merchant names, categories) is stored in your account for as long as you maintain an account with us</li>
          </ul>

          <h3>Payment Data</h3>
          <p>Payments are handled entirely by <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">Stripe</a>. We do not store your card number, sort code, or any raw payment credentials. We receive a Stripe customer ID and subscription status from Stripe after a successful payment.</p>

          <h3>Usage Data</h3>
          <p>We may collect anonymised usage data including pages visited, features used, and browser type to improve the service. This data cannot be used to identify you individually.</p>

          <h2>3. Legal Basis for Processing</h2>
          <p>We process your personal data under the following legal bases:</p>
          <ul>
            <li><strong>Contract performance</strong> — processing your account data and bank statement data is necessary to provide the service you have signed up for</li>
            <li><strong>Legitimate interests</strong> — improving and securing the service, preventing fraud</li>
            <li><strong>Legal obligation</strong> — retaining billing records as required by UK law</li>
            <li><strong>Consent</strong> — where you have explicitly opted in to marketing communications</li>
          </ul>

          <h2>4. How We Store Your Data</h2>
          <p>Your account data and processed transaction records are stored in a secured PostgreSQL database hosted on infrastructure within the UK or EEA. We use encryption in transit (HTTPS/TLS) and at rest for sensitive data fields.</p>
          <p>Your original PDF bank statement files are <strong>never stored</strong>. They exist only in server memory during processing and are discarded immediately after your transaction data has been extracted.</p>

          <h2>5. Third Parties We Share Data With</h2>
          <p>We share your data with the following third parties only to the extent necessary to operate the service:</p>
          <ul>
            <li><strong>Stripe</strong> — payment processing. Stripe's privacy policy applies to data they collect: <a href="https://stripe.com/gb/privacy" target="_blank" rel="noopener noreferrer">stripe.com/gb/privacy</a></li>
            <li><strong>Railway / hosting infrastructure</strong> — server hosting. Your data is processed on their infrastructure under data processing agreements</li>
            <li><strong>Google Analytics</strong> — anonymised usage analytics. No personally identifiable information is shared</li>
          </ul>
          <p>We do not sell your personal data to any third party, ever.</p>

          <h2>6. Data Retention</h2>
          <ul>
            <li><strong>Account data:</strong> retained for the duration of your account, plus 30 days after deletion to allow for recovery requests</li>
            <li><strong>Transaction data:</strong> retained for the duration of your account</li>
            <li><strong>Billing records:</strong> retained for 7 years as required by HMRC regulations</li>
            <li><strong>PDF uploads:</strong> deleted immediately after processing — zero retention</li>
          </ul>

          <h2>7. Your Rights Under UK GDPR</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Right of access</strong> — request a copy of the personal data we hold about you</li>
            <li><strong>Right to rectification</strong> — request correction of inaccurate data</li>
            <li><strong>Right to erasure</strong> — request deletion of your personal data ("right to be forgotten")</li>
            <li><strong>Right to data portability</strong> — receive your data in a machine-readable format</li>
            <li><strong>Right to object</strong> — object to processing based on legitimate interests</li>
            <li><strong>Right to restrict processing</strong> — request we limit how we use your data</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:kas_94@hotmail.co.uk">kas_94@hotmail.co.uk</a>. We will respond within 30 days. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>

          <h2>8. Cookies</h2>
          <p>MoneySorted uses the following cookies:</p>
          <ul>
            <li><strong>Session cookie</strong> — required for authentication. Deleted when you close your browser or sign out</li>
            <li><strong>Google Analytics cookies</strong> — anonymised usage tracking. You can opt out via your browser settings or a browser extension</li>
          </ul>
          <p>We do not use advertising, tracking, or profiling cookies.</p>

          <h2>9. Children's Privacy</h2>
          <p>MoneySorted is not intended for use by anyone under the age of 18. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.</p>

          <h2>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify registered users of material changes by email. The "last updated" date at the top of this page reflects the most recent revision. Continued use of MoneySorted after changes are posted constitutes acceptance of the updated policy.</p>

          <h2>11. Contact</h2>
          <p>For any privacy-related questions or to exercise your data rights, contact us at:</p>
          <p><a href="mailto:kas_94@hotmail.co.uk">kas_94@hotmail.co.uk</a></p>

        </article>

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(201,168,76,0.1)', display: 'flex', gap: 24 }}>
          <Link href="/terms" style={{ color: '#C9A84C', fontSize: '0.875rem', textDecoration: 'none' }}>Terms of Service →</Link>
          <Link href="/" style={{ color: '#8A9BB5', fontSize: '0.875rem', textDecoration: 'none' }}>← Back to MoneySorted</Link>
        </div>

      </main>
    </div>
  );
}
