import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const handleJoinWaitlist = () => {
    console.log('Join the Waitlist clicked');
  };

  const handleGetStarted = () => {
    console.log('Get started clicked');
  };

  return (
    <div className="hero-wrapper">
      {/* Background gradient orbs */}
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>



      {/* Main Hero Content */}
      <div className="hero-container">
        {/* Case Study Button */}
        <div className="case-study-button-container">
          <button className="case-study-button">
            <span>Case Study by Ben Diagi</span>
          </button>
        </div>
        
        <div className="hero-content">
          {/* Main Headline */}
          <div className="hero-headline">
                    <h2 className="hero-subtitle cursor-hover-target">Bank Less. Live More.</h2>
        <h1 className="hero-main-title cursor-hover-target">MoonPay <span className="gradient-text">Everyday</span>.</h1>
          </div>

          {/* Subheadline */}
          <p className="hero-description">
            The everyday crypto account that replaces your bank — helping you save effortlessly, pay anywhere, and grow your balance without complexity.
          </p>
          
          {/* App Ratings */}
          <div className="app-ratings">
            <div className="rating-item">
              <span className="rating-text">4.4 rating&nbsp;</span>
              <span className="rating-text-light">on</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rating-icon">
                <path d="M17.0492 20.28C16.0692 21.23 14.9992 21.08 13.9692 20.63C12.8792 20.17 11.8792 20.15 10.7292 20.63C9.28919 21.25 8.52919 21.07 7.66919 20.28C2.78919 15.25 3.50919 7.59 9.04919 7.31C10.3992 7.38 11.3392 8.05 12.1292 8.11C13.3092 7.87 14.4392 7.18 15.6992 7.27C17.2092 7.39 18.3492 7.99 19.0992 9.07C15.9792 10.94 16.7192 15.05 19.5792 16.2C19.0092 17.7 18.2692 19.19 17.0392 20.29L17.0492 20.28ZM12.0292 7.25C11.8792 5.02 13.6892 3.18 15.7692 3C16.0592 5.58 13.4292 7.5 12.0292 7.25Z"></path>
              </svg>
              <span className="rating-text-light">App Store</span>
            </div>
            <div className="rating-divider"></div>
            <div className="rating-item">
              <span className="rating-text">4.5 rating&nbsp;</span>
              <span className="rating-text-light">on</span>
              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="rating-icon-google">
                <g filter="url(#filter0_ii_4448_6352)">
                  <path d="M1.24624 0.460176C1.00325 0.720661 0.859619 1.12492 0.859619 1.64843V20.3526C0.859619 20.8769 1.00325 21.2803 1.24624 21.5408L1.30804 21.6017L11.6534 11.124V11.0005V10.877L1.30804 0.398438L1.24624 0.460176Z" fill="url(#paint0_linear_4448_6352)"></path>
                  <path d="M15.1012 14.6173L11.6533 11.1236V11.0001V10.8767L15.102 7.38379L15.1797 7.42861L19.2655 9.77974C20.4321 10.4513 20.4321 11.5499 19.2655 12.2222L15.1797 14.5733L15.1012 14.6173Z" fill="url(#paint1_linear_4448_6352)"></path>
                  <g filter="url(#filter1_i_4448_6352)">
                    <path d="M15.1798 14.5724L11.6526 11L1.24634 21.5403C1.63046 21.953 2.26592 22.0038 2.98155 21.5928L15.1798 14.5724Z" fill="url(#paint2_linear_4448_6352)"></path>
                  </g>
                  <path d="M15.1798 7.42781L2.98155 0.408252C2.26592 -0.00361811 1.63046 0.0479716 1.24634 0.460688L11.6534 11.001L15.1798 7.42781Z" fill="url(#paint3_linear_4448_6352)"></path>
                </g>
                <defs>
                  <filter id="filter0_ii_4448_6352" x="0.859619" y="0.124023" width="19.2809" height="21.7529" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="-0.15"></feOffset>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="0.15"></feOffset>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"></feBlend>
                  </filter>
                  <filter id="filter1_i_4448_6352" x="1.24634" y="11" width="13.9335" height="10.877" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="-0.15"></feOffset>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
                  </filter>
                  <linearGradient id="paint0_linear_4448_6352" x1="10.7363" y1="1.45053" x2="-3.45557" y2="15.463" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00A0FF"></stop>
                    <stop offset="0.0066" stopColor="#00A1FF"></stop>
                    <stop offset="0.2601" stopColor="#00BEFF"></stop>
                    <stop offset="0.5122" stopColor="#00D2FF"></stop>
                    <stop offset="0.7604" stopColor="#00DFFF"></stop>
                    <stop offset="1" stopColor="#00E3FF"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_4448_6352" x1="20.7841" y1="11.0001" x2="0.579517" y2="11.0001" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFE000"></stop>
                    <stop offset="0.4087" stopColor="#FFBD00"></stop>
                    <stop offset="0.7754" stopColor="#FFA500"></stop>
                    <stop offset="1" stopColor="#FF9C00"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_4448_6352" x1="13.2643" y1="12.94" x2="-5.98165" y2="31.9427" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF3A44"></stop>
                    <stop offset="1" stopColor="#C31162"></stop>
                  </linearGradient>
                  <linearGradient id="paint3_linear_4448_6352" x1="-1.37452" y1="-5.76574" x2="7.21934" y2="2.7195" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#32A071"></stop>
                    <stop offset="0.0685" stopColor="#2DA771"></stop>
                    <stop offset="0.4762" stopColor="#15CF74"></stop>
                    <stop offset="0.8009" stopColor="#06E775"></stop>
                    <stop offset="1" stopColor="#00F076"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <span className="rating-text-light">Google Play</span>
            </div>
          </div>
          
          {/* CTA and Trust Score */}
          <div className="hero-actions">
            <div className="hero-actions-row">
              <div className="hero-cta">
                <button className="cta-button" onClick={handleJoinWaitlist}>
                  <span>Join the Waitlist →</span>
                </button>
              </div>
              <div className="trust-score">
                <a href="https://www.trustpilot.com/review/moonpay.com" rel="noopener noreferrer" target="_blank" className="trust-score-link">
                  <div className="trust-score-icon">
                    <span>⭐</span>
                  </div>
                  <div className="trust-score-content">
                    <p className="trust-score-title">TrustScore 4.2</p>
                    <p className="trust-score-reviews">93K+ Reviews</p>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

                      {/* Responsive DeFi App Image */}
          <div className="responsive-app-image">
            <img 
              src="/Desktop defi.png" 
              alt="DeFi App" 
              className="app-image"
            />
          </div>
          
          {/* Divider line under image */}
          <div className="image-divider"></div>

          {/* New Section: From Crypto to Everyday Money */}
          <div className="new-section">
            <div className="section-content">
              <div className="headline-section">
                <h2 className="section-headline cursor-hover-target">From Crypto to <span className="gradient-text">Everyday</span> Money.</h2>
              </div>
              <div className="subcopy-section">
                <p className="section-subcopy">
                  MoonPay Everyday turns MoonPay from the world's best on/off-ramp into the daily money layer for crypto—a simple, non-custodial, consumer product that lets people earn, hold, spend, save, and automate with crypto and fiat in one place.
                </p>
              </div>
            </div>
          </div>
          
          {/* Feature Grid Section */}
          <div className="feature-grid-section">
            <div className="grid grid-cols-2 w-full gap-4">
              <div className="feature-card">
                <div className="feature-image">
                  <img src="https://images.unsplash.com/photo-1475998893297-4da48a6e037d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Core bet" className="w-auto h-auto mx-auto max-w-full max-h-[332px]" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title cursor-hover-target">The core bet</h3>
                  <p className="feature-description">If we make living on crypto effortless, usage shifts from occasional speculation to frequent, long-term money habits.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-image">
                  <img src="https://images.unsplash.com/photo-1598944999410-e93772fc48a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXBhc3N8ZW58MHx8MHx8fDA%3D" alt="North Star EAA" className="w-auto h-auto mx-auto max-w-full max-h-[332px]" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title cursor-hover-target">North Star: Everyday Active Accounts (EAA)</h3>
                  <div className="feature-description">
                    <p>Users who maintain an active balance, run at least two automated money rules, and complete five or more monthly everyday transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Live on crypto text section */}
          <div className="live-on-crypto-section">
            <h2 className="live-on-crypto-title cursor-hover-target">
              <span>Live on crypto.<br /></span>
              <span>Effortlessly.<br /></span>
              <span>Every day.<br /></span>
              <span>Everywhere.<br /></span>
              <span className="gradient-text">With MoonPay Everyday.</span>
            </h2>
          </div>
          
          {/* Horizontal line below new section */}
          <div className="new-section-divider"></div>
    </div>
  );
};

export default HeroSection;
