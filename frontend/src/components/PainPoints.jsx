const PainPoints = () => {
  return (
    <section className="pain-section">
      <div className="pain-container">
        <div className="pain-content">
          <div className="pain-label">The Problem</div>
          <h2 className="pain-title">
            Every ring creates <span className="pain-highlight">anxiety</span>
          </h2>
          <p className="pain-description">
            Unknown caller. Your heart rate ticks up. Is it a client? Spam? An important update?
            That split-second decision—answer or ignore—happens dozens of times a day.
          </p>

          <div className="phone-mockup-dark">
            <div className="phone-header-dark">
              <div className="phone-status-dark">Incoming Call</div>
            </div>

            <div className="unknown-caller">
              <div className="unknown-icon">?</div>
              <div className="unknown-number">(555) 123-4567</div>
              <div className="unknown-label">Unknown Caller</div>
              <div className="unknown-subtitle">No caller information available</div>
            </div>

            <div className="phone-actions-dark">
              <button className="phone-btn decline-dark">Decline</button>
              <button className="phone-btn answer-dark">Answer</button>
            </div>

            <div className="anxiety-indicator">
              <div className="anxiety-text">❓ Client? Spam? Emergency?</div>
            </div>
          </div>

          <div className="pain-stats">
            <div className="pain-stat">
              <div className="pain-stat-value">87%</div>
              <div className="pain-stat-label">of calls are interruptions you don't need</div>
            </div>
            <div className="pain-stat">
              <div className="pain-stat-value">23 mins</div>
              <div className="pain-stat-label">wasted daily on spam & unimportant calls</div>
            </div>
          </div>
        </div>

        <div className="solution-content">
          <div className="solution-label">Your AI Receptionist</div>
          <h3 className="solution-title">
            See exactly <span className="solution-highlight">who's calling and why</span>
          </h3>
          <p className="solution-description">
            Our AI agent answers in 0.3 seconds, has a natural conversation to understand intent, and sends you a real-time summary before you pick up.
          </p>

          <div className="interface-preview">
            <div className="interface-header">
              <div className="interface-time">Incoming Call</div>
              <div className="interface-status">
                <span className="status-dot"></span>
                AI Vetting...
              </div>
            </div>

            <div className="caller-info">
              <div className="caller-avatar">JP</div>
              <div className="caller-details">
                <div className="caller-name">Jessica Park</div>
                <div className="caller-number">(415) 555-0123</div>
              </div>
            </div>

            <div className="ai-summary">
              <div className="summary-badge">
                <span className="summary-icon">🤖</span>
                AI Summary
              </div>
              <div className="summary-text">
                "I'm calling about the project proposal I sent yesterday. I have some questions about the timeline and budget."
              </div>
              <div className="intent-tags">
                <span className="intent-tag verified">✓ Verified Intent</span>
                <span className="intent-tag priority">High Priority</span>
              </div>
            </div>

            <div className="interface-actions">
              <button className="action-btn accept">Accept Call</button>
              <button className="action-btn decline">Send to Voicemail</button>
            </div>
          </div>

          <div className="ai-features">
            <div className="ai-feature">
              <div className="ai-feature-icon">💬</div>
              <div className="ai-feature-text">Conversational intelligence understands context and intent</div>
            </div>
            <div className="ai-feature">
              <div className="ai-feature-icon">⚡</div>
              <div className="ai-feature-text">Real-time vetting before the call reaches you</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
