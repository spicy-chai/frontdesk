const Features = () => {
  const features = [
    {
      number: '01',
      title: 'FrontDesk answers first',
      description: 'Every call hits FrontDesk before your phone. The agent greets, triages, and filters instantly.',
      items: ['Blocks known spam & spoofing', 'Understands intent in real time'],
      metric: { value: '0.3s', label: 'pickup' }
    },
    {
      number: '02',
      title: 'Only the good ones get through',
      description: 'Legit callers or important tasks connect to you (or your calendar) with context, not chaos.',
      items: ['Caller vetting & callback options', 'Calendar / SMS follow-ups'],
      metric: { value: '92%', label: 'fewer interruptions' }
    },
    {
      number: '03',
      title: 'Outbound that gets stuff done',
      description: '"Book my doctor," "Move my flight," "Get a quote." FrontDesk places calls and closes loops.',
      items: ['Skill-based dialing & forms', 'Human escalation built-in'],
      metric: { value: '48', label: 'mins saved/day' }
    }
  ];

  return (
    <section id="how">
      <h2 className="section-title">How it works</h2>
      <div className="cards">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <div className="card-number">{feature.number}</div>
            <h3 className="card-title">{feature.title}</h3>
            <p className="card-description">{feature.description}</p>
            <ul className="feature-list">
              {feature.items.map((item, idx) => (
                <li key={idx}>
                  <span className="checkmark">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="metric-badge">
              <span className="metric-value">{feature.metric.value}</span>
              <span className="metric-label">{feature.metric.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
