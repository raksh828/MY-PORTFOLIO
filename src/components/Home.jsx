import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="home" className="d-flex align-items-center" style={{ minHeight: '100vh', backgroundColor: '#eaddff' }}>
      <Container>
        <div data-aos="fade-right">
          <h1>Hello, I'm <span style={{ color: '#7209b7' }}>Rakshitha S</span></h1>
          <p className="lead">I'm a React Developer who builds responsive and modern web apps.</p>
        </div>
      </Container>
    </section>
  );
};

export default Home;