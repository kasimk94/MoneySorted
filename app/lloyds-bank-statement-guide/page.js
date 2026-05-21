import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'Lloyds Bank Statement Guide — Understanding Your Statement | MoneySorted',
  description: 'A plain-English guide to reading your Lloyds bank statement — transaction codes, columns, direct debits, standing orders, and how to download your statement as a PDF.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/lloyds-bank-statement-guide' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="Lloyds Bank Statement Guide — Understanding Your Statement"
      intro="Lloyds bank statements are packed with codes and abbreviations that never come with an explanation. This guide covers everything — from what each column means to the full list of transaction codes — so you can read your Lloyds statement with confidence."
      ctaLabel="Analyse My Lloyds Statement Free →"
    >

      <h2>How to download your Lloyds bank statement</h2>
      <p>Lloyds provides PDF statements through both online banking and the mobile app:</p>
      <ul>
        <li><strong>Lloyds app</strong> — tap your account → tap <em>More</em> (or the three-dot menu) → <em>Statements &amp; documents</em> → select your statement period → download PDF</li>
        <li><strong>Online banking</strong> — log in at lloydsbank.com → select your account → <em>Statements &amp; documents</em> in the left menu → choose month → download</li>
        <li><strong>Older statements</strong> — Lloyds keeps up to 7 years of statements available online. For statements beyond that, you can request them in branch or by post.</li>
      </ul>
      <p>Statements are generated on the same date each month, aligned to when your account was opened. They cover the full calendar month of transactions up to that date.</p>

      <h2>What the columns on a Lloyds statement mean</h2>
      <p>A standard Lloyds current account statement uses these columns:</p>
      <ul>
        <li><strong>Date</strong> — when the transaction settled on your account (may differ slightly from when you made the payment)</li>
        <li><strong>Description</strong> — a short reference identifying the type and source of the payment</li>
        <li><strong>Debit (£)</strong> — money leaving your account</li>
        <li><strong>Credit (£)</strong> — money arriving in your account</li>
        <li><strong>Balance (£)</strong> — your running account balance after each transaction</li>
      </ul>

      <h2>Lloyds transaction codes explained</h2>
      <p>The description column on a Lloyds statement includes a type prefix before the merchant or reference name:</p>
      <ul>
        <li><strong>DD</strong> — Direct Debit. A recurring authorised payment collected by a company on set dates — utilities, insurance, mobile contracts, streaming subscriptions.</li>
        <li><strong>SO</strong> — Standing Order. A fixed transfer you've set up yourself, for the same amount on the same date each period. Commonly used for rent or savings.</li>
        <li><strong>FPI</strong> — Faster Payment In. Money arriving in your account via near-instant bank transfer.</li>
        <li><strong>FPO</strong> — Faster Payment Out. A bank transfer you sent via Faster Payments.</li>
        <li><strong>BGC</strong> — Bank Giro Credit. A credit payment into your account — salaries, HMRC tax credits, and BACS-based employer payments commonly appear this way.</li>
        <li><strong>BACS</strong> — Bankers' Automated Clearing Services. A 3-working-day payment — used for payroll runs and bulk transfers.</li>
        <li><strong>CHAPS</strong> — Clearing House Automated Payment System. A same-day high-value payment, typically used for property completions.</li>
        <li><strong>ATM</strong> — Cash machine withdrawal.</li>
        <li><strong>POS</strong> — Point of Sale. A card payment made at a shop, restaurant, or terminal.</li>
        <li><strong>CHQ</strong> — Cheque payment, usually followed by the cheque number.</li>
        <li><strong>TFR</strong> — Internal transfer between your own Lloyds accounts.</li>
        <li><strong>INT</strong> — Interest — either charged on an overdraft or paid on a savings balance.</li>
        <li><strong>OD</strong> — Overdrawn. Shown with the balance when your account is in the negative.</li>
        <li><strong>REV</strong> — Reversal. A transaction that was posted and then reversed or refunded.</li>
      </ul>

      <div className="cp-callout">
        <p>💡 Lloyds is part of the same banking group as Halifax and Bank of Scotland — so if you hold accounts with multiple brands in the group, the statement layout and codes are nearly identical across all three.</p>
      </div>

      <h2>Opening balance, closing balance, and checking your statement</h2>
      <p>Every Lloyds statement covers a fixed period, usually one calendar month. The <strong>opening balance</strong> at the top reflects what was in your account at the start. The <strong>closing balance</strong> at the bottom shows what remained at the end of the period.</p>
      <p>You can verify any statement using: opening balance + total credits − total debits = closing balance. Lloyds includes subtotals on each page, making this straightforward to check.</p>
      <p>If your balance shows "OD" at any point, your account was overdrawn. Lloyds charges daily interest on arranged overdrafts (currently up to 39.9% EAR), which appears as an INT entry near month-end.</p>

      <h2>How to dispute a transaction on your Lloyds statement</h2>
      <p>If you see something you don't recognise:</p>
      <ol>
        <li>Search the description text online first — most unfamiliar names are legitimate merchants using abbreviated billing names</li>
        <li>For unrecognised Direct Debits, the Direct Debit Guarantee entitles you to an immediate refund from Lloyds — no need to contact the company first</li>
        <li>For card payments you don't recognise, call Lloyds on 0345 300 0000 or use the app to raise a dispute</li>
        <li>Lloyds must resolve disputes within 8 weeks; most card chargebacks are processed within 5–10 working days</li>
      </ol>

      <h2>Analyse your Lloyds statement automatically</h2>
      <p>Going through a Lloyds statement manually — decoding codes, categorising transactions, adding up monthly totals — takes significant time. MoneySorted does it automatically: upload your Lloyds PDF statement and get a full categorised spending breakdown within 60 seconds.</p>
      <p>No Lloyds login required. The PDF you've already downloaded is all you need. Export to CSV or Excel for your own records or to share with an accountant.</p>
      <p>See also: <Link href="/lloyds-bank-statement-analyser">Lloyds bank statement analyser</Link> or the <Link href="/bank-statement-to-excel">complete guide to converting UK bank statements to Excel</Link>.</p>

    </ContentPage>
  );
}
