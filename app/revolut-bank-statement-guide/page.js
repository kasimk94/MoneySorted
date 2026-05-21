import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'Revolut Bank Statement Guide — Understanding Your Statement | MoneySorted',
  description: 'How to download your Revolut PDF statement, what every section and transaction type means, and how to analyse your Revolut spending data in CSV or PDF format.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/revolut-bank-statement-guide' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="Revolut Bank Statement Guide — Understanding Your Statement"
      intro="Revolut statements look and work differently from traditional UK bank statements — they cover multiple currencies, include more transaction detail, and are formatted for a global user base. This guide explains everything you'll find on a Revolut statement and how to use the data effectively."
      ctaLabel="Analyse My Revolut Statement Free →"
    >

      <h2>How to download your Revolut bank statement</h2>
      <p>Revolut provides statements exclusively through the app:</p>
      <ul>
        <li><strong>Revolut app (PDF)</strong> — tap <em>Profile</em> (top left) → <em>Documents</em> → <em>Bank statements</em> → select account (GBP, EUR, etc.) → choose date range → <em>Generate statement</em> → download PDF</li>
        <li><strong>Revolut app (Excel/CSV)</strong> — from the same Documents screen, select <em>Excel spreadsheet</em> for a full transaction export in CSV-compatible format</li>
        <li><strong>Custom date ranges</strong> — Revolut lets you choose any start and end date, not just calendar months. Useful for tax year exports.</li>
        <li><strong>Per-currency statements</strong> — if you hold balances in multiple currencies (GBP, EUR, USD), you generate a separate statement for each currency account.</li>
      </ul>
      <p>Revolut's PDF statements are accepted by most UK landlords, mortgage lenders, and visa authorities, though some institutions may query a Revolut statement — in that case, using a more traditional UK bank account statement alongside it is advisable.</p>

      <h2>What the columns on a Revolut statement mean</h2>
      <p>Revolut PDF statements include these columns:</p>
      <ul>
        <li><strong>Date</strong> — the date and time the transaction was completed</li>
        <li><strong>Description</strong> — the merchant name or transfer reference; Revolut uses enriched merchant names where available</li>
        <li><strong>Money out</strong> — amounts leaving your account in the statement currency</li>
        <li><strong>Money in</strong> — amounts received in the statement currency</li>
        <li><strong>Balance</strong> — your running balance in that currency after each transaction</li>
        <li><strong>Exchange rate</strong> — shown for foreign currency transactions, indicating the rate applied at the time of the transaction</li>
      </ul>

      <h2>Revolut transaction types explained</h2>
      <p>Revolut uses plain-language descriptions rather than cryptic codes, but here are the transaction types you'll encounter:</p>
      <ul>
        <li><strong>Card payment</strong> — a payment made using your Revolut Visa or Mastercard debit card, in person or online.</li>
        <li><strong>Transfer</strong> — money sent to or received from another account, either within Revolut (Revolut to Revolut is instant and free) or to an external bank account.</li>
        <li><strong>Top-up</strong> — money added to your Revolut account from a linked debit or credit card, or from a bank transfer in.</li>
        <li><strong>Exchange</strong> — a currency conversion within Revolut (e.g. GBP to EUR). These appear as a debit in one currency account and a credit in another.</li>
        <li><strong>Direct Debit</strong> — Revolut supports Direct Debits on GBP accounts with a UK sort code and account number.</li>
        <li><strong>Standing Order</strong> — recurring scheduled transfers you've set up within Revolut.</li>
        <li><strong>ATM</strong> — a cash withdrawal. Revolut allows fee-free ATM withdrawals up to a monthly limit (depending on your plan); withdrawals above the limit incur a 2% fee.</li>
        <li><strong>Refund</strong> — a merchant refund, shown as a positive amount.</li>
        <li><strong>Cashback</strong> — cashback earned on purchases (available on paid Revolut plans).</li>
        <li><strong>Subscription</strong> — the monthly or annual Revolut plan fee (Standard, Plus, Premium, Metal, Ultra).</li>
        <li><strong>Savings</strong> — transfers into or out of your Revolut Savings Vault.</li>
      </ul>

      <div className="cp-callout">
        <p>💡 Revolut currency exchanges appear as separate debit and credit transactions on different currency statements. When reviewing spending, check that you're not double-counting money that was simply exchanged between your Revolut currency accounts.</p>
      </div>

      <h2>Revolut vs traditional UK bank statements — key differences</h2>
      <p>Revolut statements differ from Barclays, HSBC, or Lloyds in a few important ways:</p>
      <ul>
        <li><strong>Multiple currency accounts</strong> — each currency generates a separate statement; there's no single combined view across all currencies</li>
        <li><strong>IBAN format</strong> — Revolut's UK accounts use a sort code and account number for GBP, but international accounts use IBAN format</li>
        <li><strong>Enriched merchant data</strong> — Revolut often shows the actual business name and category rather than a payment processor code</li>
        <li><strong>Real-time exchange rates</strong> — foreign currency transactions show the rate that was applied, giving a clearer picture of what you actually paid</li>
        <li><strong>No branch network</strong> — all statement access and account management is app-only</li>
      </ul>

      <h2>Analyse your Revolut statement automatically</h2>
      <p>Revolut's multi-currency statements can be harder to analyse than traditional bank statements — especially if you spend across currencies. MoneySorted reads your Revolut PDF statement and categorises every transaction automatically, giving you a clean spending breakdown in under 60 seconds.</p>
      <p>No Revolut login required. Upload the PDF you've already downloaded from the app and export the results to CSV or Excel.</p>
      <p>See also: <Link href="/bank-statement-to-excel">complete guide to converting UK bank statements to Excel</Link>.</p>

    </ContentPage>
  );
}
