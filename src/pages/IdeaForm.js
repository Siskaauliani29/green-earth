import React, { useState, useEffect } from 'react';
import './IdeaForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function IdeaForm() {
  const [nama, setNama] = useState('');
  const [ide, setIde] = useState('');
  const [listIde, setListIde] = useState([]);

  const handleDelete = (index) => {
    const updatedIdeas = [...listIde];
    updatedIdeas.splice(index, 1);
    setListIde(updatedIdeas);
    localStorage.setItem('greenIdeas', JSON.stringify(updatedIdeas));
    toast.info('Ide telah dihapus 🗑️');
  };

  const exportToTxt = () => {
    const content = listIde.map((item, i) => `${i + 1}. ${item.nama}: ${item.ide}`).join('\n');
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ide-hijau.txt';
    link.click();
    toast.success('Ide diexport sebagai TXT!');
  };

  const exportToCSV = () => {
    const header = 'No,Nama,Ide\n';
    const rows = listIde.map((item, i) => `${i + 1},"${item.nama}","${item.ide.replace(/"/g, '""')}"`).join('\n');
    const csvContent = header + rows;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ide-hijau.csv';
    link.click();
    toast.success('Ide diexport sebagai CSV!');
  };

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
      localStorage.setItem('greenIdeas', JSON.stringify(newIdeas));
      setNama('');
      setIde('');
      toast.success('Ide berhasil dikirim! 🌿');
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
                <li key={i} className="animated-idea">
                  <strong>{item.nama}</strong>: {item.ide}
                  <button className="delete-btn" onClick={() => handleDelete(i)}>Hapus</button>
                </li>
              ))}
            </ul>

            <div className="export-buttons">
              <button className="export-btn" onClick={exportToTxt}>📄 Export TXT</button>
              <button className="export-btn" onClick={exportToCSV}>📊 Export CSV</button>
            </div>
          </div>
        )}

        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}

export default IdeaForm;
