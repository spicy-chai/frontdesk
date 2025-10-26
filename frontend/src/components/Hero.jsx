import { useState } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdsrOygnFbjEdzPqGkjb-p7LBJNGZEqTJwkg7Aijp9xVg7ikg/formResponse';
  const ENTRY_ID = 'entry.947872582';

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setSuccess(false);

    if (touched) {
      if (value.trim() === '') {
        setError('');
      } else if (!validateEmail(value)) {
        setError('Please enter a valid email address');
      } else {
        setError('');
      }
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (email.trim() !== '' && !validateEmail(email)) {
      setError('Please enter a valid email address');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setTouched(true);
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setTouched(true);
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append(ENTRY_ID, email);

      await fetch(FORM_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      setSuccess(true);
      setEmail('');
      setTouched(false);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="hero">
      <div className="hero-badge">Answer what matters</div>
      <h1 className="hero-title">
        Your AI receptionist that <span className="highlight">filters the noise</span> and connects what matters
      </h1>
      <p className="hero-subtitle">
        FrontDesk answers every call in 0.3 seconds, blocks spam instantly, and only connects real people or important tasks—so you can focus on what matters.
      </p>

      <div className="hero-row">
        <div className="email-input-wrapper">
          <form onSubmit={handleSubmit} className="email-input" role="group" aria-label="Join waitlist by email">
            <label className="sr" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              inputMode="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleBlur}
              className={error ? 'error' : ''}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'email-error' : undefined}
              disabled={loading || success}
            />
            <button
              type="submit"
              className="btn primary"
              disabled={loading || success}
            >
              {loading ? 'Joining...' : success ? 'Joined!' : 'Join Waitlist'}
            </button>
          </form>
          {error && (
            <div id="email-error" className="error-message" role="alert">
              {error}
            </div>
          )}
          {success && (
            <div className="success-message" role="status">
              Thanks! You're on the waitlist.
            </div>
          )}
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
