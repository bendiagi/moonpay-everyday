import React from 'react';
import './UserPersona.css';
import David from '../../personas/David.svg';
import Aisha from '../../personas/Aisha.svg';
import Lucas from '../../personas/Lucas.svg';

const UserPersona: React.FC = () => {
  const personas = [
    { src: David, alt: "David Persona" },
    { src: Aisha, alt: "Aisha Persona" },
    { src: Lucas, alt: "Lucas Persona" }
  ];

  const looped = [...personas, ...personas];

  return (
    <div className="user-persona-section">
      <div className="section-header">
        <h2 className="section-title cursor-hover-target">User Personas</h2>
        <p className="section-subtitle">
          Who our everyday users really are.
        </p>
      </div>
      <div className="personas-container">
        <div className="personas-viewport">
          <div className="personas-carousel">
            {looped.map((persona, index) => (
              <div key={index} className="persona-card">
                <img src={persona.src} alt={persona.alt} className="persona-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="figma-link-container">
        <a 
          href="https://www.figma.com/community/file/1214669066039788206/user-personas-5-free-templates" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="figma-link"
        >
          Check out my User Persona templates on Figma Community. ↗
        </a>
      </div>
    </div>
  );
};

export default UserPersona;
