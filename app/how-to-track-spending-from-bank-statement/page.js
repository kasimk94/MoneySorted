import ContentPage from '@/components/ContentPage';

export const metadata = {
  title: 'How to Track Your Spending Using Your Bank Statement | MoneySorted',
  description: 'The simplest way to track where your money goes each month — using just your bank statement PDF.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/how-to-track-spending-from-bank-statement' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="How to Track Your Spending Using Your Bank Statement"
      intro="You don't need a budgeting app, an open banking connection, or a complicated spreadsheet. Your bank statement already contains everything you need to understand your spending — here's how to use it."
    >

      <h2>Why your bank statement is the best spending tracker</h2>
      <p>Most spending tracker apps require you to connect your bank account via open banking, which many people understandably don't want to do. Your bank statement sidesteps this entirely — it's an official record of everything that moved through your account, and you can download it as a PDF from your bank app at any time.</p>
      <p>Unlike app-based trackers, your bank statement is comprehensive. It captures cash withdrawals, direct debits, card payments, bank transfers, and standing orders in one place. Nothing slips through.</p>

      <h2>Step 1: Download your statement as a PDF</h2>
      <p>Every major UK bank lets you download your statement as a PDF from their app or online banking. Here's where to find it:</p>
      <ul>
        <li><strong>Barclays</strong> — Statements section in the app or online banking</li>
        <li><strong>HSBC</strong> — Accounts → View Statements</li>
        <li><strong>Lloyds</strong> — Online banking → Statements &amp; Documents</li>
        <li><strong>NatWest</strong> — Statements menu in app or online</li>
        <li><strong>Monzo</strong> — Account → Statements → Download PDF</li>
        <li><strong>Starling</strong> — More → Statements in the app</li>
      </ul>
      <p>Download one month at a time, or several months if you want to track patterns over a longer period.</p>

      <h2>Step 2: Categorise your transactions</h2>
      <p>This is where tracking becomes useful. Raw transaction lists don't tell you much on their own — categories reveal the story. Go through your statement and assign each transaction to a bucket:</p>
      <ul>
        <li>Housing (rent or mortgage, council tax, insurance)</li>
        <li>Utilities (gas, electricity, water, broadband, phone)</li>
        <li>Groceries and supermarkets</li>
        <li>Transport (fuel, public transport, parking, Uber)</li>
        <li>Eating and drinking out</li>
        <li>Online shopping and retail</li>
        <li>Health and personal care</li>
        <li>Subscriptions and entertainment</li>
        <li>Savings and investments</li>
        <li>Everything else</li>
      </ul>

      <div className="cp-callout">
        <p>💡 Don't stress about perfect categorisation. Approximate categories are far more useful than no categories at all. A rough picture is enough to reveal where your money is actually going.</p>
      </div>

      <h2>Step 3: Calculate totals by category</h2>
      <p>Once categorised, add up the totals. Most people are surprised by at least one category — usually eating out, online shopping, or subscriptions. Common findings:</p>
      <ul>
        <li>Takeaways and coffees adding up to £150–£300/month without it feeling that way day-to-day</li>
        <li>Amazon charges scattered across multiple dates that total more than expected</li>
        <li>Subscriptions you'd forgotten about still charging every month</li>
        <li>Discretionary spending in the "everything else" bucket that's higher than anticipated</li>
      </ul>
      <p>Compare your category totals against your income. What percentage of your monthly income goes to essentials? What's left after fixed costs?</p>

      <h2>Step 4: Compare month to month</h2>
      <p>One month is a snapshot. Two or three months gives you your actual baseline. When comparing:</p>
      <ul>
        <li>Look for categories that consistently run high — these are your best opportunities to reduce spending</li>
        <li>Identify seasonal patterns (higher energy bills in winter, more socialising in summer)</li>
        <li>Track whether your savings rate is improving over time</li>
        <li>Spot one-off expenses that skewed a particular month (a holiday, a car repair, a big shop)</li>
      </ul>
      <p>If you do this quarterly, you'll have a clear picture of your financial habits within six months — and you'll have the data to make actual changes.</p>

      <h2>Skip the manual work</h2>
      <p>Categorising transactions by hand is the most valuable part of this process — but also the most time-consuming. MoneySorted automates it entirely. Upload your bank statement PDF and within seconds you'll have a full spending breakdown by category, monthly totals, and a visual dashboard showing exactly where your money went.</p>
      <p>You can also export everything to Excel or CSV for your own records. No bank login, no signup required to try.</p>

    </ContentPage>
  );
}
