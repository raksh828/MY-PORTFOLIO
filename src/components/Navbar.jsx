import React from 'react';
import { Link } from 'react-scroll';
import { Container, Nav, Navbar } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Link to="home" className="nav-link" smooth={true} duration={500}>Home</Link>
            <Link to="about" className="nav-link" smooth={true} duration={500}>About</Link>
            <Link to="projects" className="nav-link" smooth={true} duration={500}>Projects</Link>
            <Link to="contact" className="nav-link" smooth={true} duration={500}>Contact</Link>
            <Link to="Experience" className="nav-link" smooth={true} duration={500}>Experience</Link>
            <a className="nav-link" href="/Rakshitha_Srinath_Resume.docx" download>Download Resume</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;