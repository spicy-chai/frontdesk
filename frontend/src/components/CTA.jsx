import { useState } from 'react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdsrOygnFbjEdzPqGkjb-p7LBJNGZEqTJwkg7Aijp9xVg7ikg/viewform?usp=header';
  const ENTRY_ID = 'entry.947872582';

  const getJoinUrl = () => {
    return email.trim()
      ? `${FORM_URL}&${ENTRY_ID}=${encodeURIComponent(email)}`
      : FORM_URL;
  };

  return (
    <section>
      <div className="cta" aria-labelledby="cta">
        <h2 id="cta">Protect your time. Let FrontDesk answer first.</h2>
        <p className="sub" style={{ margin: 0, maxWidth: '720px' }}>
          Join the waitlist—no spam, no fluff. We'll only contact you with meaningful updates.
        </p>
        <div className="email-input" style={{ maxWidth: '560px', width: '100%' }}>
          <label className="sr" htmlFor="email2">
            Email
          </label>
          <input
            id="email2"
            type="email"
            placeholder="you@company.com"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <a
            id="joinBottom2"
            className="btn primary"
            href={getJoinUrl()}
            target="_blank"
            rel="noopener"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
