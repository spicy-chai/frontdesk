import { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav" aria-label="Top">
      <div className="logo">
        <div className="logo-badge" aria-hidden="true">
          <span>FD</span>
        </div>
        FrontDesk
      </div>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      <div className={`nav-ctas ${isMenuOpen ? 'mobile-open' : ''}`}>
        <a className="btn ghost" href="#how" onClick={closeMenu}>
          See how it works
        </a>
        <a
          className="btn primary"
          id="joinTop"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdsrOygnFbjEdzPqGkjb-p7LBJNGZEqTJwkg7Aijp9xVg7ikg/viewform?usp=header"
          target="_blank"
          rel="noopener"
          onClick={closeMenu}
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
};

export default Nav;
