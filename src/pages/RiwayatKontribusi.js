import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RiwayatKontribusi() {
  const location = useLocation();
  const navigate = useNavigate();
  const contributions = location.state?.contributions || [];

  return (
    <div>
      <h2>Riwayat Kontribusi</h2>
      {contributions.length === 0 ? (
        <p>Belum ada kontribusi tercatat.</p>
      ) : (
        <ul>
          {contributions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate(-1)}>Kembali</button>
    </div>
  );
}

export default RiwayatKontribusi;
