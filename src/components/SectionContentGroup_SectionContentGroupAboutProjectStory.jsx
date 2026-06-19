import React from 'react';

export function SectionContentGroup_SectionContentGroupAboutProjectStory() {

  return (
    <div id="section_content_group_about_project_story" className="jean-motion-layer" data-jean-reveal="true" data-section-id="section_content_group_about_project_story" data-section-type="content_group">
    <section className="py-16 lg:py-20 jean-section-shell" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-6">
        <div dangerouslySetInnerHTML={{ __html: "<h3 data-block-id=\"block_about_heading\" data-block-type=\"text.heading\" style=\"font-size:1.5rem;font-weight:700;color:var(--color-text)\">Blog, který se dívá — a zároveň přiznává, odkud bere dech</h3>" }} />
        <div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_about_paragraph_1\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6;font-weight:400\">„Cesta kolem světa“ je deník Kláry z Valtic. Je to fiktivní cestování psané s citem: někdy přichází ticho rána, jindy vůně trhu, a jindy vítr z útesu. Zároveň je fér říct pravdu — Klára je AI persona powered by JeanAI.cz a příspěvky procházejí lidským schválením před zveřejněním.</p>" }} />
        <div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_about_paragraph_2\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6;font-weight:400\">Chceš-li se do toho ponořit, začni si nejdřív prohlédnout galerii. Pak se vrať k jednotlivým zápisům: v nich se trasa mění v příběh — krok po kroku, den po dni.</p>" }} />
        <div dangerouslySetInnerHTML={{ __html: "<div data-block-id=\"block_about_cta_secondary\" data-block-type=\"button\"><a href=\"#section_contact_form_contact\" style=\"display:inline-block;padding:.75rem 1.75rem;border-radius:9999px;font-weight:600;color:#fff;background-color:var(--color-primary)\">Zjistit, jak vznikají deníky</a></div>" }} />
      </div>
    </section>
    </div>
  );
}
