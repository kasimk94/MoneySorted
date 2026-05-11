import Link from 'next/link';
import BlogNavWrapper from '@/components/BlogNavWrapper';
import { getAllPosts } from '@/lib/blogPosts';

export const metadata = {
  title: 'Blog | MoneySorted',
  description: 'Guides and tips to help you understand your money, analyse your bank statements, and take control of your finances.',
  alternates: { canonical: 'https://www.getmoneysorted.co.uk/blog' },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ background: '#080C14', minHeight: '100vh', color: '#F5F0E8' }}>
      <style>{`
        .blog-card {
          background: #0D1117;
          border: 1px solid rgba(201,168,76,0.12);
          border-radius: 16px;
          padding: 32px;
          text-decoration: none;
          display: block;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }
        .blog-card:hover {
          border-color: rgba(201,168,76,0.4);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4), 0 0 24px rgba(201,168,76,0.06);
          transform: translateY(-3px);
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <BlogNavWrapper />

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '120px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
            MoneySorted Blog
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#F5F0E8', letterSpacing: '-0.03em', margin: '0 0 16px' }}>
            Guides &amp; Tips
          </h1>
          <p style={{ color: '#8A9BB5', fontSize: '1.05rem', maxWidth: 520, margin: '0 auto' }}>
            Practical guides to help you understand your bank statements, cut waste, and take control of your money.
          </p>
        </div>

        {/* Post grid */}
        <div className="blog-grid">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              {/* Meta */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {formatDate(post.date)}
                </span>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#4A5568' }} />
                <span style={{ fontSize: '0.72rem', color: '#8A9BB5' }}>{post.readTime}</span>
              </div>

              {/* Title */}
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#F5F0E8', lineHeight: 1.4, margin: '0 0 12px', letterSpacing: '-0.01em' }}>
                {post.title}
              </h2>

              {/* Excerpt */}
              <p style={{ fontSize: '0.875rem', color: '#8A9BB5', lineHeight: 1.7, margin: '0 0 24px' }}>
                {post.excerpt}
              </p>

              {/* CTA */}
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#C9A84C' }}>
                Read article →
              </span>
            </Link>
          ))}
        </div>

      </main>
    </div>
  );
}
