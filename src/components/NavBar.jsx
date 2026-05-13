import React from 'react';

const NavBar = () => {
  return (
    <nav className="top-nav">
      <a href="#hero" className="logo" style={{ cursor: 'pointer' }}>ar.</a>
      <ul className="nav-links">
        <li><a href="#projects">WORK</a></li>
        <li><a href="#skills">SERVICES</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">LAB</a></li>
        <li><a href="#contact">LET'S TALK</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
