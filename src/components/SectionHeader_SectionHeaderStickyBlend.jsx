import React from 'react';

export function SectionHeader_SectionHeaderStickyBlend() {
  const [headerMenuOpen, setHeaderMenuOpen] = React.useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-50" id="section_header_sticky_blend" data-section-id="section_header_sticky_blend" data-section-type="header">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <span className="inline-flex items-center px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.75)' }}>
          <span className="inline-flex items-center gap-2.5 flex-shrink-0"><img src="/images/logo-1.png" alt="Cesta kolem světa" className="h-9 w-auto object-contain flex-shrink-0" /><span className="text-xl tracking-tight flex-shrink-0" data-block-id="block_brand_heading" data-block-type="text.heading" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', fontWeight: 300 }}>Cesta kolem světa</span></span>
        </span>
        <button type="button" onClick={() => setHeaderMenuOpen((open) => !open)} aria-expanded={headerMenuOpen} aria-label="Menu" className="inline-flex flex-col justify-center items-center gap-1.5 w-11 h-11 rounded-full cursor-pointer" style={{ backgroundColor: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.75)' }}>
          <span style={{ width: '18px', height: '2px', backgroundColor: 'var(--color-text)', display: 'block', transition: 'transform .2s', transform: headerMenuOpen ? 'translateY(4px) rotate(45deg)' : 'none' }} />
          <span style={{ width: '18px', height: '2px', backgroundColor: 'var(--color-text)', display: 'block', transition: 'transform .2s', transform: headerMenuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>
      {headerMenuOpen && (
        <div className="mx-6 rounded-2xl px-8 py-8" style={{ backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-line)', boxShadow: '0 24px 60px rgba(0,0,0,0.18)' }}>
          <nav className="flex flex-col gap-4">
            
          </nav>
          
        </div>
      )}
    </header>
  );
}
