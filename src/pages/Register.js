import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // gunakan styling yang sama

const Register = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (nama && email && password) {
      const userData = { nama, email, password };
      localStorage.setItem("tanamin-user", JSON.stringify(userData));
      setSuccessMsg(`✅ Akun berhasil dibuat untuk ${nama}!`);
      setErrorMsg("");
      setNama(""); setEmail(""); setPassword("");

      // Optional: redirect otomatis ke halaman login setelah 2 detik
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setErrorMsg("⚠️ Semua data wajib diisi.");
      setSuccessMsg("");
    }
  };

  const backgroundStyle = {
    backgroundImage: "url('/assets/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="login-container" style={backgroundStyle}>
      <div className="login-overlay">
        <div className="form-section">
          <div className="brand">
            <h1>🌱 Green Earth</h1>
            <h2>Daftar Akun Baru</h2>
            <p>Yuk mulai bertanam dari sekarang!</p>
          </div>

          <div className="form-group">
            <label>Nama Lengkap</label>
            <input
              type="text"
              placeholder="Nama Anda"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="contoh@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {successMsg && <p style={{ color: "lightgreen" }}>{successMsg}</p>}
          {errorMsg && <p style={{ color: "salmon" }}>{errorMsg}</p>}

          <button className="signup-btn" onClick={handleRegister}>Daftar Sekarang</button>

          <p className="or-login" style={{ marginTop: "16px" }}>
            Sudah punya akun?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ color: "#fff", textDecoration: "underline", cursor: "pointer" }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
