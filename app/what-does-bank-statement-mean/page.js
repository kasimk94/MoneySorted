import ContentPage from '@/components/ContentPage';

export const metadata = {
  title: 'What Does Everything on a Bank Statement Mean? (UK Guide) | MoneySorted',
  description: 'Confused by what\'s on your bank statement? This plain-English guide explains every term, column, and code on a UK bank statement.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/what-does-bank-statement-mean' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="What Does Everything on a Bank Statement Mean?"
      intro="Bank statements are full of abbreviations, codes, and jargon that most people have never been properly explained. This plain-English guide covers every column, code, and term you'll find on a UK bank statement."
    >

      <h2>The basic layout of a bank statement</h2>
      <p>Every UK bank statement — whether from Barclays, HSBC, Monzo, or any other — follows a similar structure. At the top you'll find your account details. Below that, transactions are listed in date order, with columns showing what happened and when. At the bottom or alongside each transaction, your running balance is updated.</p>
      <p>The core columns on most UK bank statements are:</p>
      <ul>
        <li><strong>Date</strong> — when the transaction was processed by your bank (not always when you made the payment)</li>
        <li><strong>Description / Narrative</strong> — a reference identifying the merchant or payment sender</li>
        <li><strong>Paid out / Debit</strong> — money leaving your account</li>
        <li><strong>Paid in / Credit</strong> — money coming into your account</li>
        <li><strong>Balance</strong> — your account balance after that transaction</li>
      </ul>

      <h2>Debit vs credit — which way does money flow?</h2>
      <p>These two terms trip people up constantly because they mean the opposite in banking vs. everyday language:</p>
      <ul>
        <li><strong>Debit</strong> — money going <em>out</em> of your account. When you spend on your debit card, it's a debit. Direct debits, bill payments, and transfers you send are all debits.</li>
        <li><strong>Credit</strong> — money coming <em>in</em> to your account. Your salary, tax refunds, BACS payments received, and transfers from others are all credits.</li>
      </ul>
      <p>A simple way to remember it: a debit decreases your balance, a credit increases it.</p>

      <div className="cp-callout">
        <p>💡 If your balance goes down after a transaction, it was a debit. If it goes up, it was a credit. When in doubt, compare the balance column before and after.</p>
      </div>

      <h2>What the transaction description codes mean</h2>
      <p>The description column contains a short reference — often abbreviated — that identifies each payment. Here are the most common codes you'll see on a UK bank statement:</p>
      <ul>
        <li><strong>BGC</strong> — Bank Giro Credit. A credit payment into your account, often used for salary payments or tax refunds from HMRC.</li>
        <li><strong>BACS</strong> — Bankers' Automated Clearing Services. An electronic payment system used for salaries, pension payments, and direct debits. Takes 3 working days to clear.</li>
        <li><strong>FPS / FPI / FPO</strong> — Faster Payments Service. A near-instant bank transfer. "FPI" = Faster Payment In, "FPO" = Faster Payment Out. These typically clear within seconds to a few hours.</li>
        <li><strong>CHAPS</strong> — Clearing House Automated Payment System. A same-day high-value payment, commonly used for house purchases or large business transfers. Usually carries a fee (£20–£35).</li>
        <li><strong>DD</strong> — Direct Debit. A recurring payment authorised by you, where the recipient can collect varying amounts on set dates — used for utilities, phone bills, gym memberships.</li>
        <li><strong>SO</strong> — Standing Order. A fixed recurring payment you set up yourself, for the same amount each time — often used for rent or regular savings transfers.</li>
        <li><strong>CHQ / CHQ NO</strong> — Cheque payment. The number refers to the cheque serial number.</li>
        <li><strong>TFR</strong> — Transfer. An internal transfer between your own accounts at the same bank.</li>
        <li><strong>POS</strong> — Point of Sale. A card payment made in a shop or restaurant.</li>
        <li><strong>ATM</strong> — Cash withdrawal from a cash machine.</li>
        <li><strong>DR</strong> — Debit. Appended to an amount to indicate money out. Occasionally shown as a negative number instead.</li>
        <li><strong>CR</strong> — Credit. Appended to an amount to indicate money in.</li>
        <li><strong>OD / O/D</strong> — Overdrawn. Your balance shown with this suffix means your account is in the negative — you owe the bank money.</li>
        <li><strong>INT</strong> — Interest. Either interest charged on an overdraft or interest earned on a savings balance.</li>
        <li><strong>REV</strong> — Reversal. A transaction that has been reversed or refunded — the money was taken and then returned.</li>
      </ul>

      <h2>What is the "balance" column?</h2>
      <p>The balance column shows your account balance after each transaction has been applied. It updates with every row, giving you a running total of what was in your account at each point during the month.</p>
      <p>Key things to know about the balance column:</p>
      <ul>
        <li>A balance without any suffix is a credit balance — your account is in the positive</li>
        <li>A balance shown with "DR" or "OD" (or in brackets, or negative) means you are overdrawn</li>
        <li>The opening balance at the top of the statement is where your account stood at the start of the period</li>
        <li>The closing balance at the bottom is where it stood at the end — this should match your current balance for that date</li>
      </ul>

      <h2>Opening and closing balance</h2>
      <p>Every bank statement covers a specific period — usually one calendar month. At the start, you'll see an <strong>opening balance</strong> (what you had when the period began), and at the end a <strong>closing balance</strong> (what you had when it ended).</p>
      <p>To check a statement makes sense: opening balance + all credits − all debits = closing balance. If this doesn't add up, there may be a pending transaction or an error worth querying with your bank.</p>

      <h2>Sort code and account number</h2>
      <p>At the top of your statement you'll see two important identifying numbers:</p>
      <ul>
        <li><strong>Sort code</strong> — a 6-digit number (usually shown as XX-XX-XX) that identifies your bank branch. Every bank has a unique sort code, and it's needed alongside your account number for receiving payments.</li>
        <li><strong>Account number</strong> — an 8-digit number unique to your account. Together with the sort code, this is how people send money to you.</li>
      </ul>
      <p>For international transfers, you'll also see an <strong>IBAN</strong> (International Bank Account Number) — a longer code that combines your sort code and account number in a format accepted worldwide.</p>

      <h2>What about merchant names that look unfamiliar?</h2>
      <p>Transaction descriptions don't always match the name of the business you paid. Merchants often bill under their parent company name, payment processor, or a trading name. Common examples:</p>
      <ul>
        <li><strong>AMZN MKTP UK</strong> — Amazon Marketplace UK (purchases or Prime)</li>
        <li><strong>APPLE.COM/BILL</strong> — any Apple subscription: iCloud, Apple TV+, App Store purchases</li>
        <li><strong>GOOGLE *STORAGE</strong> — Google One / Google Drive storage</li>
        <li><strong>PAY PAL *</strong> — a payment made via PayPal, followed by the merchant name</li>
        <li><strong>SQ *</strong> — a payment to a small business using Square card terminals</li>
        <li><strong>SUMUP *</strong> — a payment to a small business using SumUp card readers</li>
      </ul>
      <p>If you see a charge you don't recognise, search the full description text online — it usually resolves to a legitimate merchant. If it still doesn't match anything you've bought, contact your bank to query it.</p>

      <h2>Value date vs transaction date</h2>
      <p>Some statements show two dates. The <strong>transaction date</strong> is when you made the payment; the <strong>value date</strong> (or settlement date) is when the money actually moved between banks and affected your balance. For card payments and Faster Payments these are usually the same. For BACS and CHAPS payments they can differ by a day or more.</p>

      <div className="cp-callout">
        <p>💡 If a payment shows as pending on your bank app but doesn't appear on your statement yet, it's likely awaiting the value date — the money is reserved but not yet settled.</p>
      </div>

      <h2>Understanding your statement automatically</h2>
      <p>Reading through a statement line by line is time-consuming — especially when merchant names are cryptic and categories aren't labelled. MoneySorted reads your bank statement PDF and instantly categorises every transaction, labels the payment types, and gives you a full breakdown of what you spent and where. Upload any UK bank statement and see your money clearly in under 60 seconds.</p>

    </ContentPage>
  );
}
