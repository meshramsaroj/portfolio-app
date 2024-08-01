import React from 'react'
import { Row, Col, Card, Badge } from 'react-bootstrap'
import { profileData } from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Resume = () => {
  return (
    <>
    <Row className='my-3'>
      <Col md={6}>
      <h4 className='text-center mb-3'>{profileData.experience.title}</h4>
      {profileData.experience.experienceList.map((expDetail, index)=>(
        <div className='py-2 beforeStyle'>
        <FontAwesomeIcon icon={faBriefcase} className='beforeIcon' />
        <Card key={index} >
          <Card.Body>
            <h4>{expDetail.designation}</h4>
            <p>{expDetail.companyName} <span>({expDetail.duration})</span></p>
            <section><strong>Responsibilities:</strong>
            <ul>{expDetail.responsibility.map((data)=>(
              <li key={data}>{data}</li>
            ))}</ul>
            </section>
            <div><strong>Worked on Technologies:</strong>
              <section>
                {expDetail.technologies.map((tech)=> (
                  <Badge bg="info" text="dark" className='m-1' key={tech}>{tech}</Badge>
              ))}</section>
            </div>
          </Card.Body>
        </Card>
        </div>
      ))}
      </Col>
      <Col md={6}>
        <h4 className='text-center mb-3'>{profileData.education.title}</h4>
        {profileData.education.collageList.map((collageData, index)=>(
          <div className='py-2 beforeStyle'>
          <FontAwesomeIcon icon={faBriefcase} className='beforeIcon' />
          <Card key={index}>
            <Card.Body>
              <h4>{collageData.course}</h4>
              <p>{collageData.university} <span>({collageData.duration})</span></p>
              <p>Grade: {collageData.grade}</p>
            </Card.Body>
          </Card>
          </div>
        ))}
      </Col>
    </Row>
    </>
  )
}

export default Resume