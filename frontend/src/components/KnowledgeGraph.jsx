import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const KnowledgeGraph = () => {
  const mermaidRef = useRef(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        primaryColor: '#6366f1',
        primaryTextColor: '#1e293b',
        primaryBorderColor: '#6366f1',
        lineColor: '#cbd5e1',
        secondaryColor: '#34d399',
        tertiaryColor: '#f59e0b',
        background: '#f8fafc',
        mainBkg: '#ffffff',
        secondBkg: '#f1f5f9',
        textColor: '#1e293b',
        fontSize: '18px',
        nodeBorder: '#cbd5e1',
        clusterBkg: '#f8fafc',
        clusterBorder: '#e2e8f0',
      },
      flowchart: {
        curve: 'basis',
        padding: 30,
        nodeSpacing: 120,
        rankSpacing: 140,
      },
    });

    if (mermaidRef.current) {
      mermaid.run({
        nodes: [mermaidRef.current],
      });
    }
  }, []);

  return (
    <section className="knowledge-section">
      <h2 className="section-title">Remembers every conversation, builds context over time</h2>
      <p className="knowledge-subtitle">
        FrontDesk builds a knowledge graph of every caller, conversation, and context—so your AI gets smarter with every interaction.
      </p>

      <div className="knowledge-container">
        <div className="knowledge-visual">
          <div className="graph-canvas">
            <div className="mermaid" ref={mermaidRef}>
              {`graph TD
                You["👤<br/>You"]
                JP["📞<br/>Jessica Park<br/><small>Client • 12 calls</small>"]
                DS["📞<br/>Dr. Stevens<br/><small>Healthcare • 3 calls</small>"]
                MC["📞<br/>Mike Chen<br/><small>Vendor • 8 calls</small>"]
                PA["💼<br/>Project Alpha"]
                US["📅<br/>Upcoming Surgery"]
                EO["🔧<br/>Equipment Order"]

                You ---|Active| JP
                You --- DS
                You --- MC
                JP ---|Active| PA
                DS --- US
                MC --- EO

                classDef central fill:#6366f1,stroke:#4f46e5,stroke-width:3px,color:#fff
                classDef caller fill:#34d399,stroke:#10b981,stroke-width:2px,color:#064e3b
                classDef context fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#78350f
                classDef active stroke:#6366f1,stroke-width:3px

                class You central
                class JP,DS,MC caller
                class PA,US,EO context`}
            </div>
          </div>

          <div className="graph-insights">
            <div className="insight-badge">🧠 AI Insight</div>
            <p className="insight-text">
              Jessica calls about Project Alpha frequently. Last update: timeline moved to March. Budget discussions pending.
            </p>
          </div>
        </div>

        <div className="knowledge-controls">
          <div className="control-header">
            <h3 className="control-title">Add context your AI should know</h3>
            <p className="control-description">
              Feed your AI with the context it needs to handle calls intelligently
            </p>
          </div>

          <div className="context-examples">
            <div className="context-card">
              <div className="context-card-header">
                <span className="context-icon">📋</span>
                <span className="context-type">Instruction</span>
              </div>
              <div className="context-card-body">
                "When Jessica Park calls, check if it's about Project Alpha and transfer to me immediately"
              </div>
            </div>

            <div className="context-card">
              <div className="context-card-header">
                <span className="context-icon">👥</span>
                <span className="context-type">Relationship</span>
              </div>
              <div className="context-card-body">
                "Mike Chen is our equipment vendor. Always ask for quotes in writing via email"
              </div>
            </div>

            <div className="context-card">
              <div className="context-card-header">
                <span className="context-icon">⏰</span>
                <span className="context-type">Temporal</span>
              </div>
              <div className="context-card-body">
                "My surgery is scheduled for March 15th. Any healthcare-related calls are high priority"
              </div>
            </div>
          </div>

          <button className="add-context-btn">
            <span className="btn-icon">+</span>
            Add New Context
          </button>
        </div>
      </div>

      <div className="knowledge-stats">
        <div className="knowledge-stat">
          <div className="knowledge-stat-value">100%</div>
          <div className="knowledge-stat-label">context retained across all conversations</div>
        </div>
        <div className="knowledge-stat">
          <div className="knowledge-stat-value">0 sec</div>
          <div className="knowledge-stat-label">time to recall any past interaction</div>
        </div>
        <div className="knowledge-stat">
          <div className="knowledge-stat-value">∞</div>
          <div className="knowledge-stat-label">connections between callers, topics, and history</div>
        </div>
      </div>

      <div className="warm-transfer-section">
        <h3 className="warm-transfer-title">Seamless warm transfers when you take over</h3>
        <p className="warm-transfer-subtitle">
          Your AI doesn't just hand off the call—it briefs you instantly so you're never caught off guard.
        </p>

        <div className="transfer-flow">
          <div className="transfer-step">
            <div className="transfer-step-number">1</div>
            <div className="transfer-step-content">
              <div className="transfer-step-title">AI Detects You're Taking Over</div>
              <div className="transfer-step-description">You slide to take control mid-conversation</div>
            </div>
          </div>

          <div className="transfer-arrow">→</div>

          <div className="transfer-step">
            <div className="transfer-step-number">2</div>
            <div className="transfer-step-content">
              <div className="transfer-step-title">Instant Context Brief</div>
              <div className="transfer-step-description">See who's calling, what they need, and conversation history</div>
            </div>
          </div>

          <div className="transfer-arrow">→</div>

          <div className="transfer-step">
            <div className="transfer-step-number">3</div>
            <div className="transfer-step-content">
              <div className="transfer-step-title">You Join Seamlessly</div>
              <div className="transfer-step-description">Caller hears: "Let me connect you with [Your Name]"</div>
            </div>
          </div>
        </div>

        <div className="transfer-example">
          <div className="transfer-example-badge">Example Handoff</div>
          <div className="transfer-example-content">
            <div className="transfer-example-ai">
              <span className="transfer-speaker">AI:</span>
              "I understand you need to discuss the Q2 timeline. Let me connect you with Sarah, who's been following your project closely."
            </div>
            <div className="transfer-example-pause">
              <span className="transfer-pause-icon">⏱️</span>
              2 second transition
            </div>
            <div className="transfer-example-you">
              <span className="transfer-speaker">You:</span>
              "Hi Jessica! I saw you have questions about the Q2 timeline—let's go through that together."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeGraph;
