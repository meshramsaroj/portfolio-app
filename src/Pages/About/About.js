import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { profileData } from '../../data'

const About = () => {
  return (
   <Row>
    <Col md={12} sm={12}>
    <p>Hi, I'm Saroj Meshram, a passionate React developer with 4.6 years of experience in crafting dynamic and user-friendly web applications. My expertise spans a broad range of technologies, including React, Redux, Next js, HTML, CSS, and JavaScript, among  
        <Link to={"/skills"} className='ms-1'>others</Link>.</p>
      <p>Throughout my career, I have taken the lead on over four projects, handling them single-handedly, and contributed to more than five others, collaborating effectively with diverse teams. This hands-on experience has honed my skills in building scalable and efficient solutions.</p>
      <p>When I’m not coding, you can find me indulging in my hobbies: listening to music, diving into a good book, or exploring new places through travel. I believe in a balanced life and constantly seek to blend creativity with technical prowess in all that I do.</p>

      <div>
      <h4 className='border-bottom border-info mt-5 pb-2'>Personal Details</h4>
      <section>
        <p><strong>Full Name: </strong> Saroj Gunwant Meshram</p>
        <p><strong>Current organization: </strong> {profileData.experience.experienceList[0].companyName}</p>
        <p><strong>Highest Education: </strong>{profileData.education.collageList[0].course}</p>
        <p><strong>Address: </strong> Nagpur</p>
        <p><strong>Email: </strong>sarojmeshram1911@gmail.com</p>
        <p><strong>Contact No: </strong>9284314534</p>
      </section>
      </div>
    </Col>
   </Row>
  )
}

export default About