import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

export const metadata = {
  title: 'HSBC Bank Statement Guide — What Everything Means & How to Analyse It | MoneySorted',
  description: 'Understand every code, abbreviation, and column on your HSBC bank statement — including what BP, FPI, DD, and SO mean. Plus how to download and analyse your HSBC statements.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/hsbc-bank-statement-guide' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="HSBC Bank Statement Guide — What Everything Means & How to Analyse It"
      intro="Your HSBC bank statement contains abbreviations, transaction codes, and columns that aren't explained anywhere in the app or online banking. This guide explains every term you'll see — including the ones that consistently confuse people."
    >

      <h2>How to download your HSBC bank statement</h2>
      <p>HSBC lets you access statements through both online banking and the mobile app:</p>
      <ul>
        <li><strong>Online banking</strong> — log in at hsbc.co.uk → select your account → choose <em>Statements</em> from the left menu → select the period and download as PDF</li>
        <li><strong>HSBC Mobile app</strong> — tap your account → tap the menu (three lines) → <em>Statements</em> → select month → download</li>
        <li><strong>Older statements</strong> — HSBC provides up to 7 years of statements online. For anything older, you can request a paper statement through secure message or in branch.</li>
      </ul>
      <p>Downloaded statements are PDFs. If you need the data in a spreadsheet, you can upload the PDF to MoneySorted and download a clean CSV or Excel file.</p>

      <h2>What the columns on your HSBC statement mean</h2>
      <p>HSBC statements use a standard layout with the following columns:</p>
      <ul>
        <li><strong>Date</strong> — the date the transaction was posted to your account (not always the date you made the payment)</li>
        <li><strong>Description</strong> — a short reference identifying the payment, often with a transaction type prefix</li>
        <li><strong>Paid out</strong> — money leaving your account (debits)</li>
        <li><strong>Paid in</strong> — money arriving in your account (credits)</li>
        <li><strong>Balance</strong> — your account balance after that transaction; shown as a negative or with "OD" if overdrawn</li>
      </ul>

      <h2>What does BP mean on an HSBC bank statement?</h2>
      <p><strong>BP stands for Bill Payment.</strong> It's one of the most searched HSBC statement codes, and it simply means you made a payment to a company or individual using HSBC's bill payment service — typically through online banking or the app.</p>
      <p>You'll see BP most often for:</p>
      <ul>
        <li>Utility bill payments (gas, electricity, water, broadband)</li>
        <li>Council tax payments</li>
        <li>Credit card payments made from your HSBC current account</li>
        <li>One-off payments to companies via online banking</li>
        <li>HMRC tax payments</li>
      </ul>
      <p>The BP entry will usually be followed by the recipient name, so "BP BRITISH GAS" means you paid British Gas, and "BP HMRC SHIPLEY" means a payment to HMRC. If you see a BP entry you don't recognise, check the recipient name in the description — it's almost always a bill you paid and forgot about.</p>

      <div className="cp-callout">
        <p>💡 BP is HSBC-specific terminology. Other banks use different labels for the same thing — Lloyds and Barclays typically show these as "TFR" or just show the recipient name directly.</p>
      </div>

      <h2>All HSBC transaction codes explained</h2>
      <p>Here are all the transaction type codes you'll encounter on an HSBC statement:</p>
      <ul>
        <li><strong>BP</strong> — Bill Payment. A payment made via online banking to a company or person (see above).</li>
        <li><strong>DD</strong> — Direct Debit. A regular payment authorised by you, where the company can collect money on set dates — used for subscriptions, insurance, utilities.</li>
        <li><strong>SO</strong> — Standing Order. A fixed, recurring transfer you set up yourself for the same amount each time — often used for rent or regular savings.</li>
        <li><strong>FPI</strong> — Faster Payment In. Money received into your account via the Faster Payments network (near-instant transfers).</li>
        <li><strong>FPO</strong> — Faster Payment Out. Money sent from your account via Faster Payments.</li>
        <li><strong>BGC</strong> — Bank Giro Credit. A credit paid into your account — commonly used for salary payments, HMRC tax credits, and pension payments.</li>
        <li><strong>BACS</strong> — Bankers' Automated Clearing Services. A 3-working-day electronic payment — used for salaries, supplier payments, and bulk transfers.</li>
        <li><strong>CHAPS</strong> — Clearing House Automated Payment System. A same-day high-value transfer, commonly used for property purchases.</li>
        <li><strong>ATM</strong> — Cash withdrawal from a cash machine.</li>
        <li><strong>POS</strong> — Point of Sale. A card payment made in a shop, restaurant, or other physical location.</li>
        <li><strong>CHQ</strong> — Cheque. A payment made by cheque, with the cheque number usually shown alongside.</li>
        <li><strong>TFR</strong> — Transfer. A transfer between your own HSBC accounts.</li>
        <li><strong>INT</strong> — Interest. Either interest charged on an overdraft or interest earned on your balance.</li>
        <li><strong>OD</strong> — Overdrawn. Your balance is negative — you've spent more than you had in the account.</li>
        <li><strong>REV</strong> — Reversal. A transaction that has been reversed — the charge was applied and then returned.</li>
        <li><strong>VIS / VISA</strong> — A Visa debit card payment processed through the Visa network.</li>
      </ul>

      <h2>Understanding your HSBC opening and closing balance</h2>
      <p>Each HSBC statement covers one calendar month. At the top you'll see your <strong>opening balance</strong> — what your account held on the first day of the period. At the bottom is your <strong>closing balance</strong> — what remained at the end.</p>
      <p>To verify the statement is correct: <em>opening balance + total paid in − total paid out = closing balance</em>. HSBC also shows summary totals at the bottom of each statement page, making this check straightforward.</p>
      <p>If your closing balance shows as negative or is followed by "OD", your account was overdrawn at the end of that month. HSBC charges arranged overdraft interest daily — this will typically appear as an "INT" entry near the end of the statement.</p>

      <h2>HSBC transaction history vs bank statement — what's the difference?</h2>
      <p>HSBC online banking shows two views of your spending:</p>
      <ul>
        <li><strong>Transaction history</strong> — a live, running list of every transaction on your account, available for up to 7 years. This is real-time and includes pending transactions. Accessible directly in online banking or the app.</li>
        <li><strong>Bank statement</strong> — an official monthly summary of settled transactions for a specific period. Statements are the legally recognised record of your account activity, accepted by HMRC, mortgage lenders, and landlords.</li>
      </ul>
      <p>For most personal uses — tracking spending, finding a specific payment, checking a balance on a particular date — the transaction history is faster. For official purposes (visa applications, mortgage affordability, self-assessment), you need a downloaded PDF statement.</p>

      <h2>How to spot and query an error on your HSBC statement</h2>
      <p>If you see a charge you don't recognise:</p>
      <ol>
        <li>Note the exact date, description, and amount shown on the statement</li>
        <li>Search the description text online — most cryptic names resolve to a legitimate merchant</li>
        <li>Check your email for a receipt or confirmation from around the same date</li>
        <li>If it's still unrecognised, contact HSBC — via the app chat, phone (03457 404 404), or in branch — and quote the transaction details</li>
        <li>HSBC can raise a dispute for card payments; for direct debits you have an automatic right to a refund under the Direct Debit Guarantee</li>
      </ol>

      <div className="cp-callout">
        <p>💡 Under the Direct Debit Guarantee, if a Direct Debit was taken in error or without proper notice, you're entitled to an immediate refund from your bank — no questions asked. This applies to all UK banks including HSBC.</p>
      </div>

      <h2>Analyse your HSBC statement automatically</h2>
      <p>Going through your HSBC statement line by line — decoding the abbreviations, adding up category totals, spotting forgotten subscriptions — takes time. MoneySorted reads your HSBC statement PDF and does all of it automatically: every transaction categorised, monthly totals calculated, and a full spending breakdown ready in under 60 seconds.</p>
      <p>No HSBC login required. Upload the PDF you've already downloaded and get your analysis instantly. You can also export the data as a CSV or Excel file for your own records.</p>
      <p>For a broader overview of how to work with UK bank statement PDFs, see our <Link href="/bank-statement-to-excel">complete guide to converting bank statements to Excel</Link>, or the <Link href="/hsbc-bank-statement-analyser">HSBC bank statement analyser</Link>.</p>

    </ContentPage>
  );
}
