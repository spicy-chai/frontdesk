const Nav = () => {
  return (
    <nav className="nav" aria-label="Top">
      <div className="logo">
        <div className="logo-badge" aria-hidden="true">
          <span>FD</span>
        </div>
        FrontDesk
      </div>
      <div className="nav-ctas">
        <a className="btn ghost" href="#how">
          See how it works
        </a>
        <a
          className="btn primary"
          id="joinTop"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdsrOygnFbjEdzPqGkjb-p7LBJNGZEqTJwkg7Aijp9xVg7ikg/viewform?usp=header"
          target="_blank"
          rel="noopener"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
};

export default Nav;
