import ContentPage from '@/components/ContentPage';

export const metadata = {
  title: 'How to Analyse a Bank Statement (The Easy Way) | MoneySorted',
  description: 'Learn how to analyse your UK bank statement quickly and understand your spending. No spreadsheets needed.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/how-to-analyse-a-bank-statement' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="How to Analyse a Bank Statement (The Easy Way)"
      intro="Most people open their bank statement, feel vaguely stressed, and close it again. Here's a simple method to actually understand what you're looking at — and what your spending is telling you."
    >

      <h2>What does "analysing a bank statement" actually mean?</h2>
      <p>Analysing a bank statement means going beyond just checking your balance. It means understanding <strong>where your money came from</strong>, <strong>where it went</strong>, and whether that matches how you think you're spending.</p>
      <p>A raw list of transactions tells you what happened. Analysis tells you what it means — which categories are costing you the most, which months look different, and which transactions are surprising.</p>

      <h2>Step 1: Separate income from spending</h2>
      <p>Start by splitting your statement into two piles: money coming in (credits) and money going out (debits). This gives you your baseline:</p>
      <ul>
        <li><strong>Total income</strong> — salary, freelance payments, HMRC refunds, transfers in</li>
        <li><strong>Total spending</strong> — everything else that left your account</li>
      </ul>
      <p>If your total spending is higher than your total income for the month, that's your first important signal. If it's lower, you saved money — and now you can work out how much.</p>

      <h2>Step 2: Group transactions by category</h2>
      <p>Raw transactions are hard to reason about. Once you group them into categories, patterns emerge immediately. Useful categories for a UK bank statement include:</p>
      <ul>
        <li>Household bills (mortgage/rent, utilities, broadband, council tax)</li>
        <li>Supermarkets and groceries</li>
        <li>Eating out and takeaways</li>
        <li>Transport (fuel, TfL, train, Uber)</li>
        <li>Online shopping (Amazon, ASOS, eBay)</li>
        <li>Subscriptions (Netflix, Spotify, gym, software)</li>
        <li>Health and wellbeing</li>
        <li>Savings and investments</li>
      </ul>
      <p>This step is the most time-consuming part of manual analysis. If you're doing it by hand, expect to spend 30–60 minutes on a single month's statement.</p>

      <h2>Step 3: Look for patterns over time</h2>
      <p>A single month is a snapshot. Two or three months reveals your actual habits. When comparing across months, look for:</p>
      <ul>
        <li>Categories that are consistently high — these are your biggest controllable costs</li>
        <li>Months with unusual spikes — what happened that month?</li>
        <li>Subscriptions that appear every month at the same amount — some you might have forgotten about</li>
        <li>Whether your income fluctuates and how your spending responds</li>
      </ul>

      <h2>Step 4: Spot the outliers</h2>
      <p>After you've done the broad categorisation, scan for individual transactions that seem wrong or surprising:</p>
      <ul>
        <li>Duplicate charges (same merchant, same amount, days apart)</li>
        <li>Subscriptions you don't recognise or can't remember signing up for</li>
        <li>One-off large purchases that skewed your monthly total</li>
        <li>Small recurring charges that add up — £5.99 here, £2.99 there</li>
      </ul>

      <div className="cp-callout">
        <p>💡 The typical person has 3–5 subscriptions they've forgotten about. They're usually in the £5–£15/month range, which makes them easy to overlook individually — but they add up to £200–£600 per year.</p>
      </div>

      <h2>The fast way: let MoneySorted do it</h2>
      <p>All of the above — income vs spending, category totals, monthly trends, outlier detection — happens automatically the moment you upload your PDF to MoneySorted. It reads your Barclays, HSBC, Monzo, Starling, Lloyds, or NatWest statement and produces a full breakdown in under 60 seconds.</p>
      <p>No copy-pasting. No spreadsheets. No bank login required.</p>

    </ContentPage>
  );
}
