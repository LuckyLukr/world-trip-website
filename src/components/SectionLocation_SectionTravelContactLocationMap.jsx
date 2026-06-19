import React from 'react';

export function SectionLocation_SectionTravelContactLocationMap() {

  return (
    <div id="section_travel_contact_location_map" className="jean-motion-layer" data-jean-reveal="true" data-section-id="section_travel_contact_location_map" data-section-type="location">
    <section className="py-20 lg:py-28 jean-section-shell" style={{ backgroundColor: 'var(--color-surface-tint)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-3 jean-motion-layer" data-jean-reveal="true">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Trasa, kterou si neseš v hlavě</h2>
            <div className="flex flex-col gap-4 mb-4"><div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_location_paragraph\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6;font-weight:400\">Nejde o mapu „kam přesně“, ale o rytmus „jak to vypadá“. Když budeš chtít, napiš — pošlu ti navržené zastávky a krátký deníkový start pro tvůj vlastní výlet.</p>" }} /></div>
            <address className="not-italic flex items-start gap-2 mt-2" style={{ color: 'var(--color-muted)', fontSize: '.95rem' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }}><path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg><span>Valtice, Česká republika</span></address>
            <div dangerouslySetInnerHTML={{ __html: "<div data-block-id=\"block_location_map_address\" data-block-type=\"card\" style=\"padding:1.25rem;border-radius:16px;border:1px solid rgba(0,0,0,.08);background:var(--color-surface);color:var(--color-text)\"><strong style=\"display:block;color:var(--color-text);margin-bottom:.25rem\">Místo</strong><span style=\"color:var(--color-text);opacity:.82\">Valtice, ČR</span></div>" }} />
          </div>
          <div className="overflow-hidden jean-motion-layer" data-jean-reveal="true" style={{ minHeight: '420px', borderRadius: '1rem' }}>
            <div style={{ width: '100%', minHeight: '420px', borderRadius: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.25rem', padding: '1.5rem', background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-card) 100%)', border: '1px solid var(--color-line)' }}>
        <div style={{ display: 'grid', gap: '.9rem' }}>
          <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'color-mix(in srgb, var(--color-primary) 14%, var(--color-surface))', color: 'var(--color-primary)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div style={{ display: 'grid', gap: '.45rem' }}><strong style={{ color: 'var(--color-text)', fontSize: '1.05rem' }}>Valtice, Česká republika</strong><span style={{ color: 'var(--color-muted)', fontSize: '.88rem' }}>48.786000, 16.689000</span></div>
          <p style={{ margin: 0, color: 'var(--color-muted)', lineHeight: 1.6 }}>Interactive third-party map embeds throw sandbox and CORS errors inside the Jean preview. Open the location directly in your preferred map instead.</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem' }}>
          <a href="https://www.google.com/maps/search/?api=1&amp;query=48.786%2C16.689" target="_blank" rel="noreferrer noopener" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '.7rem 1rem', borderRadius: '9999px', fontWeight: 600, background: 'var(--color-primary)', color: '#fff' }}>Google Maps</a>
          <a href="https://www.openstreetmap.org/?mlat=48.786&amp;mlon=16.689#map=11/48.786/16.689" target="_blank" rel="noreferrer noopener" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '.7rem 1rem', borderRadius: '9999px', fontWeight: 600, border: '1px solid var(--color-line)', background: 'var(--color-surface)', color: 'var(--color-text)' }}>OpenStreetMap</a>
          <a href="https://mapy.com/zakladni?source=coor&amp;id=16.689%2C48.786&amp;x=16.689&amp;y=48.786&amp;z=11" target="_blank" rel="noreferrer noopener" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '.7rem 1rem', borderRadius: '9999px', fontWeight: 600, border: '1px solid var(--color-line)', background: 'var(--color-surface)', color: 'var(--color-text)' }}>Mapy.com</a>
        </div>
      </div>
          </div>
        </div>
        
      </div>
    </section>
    </div>
  );
}
