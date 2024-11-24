// src/components/FooterComponent.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css'; // Ensure this is imported

const FooterComponent = () => {
  return (
    <footer className="bg-success text-white py-4 rounded">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start">
            <h5>About Us</h5>
            <p>
              We provide quality education and strive to enhance our students' learning experience.
            </p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0 d-flex">
            <ul className="list-unstyled d-flex gap-3">
                <br/>
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com" className="text-white me-3">Facebook</a>
            <a href="https://www.twitter.com" className="text-white me-3">Twitter</a>
            <a href="https://www.instagram.com" className="text-white">Instagram</a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
