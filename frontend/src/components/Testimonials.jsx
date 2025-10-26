const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jordan P.',
      role: 'Freelance Contractor',
      quote: '"FrontDesk screens the junk and only lets real clients through. Miss fewer jobs; ignore the noise."',
      badges: ['–87% spam', '+2 hrs/day'],
      avatar: "data:image/svg+xml;utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='112' viewBox='0 0 112 112'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23a78bfa'/%3E%3Cstop offset='100%25' stop-color='%230ea5e9'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='112' height='112' rx='56' fill='url(%23g)'/%3E%3Ccircle cx='56' cy='54' r='22' fill='%23fde68a'/%3E%3Ccircle cx='48' cy='50' r='3' fill='%2322313f'/%3E%3Ccircle cx='64' cy='50' r='3' fill='%2322313f'/%3E%3Cpath d='M44 64 q12 10 24 0' stroke='%2322313f' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3Crect x='26' y='72' width='60' height='26' rx='13' fill='%23f1f5f9' stroke='%23e2e8f0'/%3E%3C/svg%3E"
    },
    {
      name: 'Alex M.',
      role: 'Small Business Owner',
      quote: '"It feels like a calm receptionist guards my phone. When it rings now, I know it matters."',
      badges: ['Trust', 'Focus'],
      avatar: "data:image/svg+xml;utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='112' viewBox='0 0 112 112'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23fda4af'/%3E%3Cstop offset='100%25' stop-color='%23f97316'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='112' height='112' rx='56' fill='url(%23g2)'/%3E%3Ccircle cx='56' cy='54' r='22' fill='%23fee2e2'/%3E%3Ccircle cx='48' cy='52' r='3' fill='%2322313f'/%3E%3Ccircle cx='64' cy='52' r='3' fill='%2322313f'/%3E%3Cpath d='M46 64 q10 8 20 0' stroke='%2322313f' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3Crect x='25' y='74' width='62' height='24' rx='12' fill='%23f8fafc' stroke='%23e2e8f0'/%3E%3C/svg%3E"
    },
    {
      name: 'Sam R.',
      role: 'Operations Lead',
      quote: '"We stopped sharing our cell numbers. FrontDesk answers first, vets callers, and connects only the good ones."',
      badges: ['Fewer Interruptions', 'Happier Team'],
      avatar: "data:image/svg+xml;utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='112' viewBox='0 0 112 112'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%2322c55e'/%3E%3Cstop offset='100%25' stop-color='%2306b6d4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='112' height='112' rx='56' fill='url(%23g3)'/%3E%3Ccircle cx='56' cy='54' r='22' fill='%23fde68a'/%3E%3Ccircle cx='48' cy='51' r='3' fill='%2322313f'/%3E%3Ccircle cx='64' cy='51' r='3' fill='%2322313f'/%3E%3Cpath d='M44 65 q12 -6 24 0' stroke='%2322313f' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3Crect x='24' y='76' width='64' height='22' rx='11' fill='%23ffffff' stroke='%23e2e8f0'/%3E%3C/svg%3E"
    }
  ];

  return (
    <section aria-labelledby="what-users-say">
      <h2 id="what-users-say" style={{ margin: '0 0 14px 0', fontSize: '28px' }}>
        What users say
      </h2>
      <div className="t-grid">
        {testimonials.map((testimonial, index) => (
          <article key={index} className="t-card" aria-label={`${testimonial.name} testimonial`}>
            <div className="t-head">
              <div className="avatar">
                <img
                  alt={`Headshot of ${testimonial.name.split(' ')[0]} (AI generated)`}
                  width="56"
                  height="56"
                  src={testimonial.avatar}
                />
              </div>
              <div className="who">
                <div className="name">{testimonial.name}</div>
                <div className="role">{testimonial.role}</div>
                <div className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="t-quote">{testimonial.quote}</p>
            <div className="badge-row">
              {testimonial.badges.map((badge, idx) => (
                <span key={idx} className="badge">
                  {badge}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
