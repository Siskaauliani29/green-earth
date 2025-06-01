import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import IdeaForm from './pages/IdeaForm';
import Galeri from './pages/Galeri';
import Dashboard from './pages/Dashboard';
import Panduan from './pages/Panduan';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import TerimaKasih from './pages/TerimaKasih';
import DashboardRelawan from './pages/DashboardRelawan';
import DashboardDonatur from './pages/DashboardDonatur';
import JadwalKegiatan from './pages/JadwalKegiatan';
import './App.css';

function App() {
  const location = useLocation();

  // Halaman tanpa navbar
  const hideNavbarPaths = ['/login', '/register', '/admin'];
  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  // Ambil role dari localStorage, default ke "user"
  const currentUserRole = localStorage.getItem("userRole") || "user";

  return (
    <div className="app">
      {!hideNavbar && (
        <nav className="navbar">
          <h1>Green Earth</h1>
          <ul>
            <li><Link to="/home">Beranda</Link></li>
            <li><Link to="/panduan">Panduan</Link></li>
            <li><Link to="/about">Tentang Kami</Link></li>
            <li><Link to="/ide">Masukan Ide</Link></li>
            <li><Link to="/galeri">Galeri Hijau</Link></li>
          </ul>
        </nav>
      )}

      <div className="content">
        <Routes>
          {/* Redirect / ke /login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/ide"
            element={
              currentUserRole === "admin" || currentUserRole === "user"
                ? <IdeaForm role={currentUserRole} />
                : <Navigate to="/login" replace />
            }
          />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/panduan" element={<Panduan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terima-kasih" element={<TerimaKasih />} />
          <Route path="/dashboard-relawan" element={<DashboardRelawan />} />
          <Route path="/dashboard-donatur" element={<DashboardDonatur />} />
          <Route path="/jadwal" element={<JadwalKegiatan />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
