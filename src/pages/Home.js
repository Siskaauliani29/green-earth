import React from 'react';
import { Link } from 'react-router-dom'; // Import Link untuk navigasi
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="home-hero animate-slide-fade">
        <h2>🌿 <span>Selamat Datang di Green Earth!</span></h2>
        <p>
          Kami berkomitmen menjaga lingkungan hijau melalui pertanian dan perkebunan berkelanjutan.<br />
          Mari bersama ciptakan bumi yang lebih sehat!
        </p>
        <Link to="/ide" className="cta-button">🌱 Beri Ide Hijau</Link>
        <blockquote className="quote">
          "Bumi bukan warisan dari nenek moyang kita, tapi pinjaman dari anak cucu kita."
        </blockquote>
      </div>
    </div>
  );
}

export default Home;
