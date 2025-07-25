import React, { useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio using React and Bootstrap.",
      github: "https://github.com/yourusername/portfolio"
    },
    {
      title: "Event Ticketing App",
      description: "React app for booking and managing event tickets.",
      github: "https://github.com/yourusername/event-app"
    },
    {
      title: "Sign Language AI",
      description: "AI-powered app for real-time sign detection.",
      github: "https://github.com/yourusername/sign-language-ai"
    }
  ];

  return (
    <section id="projects" className="bg-light">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projectList.map((project, index) => (
            <Col md={4} key={index} data-aos="fade-up">
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    variant="primary"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;