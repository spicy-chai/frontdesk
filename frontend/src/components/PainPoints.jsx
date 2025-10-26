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
            You glance at your phone. Unknown number. Your heart rate ticks up. Is it a client? A spam call? An important update?
            That split-second decision—answer or ignore—happens dozens of times a day.
          </p>

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
          <div className="solution-label">The Solution</div>
          <h3 className="solution-title">
            Answer every call with <span className="solution-highlight">confidence</span>
          </h3>
          <p className="solution-description">
            FrontDesk picks up instantly, screens the caller, and only connects genuine conversations.
            No more anxiety. No more guessing. Just the calls that actually matter.
          </p>

          <div className="solution-points">
            <div className="solution-point">
              <div className="solution-icon">🛡️</div>
              <div className="solution-point-content">
                <div className="solution-point-title">Instant Protection</div>
                <div className="solution-point-text">Spam and robocalls blocked in 0.3 seconds</div>
              </div>
            </div>
            <div className="solution-point">
              <div className="solution-icon">🎯</div>
              <div className="solution-point-content">
                <div className="solution-point-title">Smart Filtering</div>
                <div className="solution-point-text">AI understands intent and context in real-time</div>
              </div>
            </div>
            <div className="solution-point">
              <div className="solution-icon">✨</div>
              <div className="solution-point-content">
                <div className="solution-point-title">Peace of Mind</div>
                <div className="solution-point-text">Never miss important calls, never waste time on spam</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
