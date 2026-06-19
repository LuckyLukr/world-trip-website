import React from 'react';

export function SectionHero_SectionHeroSplit() {

  return (
    <section className=" jean-scroll-stage jean-hero-stage py-20 lg:py-32 relative overflow-hidden" data-jean-parallax-root="hero" style={{ backgroundColor: 'rgba(255,128,244,0.05)', backgroundImage: "linear-gradient(180deg, rgba(255,128,244,0.05) 0%, rgba(255,128,244,0.05) 100%), url(\"/images/tiles-1.jpg\")", backgroundSize: 'cover', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat', borderStyle: 'solid', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '0.75rem' }} id="section_hero_split" data-section-id="section_hero_split" data-section-type="hero">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="absolute -top-32 -left-20 w-3/5 opacity-15" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--color-primary)" d="M38,-64C49,-55,57,-42,65,-28C73,-13,81,3,80,19C79,35,69,51,57,63C45,75,31,83,16,83C1,84,-14,76,-28,67C-41,58,-53,47,-62,33C-71,20,-77,4,-75,-12C-73,-28,-63,-44,-50,-53C-37,-63,-21,-66,-5,-67C11,-68,27,-72,38,-64Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute -bottom-20 -right-10 w-2/5 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--color-accent)" d="M45,-76C57,-69,65,-54,70,-38C76,-23,80,-8,78,8C76,24,68,41,56,53C44,66,28,75,11,79C-6,83,-24,82,-39,74C-54,67,-66,53,-72,37C-79,22,-80,4,-75,-12C-69,-29,-57,-43,-44,-52C-30,-61,-15,-64,1,-66C18,-67,33,-82,45,-76Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="jean-hero-shell">
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 w-full">
        <div className="flex-1 lg:max-w-xl jean-panel-sticky jean-motion-layer jean-parallax-subtle" data-jean-reveal="true">
          <h1 className="text-5xl lg:text-7xl tracking-tight leading-none mb-6" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', fontWeight: 300 }}>Zastav se. Dýchej mezi stránkami deníku.</h1>
          <p className="text-xl mb-8" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontWeight: 300 }}>Klára z Valtic sdílí svou fiktivní cestu deník po dni. Každý zápis prochází lidským schválením — a samotná Klára je AI persona powered by JeanAI.cz.</p>
          <a href="#section_blog_feed" className="jean-float inline-block px-10 py-4 rounded-2xl font-semibold text-white text-lg shadow-xl" style={{ backgroundColor: 'var(--color-primary)' }}>Začít číst deníky</a>
        </div>
        
        </div>
      </div>
    </section>
  );
}
