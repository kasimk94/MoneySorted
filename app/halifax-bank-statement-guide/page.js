import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'Halifax Bank Statement Guide — Understanding Your Statement | MoneySorted',
  description: 'A plain-English guide to reading your Halifax bank statement — transaction codes, columns, direct debits, standing orders, and how to download your Halifax statement as a PDF.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/halifax-bank-statement-guide' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="Halifax Bank Statement Guide — Understanding Your Statement"
      intro="Halifax is one of the UK's largest banks, and its statements follow the standard UK banking format — but the codes and columns still trip people up. This guide explains every term on a Halifax statement in plain English."
      ctaLabel="Analyse My Halifax Statement Free →"
    >

      <h2>How to download your Halifax bank statement</h2>
      <p>Halifax provides PDF statements through the mobile app and online banking:</p>
      <ul>
        <li><strong>Halifax app</strong> — tap your account → tap the three-dot menu or <em>More</em> → <em>Statements &amp; documents</em> → select your period → download PDF</li>
        <li><strong>Online banking</strong> — log in at halifax.co.uk → select your account → <em>Statements &amp; documents</em> in the left panel → choose month → download</li>
        <li><strong>Older statements</strong> — Halifax holds up to 7 years of statements online. For older records, visit a branch or request by post.</li>
      </ul>
      <p>Halifax statements are generated on a fixed date each month (the same date your account was opened, or the first of the month). They cover all transactions settled during that calendar period.</p>

      <h2>What the columns on a Halifax statement mean</h2>
      <p>A Halifax current account statement uses these columns:</p>
      <ul>
        <li><strong>Date</strong> — when the transaction was posted and settled on your account</li>
        <li><strong>Description</strong> — a short reference prefixed with a transaction type code</li>
        <li><strong>Debit (£)</strong> — money leaving your account</li>
        <li><strong>Credit (£)</strong> — money arriving in your account</li>
        <li><strong>Balance (£)</strong> — your running balance after each entry; shown with "OD" if overdrawn</li>
      </ul>

      <h2>Halifax transaction codes explained</h2>
      <p>Halifax uses the same standard UK banking codes as its sister banks Lloyds and Bank of Scotland — all are part of the same banking group:</p>
      <ul>
        <li><strong>DD</strong> — Direct Debit. A recurring authorised payment collected by a company on agreed dates — utilities, insurance, subscriptions, gym memberships.</li>
        <li><strong>SO</strong> — Standing Order. A fixed recurring transfer you set up yourself, for the same amount each time — rent, regular savings, shared bills.</li>
        <li><strong>FPI</strong> — Faster Payment In. Money received into your account via near-instant bank transfer.</li>
        <li><strong>FPO</strong> — Faster Payment Out. A bank transfer you sent via Faster Payments.</li>
        <li><strong>BGC</strong> — Bank Giro Credit. A credit into your account — salary payments, HMRC tax credits, and pension payments commonly appear this way.</li>
        <li><strong>BACS</strong> — Bankers' Automated Clearing Services. A 3-working-day payment used for payroll runs and bulk employer payments.</li>
        <li><strong>CHAPS</strong> — Clearing House Automated Payment System. A same-day high-value payment, typically used for property completions.</li>
        <li><strong>ATM</strong> — Cash withdrawal from a cash machine.</li>
        <li><strong>POS</strong> — Point of Sale. A Halifax debit card payment at a physical location.</li>
        <li><strong>CHQ</strong> — Cheque payment, followed by the cheque serial number.</li>
        <li><strong>TFR</strong> — Internal transfer between your own Halifax accounts.</li>
        <li><strong>INT</strong> — Interest — either overdraft interest charged or savings interest paid.</li>
        <li><strong>OD</strong> — Overdrawn. Your account balance is in the negative.</li>
        <li><strong>REV</strong> — Reversal. A transaction that was applied and then returned or cancelled.</li>
      </ul>

      <div className="cp-callout">
        <p>💡 Halifax, Lloyds, and Bank of Scotland are all part of Lloyds Banking Group and share the same banking infrastructure. If you hold accounts across these brands, the statement format and all transaction codes are identical.</p>
      </div>

      <h2>Opening balance, closing balance, and verifying your statement</h2>
      <p>Each Halifax statement covers a fixed monthly period. The <strong>opening balance</strong> at the top shows what your account held at the start; the <strong>closing balance</strong> at the bottom shows what remained at the end.</p>
      <p>Verification is straightforward: opening balance + total credits − total debits = closing balance. Halifax includes subtotals at the bottom of each page to make this check easy.</p>
      <p>A balance shown as "OD" means your account was overdrawn at that point. Halifax charges daily interest on arranged overdrafts (currently up to 39.9% EAR) — this appears as an INT entry, typically near the end of each monthly period.</p>

      <h2>How to dispute a transaction on your Halifax statement</h2>
      <ol>
        <li>Search the full description text online — most billing names that look unfamiliar resolve to a merchant you'll recognise</li>
        <li>For an unauthorised Direct Debit, the Direct Debit Guarantee entitles you to an immediate refund from Halifax — request via the app, online banking, or by calling 0345 720 3040</li>
        <li>For unrecognised card payments, raise a dispute through the app or call Halifax — the dispute process typically takes 5–15 working days</li>
        <li>Halifax is covered by the Financial Ombudsman Service if a dispute isn't resolved to your satisfaction</li>
      </ol>

      <h2>Analyse your Halifax statement automatically</h2>
      <p>Going through a Halifax statement line by line takes time — especially when transaction codes are cryptic and categories aren't labelled. MoneySorted reads your Halifax PDF and instantly categorises every transaction, calculates spending totals, and produces a full monthly breakdown.</p>
      <p>No Halifax login required. Upload the PDF you've already downloaded and get your analysis in under 60 seconds. Export to CSV or Excel for your own records.</p>
      <p>See also: <Link href="/halifax-bank-statement-analyser">Halifax bank statement analyser</Link> or the <Link href="/bank-statement-to-excel">complete guide to converting UK bank statements to Excel</Link>.</p>

    </ContentPage>
  );
}
