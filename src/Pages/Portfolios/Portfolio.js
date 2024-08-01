import React from 'react'
import { Badge, Button, ButtonGroup, Card, Col, Row } from 'react-bootstrap'
import { profileData } from '../../data'

const Portfolio = () => {
  return (
    <>
     {/* <ButtonGroup size="lg" className="mb-2">
        <Button>All</Button>
        <Button>React</Button>
        <Button>Next</Button>
        <Button>Angular</Button>
        <Button>Fullstack</Button>
      </ButtonGroup> */}
      <Row>
        {profileData.projects.map(project=> (
        project.projectTitle && <Col md={4} sm={12} className='p-2'>
          <Card className='projectCards'>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center '>
              <span>{project.projectTitle}</span>
              <a href={project.url} target='_blank'><Button variant='info' className='my-2 text-white'>Visit Url</Button></a>
              <p>{project.technologies.map(tech=>
                  <Badge bg="light" text="dark" className='m-1' key={tech}>{tech}</Badge>
              )}</p>
            </Card.Body>
          </Card>
        </Col>

        ))}
      </Row>
    </>
  )
}

export default Portfolio