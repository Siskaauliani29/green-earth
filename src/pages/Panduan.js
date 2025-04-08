import React, { useState } from 'react';
import './Panduan.css';
import { FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const tips = [
  {
    title: "Kurangi Sampah Plastik",
    desc: "Gunakan tas belanja kain dan botol minum yang bisa digunakan berulang kali untuk mengurangi penggunaan plastik.",
  },
  {
    title: "Tanam Pohon",
    desc: "Ikut serta dalam kegiatan menanam pohon di sekitar lingkungan rumah untuk meningkatkan kualitas udara dan mencegah erosi.",
  },
  {
    title: "Daur Ulang",
    desc: "Pisahkan sampah organik dan anorganik, daur ulang bahan-bahan yang bisa digunakan kembali, seperti plastik, kertas, dan kaca.",
  },
  {
    title: "Hemat Energi",
    desc: "Matikan lampu dan perangkat elektronik saat tidak digunakan. Gunakan peralatan listrik yang efisien energi untuk mengurangi konsumsi energi.",
  },
  {
    title: "Hemat Air",
    desc: "Gunakan air seperlunya saat mandi, mencuci, dan menyiram tanaman. Menghemat air sangat penting untuk menjaga kelestarian alam.",
  },
  {
    title: "Jaga Keanekaragaman Hayati",
    desc: "Lindungi habitat alami dan pertahankan keanekaragaman hayati untuk keberlanjutan ekosistem kita.",
  },
  {
    title: "Berkendara Ramah Lingkungan",
    desc: "Gunakan transportasi umum, bersepeda, atau berjalan kaki untuk mengurangi emisi karbon yang berbahaya bagi lingkungan.",
  },
];

function Panduan() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [checked, setChecked] = useState(Array(tips.length).fill(false));

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const toggleCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <div className="panduan-container">
      <h2 className="panduan-title">🌿 Panduan Menjaga Lingkungan Hijau</h2>
      
      <div className="accordion-list">
        {tips.map((tip, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => toggleCheck(index)}
                  onClick={(e) => e.stopPropagation()}
                />
                <span className={`title ${checked[index] ? 'done' : ''}`}>
                  {checked[index] && <FaCheckCircle className="check-icon" />}
                  {tip.title}
                </span>
              </div>
              <span className="icon">
                {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div
              className={`accordion-content ${expandedIndex === index ? 'expanded' : ''}`}
            >
              <p>{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="video-section">
        <h3>🎬 Video Edukasi: Menjaga Lingkungan Hijau</h3>
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/xxAypUu7QBA"
            title="Menjaga Lingkungan Hijau"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Panduan;
