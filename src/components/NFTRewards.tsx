import React from 'react';
import './NFTRewards.css';

const NFTRewards: React.FC = () => {
  return (
    <div className="features-section">
      <div className="section-divider"></div>
      <div className="section-header">
        <h2 className="section-title cursor-hover-target">Discover & Perks</h2>
        <p className="section-subtitle">By tying perks to symbolic NFTs, users gain both a sense of ownership and everyday benefits they can actually use.</p>
      </div>
      
      <div className="feature-item">
        <div className="feature-content">
          <h3 className="feature-title cursor-hover-target">NFT Rewards That Unlock Everyday Perks</h3>
          <p className="nft-copy">NFTs act as both a symbol of participation and a gateway to perks, turning everyday crypto actions into tangible rewards.</p>
          <ul className="feature-list">
            <li>Curated actions: Core crypto tasks—staking, bridging, minting, subscribing—are simplified through trusted partners, making participation safe and rewarding.</li>
            <li>NFT tiers: Higher-tier NFTs unlock real benefits like boosted cashback, fee reductions, and early access to exclusive features.</li>
            <li>Everyday utility: More than digital art, NFTs double as loyalty passes, turning engagement into ongoing recognition and value.</li>
          </ul>
          <div className="feature-why">
            <strong>Why it wins:</strong> It blends culture and utility—making rewards feel aspirational, not transactional.
          </div>
        </div>
        
        <div className="feature-image">
          <video 
            className="nft-video" 
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://res.cloudinary.com/djnkxndun/video/upload/v1756261245/MoonPay_Everyday_NFT_hyrguj.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default NFTRewards;
