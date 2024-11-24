import React from 'react'
import Image from 'react-bootstrap/Image';
import Abtimg from '../assets/images/highlight.png'
import { Container, Row, Col } from 'react-bootstrap';


const AboutImg = () => {
    return (
    <Container id="about" className='relative-section'>
         <Image src={Abtimg} fluid />
            <Row>
                <Col className="pamagat text-white fs-1">
                 Champions in the Making
                </Col>
            </Row>
    </Container>
    )
}

export default AboutImg
