import React from 'react';
import { Container } from 'react-bootstrap';

const Experience = () => {
  return (
    <section id="experience" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="text-center mb-4">Experience</h2>
        <div className="mb-4">
          <h5><strong>
          Scontinent Technologies Pvt Ltd</strong></h5>
          <h4>Full Stack Developmont Intern</h4>
          <p className="mb-1"><i>jul 2024 – oct 2024</i></p>
          <ul>
            <li>Developed and maintained web applications using front-end technologies such as HTML, CSS, JavaScript, and ReactJS</li>
            <li>Gained expertise in back-end systems, including MySQL and MongoDB databases, and worked with web servers like Apache</li>
            <li>Enhanced teamwork and communication skills while contributing to dynamic projects

</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Experience;