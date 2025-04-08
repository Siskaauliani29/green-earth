import React, { useState, useEffect } from 'react';
import './IdeaForm.css';

function IdeaForm() {
  const [nama, setNama] = useState('');
  const [ide, setIde] = useState('');
  const [listIde, setListIde] = useState([]);

  // Load ide dari localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const savedIdeas = localStorage.getItem('greenIdeas');
    if (savedIdeas) {
      setListIde(JSON.parse(savedIdeas));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nama && ide) {
      const newIdeas = [...listIde, { nama, ide }];
      setListIde(newIdeas);
      localStorage.setItem('greenIdeas', JSON.stringify(newIdeas)); // Simpan ke localStorage
      setNama('');
      setIde('');
    }
  };

  return (
    <div className="container">
      <div className="left">
        <h2>Let’s discuss<br />on something <span className="highlight">green</span><br />together</h2>
        <p>🌿 contact@greenideas.com</p>
        <p>📞 +62 812 3456 7890</p>
        <p>📍 Jl. Tanaman Hijau No. 123</p>
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>

      <div className="right">
        <form onSubmit={handleSubmit}>
          <label>Nama</label>
          <input
            type="text"
            placeholder="Masukkan nama kamu"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
          <label>Ide Pelestarian</label>
          <textarea
            placeholder="Tulis ide kamu..."
            value={ide}
            onChange={(e) => setIde(e.target.value)}
            required
          ></textarea>
          <button type="submit">🌱 Kirim Ide</button>
        </form>

        {listIde.length > 0 && (
          <div className="list-ide">
            <h3>🌿 Daftar Ide Hijau</h3>
            <ul>
              {listIde.map((item, i) => (
                <li key={i}><strong>{item.nama}</strong>: {item.ide}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default IdeaForm;
