import { getAllPosts } from '@/lib/blogPosts';

const BANK_SLUGS = [
  'barclays-bank-statement-analyser',
  'hsbc-bank-statement-analyser',
  'monzo-bank-statement-analyser',
  'starling-bank-statement-analyser',
  'lloyds-bank-statement-analyser',
  'natwest-bank-statement-analyser',
  'santander-bank-statement-analyser',
  'halifax-bank-statement-analyser',
];

export default function sitemap() {
  const blogEntries = getAllPosts().map(post => ({
    url: `https://www.getmoneysorted.co.uk/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const bankEntries = BANK_SLUGS.map(slug => ({
    url: `https://www.getmoneysorted.co.uk/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: 'https://www.getmoneysorted.co.uk',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.getmoneysorted.co.uk/dashboard',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.getmoneysorted.co.uk/upload',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.getmoneysorted.co.uk/statements',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.getmoneysorted.co.uk/transactions',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.getmoneysorted.co.uk/reports',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.getmoneysorted.co.uk/insights',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.getmoneysorted.co.uk/export',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://www.getmoneysorted.co.uk/login',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: 'https://www.getmoneysorted.co.uk/signup',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: 'https://www.getmoneysorted.co.uk/bank-statement-to-excel',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.getmoneysorted.co.uk/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...bankEntries,
    ...blogEntries,
    { url: 'https://www.getmoneysorted.co.uk/how-to-analyse-a-bank-statement',             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/how-to-find-subscriptions-in-bank-statement', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/how-to-track-spending-from-bank-statement',   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/bank-statement-to-csv-uk',                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/what-does-bank-statement-mean',               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/hsbc-bank-statement-guide',                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/barclays-bank-statement-guide',               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/lloyds-bank-statement-guide',                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/natwest-bank-statement-guide',                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/monzo-bank-statement-guide',                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/starling-bank-statement-guide',               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/santander-bank-statement-guide',              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/halifax-bank-statement-guide',                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/nationwide-bank-statement-guide',             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/revolut-bank-statement-guide',                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/chase-bank-statement-guide',                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/first-direct-bank-statement-guide',           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.getmoneysorted.co.uk/tsb-bank-statement-guide',                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
