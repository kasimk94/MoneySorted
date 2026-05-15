import ContentPage from '@/components/ContentPage';

export const metadata = {
  title: 'How to Find Hidden Subscriptions in Your Bank Statement | MoneySorted',
  description: 'Discover forgotten subscriptions draining your account. Here\'s how to spot them fast using your bank statement.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/how-to-find-subscriptions-in-bank-statement' },
};

export default function Page() {
  return (
    <ContentPage
      label="Guide"
      h1="How to Find Hidden Subscriptions in Your Bank Statement"
      intro="The average UK household spends over £600 a year on subscriptions they barely use. Many of them are hiding in plain sight on your bank statement — here's how to find and eliminate them."
    >

      <h2>Why subscriptions are so easy to miss</h2>
      <p>Subscriptions are designed to be invisible. They're small enough to scroll past (£6.99, £9.99, £12.99), they appear at the same time each month so they blend into your statement, and the merchant names are often abbreviated or obscure — making it hard to know what you're actually paying for.</p>
      <p>Add in the fact that most of us signed up during a free trial and then forgot to cancel, and it's easy to see how these charges accumulate unnoticed for months or years.</p>

      <h2>What to look for in your statement</h2>
      <p>When scanning for subscriptions, look for transactions that share these characteristics:</p>
      <ul>
        <li><strong>Regular intervals</strong> — monthly, quarterly, or annual charges that hit on the same date each period</li>
        <li><strong>Consistent amounts</strong> — the exact same pound amount every time (or occasionally increasing slightly)</li>
        <li><strong>Unfamiliar merchant names</strong> — many subscription services use billing names different from their brand (e.g. "APPLE.COM/BILL" or "AMZN MKTP UK")</li>
        <li><strong>Small amounts</strong> — under £20/month, which makes them easy to mentally dismiss</li>
        <li><strong>Foreign currency charges</strong> — some software subscriptions bill in USD even for UK customers</li>
      </ul>

      <h2>Common subscription names to watch for</h2>
      <p>These are some of the most frequently forgotten subscriptions found in UK bank statements:</p>
      <ul>
        <li>NETFLIX.COM, SPOTIFY, AMAZON PRIME (and AMZN*PRIME)</li>
        <li>APPLE.COM/BILL — could be iCloud storage, Apple TV+, Apple Music, or app subscriptions</li>
        <li>GOOGLE *STORAGE — Google One cloud storage</li>
        <li>ADOBE SYSTEMS — Creative Cloud subscriptions</li>
        <li>DAZN, NOW TV, DISNEY PLUS, PARAMOUNT+, BRITBOX</li>
        <li>GYM or FITNESS memberships (often with direct debit references like "PURE GYM" or "ANYTIME FITNESS")</li>
        <li>NORTON, McAFEE, or other security software — often auto-renewing annually</li>
        <li>LINKEDIN PREMIUM, CANVA PRO, DROPBOX, SLACK</li>
        <li>Meal kit services — HELLO FRESH, GOUSTO</li>
        <li>Magazine or newspaper subscriptions — TIMES, TELEGRAPH, GUARDIAN</li>
      </ul>

      <div className="cp-callout">
        <p>💡 Annual subscriptions are the easiest to forget — you pay once and don't see it again for 12 months. Search your statement for any charges in the £30–£150 range that only appear once a year.</p>
      </div>

      <h2>How to cancel what you don't use</h2>
      <p>Once you've identified subscriptions you want to cancel, here's how to approach it:</p>
      <ol>
        <li>Search the merchant name plus "cancel UK" to find the cancellation page — most hide it in account settings</li>
        <li>For Apple subscriptions, cancel via Settings → Apple ID → Subscriptions on your iPhone</li>
        <li>For Amazon, go to Account → Memberships &amp; Subscriptions</li>
        <li>If you can't find how to cancel, contact the company by email — GDPR gives you the right to cancel any service</li>
        <li>Screenshot or save the cancellation confirmation — some services continue charging after you've cancelled</li>
      </ol>
      <p>Note the next billing date before you cancel. You've typically paid for the current period already, so you'll keep access until it expires.</p>

      <h2>The faster way: let MoneySorted find them for you</h2>
      <p>MoneySorted automatically detects recurring charges in your bank statement and flags them as subscriptions — including ones with obscure merchant names. Upload your PDF and within seconds you'll see a complete list of everything that charges you regularly, how much each one costs, and how much they add up to per year.</p>
      <p>It works with statements from Barclays, HSBC, Monzo, Starling, Lloyds, NatWest, Halifax, Santander and all major UK banks. No bank login, no account linking required.</p>

    </ContentPage>
  );
}
