import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🌿 Hijaukan Bumi</h1>
      <ul>
        <li><Link to="/">Beranda</Link></li>
        <li><Link to="/tentang">Tentang Kami</Link></li>
        <li><Link to="/galeri">Galeri</Link></li>
        <li><Link to="/form">Ide Hijau</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
