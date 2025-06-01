import React, { useState, useEffect } from 'react';
import './Galeri.css';
import { Heart } from 'lucide-react';

// Daftar gambar awal
const initialImages = [
  {
    url: '/kebun.jpeg',
    title: 'Kebun Organik',
    tag: 'Pertanian',
    desc: 'Tanaman organik bebas pestisida.'
  },
  {
    url: '/sawah.jpeg',
    title: 'Sawah Hijau',
    tag: 'Lahan',
    desc: 'Sawah luas subur dengan sistem irigasi tradisional.'
  },
  {
    url: '/hutan.jpeg',
    title: 'Hutan Tropis',
    tag: 'Hutan',
    desc: 'Hutan tropis lebat dengan keanekaragaman hayati.'
  },
  {
    url: '/perkebunan.jpeg',
    title: 'Perkebunan Teh',
    tag: 'Perkebunan',
    desc: 'Daun teh segar di pegunungan sejuk dan subur.'
  },
  {
    url: '/petani.jpeg',
    title: 'Petani dan Tanaman',
    tag: 'Petani',
    desc: 'Petani merawat tanaman dengan penuh dedikasi.'
  },
  {
    url: '/daun_teh.jpeg',
    title: 'Daun Teh Segar',
    tag: 'Perkebunan',
    desc: 'Daun teh segar yang siap dipetik.'
  },
  {
    url: '/sawah_subur.jpeg',
    title: 'Sawah Subur',
    tag: 'Pertanian',
    desc: 'Sawah yang subur dengan hasil panen melimpah.'
  },
  {
    url: '/hutan_hijau.jpeg',
    title: 'Hutan Hijau',
    tag: 'Alam',
    desc: 'Keindahan hutan tropis yang menyegarkan.'
  },
  {
    url: '/gunung_berkabut.jpeg',
    title: 'Gunung Berkabut',
    tag: 'Alam',
    desc: 'Keindahan gunung yang diselimuti kabut pagi.'
  },
  {
    url: '/petani_harvest.jpeg',
    title: 'Petani Menuai Hasil',
    tag: 'Petani',
    desc: 'Petani yang sedang memanen hasil pertanian.'
  }
];

function Galeri() {
  const [images, setImages] = useState(initialImages);
  const [selectedImage, setSelectedImage] = useState(null);
  const [liked, setLiked] = useState({});
  const [filter, setFilter] = useState('Semua');
  const [role, setRole] = useState('user');
  const [newImage, setNewImage] = useState({ url: '', title: '', tag: '', desc: '' });

  useEffect(() => {
    const isAdmin = localStorage.getItem('tanamin-isAdmin') === 'true';
    setRole(isAdmin ? 'admin' : 'user');

    const storedLikes = JSON.parse(localStorage.getItem('likedImages')) || {};
    setLiked(storedLikes);
  }, []);

  useEffect(() => {
    localStorage.setItem('likedImages', JSON.stringify(liked));
  }, [liked]);

  const tags = ['Semua', ...new Set(images.map(item => item.tag))];

  const toggleLike = (index) => {
    setLiked(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredImages = filter === 'Semua'
    ? images
    : images.filter(item => item.tag === filter);

  const handleAddImage = (e) => {
    e.preventDefault();
    if (newImage.url && newImage.title && newImage.tag && newImage.desc) {
      setImages(prev => [...prev, newImage]);
      setNewImage({ url: '', title: '', tag: '', desc: '' });
    }
  };

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

      {/* Form untuk Admin Menambahkan Gambar */}
      {role === 'admin' && (
        <div className="add-image-form">
          <h3>Tambah Gambar Baru</h3>
          <form onSubmit={handleAddImage}>
            <input
              type="text"
              placeholder="URL Gambar"
              value={newImage.url}
              onChange={(e) => setNewImage({ ...newImage, url: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Judul"
              value={newImage.title}
              onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Tag"
              value={newImage.tag}
              onChange={(e) => setNewImage({ ...newImage, tag: e.target.value })}
              required
            />
            <textarea
              placeholder="Deskripsi"
              value={newImage.desc}
              onChange={(e) => setNewImage({ ...newImage, desc: e.target.value })}
              required
            ></textarea>
            <button type="submit">Tambah Gambar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Galeri;
