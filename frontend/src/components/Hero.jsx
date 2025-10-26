import { useState, useEffect } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdsrOygnFbjEdzPqGkjb-p7LBJNGZEqTJwkg7Aijp9xVg7ikg/viewform?usp=header';
  const ENTRY_ID = 'entry.947872582';

  const getJoinUrl = () => {
    return email.trim()
      ? `${FORM_URL}&${ENTRY_ID}=${encodeURIComponent(email)}`
      : FORM_URL;
  };

  return (
    <header className="hero">
      <div className="kicker">Answer what matters</div>
      <h1>AI receptionist that vets callers, blocks spam, and connects you only when it counts.</h1>
      <p className="sub">
        FrontDesk answers first, screens every caller, and connects real people or tasks (like "book my doctor")—so you reclaim your day.
      </p>

      <div className="hero-row">
        <div className="email-input" role="group" aria-label="Join waitlist by email">
          <label className="sr" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <a
            id="joinBottom"
            className="btn primary"
            href={getJoinUrl()}
            target="_blank"
            rel="noopener"
          >
            Join Waitlist
          </a>
        </div>
      </div>

      <div className="trust-row" aria-label="Trust indicators">
        <span className="mini-metric">–87% spam calls</span>
        <span className="mini-metric">+2 hrs/day back</span>
        <span className="dot" aria-hidden="true"></span>
        <span>Private by default</span>
        <span className="dot" aria-hidden="true"></span>
        <span>Cancel anytime</span>
      </div>
    </header>
  );
};

export default Hero;
