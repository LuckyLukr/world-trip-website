import React from 'react';

export function SectionHeader_SectionHeaderStickyBlend() {

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }} id="section_header_sticky_blend" data-section-id="section_header_sticky_blend" data-section-type="header">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-8">
        <span className="text-xl tracking-tight flex-shrink-0" data-block-id="block_brand_heading" data-block-type="text.heading" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', fontWeight: 300 }}>Cesta kolem světa</span>
        <nav className="hidden md:flex gap-6" data-block-id="block_nav_links_top" data-block-type="nav_links">
          <a href="#section_features_about_klara" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--color-text)' }}>O Kláře</a>
          <a href="#section_travel_contact_location_map" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--color-text)' }}>Trasa</a>
          <a href="#section_about_project_o_projektu" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--color-text)' }}>O projektu / kontakt</a>
          <a href="#section_contact_form_contact" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--color-text)' }}>Kontakt</a>
        </nav>
        
      </div>
    </header>
  );
}
