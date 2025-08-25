import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  return (
    <div className="features-section">
      <div className="section-divider"></div>
      <div className="section-header">
        <h2 className="section-title">Features</h2>
        <p className="section-subtitle">The core building blocks that define how MoonPay Everyday delivers value — broken down into detailed, user-driven specifications.</p>
      </div>
      
      <div className="feature-item">
        <div className="feature-content">
          <h3 className="feature-title">Money Hub — Everyday Account (EA)</h3>
          <ul className="feature-list">
            <li>Virtual accounts provide users with local bank details in each region, supporting rails like ACH, SEPA, FPS, and PIX where available.</li>
            <li>Balances let users hold both fiat sub-accounts (USD, EUR, GBP) and crypto assets (BTC, ETH, USDC, and more).</li>
            <li>Direct deposit and salary split allow users to automatically allocate a percentage into crypto, fiat, or bill payments.</li>
            <li>Top-up and withdrawal options include cards, Apple/Google Pay, bank transfers, MoonPay Balance, and deposits from external wallets.</li>
          </ul>
          <div className="feature-why">
            <strong>Why it wins:</strong> anchors high-frequency behaviors (paycheck, bills, saves) and lifts overall retention.
          </div>
        </div>
        
        <div className="feature-image">
          <img src="/Money_Hub.png" alt="Money Hub preview" className="feature-img" />
        </div>
      </div>
    </div>
  );
};

export default Features;
