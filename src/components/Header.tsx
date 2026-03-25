import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <a href="#" className="logo" style={{ textDecoration: 'none' }}>Dev-Folio.</a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
