import React from 'react';
import { Link } from 'react-router-dom';
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

      {/* Tambahan Section */}
      <div className="inspire-section">
        <h3>✨ Inspirasi Hijau</h3>
        <div className="card-container">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2909/2909767.png" alt="icon" />
            <h4>Urban Farming</h4>
            <p>Mari mulai kebun kecil di rumah untuk konsumsi sehat dan ramah lingkungan.</p>
          </div>
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" alt="icon" />
            <h4>Kompos Mandiri</h4>
            <p>Ubah sampah organik menjadi pupuk alami yang menyuburkan tanaman.</p>
          </div>
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/3163/3163130.png" alt="icon" />
            <h4>Kurangi Plastik</h4>
            <p>Gunakan barang ramah lingkungan untuk menjaga bumi lebih bersih.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
