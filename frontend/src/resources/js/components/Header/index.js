import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header d-flex justify-center mx-auto">
      <nav className="main-nav d-flex justify-center">
        <ul className="nav-links d-flex justify-between">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/bmi-calculator">BMI Calculator</NavLink></li>
          <li><NavLink to="/bmr-calculator">BMR Calculator</NavLink></li>
          <li><NavLink to="/tdee-calculator">TDEE Calculator</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;