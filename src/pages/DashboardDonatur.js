import React from 'react';
import './DashboardDonatur.css';

function DashboardDonatur() {
  const accounts = [
    {
      bank: 'Bank Syariah Indonesia (BSI)',
      logo: '/bsi-logo.png',
      number: '7143 2212 9800',
      name: 'Siska Auliani',
      className: 'bsi-card',
    },
    {
      bank: 'Bank Aceh Syariah',
      logo: '/bankaceh.png',
      number: '0112 4567 8901',
      name: 'Farah Nasywa',
      className: 'bank-aceh-card',
    }
  ];

  const handleCopy = (number) => {
    // Membuat input field untuk menyalin nomor rekening
    const input = document.createElement('input');
    input.value = number;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy'); // Menyalin teks ke clipboard
    document.body.removeChild(input); // Menghapus input setelah menyalin
    alert('Nomor rekening telah disalin!');
  };

  return (
    <div className="dashboard-donatur">
      <h1>Selamat Datang, Donatur!</h1>
      <p className="intro-text">
        Setiap donasi Anda adalah harapan bagi mereka yang membutuhkan.
        Bersama kita bisa membuat perubahan kecil yang berarti. ❤️
      </p>
      <div className="card-container">
        {accounts.map((account, index) => (
          <div className={`bank-card ${account.className}`} key={index}>
            <div className="card-header">
              <img src={account.logo} alt={`${account.bank} Logo`} className="bank-logo" />
            </div>
            <div className="card-number">
              {account.number.slice(0, 4)} {account.number.slice(4, 8)} {account.number.slice(8, 12)} {account.number.slice(12)}
              <span className="copy-text" onClick={() => handleCopy(account.number)}>Copy</span>
            </div>
            <div className="card-footer">
              <div>
                <small>Card Holder</small>
                <div className="card-name">{account.name}</div>
              </div>
              <div>
                <small>Expires</small>
                <div className="card-expiry">03/26</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardDonatur;
