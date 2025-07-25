import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#6f42c1' }} className="text-white text-center py-4">
      <Container>
        <p className="mb-2">
          <i className="bi bi-envelope-fill me-2"></i>
          <a 
            href="mailto:rakshithasrinath1@gmail.com" 
            className="text-white text-decoration-none"
          >
            rakshithasrinath1@gmail.com
          </a>
        </p>
        <p className="mb-0">
          <i className="bi bi-linkedin me-2"></i>
          <a 
            href="https://www.linkedin.com/in/rakshitha-srinath-394321189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-decoration-none"
          >
            LinkedIn Profile
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;