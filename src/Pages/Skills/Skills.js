import React from 'react'
import { Row, Col, ProgressBar } from 'react-bootstrap'
import { profileData } from '../../data'

const Skills = () => {
  return (
    <Row>
      {profileData.skills.map(skillData=>(
        <Col md={4} sm={12} className='my-2'>
         <h4>{skillData.name}</h4>
          <div>
          {skillData.skillSet.map(skill=>(
            <section className='my-2'>
             <span className='text-capitalize'>{skill.name}</span>
             <ProgressBar now={skill.rate} label={`${skill.rate}%`} className='border' variant='info' />
            </section>
          ))}
        </div>
        </Col>
      ))}
    </Row>
  )
}

export default Skills