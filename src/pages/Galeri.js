import React, { useState, useEffect } from 'react';
import './Galeri.css';

const imageList = [
  {
    url: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
    title: 'Kebun Organik',
    tag: 'Pertanian',
    desc: 'Tanaman organik bebas pestisida yang ditanam secara alami.'
  },
  {
    url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80',
    title: 'Sawah Hijau',
    tag: 'Lahan',
    desc: 'Sawah luas subur dengan sistem irigasi tradisional.'
  },
  {
    url: 'https://images.unsplash.com/photo-1587049352840-59fdfc3ed716?auto=format&fit=crop&w=800&q=80',
    title: 'Perkebunan Teh',
    tag: 'Perkebunan',
    desc: 'Daun teh segar di pegunungan sejuk dan subur.'
  },
  {
    url: 'https://images.unsplash.com/photo-1615473911633-5911a6e1b6e5?auto=format&fit=crop&w=800&q=80',
    title: 'Petani dan Tanaman',
    tag: 'Petani',
    desc: 'Petani merawat tanaman dengan penuh dedikasi.'
  },
  {
    url: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80',
    title: 'Hutan Tropis',
    tag: 'Hutan',
    desc: 'Hutan tropis lebat dengan keanekaragaman hayati.'
  },
];

function Galeri() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [liked, setLiked] = useState({});

  // Load liked state from localStorage
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likedImages')) || {};
    setLiked(storedLikes);
  }, []);

  // Save liked state to localStorage
  useEffect(() => {
    localStorage.setItem('likedImages', JSON.stringify(liked));
  }, [liked]);

  const toggleLike = (index) => {
    setLiked(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="galeri-container">
      <h2 className="galeri-title">🌱 Galeri Hijau</h2>
      <div className="galeri-grid">
        {imageList.map((item, index) => (
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
              {liked[index] ? '❤️' : '🤍'}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for selected image */}
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
