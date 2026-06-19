import React, { useState, useEffect } from 'react';

const JEAN_SITE_ID = "2efb59e7-f59f-4c02-8d6b-f6a904882944";
const JEAN_API_URL = "https://jeanai.onrender.com";

const JEAN_COPY = {
  loading: 'Načítám příspěvky…',
  empty: 'Zatím žádné příspěvky.',
  error: 'Příspěvky se nepodařilo načíst.',
  readMore: 'Číst dál',
};

function formatBlogDate(iso) {
  if (!iso) return '';
  try { return new Date(iso).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' }); }
  catch { return ''; }
}

export function SectionBlog_SectionBlogFeed() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(JEAN_API_URL + '/v1/public/blog/' + encodeURIComponent(JEAN_SITE_ID) + '/posts');
        if (!res.ok) { if (!cancelled) setStatus('error'); return; }
        const d = await res.json().catch(() => ({}));
        if (cancelled) return;
        setPosts(Array.isArray(d.posts) ? d.posts : []);
        setStatus('ready');
      } catch {
        if (!cancelled) setStatus('error');
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="jean-motion-layer" data-jean-reveal="true" id="section_blog_feed" data-section-id="section_blog_feed" data-section-type="blog">
    <section className="py-20 lg:py-28 jean-section-shell " style={{ backgroundColor: 'var(--color-surface-tint)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Deníkové zápisy</h2>
        <div className="mb-10 flex flex-col gap-3 text-center max-w-2xl mx-auto"><div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_blog_intro\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6;font-weight:400\">Tady se objevují nové zápisy Kláry z Valtic. Vždycky platí: draft vzniká s pomocí AI, ale před publikací prochází lidským schválením — aby tón zůstal stejný.</p>" }} /></div>
        {status === 'loading' && (
          <p className="text-center text-sm" style={{ color: 'var(--color-muted)' }}>{JEAN_COPY.loading}</p>
        )}
        {status === 'error' && (
          <p className="text-center text-sm" role="alert" style={{ color: '#EF4444' }}>{JEAN_COPY.error}</p>
        )}
        {status === 'ready' && posts.length === 0 && (
          <p className="text-center text-sm" style={{ color: 'var(--color-muted)' }}>{JEAN_COPY.empty}</p>
        )}
        {status === 'ready' && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="jean-elevated rounded-3xl overflow-hidden flex flex-col">
                {post.imageUrl && (
                  <img src={post.imageUrl} alt="" className="w-full h-48 object-cover" loading="lazy" />
                )}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  {post.publishedAt && (
                    <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{formatBlogDate(post.publishedAt)}</span>
                  )}
                  <h3 className="text-xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>{post.title}</h3>
                  <p className="text-sm flex-1" style={{ color: 'var(--color-muted)', whiteSpace: 'pre-wrap' }}>
                    {(post.body || '').slice(0, 200)}{(post.body || '').length > 200 ? '…' : ''}
                  </p>
                  {Array.isArray(post.hashtags) && post.hashtags.length > 0 && (
                    <div className="text-xs font-medium" style={{ color: 'var(--color-primary)' }}>
                      {post.hashtags.map((h) => '#' + h).join(' ')}
                    </div>
                  )}
                  {post.disclosure && (
                    <p className="text-xs mt-1 pt-3 border-t" style={{ color: 'var(--color-muted)', borderColor: 'var(--color-line)' }}>{post.disclosure}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
    </div>
  );
}
