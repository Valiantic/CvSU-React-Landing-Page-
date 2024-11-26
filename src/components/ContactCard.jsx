import React from 'react'
import { Card } from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap'

// USE MODULE IN INSERTING IMAFGES INSTEAD OF IMPORTING IMAGES VIA URL
import midwifery from '../assets/images/c1.png'
import strasuc from '../assets/images/c2.png'
import veterinarians from '../assets/images/c3.png'

const ContactCard = () => {

    // Data for the cards
  const cardData = [
    {
        title: "CvSU is 3rd top performing school in Midwifery board exam",
        description: "Cavite State University (CvSU) is the third top performing school with an overall passing rate of 96.61% (57 out of 59) in the November 2024 Licensure Examination for Midwives.",
        image: midwifery
      },
    {
        title: "CvSU ranks 3rd overall in STRASUC Olympics 2024",
        description: "Cavite State University (CvSU) Hornets emerged as third place overall in the 8th Southern Tagalog Regional Association of State Universities and Colleges (STRASUC) ",
        image: strasuc
      },
    {
        title: "CvSU produces 72 new licensed veterinarians",
        description: "Cavite State University (CvSU) produced 72 new licensed veterinarians in the October 2024 Veterinarians Licensure Examination.",
        image: veterinarians
    }
  ];

  return (
    // Container for the cards
        <Container fluid>
            {/* // Row for the cards */}
            <Row className="d-flex gap-3">

                {/* MAP THE DATA TO THE CARDS */}
                {cardData.map((card,index) => (

                  <Col className='d-flex'>
                    <Card>
                      <Card.Img variant="top" src={card.image}/>
                      <Card.Body>
                        <Card.Title>{card.title} </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                </Card>
            </Col>

                ))}

            </Row>

        </Container>
  )
}

export default ContactCard
