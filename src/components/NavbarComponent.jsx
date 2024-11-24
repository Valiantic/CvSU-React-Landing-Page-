import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from '../assets/images/logo.png'


const NavbarComponent = () => {
  return (
    // MAKE THE NAVBAR FIXED ON TOP AND MAX WIDTH ON SCREEN 
    <Navbar bg="success" variant="dark" expand="lg" className="w-100" fixed="top">
        {/* FLUID HELPS THE NAVBAR TO BE FULL WIDTH */}
        <Container fluid>

            {/* LOGO AND NAVBAR BRAND */}
            <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
                <img
                    src={Logo}
                    width="45"
                    height="35"
                    className="d-inline-block align-top"
                    alt=" logo"
                />{' '}
                <span>Cavite State University</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            {/* MS AUTO FOR RIGHT ALIGNMENT */}
            <Nav className="ms-auto">
                <Nav.Link href="#home" className="text-end w-100">Home</Nav.Link>
                <Nav.Link href="#about" className="text-end w-100">About</Nav.Link>
                <Nav.Link href="#contact" className="text-end w-100">Contact</Nav.Link>
            </Nav>
            
            </Navbar.Collapse>
            </Container>
    </Navbar>
  )
}

export default NavbarComponent