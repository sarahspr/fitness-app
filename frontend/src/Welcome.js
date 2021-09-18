import React, { useState } from 'react';

function Welcome() {

  return(
    <div className="welcome-container d-flex flex-column align-center justify-center">
      <div className="welcome-text-container mb-4">
        <h1 className="welcome-screen-title text-center mb-1">Welcome!</h1>
        <h6 className="text-center">Choose a Calculator to Get Started</h6>
      </div>
      <div className="calculator-cards-container d-flex justify-between">
        <a className="calculator-card d-block" href="#">BMI Calculator</a>
        <a className="calculator-card d-block" href="#">BMR Calculator</a>
        <a className="calculator-card d-block" href="#">TDEE Calculator</a>
      </div>
    </div>
  );
}

export default Welcome;