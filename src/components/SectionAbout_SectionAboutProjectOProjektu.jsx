import React from 'react';

export function SectionAbout_SectionAboutProjectOProjektu() {

  return (
    <div id="section_about_project_o_projektu" className="jean-motion-layer" data-jean-reveal="true" data-section-id="section_about_project_o_projektu" data-section-type="about">
    <section className="py-20 lg:py-28 jean-section-shell" style={{ backgroundColor: 'var(--color-surface-strong)' }}>
      <div className="jean-rhythm-wide mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>O projektu / Jak číst deník</h2>
          <div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_about_project_paragraph\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6;font-weight:400\">Web je připravený na publikaci draftů generovaných agentem přes API a následné lidské schválení před zveřejněním. V praxi to znamená: chcete-li se vracet k deníkovým zápisům, můžete si být jistí, že finální text i tón budou držet stejnou tvář — bez náhodných skoků.</p>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<ol data-block-id=\"block_about_project_list\" data-block-type=\"list\" style=\"margin:0;padding:0;color:var(--color-text)\"><li style=\"margin:0 0 .25rem 1.25rem;padding:0;list-style:decimal\">Draft vznikne podle zvoleného tématu a trasy.</li><li style=\"margin:0 0 .25rem 1.25rem;padding:0;list-style:decimal\">Proběhne kontrola člověkem (ton, čitelnost, konzistence).</li><li style=\"margin:0 0 .25rem 1.25rem;padding:0;list-style:decimal\">Zápis se publikuje jako deníkový záznam s krátkou emocí a stopou trasy.</li><li style=\"margin:0 0 .25rem 1.25rem;padding:0;list-style:decimal\">Galerie doplní vizuální atmosféru (selfie, Instagram nálada, krajina).</li></ol>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<div data-block-id=\"block_about_project_button\" data-block-type=\"button\"><a href=\"#section_contact_form_contact\" style=\"display:inline-block;padding:.75rem 1.75rem;border-radius:9999px;font-weight:600;color:#fff;background-color:var(--color-primary)\">Rád/a čtu deníky — napiš mi</a></div>" }} />
        </div>
      </div>
    </section>
    </div>
  );
}
