import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role) {
      alert("Semua field harus diisi!");
      return;
    }

    // Simpan role dan data lain ke localStorage (jika diperlukan)
    localStorage.setItem("signupRole", formData.role);
    localStorage.setItem("signupName", formData.name);

    // Arahkan ke halaman Terima Kasih
    navigate('/terima-kasih');
  };

  return (
    <div className="signup-wrapper">
      <h1 className="signup-title">Bergabung dengan Kami</h1>
      <p className="description">Isi formulir di bawah untuk menjadi bagian dari kami sebagai Relawan atau Donatur.</p>

      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Masukkan nama lengkap"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Masukkan email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Pilih Peran</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Pilih Peran</option>
            <option value="Relawan">Relawan</option>
            <option value="Donatur">Donatur</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Daftar</button>
      </form>
    </div>
  );
}

export default Signup;
