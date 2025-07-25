import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Type your message here..." required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;