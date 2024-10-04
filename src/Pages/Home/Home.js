import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import profileImg from "../../assets/profile-img.png"
import SocialMediaInfo from '../../Component/SocialMediaInfo/SocialMediaInfo'

const Home = () => {
 
  return (
    <Row>
      <Col md={4} sm={12}>
        <div className='mobileImgStyle'>
          <img src={profileImg} alt='saroj-meshram' width={"100%"} />
        </div>
      </Col>
      <Col md={8} sm={12}>
       <section className='landingText'>
        <TypeAnimation
          sequence={[
           "Hello, I'm Saroj Meshram, \na passionate web developer with 4.6+ years of experience in crafting dynamic and user-friendly web applications.", 
          ]}
          style={{ whiteSpace: 'pre-line', fontSize: '3em' }}
          speed={50}
          repeat={2}
        />
        <p className='mt-3 text-center'>Please click here to know more <Link to={"/about-me"}>About me</Link> and my <Link to={"/skills"}>Skills</Link></p>
       </section>
       <section className='text-center mt-4 mb-3'>
        <Link to={"/contact"}><Button className='m-2' variant='info'>Hire Me</Button></Link>
        <Link to="/files/saroj_meshram_resume.pdf" target="_blank" download>
          <Button className='m-2' variant='info'>Download Resume</Button>
        </Link>

       </section>
       <section className='text-center'>
          <SocialMediaInfo />
        </section>
      </Col>
    </Row>
  )
}

export default Home