import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'; // Impor Link untuk routing

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-wrapper">
      <section className="about-hero">
        <div className="text" data-aos="fade-right">
          <h1>🌿 Green Earth</h1>
          <p>
            Sebuah gerakan hijau untuk membangun masa depan bumi yang lestari. Kami menggabungkan <strong>teknologi</strong>, <strong>komunitas</strong>, dan <strong>ide kreatif</strong> dalam pertanian dan perkebunan berkelanjutan.
          </p>
        </div>
        <div className="image" data-aos="fade-left">
          <img
            src="/assets/undraw_environment_9luj.svg"
            alt="Ilustrasi Green Earth"
            className="animated-illustration"
          />
        </div>
      </section>

      <section className="about-grid">
        <div className="card" data-aos="fade-up" data-aos-delay="100">
          <h4>🎯 Visi</h4>
          <p1>
            Menjadi wadah utama ide-ide hijau dari masyarakat demi kelestarian lingkungan dan teknologi ramah alam.
          </p1>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <h4>🚀 Misi</h4>
          <p2>
            Mendorong kolaborasi lintas sektor dalam menciptakan solusi lingkungan, mulai dari edukasi hingga implementasi nyata.
          </p2>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="300">
          <h4>🤝 Komunitas</h4>
          <p3>
            Didukung oleh relawan, inovator, dan individu yang peduli akan keberlanjutan ekosistem bumi.
          </p3>
        </div>
      </section>

      <section className="about-team">
        <h2 data-aos="fade-up">👥 Tim Kami</h2>
        <div className="team-grid">
          <div className="team-member" data-aos="fade-up" data-aos-delay="100">
          <img src="/siska.jpg"  alt="Siska Auliani" />
            <h4>Siska Auliani</h4>
            <p>Project Lead & Developer</p>
          </div>
          <div className="team-member" data-aos="fade-up" data-aos-delay="200">
            <img src="/kendal.jpg" alt="Farah Nasywa" />
            <h4>Farah Nasywa</h4>
            <p>Designer & Researcher</p>
          </div>
        </div>
      </section>

      {/* Tombol Bergabung dengan Kami */}
      <section className="about-join">
        <Link to="/signup">
          <button className="join-button">Bergabung dengan Kami</button>
        </Link>
      </section>
    </div>
  );
}

export default About;
