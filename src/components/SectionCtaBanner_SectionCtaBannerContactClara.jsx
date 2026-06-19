import React from 'react';

export function SectionCtaBanner_SectionCtaBannerContactClara() {

  return (
    <div id="section_cta_banner_contact_clara" className="jean-motion-layer" data-jean-reveal="true" data-section-id="section_cta_banner_contact_clara" data-section-type="cta_banner">
    <section className="py-16 lg:py-20" style={{ background: 'var(--color-primary)' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Chceš navrhnout trasy pro tvé čtení — nebo pro tvůj vlastní výlet?</h2>
        <div className="mb-6 flex flex-col gap-3"><div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_cta_paragraph\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6;font-weight:400\">Napiš mi, co tě láká (město, pobřeží, hory, ticho rána). Odpovím osobně a doporučím deníkový start i konkrétní zastávky.</p>" }} /></div>
        <a href="#section_contact_form_contact" className="inline-block px-8 py-3 rounded-full font-semibold bg-white" style={{ color: 'var(--color-primary)' }}>Kontaktovat nás</a>
      </div>
    </section>
    </div>
  );
}
