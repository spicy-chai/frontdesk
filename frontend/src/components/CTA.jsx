import { useState } from 'react';

const CTA = () => {
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
    <section>
      <div className="cta" aria-labelledby="cta">
        <h2 id="cta">Protect your time. Let FrontDesk answer first.</h2>
        <p className="sub" style={{ margin: 0, maxWidth: '720px' }}>
          Join the waitlist—no spam, no fluff. We'll only contact you with meaningful updates.
        </p>
        <div className="email-input-wrapper" style={{ maxWidth: '560px', width: '100%' }}>
          <form onSubmit={handleSubmit} className="email-input">
            <label className="sr" htmlFor="email2">
              Email
            </label>
            <input
              id="email2"
              type="email"
              placeholder="you@company.com"
              inputMode="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleBlur}
              className={error ? 'error' : ''}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'email2-error' : undefined}
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
            <div id="email2-error" className="error-message" role="alert">
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
    </section>
  );
};

export default CTA;
