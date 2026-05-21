import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'NatWest Bank Statement Guide — What Everything Means | MoneySorted',
  description: 'Understand every code and column on your NatWest bank statement. Plain-English guide to NatWest transaction codes, direct debits, standing orders, and how to download your statements.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/natwest-bank-statement-guide' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="NatWest Bank Statement Guide — What Everything Means"
      intro="NatWest bank statements use a set of codes and abbreviations that most customers have never had explained. This guide covers every transaction code, what each column means, and how to make sense of your statement from top to bottom."
      ctaLabel="Analyse My NatWest Statement Free →"
    >

      <h2>How to download your NatWest bank statement</h2>
      <p>NatWest makes statements available through both the mobile app and online banking:</p>
      <ul>
        <li><strong>NatWest app</strong> — tap your account → tap <em>Statements</em> (or the document icon) → select the month → download as PDF</li>
        <li><strong>Online banking</strong> — log in at natwest.com → select your account → <em>Statements</em> in the left navigation → choose period → download PDF</li>
        <li><strong>Older statements</strong> — NatWest holds up to 7 years of statements online. Beyond that, you can request historical statements in branch or via secure message, though a fee may apply.</li>
      </ul>
      <p>NatWest also offers e-statements by default for most current account holders, meaning your statements are digital-only unless you've specifically opted into paper statements.</p>

      <h2>What the columns on a NatWest statement mean</h2>
      <p>A NatWest current account statement is laid out with the following columns:</p>
      <ul>
        <li><strong>Date</strong> — the date the transaction was posted to your account</li>
        <li><strong>Description</strong> — the payment reference, usually prefixed with a transaction type code</li>
        <li><strong>Paid out</strong> — money leaving your account (debits)</li>
        <li><strong>Paid in</strong> — money arriving in your account (credits)</li>
        <li><strong>Balance</strong> — your running balance after each transaction; shown with "OD" if overdrawn</li>
      </ul>

      <h2>NatWest transaction codes explained</h2>
      <p>The description field on a NatWest statement begins with a code identifying the payment type, followed by the merchant or reference name:</p>
      <ul>
        <li><strong>DD</strong> — Direct Debit. A recurring payment authorised by you — used for utilities, phone bills, insurance, gym memberships, and subscriptions.</li>
        <li><strong>SO</strong> — Standing Order. A fixed amount you transfer on a regular schedule, set up by you — commonly used for rent payments or regular savings top-ups.</li>
        <li><strong>FPI</strong> — Faster Payment In. Money received via the Faster Payments network — near-instant transfers from another UK bank account.</li>
        <li><strong>FPO</strong> — Faster Payment Out. Money you sent to another account via Faster Payments.</li>
        <li><strong>BGC</strong> — Bank Giro Credit. A credit payment into your account — salary payments, HMRC refunds, and pension credits often appear as BGC.</li>
        <li><strong>BACS</strong> — Bankers' Automated Clearing Services. A 3-working-day electronic payment used for payroll and bulk transfers.</li>
        <li><strong>CHAPS</strong> — Clearing House Automated Payment System. A same-day high-value transfer — most commonly used for property purchases.</li>
        <li><strong>ATM</strong> — Cash withdrawal from a cash machine.</li>
        <li><strong>POS</strong> — Point of Sale. A debit card payment made at a shop, restaurant, or terminal.</li>
        <li><strong>CHQ</strong> — Cheque payment, typically followed by the cheque serial number.</li>
        <li><strong>TFR</strong> — Internal transfer between your own NatWest accounts.</li>
        <li><strong>INT</strong> — Interest charged on an overdraft or earned on a savings balance.</li>
        <li><strong>OD</strong> — Overdrawn. Shown with the balance figure when your account is in the negative.</li>
        <li><strong>REV</strong> — Reversal. A transaction that was posted and then reversed or refunded.</li>
        <li><strong>CR</strong> — Credit. Occasionally appended to an amount to confirm it's money in.</li>
      </ul>

      <div className="cp-callout">
        <p>💡 NatWest is part of the NatWest Group alongside Royal Bank of Scotland (RBS). If you hold accounts with both, the statement layout and transaction codes are identical — the brands share the same underlying banking platform.</p>
      </div>

      <h2>Opening balance, closing balance, and verifying your statement</h2>
      <p>Each NatWest statement covers a set period — typically one calendar month. The <strong>opening balance</strong> at the top shows what was in your account at the start of the period; the <strong>closing balance</strong> shows what remained at the end.</p>
      <p>To verify: opening balance + total paid in − total paid out = closing balance. NatWest prints running totals at the bottom of each statement page to make this easy to check.</p>
      <p>A balance shown with "OD" means you were overdrawn at that point. NatWest charges arranged overdraft interest daily at rates up to 39.49% EAR — this appears as an INT charge, usually near the end of the statement period.</p>

      <h2>How to dispute an unrecognised charge on your NatWest statement</h2>
      <ol>
        <li>Search the description text online — many cryptic merchant names resolve immediately</li>
        <li>Check your email around the same date for any order confirmations or receipts</li>
        <li>For a Direct Debit you didn't authorise, the Direct Debit Guarantee means NatWest must refund you immediately — contact NatWest or use the app to claim</li>
        <li>For unrecognised card payments, call NatWest on 03457 888 444 or raise a dispute through the app</li>
        <li>NatWest has up to 8 weeks to resolve disputes, but most chargebacks are processed within 2 weeks</li>
      </ol>

      <h2>Analyse your NatWest statement automatically</h2>
      <p>Categorising NatWest transactions by hand, decoding the codes, and totalling each spending category takes real time. MoneySorted reads your NatWest PDF statement and does it all in under 60 seconds — full category breakdown, monthly totals, and a spending dashboard ready to explore.</p>
      <p>No NatWest login required. Upload the PDF you've already downloaded and get your analysis instantly. Export the results to CSV or Excel if needed.</p>
      <p>See also: <Link href="/natwest-bank-statement-analyser">NatWest bank statement analyser</Link> or the <Link href="/bank-statement-to-excel">complete guide to converting UK bank statements to Excel</Link>.</p>

    </ContentPage>
  );
}
