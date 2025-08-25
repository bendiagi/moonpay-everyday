import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  return (
    <div className="features-section">
      <div className="section-divider"></div>
      <div className="section-header">
        <h2 className="section-title cursor-hover-target">Features</h2>
        <p className="section-subtitle">The core building blocks that define how MoonPay Everyday delivers value — broken down into detailed, user-driven specifications.</p>
      </div>
      
      <div className="feature-item">
        <div className="feature-content">
          <h3 className="feature-title cursor-hover-target">Money Hub — <span className="gradient-text">Everyday</span> Account (EA)</h3>
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
      
      <div className="feature-item">
        <div className="feature-content">
          <h3 className="feature-title cursor-hover-target">Spend Everywhere — <span className="gradient-text">Everyday</span> Card</h3>
          <ul className="feature-list">
            <li>The Smart Spend Engine optimizes checkout by using fiat first, then stablecoins, or auto-converting from selected crypto to minimize fees and slippage.</li>
            <li>Cashback in crypto offers dynamic rewards such as 1% in BTC or boosted rates on specific categories and partners.</li>
            <li>Round-ups automatically invest spare change, like turning a $4.60 coffee into $0.40 of ETH or USDC based on user rules.</li>
            <li>Controls let users set spend limits, freeze cards, manage merchants or categories, and enable travel mode for flexibility.</li>
          </ul>
          <div className="feature-why">
            <strong>Why it wins:</strong> makes crypto useful in the real world—daily frequency, not monthly.
          </div>
        </div>
        
        <div className="feature-image">
          <img src="/Spend Everywhere.png" alt="Spend Everywhere preview" className="feature-img" />
        </div>
      </div>
      
      <div className="feature-item">
        <div className="feature-content">
          <h3 className="feature-title cursor-hover-target"><span className="gradient-text">Everyday</span> Automation — Money Rules</h3>
          <ul className="feature-list">
            <li>DCA enables recurring buys by time or price, such as "buy $50 BTC weekly" or "buy 0.01 ETH if it dips 5% in a day."</li>
            <li>Save-on-income automatically allocates a percentage of paychecks into assets like USDC or staked SOL.</li>
            <li>Auto-rebalance restores portfolios back to target allocation on a set schedule with guardrails in place.</li>
            <li>Bill-sync lets users autopay subscriptions or utilities while converting funds seamlessly at checkout.</li>
          </ul>
          <div className="feature-why">
            <strong>Why it wins:</strong> set-and-forget → durable retention, lower churn during bear markets.
          </div>
        </div>
        
        <div className="feature-image">
          <img src="/automate.png" alt="Everyday Automation preview" className="feature-img" />
        </div>
      </div>
      
      <div className="feature-item">
        <div className="feature-content">
          <h3 className="feature-title cursor-hover-target"><span className="gradient-text">Everyday</span> Yield — Earn on Idle</h3>
          <ul className="feature-list">
            <li>Stablecoin yield offers clear tiers, from conservative USDC options to advanced opt-in strategies.</li>
            <li>Native staking supports assets like ETH and SOL with simple one-tap restake or unstake actions.</li>
            <li>Users can choose yield destinations, either paid in kind or auto-routed toward savings goals like a cashback vault.</li>
            <li>Disclosures present risk levels, yield sources, and variability in plain, transparent language.</li>
          </ul>
          <div className="feature-why">
            <strong>Why it wins:</strong> aligns user value with time held; increases balances and LTV.
          </div>
        </div>
        
        <div className="feature-image">
          <img src="/Yield.png" alt="Everyday Yield preview" className="feature-img" />
        </div>
      </div>
      
      <div className="feature-item">
        <div className="feature-content">
          <h3 className="feature-title cursor-hover-target"><span className="gradient-text">Everyday</span> Pay — P2P, Gifts, Bill Pay</h3>
          <ul className="feature-list">
            <li>P2P transfers are global and instant, using @MoonID, email, or phone, with support for memos, emojis, and payment requests.</li>
            <li>Gifting includes beautiful digital wraps and timed unlocks for special occasions like birthdays.</li>
            <li>Bill Pay lets users connect providers while choosing whether to fund payments from crypto or fiat sources.</li>
            <li>Cross-border payments provide full transparency on FX and fees, sending as USDC with local off-ramps for recipients.</li>
          </ul>
          <div className="feature-why">
            <strong>Why it wins:</strong> replaces 3–4 apps with one.
          </div>
        </div>
        
        <div className="feature-image">
          <img src="/Everyday Pay.png" alt="Everyday Pay preview" className="feature-img" />
        </div>
      </div>
    </div>
  );
};

export default Features;
