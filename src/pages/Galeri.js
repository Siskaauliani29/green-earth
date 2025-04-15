import React, { useState, useEffect } from 'react';
import './Galeri.css';
import { Heart, HeartOff } from 'lucide-react';

const imageList = [
  {
    url: '/kebun.jpeg', // Gambar pertama
    title: 'Kebun Organik',
    tag: 'Pertanian',
    desc: 'Tanaman organik bebas pestisida.'
  },
  {
    url: '/sawah.jpeg', // Gambar kedua
    title: 'Sawah Hijau',
    tag: 'Lahan',
    desc: 'Sawah luas subur dengan sistem irigasi tradisional.'
  },
  {
    url: '/hutan.jpeg', // Gambar ketiga
    title: 'Hutan Tropis',
    tag: 'Hutan',
    desc: 'Hutan tropis lebat dengan keanekaragaman hayati.'
  },
  {
    url: '/perkebunan.jpeg', // Gambar keempat
    title: 'Perkebunan Teh',
    tag: 'Perkebunan',
    desc: 'Daun teh segar di pegunungan sejuk dan subur.'
  },
  {
    url: '/petani.jpeg', // Gambar kelima
    title: 'Petani dan Tanaman',
    tag: 'Petani',
    desc: 'Petani merawat tanaman dengan penuh dedikasi.'
  },
  {
    url: '/daun_teh.jpeg', // Gambar keenam
    title: 'Daun Teh Segar',
    tag: 'Perkebunan',
    desc: 'Daun teh segar yang siap dipetik.'
  },
  {
    url: '/sawah_subur.jpeg', // Gambar ketujuh
    title: 'Sawah Subur',
    tag: 'Pertanian',
    desc: 'Sawah yang subur dengan hasil panen melimpah.'
  },
  {
    url: '/hutan_hijau.jpeg', // Gambar kedelapan
    title: 'Hutan Hijau',
    tag: 'Alam',
    desc: 'Keindahan hutan tropis yang menyegarkan.'
  },
  {
    url: '/gunung_berkabut.jpeg', // Gambar kesembilan
    title: 'Gunung Berkabut',
    tag: 'Alam',
    desc: 'Keindahan gunung yang diselimuti kabut pagi.'
  },
  {
    url: '/petani_harvest.jpeg', // Gambar kesepuluh
    title: 'Petani Menuai Hasil',
    tag: 'Petani',
    desc: 'Petani yang sedang memanen hasil pertanian.'
  }
];



function Galeri() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [liked, setLiked] = useState({});
  const [filter, setFilter] = useState('Semua');

  const tags = ['Semua', ...new Set(imageList.map(item => item.tag))];

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likedImages')) || {};
    setLiked(storedLikes);
  }, []);

  useEffect(() => {
    localStorage.setItem('likedImages', JSON.stringify(liked));
  }, [liked]);

  const toggleLike = (index) => {
    setLiked(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredImages = filter === 'Semua'
    ? imageList
    : imageList.filter(item => item.tag === filter);

  return (
    <div className="galeri-container">
      <h2 className="galeri-title">🌱 Galeri Hijau</h2>

      <div className="filter-buttons">
        {tags.map(tag => (
          <button
            key={tag}
            className={`filter-btn ${filter === tag ? 'active' : ''}`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="galeri-grid">
        {filteredImages.map((item, index) => (
          <div className="galeri-item fade-in" key={index}>
            <div className="image-wrapper" onClick={() => setSelectedImage(item)}>
              <span className="tag">{item.tag}</span>
              <img src={item.url} alt={item.title} />
              <div className="overlay">
                <p>{item.title}</p>
                <span className="short-desc">{item.desc}</span>
              </div>
            </div>
            <div className="like-button" onClick={() => toggleLike(index)}>
              {liked[index] ? <Heart fill="red" color="red" /> : <Heart />}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage.url} alt={selectedImage.title} />
          <div className="caption">
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Galeri;
