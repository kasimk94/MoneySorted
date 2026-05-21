import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'Monzo Bank Statement Guide — Understanding Your Monzo Statement | MoneySorted',
  description: 'How to download your Monzo PDF statement, what every column means, and how to read and analyse your Monzo transaction history. Includes CSV export options.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/monzo-bank-statement-guide' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="Monzo Bank Statement Guide — Understanding Your Monzo Statement"
      intro="Monzo statements look different from traditional bank statements — they're cleaner, have fewer cryptic codes, and can be downloaded in multiple formats. This guide explains everything on your Monzo statement and how to get the most out of your transaction data."
      ctaLabel="Analyse My Monzo Statement Free →"
    >

      <h2>How to download your Monzo bank statement</h2>
      <p>Monzo lets you download statements directly from the app — there's no desktop online banking portal:</p>
      <ul>
        <li><strong>Monzo app (PDF statement)</strong> — tap <em>Account</em> (bottom of screen) → <em>Statements</em> → select the period → tap <em>Download PDF statement</em></li>
        <li><strong>Monzo app (CSV export)</strong> — tap <em>Account</em> → <em>Statements</em> → select period → <em>Download CSV</em>. This gives you a raw spreadsheet of all transactions.</li>
        <li><strong>Custom date ranges</strong> — Monzo lets you select custom start and end dates rather than being limited to calendar months — useful for tax years or specific periods.</li>
        <li><strong>Older statements</strong> — Monzo holds your full transaction history since your account opened. There's no hard cutoff on how far back you can go.</li>
      </ul>
      <p>The PDF statement is what you'll need for official purposes (mortgage applications, visa applications, landlord checks). The CSV is useful for importing into Excel, accounting software, or MoneySorted for analysis.</p>

      <h2>What the columns on a Monzo statement mean</h2>
      <p>Monzo PDF statements are more readable than traditional bank statements. The layout includes:</p>
      <ul>
        <li><strong>Date</strong> — the date and time the transaction completed</li>
        <li><strong>Description</strong> — the merchant name or payment reference. Monzo typically uses the actual business name rather than a cryptic billing code.</li>
        <li><strong>Paid out</strong> — money leaving your account</li>
        <li><strong>Paid in</strong> — money arriving in your account</li>
        <li><strong>Balance</strong> — your running balance after each transaction</li>
      </ul>
      <p>Monzo's transaction descriptions are notably cleaner than traditional banks. Instead of "AMZN MKTP UK*AB3CD4", Monzo will often show "Amazon" with the merchant's logo in the app — though the PDF statement uses the processed merchant name.</p>

      <h2>Monzo transaction types explained</h2>
      <p>Monzo uses fewer opaque codes than traditional banks, but you'll still encounter these transaction types:</p>
      <ul>
        <li><strong>Direct Debit</strong> — a recurring payment authorised by you, collected by a company on set dates. Clearly labelled in Monzo statements.</li>
        <li><strong>Standing Order</strong> — a fixed recurring payment you've set up — same amount, same date each period.</li>
        <li><strong>Faster Payment</strong> — a near-instant bank transfer sent or received via the Faster Payments network.</li>
        <li><strong>Bank Transfer</strong> — money moved between your Monzo account and another account (yours or someone else's).</li>
        <li><strong>Pot Transfer</strong> — money moved between your main Monzo balance and a Monzo Pot (savings pocket within the app). These appear on statements as internal transfers.</li>
        <li><strong>Card Payment</strong> — a Monzo debit card payment, in a shop or online.</li>
        <li><strong>ATM Withdrawal</strong> — cash taken from a cash machine using your Monzo card.</li>
        <li><strong>Refund</strong> — a refund from a merchant, shown as a positive amount on the statement.</li>
        <li><strong>Topup</strong> — money added to your Monzo account, often from a linked bank account or debit card.</li>
      </ul>

      <div className="cp-callout">
        <p>💡 Monzo Pot transfers show as transactions on your statement but don't represent money leaving your overall Monzo balance — the money stays within your Monzo account. When reviewing spending, exclude pot transfers to avoid double-counting.</p>
      </div>

      <h2>Monzo statement vs CSV export — which should you use?</h2>
      <p>Monzo gives you two export formats, each suited to different uses:</p>
      <ul>
        <li><strong>PDF statement</strong> — required for official purposes: mortgage lenders, landlords, visa applications, and HMRC. Has official Monzo branding, account details, and a full balance history.</li>
        <li><strong>CSV export</strong> — better for analysis. Contains more data fields including merchant category codes, notes, and tags. Opens directly in Excel or Google Sheets. Useful for accountants and tax preparation.</li>
      </ul>
      <p>The Monzo CSV includes more granular data than the PDF — including merchant category, local currency amounts for overseas transactions, and any notes you've added to transactions in the app.</p>

      <h2>Understanding your Monzo opening and closing balance</h2>
      <p>The Monzo PDF statement shows an opening balance at the top of the period and a closing balance at the end. Unlike traditional banks, Monzo also shows the time of each transaction, giving you a precise record of when money moved.</p>
      <p>Note that Monzo Pot balances are separate from your main account balance — the statement only shows your main account activity. If you hold money in Pots, it won't appear in the closing balance on your statement.</p>

      <h2>Analyse your Monzo statement automatically</h2>
      <p>Even though Monzo categorises transactions in the app, the PDF statement strips that context away. MoneySorted re-applies categories when you upload your Monzo PDF — giving you a full spending breakdown, monthly totals, and dashboard without any manual work.</p>
      <p>No Monzo login required. Upload the PDF or CSV you've already downloaded and get your full analysis in seconds.</p>
      <p>See also: <Link href="/monzo-bank-statement-analyser">Monzo bank statement analyser</Link> or the <Link href="/bank-statement-to-excel">complete guide to converting UK bank statements to Excel</Link>.</p>

    </ContentPage>
  );
}
