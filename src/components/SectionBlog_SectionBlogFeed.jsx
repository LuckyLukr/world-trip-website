import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const JEAN_SITE_ID = "2efb59e7-f59f-4c02-8d6b-f6a904882944";
const JEAN_API_URL = "https://jeanai.onrender.com";
const JEAN_PREVIEW = false;

const JEAN_COPY = {
  loading: 'Načítám příspěvky…',
  loadingPost: 'Načítám příspěvek…',
  empty: 'Zatím žádné příspěvky.',
  error: 'Příspěvky se nepodařilo načíst.',
  notFound: 'Příspěvek nenalezen.',
  readMore: 'více',
  viewPost: 'Zobrazit příspěvek',
  prevPost: 'Předchozí',
  nextPost: 'Další',
  back: 'Zpět na příspěvky',
  close: 'Zavřít',
};

function formatBlogDate(iso) {
  if (!iso) return '';
  try { return new Date(iso).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' }); }
  catch { return ''; }
}

const PREVIEW_LEN = 140;

// Inline SVG placeholder (no network) used for sample posts in the editor preview.
function jeanSamplePlaceholder(from, to) {
  const svg = "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>"
    + "<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>"
    + "<stop offset='0' stop-color='" + from + "'/><stop offset='1' stop-color='" + to + "'/>"
    + "</linearGradient></defs><rect width='600' height='600' fill='url(#g)'/></svg>";
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// Fallback posts shown only in the editor preview (JEAN_PREVIEW) when no live posts
// exist yet. A deployed site never shows these — it renders live posts (or the real
// empty state).
const JEAN_SAMPLE_POSTS = [
  {
    id: 'sample-1', slug: 'ukazkovy-prispevek-1', title: 'Ukázkový příspěvek',
    body: 'Takto bude vypadat příspěvek, který tvůj AI tvůrce zveřejní. Skutečné příspěvky se sem doplní automaticky po publikaci. Obrázek, nadpis, text i hashtagy se generují podle zadání a osobnosti tvůrce.',
    imageUrl: jeanSamplePlaceholder('#6366f1', '#8b5cf6'),
    hashtags: ['ukazka', 'nahled', 'jeanai'], disclosure: '✨ Ukázkový obsah — náhled v editoru.',
    publishedAt: new Date().toISOString(),
  },
  {
    id: 'sample-2', slug: 'ukazkovy-prispevek-2', title: 'Druhý ukázkový příspěvek',
    body: 'Karty jsou ve stylu Instagramu: čtvercový obrázek, krátký úryvek a odkaz „více“, který otevře celý příspěvek. Po nasazení webu se zde objeví reálné příspěvky.',
    imageUrl: jeanSamplePlaceholder('#0ea5e9', '#22d3ee'),
    hashtags: ['ukazka', 'design'], disclosure: '✨ Ukázkový obsah — náhled v editoru.',
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'sample-3', slug: 'ukazkovy-prispevek-3', title: 'Třetí ukázkový příspěvek',
    body: 'Kliknutím na obrázek nebo na „více“ se otevře detail příspěvku s celým textem a hashtagy. Detail má vlastní adresu (#/post/…), takže se dá sdílet.',
    imageUrl: jeanSamplePlaceholder('#f59e0b', '#ef4444'),
    hashtags: ['ukazka', 'detail', 'sdileni'], disclosure: '✨ Ukázkový obsah — náhled v editoru.',
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
  },
];

// Hash routing: #/post/<slug> deep-links a single post (shareable, deep-linkable,
// works on any static host with no server rewrite). Returns the slug or null.
function slugFromHash() {
  if (typeof window === 'undefined') return null;
  const h = window.location.hash || '';
  const prefix = '#/post/';
  return h.indexOf(prefix) === 0 ? decodeURIComponent(h.slice(prefix.length)) : null;
}

export function SectionBlog_SectionBlogFeed() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');
  // The open post is driven by the URL hash (#/post/<slug>) so individual posts
  // are shareable and survive a reload / browser back button.
  const [activeSlug, setActiveSlug] = useState(slugFromHash);
  // Deep-link fallback: a slug not in the loaded feed (older than the latest
  // page) is fetched on demand from the single-post endpoint.
  const [fetchedPost, setFetchedPost] = useState(null);
  const [detailStatus, setDetailStatus] = useState('idle'); // idle|loading|ready|notfound|error
  // Second-level zoom: tapping the detail image shows it full-screen.
  const [imageZoomed, setImageZoomed] = useState(false);

  const activeIdx = activeSlug ? posts.findIndex((p) => p.slug === activeSlug) : -1;
  const activePost = activeSlug ? (activeIdx >= 0 ? posts[activeIdx] : fetchedPost) : null;
  const canNavigate = activeIdx >= 0 && posts.length > 1;

  const goToPost = (slug) => { if (slug) window.location.hash = '#/post/' + encodeURIComponent(slug); };
  const closeDetail = () => {
    if (typeof window !== 'undefined' && window.location.hash.indexOf('#/post/') === 0) {
      window.location.hash = '#/';
    } else {
      setActiveSlug(null);
    }
  };

  // Keep the open post in sync with the hash (mount value + back/forward + links).
  useEffect(() => {
    const onHash = () => setActiveSlug(slugFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Load the feed (latest posts) once. The editor preview fetches the same live
  // data as the deployed site (the public blog endpoint sends permissive CORS, so
  // the sandboxed preview iframe can read it). Only if that returns nothing — or
  // fails — does the preview fall back to sample posts, so the section stays
  // visible/editable on a brand-new site. Deployed sites never show samples.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(JEAN_API_URL + '/v1/public/blog/' + encodeURIComponent(JEAN_SITE_ID) + '/posts');
        if (!res.ok) throw new Error('http ' + res.status);
        const d = await res.json().catch(() => ({}));
        if (cancelled) return;
        const list = Array.isArray(d.posts) ? d.posts : [];
        if (list.length === 0 && JEAN_PREVIEW) { setPosts(JEAN_SAMPLE_POSTS); setStatus('ready'); return; }
        setPosts(list);
        setStatus('ready');
      } catch {
        if (cancelled) return;
        if (JEAN_PREVIEW) { setPosts(JEAN_SAMPLE_POSTS); setStatus('ready'); return; }
        setStatus('error');
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // Deep link to a post that isn't in the loaded feed → fetch it by slug. Wait
  // for the feed to settle first so in-feed posts skip the extra request.
  useEffect(() => {
    if (!activeSlug || activeIdx >= 0 || status === 'loading') {
      setDetailStatus('idle');
      setFetchedPost(null);
      return undefined;
    }
    let cancelled = false;
    setDetailStatus('loading');
    setFetchedPost(null);
    (async () => {
      try {
        const res = await fetch(JEAN_API_URL + '/v1/public/blog/' + encodeURIComponent(JEAN_SITE_ID) + '/posts/' + encodeURIComponent(activeSlug));
        if (!res.ok) { if (!cancelled) setDetailStatus(res.status === 404 ? 'notfound' : 'error'); return; }
        const d = await res.json().catch(() => null);
        if (cancelled) return;
        if (d && d.post) { setFetchedPost(d.post); setDetailStatus('ready'); }
        else setDetailStatus('notfound');
      } catch {
        if (!cancelled) setDetailStatus('error');
      }
    })();
    return () => { cancelled = true; };
  }, [activeSlug, activeIdx, status]);

  // Escape closes (zoom first, then the post), arrows navigate the loaded feed,
  // background scroll locked while open.
  useEffect(() => {
    if (!activeSlug) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') { if (imageZoomed) setImageZoomed(false); else closeDetail(); }
      else if (!imageZoomed && canNavigate && e.key === 'ArrowLeft') goToPost(posts[activeIdx <= 0 ? posts.length - 1 : activeIdx - 1].slug);
      else if (!imageZoomed && canNavigate && e.key === 'ArrowRight') goToPost(posts[activeIdx >= posts.length - 1 ? 0 : activeIdx + 1].slug);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeSlug, activeIdx, canNavigate, posts, imageZoomed]);

  // Reset the image zoom whenever the open post changes or the detail closes.
  useEffect(() => { setImageZoomed(false); }, [activeSlug]);

  // Reflect the open post in the tab/title so shared deep-links read well.
  useEffect(() => {
    if (!activePost || !activePost.title || typeof document === 'undefined') return undefined;
    const prevTitle = document.title;
    document.title = activePost.title;
    return () => { document.title = prevTitle; };
  }, [activePost]);

  return (
    <div className="jean-motion-layer" data-jean-reveal="true" id="section_blog_feed" data-section-id="section_blog_feed" data-section-type="blog">
    <section className="py-20 lg:py-28 jean-section-shell " style={{ backgroundColor: '#f8fafc', borderStyle: 'solid', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '0.75rem' }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Deníkové zápisy</h2>
        <div className="mb-10 flex flex-col gap-3 text-center max-w-2xl mx-auto"><div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_blog_intro\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6;font-weight:300\">Tady se objevují nové zápisy Kláry z Valtic. Vždycky platí: draft vzniká s pomocí AI, ale před publikací prochází lidským schválením — aby tón zůstal stejný.</p>" }} /></div>
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
            {posts.map((post) => {
              const body = post.body || '';
              const isLong = body.length > PREVIEW_LEN;
              const preview = isLong ? body.slice(0, PREVIEW_LEN).trimEnd() : body;
              return (
              <article key={post.id} className="jean-card rounded-3xl overflow-hidden flex flex-col">
                {post.imageUrl && (
                  <a
                    href={'#/post/' + encodeURIComponent(post.slug)}
                    className="group relative overflow-hidden aspect-square block"
                    aria-label={JEAN_COPY.viewPost}
                  >
                    <img src={post.imageUrl} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'rgba(0,0,0,0.38)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)', color: '#fff', fontSize: '1.1rem', lineHeight: 1, fontWeight: 300 }}>+</span>
                    </div>
                  </a>
                )}
                <div className="p-5 flex flex-col gap-2.5 flex-1">
                  {post.publishedAt && (
                    <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{formatBlogDate(post.publishedAt)}</span>
                  )}
                  <h3 className="text-lg font-bold leading-snug" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
                    <a href={'#/post/' + encodeURIComponent(post.slug)} style={{ color: 'inherit', textDecoration: 'none' }}>{post.title}</a>
                  </h3>
                  <p className="text-sm flex-1" style={{ color: 'var(--color-muted)', whiteSpace: 'pre-wrap', lineHeight: 1.55 }}>
                    {preview}{isLong ? '… ' : ''}
                    {isLong && (
                      <a
                        href={'#/post/' + encodeURIComponent(post.slug)}
                        className="font-medium"
                        style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
                      >
                        {JEAN_COPY.readMore}
                      </a>
                    )}
                  </p>
                  {Array.isArray(post.hashtags) && post.hashtags.length > 0 && (
                    <div className="text-xs font-medium" style={{ color: 'var(--color-primary)' }}>
                      {post.hashtags.slice(0, 8).map((h) => '#' + h).join(' ')}{post.hashtags.length > 8 ? ' …' : ''}
                    </div>
                  )}
                  {post.disclosure && (
                    <p className="text-xs mt-1 pt-3 border-t" style={{ color: 'var(--color-muted)', borderColor: 'var(--color-line)' }}>{post.disclosure}</p>
                  )}
                </div>
              </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
    {activeSlug && typeof document !== 'undefined' && createPortal(
      <>
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
          onClick={closeDetail}
          role="dialog"
          aria-modal="true"
        >
          {activePost ? (
            <div
              className="relative flex flex-col md:flex-row w-full max-w-5xl rounded-2xl overflow-hidden"
              style={{ background: 'var(--color-surface, #ffffff)', height: '88vh', maxHeight: '820px', boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {activePost.imageUrl && (
                <button
                  type="button"
                  className="md:w-3/5 shrink-0 flex items-center justify-center overflow-hidden"
                  style={{ background: '#000', border: 'none', padding: 0, cursor: 'zoom-in' }}
                  onClick={() => setImageZoomed(true)}
                  aria-label={JEAN_COPY.viewPost}
                >
                  <img
                    src={activePost.imageUrl}
                    alt={activePost.title || ''}
                    className="w-auto max-w-full max-h-[42vh] md:max-h-full object-contain"
                  />
                </button>
              )}
              <div className={'flex flex-col p-6 overflow-y-auto min-h-0 ' + (activePost.imageUrl ? 'md:w-2/5' : 'w-full')}>
                <a
                  href="#/"
                  className="inline-flex items-center gap-1 text-xs font-medium mb-3 self-start"
                  style={{ color: 'var(--color-muted)', textDecoration: 'none' }}
                >
                  &#8592; {JEAN_COPY.back}
                </a>
                {activePost.publishedAt && (
                  <span className="text-xs mb-2" style={{ color: 'var(--color-muted)' }}>{formatBlogDate(activePost.publishedAt)}</span>
                )}
                {activePost.title && (
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>{activePost.title}</h3>
                )}
                <p className="text-sm flex-1" style={{ color: 'var(--color-text)', whiteSpace: 'pre-wrap', lineHeight: 1.65 }}>{activePost.body}</p>
                {Array.isArray(activePost.hashtags) && activePost.hashtags.length > 0 && (
                  <div className="text-xs font-medium mt-4" style={{ color: 'var(--color-primary)', lineHeight: 1.6 }}>
                    {activePost.hashtags.map((h) => '#' + h).join(' ')}
                  </div>
                )}
                {activePost.disclosure && (
                  <p className="text-xs mt-4 pt-3 border-t" style={{ color: 'var(--color-muted)', borderColor: 'var(--color-line)' }}>{activePost.disclosure}</p>
                )}
                {canNavigate && (
                  <div className="flex items-center justify-between mt-5 pt-4 border-t" style={{ borderColor: 'var(--color-line)' }}>
                    <button
                      type="button"
                      className="text-xl px-3 py-1 rounded-full"
                      style={{ background: 'var(--color-surface-2, rgba(0,0,0,0.05))', color: 'var(--color-text)', border: 'none', cursor: 'pointer' }}
                      onClick={() => goToPost(posts[activeIdx <= 0 ? posts.length - 1 : activeIdx - 1].slug)}
                      aria-label={JEAN_COPY.prevPost}
                    >
                      &#8592;
                    </button>
                    <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{activeIdx + 1} / {posts.length}</span>
                    <button
                      type="button"
                      className="text-xl px-3 py-1 rounded-full"
                      style={{ background: 'var(--color-surface-2, rgba(0,0,0,0.05))', color: 'var(--color-text)', border: 'none', cursor: 'pointer' }}
                      onClick={() => goToPost(posts[activeIdx >= posts.length - 1 ? 0 : activeIdx + 1].slug)}
                      aria-label={JEAN_COPY.nextPost}
                    >
                      &#8594;
                    </button>
                  </div>
                )}
              </div>
              <button
                type="button"
                className="absolute top-3 right-3 flex items-center justify-center rounded-full"
                style={{ width: 36, height: 36, background: 'rgba(0,0,0,0.45)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1.2rem', lineHeight: 1 }}
                onClick={closeDetail}
                aria-label={JEAN_COPY.close}
              >
                &#215;
              </button>
            </div>
          ) : (
            <div
              className="relative flex flex-col items-center justify-center gap-4 rounded-2xl p-10 text-center"
              style={{ background: 'var(--color-surface, #ffffff)', maxWidth: 420 }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                {detailStatus === 'notfound' ? JEAN_COPY.notFound : detailStatus === 'error' ? JEAN_COPY.error : JEAN_COPY.loadingPost}
              </p>
              <a href="#/" className="text-sm font-medium" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                &#8592; {JEAN_COPY.back}
              </a>
            </div>
          )}
        </div>
        {imageZoomed && activePost && activePost.imageUrl && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.96)', cursor: 'zoom-out' }}
            onClick={() => setImageZoomed(false)}
          >
            <img
              src={activePost.imageUrl}
              alt={activePost.title || ''}
              className="max-w-[96vw] max-h-[96vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              className="absolute top-4 right-4 flex items-center justify-center rounded-full"
              style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.18)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1.4rem', lineHeight: 1 }}
              onClick={() => setImageZoomed(false)}
              aria-label={JEAN_COPY.close}
            >
              &#215;
            </button>
          </div>
        )}
      </>,
      document.body
    )}
    </div>
  );
}
