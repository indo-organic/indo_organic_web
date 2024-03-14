import React, { useState } from 'react';
import '../styles/Accordion.scss'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`accordion ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
      <div className="accordion-header">
        <h2>{title}</h2>
        <div className={`arrow ${isActive ? 'active' : ''}`}>&#9662;</div>
      </div>
      <div className="accordion-content">{isActive && content}</div>
    </div>
  );
};

export default Accordion;
