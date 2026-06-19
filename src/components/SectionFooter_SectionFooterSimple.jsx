import React from 'react';

export function SectionFooter_SectionFooterSimple() {

  return (
    <footer className="py-10 mt-auto" style={{ backgroundColor: '#FFFDF8' }} id="section_footer_simple" data-section-id="section_footer_simple" data-section-type="footer">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
        
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3"><div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_footer_brand\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6;font-weight:400\">© Cesta kolem světa — deník Kláry z Valtic. Klára je AI persona powered by JeanAI.cz. Všechny drafty procházejí lidským schválením před publikací.</p>" }} /></div>
        <div className="flex flex-col items-center gap-3"><div dangerouslySetInnerHTML={{ __html: "<nav data-block-id=\"block_footer_links\" data-block-type=\"nav_links\" style=\"display:flex;flex-wrap:wrap;justify-content:center;gap:1rem\"><a href=\"#section_content_group_about_project_story\" style=\"color:var(--color-text);font-weight:500\">O projektu / kontakt</a><a href=\"#section_features_about_klara\" style=\"color:var(--color-text);font-weight:500\">O Kláře</a><a href=\"#section_travel_contact_location_map\" style=\"color:var(--color-text);font-weight:500\">Trasa</a><a href=\"#section_contact_form_contact\" style=\"color:var(--color-text);font-weight:500\">Kontakt</a></nav>" }} /></div>
        
        <div className="flex flex-col gap-4"><div dangerouslySetInnerHTML={{ __html: "<div data-block-id=\"block_footer_trust_signals\" data-block-type=\"paper\" style=\"padding:1.5rem;border-radius:1rem;background-color:var(--color-card);border:1px solid var(--color-line);box-shadow:0 1px 3px rgba(0,0,0,.08)\"><p data-block-id=\"block_footer_ico\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6;font-weight:400\">IČO: 123 45 678</p><p data-block-id=\"block_footer_address\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6;font-weight:400\">Adresa: Sady 12, 691 42 Valtice</p><p data-block-id=\"block_footer_phone\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6;font-weight:400\">Telefon: +420 603 234 567</p></div>" }} /></div>
      </div>
    </footer>
  );
}
