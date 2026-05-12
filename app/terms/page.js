import Link from 'next/link';
import BlogNavWrapper from '@/components/BlogNavWrapper';

export const metadata = {
  title: 'Terms of Service | MoneySorted',
  description: 'Terms of Service for MoneySorted — the rules and conditions governing use of the MoneySorted bank statement analysis service.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/terms' },
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p style={{ color: '#8A9BB5', fontSize: '0.875rem', margin: 0 }}>
            Last updated: 12 May 2026
          </p>
        </div>

        <div style={{ height: 1, background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)', marginBottom: 48 }} />

        <div className="legal-info-box">
          <p style={{ color: '#A8B8CC', fontSize: '0.875rem', lineHeight: 1.7 }}>
            <strong>Service Provider:</strong> MoneySorted (getmoneysorted.co.uk)<br />
            <strong>Contact:</strong> <a href="mailto:kas_94@hotmail.co.uk">kas_94@hotmail.co.uk</a><br />
            <strong>Governing Law:</strong> England and Wales, United Kingdom
          </p>
        </div>

        <article className="legal-content">

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using MoneySorted at <a href="https://www.getmoneysorted.co.uk">getmoneysorted.co.uk</a> ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.</p>
          <p>We may update these Terms from time to time. Continued use of the Service after changes are posted constitutes your acceptance of the updated Terms. We will notify registered users of material changes by email.</p>

          <h2>2. Description of Service</h2>
          <p>MoneySorted is a web-based bank statement analysis tool that allows users to upload PDF bank statements and receive spending insights, transaction categorisation, and data exports. The Service is available in the following tiers:</p>
          <ul>
            <li><strong>Free Plan</strong> — upload and analyse bank statements with no account required; limited to basic analysis features</li>
            <li><strong>Pro Plan</strong> — £4.99/month; includes full dashboard, CSV and Excel exports, spending history, and priority processing</li>
            <li><strong>Business Plan</strong> — £19.99/month; includes all Pro features plus bulk upload, multi-statement analysis, accountant mode, and client management tools</li>
          </ul>
          <p>Features and plan limits may change. We will give reasonable notice of any changes that reduce the functionality of a paid plan.</p>

          <h2>3. Eligibility</h2>
          <p>You must be at least 18 years of age to use MoneySorted. By using the Service, you confirm that you are 18 or older and have the legal capacity to enter into these Terms. The Service is intended for users in the United Kingdom, though access is not restricted by location.</p>

          <h2>4. Account Registration</h2>
          <p>Certain features require you to create an account. You agree to:</p>
          <ul>
            <li>Provide accurate and complete information when registering</li>
            <li>Keep your account credentials confidential and not share them with others</li>
            <li>Notify us immediately at <a href="mailto:kas_94@hotmail.co.uk">kas_94@hotmail.co.uk</a> if you suspect unauthorised access to your account</li>
            <li>Be responsible for all activity that occurs under your account</li>
          </ul>
          <p>We reserve the right to suspend or terminate accounts that violate these Terms or that we reasonably believe are being used fraudulently.</p>

          <h2>5. Acceptable Use</h2>
          <p>You agree to use the Service only for lawful purposes. You must not:</p>
          <ul>
            <li>Upload bank statements belonging to another person without their explicit consent</li>
            <li>Attempt to reverse-engineer, decompile, or extract source code from the Service</li>
            <li>Use automated tools (bots, scrapers, crawlers) to access or extract data from the Service</li>
            <li>Upload files containing malware, viruses, or malicious code</li>
            <li>Attempt to circumvent subscription limits, access controls, or security measures</li>
            <li>Use the Service in any way that could damage, disable, or impair its operation</li>
            <li>Resell, sublicense, or commercially exploit the Service without our written permission</li>
          </ul>

          <h2>6. Payments and Subscriptions</h2>

          <h3>Billing</h3>
          <p>Paid subscriptions are billed monthly in advance. Payments are processed securely by <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">Stripe</a>. By subscribing, you authorise Stripe to charge your payment method on a recurring monthly basis until you cancel.</p>

          <h3>Cancellation</h3>
          <p>You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of the current billing period — you will retain access to paid features until that date. We do not issue prorated refunds for partial months.</p>

          <h3>Refunds</h3>
          <p>We offer a 7-day refund policy for first-time subscribers. If you are not satisfied with the Service within 7 days of your first payment, contact us at <a href="mailto:kas_94@hotmail.co.uk">kas_94@hotmail.co.uk</a> for a full refund. Refunds after this period are at our discretion.</p>

          <h3>Price Changes</h3>
          <p>We reserve the right to change subscription prices. We will give at least 30 days' notice of any price increase. Continued use of the Service after a price change constitutes acceptance of the new pricing.</p>

          <h2>7. Data and Privacy</h2>
          <p>Your use of the Service is subject to our <Link href="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference. In summary:</p>
          <ul>
            <li>Your uploaded PDF bank statements are processed in memory and <strong>deleted immediately</strong> after extraction — they are never stored permanently</li>
            <li>Extracted transaction data is stored in your account for as long as you maintain an account</li>
            <li>We do not sell your personal data to any third party</li>
          </ul>
          <p>You retain ownership of any data you upload to the Service. By uploading data, you grant us a limited licence to process it solely for the purpose of providing the Service to you.</p>

          <h2>8. Intellectual Property</h2>
          <p>All content, software, design, trademarks, and intellectual property comprising the MoneySorted Service are owned by or licensed to us and are protected by UK and international intellectual property law. These Terms do not grant you any ownership rights in the Service.</p>
          <p>You may not reproduce, distribute, or create derivative works from any part of the Service without our prior written consent.</p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>The Service is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind, express or implied. We do not warrant that:</p>
          <ul>
            <li>The Service will be uninterrupted, error-free, or fully secure</li>
            <li>Transaction categorisation or spending analysis will be accurate or complete</li>
            <li>The Service will be compatible with all PDF formats or all UK bank statement layouts</li>
          </ul>
          <p>MoneySorted is a financial data tool, not regulated financial advice. Nothing in the Service constitutes financial, tax, or investment advice. You should seek professional advice for financial decisions.</p>

          <h2>10. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, MoneySorted shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Service — including but not limited to loss of data, lost profits, or business interruption.</p>
          <p>Our total aggregate liability to you in connection with the Service shall not exceed the amount you paid us in the 12 months preceding the claim, or £50, whichever is greater.</p>
          <p>Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded under English law.</p>

          <h2>11. Indemnification</h2>
          <p>You agree to indemnify and hold harmless MoneySorted from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your use of the Service in violation of these Terms or applicable law.</p>

          <h2>12. Termination</h2>
          <p>We may suspend or terminate your access to the Service at any time if we reasonably believe you have violated these Terms, with or without notice. Upon termination of a paid account due to your breach of these Terms, no refund will be issued.</p>
          <p>You may delete your account at any time. Account deletion is permanent — your stored transaction data will be deleted within 30 days, subject to retention obligations described in our Privacy Policy.</p>

          <h2>13. Governing Law and Disputes</h2>
          <p>These Terms are governed by the law of England and Wales. Any dispute arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          <p>Before initiating formal legal proceedings, we encourage you to contact us at <a href="mailto:kas_94@hotmail.co.uk">kas_94@hotmail.co.uk</a> so we can attempt to resolve the matter informally.</p>

          <h2>14. Contact</h2>
          <p>For any questions about these Terms, contact us at:</p>
          <p><a href="mailto:kas_94@hotmail.co.uk">kas_94@hotmail.co.uk</a></p>

        </article>

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(201,168,76,0.1)', display: 'flex', gap: 24 }}>
          <Link href="/privacy" style={{ color: '#C9A84C', fontSize: '0.875rem', textDecoration: 'none' }}>Privacy Policy →</Link>
          <Link href="/" style={{ color: '#8A9BB5', fontSize: '0.875rem', textDecoration: 'none' }}>← Back to MoneySorted</Link>
        </div>

      </main>
    </div>
  );
}
