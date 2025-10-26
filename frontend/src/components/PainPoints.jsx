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

          <div className="phone-wrapper">
            <div className="iphone-frame dark">
              <div className="iphone-notch"></div>
              <div className="iphone-screen">
                <div className="iphone-status-bar">
                  <span className="status-time">9:41</span>
                  <div className="status-icons">
                    <span className="status-icon">📶</span>
                    <span className="status-icon">📶</span>
                    <span className="status-icon">🔋</span>
                  </div>
                </div>

                <div className="ios-call-screen">
                  <div className="ios17-poster">
                    <div className="ios17-avatar">?</div>
                  </div>

                  <div className="ios17-caller-details">
                    <div className="ios17-name">Unknown</div>
                    <div className="ios17-number">(415) 555-0123</div>
                    <div className="ios17-label">mobile</div>
                  </div>

                  <div className="ios17-action-buttons">
                    <button className="ios17-action-btn">
                      <div className="ios17-action-icon">🔔</div>
                      <div className="ios17-action-text">Remind Me</div>
                    </button>
                    <button className="ios17-action-btn">
                      <div className="ios17-action-icon">💬</div>
                      <div className="ios17-action-text">Message</div>
                    </button>
                  </div>

                  <div className="ios17-slide-container">
                    <div className="ios17-slide-track">
                      <div className="ios17-slide-button">
                        <div className="ios17-slide-icon">📞</div>
                      </div>
                      <div className="ios17-slide-text">slide to answer</div>
                    </div>
                  </div>
                </div>

                <div className="iphone-home-indicator"></div>
              </div>
            </div>

            <div className="thought-bubble left">
              <div className="thought-text">Is this a client?</div>
            </div>
            <div className="thought-bubble right">
              <div className="thought-text">Spam call?</div>
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
            Watch your AI agent handle calls in real-time. See the conversation unfold, send instructions mid-call, or jump in anytime you want to take over.
          </p>

          <div className="phone-wrapper">
            <div className="iphone-frame dark">
              <div className="iphone-notch"></div>
              <div className="iphone-screen">
                <div className="iphone-status-bar">
                  <span className="status-time">9:41</span>
                  <div className="status-icons">
                    <span className="status-icon">📶</span>
                    <span className="status-icon">📶</span>
                    <span className="status-icon">🔋</span>
                  </div>
                </div>

                <div className="ios-call-screen chat-mode">
                  <div className="chat-header">
                    <div className="chat-caller-info">
                      <div className="chat-caller-name">Jessica Park</div>
                      <div className="chat-caller-number">(415) 555-0123</div>
                    </div>
                    <div className="chat-status">
                      <span className="status-dot active"></span>
                      AI Handling Call
                    </div>
                  </div>

                  <div className="jump-in-section">
                    <div className="ios17-slide-track">
                      <div className="ios17-slide-button">
                        <div className="ios17-slide-icon">📞</div>
                      </div>
                      <div className="ios17-slide-text">slide to take over</div>
                    </div>
                  </div>

                  <div className="chat-messages">
                    <div className="chat-message caller">
                      <div className="message-avatar">JP</div>
                      <div className="message-content">
                        <div className="message-text">Hi, I'm calling about the project proposal I sent yesterday. I have some questions about the timeline and budget.</div>
                      </div>
                    </div>

                    <div className="chat-message agent">
                      <div className="message-avatar ai">🤖</div>
                      <div className="message-content">
                        <div className="message-text">Thanks for calling! I'd be happy to help with your project questions. Could you tell me more about your timeline expectations?</div>
                        <div className="message-meta">Following your instructions</div>
                      </div>
                    </div>

                    <div className="chat-message caller">
                      <div className="message-avatar">JP</div>
                      <div className="message-content">
                        <div className="message-text">We're hoping to start in about 2-3 weeks.</div>
                      </div>
                    </div>
                  </div>

                  <div className="chat-input-area">
                    <div className="chat-input-wrapper">
                      <input type="text" className="chat-input" placeholder="Instruct your agent..." />
                      <button className="send-btn">→</button>
                    </div>
                  </div>
                </div>

                <div className="iphone-home-indicator"></div>
              </div>
            </div>
          </div>

          <div className="solution-stats">
            <div className="solution-stat">
              <div className="solution-stat-value">100%</div>
              <div className="solution-stat-label">visibility into every conversation in real-time</div>
            </div>
            <div className="solution-stat">
              <div className="solution-stat-value">&lt;1 sec</div>
              <div className="solution-stat-label">to jump in and take control of any call</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
