import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Ambil data pengguna dari localStorage
    const userData = JSON.parse(localStorage.getItem("tanamin-user"));
    if (
      (userData && email === userData.email && password === userData.password) ||
      (email === "admin@green.com" && password === "green123")
    ) {
      setErrorMsg("");
      navigate("/home");  // Arahkan ke halaman beranda setelah login sukses
    } else {
      setErrorMsg("Email atau password salah.");
    }
  };

  // Function untuk menangani login menggunakan sosial media
  const handleSocialLogin = (platform) => {
    switch (platform) {
      case "google":
        window.location.href = "https://accounts.google.com/signin";  // Arahkan ke Google login
        break;
      case "github":
        window.location.href = "https://github.com/login";  // Arahkan ke GitHub login
        break;
      case "facebook":
        window.location.href = "https://www.facebook.com/login";  // Arahkan ke Facebook login
        break;
      default:
        break;
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="username@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            <a className="forgot-password" href="#">Forgot Password?</a>
          </div>

          {errorMsg && <p className="error">{errorMsg}</p>}

          <button className="login-btn" onClick={handleLogin}>Login</button>

          <p className="continue-text">Or Continue With</p>
          <div className="social-icons">
            <img
              src="/google.png"
              alt="Google"
              onClick={() => handleSocialLogin("google")}
            />
            <img
              src="/github.png"
              alt="GitHub"
              onClick={() => handleSocialLogin("github")}
            />
            <img
              src="/facebook.png"
              alt="Facebook"
              onClick={() => handleSocialLogin("facebook")}
            />
          </div>

          <p className="register-text">
            Don’t have an account yet? <span onClick={() => navigate("/register")}>Register for free</span>
          </p>
        </div>

        <div className="login-image">
          <img src="/bebek.png" alt="Duck Character" />
        </div>
      </div>
    </div>
  );
};

export default Login;
