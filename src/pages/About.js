import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
          <h3>🎯 Visi</h3>
          <p>
            Menjadi wadah utama ide-ide hijau dari masyarakat demi kelestarian lingkungan dan teknologi ramah alam.
          </p>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <h3>🚀 Misi</h3>
          <p>
            Mendorong kolaborasi lintas sektor dalam menciptakan solusi lingkungan, mulai dari edukasi hingga implementasi nyata.
          </p>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="300">
          <h3>🤝 Komunitas</h3>
          <p>
            Didukung oleh relawan, inovator, dan individu yang peduli akan keberlanjutan ekosistem bumi.
          </p>
        </div>
      </section>

      <section className="about-team">
        <h2 data-aos="fade-up">👥 Tim Kami</h2>
        <div className="team-grid">
          <div className="team-member" data-aos="fade-up" data-aos-delay="100">
            <img src="https://i.pravatar.cc/120?img=12" alt="Siska Auliani" />
            <h4>Siska Auliani</h4>
            <p>Project Lead & Developer</p>
          </div>
          <div className="team-member" data-aos="fade-up" data-aos-delay="200">
            <img src="https://i.pravatar.cc/120?img=13" alt="Farah Nasywa" />
            <h4>Farah Nasywa</h4>
            <p>Designer & Researcher</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
