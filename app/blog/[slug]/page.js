import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogNavWrapper from '@/components/BlogNavWrapper';
import { getAllPosts, getPostBySlug } from '@/lib/blogPosts';

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.title} | MoneySorted`,
    description: post.metaDescription,
    alternates: { canonical: `https://www.getmoneysorted.co.uk/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://www.getmoneysorted.co.uk/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div style={{ background: '#080C14', minHeight: '100vh', color: '#F5F0E8' }}>
      <style>{`
        .blog-content p {
          color: #A8B8CC;
          font-size: 1.0625rem;
          line-height: 1.85;
          margin: 0 0 1.4em;
        }
        .blog-content h2 {
          color: #F5F0E8;
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 2.4em 0 0.75em;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(201,168,76,0.15);
        }
        .blog-content h3 {
          color: #F5F0E8;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 1.8em 0 0.6em;
        }
        .blog-content ul {
          margin: 0 0 1.4em;
          padding-left: 0;
          list-style: none;
        }
        .blog-content ul li {
          color: #A8B8CC;
          font-size: 1.0625rem;
          line-height: 1.75;
          padding: 4px 0 4px 20px;
          position: relative;
        }
        .blog-content ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 14px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C9A84C;
          opacity: 0.7;
        }
        .blog-content a {
          color: #C9A84C;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(201,168,76,0.4);
          transition: text-decoration-color 0.15s ease;
        }
        .blog-content a:hover {
          text-decoration-color: #C9A84C;
        }
        .blog-content strong {
          color: #F5F0E8;
          font-weight: 600;
        }
        .blog-content h2:first-child { margin-top: 0; }
      `}</style>

      <BlogNavWrapper />

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '120px 24px 80px' }}>

        {/* Back link */}
        <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8A9BB5', fontSize: '0.875rem', textDecoration: 'none', marginBottom: 40 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to Blog
        </Link>

        {/* Post header */}
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {formatDate(post.date)}
            </span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#4A5568' }} />
            <span style={{ fontSize: '0.75rem', color: '#8A9BB5' }}>{post.readTime}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.2, letterSpacing: '-0.03em', margin: 0 }}>
            {post.title}
          </h1>
        </header>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)', marginBottom: 48 }} />

        {/* Content */}
        <article
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div style={{
          marginTop: 64,
          padding: '40px 36px',
          background: 'rgba(201,168,76,0.04)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: 20,
          textAlign: 'center',
        }}>
          <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
            Try it free
          </p>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F5F0E8', letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            Analyse Your Bank Statement Now
          </h2>
          <p style={{ color: '#8A9BB5', fontSize: '0.9rem', margin: '0 0 28px', lineHeight: 1.6 }}>
            Upload any UK bank statement PDF and get an instant spending breakdown. No account required, no bank login, completely free.
          </p>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
              color: '#080C14',
              fontWeight: 700,
              fontSize: '0.95rem',
              padding: '13px 32px',
              borderRadius: 50,
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
            }}
          >
            Try MoneySorted Free →
          </Link>
        </div>

        {/* Bottom back link */}
        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <Link href="/blog" style={{ color: '#8A9BB5', fontSize: '0.875rem', textDecoration: 'none' }}>
            ← Back to all articles
          </Link>
        </div>

      </main>
    </div>
  );
}
