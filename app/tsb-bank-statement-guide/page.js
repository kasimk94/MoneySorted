import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'TSB Bank Statement Guide — What Everything Means | MoneySorted',
  description: 'Understand every code and column on your TSB bank statement. Plain-English guide to TSB transaction codes, direct debits, standing orders, and how to download your statement as a PDF.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/tsb-bank-statement-guide' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="TSB Bank Statement Guide — What Everything Means"
      intro="TSB bank statements use the same standard UK banking codes as most high street banks, but with a few quirks that catch people out. This guide explains every transaction code, what each column means, and how to download and read your TSB statement."
      ctaLabel="Analyse My TSB Statement Free →"
    >

      <h2>How to download your TSB bank statement</h2>
      <p>TSB provides PDF statements through online banking and the mobile app:</p>
      <ul>
        <li><strong>TSB app</strong> — tap your account → tap the menu or <em>More</em> → <em>Statements</em> → select the month → download PDF</li>
        <li><strong>Online banking</strong> — log in at tsb.co.uk → select your account → <em>Statements</em> → choose the period → download as PDF</li>
        <li><strong>Older statements</strong> — TSB holds up to 7 years of statements online. For records beyond that, contact TSB by secure message or call 03459 758 758.</li>
        <li><strong>Branch access</strong> — unlike purely digital banks, TSB has a branch network and you can request statement prints in branch if needed.</li>
      </ul>
      <p>TSB switched its banking platform in 2018, which means statements from before April 2018 may look different in format and layout from current statements.</p>

      <h2>What the columns on a TSB statement mean</h2>
      <p>A TSB current account statement is laid out with these columns:</p>
      <ul>
        <li><strong>Date</strong> — when the transaction posted to your account</li>
        <li><strong>Description</strong> — a short reference identifying the payment type and merchant or sender</li>
        <li><strong>Paid out</strong> — money leaving your account (debits)</li>
        <li><strong>Paid in</strong> — money arriving in your account (credits)</li>
        <li><strong>Balance</strong> — your running balance after each transaction; shown with "OD" if overdrawn</li>
      </ul>

      <h2>TSB transaction codes explained</h2>
      <p>TSB uses the standard UK payment type codes in the description field:</p>
      <ul>
        <li><strong>DD</strong> — Direct Debit. A recurring authorised payment collected by a company on agreed dates — utilities, insurance, phone contracts, subscriptions, and council tax.</li>
        <li><strong>SO</strong> — Standing Order. A fixed recurring transfer you set up yourself — same amount, same date each period. Commonly used for rent or regular savings.</li>
        <li><strong>FPI</strong> — Faster Payment In. Near-instant money received from another UK bank account via Faster Payments.</li>
        <li><strong>FPO</strong> — Faster Payment Out. A near-instant bank transfer you sent via Faster Payments.</li>
        <li><strong>BGC</strong> — Bank Giro Credit. A credit into your account — salary payments, HMRC tax credits, and benefit payments commonly appear as BGC.</li>
        <li><strong>BACS</strong> — Bankers' Automated Clearing Services. A 3-working-day payment used for payroll runs and employer payments.</li>
        <li><strong>CHAPS</strong> — Clearing House Automated Payment System. A same-day high-value payment, typically used for property purchases.</li>
        <li><strong>ATM</strong> — Cash machine withdrawal.</li>
        <li><strong>POS</strong> — Point of Sale. A TSB debit card payment at a physical terminal.</li>
        <li><strong>CHQ</strong> — Cheque payment, followed by the cheque serial number.</li>
        <li><strong>TFR</strong> — Transfer between your own TSB accounts.</li>
        <li><strong>INT</strong> — Interest charged on an overdraft or earned on your balance.</li>
        <li><strong>OD</strong> — Overdrawn. Your balance is in the negative.</li>
        <li><strong>REV</strong> — Reversal. A transaction that was applied and then reversed or refunded.</li>
        <li><strong>VIS</strong> — Visa card transaction, occasionally shown for card payments.</li>
      </ul>

      <div className="cp-callout">
        <p>💡 TSB was part of Lloyds Banking Group until 2013 and used the same systems — which is why TSB's statement codes and layout are still nearly identical to Lloyds and Halifax. If you've banked with any of these brands, the format will be familiar.</p>
      </div>

      <h2>Opening balance, closing balance, and checking your TSB statement</h2>
      <p>Each TSB statement covers one calendar month. The <strong>opening balance</strong> at the top shows what your account held at the start of the period; the <strong>closing balance</strong> at the bottom shows what remained at the end.</p>
      <p>To verify: opening balance + total paid in − total paid out = closing balance. TSB includes running totals at the end of each statement page.</p>
      <p>A balance with "OD" means your account was overdrawn at that point. TSB charges a monthly usage fee on arranged overdrafts rather than a daily interest rate on some accounts — check your account terms for the exact charges, which will appear as a fee entry on your statement.</p>

      <h2>How to dispute a charge on your TSB statement</h2>
      <ol>
        <li>Search the description text online — most unfamiliar billing names resolve to a legitimate merchant</li>
        <li>Check your email around the same date for receipts or order confirmations</li>
        <li>For an unauthorised Direct Debit, claim an immediate refund under the Direct Debit Guarantee — TSB must return the money on request via the app, online banking, or by calling 03459 758 758</li>
        <li>For unrecognised card payments, raise a dispute through the TSB app or by calling the number above</li>
        <li>TSB is covered by the Financial Ombudsman Service for unresolved disputes</li>
      </ol>

      <h2>Analyse your TSB statement automatically</h2>
      <p>Decoding TSB transaction codes and categorising a full month of spending by hand is time-consuming. MoneySorted reads your TSB PDF statement and does it automatically — every transaction categorised, monthly totals calculated, and a full spending breakdown ready in under 60 seconds.</p>
      <p>No TSB login required. Upload the PDF you've already downloaded and export to CSV or Excel for your records or accountant.</p>
      <p>See also: <Link href="/bank-statement-to-excel">complete guide to converting UK bank statements to Excel</Link>.</p>

    </ContentPage>
  );
}
