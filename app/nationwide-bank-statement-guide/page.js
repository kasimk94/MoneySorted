import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'Nationwide Bank Statement Guide — What Everything Means | MoneySorted',
  description: 'Understand every code and column on your Nationwide building society statement. Guide to Nationwide transaction codes, FlexAccount statements, and how to download your statement.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/nationwide-bank-statement-guide' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="Nationwide Bank Statement Guide — What Everything Means"
      intro="Nationwide is the UK's largest building society — not a bank, though it operates exactly like one for everyday banking purposes. Its statements use the same standard UK transaction codes, but a few things work differently. This guide explains everything."
      ctaLabel="Analyse My Nationwide Statement Free →"
    >

      <h2>How to download your Nationwide bank statement</h2>
      <p>Nationwide provides statements through the app and online banking:</p>
      <ul>
        <li><strong>Nationwide app</strong> — tap your account → tap <em>Statements</em> → select the month → download PDF</li>
        <li><strong>Online banking</strong> — log in at nationwide.co.uk → select your account → <em>Statements</em> → choose the period → download PDF</li>
        <li><strong>Older statements</strong> — Nationwide holds up to 7 years of statements online. For records older than that, contact Nationwide by secure message or in branch — note that older paper statements may take time to retrieve.</li>
        <li><strong>Paper statements</strong> — if you haven't switched to e-statements, Nationwide posts monthly paper statements automatically. You can switch to e-statements in the app or online banking settings.</li>
      </ul>

      <h2>What the columns on a Nationwide statement mean</h2>
      <p>A Nationwide FlexAccount or FlexDirect statement uses these columns:</p>
      <ul>
        <li><strong>Date</strong> — the date the transaction posted to your account</li>
        <li><strong>Description</strong> — a reference identifying the payment type and merchant or sender</li>
        <li><strong>Payments out (£)</strong> — money leaving your account (debits)</li>
        <li><strong>Payments in (£)</strong> — money arriving in your account (credits)</li>
        <li><strong>Balance (£)</strong> — your running balance after each transaction; shown with "D" or "OD" suffix if overdrawn</li>
      </ul>

      <h2>Nationwide transaction codes explained</h2>
      <p>Nationwide uses standard UK payment type codes in the description column:</p>
      <ul>
        <li><strong>DD</strong> — Direct Debit. A recurring payment a company collects from your account on authorised dates — utilities, phone bills, subscriptions, council tax.</li>
        <li><strong>SO</strong> — Standing Order. A fixed amount you transfer on a regular schedule that you set up — typically used for rent or regular savings.</li>
        <li><strong>FPI</strong> — Faster Payment In. Near-instant money received via the Faster Payments network.</li>
        <li><strong>FPO</strong> — Faster Payment Out. A near-instant bank transfer you sent.</li>
        <li><strong>BGC</strong> — Bank Giro Credit. A credit payment into your account — salary, HMRC tax credits, and pension payments commonly appear as BGC.</li>
        <li><strong>BACS</strong> — Bankers' Automated Clearing Services. A 3-working-day payment used for payroll and bulk transfers.</li>
        <li><strong>CHAPS</strong> — Clearing House Automated Payment System. A same-day high-value payment — most often used for house purchases or large business transfers.</li>
        <li><strong>ATM</strong> — Cash machine withdrawal.</li>
        <li><strong>POS</strong> — Point of Sale. A Nationwide debit card payment at a physical location.</li>
        <li><strong>CHQ</strong> — Cheque payment, followed by the cheque number.</li>
        <li><strong>TFR</strong> — Transfer between your own Nationwide accounts.</li>
        <li><strong>INT</strong> — Interest. Nationwide pays interest on FlexDirect balances and charges interest on overdrafts — both appear as INT entries.</li>
        <li><strong>OD</strong> — Overdrawn. Your balance is in the negative.</li>
        <li><strong>REV</strong> — Reversal. A transaction that was posted and then reversed.</li>
        <li><strong>DIV</strong> — Dividend. As a building society, Nationwide occasionally pays member dividends — these appear as DIV credits on statements.</li>
      </ul>

      <div className="cp-callout">
        <p>💡 Unlike banks, Nationwide is member-owned — every current account holder is technically a member of the building society. This is why you may occasionally see dividend or loyalty payments credited to your account that wouldn't appear on a statement from a traditional bank.</p>
      </div>

      <h2>Opening balance, closing balance, and verifying your statement</h2>
      <p>Each Nationwide statement covers one calendar month. The <strong>opening balance</strong> shows what was in your account at the start of the period; the <strong>closing balance</strong> shows what remained at the end.</p>
      <p>To check: opening balance + total payments in − total payments out = closing balance. Nationwide prints running totals at the end of each statement page.</p>
      <p>If your closing balance shows with "D" or "OD", your account was overdrawn. Nationwide charges a fixed daily fee on arranged overdrafts rather than percentage interest on most accounts — this appears as a charge near the end of the period.</p>

      <h2>How to dispute a charge on your Nationwide statement</h2>
      <ol>
        <li>Search the description online — most unfamiliar billing names resolve quickly</li>
        <li>For an unauthorised Direct Debit, claim an immediate refund under the Direct Debit Guarantee — Nationwide must return the money on request</li>
        <li>For an unrecognised card payment, contact Nationwide via the app, online banking, or by calling 03457 30 20 10</li>
        <li>Nationwide is covered by the Financial Ombudsman Service for unresolved disputes</li>
      </ol>

      <h2>Analyse your Nationwide statement automatically</h2>
      <p>Categorising Nationwide transactions by hand and totalling each spending category is time-consuming. MoneySorted reads your Nationwide PDF statement and does it all automatically — full category breakdown, monthly totals, and a spending dashboard ready in under 60 seconds.</p>
      <p>No Nationwide login required. Upload the PDF you've downloaded and export to CSV or Excel if needed.</p>
      <p>See also: <Link href="/bank-statement-to-excel">complete guide to converting UK bank statements to Excel</Link>.</p>

    </ContentPage>
  );
}
