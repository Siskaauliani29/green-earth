import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Register() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!nama || !email || !password) {
      alert("Semua data harus diisi");
      return;
    }

    try {
      const response = await fetch("http://localhost:5050/register", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nama,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Pendaftaran berhasil!");
        navigate("/login");
      } else {
        alert(`Gagal: ${data.message}`);
      }
    } catch (error) {
      alert("Terjadi kesalahan koneksi ke server");
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>Buat Akun Baru</h2>
          <p className="continue-text">Yuk mulai bertanam dari sekarang!</p>

          <div className="form-group">
            <label>Nama Lengkap</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group password-input">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-btn" onClick={handleRegister}>
            Daftar Sekarang
          </button>

          <p className="register-text">
            Sudah punya akun?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </div>

        <div className="login-image">
          <img src="/bebek.png" alt="maskot" />
        </div>
      </div>
    </div>
  );
}

export default Register;
