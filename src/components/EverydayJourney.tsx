import React from 'react';
import './EverydayJourney.css';

const EverydayJourney: React.FC = () => {
  return (
    <div className="everyday-journey-section">
      <div className="journey-content">
        <div className="journey-headline">
          <h2 className="journey-title cursor-hover-target">The Everyday Journey</h2>
          <p className="journey-subtitle">
            A step-by-step look at how users move from first sign-up to making MoonPay part of their everyday life.
          </p>
        </div>
        <div className="journey-iframe-container">
          <iframe 
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
            width="800" 
            height="900" 
            src="https://embed.figma.com/board/AkPYxolfErNOMQGUXlBiFS/MoonPay-Everyday?node-id=0-1&embed-host=share" 
            allowFullScreen
            title="MoonPay Everyday Journey"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EverydayJourney;
