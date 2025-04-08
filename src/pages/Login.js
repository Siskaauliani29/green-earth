import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate(); // ✅ Gunakan navigate()
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem("tanamin-user"));

    if (
      (userData && email === userData.email && password === userData.password) ||
      (email === "admin@tanamin.com" && password === "tanamin123")
    ) {
      setErrorMsg("");
      navigate("/home"); // ✅ Redirect ke halaman beranda
    } else {
      setErrorMsg("Email atau password salah.");
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
            <h2>Aplikasi Panduan Menanam untuk Pemula</h2>
            <p>Selamat datang kembali, silakan login ke akun Anda</p>
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
  <div className="password-input">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="********"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <span
      className="eye-icon"
      onClick={() => setShowPassword((prev) => !prev)}
    >
      {showPassword ? "🙈" : "👁️"}
    </span>

            </div>
          </div>

          {errorMsg && <p style={{ color: "salmon" }}>{errorMsg}</p>}

          <div className="options">
            <label>
              <input type="checkbox" /> Ingat saya
            </label>
            <a href="#">Lupa password?</a>
          </div>

          <div className="buttons">
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
            <button className="signup-btn" onClick={() => navigate("/register")}>
              Daftar
            </button>
          </div>

          <p className="or-login">Atau login dengan</p>
          <div className="social-login">
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">Google</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
