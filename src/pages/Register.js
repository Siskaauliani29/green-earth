import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // pakai CSS login yang sama

function Register() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Simpan data pengguna ke localStorage
    const userData = { nama, email, password };
    localStorage.setItem("tanamin-user", JSON.stringify(userData));
    console.log("Register:", { nama, email, password });
    navigate("/login");
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
