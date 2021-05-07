import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Välkomen till FKD Service</h1>
      <p>Olika förutsättningar kräver olika lösningar</p>
      <a href="tel:+46767912500" className="phone-number"> <h1>0767912500</h1></a>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Våra produkter
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
