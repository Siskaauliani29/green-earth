import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TerimaKasih.css';

function TerimaKasih() {
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const savedRole = localStorage.getItem('signupRole');
    const savedName = localStorage.getItem('signupName');
    setRole(savedRole);
    setName(savedName);
  }, []);

  const handleLanjut = () => {
    if (role === 'Relawan') {
      navigate('/dashboard-relawan');
    } else if (role === 'Donatur') {
      navigate('/dashboard-donatur');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="thankyou-page">
      <h1>Terima Kasih, {name}!</h1>
      <p>Terima kasih telah mendaftar sebagai <strong>{role}</strong>.</p>
      <button onClick={handleLanjut}>Lanjut ke Dashboard</button>
    </div>
  );
}

export default TerimaKasih;
