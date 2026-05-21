import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'Santander Bank Statement Guide — What Everything Means | MoneySorted',
  description: 'Understand every code, column, and term on your Santander bank statement. Plain-English guide to Santander transaction codes, direct debits, and how to download your statement.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/santander-bank-statement-guide' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="Santander Bank Statement Guide — What Everything Means"
      intro="Santander bank statements use a familiar set of UK banking codes, but the layout and terminology can still catch people out. This guide explains every transaction type, what each column means, and how to read your Santander statement from top to bottom."
      ctaLabel="Analyse My Santander Statement Free →"
    >

      <h2>How to download your Santander bank statement</h2>
      <p>Santander provides PDF statements through both the mobile app and online banking:</p>
      <ul>
        <li><strong>Santander app</strong> — tap your account → tap the menu (three lines or settings icon) → <em>Statements</em> → select the month → download PDF</li>
        <li><strong>Online banking</strong> — log in at santander.co.uk → select your account → <em>Statements</em> from the top menu → choose the period → download as PDF</li>
        <li><strong>Older statements</strong> — Santander holds up to 7 years of statements online. To request statements older than that, contact Santander by secure message or by calling 0330 9 123 123.</li>
      </ul>
      <p>Santander offers e-statements by default for most current account holders. If you need a paper statement for a specific purpose, you can request one through the app or by calling the number above — note that paper statements may carry a fee.</p>

      <h2>What the columns on a Santander statement mean</h2>
      <p>A standard Santander current account statement is laid out with these columns:</p>
      <ul>
        <li><strong>Date</strong> — the date the transaction posted to your account</li>
        <li><strong>Description</strong> — a reference identifying the payment type and merchant or sender</li>
        <li><strong>Money out</strong> — amounts debited (leaving your account)</li>
        <li><strong>Money in</strong> — amounts credited (arriving in your account)</li>
        <li><strong>Balance</strong> — your running balance after each transaction; shown with "OD" if your account is overdrawn</li>
      </ul>

      <h2>Santander transaction codes explained</h2>
      <p>The description on a Santander statement typically starts with a code identifying the payment method, followed by the merchant or reference name:</p>
      <ul>
        <li><strong>DD</strong> — Direct Debit. A recurring authorised payment collected by a company — used for utilities, insurance, phone contracts, subscriptions, and gym memberships.</li>
        <li><strong>SO</strong> — Standing Order. A fixed recurring transfer you set up yourself — same amount, same date — commonly used for rent or regular savings.</li>
        <li><strong>FPI</strong> — Faster Payment In. Money received into your account via the Faster Payments network (near-instant bank transfer).</li>
        <li><strong>FPO</strong> — Faster Payment Out. A bank transfer you sent via Faster Payments.</li>
        <li><strong>BGC</strong> — Bank Giro Credit. A credit into your account — salary payments, HMRC refunds, and pension credits commonly appear as BGC.</li>
        <li><strong>BACS</strong> — Bankers' Automated Clearing Services. A 3-working-day payment used for payroll and bulk transfers.</li>
        <li><strong>CHAPS</strong> — Clearing House Automated Payment System. A same-day high-value payment — most commonly used for property completions.</li>
        <li><strong>ATM</strong> — Cash withdrawal from a cash machine.</li>
        <li><strong>POS</strong> — Point of Sale. A debit card payment at a shop, restaurant, or physical terminal.</li>
        <li><strong>CHQ</strong> — Cheque payment, followed by the cheque number.</li>
        <li><strong>TFR</strong> — Transfer between your own Santander accounts.</li>
        <li><strong>INT</strong> — Interest charged on an overdraft or earned on your balance.</li>
        <li><strong>OD</strong> — Overdrawn. Your account balance is negative.</li>
        <li><strong>REV</strong> — Reversal. A transaction that was applied and then reversed or refunded.</li>
      </ul>

      <div className="cp-callout">
        <p>💡 Santander is a Spanish-owned bank, so some cross-border or business payment descriptions may include references to Banco Santander SA — this is normal and simply reflects the parent company processing the payment.</p>
      </div>

      <h2>Opening balance, closing balance, and checking your statement</h2>
      <p>Each Santander statement covers a fixed period — usually one calendar month. The <strong>opening balance</strong> at the top is what your account held at the start; the <strong>closing balance</strong> at the bottom is what remained at the end of the period.</p>
      <p>To verify: opening balance + total money in − total money out = closing balance. Santander includes running totals at the bottom of each statement page to help you check this.</p>
      <p>A balance with "OD" means your account was overdrawn at that point. Santander charges arranged overdraft interest daily — this appears as an INT charge, typically near the end of the statement period.</p>

      <h2>How to dispute a charge on your Santander statement</h2>
      <ol>
        <li>Search the description text online first — most cryptic billing names resolve to a legitimate merchant</li>
        <li>Check your email for receipts or confirmations around the same date</li>
        <li>For a Direct Debit you didn't authorise, the Direct Debit Guarantee entitles you to an immediate refund from Santander — request this via the app or by calling 0330 9 123 123</li>
        <li>For unrecognised card payments, call Santander or raise a dispute through the app — Santander has up to 8 weeks to resolve it</li>
      </ol>

      <h2>Analyse your Santander statement automatically</h2>
      <p>Decoding Santander transaction codes and categorising every payment by hand takes significant time. MoneySorted reads your Santander PDF statement and does it automatically — full spending breakdown, monthly totals, and category analysis in under 60 seconds.</p>
      <p>No Santander login required. Upload the PDF you've already downloaded and export the results to CSV or Excel if needed.</p>
      <p>See also: <Link href="/santander-bank-statement-analyser">Santander bank statement analyser</Link> or the <Link href="/bank-statement-to-excel">complete guide to converting UK bank statements to Excel</Link>.</p>

    </ContentPage>
  );
}
