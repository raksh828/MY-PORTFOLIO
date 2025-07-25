import React from "react"
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePic from "../assets/profile.jpg"; // Make sure this path is correct


export default function About() {
  return (
    <section id="about" className="py-5" data-aos="fade-right">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-3 mb-md-0">
            <Image
              src={profilePic}
              roundedCircle
              fluid
              style={{ maxWidth: '220px', border: '4px solid #6f42c1' }}
              alt="Rakshitha Srinath"
            />
          </Col>
          <Col md={8}>
            <p>
              Motivated MCA graduate with a strong foundation in computer science, web development, and programming. Passionate about building scalable, user-friendly applications and continuously learning new technologies in the software development ecosystem.
            </p>
            <p><strong>Skilled in:</strong></p>
            <ul>
              <li><strong>Front-end:</strong> HTML, CSS, JavaScript, React</li>
              <li><strong>Back-end:</strong> Node.js, Express.js</li>
              <li><strong>Databases:</strong> MySQL, MongoDB</li>
              <li><strong>Tools:</strong> Git, VS Code, Postman</li>
            </ul>
            <p>
              Currently seeking opportunities where I can contribute as a software developer and grow alongside a dynamic team. Strong problem-solving skills, a collaborative mindset, and a drive to stay updated with emerging tech trends.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

