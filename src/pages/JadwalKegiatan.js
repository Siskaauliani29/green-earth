import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JadwalKegiatan.css';
function JadwalKegiatan() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Jadwal Kegiatan</h2>
      <ul>
        <li>21 Mei - Donor Darah Komunitas</li>
        <li>25 Mei - Bakti Sosial Ramadan</li>
        <li>2 Juni - Kelas Edukasi Lingkungan</li>
      </ul>
      <button onClick={() => navigate(-1)}>Kembali</button>
    </div>
  );
}

export default JadwalKegiatan;
