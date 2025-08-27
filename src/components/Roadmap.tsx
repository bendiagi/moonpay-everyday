import React from 'react';
import './Roadmap.css';

const Roadmap: React.FC = () => {
  return (
    <div className="roadmap-section">
      <div className="roadmap-content">
        <div className="roadmap-headline">
          <h2 className="roadmap-title cursor-hover-target">Roadmap</h2>
          <p className="roadmap-subtitle">
            A structured roadmap that outlines how the product will evolve and how each phase builds on the last to create a complete experience.
          </p>
        </div>
        <div className="roadmap-iframe-container">
          <iframe 
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
            width="800" 
            height="450" 
            src="https://embed.figma.com/board/Fglv31cnrJV7XmJJGdKu2i/MoonPay-Everyday-Roadmap?node-id=0-1&embed-host=share" 
            allowFullScreen
            title="MoonPay Everyday Roadmap"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
