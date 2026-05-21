import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'Chase UK Bank Statement Guide — What Everything Means | MoneySorted',
  description: 'How to download your Chase UK bank statement as a PDF, what every transaction type means, and how to analyse your Chase spending data.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/chase-bank-statement-guide' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="Chase UK Bank Statement Guide — What Everything Means"
      intro="Chase UK is JPMorgan Chase's digital bank, launched in the UK in 2021. It's app-only with no branches, and its statements look different from traditional high street bank statements. This guide explains how to get your Chase UK statement and what every part of it means."
      ctaLabel="Analyse My Chase Statement Free →"
    >

      <h2>How to download your Chase UK bank statement</h2>
      <p>Chase UK is entirely app-based — all statement access happens through the Chase app:</p>
      <ul>
        <li><strong>Chase app (PDF)</strong> — tap <em>Profile</em> (top right) → <em>Statements &amp; documents</em> → select the month → download PDF</li>
        <li><strong>Chase app (transaction history)</strong> — your full transaction list is accessible directly from the account screen; tap any transaction for full details</li>
        <li><strong>Older statements</strong> — Chase holds statements from account opening. Use the statements section of the app to access earlier months.</li>
        <li><strong>No web portal</strong> — unlike traditional banks, Chase UK has no desktop online banking. All access is through the mobile app only.</li>
      </ul>
      <p>Chase UK PDF statements carry official JPMorgan Chase branding and are accepted by most mortgage lenders, landlords, and government bodies for proof of income or account activity.</p>

      <h2>What the columns on a Chase UK statement mean</h2>
      <p>Chase UK statements are clean and modern in layout:</p>
      <ul>
        <li><strong>Date</strong> — the date the transaction was posted to your account</li>
        <li><strong>Description</strong> — the merchant name or transfer reference; Chase uses enriched merchant names in the app, which typically carry through to the PDF</li>
        <li><strong>Amount out</strong> — money leaving your account</li>
        <li><strong>Amount in</strong> — money received into your account</li>
        <li><strong>Balance</strong> — your running balance after each transaction</li>
      </ul>

      <h2>Chase UK transaction types explained</h2>
      <p>Chase UK uses plain-language labels for most transactions rather than cryptic codes:</p>
      <ul>
        <li><strong>Card payment</strong> — a payment made with your Chase Visa debit card, in person or online.</li>
        <li><strong>Faster Payment In / Out</strong> — near-instant bank transfers sent or received via the UK Faster Payments network.</li>
        <li><strong>Direct Debit</strong> — a recurring authorised payment collected by a company on agreed dates. Chase UK supports Direct Debits on its current accounts.</li>
        <li><strong>Standing Order</strong> — a fixed recurring transfer you've scheduled — same amount, same date each period.</li>
        <li><strong>ATM withdrawal</strong> — cash taken from a cash machine. Chase UK does not charge ATM fees in the UK or abroad.</li>
        <li><strong>Cashback</strong> — 1% cashback earned on eligible card purchases (up to £15/month on the standard account). Appears as a credit on your statement.</li>
        <li><strong>Interest</strong> — interest earned on your Chase saver account balance, or charged if your account goes into an arranged overdraft.</li>
        <li><strong>Refund</strong> — a merchant refund, shown as a positive credit.</li>
        <li><strong>Transfer</strong> — money moved between your Chase current account and Chase saver account, or to/from an external bank account.</li>
        <li><strong>CHAPS</strong> — a same-day high-value payment, available for large transfers like property purchases.</li>
      </ul>

      <div className="cp-callout">
        <p>💡 Chase UK's 1% cashback payments appear as credits on your statement. Don't mistake these for duplicate payments or errors — they're a feature of the account. Cashback is paid monthly and capped at £15 per month.</p>
      </div>

      <h2>Chase UK vs traditional bank statements — what's different</h2>
      <p>A few things set Chase UK apart from a Barclays or HSBC statement:</p>
      <ul>
        <li><strong>Cashback credits</strong> — you'll see regular cashback credits that don't appear on traditional bank statements</li>
        <li><strong>Cleaner merchant names</strong> — Chase enriches transaction descriptions so you see actual business names more often than payment processor codes</li>
        <li><strong>App-only access</strong> — no branch or desktop banking; all statement downloads are from the mobile app</li>
        <li><strong>Newer account history</strong> — Chase UK launched in September 2021, so statements only go back to when accounts were opened</li>
        <li><strong>No cheques</strong> — Chase UK does not support cheque payments; CHQ entries won't appear on your statement</li>
      </ul>

      <h2>Opening balance, closing balance, and checking your statement</h2>
      <p>Each Chase UK statement covers one calendar month. The <strong>opening balance</strong> shows what your account held at the start of the period; the <strong>closing balance</strong> shows what remained at the end.</p>
      <p>Verify your statement using: opening balance + total in − total out = closing balance. If the numbers don't reconcile, check for pending transactions that may have posted across the month boundary.</p>

      <h2>Analyse your Chase statement automatically</h2>
      <p>Chase UK's in-app spending categories are useful day-to-day, but they don't transfer to the PDF statement. MoneySorted reads your Chase UK PDF and re-applies categories automatically — full spending breakdown, monthly totals, and a complete dashboard in under 60 seconds.</p>
      <p>No Chase login required. Upload the PDF you've downloaded from the app and export to CSV or Excel if needed.</p>
      <p>See also: <Link href="/bank-statement-to-excel">complete guide to converting UK bank statements to Excel</Link>.</p>

    </ContentPage>
  );
}
