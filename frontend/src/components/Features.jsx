const Features = () => {
  const features = [
    {
      title: '1) FrontDesk answers first',
      description: 'Every call hits FrontDesk before your phone. The agent greets, triages, and filters instantly.',
      items: ['Blocks known spam & spoofing', 'Understands intent in real time'],
      metric: { value: '0.3s', label: 'pickup' }
    },
    {
      title: '2) Only the good ones get through',
      description: 'Legit callers or important tasks connect to you (or your calendar) with context, not chaos.',
      items: ['Caller vetting & callback options', 'Calendar / SMS follow-ups'],
      metric: { value: '92%', label: 'fewer interruptions' }
    },
    {
      title: '3) Outbound that gets stuff done',
      description: '"Book my doctor," "Move my flight," "Get a quote." FrontDesk places calls and closes loops.',
      items: ['Skill-based dialing & forms', 'Human escalation built-in'],
      metric: { value: '48', label: 'mins saved/day' }
    }
  ];

  return (
    <section id="how">
      <div className="cards">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <ul className="list">
              {feature.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div style={{ marginTop: '12px' }} className="pill">
              <span className="num mono">{feature.metric.value}</span> {feature.metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
