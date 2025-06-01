import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardRelawan.css';

function DashboardRelawan() {
  const navigate = useNavigate();
  const [role] = useState(localStorage.getItem('role') || '');
  const isAdmin = role === 'admin';

  // Redirect relawan ke halaman donatur
  useEffect(() => {
    if (role === 'relawan') {
      navigate('/dashboard-relawan'); // <-- Ganti sesuai route donatur
    }
  }, [role, navigate]);

  const defaultActivities = [
    {
      title: 'Penanaman Mangrove',
      date: '2025-05-21',
      status: 'berlangsung',
      waLink: 'https://wa.me/6282280864950?text=Halo%2C%20saya%20ingin%20bergabung%20dengan%20Penanaman%20Mangrove'
    },
    {
      title: 'Bergabung dengan Pandawara',
      date: '2025-05-25',
      status: 'berlangsung',
      waLink: 'https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20bergabung%20dengan%20Pandawara'
    },
    {
      title: 'Kelas Edukasi Lingkungan',
      date: '2025-06-02',
      status: 'belum',
      waLink: 'https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20bergabung%20dengan%20Kelas%20Edukasi%20Lingkungan'
    }
  ];

  const [newActivity, setNewActivity] = useState({
    title: '',
    date: '',
    status: 'belum',
    waLink: ''
  });

  const [allActivities, setAllActivities] = useState(() => {
    const saved = localStorage.getItem('allActivities');
    return saved ? JSON.parse(saved) : defaultActivities;
  });

  useEffect(() => {
    localStorage.setItem('allActivities', JSON.stringify(allActivities));
  }, [allActivities]);

  const handleJoin = (title) => {
    const existing = JSON.parse(localStorage.getItem('kontribusi')) || [];
    if (!existing.includes(title)) {
      const updated = [...existing, title];
      localStorage.setItem('kontribusi', JSON.stringify(updated));
    }
  };

  const handleAddActivity = () => {
    if (!newActivity.title || !newActivity.date || !newActivity.waLink) {
      alert('Mohon lengkapi semua data kegiatan.');
      return;
    }

    const updated = [...allActivities, newActivity];
    setAllActivities(updated);
    setNewActivity({
      title: '',
      date: '',
      status: 'belum',
      waLink: ''
    });
  };

  if (!role) {
    return (
      <div className="dashboard-relawan">
        <h2>Anda belum login</h2>
        <p>Silakan login terlebih dahulu untuk mengakses dashboard.</p>
      </div>
    );
  }

  return (
    <div className="dashboard-relawan">
      <h1>Selamat Datang, {isAdmin ? 'Admin' : 'Relawan'}!</h1>
      <p>Terima kasih telah bergabung. Mari mulai berkontribusi untuk kebaikan bersama.</p>

      {/* Statistik */}
      <div className="info-cards">
        <div className="card">📆 <strong>{allActivities.length}</strong> Kegiatan Tersedia</div>
      </div>

      {/* Form Tambah Kegiatan – Khusus Admin */}
      {isAdmin && (
        <>
          <h2>Tambah Kegiatan Baru</h2>
          <div className="form-tambah-kegiatan">
            <input
              type="text"
              placeholder="Judul Kegiatan"
              value={newActivity.title}
              onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
            />
            <input
              type="date"
              value={newActivity.date}
              onChange={(e) => setNewActivity({ ...newActivity, date: e.target.value })}
            />
            <select
              value={newActivity.status}
              onChange={(e) => setNewActivity({ ...newActivity, status: e.target.value })}
            >
              <option value="berlangsung">Berlangsung</option>
              <option value="belum">Belum</option>
            </select>
            <input
              type="text"
              placeholder="Link WhatsApp"
              value={newActivity.waLink}
              onChange={(e) => setNewActivity({ ...newActivity, waLink: e.target.value })}
            />
            <button onClick={handleAddActivity}>Tambah</button>
          </div>
        </>
      )}

      {/* Daftar Kegiatan */}
      <h2>Kegiatan Terbaru</h2>
      <ul className="activity-list">
        {allActivities.map((activity, index) => (
          <li key={index}>
            <div>
              <strong>{activity.title}</strong> – {activity.date}
            </div>
            <a
              href={activity.waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleJoin(activity.title)}
            >
              <button>Bergabung via WhatsApp</button>
            </a>
          </li>
        ))}
      </ul>

      {/* Kutipan */}
      <blockquote className="quote">
        "Menjadi relawan adalah cara kecil untuk memberi dampak besar."
      </blockquote>

    
      
    </div>
  );
}

export default DashboardRelawan;
