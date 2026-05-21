import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'First Direct Bank Statement Guide — Understanding Your Statement | MoneySorted',
  description: 'How to download your First Direct bank statement as a PDF, what every transaction code means, and how to analyse your First Direct account activity.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/first-direct-bank-statement-guide' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="First Direct Bank Statement Guide — Understanding Your Statement"
      intro="First Direct is HSBC's telephone and digital bank — no branches, but a full current account with the same underlying banking infrastructure as HSBC. Its statements use the same codes as HSBC but have a slightly different layout. This guide explains everything."
      ctaLabel="Analyse My First Direct Statement Free →"
    >

      <h2>How to download your First Direct bank statement</h2>
      <p>First Direct provides statements through online banking and the mobile app:</p>
      <ul>
        <li><strong>First Direct app</strong> — tap your account → tap <em>Statements</em> → select the month → download PDF</li>
        <li><strong>Online banking</strong> — log in at firstdirect.com → select your account → <em>Statements</em> from the menu → choose period → download PDF</li>
        <li><strong>Older statements</strong> — First Direct holds up to 7 years of statements online, in line with its parent HSBC. For anything older, call First Direct on 03 456 100 100 — they're available 24/7.</li>
        <li><strong>Paper statements</strong> — First Direct is digital-first, but paper statements are available on request. There may be a charge for older paper records.</li>
      </ul>
      <p>First Direct's 24/7 telephone support is one of its distinguishing features — if you have any issues accessing statements, customer service is always available.</p>

      <h2>What the columns on a First Direct statement mean</h2>
      <p>First Direct current account statements use a standard layout:</p>
      <ul>
        <li><strong>Date</strong> — the date the transaction posted to your account</li>
        <li><strong>Description</strong> — a reference prefixed with a transaction type code, followed by the merchant or sender name</li>
        <li><strong>Paid out</strong> — money leaving your account (debits)</li>
        <li><strong>Paid in</strong> — money arriving in your account (credits)</li>
        <li><strong>Balance</strong> — your running balance after each transaction; shown as negative or with "OD" if overdrawn</li>
      </ul>

      <h2>First Direct transaction codes explained</h2>
      <p>First Direct uses the same transaction codes as HSBC, its parent bank:</p>
      <ul>
        <li><strong>BP</strong> — Bill Payment. A payment made via online or telephone banking to a company — utilities, council tax, HMRC, credit card payments. This is one of the most common codes on First Direct statements.</li>
        <li><strong>DD</strong> — Direct Debit. A recurring authorised payment collected by a company on set dates — utilities, insurance, phone bills, subscriptions.</li>
        <li><strong>SO</strong> — Standing Order. A fixed recurring transfer you've set up — same amount each time on a set schedule.</li>
        <li><strong>FPI</strong> — Faster Payment In. Near-instant money received via the Faster Payments network.</li>
        <li><strong>FPO</strong> — Faster Payment Out. A near-instant bank transfer you sent.</li>
        <li><strong>BGC</strong> — Bank Giro Credit. A credit into your account — salary payments, HMRC refunds, and pension credits often appear this way.</li>
        <li><strong>BACS</strong> — Bankers' Automated Clearing Services. A 3-working-day payment used for payroll and employer salary runs.</li>
        <li><strong>CHAPS</strong> — Clearing House Automated Payment System. A same-day high-value payment, typically used for property completions.</li>
        <li><strong>ATM</strong> — Cash machine withdrawal.</li>
        <li><strong>POS</strong> — Point of Sale. A debit card payment at a physical location.</li>
        <li><strong>CHQ</strong> — Cheque payment, followed by the cheque serial number.</li>
        <li><strong>TFR</strong> — Transfer between your own First Direct or HSBC accounts.</li>
        <li><strong>INT</strong> — Interest charged on an overdraft or earned on savings.</li>
        <li><strong>OD</strong> — Overdrawn. Your balance is in the negative.</li>
        <li><strong>REV</strong> — Reversal. A transaction applied and then returned.</li>
      </ul>

      <div className="cp-callout">
        <p>💡 BP (Bill Payment) is the most frequently misunderstood code on First Direct statements. It simply means you paid a bill through online or telephone banking — it's not a suspicious charge. Check the name after "BP" to identify the recipient.</p>
      </div>

      <h2>First Direct and HSBC — shared infrastructure</h2>
      <p>First Direct runs on HSBC's banking platform, which means:</p>
      <ul>
        <li>Transaction codes are identical between First Direct and HSBC statements</li>
        <li>You can link First Direct and HSBC accounts and transfer between them instantly using TFR</li>
        <li>Both banks are covered by the same FSCS protection (up to £85,000 combined across both brands)</li>
        <li>If you hold accounts with both, note that FSCS protection covers the combined total — not £85,000 per brand</li>
      </ul>

      <h2>Opening balance, closing balance, and checking your statement</h2>
      <p>Each First Direct statement covers one calendar month. The <strong>opening balance</strong> shows what your account held at the start; the <strong>closing balance</strong> shows what remained at the end.</p>
      <p>To verify: opening balance + total paid in − total paid out = closing balance. First Direct prints totals at the bottom of each page.</p>
      <p>An "OD" balance means your account was overdrawn. First Direct offers a £250 interest-free buffer on its 1st Account — overdraft interest applies beyond that at the arranged rate.</p>

      <h2>Analyse your First Direct statement automatically</h2>
      <p>First Direct's BP, BGC, and FPI codes can make a statement hard to parse quickly. MoneySorted reads your First Direct PDF and categorises every transaction automatically — full spending breakdown and monthly totals in under 60 seconds.</p>
      <p>No First Direct login required. Upload the PDF you've already downloaded and export the results to CSV or Excel for your accountant or personal records.</p>
      <p>See also: <Link href="/hsbc-bank-statement-analyser">HSBC bank statement analyser</Link> or the <Link href="/bank-statement-to-excel">complete guide to converting UK bank statements to Excel</Link>.</p>

    </ContentPage>
  );
}
