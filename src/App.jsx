import React, { useEffect } from 'react';
import { SectionHeader_SectionHeaderStickyBlend } from './components/SectionHeader_SectionHeaderStickyBlend';
import { SectionHero_SectionHeroSplit } from './components/SectionHero_SectionHeroSplit';
import { SectionContentGroup_SectionContentGroupAboutProjectStory } from './components/SectionContentGroup_SectionContentGroupAboutProjectStory';
import { SectionLocation_SectionTravelContactLocationMap } from './components/SectionLocation_SectionTravelContactLocationMap';
import { SectionBlog_SectionBlogFeed } from './components/SectionBlog_SectionBlogFeed';
import { SectionCtaBanner_SectionCtaBannerContactClara } from './components/SectionCtaBanner_SectionCtaBannerContactClara';
import { SectionContact_SectionContactFormContact } from './components/SectionContact_SectionContactFormContact';
import { SectionAbout_SectionAboutProjectOProjektu } from './components/SectionAbout_SectionAboutProjectOProjektu';
import { SectionFooter_SectionFooterSimple } from './components/SectionFooter_SectionFooterSimple';

function useJeanScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealNodes = Array.from(document.querySelectorAll('[data-jean-reveal]'));
    const parallaxRoots = Array.from(document.querySelectorAll('[data-jean-parallax-root]'));
    const showAll = () => revealNodes.forEach((node) => node.classList.add('is-visible'));

    if (reducedMotion) {
      showAll();
      return undefined;
    }

    let observer = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
      revealNodes.forEach((node) => observer.observe(node));
    } else {
      showAll();
    }

    let frameId = 0;
    const updateParallax = () => {
      frameId = 0;
      const viewportHeight = window.innerHeight || 1;
      parallaxRoots.forEach((root) => {
        const rect = root.getBoundingClientRect();
        const progress = ((viewportHeight * 0.5) - rect.top) / (viewportHeight + rect.height);
        const clamped = Math.max(-1.2, Math.min(1.2, progress));
        root.style.setProperty('--jean-scroll-progress', clamped.toFixed(4));
      });
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateParallax);
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      observer?.disconnect();
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);
}

export default function App() {
  useJeanScrollEffects();

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <div className="jean-site-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SectionHeader_SectionHeaderStickyBlend />
      <SectionHero_SectionHeroSplit />
      <SectionContentGroup_SectionContentGroupAboutProjectStory />
      <SectionLocation_SectionTravelContactLocationMap />
      <SectionBlog_SectionBlogFeed />
      <SectionCtaBanner_SectionCtaBannerContactClara />
      <SectionContact_SectionContactFormContact />
      <SectionAbout_SectionAboutProjectOProjektu />
      <SectionFooter_SectionFooterSimple />
      </div>
    </>
  );
}
