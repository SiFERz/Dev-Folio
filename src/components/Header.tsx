import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo" style={{ textDecoration: 'none' }}>Dev-Folio.</Link>
        <nav className="nav-links">
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
