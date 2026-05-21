import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'Barclays Bank Statement Guide — What Everything Means | MoneySorted',
  description: 'Understand every code, column, and abbreviation on your Barclays bank statement. Plain-English guide to Barclays transaction codes, direct debits, and how to read your statement.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/barclays-bank-statement-guide' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="Barclays Bank Statement Guide — What Everything Means"
      intro="Barclays bank statements use a set of abbreviations and transaction codes that aren't explained in the app or on the statement itself. This guide walks through every code, column, and term — so you always know exactly what you're looking at."
      ctaLabel="Analyse My Barclays Statement Free →"
    >

      <h2>How to download your Barclays bank statement</h2>
      <p>Barclays provides statements through online banking and the Barclays app:</p>
      <ul>
        <li><strong>Barclays app</strong> — tap your account → tap the menu icon → <em>Statements &amp; documents</em> → select month → download PDF</li>
        <li><strong>Online banking</strong> — log in at barclays.co.uk → select account → <em>Statements</em> in the left panel → choose period → download</li>
        <li><strong>Older statements</strong> — Barclays holds up to 7 years of statements online. For business or joint accounts, access may differ.</li>
      </ul>
      <p>Statements are issued on a set date each month (usually the same day your account was opened). You can download them as PDFs from the statements menu at any time.</p>

      <h2>What the columns on your Barclays statement mean</h2>
      <p>A standard Barclays current account statement contains these columns:</p>
      <ul>
        <li><strong>Date</strong> — the date the transaction posted to your account</li>
        <li><strong>Description</strong> — the transaction reference, usually starting with a code that identifies the payment type</li>
        <li><strong>Money out</strong> — amounts debited (leaving your account)</li>
        <li><strong>Money in</strong> — amounts credited (arriving in your account)</li>
        <li><strong>Balance</strong> — your running balance after each transaction; shown with "OD" if your account is overdrawn</li>
      </ul>

      <h2>Barclays transaction codes explained</h2>
      <p>The description column on a Barclays statement starts with a short code identifying the payment type:</p>
      <ul>
        <li><strong>DD</strong> — Direct Debit. A regular authorised payment collected by a company — used for utilities, insurance, subscriptions, and phone bills.</li>
        <li><strong>SO</strong> — Standing Order. A fixed recurring transfer you set up — same amount each time, on a set date. Common for rent or regular savings transfers.</li>
        <li><strong>FPI</strong> — Faster Payment In. Money received into your account via the Faster Payments network (near-instant).</li>
        <li><strong>FPO</strong> — Faster Payment Out. Money you sent via Faster Payments.</li>
        <li><strong>BGC</strong> — Bank Giro Credit. A credit payment into your account — salary deposits, HMRC refunds, and pension payments often appear as BGC.</li>
        <li><strong>BACS</strong> — Bankers' Automated Clearing Services. A 3-working-day electronic payment — used for bulk salary runs and supplier payments.</li>
        <li><strong>CHAPS</strong> — Clearing House Automated Payment System. A same-day high-value transfer — commonly used for property completions.</li>
        <li><strong>CDT</strong> — Card transaction. A debit card payment made in a shop or online.</li>
        <li><strong>ATM</strong> — Cash withdrawal from a cash machine.</li>
        <li><strong>CHQ</strong> — Cheque payment, followed by the cheque number.</li>
        <li><strong>TFR</strong> — Transfer between your own Barclays accounts.</li>
        <li><strong>INT</strong> — Interest charged on an overdraft or earned on your balance.</li>
        <li><strong>OD</strong> — Overdrawn. Your balance is negative — shown alongside the balance figure.</li>
        <li><strong>REV</strong> — Reversal. A transaction that was applied and then reversed or refunded.</li>
      </ul>

      <div className="cp-callout">
        <p>💡 Barclays debit card payments in shops often appear with a one or two day delay on your statement — the merchant authorises the payment immediately but the posting date may differ from when you actually paid.</p>
      </div>

      <h2>Opening balance, closing balance, and how to check your statement</h2>
      <p>Each Barclays statement covers one calendar month. The <strong>opening balance</strong> at the top is what you held at the start of the period; the <strong>closing balance</strong> at the bottom is what remained at the end.</p>
      <p>To verify your statement: opening balance + total money in − total money out = closing balance. Barclays prints running totals at the end of each statement page, which makes this check easy.</p>
      <p>If your balance appears as "OD" at any point, your account was overdrawn. Barclays charges daily interest on arranged overdrafts — this appears as an "INT" entry, usually at the end of the month.</p>

      <h2>How to dispute an unrecognised charge on Barclays</h2>
      <p>If you spot a transaction you don't recognise:</p>
      <ol>
        <li>Search the full description text online — most cryptic merchant names resolve quickly</li>
        <li>Check your email for receipts dated around the same time</li>
        <li>If it's a Direct Debit you didn't authorise, you're covered by the Direct Debit Guarantee — Barclays must refund you immediately on request</li>
        <li>For unrecognised card payments, contact Barclays via the app chat, by calling 0345 734 5345, or visiting a branch to raise a dispute</li>
        <li>Barclays has 8 weeks to resolve a dispute, though most card chargebacks are handled much faster</li>
      </ol>

      <h2>Analyse your Barclays statement automatically</h2>
      <p>Manually decoding Barclays transaction codes and categorising every payment takes time. MoneySorted reads your Barclays PDF statement and instantly categorises every transaction, calculates monthly totals, and produces a full spending breakdown — in under 60 seconds.</p>
      <p>No Barclays login required. Just upload the PDF you've already downloaded. You can also export everything to CSV or Excel.</p>
      <p>See also: <Link href="/barclays-bank-statement-analyser">Barclays bank statement analyser</Link> or the <Link href="/bank-statement-to-excel">complete guide to converting UK bank statements to Excel</Link>.</p>

    </ContentPage>
  );
}
