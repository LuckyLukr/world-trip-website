import React from 'react';

export function SectionHeader_SectionHeaderStickyBlend() {

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#fefefe', borderBottom: '1px solid #e2e8f0' }} id="section_header_sticky_blend" data-section-id="section_header_sticky_blend" data-section-type="header">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-8">
        <span className="inline-flex items-center gap-2.5 flex-shrink-0"><img src="/images/logo-1.png" alt="Cesta kolem světa" className="h-9 w-auto object-contain flex-shrink-0" /><span className="text-xl tracking-tight flex-shrink-0" data-block-id="block_brand_heading" data-block-type="text.heading" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', fontWeight: 300 }}>Cesta kolem světa</span></span>
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full" style={{ backgroundColor: 'var(--color-nav)', border: '1px solid var(--color-nav-border)' }}>
          
        </nav>
        
      </div>
    </header>
  );
}
