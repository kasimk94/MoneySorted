import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'Starling Bank Statement Guide — Understanding Your Statement | MoneySorted',
  description: 'How to download your Starling Bank PDF statement, what every transaction type means, and how to export and analyse your Starling spending data.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/starling-bank-statement-guide' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="Starling Bank Statement Guide — Understanding Your Statement"
      intro="Starling Bank is a digital-only bank with no branches, so all your statement access happens through the app. This guide explains how to get your Starling statement, what every section means, and how to analyse your spending effectively."
      ctaLabel="Analyse My Starling Statement Free →"
    >

      <h2>How to download your Starling bank statement</h2>
      <p>Starling provides statements exclusively through the app — there's no web-based online banking portal for personal accounts:</p>
      <ul>
        <li><strong>Starling app (PDF)</strong> — tap <em>More</em> (bottom right) → <em>Statements</em> → choose a period or set a custom date range → <em>Generate statement</em> → download PDF</li>
        <li><strong>Starling app (CSV)</strong> — from the same Statements screen, select <em>Download CSV</em> to get a raw spreadsheet of your transactions</li>
        <li><strong>Custom date ranges</strong> — unlike traditional banks, Starling lets you generate a statement for any date range, not just calendar months. This is useful for tax year exports (6 April to 5 April).</li>
        <li><strong>Full transaction history</strong> — Starling holds your complete transaction history since account opening, with no cutoff date.</li>
      </ul>
      <p>PDF statements carry official Starling branding and are accepted by mortgage lenders, landlords, and the Home Office for visa applications. The CSV is more useful for analysis and accounting.</p>

      <h2>What the columns on a Starling statement mean</h2>
      <p>Starling PDF statements are clean and straightforward compared to traditional bank statements:</p>
      <ul>
        <li><strong>Date</strong> — the date (and often time) the transaction was processed</li>
        <li><strong>Description</strong> — the merchant name or payment reference. Starling enriches merchant names, so you'll often see the real business name rather than a payment processor code.</li>
        <li><strong>Spent</strong> — money leaving your account</li>
        <li><strong>Received</strong> — money coming into your account</li>
        <li><strong>Balance</strong> — your account balance after each transaction</li>
      </ul>

      <h2>Starling transaction types explained</h2>
      <p>Starling uses plain-language labels instead of cryptic codes — but here's what each type means:</p>
      <ul>
        <li><strong>Direct Debit</strong> — a recurring payment a company collects from your account on authorised dates. Starling labels these clearly with the company name.</li>
        <li><strong>Standing Order</strong> — a fixed recurring transfer you've set up — same amount, same schedule.</li>
        <li><strong>Faster Payment</strong> — a near-instant transfer sent or received via the UK Faster Payments network. Starling processes these 24/7.</li>
        <li><strong>Card payment</strong> — a payment made using your Starling Mastercard debit card, in person or online.</li>
        <li><strong>ATM</strong> — a cash withdrawal. Starling doesn't charge fees for cash withdrawals in the UK or abroad (up to a limit).</li>
        <li><strong>Internal transfer</strong> — money moved between your Starling accounts or between your main balance and a Starling Space (savings pocket).</li>
        <li><strong>Refund</strong> — a merchant refund, shown as a positive amount.</li>
        <li><strong>Interest</strong> — interest paid on your balance (Starling pays interest on current account balances above a threshold).</li>
        <li><strong>CHAPS</strong> — a same-day high-value payment, typically for large transfers like property purchases.</li>
      </ul>

      <div className="cp-callout">
        <p>💡 Starling Spaces are savings pockets within your account — transfers to and from Spaces appear on your statement as internal transfers. Exclude these when calculating your actual spending totals, as the money hasn't left your Starling account.</p>
      </div>

      <h2>Starling statement vs CSV — which format to use</h2>
      <p>Both formats contain the same transaction data, but serve different purposes:</p>
      <ul>
        <li><strong>PDF</strong> — required for official purposes. Mortgage lenders, landlords, HMRC, and the Home Office all require PDF statements with official bank branding. Use this when submitting financial evidence.</li>
        <li><strong>CSV</strong> — better for analysis. Contains additional fields including merchant category codes, reference notes, and the Starling spending category assigned to each transaction. Import directly into Excel, Google Sheets, Xero, or FreeAgent.</li>
      </ul>
      <p>The Starling CSV also includes the counterpart account number and sort code for transfers — useful if you're reconciling payments or tracking who sent you money.</p>

      <h2>Understanding your Starling opening and closing balance</h2>
      <p>Your Starling PDF statement shows an opening balance at the start of the selected period and a closing balance at the end. These reflect your main account balance only — Starling Spaces balances are held separately and won't appear in the running balance on your statement.</p>
      <p>If you want a true picture of all money within Starling (including Spaces), you'd need to generate a statement for each Space separately or use the CSV export, which includes Space activity.</p>

      <h2>Analyse your Starling statement automatically</h2>
      <p>Starling's in-app spending categories are useful day-to-day, but they don't transfer to the PDF statement. MoneySorted re-applies categories when you upload your Starling PDF — producing a complete spending breakdown, monthly totals, and a full dashboard without any manual work.</p>
      <p>No Starling login required. Upload the PDF or CSV you've already generated and get your analysis in seconds.</p>
      <p>See also: <Link href="/starling-bank-statement-analyser">Starling bank statement analyser</Link> or the <Link href="/bank-statement-to-excel">complete guide to converting UK bank statements to Excel</Link>.</p>

    </ContentPage>
  );
}
