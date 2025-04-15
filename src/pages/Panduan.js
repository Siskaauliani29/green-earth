import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ← Tambahkan ini
import './Panduan.css';

const slides = [
  {
    title: "Kurangi Sampah Plastik",
    desc: "Gunakan tas kain, botol minum, dan wadah makanan reusable untuk bantu kurangi sampah plastik.",
    image: "/plastik.jpg",
  },
  {
    title: "Tanam Pohon",
    desc: "Menanam pohon bantu menjaga kualitas udara, menyerap karbon, dan mengurangi pemanasan global.",
    image: "/tanampohon.png",
  },
  {
    title: "Hemat Energi",
    desc: "Matikan lampu, cabut charger, dan gunakan peralatan hemat energi untuk selamatkan bumi.",
    image: "/hematenergi.jpg",
  },
  {
    title: "Gunakan Transportasi Ramah Lingkungan",
    desc: "Berjalan kaki, naik sepeda, atau transportasi umum bantu kurangi polusi dan emisi karbon.",
    image: "/transportasi.png",
  },
  {
    title: "Daur Ulang Sampah",
    desc: "Pisahkan sampah organik, plastik, dan kertas. Daur ulang kurangi limbah ke TPA.",
    image: "/daurulang.jpg",
  },
  {
    title: "Kurangi Penggunaan Kertas",
    desc: "Gunakan dokumen digital & catatan elektronik untuk menyelamatkan pohon dari penebangan.",
    image: "/kertas.jpg",
  },
  {
    title: "Lestarikan Air",
    desc: "Tutup kran saat tidak digunakan, perbaiki kebocoran, dan hemat air untuk masa depan kita.",
    image: "/hematair.jpg",
  },
];

function PanduanSplash() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate(); // ← Untuk redirect

  const nextSlide = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const skip = () => setCurrent(slides.length - 1);

  const handleStart = () => {
    navigate('/home'); // ← Ganti dengan rute sesuai kebutuhan kamu
  };

  return (
    <div className="splash-container">
      <h1 className="main-title">Panduan Menjaga Lingkungan Hijau</h1>

      <div className="splash-card">
        <img src={slides[current].image} alt="slide" className="splash-img" />
        <h2 className="splash-title">{slides[current].title}</h2>
        <p className="splash-desc">{slides[current].desc}</p>

        <div className="splash-controls">
  <button
    className="back-btn"
    onClick={prevSlide}
    disabled={current === 0}
  >
    ← Back
  </button>

  <button className="skip-btn" onClick={skip}>Skip</button>

  {current === slides.length - 1 ? (
    <button className="start-btn" onClick={handleStart}>Yuk Mulai!</button>
  ) : (
    <button className="next-btn" onClick={nextSlide}>Next →</button>
  )}
</div>

        <div className="indicator">
          {slides.map((_, i) => (
            <span key={i} className={i === current ? "dot active" : "dot"}></span>
          ))}
        </div>
      </div>

      <div className="video-section">
        <h2 className="video-title">Video Edukasi: Menjaga Lingkungan</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/xxAypUu7QBA"
            title="Panduan Menjaga Lingkungan"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default PanduanSplash;