import React, { useState, useRef } from 'react';

const JEAN_FORM_ID = "e7a59f9e-f715-4d3f-913b-2773019422cd";
const JEAN_API_URL = "https://jeanai.onrender.com";

const JEAN_COPY = {
  labelName: 'Jméno',
  labelEmail: 'E-mail',
  labelMessage: 'Zpráva',
  placeholderName: 'Vaše jméno',
  placeholderEmail: 'vase@email.cz',
  placeholderMessage: 'Vaše zpráva…',
  submitIdle: 'Odeslat zprávu',
  submitSending: 'Odesílám…',
  successHeading: 'Zpráva odeslána!',
  successBody: 'Děkujeme za Váš zájem. Ozveme se Vám co nejdříve.',
  errorEmailRequired: 'Prosím zadejte svůj e-mail.',
  errorEmailInvalid: 'Prosím zadejte platnou e-mailovou adresu.',
  errorMessageRequired: 'Prosím zadejte svoji zprávu.',
  errorTurnstile: 'Prosím dokončete bezpečnostní ověření.',
  errorGeneric: 'Něco se nepovedlo. Zkuste to prosím znovu.',
  errorNetwork: 'Chyba sítě. Zkontrolujte připojení a zkuste znovu.',
};

export function SectionContact_SectionContactFormContact() {
  const [_name, setName] = useState('');
  const [_email, setEmail] = useState('');
  const [_msg, setMsg] = useState('');
  const [status, setStatus] = useState('idle');
  const [errMsg, setErrMsg] = useState('');
  const _hpRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (_hpRef.current && _hpRef.current.value) return;
    if (!_email.trim()) { setErrMsg(JEAN_COPY.errorEmailRequired); setStatus('error'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_email.trim())) { setErrMsg(JEAN_COPY.errorEmailInvalid); setStatus('error'); return; }
    if (!_msg.trim()) { setErrMsg(JEAN_COPY.errorMessageRequired); setStatus('error'); return; }
    setStatus('submitting');
    setErrMsg('');
    try {
      const body = { fields: { name: _name.trim(), email: _email.trim(), message: _msg.trim() }, _hp: '' };
      const res = await fetch(JEAN_API_URL + '/v1/public/forms/' + JEAN_FORM_ID + '/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        const d = await res.json().catch(() => ({}));
        setErrMsg(d.error || JEAN_COPY.errorGeneric);
        setStatus('error');
      }
    } catch {
      setErrMsg(JEAN_COPY.errorNetwork);
      setStatus('error');
    }
  };

  return (
    <div className="jean-motion-layer" data-jean-reveal="true" id="section_contact_form_contact" data-section-id="section_contact_form_contact" data-section-type="contact">
    <section id="contact" className="py-20 lg:py-28 jean-section-shell" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="jean-rhythm-tight mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-5" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Kontakt</h2>
        <div className="max-w-3xl mx-auto text-center mb-12 flex flex-col gap-4"><div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_contact_intro\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6;font-weight:400\">Pokud chceš spolupracovat na návrhu témat, poslat tip na trasu, nebo jen napsat svůj vlastní „zápis“, který se chce vydat, ozvi se. Píšu s klidem, ale odpovídám konkrétně.</p>" }} /></div>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="flex flex-col gap-4">
            
          </div>
          {status === 'success' ? (
            <div className="jean-elevated p-6 rounded-3xl flex flex-col items-center gap-5 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text)' }}>{JEAN_COPY.successHeading}</h3>
              <p style={{ color: 'var(--color-muted)' }}>{JEAN_COPY.successBody}</p>
            </div>
          ) : (
            <form className="jean-elevated p-6 rounded-3xl flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
              <input ref={_hpRef} type="text" name="_hp" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{JEAN_COPY.labelName}</label>
                <input type="text" value={_name} onChange={(e) => setName(e.target.value)} placeholder={JEAN_COPY.placeholderName} className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none" style={{ borderColor: 'var(--color-line)', background: 'var(--color-bg)', color: 'var(--color-text)' }} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{JEAN_COPY.labelEmail} <span style={{ color: 'var(--color-primary)' }}>*</span></label>
                <input type="email" value={_email} onChange={(e) => setEmail(e.target.value)} placeholder={JEAN_COPY.placeholderEmail} required className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none" style={{ borderColor: 'var(--color-line)', background: 'var(--color-bg)', color: 'var(--color-text)' }} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{JEAN_COPY.labelMessage} <span style={{ color: 'var(--color-primary)' }}>*</span></label>
                <textarea value={_msg} onChange={(e) => setMsg(e.target.value)} placeholder={JEAN_COPY.placeholderMessage} rows={4} required className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none resize-none" style={{ borderColor: 'var(--color-line)', background: 'var(--color-bg)', color: 'var(--color-text)' }} />
              </div>
              {errMsg && <p className="text-sm" role="alert" style={{ color: '#EF4444' }}>{errMsg}</p>}
              <button type="submit" disabled={status === 'submitting'} className="w-full py-3 rounded-xl font-semibold text-white disabled:opacity-60 transition-opacity" style={{ backgroundColor: 'var(--color-primary)' }}>
                {status === 'submitting' ? JEAN_COPY.submitSending : JEAN_COPY.submitIdle}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
    </div>
  );
}
