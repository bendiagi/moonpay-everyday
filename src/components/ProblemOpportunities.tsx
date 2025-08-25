import React from 'react';
import './ProblemOpportunities.css';

const ProblemOpportunities: React.FC = () => {
  return (
    <div className="problem-opportunities-section">
      <div className="section-header">
        <h2 className="section-title cursor-hover-target">Problem and Opportunities</h2>
      </div>
      
      <div className="cards-container">
        <div className="problem-card">
          <div className="card-icon">
            <span className="icon-emoji">🚧</span>
          </div>
          <div className="card-content">
            <h3 className="card-title">Adoption Gap</h3>
            <p className="card-description">
              Most people buy crypto but rarely use it beyond speculation. Activity spikes during market hype, but everyday retention and real-world utility remain low.
            </p>
          </div>
        </div>

        <div className="problem-card">
          <div className="card-icon">
            <span className="icon-emoji">🛒</span>
          </div>
          <div className="card-content">
            <h3 className="card-title">Everyday Needs</h3>
            <p className="card-description">
              People want one simple app to manage money: pay bills, automate savings, send to friends, spend on the go, and grow balances effortlessly.
            </p>
          </div>
        </div>

        <div className="problem-card">
          <div className="card-icon">
            <span className="icon-emoji">🚀</span>
          </div>
          <div className="card-content">
            <h3 className="card-title">MoonPay Edge</h3>
            <p className="card-description">
              MoonPay already leads in trust, payments, and distribution. Expanding into "everyday money" multiplies the core business and can increase lifetime value 3–5×.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemOpportunities;
