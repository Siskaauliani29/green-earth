import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import IdeaForm from './pages/IdeaForm'; // di bagian import
import Galeri from './pages/Galeri'; // import Galeri
import Dashboard from './pages/Dashboard';
import Panduan from './pages/Panduan';
import Register from "./pages/Register";
import Login from "./pages/Login"; // sesuaikan path folder kamu
import Signup from './pages/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1>Green Earth</h1>
          <ul>
            <li><Link to="/home">Beranda</Link></li>
            <li><Link to="/panduan">Panduan</Link></li>
            <li><Link to="/about">Tentang Kami</Link></li>
            <li><Link to="/ide">Masukan Ide</Link></li> {/* ← tambahkan ini */}
            <li><Link to="/galeri">Galeri Hijau</Link></li>

            <li><Link to="/signup"></Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ide" element={<IdeaForm />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/panduan" element={<Panduan />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
