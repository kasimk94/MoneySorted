import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'Convert Your Bank Statement to CSV — Free UK Tool | MoneySorted',
  description: 'Upload your UK bank statement PDF and instantly download a clean CSV file. Works with all major UK banks.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/bank-statement-to-csv-uk' },
};

export default function Page() {
  return (
    <ContentPage
      label="Tool"
      h1="Convert Your Bank Statement to CSV — Free UK Tool"
      intro="Need your bank transactions in a CSV file? Upload your PDF bank statement and MoneySorted converts it instantly — clean columns, correct dates, ready to open in Excel, Google Sheets, or any accounting software."
    >

      <h2>Why convert a bank statement to CSV?</h2>
      <p>CSV (comma-separated values) is the universal format for financial data. It's accepted by virtually every accounting package, spreadsheet tool, and financial application:</p>
      <ul>
        <li><strong>Accounting software</strong> — QuickBooks, Xero, FreeAgent, Sage all import CSV transaction files</li>
        <li><strong>Excel and Google Sheets</strong> — open directly, with data in clean columns ready to filter and sort</li>
        <li><strong>Expense management tools</strong> — most business expense tools accept CSV uploads</li>
        <li><strong>Tax preparation</strong> — hand a clean CSV to your accountant instead of a messy PDF</li>
        <li><strong>Personal finance apps</strong> — many budgeting tools let you import CSV transaction history</li>
      </ul>
      <p>The problem is that banks give you a PDF — not a CSV. PDFs are designed for printing, not for data. Converting them manually is painful. MoneySorted does it automatically.</p>

      <h2>How to get your bank statement PDF</h2>
      <p>Before you can convert it, you need to download your statement from your bank:</p>
      <ul>
        <li><strong>Barclays</strong> — log in to online banking or the app → Statements → Download as PDF</li>
        <li><strong>HSBC</strong> — Accounts → View Statements → Download PDF</li>
        <li><strong>Lloyds</strong> — Statements &amp; Documents in online banking</li>
        <li><strong>NatWest / RBS</strong> — Statements menu → Download</li>
        <li><strong>Monzo</strong> — Account tab → Statements → Choose period → Download PDF</li>
        <li><strong>Starling</strong> — More → Statements → Generate</li>
        <li><strong>Santander, Halifax, TSB</strong> — Statements section in online banking</li>
      </ul>
      <p>Most banks let you download statements going back 12–24 months from online banking, and some let you go further back by requesting a paper or secure message statement.</p>

      <h2>What the CSV file contains</h2>
      <p>The CSV MoneySorted generates from your bank statement includes:</p>
      <ul>
        <li><strong>Date</strong> — formatted consistently as DD/MM/YYYY</li>
        <li><strong>Description</strong> — the merchant or transaction reference from your statement</li>
        <li><strong>Amount</strong> — positive for credits (money in), negative for debits (money out)</li>
        <li><strong>Category</strong> — automatically assigned (Groceries, Transport, Bills, etc.)</li>
        <li><strong>Type</strong> — debit or credit</li>
      </ul>
      <p>Every row is one transaction. The file opens cleanly in Excel, Google Sheets, and any standard CSV reader with no reformatting required.</p>

      <div className="cp-callout">
        <p>💡 If you're sending your CSV to an accountant, they'll typically want the date, description, and amount columns. MoneySorted includes all three, plus categories that save your accountant time on coding.</p>
      </div>

      <h2>Which UK banks are supported?</h2>
      <p>MoneySorted supports PDF statements from all major UK banks, including:</p>
      <ul>
        <li>Barclays, HSBC, Lloyds, NatWest, Santander, Halifax</li>
        <li>Monzo, Starling Bank, Chase UK</li>
        <li>TSB, Nationwide, First Direct, Co-op Bank, Metro Bank</li>
      </ul>
      <p>If your bank exports a standard PDF statement, it will work. You can also try uploading and see — the conversion is free for one statement per month.</p>
      <p>For bank-specific guides, see: <Link href="/barclays-bank-statement-analyser">Barclays</Link>, <Link href="/hsbc-bank-statement-analyser">HSBC</Link>, <Link href="/monzo-bank-statement-analyser">Monzo</Link>, <Link href="/lloyds-bank-statement-analyser">Lloyds</Link>, or <Link href="/natwest-bank-statement-analyser">NatWest</Link>.</p>

      <h2>How to convert your bank statement to CSV</h2>
      <p>The process takes under two minutes:</p>
      <ol>
        <li>Download your bank statement as a PDF from your bank app or online banking</li>
        <li>Upload the PDF to MoneySorted — drag and drop or click to select</li>
        <li>MoneySorted reads and categorises every transaction automatically</li>
        <li>Click <strong>Export → CSV</strong> to download your clean file</li>
      </ol>
      <p>No bank login required. No account required to try. Your PDF is deleted immediately after processing — we never store your banking data.</p>

    </ContentPage>
  );
}
