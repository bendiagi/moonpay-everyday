import React from 'react';
import './Monetization.css';

const Monetization: React.FC = () => {
  const revenueStreams = [
    {
      id: 1,
      title: "Processing fees",
      description: "Earned on transactions across the platform.",
      icon: "card"
    },
    {
      id: 2,
      title: "Crypto-fiat spread",
      description: "Margin from buy/sell conversions.",
      icon: "discount"
    },
    {
      id: 3,
      title: "Interchange share (card)",
      description: "Revenue from card transaction fees.",
      icon: "card"
    },
    {
      id: 4,
      title: "Yield share",
      description: "Portion of net yield after costs.",
      icon: "discount"
    },
    {
      id: 5,
      title: "FX spread",
      description: "Gains from currency conversion rates.",
      icon: "send"
    },
    {
      id: 6,
      title: "Partner bounties (Discover)",
      description: "Referral fees from curated partner actions.",
      icon: "plug"
    }
  ];

  return (
    <div className="jobs-section">
      <div className="section-divider"></div>
      <div className="section-header">
        <h2 className="section-title cursor-hover-target">Monetization Strategy</h2>
        <p className="section-subtitle">
          A diversified mix of transaction fees, spreads, interchange, and partner incentives creates resilient unit economics and sustainable profitability.
        </p>
      </div>
      
      <div className="jobs-list">
        {revenueStreams.map((stream) => (
          <div key={stream.id} className="job-item">
            <div className="job-icon">
              <svg className="icon-svg" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m.75 16v.79a.75.75 0 0 1-1.5 0v-.79a3.47 3.47 0 0 1-1.76-.81a3.5 3.5 0 0 1-1.24-2.4a.75.75 0 0 1 1.23-.638a.76.76 0 0 1 .27.508a2 2 0 0 0 .71 1.39a2.1 2.1 0 0 0 1.49.5c1.56 0 2.3-.6 2.3-1.82c0-.81-.71-1.68-2.25-1.68c-3.26 0-3.75-2-3.75-3.15a3.5 3.5 0 0 1 2.42-3.2q.285-.088.58-.13v-.78a.75.75 0 0 1 1.5 0v.81a3.61 3.61 0 0 1 3 3.22a.75.75 0 0 1-1.49.15a2.14 2.14 0 0 0-2.22-1.92h-.18a2.5 2.5 0 0 0-.72.1a2 2 0 0 0-1.18 1.03a1.9 1.9 0 0 0-.2.77c0 .82.27 1.62 2.25 1.62c2.46 0 3.75 1.6 3.75 3.18a3.11 3.11 0 0 1-3.05 3.21z"/>
              </svg>
            </div>
            <div className="job-content">
              <span className="job-title">{stream.title}</span>
              <p className="job-description">{stream.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Monetization;
