import React from 'react';
import '../index.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mi Sitio Web</p>
    </footer>
  );
}

export default Footer;