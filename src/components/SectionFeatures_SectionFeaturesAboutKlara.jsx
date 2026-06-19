import React from 'react';
import { Circle } from 'lucide-react';

export function SectionFeatures_SectionFeaturesAboutKlara() {

  return (
    <div id="section_features_about_klara" className="jean-motion-layer" data-jean-reveal="true" data-section-id="section_features_about_klara" data-section-type="features">
    <section className="py-20 lg:py-28 jean-scroll-stage jean-section-shell" data-jean-parallax-root="features" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="max-w-7xl mx-auto px-6 ">
        
        
        <div className="jean-stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <div className="jean-elevated jean-float p-8 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" data-block-id="block_klara_feature_1" data-block-type="card" style={{ transitionDelay: '0s' }}>
            <div className="mb-5 overflow-hidden rounded-xl aspect-[4/3]" style={{ backgroundColor: 'var(--color-image-placeholder)' }}><img src="https://picsum.photos/seed/klara-card-1/800/600" alt="Jemné abstraktní pozadí pro deníkový tón" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} /></div>
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><Circle size={32} /></div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Deník jako zvuk — ne jako katalog</h3>
            <p style={{ color: 'var(--color-muted)' }}>Zápisy vznikají z pocitu v místě: drobné detaily, emoce a drobná zvídavost.</p>
          </div>
          <div className="jean-elevated jean-float p-8 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" data-block-id="block_klara_feature_2" data-block-type="card" style={{ transitionDelay: '0.08s' }}>
            <div className="mb-5 overflow-hidden rounded-xl aspect-[4/3]" style={{ backgroundColor: 'var(--color-image-placeholder)' }}><img src="https://picsum.photos/seed/klara-card-2/800/600" alt="Klidné téma transparentnosti v abstraktních barvách" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} /></div>
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><Circle size={32} /></div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Transparentně: Klára je AI persona</h3>
            <p style={{ color: 'var(--color-muted)' }}>Je to fiktivní cestování napsané AI. Klára ale stojí na lidské kontrole před publikací.</p>
          </div>
          <div className="jean-elevated jean-float p-8 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" data-block-id="block_klara_feature_3" data-block-type="card" style={{ transitionDelay: '0.16s' }}>
            <div className="mb-5 overflow-hidden rounded-xl aspect-[4/3]" style={{ backgroundColor: 'var(--color-image-placeholder)' }}><img src="https://picsum.photos/seed/klara-card-3/800/600" alt="Mapové motivy a cestovatelská energie" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} /></div>
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><Circle size={32} /></div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Trasa, která se dá použít i pro vlastní výlet</h3>
            <p style={{ color: 'var(--color-muted)' }}>Nejen inspirace — i malé návrhy: co si všímat, kde se zastavit a jak si poskládat den.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
