import React from 'react';
import '../index.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Contactos</a></li>
        <li><a href="/">Info</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
