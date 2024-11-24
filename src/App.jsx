import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavbarComponent'
import Card from './components/CardComponent'
import AboutImg from './components/AboutImg'
import ContactCard from './components/ContactCard'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Container fluid id="home" className='pt-5 mt-5 mb-7'>
        <Row className='justify-content-center'>
          <Col>
            <Card />
          </Col>
        </Row>
      </Container>
      <br/>
      <Container fluid id="about" className='pt-5 mt-5 mb-5'>
        <Row className='justify-content-center'>
          <Col xs={12} md={8} lg={6}>
            <AboutImg/>
          </Col>
        </Row>
      </Container>


      <Container fluid id="contact" className='pt-5 mt-5 mb-5'>
        <Row className='justify-content-center'>
          <Col xs={12} md={20} lg={20}>
            <ContactCard/>

          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App
